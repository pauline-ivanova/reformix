/**
 * Shared Sentry helpers: enablement, noise filters, privacy defaults.
 * No Session Replay. EU ingest via DSN host (ingest.de.sentry.io).
 */

import type { ErrorEvent, EventHint } from '@sentry/nextjs'

export function getSentryDsn(): string | undefined {
  const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN?.trim()
  return dsn || undefined
}

/** Local `next dev` off unless SENTRY_ENABLE_DEV=true. Preview/prod on when DSN set. */
export function isSentryEnabled(): boolean {
  if (!getSentryDsn()) return false
  if (
    process.env.NODE_ENV === 'development' &&
    process.env.SENTRY_ENABLE_DEV !== 'true'
  ) {
    return false
  }
  return true
}

/** Smoke endpoints: never on Vercel production. */
export function isSentrySmokeAllowed(): boolean {
  if (process.env.VERCEL_ENV === 'production') return false
  return (
    process.env.VERCEL_ENV === 'preview' ||
    process.env.VERCEL_ENV === 'development' ||
    process.env.NODE_ENV === 'development' ||
    process.env.SENTRY_SMOKE === '1'
  )
}

const NOISE_MESSAGE_PATTERNS = [
  /^NetworkError/i,
  /Failed to fetch/i,
  /Load failed/i,
  /Network request failed/i,
  /AbortError/i,
  /The operation was aborted/i,
  /ResizeObserver loop/i,
  /Non-Error promise rejection captured/i,
  /^Script error\.?$/i,
  /chrome-extension:\/\//i,
  /moz-extension:\/\//i,
  /safari-extension:\/\//i,
  /webkit-masked-url/i,
]

function eventText(event: ErrorEvent, hint?: EventHint): string {
  const parts: string[] = []
  if (event.message) parts.push(event.message)
  for (const ex of event.exception?.values ?? []) {
    if (ex.type) parts.push(ex.type)
    if (ex.value) parts.push(ex.value)
  }
  const original = hint?.originalException
  if (original instanceof Error) {
    parts.push(original.name, original.message)
  } else if (typeof original === 'string') {
    parts.push(original)
  }
  return parts.join(' ')
}

/** Drop extension / flaky network noise (RUSO-style hygiene). */
export function shouldDropEvent(event: ErrorEvent, hint?: EventHint): boolean {
  const text = eventText(event, hint)
  if (NOISE_MESSAGE_PATTERNS.some((re) => re.test(text))) return true

  const frames =
    event.exception?.values?.flatMap((v) => v.stacktrace?.frames ?? []) ?? []
  if (
    frames.some((f) => {
      const file = f.filename ?? ''
      return (
        file.includes('chrome-extension://') ||
        file.includes('moz-extension://') ||
        file.includes('safari-extension://')
      )
    })
  ) {
    return true
  }

  return false
}

export function sentryBeforeSend(
  event: ErrorEvent,
  hint: EventHint,
): ErrorEvent | null {
  if (shouldDropEvent(event, hint)) return null
  return event
}

export const sentryBaseOptions = {
  sendDefaultPii: false,
  tracesSampleRate: 0.1,
} as const
