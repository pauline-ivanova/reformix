/**
 * Compare two GSC page snapshots and print content-decay alerts.
 *
 * Usage:
 *   node tools/gsc/decay.mjs
 *   node tools/gsc/decay.mjs --baseline docs/seo/research/gsc/2026-08-01 --current docs/seo/research/gsc/latest
 *   node tools/gsc/decay.mjs --write
 *
 * Env thresholds (optional):
 *   GSC_DECAY_MIN_IMPRESSIONS=50
 *   GSC_DECAY_CLICK_DROP_PCT=30
 *   GSC_DECAY_POSITION_WORSE=5
 *   GSC_DECAY_IMPRESSION_DROP_PCT=40
 */

import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import {
  GSC_DIR,
  LATEST_DIR,
  comparePageSnapshots,
  formatDecayMarkdown,
  listSnapshotDirs,
  loadPageRowsFromDir,
} from './lib.mjs'

function parseArgs(argv) {
  const opts = { baseline: null, current: null, write: false, help: false, positional: [] }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--help' || a === '-h') opts.help = true
    else if (a === '--write') opts.write = true
    else if (a === '--baseline' || a.startsWith('--baseline=')) {
      opts.baseline = a.includes('=') ? a.slice('--baseline='.length) : argv[++i]
    } else if (a === '--current' || a.startsWith('--current=')) {
      opts.current = a.includes('=') ? a.slice('--current='.length) : argv[++i]
    } else if (!a.startsWith('-')) {
      opts.positional.push(a)
    }
  }
  return opts
}

function printHelp() {
  console.log(`GSC content decay — compare page snapshots.

Options:
  --baseline <dir>   Older snapshot directory (default: previous dated folder)
  --current <dir>    Newer snapshot directory (default: docs/seo/research/gsc/latest)
  --write            Write report under docs/seo/research/gsc/reports/
  --help             This help

First take two snapshots:
  npm run gsc:snapshot
  # … wait a week …
  npm run gsc:snapshot
  npm run gsc:decay
`)
}

async function resolveDirs(opts) {
  let current = opts.current || LATEST_DIR
  let baseline = opts.baseline

  // Positional dirs (npm on Windows often drops --baseline/--current flags)
  if (!baseline && opts.positional?.[0]) baseline = opts.positional[0]
  if ((!opts.current || opts.current === LATEST_DIR) && opts.positional?.[1]) {
    current = opts.positional[1]
  }

  if (!baseline) {
    const stamps = await listSnapshotDirs()
    if (stamps.length < 2) {
      throw new Error(
        'Need at least two dated snapshot folders under docs/seo/research/gsc/YYYY-MM-DD (or pass --baseline). Run: npm run gsc:snapshot'
      )
    }
    baseline = path.join(GSC_DIR, stamps[stamps.length - 2])
    if (!opts.current) {
      current = path.join(GSC_DIR, stamps[stamps.length - 1])
    }
  }

  return { baseline, current }
}

async function main() {
  const opts = parseArgs(process.argv.slice(2))
  if (opts.help) {
    printHelp()
    return
  }

  const { baseline, current } = await resolveDirs(opts)
  const [baseLoaded, curLoaded] = await Promise.all([
    loadPageRowsFromDir(baseline),
    loadPageRowsFromDir(current),
  ])

  const report = comparePageSnapshots(baseLoaded.rows, curLoaded.rows, {
    minImpressions: process.env.GSC_DECAY_MIN_IMPRESSIONS,
    clickDropPct: process.env.GSC_DECAY_CLICK_DROP_PCT,
    positionWorseBy: process.env.GSC_DECAY_POSITION_WORSE,
    impressionDropPct: process.env.GSC_DECAY_IMPRESSION_DROP_PCT,
  })

  const md = formatDecayMarkdown(report, {
    baselineLabel: baseline,
    currentLabel: current,
  })
  process.stdout.write(md)

  if (opts.write) {
    const stamp = new Date().toISOString().slice(0, 10)
    const outDir = path.join(GSC_DIR, 'reports')
    await mkdir(outDir, { recursive: true })
    const mdPath = path.join(outDir, `decay-${stamp}.md`)
    const jsonPath = path.join(outDir, `decay-${stamp}.json`)
    await writeFile(mdPath, md, 'utf8')
    await writeFile(
      jsonPath,
      JSON.stringify(
        {
          baseline,
          current,
          baselineSource: baseLoaded.source,
          currentSource: curLoaded.source,
          ...report,
          generatedAt: new Date().toISOString(),
        },
        null,
        2
      ),
      'utf8'
    )
    console.error(`Wrote ${mdPath}`)
    console.error(`Wrote ${jsonPath}`)
  }

  // Non-zero exit only when used as a strict gate (opt-in)
  if (process.env.GSC_DECAY_FAIL_ON_ALERT === '1' && report.alertCount > 0) {
    process.exit(2)
  }
}

main().catch((err) => {
  console.error(err?.message || err)
  process.exit(1)
})
