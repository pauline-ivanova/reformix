import assert from 'node:assert/strict'
import {
  buildInternalLinkSuggestions,
  formatSuggestionsMarkdown,
  isHubLanding,
  normalizeContentPath,
} from './suggest-internal-links-lib.mjs'

assert.equal(normalizeContentPath('/a/b/'), '/a/b')
assert.equal(normalizeContentPath('a/b'), '/a/b')
assert.equal(isHubLanding({ category: '02', order: '000', slug: 'hub' }), true)
assert.equal(isHubLanding({ category: '00', order: '000', slug: 'home' }), false)
assert.equal(isHubLanding({ category: '02', order: '001', slug: 'spoke' }), false)

const docs = [
  {
    path: '/reformas-por-estancia',
    title: 'Hub',
    category: '02',
    order: '000',
    slug: 'reformas-por-estancia',
    body: 'See [cocinas](/reformas-cocinas) only.',
  },
  {
    path: '/reformas-cocinas',
    title: 'Cocinas',
    category: '02',
    order: '001',
    slug: 'reformas-cocinas',
    body: 'No hub link here.',
  },
  {
    path: '/reformas-banos',
    title: 'Baños',
    category: '02',
    order: '002',
    slug: 'reformas-banos',
    body: '',
  },
  {
    path: '/orphan-page',
    title: 'Orphan',
    category: '99',
    order: '001',
    slug: 'orphan-page',
    body: '',
  },
]

const report = buildInternalLinkSuggestions(docs)
assert.ok(report.suggestionCount >= 3)

const types = new Set(report.suggestions.map((s) => s.type))
assert.ok(types.has('add_hub_link'))
assert.ok(types.has('hub_missing_spokes'))
assert.ok(types.has('orphan'))

const hubMiss = report.suggestions.find((s) => s.type === 'hub_missing_spokes')
assert.ok(hubMiss.targets.includes('/reformas-banos'))

const md = formatSuggestionsMarkdown(report)
assert.match(md, /Suggest-only/)
assert.match(md, /hub_missing_spokes/)

console.log('suggest-internal-links tests: ok')
