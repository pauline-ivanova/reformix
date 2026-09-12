'use client'

import { useEffect } from 'react'
import { applyCookieConsent, readStoredCookieConsent } from '@/lib/cookie-consent'

/**
 * On return visits, re-apply stored consent and load tags without showing the banner.
 */
export default function CookieTagsBootstrap() {
  useEffect(() => {
    const prefs = readStoredCookieConsent()
    if (prefs) {
      applyCookieConsent(prefs)
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
