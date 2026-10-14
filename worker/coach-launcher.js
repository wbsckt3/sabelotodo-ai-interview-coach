const ID_PATTERN = /^[a-z0-9-]{8,40}$/;
const LANGS = new Set(['es', 'en', 'fr']);
const STARTING_TIMEOUT_MS = 8 * 60 * 1000;

function intVar(value, fallback) {
  const n = Number.parseInt(value, 10);
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

function allowedOrigin(request, env) {
  const origin = request.headers.get('Origin') || '';
  const allowed = String(env.ALLOWED_ORIGINS || 'https://wbsckt3.github.io')
    .split(',').map((item) => item.trim()).filter(Boolean);
  return allowed.includes(origin) ? origin : '';
}

function json(request, env, status, data) {
  const headers = { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' };
  const origin = allowedOrigin(request, env);
  if (origin) {
    headers['Access-Control-Allow-Origin'] = origin;
    headers.Vary = 'Origin';
  }
  return new Response(JSON.stringify(data), { status, headers });
}

async function readSession(env, id) {
  return env.SESSIONS.get(`s:${id}`, 'json');
}

async function writeSession(env, id, session) {
  const ttl = Math.max(600, session.minutes * 60 + 1800);
  await env.SESSIONS.put(`s:${id}`, JSON.stringify(session), {
    expirationTtl: ttl,
    metadata: { status: session.status, until: session.until || '', createdAt: session.createdAt },
  });
}

function isActive(meta, now) {
  if (!meta) return false;
  if (meta.status === 'starting') return now - Date.parse(meta.createdAt) < STARTING_TIMEOUT_MS;
  if (meta.status === 'ready') return !meta.until || Date.parse(meta.until) > now;
  return false;
}

async function countActive(env) {
  const now = Date.now();
  let active = 0;
  let cursor;
  do {
    const page = await env.SESSIONS.list({ prefix: 's:', cursor });
    for (const key of page.keys) if (isActive(key.metadata, now)) active += 1;
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);
  return active;
}

async function dispatchWorkflow(env, id, minutes) {
  if (!env.GITHUB_TOKEN) throw new Error('Falta el secreto GITHUB_TOKEN en el Worker.');
  const repo = env.GITHUB_REPO || 'wbsckt3/sabelotodo-ai-interview-coach';
  const workflow = env.WORKFLOW_FILE || 'coach-server.yml';
  const response = await fetch(`https://api.github.com/repos/${repo}/actions/workflows/${workflow}/dispatches`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${env.GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'X-GitHub-Api-Version': '2022-11-28',
      'User-Agent': 'sabelotodo-coach-launcher',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ref: env.GITHUB_REF || 'main', inputs: { minutes: String(minutes), session: id } }),
  });
  if (response.status !== 204) {
    const detail = await response.text().catch(() => '');
    throw new Error(`GitHub respondió ${response.status}: ${detail.slice(0, 200)}`);
  }
}

async function createSession(request, env) {
  if (!allowedOrigin(request, env)) return json(request, env, 403, { error: 'Origen no permitido.' });
  let body = {};
  try { body = await request.json(); } catch { /* cuerpo vacío */ }
  const minutes = Math.min(180, Math.max(5, intVar(body.minutes, 60)));
  const lang = LANGS.has(body.lang) ? body.lang : 'en';
  const type = typeof body.type === 'string' ? body.type.slice(0, 60) : '';

  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const hourKey = `ip:${ip}:${new Date().toISOString().slice(0, 13)}`;
  const used = intVar(await env.SESSIONS.get(hourKey), 0);
  if (used >= intVar(env.MAX_PER_IP_HOUR, 3)) {
    return json(request, env, 429, { error: 'Ya iniciaste varias clases en la última hora. Intenta más tarde.' });
  }
  if (await countActive(env) >= intVar(env.MAX_ACTIVE, 3)) {
    return json(request, env, 503, { error: 'Todas las aulas están ocupadas. Intenta en unos minutos.' });
  }

  const id = crypto.randomUUID();
  const session = { status: 'starting', minutes, lang, type, createdAt: new Date().toISOString(), api: '', until: '' };
  await writeSession(env, id, session);
  try {
    await dispatchWorkflow(env, id, minutes);
  } catch (error) {
    await writeSession(env, id, { ...session, status: 'failed', error: error.message });
    return json(request, env, 502, { error: 'No se pudo encender el servidor del coach.', detail: error.message });
  }
  await env.SESSIONS.put(hourKey, String(used + 1), { expirationTtl: 3700 });
  return json(request, env, 201, { id, status: 'starting', minutes });
}

async function getSession(request, env, id) {
  const session = await readSession(env, id);
  if (!session) return json(request, env, 404, { error: 'La sesión no existe o ya expiró.' });
  const now = Date.now();
  let status = session.status;
  if (status === 'starting' && now - Date.parse(session.createdAt) >= STARTING_TIMEOUT_MS) status = 'failed';
  if (status === 'ready' && session.until && Date.parse(session.until) <= now) status = 'ended';
  return json(request, env, 200, {
    id,
    status,
    api: status === 'ready' ? session.api : '',
    until: session.until || '',
    minutes: session.minutes,
    createdAt: session.createdAt,
  });
}

function callbackAuthorized(request, env) {
  const expected = env.CALLBACK_SECRET || '';
  const header = request.headers.get('Authorization') || '';
  return Boolean(expected) && header === `Bearer ${expected}`;
}

async function updateFromWorkflow(request, env, id, action) {
  if (!callbackAuthorized(request, env)) return json(request, env, 401, { error: 'No autorizado.' });
  const session = await readSession(env, id);
  if (!session) return json(request, env, 404, { error: 'La sesión no existe.' });
  let body = {};
  try { body = await request.json(); } catch { /* cuerpo vacío */ }
  if (action === 'ready') {
    const api = typeof body.api === 'string' && /^https:\/\/[-a-z0-9]+\.trycloudflare\.com$/.test(body.api) ? body.api : '';
    if (!api) return json(request, env, 400, { error: 'Dirección de túnel inválida.' });
    const until = Number.isFinite(Date.parse(body.until)) ? body.until : '';
    await writeSession(env, id, { ...session, status: 'ready', api, until });
  } else {
    await writeSession(env, id, { ...session, status: body.failed ? 'failed' : 'ended', api: '' });
  }
  return json(request, env, 200, { ok: true });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') {
      const origin = allowedOrigin(request, env);
      if (!origin) return new Response(null, { status: 403 });
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': origin,
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Max-Age': '86400',
          Vary: 'Origin',
        },
      });
    }
    if (request.method === 'GET' && url.pathname === '/health') {
      return json(request, env, 200, {
        ok: true,
        githubToken: Boolean(env.GITHUB_TOKEN),
        callbackSecret: Boolean(env.CALLBACK_SECRET),
        sessionsKv: Boolean(env.SESSIONS),
      });
    }
    if (request.method === 'POST' && url.pathname === '/sessions') return createSession(request, env);
    const match = url.pathname.match(/^\/sessions\/([^/]+)(?:\/(ready|end))?$/);
    if (match && ID_PATTERN.test(match[1])) {
      if (request.method === 'GET' && !match[2]) return getSession(request, env, match[1]);
      if (request.method === 'POST' && match[2]) return updateFromWorkflow(request, env, match[1], match[2]);
    }
    return json(request, env, 404, { error: 'Ruta no encontrada.' });
  },
};
