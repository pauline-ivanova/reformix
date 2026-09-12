/**
 * Export Google Search Console search analytics (pages / queries).
 *
 * Auth: service account JSON (add the SA email as a user on the GSC property).
 *
 * Usage:
 *   node --env-file=.env tools/gsc/export.mjs sites
 *   node --env-file=.env tools/gsc/export.mjs pages
 *   node --env-file=.env tools/gsc/export.mjs queries
 *   node --env-file=.env tools/gsc/export.mjs snapshot   # dated JSON+CSV under docs/seo/research/gsc/
 *
 * Env:
 *   GSC_CREDENTIALS_PATH  path to service-account JSON (default: secrets/gsc-service-account.json)
 *   GSC_SITE_URL          e.g. sc-domain:reformix.barcelona or https://www.reformix.barcelona/
 *   GSC_DAYS              lookback for pages/queries (default: 486 ≈ 16 months)
 *   GSC_SNAPSHOT_DAYS     lookback for snapshot command (default: 28)
 */

import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import {
  GSC_DIR,
  LATEST_DIR,
  RESEARCH_DIR,
  dateRange,
  fetchAllRows,
  gscClient,
  mapDimensionRows,
  siteUrl,
  snapshotStamp,
  toCsv,
  writeSnapshotFiles,
} from './lib.mjs'

async function listSites(sc) {
  const res = await sc.sites.list()
  const sites = res.data.siteEntry ?? []
  if (sites.length === 0) {
    console.log('No sites visible to this service account.')
    console.log('Add the SA email in GSC → Settings → Users and permissions.')
    return
  }
  for (const s of sites) {
    console.log(`${s.permissionLevel}\t${s.siteUrl}`)
  }
}

async function exportDimension(sc, dimension, filenameBase, { days, outDirs }) {
  const site = siteUrl()
  const range = dateRange(days)
  const apiRows = await fetchAllRows(sc, site, dimension, range)
  const mapped = mapDimensionRows(dimension, apiRows)
  const meta = {
    site,
    dimension,
    startDate: range.startDate,
    endDate: range.endDate,
    days: range.days,
    rowCount: mapped.length,
    exportedAt: new Date().toISOString(),
  }

  const written = []
  for (const outDir of outDirs) {
    const paths = await writeSnapshotFiles({
      outDir,
      dimension,
      filenameBase,
      rows: mapped,
      meta,
    })
    written.push(paths.csvPath)
  }

  // Legacy flat files for migration tooling / owner habits
  if (filenameBase === 'pages' || filenameBase === 'queries') {
    await mkdir(RESEARCH_DIR, { recursive: true })
    const legacyCsv = path.join(RESEARCH_DIR, `gsc-${filenameBase}.csv`)
    const legacyMeta = path.join(RESEARCH_DIR, `gsc-${filenameBase}.meta.json`)
    const headers = [dimension, 'clicks', 'impressions', 'ctr', 'position']
    await writeFile(legacyCsv, toCsv(headers, mapped), 'utf8')
    await writeFile(legacyMeta, JSON.stringify(meta, null, 2), 'utf8')
    written.push(legacyCsv)
  }

  console.log(`Wrote ${mapped.length} rows → ${written.join(', ')}`)
  console.log(`Range: ${range.startDate} … ${range.endDate}`)
  return meta
}

async function runSnapshot(sc) {
  const stamp = snapshotStamp()
  const datedDir = path.join(GSC_DIR, stamp)
  const days = Number(process.env.GSC_SNAPSHOT_DAYS || 28)
  const outDirs = [datedDir, LATEST_DIR]

  await exportDimension(sc, 'page', 'pages', { days, outDirs })
  await exportDimension(sc, 'query', 'queries', { days, outDirs })

  const index = {
    stamp,
    site: siteUrl(),
    days,
    paths: {
      dated: datedDir,
      latest: LATEST_DIR,
    },
    exportedAt: new Date().toISOString(),
  }
  await mkdir(GSC_DIR, { recursive: true })
  await writeFile(path.join(GSC_DIR, 'last-snapshot.json'), JSON.stringify(index, null, 2), 'utf8')
  console.log(`Snapshot stamp: ${stamp}`)
}

async function main() {
  const cmd = process.argv[2] || 'pages'
  const sc = await gscClient()

  if (cmd === 'sites') {
    await listSites(sc)
    return
  }
  if (cmd === 'pages') {
    await exportDimension(sc, 'page', 'pages', {
      days: undefined,
      outDirs: [LATEST_DIR],
    })
    return
  }
  if (cmd === 'queries') {
    await exportDimension(sc, 'query', 'queries', {
      days: undefined,
      outDirs: [LATEST_DIR],
    })
    return
  }
  if (cmd === 'snapshot') {
    await runSnapshot(sc)
    return
  }

  console.error(`Unknown command: ${cmd}`)
  console.error('Use: sites | pages | queries | snapshot')
  process.exit(1)
}

main().catch((err) => {
  console.error(err?.message || err)
  process.exit(1)
})
