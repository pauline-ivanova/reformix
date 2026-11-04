import assert from 'node:assert/strict'
import { DEFAULT_SITE_URL, getSiteUrl } from './site-url.ts'

assert.equal(getSiteUrl(), DEFAULT_SITE_URL)

const prev = process.env.NEXT_PUBLIC_SITE_URL

process.env.NEXT_PUBLIC_SITE_URL = 'https://www.reformix.barcelona/\r\n'
assert.equal(getSiteUrl(), 'https://www.reformix.barcelona')
assert.equal(
  `${getSiteUrl()}/sitemap_index.xml`,
  'https://www.reformix.barcelona/sitemap_index.xml',
)

process.env.NEXT_PUBLIC_SITE_URL = 'https://www.reformix.barcelona/'
assert.equal(getSiteUrl(), 'https://www.reformix.barcelona')

process.env.NEXT_PUBLIC_SITE_URL = prev

console.log('site-url tests: ok')
