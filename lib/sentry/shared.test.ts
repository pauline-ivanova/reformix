import assert from 'node:assert/strict'
import { afterEach, describe, it } from 'node:test'
import {
  getSentryDsn,
  isSentryDevCaptureEnabled,
  isSentryEnabled,
  isSentrySmokeAllowed,
} from './shared.ts'

const KEYS = [
  'NEXT_PUBLIC_SENTRY_DSN',
  'SENTRY_ENABLE_DEV',
  'NEXT_PUBLIC_SENTRY_ENABLE_DEV',
  'NODE_ENV',
  'VERCEL_ENV',
  'SENTRY_SMOKE',
] as const

const saved: Partial<Record<(typeof KEYS)[number], string | undefined>> = {}

function snapshotEnv() {
  for (const key of KEYS) {
    saved[key] = process.env[key]
  }
}

function restoreEnv() {
  for (const key of KEYS) {
    const value = saved[key]
    if (value === undefined) delete process.env[key]
    else process.env[key] = value
  }
}

function clearSentryEnv() {
  for (const key of KEYS) {
    delete process.env[key]
  }
}

describe('sentry shared enablement', () => {
  afterEach(() => {
    restoreEnv()
  })

  it('getSentryDsn trims whitespace', () => {
    snapshotEnv()
    clearSentryEnv()
    process.env.NEXT_PUBLIC_SENTRY_DSN = '  https://x@o.ingest.de.sentry.io/1  '
    assert.equal(getSentryDsn(), 'https://x@o.ingest.de.sentry.io/1')
  })

  it('is disabled in development without enable flags', () => {
    snapshotEnv()
    clearSentryEnv()
    process.env.NODE_ENV = 'development'
    process.env.NEXT_PUBLIC_SENTRY_DSN = 'https://x@o.ingest.de.sentry.io/1'
    assert.equal(isSentryDevCaptureEnabled(), false)
    assert.equal(isSentryEnabled(), false)
  })

  it('enables in development with server-only SENTRY_ENABLE_DEV', () => {
    snapshotEnv()
    clearSentryEnv()
    process.env.NODE_ENV = 'development'
    process.env.NEXT_PUBLIC_SENTRY_DSN = 'https://x@o.ingest.de.sentry.io/1'
    process.env.SENTRY_ENABLE_DEV = 'true'
    assert.equal(isSentryEnabled(), true)
  })

  it('enables in development with NEXT_PUBLIC_SENTRY_ENABLE_DEV (client)', () => {
    snapshotEnv()
    clearSentryEnv()
    process.env.NODE_ENV = 'development'
    process.env.NEXT_PUBLIC_SENTRY_DSN = 'https://x@o.ingest.de.sentry.io/1'
    process.env.NEXT_PUBLIC_SENTRY_ENABLE_DEV = 'true'
    assert.equal(isSentryDevCaptureEnabled(), true)
    assert.equal(isSentryEnabled(), true)
  })

  it('enables in production when DSN is set', () => {
    snapshotEnv()
    clearSentryEnv()
    process.env.NODE_ENV = 'production'
    process.env.NEXT_PUBLIC_SENTRY_DSN = 'https://x@o.ingest.de.sentry.io/1'
    assert.equal(isSentryEnabled(), true)
  })

  it('blocks smoke on Vercel production', () => {
    snapshotEnv()
    clearSentryEnv()
    process.env.VERCEL_ENV = 'production'
    process.env.NODE_ENV = 'production'
    assert.equal(isSentrySmokeAllowed(), false)
  })

  it('allows smoke in development', () => {
    snapshotEnv()
    clearSentryEnv()
    process.env.NODE_ENV = 'development'
    assert.equal(isSentrySmokeAllowed(), true)
  })
})
