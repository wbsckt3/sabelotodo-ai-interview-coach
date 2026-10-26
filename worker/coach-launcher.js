const ID_PATTERN = /^[a-z0-9-]{8,40}$/;
const LANGS = new Set(['es', 'en', 'fr']);
const STARTING_TIMEOUT_MS = 8 * 60 * 1000;
const HISTORY_TTL_SECONDS = 14 * 24 * 3600;

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
  const classTtl = Math.max(600, ((session.minutes || 60) + (session.holdMinutes || 0)) * 60 + 1800);
  await env.SESSIONS.put(`s:${id}`, JSON.stringify(session), {
    expirationTtl: Math.max(classTtl, HISTORY_TTL_SECONDS),
    metadata: {
      status: session.status,
      until: session.until || '',
      createdAt: session.createdAt || '',
      minutes: session.minutes || 0,
      type: session.type || '',
      lang: session.lang || '',
    },
  });
}

/**
 * Estado visible de una sesión. Las del plan Free (claim) tienen dos relojes: la ventana de espera
 * (holdUntil, desde que el servidor está listo hasta que la persona entra) y la sesión (until, que
 * solo empieza a correr cuando la persona la reclama). Las pagadas conservan el reloj de siempre.
 */
function liveStatus(meta, now) {
  const status = meta?.status || '';
  if (status === 'starting') return now - Date.parse(meta.createdAt) >= STARTING_TIMEOUT_MS ? 'failed' : 'starting';
  if (status !== 'ready') return status;
  if (meta.claim && !meta.claimedAt) return Date.parse(meta.holdUntil) > now ? 'ready' : 'expired';
  if (meta.until && Date.parse(meta.until) <= now) return 'ended';
  return 'ready';
}

function isActive(meta, now) {
  if (!meta) return false;
  const status = liveStatus(meta, now);
  return status === 'starting' || status === 'ready';
}

const CLASS_INDEX_KEY = 'idx:classes';
const CLASS_INDEX_LIMIT = 40;

async function readClassIndex(env) {
  const rows = await env.SESSIONS.get(CLASS_INDEX_KEY, 'json');
  return Array.isArray(rows) ? rows : [];
}

async function writeClassIndex(env, rows) {
  const trimmed = rows
    .filter((row) => row && row.id)
    .sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)))
    .slice(0, CLASS_INDEX_LIMIT);
  await env.SESSIONS.put(CLASS_INDEX_KEY, JSON.stringify(trimmed));
}

function classIndexRow(id, session) {
  return {
    id,
    status: session.status || '',
    until: session.until || '',
    createdAt: session.createdAt || '',
    minutes: session.minutes || 0,
    type: session.type || '',
    lang: session.lang || '',
    visitor: session.visitor || '',
    plan: session.plan || '',
    email: session.email || '',
    claim: Boolean(session.claim),
    claimedAt: session.claimedAt || '',
    holdUntil: session.holdUntil || '',
  };
}

async function rememberClass(env, id, session) {
  const rows = await readClassIndex(env);
  const next = classIndexRow(id, session);
  const index = rows.findIndex((row) => row.id === id);
  if (index >= 0) rows[index] = next;
  else rows.push(next);
  await writeClassIndex(env, rows);
}

async function countActive(env) {
  const now = Date.now();
  const rows = await readClassIndex(env);
  return rows.reduce((active, row) => active + (isActive(row, now) ? 1 : 0), 0);
}

async function dispatchWorkflow(env, id, minutes, hold = 0) {
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
    body: JSON.stringify({ ref: env.GITHUB_REF || 'main', inputs: { minutes: String(minutes), session: id, hold: String(hold) } }),
  });
  if (response.status !== 204) {
    const detail = await response.text().catch(() => '');
    throw new Error(`GitHub respondió ${response.status}: ${detail.slice(0, 200)}`);
  }
}

async function readQuota(request, env) {
  const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
  const now = new Date();
  const hourKey = `ip:${ip}:${now.toISOString().slice(0, 13)}`;
  const used = intVar(await env.SESSIONS.get(hourKey), 0);
  const limit = intVar(env.MAX_PER_IP_HOUR, 3);
  const reset = new Date(now);
  reset.setUTCMinutes(60, 0, 0);
  return { hourKey, used, limit, resetAt: reset.toISOString() };
}

function quotaView(quota, used, freeUsed) {
  const remaining = freeUsed ? 0 : Math.max(0, quota.limit - used);
  return { used, limit: quota.limit, remaining, resetAt: quota.resetAt, freeUsed: Boolean(freeUsed) };
}

const FREE_TTL = 365 * 24 * 3600;

const GOOGLE_CLIENT_ID = '980822676255-vntch0t28qbesul2bp5oc1galtoi8a97.apps.googleusercontent.com';

/** Valida con Google el token con que la persona entró a la landing y devuelve su Gmail ('' si no es válido). */
async function verifyGoogle(env, idToken) {
  if (typeof idToken !== 'string' || !idToken || idToken.length > 4096) return '';
  try {
    const response = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(idToken)}`);
    if (!response.ok) return '';
    const info = await response.json();
    if (info.aud !== (env.GOOGLE_CLIENT_ID || GOOGLE_CLIENT_ID)) return '';
    if (String(info.email_verified) !== 'true' || Number(info.exp) * 1000 <= Date.now()) return '';
    const email = String(info.email || '').trim().toLowerCase();
    return /^[^\s@]+@gmail\.com$/.test(email) ? email : '';
  } catch {
    return '';
  }
}

function cleanVisitor(value) {
  return typeof value === 'string' ? value.replace(/[^a-zA-Z0-9]/g, '').slice(0, 16) : '';
}

/** Plan Free: un solo servidor por red (IP) o por visitante; después solo queda el plan pagado. */
function freeKeys(request, env, visitor, email = '') {
  const ip = request.headers.get('CF-Connecting-IP') || '';
  const exempt = String(env.FREE_EXEMPT_IPS || '').split(',').map((item) => item.trim()).filter(Boolean);
  const keys = [];
  if (ip && !exempt.includes(ip)) keys.push(`free:ip:${ip}`);
  if (visitor && !(ip && exempt.includes(ip))) keys.push(`free:v:${visitor}`);
  // Un solo demo por Gmail, aunque cambie de red o de navegador.
  if (email && !(ip && exempt.includes(ip))) keys.push(`free:e:${email}`);
  return keys;
}

async function freeUse(request, env, visitor, email = '') {
  for (const key of freeKeys(request, env, visitor, email)) {
    const raw = await env.SESSIONS.get(key);
    if (!raw) continue;
    try {
      const data = JSON.parse(raw);
      if (data && data.at) return { at: data.at, visitor: data.visitor || '' };
    } catch { /* claves viejas: solo la fecha */ }
    return { at: raw, visitor: '' };
  }
  return null;
}

async function markFreeUsed(request, env, visitor, email = '') {
  const value = JSON.stringify({ at: new Date().toISOString(), visitor });
  await Promise.all(freeKeys(request, env, visitor, email).map((key) => env.SESSIONS.put(key, value, { expirationTtl: FREE_TTL })));
}

function freeView(use) {
  return { freeUsedAt: (use && use.at) || '', freeVisitor: (use && use.visitor) || '' };
}

async function getQuota(request, env) {
  if (!allowedOrigin(request, env)) return json(request, env, 403, { error: 'Origen no permitido.' });
  const visitor = cleanVisitor(new URL(request.url).searchParams.get('visitor'));
  const quota = await readQuota(request, env);
  const use = await freeUse(request, env, visitor);
  return json(request, env, 200, { ...quotaView(quota, quota.used, use), ...freeView(use) });
}

async function createSession(request, env) {
  if (!allowedOrigin(request, env)) return json(request, env, 403, { error: 'Origen no permitido.' });
  let body = {};
  try { body = await request.json(); } catch { /* cuerpo vacío */ }
  // El demo gratis es siempre de FREE_MINUTES (5): el cliente no decide la duración.
  const minutes = Math.min(180, Math.max(5, intVar(env.FREE_MINUTES, 5)));
  const holdMinutes = Math.min(120, Math.max(5, intVar(env.HOLD_MINUTES, 30)));
  const lang = LANGS.has(body.lang) ? body.lang : 'en';
  const type = typeof body.type === 'string' ? body.type.slice(0, 60) : '';
  const visitor = cleanVisitor(body.visitor);
  // Con Gmail: el servidor queda a nombre de esa cuenta (trazabilidad y un solo demo por Gmail).
  let email = '';
  if (body.idToken) {
    email = await verifyGoogle(env, body.idToken);
    if (!email) return json(request, env, 401, { error: 'GOOGLE_INVALID' });
  }

  const quota = await readQuota(request, env);
  const { hourKey, used } = quota;
  const use = await freeUse(request, env, visitor, email);
  if (use) {
    return json(request, env, 402, {
      error: 'FREE_USED',
      message: 'Ya usaste el servidor gratuito desde esta red. Sigue con el plan Coach 5.',
      ...freeView(use),
      quota: quotaView(quota, used, use),
    });
  }
  // Si ya tiene un demo esperando (creado y sin reclamar), se le devuelve ese en vez de crear otro.
  if (visitor || email) {
    const now = Date.now();
    const waiting = (await readClassIndex(env)).find((row) => (row.visitor === visitor || (email && row.email === email)) && row.claim && !row.claimedAt && isActive(row, now));
    if (waiting) {
      return json(request, env, 200, { id: waiting.id, status: liveStatus(waiting, now), minutes: waiting.minutes, reused: true, quota: quotaView(quota, used) });
    }
  }
  if (used >= quota.limit) {
    return json(request, env, 429, { error: 'Ya iniciaste varias clases en la última hora. Intenta más tarde.', quota: quotaView(quota, used) });
  }
  if (await countActive(env) >= intVar(env.MAX_ACTIVE, 3)) {
    return json(request, env, 503, { error: 'Todas las aulas están ocupadas. Intenta en unos minutos.' });
  }

  const id = crypto.randomUUID();
  const session = { status: 'starting', minutes, lang, type, visitor, email, claim: true, holdMinutes, claimedAt: '', holdUntil: '', createdAt: new Date().toISOString(), api: '', until: '' };
  await writeSession(env, id, session);
  await rememberClass(env, id, session);
  try {
    await dispatchWorkflow(env, id, minutes, holdMinutes);
  } catch (error) {
    const failed = { ...session, status: 'failed', error: error.message };
    await writeSession(env, id, failed);
    await rememberClass(env, id, failed);
    return json(request, env, 502, { error: 'No se pudo encender el servidor del coach.', detail: error.message });
  }
  // El demo gratis se marca como usado cuando la persona lo reclama (claimSession), no al crear el servidor.
  await env.SESSIONS.put(hourKey, String(used + 1), { expirationTtl: 3700 });
  return json(request, env, 201, { id, status: 'starting', minutes, holdMinutes, quota: quotaView(quota, used + 1) });
}

/** Servidor de un plan pagado: modelos_back ya descontó el cupo del Gmail, así que no se cuenta por IP. */
async function createPaidSession(request, env) {
  if (!callbackAuthorized(request, env)) return json(request, env, 401, { error: 'No autorizado.' });
  let body = {};
  try { body = await request.json(); } catch { /* cuerpo vacío */ }
  const minutes = Math.min(180, Math.max(5, intVar(body.minutes, 60)));
  const lang = LANGS.has(body.lang) ? body.lang : 'en';
  const type = typeof body.type === 'string' ? body.type.slice(0, 60) : '';
  const email = typeof body.email === 'string' ? body.email.toLowerCase().slice(0, 120) : '';
  if (await countActive(env) >= intVar(env.MAX_ACTIVE, 3)) {
    return json(request, env, 503, { error: 'Todas las aulas están ocupadas. Intenta en unos minutos.' });
  }
  const id = crypto.randomUUID();
  const session = { status: 'starting', minutes, lang, type, visitor: '', plan: 'coach-5', email, createdAt: new Date().toISOString(), api: '', until: '' };
  await writeSession(env, id, session);
  await rememberClass(env, id, session);
  try {
    await dispatchWorkflow(env, id, minutes);
  } catch (error) {
    const failed = { ...session, status: 'failed', error: error.message };
    await writeSession(env, id, failed);
    await rememberClass(env, id, failed);
    return json(request, env, 502, { error: 'No se pudo encender el servidor del coach.', detail: error.message });
  }
  return json(request, env, 201, { id, status: 'starting', minutes });
}

async function getSession(request, env, id) {
  const session = await readSession(env, id);
  if (!session) return json(request, env, 404, { error: 'La sesión no existe o ya expiró.' });
  const now = Date.now();
  const status = liveStatus(session, now);
  return json(request, env, 200, {
    id,
    status,
    api: status === 'ready' ? session.api : '',
    until: session.until || '',
    minutes: session.minutes,
    createdAt: session.createdAt,
    visitor: session.visitor || '',
    claim: Boolean(session.claim),
    claimedAt: session.claimedAt || '',
    holdUntil: session.holdUntil || '',
  });
}

/** La persona entra a su demo: el reloj de 5 minutos arranca aquí y el demo gratis queda usado. Es idempotente. */
async function claimSession(request, env, id) {
  if (!allowedOrigin(request, env)) return json(request, env, 403, { error: 'Origen no permitido.' });
  const session = await readSession(env, id);
  if (!session) return json(request, env, 404, { error: 'La sesión no existe o ya expiró.' });
  const now = Date.now();
  let status = liveStatus(session, now);
  let current = session;
  if (status === 'ready' && session.claim && !session.claimedAt) {
    const claimedAt = new Date(now).toISOString();
    const until = new Date(now + (session.minutes || 5) * 60000).toISOString();
    current = { ...session, claimedAt, until };
    await writeSession(env, id, current);
    await rememberClass(env, id, current);
    if (!session.plan) await markFreeUsed(request, env, session.visitor || '', session.email || '');
    status = 'ready';
  }
  return json(request, env, 200, {
    id,
    status,
    api: status === 'ready' ? current.api : '',
    until: current.until || '',
    minutes: current.minutes,
    createdAt: current.createdAt,
    claimedAt: current.claimedAt || '',
    claim: Boolean(current.claim),
  });
}

function callbackAuthorized(request, env) {
  const expected = env.CALLBACK_SECRET || '';
  const header = request.headers.get('Authorization') || '';
  return Boolean(expected) && header === `Bearer ${expected}`;
}

function positiveNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

async function reportUsage(request, env, id) {
  if (!callbackAuthorized(request, env)) return json(request, env, 401, { error: 'No autorizado.' });
  const session = await readSession(env, id);
  if (!session) return json(request, env, 404, { error: 'La sesión no existe.' });
  let body = {};
  try { body = await request.json(); } catch { return json(request, env, 400, { error: 'JSON inválido.' }); }
  const snap = body.usage && typeof body.usage === 'object' ? body.usage : null;
  if (!snap) return json(request, env, 400, { error: 'Falta usage.' });
  const day = typeof snap.day === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(snap.day)
    ? snap.day
    : new Date().toISOString().slice(0, 10);
  const prev = session.aiUsage && typeof session.aiUsage === 'object' ? session.aiUsage : {};
  const sameDay = prev.day === day;
  const delta = {
    requests: Math.max(0, positiveNumber(snap.requests) - (sameDay ? positiveNumber(prev.requests) : 0)),
    promptTokens: Math.max(0, positiveNumber(snap.promptTokens) - (sameDay ? positiveNumber(prev.promptTokens) : 0)),
    completionTokens: Math.max(0, positiveNumber(snap.completionTokens) - (sameDay ? positiveNumber(prev.completionTokens) : 0)),
    totalTokens: Math.max(0, positiveNumber(snap.totalTokens) - (sameDay ? positiveNumber(prev.totalTokens) : 0)),
  };
  const key = `usage:${day}`;
  const acc = (await env.SESSIONS.get(key, 'json')) || {
    day,
    provider: 'groq',
    model: '',
    requests: 0,
    limit: positiveNumber(snap.limit) || 14400,
    promptTokens: 0,
    completionTokens: 0,
    totalTokens: 0,
    tokenLimit: positiveNumber(snap.tokenLimit) || 500000,
    lastCall: null,
  };
  acc.requests += delta.requests;
  acc.promptTokens += delta.promptTokens;
  acc.completionTokens += delta.completionTokens;
  acc.totalTokens += delta.totalTokens;
  acc.limit = positiveNumber(snap.limit) || acc.limit || 14400;
  acc.tokenLimit = positiveNumber(snap.tokenLimit) || acc.tokenLimit || 500000;
  acc.model = typeof snap.model === 'string' ? snap.model : acc.model || '';
  acc.provider = snap.provider || 'groq';
  if (snap.lastCall && typeof snap.lastCall === 'object') acc.lastCall = snap.lastCall;
  const percentUsed = Math.min(100, Math.round((acc.requests / acc.limit) * 1000) / 10);
  const tokenPercentUsed = Math.min(100, Math.round((acc.totalTokens / acc.tokenLimit) * 1000) / 10);
  acc.percentUsed = Math.max(percentUsed, tokenPercentUsed);
  acc.tokenPercentUsed = tokenPercentUsed;
  acc.remaining = Math.max(0, acc.limit - acc.requests);
  acc.tokensRemaining = Math.max(0, acc.tokenLimit - acc.totalTokens);
  acc.quotaExhausted = acc.requests >= acc.limit || acc.totalTokens >= acc.tokenLimit;
  await env.SESSIONS.put(key, JSON.stringify(acc), { expirationTtl: 40 * 24 * 3600 });
  await writeSession(env, id, {
    ...session,
    aiUsage: {
      day,
      requests: positiveNumber(snap.requests),
      promptTokens: positiveNumber(snap.promptTokens),
      completionTokens: positiveNumber(snap.completionTokens),
      totalTokens: positiveNumber(snap.totalTokens),
    },
  });
  return json(request, env, 200, { ok: true });
}

/**
 * Borra el rastro de las pruebas (sesiones, cupos del demo gratis y tablero) para volver a empezar.
 * Borra de a poco (KV limita las operaciones por llamada): se repite mientras responda more: true.
 * No toca el consumo de IA (usage:*).
 */
async function resetAll(request, env) {
  if (!callbackAuthorized(request, env)) return json(request, env, 401, { error: 'No autorizado.' });
  const budget = 40;
  let deleted = 0;
  for (const prefix of ['s:', 'idx:', 'free:', 'ip:']) {
    while (deleted < budget) {
      const page = await env.SESSIONS.list({ prefix, limit: budget - deleted });
      if (!page.keys.length) break;
      await Promise.all(page.keys.map((key) => env.SESSIONS.delete(key.name)));
      deleted += page.keys.length;
      if (page.list_complete) break;
    }
    if (deleted >= budget) return json(request, env, 200, { ok: true, deleted, more: true });
  }
  return json(request, env, 200, { ok: true, deleted, more: false });
}

async function listBoard(request, env) {
  if (!callbackAuthorized(request, env)) return json(request, env, 401, { error: 'No autorizado.' });
  const now = Date.now();
  const classes = (await readClassIndex(env)).map((row) => ({
    id: row.id,
    status: liveStatus(row, now),
    until: row.until || '',
    createdAt: row.createdAt || '',
    minutes: row.minutes || 0,
    type: row.type || '',
    lang: row.lang || '',
    visitor: row.visitor || '',
    plan: row.plan || '',
    email: row.email || '',
    claim: Boolean(row.claim),
    claimedAt: row.claimedAt || '',
    holdUntil: row.holdUntil || '',
  }));
  classes.sort((a, b) => String(b.createdAt).localeCompare(String(a.createdAt)));
  const day = new Date().toISOString().slice(0, 10);
  let storedUsage = null;
  try { storedUsage = await env.SESSIONS.get(`usage:${day}`, 'json'); } catch { storedUsage = null; }
  const aiUsage = storedUsage || {
    day,
    provider: 'groq',
    model: '',
    requests: 0,
    limit: 14400,
    remaining: 14400,
    percentUsed: 0,
    promptTokens: 0,
    completionTokens: 0,
    totalTokens: 0,
    tokenLimit: 500000,
    tokensRemaining: 500000,
    tokenPercentUsed: 0,
    quotaExhausted: false,
    lastCall: null,
  };
  return json(request, env, 200, { classes, aiUsage, now: new Date(now).toISOString() });
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
    // Plan Free (claim): el servidor queda esperando a la persona; el reloj de la sesión arranca al reclamarla.
    const holdUntil = session.claim ? new Date(Date.now() + (session.holdMinutes || 30) * 60000).toISOString() : '';
    const until = session.claim ? '' : (Number.isFinite(Date.parse(body.until)) ? body.until : '');
    const ready = { ...session, status: 'ready', api, until, holdUntil };
    await writeSession(env, id, ready);
    await rememberClass(env, id, ready);
  } else {
    const closed = { ...session, status: body.failed ? 'failed' : 'ended', api: '' };
    await writeSession(env, id, closed);
    await rememberClass(env, id, closed);
  }
  return json(request, env, 200, { ok: true });
}

export default {
  async fetch(request, env) {
    try {
      return await route(request, env);
    } catch (error) {
      const message = error && error.message ? error.message : 'El lanzador falló.';
      return json(request, env, 500, { error: message });
    }
  },
};

async function route(request, env) {
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
    if (request.method === 'GET' && url.pathname === '/admin/board') return listBoard(request, env);
    if (request.method === 'POST' && url.pathname === '/admin/reset') return resetAll(request, env);
    if (request.method === 'GET' && url.pathname === '/quota') return getQuota(request, env);
    if (request.method === 'POST' && url.pathname === '/sessions') return createSession(request, env);
    if (request.method === 'POST' && url.pathname === '/paid/sessions') return createPaidSession(request, env);
    const match = url.pathname.match(/^\/sessions\/([^/]+)(?:\/(ready|end|usage|claim))?$/);
    if (match && ID_PATTERN.test(match[1])) {
      if (request.method === 'GET' && !match[2]) return getSession(request, env, match[1]);
      if (request.method === 'POST' && match[2] === 'usage') return reportUsage(request, env, match[1]);
      if (request.method === 'POST' && match[2] === 'claim') return claimSession(request, env, match[1]);
      if (request.method === 'POST' && match[2]) return updateFromWorkflow(request, env, match[1], match[2]);
    }
    return json(request, env, 404, { error: 'Ruta no encontrada.' });
}
