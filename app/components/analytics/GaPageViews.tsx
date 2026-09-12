'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'
import { trackPageView } from '@/lib/ga4'

/**
 * Sends GA4 page_view on client navigations.
 * Skips the first mount (initial page_view comes from gtag config send_page_view).
 */
export default function GaPageViews() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const isFirst = useRef(true)

  useEffect(() => {
    const search = searchParams?.toString()
    const pagePath = search ? `${pathname}?${search}` : pathname

    if (isFirst.current) {
      isFirst.current = false
      return
    }

    trackPageView(pagePath)
  }, [pathname, searchParams])

  return null
}
