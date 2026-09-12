import assert from 'node:assert/strict'
import {
  comparePageSnapshots,
  formatDecayMarkdown,
  parseCsv,
  toCsv,
} from './lib.mjs'

const csv = toCsv(
  ['page', 'clicks', 'impressions', 'ctr', 'position'],
  [
    { page: 'https://example.com/a/', clicks: 10, impressions: 100, ctr: 0.1, position: 5 },
    { page: 'https://example.com/b', clicks: 2, impressions: 20, ctr: 0.1, position: 8 },
  ]
)
const parsed = parseCsv(csv)
assert.equal(parsed.length, 2)
assert.equal(parsed[0].page, 'https://example.com/a/')
assert.equal(Number(parsed[0].clicks), 10)

const baseline = [
  { page: 'https://x/a/', clicks: 20, impressions: 200, ctr: 0.1, position: 4 },
  { page: 'https://x/b/', clicks: 10, impressions: 100, ctr: 0.1, position: 6 },
  { page: 'https://x/c/', clicks: 8, impressions: 80, ctr: 0.1, position: 7 },
]
const current = [
  { page: 'https://x/a', clicks: 10, impressions: 200, ctr: 0.05, position: 4 }, // clicks −50%
  { page: 'https://x/b/', clicks: 10, impressions: 100, ctr: 0.1, position: 12 }, // position +6
  // c missing
]

const report = comparePageSnapshots(baseline, current, {
  minImpressions: 50,
  clickDropPct: 30,
  positionWorseBy: 5,
  impressionDropPct: 40,
})

assert.equal(report.alertCount, 3)
const types = report.alerts.map((a) => a.type).sort()
assert.deepEqual(types, ['clicks_drop', 'missing_in_current', 'position_worse'])

const md = formatDecayMarkdown(report, {
  baselineLabel: 'old',
  currentLabel: 'new',
})
assert.match(md, /clicks_drop/)
assert.match(md, /position_worse/)
assert.match(md, /missing_in_current/)

console.log('gsc lib tests: ok')
