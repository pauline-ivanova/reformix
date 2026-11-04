/**
 * Shared Sentry helpers: enablement, noise filters, privacy defaults.
 * No Session Replay. EU ingest via DSN host (ingest.de.sentry.io).
 */

import type { ErrorEvent, EventHint } from '@sentry/nextjs'

export function getSentryDsn(): string | undefined {
  const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN?.trim()
  return dsn || undefined
}

/**
 * Local `next dev` off unless explicitly enabled.
 * Client bundles only see `NEXT_PUBLIC_*` — use that (or both) for browser smoke.
 * Server also accepts `SENTRY_ENABLE_DEV`. Preview/prod: on when DSN is set.
 */
export function isSentryDevCaptureEnabled(): boolean {
  return (
    process.env.SENTRY_ENABLE_DEV === 'true' ||
    process.env.NEXT_PUBLIC_SENTRY_ENABLE_DEV === 'true'
  )
}

export function isSentryEnabled(): boolean {
  if (!getSentryDsn()) return false
  if (process.env.NODE_ENV === 'development' && !isSentryDevCaptureEnabled()) {
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

/**
 * Patterns for flaky third-party / browser / captcha noise.
 * Keep specific — do not swallow real app ReferenceErrors.
 */
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
  // Cloudflare Turnstile: timeouts & transient challenge failures (retryable UX)
  /TurnstileError/i,
  /\[Cloudflare Turnstile\]/i,
  /turnstile\/v0\/api\.js/i,
  // Third-party / extension globals (Clarity-adjacent noise in local + some browsers)
  /reading ['"]M_ID['"]/i,
  // React unmount races when widgets (Turnstile/maps) tear down mid-commit
  /reading ['"]removeChild['"]/i,
  // Local next dev / stale build artifacts — never actionable in Sentry
  /\.next[\\/]server[\\/]/i,
  /EPIPE:\s*broken pipe/i,
  /Cannot find module ['"]\.\/vendor-chunks/i,
  /Expected clientReferenceManifest to be defined/i,
]

/** Stack frames that identify third-party captcha / extensions. */
const NOISE_FRAME_PATTERNS = [
  /chrome-extension:\/\//i,
  /moz-extension:\/\//i,
  /safari-extension:\/\//i,
  /turnstile\/v0\/api\.js/i,
  /challenges\.cloudflare\.com/i,
]

export function eventText(event: ErrorEvent, hint?: EventHint): string {
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

/** Drop extension / captcha / flaky network noise (RUSO-style hygiene). */
export function shouldDropEvent(event: ErrorEvent, hint?: EventHint): boolean {
  const text = eventText(event, hint)
  if (NOISE_MESSAGE_PATTERNS.some((re) => re.test(text))) return true

  const frames =
    event.exception?.values?.flatMap((v) => v.stacktrace?.frames ?? []) ?? []
  if (
    frames.some((f) => {
      const file = f.filename ?? ''
      return NOISE_FRAME_PATTERNS.some((re) => re.test(file))
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

/** Also applied at SDK init so matching errors never enqueue. */
export const sentryIgnoreErrors: Array<string | RegExp> = [
  /TurnstileError/i,
  /\[Cloudflare Turnstile\]/i,
  /reading ['"]M_ID['"]/i,
  /reading ['"]removeChild['"]/i,
  /EPIPE:\s*broken pipe/i,
  /Expected clientReferenceManifest to be defined/i,
]

export const sentryDenyUrls: Array<string | RegExp> = [
  /turnstile\/v0\/api\.js/i,
  /challenges\.cloudflare\.com/i,
  /^chrome-extension:\/\//i,
  /^moz-extension:\/\//i,
  /^safari-extension:\/\//i,
]

export const sentryBaseOptions = {
  sendDefaultPii: false,
  tracesSampleRate: 0.1,
  ignoreErrors: sentryIgnoreErrors,
  denyUrls: sentryDenyUrls,
} as const
