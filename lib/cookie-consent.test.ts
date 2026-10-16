import assert from 'node:assert/strict'
import { describe, it, before } from 'node:test'

/**
 * gtag.js only replays Arguments-shaped dataLayer commands (Qb() check).
 * Plain Arrays from rest-param stubs are ignored → GA never gets consent/config.
 */
describe('ensureGtag dataLayer shape', () => {
  before(() => {
    const dataLayer: unknown[] = []
    // Minimal window for cookie-consent (browser-only module paths).
    ;(globalThis as unknown as { window: Window }).window = {
      dataLayer,
      localStorage: {
        getItem: () => null,
        setItem: () => undefined,
        removeItem: () => undefined,
      },
    } as unknown as Window
  })

  it('queues consent default as Arguments (not Array)', async () => {
    const { initGoogleConsentDefaults } = await import('./cookie-consent.ts')
    initGoogleConsentDefaults()

    const dl = (globalThis as unknown as { window: { dataLayer: unknown[] } }).window
      .dataLayer
    assert.ok(dl.length >= 1, 'expected at least one dataLayer entry')

    const first = dl[0] as { 0?: string }
    assert.equal(
      Object.prototype.toString.call(first),
      '[object Arguments]',
      'gtag.js ignores plain Arrays; must push Arguments'
    )
    // Qb() in gtag.js: Arguments OR own property `callee` (don't read .callee in strict mode)
    assert.equal(Object.prototype.hasOwnProperty.call(first, 'callee'), true)
    assert.equal(Array.isArray(first), false)
    assert.equal(first[0], 'consent')
  })
})
