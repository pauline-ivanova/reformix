import Script from 'next/script'

/**
 * Cloudflare Web Analytics (RUM) — cookieless beacon.
 * Parallel to GA4; does not require analytics cookie consent.
 * Token: NEXT_PUBLIC_CF_WEB_ANALYTICS_TOKEN
 */
export default function CloudflareWebAnalytics() {
  const token = process.env.NEXT_PUBLIC_CF_WEB_ANALYTICS_TOKEN?.trim()
  if (!token) return null

  return (
    <Script
      src="https://static.cloudflareinsights.com/beacon.min.js"
      strategy="afterInteractive"
      data-cf-beacon={JSON.stringify({ token })}
    />
  )
}
