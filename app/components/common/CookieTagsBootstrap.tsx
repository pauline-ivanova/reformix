'use client'

import { useEffect } from 'react'
import { applyCookieConsent, readStoredCookieConsent } from '@/lib/cookie-consent'

/**
 * On return visits, re-apply stored consent and load tags without showing the banner.
 * Scripts are deferred until interaction / long idle so lab scores stay clean.
 */
export default function CookieTagsBootstrap() {
  useEffect(() => {
    const prefs = readStoredCookieConsent()
    if (prefs) {
      applyCookieConsent(prefs, { deferScripts: true })
    } else {
      applyCookieConsent({
        necessary: true,
        analytics: false,
        preferences: false,
        marketing: false,
      })
    }
  }, [])

  return null
}
