/**
 * i18n del Interview Coach (misma dinámica que Tuk Tuk / useLocales).
 * Librería: i18next (CDN) · storage: p2l-locale
 * Catálogos embebidos en scripts/locales-embed.js (sin fetch; evita claves crudas).
 * Idiomas: es, en, fr.
 */
(function () {
  const STORAGE_KEY = 'p2l-locale'
  const DEFAULT_LANG = 'es'
  const htmlOriginals = new WeakMap()

  function normalizeLocale(code) {
    const value = String(code || '').toLowerCase()
    if (value.startsWith('en')) return 'en'
    if (value.startsWith('fr')) return 'fr'
    return 'es'
  }

  function localeFromPath() {
    const parts = location.pathname.split('/').filter(Boolean)
    const last = String(parts[parts.length - 1] || '').toLowerCase()
    if (last === 'en' || last === 'es' || last === 'fr') return last
    return ''
  }

  function getSavedLocale() {
    try {
      return normalizeLocale(localStorage.getItem(STORAGE_KEY) || navigator.language || DEFAULT_LANG)
    } catch (_) {
      return DEFAULT_LANG
    }
  }

  function initialLocale() {
    return localeFromPath() || getSavedLocale()
  }

  function syncLocalePath(code) {
    if (location.protocol === 'file:') return
    const lang = normalizeLocale(code)
    let path = location.pathname.replace(/\/(en|es|fr)\/?$/i, '')
    if (!path.endsWith('/')) path += '/'
    const next = path + lang + '/'
    const current = location.pathname.endsWith('/') ? location.pathname : location.pathname + '/'
    if (current === next) return
    history.replaceState(null, '', next + location.search + location.hash)
  }

  function persistLocale(code) {
    const normalized = normalizeLocale(code)
    try {
      localStorage.setItem(STORAGE_KEY, normalized)
    } catch (_) {
      /* ignore */
    }
    document.documentElement.lang = normalized
    return normalized
  }

  function captureHtmlOriginals() {
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      if (!el.hasAttribute('data-i18n') && !htmlOriginals.has(el)) {
        htmlOriginals.set(el, el.innerHTML)
      }
    })
  }

  function applyStaticTranslations() {
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n')
      if (!key) return
      const value = i18next.t(key)
      if (value == null || value === key || typeof value !== 'string') return
      if (el.hasAttribute('data-i18n-html')) {
        el.innerHTML = value
      } else {
        el.textContent = value
      }
    })

    const lang = normalizeLocale(i18next.language)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      if (el.hasAttribute('data-i18n')) return
      const key = el.getAttribute('data-i18n-html')
      if (!key) return
      if (lang === 'es') {
        const original = htmlOriginals.get(el)
        if (original != null) el.innerHTML = original
        return
      }
      const value = i18next.t(key)
      if (value && value !== key && typeof value === 'string') el.innerHTML = value
    })

    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria')
      if (!key) return
      const value = i18next.t(key)
      if (value && value !== key && typeof value === 'string') {
        el.setAttribute('aria-label', value)
      }
    })

    document.querySelectorAll('[data-i18n-meta]').forEach((el) => {
      const key = el.getAttribute('data-i18n-meta')
      if (!key) return
      const value = i18next.t(key)
      if (value && value !== key && typeof value === 'string') {
        el.setAttribute('content', value)
      }
    })
  }

  function syncLangSwitch(active) {
    document.querySelectorAll('[data-set-locale]').forEach((btn) => {
      const code = btn.getAttribute('data-set-locale')
      btn.classList.toggle('qa-lang-switch__btn--active', code === active)
      btn.setAttribute('aria-pressed', code === active ? 'true' : 'false')
    })
  }

  async function setLocale(code, opts = {}) {
    const lang = persistLocale(code)
    syncLocalePath(lang)
    await i18next.changeLanguage(lang)
    syncLangSwitch(lang)
    applyStaticTranslations()
    if (typeof window.onCoachLocaleChange === 'function') {
      window.onCoachLocaleChange(lang, { skipScroll: !!opts.skipScroll })
    }
  }

  async function initI18n() {
    if (typeof i18next === 'undefined') {
      console.error('[Coach i18n] i18next no cargó')
      return
    }

    const resources = window.COACH_I18N_RESOURCES
    if (!resources || !resources.es || !resources.en || !resources.fr) {
      console.error('[Coach i18n] Falta scripts/locales-embed.js')
      return
    }

    captureHtmlOriginals()
    const initial = initialLocale()
    persistLocale(initial)

    await i18next.init({
      lng: initial,
      fallbackLng: DEFAULT_LANG,
      supportedLngs: ['es', 'en', 'fr'],
      debug: false,
      resources,
      returnObjects: true,
      interpolation: { escapeValue: false }
    })

    syncLangSwitch(initial)
    applyStaticTranslations()

    document.querySelectorAll('[data-set-locale]').forEach((btn) => {
      btn.addEventListener('click', () => {
        setLocale(btn.getAttribute('data-set-locale'), { skipScroll: true })
      })
    })

    window.coachI18n = {
      t: (key, opts) => i18next.t(key, opts),
      setLocale,
      getLocale: () => normalizeLocale(i18next.language),
      applyStaticTranslations,
      ready: true
    }

    const notify = () => {
      if (typeof window.onCoachI18nReady === 'function') window.onCoachI18nReady(initial)
    }
    notify()
    setTimeout(notify, 0)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n)
  } else {
    initI18n()
  }
})()
