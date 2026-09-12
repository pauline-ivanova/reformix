/**
 * Cookie consent storage + gated loading of analytics / marketing tags.
 * Tags load only after affirmative consent (AEPD / LSSI).
 */

export type CookiePreferences = {
  necessary: true
  analytics: boolean
  preferences: boolean
  /** Ads / remarketing — Meta Pixel, etc. (Phase F trigger) */
  marketing: boolean
}

export const COOKIE_CONSENT_KEY = 'cookie-consent'
export const COOKIE_CONSENT_DATE_KEY = 'cookie-consent-date'
/** 12 months — renew consent (AEPD practice) */
export const COOKIE_CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000

export const defaultCookiePreferences = (): CookiePreferences => ({
  necessary: true,
  analytics: false,
  preferences: false,
  marketing: false,
})

export function normalizeCookiePreferences(raw: unknown): CookiePreferences {
  const base = defaultCookiePreferences()
  if (!raw || typeof raw !== 'object') return base
  const data = raw as Record<string, unknown>
  return {
    necessary: true,
    analytics: Boolean(data.analytics),
    preferences: Boolean(data.preferences),
    marketing: Boolean(data.marketing),
  }
}

export function readStoredCookieConsent(): CookiePreferences | null {
  if (typeof window === 'undefined') return null
  const raw = localStorage.getItem(COOKIE_CONSENT_KEY)
  const dateRaw = localStorage.getItem(COOKIE_CONSENT_DATE_KEY)
  if (!raw) return null

  if (dateRaw) {
    const age = Date.now() - new Date(dateRaw).getTime()
    if (Number.isFinite(age) && age > COOKIE_CONSENT_MAX_AGE_MS) {
      localStorage.removeItem(COOKIE_CONSENT_KEY)
      localStorage.removeItem(COOKIE_CONSENT_DATE_KEY)
      return null
    }
  }

  try {
    return normalizeCookiePreferences(JSON.parse(raw))
  } catch {
    return null
  }
}

export function persistCookieConsent(prefs: CookiePreferences): void {
  const normalized = normalizeCookiePreferences(prefs)
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(normalized))
  localStorage.setItem(COOKIE_CONSENT_DATE_KEY, new Date().toISOString())
}

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    clarity?: ((...args: unknown[]) => void) & {
      q?: unknown[]
    }
    fbq?: ((...args: unknown[]) => void) & {
      callMethod?: (...args: unknown[]) => void
      queue: unknown[]
      loaded?: boolean
      version?: string
      push?: (...args: unknown[]) => void
    }
    _fbq?: unknown
  }
}

function ensureGtag(): void {
  window.dataLayer = window.dataLayer || []
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args)
    }
  }
}

/** Google Consent Mode v2 defaults — denied until user opts in */
export function initGoogleConsentDefaults(): void {
  if (typeof window === 'undefined') return
  ensureGtag()
  window.gtag?.('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    wait_for_update: 500,
  })
}

export function updateGoogleConsent(prefs: CookiePreferences): void {
  if (typeof window === 'undefined') return
  ensureGtag()
  window.gtag?.('consent', 'update', {
    analytics_storage: prefs.analytics ? 'granted' : 'denied',
    ad_storage: prefs.marketing ? 'granted' : 'denied',
    ad_user_data: prefs.marketing ? 'granted' : 'denied',
    ad_personalization: prefs.marketing ? 'granted' : 'denied',
  })
}

export function loadGoogleTag(measurementId: string): void {
  if (!measurementId || document.getElementById('ga4-gtag')) return
  ensureGtag()
  const script = document.createElement('script')
  script.id = 'ga4-gtag'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  document.head.appendChild(script)
  window.gtag?.('js', new Date())
  window.gtag?.('config', measurementId, {
    anonymize_ip: true,
    send_page_view: true,
  })
}

export function loadMetaPixel(pixelId: string): void {
  if (!pixelId || document.getElementById('meta-pixel')) return

  const fbq = function (...args: unknown[]) {
    const fn = window.fbq
    if (fn?.callMethod) {
      fn.callMethod(...args)
    } else if (fn) {
      fn.queue.push(args)
    }
  } as NonNullable<Window['fbq']>

  if (!window.fbq) {
    window.fbq = fbq
    window._fbq = fbq
    fbq.push = fbq
    fbq.loaded = true
    fbq.version = '2.0'
    fbq.queue = []
    const script = document.createElement('script')
    script.id = 'meta-pixel'
    script.async = true
    script.src = 'https://connect.facebook.net/en_US/fbevents.js'
    document.head.appendChild(script)
  }

  window.fbq('init', pixelId)
  window.fbq('track', 'PageView')
}

/** Microsoft Clarity — heatmaps / recordings; load only after analytics consent. */
export function loadMicrosoftClarity(projectId: string): void {
  if (!projectId || document.getElementById('ms-clarity')) return

  const clarity = function (...args: unknown[]) {
    ;(clarity.q = clarity.q || []).push(args)
  } as NonNullable<Window['clarity']> & { q?: unknown[] }

  if (!window.clarity) {
    window.clarity = clarity
  }

  const script = document.createElement('script')
  script.id = 'ms-clarity'
  script.async = true
  script.src = `https://www.clarity.ms/tag/${encodeURIComponent(projectId)}`
  document.head.appendChild(script)
  window.clarity?.('consent')
}

/**
 * Apply consent: update Consent Mode and load pixels only when allowed.
 * Env: NEXT_PUBLIC_GA_MEASUREMENT_ID · NEXT_PUBLIC_CLARITY_PROJECT_ID ·
 * NEXT_PUBLIC_META_PIXEL_ID (Phase F).
 */
export function applyCookieConsent(prefs: CookiePreferences): void {
  if (typeof window === 'undefined') return

  const normalized = normalizeCookiePreferences(prefs)
  initGoogleConsentDefaults()
  updateGoogleConsent(normalized)

  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim()
  const metaId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim()
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim()

  if ((normalized.analytics || normalized.marketing) && gaId) {
    loadGoogleTag(gaId)
  }

  if (normalized.analytics && clarityId) {
    loadMicrosoftClarity(clarityId)
  }

  if (normalized.marketing && metaId) {
    loadMetaPixel(metaId)
  }
}
