#!/usr/bin/env node
/**
 * Submit changed landing URLs to IndexNow (Bing + participating engines).
 *
 * Usage:
 *   node tools/seo/indexnow-submit.mjs --preview --since HEAD~1
 *   node tools/seo/indexnow-submit.mjs --urls https://www.reformix.barcelona/reformas-cocinas
 *   node tools/seo/indexnow-submit.mjs --from-sitemap --preview
 *
 * Note: prefer `--preview` over `--dry-run` — npm itself swallows `--dry-run`.
 * Env: NEXT_PUBLIC_SITE_URL (optional origin override)
 */
import {
  DEFAULT_SITE_ORIGIN,
  gitNameStatus,
  submitIndexNow,
  urlsFromLiveSitemaps,
  urlsFromNameStatus,
  waitUntilUrlOk,
} from './indexnow-lib.mjs'

function printHelp() {
  console.log(`IndexNow submit — notify search engines of URL changes.

Options:
  --since <ref>     Git base ref (default: HEAD~1)
  --to <ref>        Git tip ref (default: HEAD)
  --urls <url...>   Explicit absolute URLs (skips git diff)
  --from-sitemap    Bulk: live content sitemaps
  --wait            Wait until first URL returns HTTP 200 (post-deploy)
  --preview         Print payload; do not POST (alias: --dry-run; prefer --preview under npm)
  --help            This help

Examples:
  npm run indexnow:submit -- --preview --since HEAD~1
  npm run indexnow:submit -- --from-sitemap
  npm run indexnow:submit -- --wait --since $BEFORE_SHA --to $GITHUB_SHA
`)
}

function parseArgs(argv) {
  const opts = {
    since: 'HEAD~1',
    to: 'HEAD',
    urls: [],
    fromSitemap: false,
    wait: false,
    dryRun: false,
    help: false,
  }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--help' || a === '-h') opts.help = true
    else if (a === '--preview' || a === '--dry-run') opts.dryRun = true
    else if (a === '--wait') opts.wait = true
    else if (a === '--from-sitemap') opts.fromSitemap = true
    else if (a === '--since' || a.startsWith('--since=')) {
      opts.since = a.includes('=') ? a.slice('--since='.length) : argv[++i]
    } else if (a === '--to' || a.startsWith('--to=')) {
      opts.to = a.includes('=') ? a.slice('--to='.length) : argv[++i]
    } else if (a === '--urls') {
      while (argv[i + 1] && !argv[i + 1].startsWith('--')) {
        opts.urls.push(argv[++i])
      }
    } else if (a.startsWith('http://') || a.startsWith('https://')) {
      opts.urls.push(a)
    } else {
      console.error(`Unknown argument: ${a}`)
      process.exit(2)
    }
  }
  return opts
}

async function main() {
  const opts = parseArgs(process.argv.slice(2))
  if (opts.help) {
    printHelp()
    return
  }

  const origin = (process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_ORIGIN).replace(
    /\/$/,
    ''
  )

  let urls = [...opts.urls]

  if (urls.length > 0) {
    console.log(`explicit URLs: ${urls.length}`)
  } else if (opts.fromSitemap) {
    const mapped = await urlsFromLiveSitemaps({ origin })
    urls = mapped.urls
    console.log(
      `sitemap bulk: [${mapped.sitemapsUsed.join(', ')}] → ${urls.length} URL(s)`
    )
  } else {
    const lines = gitNameStatus(opts.since, opts.to)
    const mapped = urlsFromNameStatus(lines, { origin })
    urls = mapped.urls
    console.log(
      `git ${opts.since}...${opts.to}: ${lines.length} content change(s) → ${urls.length} URL(s)`
    )
  }

  if (urls.length === 0) {
    console.log('Nothing to submit.')
    return
  }

  for (const u of urls) console.log(`  ${u}`)

  if (opts.wait && !opts.dryRun) {
    const probe = urls[0]
    console.log(`Waiting for live deploy (probe ${probe})…`)
    const live = await waitUntilUrlOk(probe)
    if (!live.ok) {
      console.error(
        `Probe did not return OK after ${live.attempts} attempt(s). Submitting anyway.`
      )
    } else {
      console.log(`Live OK after ${live.attempts} attempt(s) (HTTP ${live.status}).`)
    }
  }

  const result = await submitIndexNow(urls, { dryRun: opts.dryRun })
  if (result.dryRun) {
    console.log('Dry run payload:')
    console.log(JSON.stringify(result.payload, null, 2))
    return
  }

  if (!result.ok) {
    console.error(`IndexNow failed: HTTP ${result.status}`)
    if (result.body) console.error(result.body)
    process.exit(1)
  }

  console.log(`IndexNow OK: ${result.submitted} URL(s) · HTTP ${result.status}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
