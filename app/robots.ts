import { MetadataRoute } from 'next'

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
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/sentry-smoke', '/monitoring'],
      },
      ...AI_TRAINING_BOTS.map((userAgent) => ({
        userAgent,
        disallow: '/',
      })),
    ],
    sitemap: `${baseUrl}/sitemap_index.xml`,
  }
}
