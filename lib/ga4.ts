/**
 * Consent-gated GA4 helpers for lead-gen events + SPA pageviews.
 * Sends only when gtag is loaded (after analytics/marketing consent).
 */

import { readStoredCookieConsent } from '@/lib/cookie-consent'
import { inferServiceFromPath } from '@/lib/ga4-params'

export type GaEventParams = Record<string, string | number | boolean | undefined>

export { inferServiceFromPath }

export function currentPagePath(): string {
  if (typeof window === 'undefined') return ''
  return `${window.location.pathname}${window.location.search}`
}

function hasAnalyticsConsent(): boolean {
  const prefs = readStoredCookieConsent()
  return Boolean(prefs?.analytics || prefs?.marketing)
}

function measurementId(): string {
  return process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? ''
}

/** True when GA4 script is present and consent allows analytics. */
export function canTrackGa(): boolean {
  if (typeof window === 'undefined') return false
  if (!measurementId()) return false
  if (!window.gtag) return false
  if (!hasAnalyticsConsent()) return false
  return Boolean(document.getElementById('ga4-gtag'))
}

export function trackGaEvent(eventName: string, params: GaEventParams = {}): void {
  if (!canTrackGa() || !eventName) return

  const cleaned: Record<string, string | number | boolean> = {}
  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === '') continue
    cleaned[key] = value
  }

  window.gtag?.('event', eventName, cleaned)
}

export function trackPageView(pagePath: string, pageTitle?: string): void {
  const id = measurementId()
  if (!canTrackGa() || !id || !pagePath) return

  window.gtag?.('event', 'page_view', {
    page_path: pagePath,
    page_title: pageTitle || (typeof document !== 'undefined' ? document.title : undefined),
    page_location:
      typeof window !== 'undefined' ? `${window.location.origin}${pagePath}` : undefined,
    send_to: id,
  })
}

export function trackCtaClick(opts: {
  linkUrl: string
  linkText?: string
  ctaId?: string
  service?: string
}): void {
  const pagePath = currentPagePath()
  trackGaEvent('cta_click', {
    page_path: pagePath,
    service: opts.service ?? inferServiceFromPath(pagePath),
    link_url: opts.linkUrl,
    link_text: opts.linkText,
    cta_id: opts.ctaId,
  })
}

export function trackFormStart(opts: { service?: string } = {}): void {
  const pagePath = currentPagePath()
  trackGaEvent('form_start', {
    page_path: pagePath,
    service: opts.service || inferServiceFromPath(pagePath) || undefined,
  })
}

export function trackFormSubmit(opts: { service?: string } = {}): void {
  const pagePath = currentPagePath()
  trackGaEvent('form_submit', {
    page_path: pagePath,
    service: opts.service || inferServiceFromPath(pagePath) || undefined,
  })
}

export function trackFormError(opts: {
  service?: string
  errorType: string
}): void {
  const pagePath = currentPagePath()
  trackGaEvent('form_error', {
    page_path: pagePath,
    service: opts.service || inferServiceFromPath(pagePath) || undefined,
    error_type: opts.errorType,
  })
}
