import { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/site-url'

/**
 * AI training bots not covered by Cloudflare Managed robots.txt.
 * CF already Disallows GPTBot, ClaudeBot, Google-Extended, Applebot-Extended,
 * Amazonbot, Bytespider, CCBot, meta-externalagent — we align remaining
 * training crawlers with Content-Signal: ai-train=no.
 */
const AI_TRAINING_BOTS = [
  'DeepseekBot',
  'anthropic-ai',
  'xAI-Bot',
  'Diffbot',
  'FacebookBot',
  'img2dataset',
  'omgili',
  'omgilibot',
  'Peer39_crawler',
] as const

export default function robots(): MetadataRoute.Robots {
  // Must use getSiteUrl() — raw NEXT_PUBLIC_SITE_URL may contain \r\n from
  // dashboard paste, which splits Sitemap into an invalid second line (Lighthouse).
  const baseUrl = getSiteUrl()

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/alcance-proyecto/', '/sentry-smoke', '/monitoring'],
      },
      ...AI_TRAINING_BOTS.map((userAgent) => ({
        userAgent,
        disallow: '/',
      })),
    ],
    sitemap: `${baseUrl}/sitemap_index.xml`,
  }
}
