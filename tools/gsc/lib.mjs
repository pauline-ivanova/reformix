/**
 * Shared helpers for Google Search Console local tooling.
 * Auth: service-account JSON (SA email must be a user on the GSC property).
 */

import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { google } from 'googleapis'

export const SCOPE = 'https://www.googleapis.com/auth/webmasters.readonly'
export const RESEARCH_DIR = path.join('docs', 'seo', 'research')
export const GSC_DIR = path.join(RESEARCH_DIR, 'gsc')
export const LATEST_DIR = path.join(GSC_DIR, 'latest')
export const ROW_LIMIT = 25000

export function credsPath() {
  return (
    process.env.GSC_CREDENTIALS_PATH?.trim() ||
    process.env.GOOGLE_APPLICATION_CREDENTIALS?.trim() ||
    path.join('secrets', 'gsc-service-account.json')
  )
}

export function siteUrl() {
  const raw = process.env.GSC_SITE_URL?.trim()
  if (!raw) {
    throw new Error(
      'Set GSC_SITE_URL (e.g. sc-domain:reformix.barcelona or https://www.reformix.barcelona/)'
    )
  }
  return raw
}

export function dateRange(daysOverride) {
  const days = Number(daysOverride ?? process.env.GSC_DAYS ?? 486)
  const end = new Date()
  // GSC data lags ~2–3 days
  end.setUTCDate(end.getUTCDate() - 3)
  const start = new Date(end)
  start.setUTCDate(start.getUTCDate() - (Number.isFinite(days) ? days : 28))
  const fmt = (d) => d.toISOString().slice(0, 10)
  return { startDate: fmt(start), endDate: fmt(end), days: Number.isFinite(days) ? days : 28 }
}

export async function gscClient() {
  const auth = new google.auth.GoogleAuth({
    keyFile: credsPath(),
    scopes: [SCOPE],
  })
  return google.searchconsole({ version: 'v1', auth })
}

export function toCsv(headers, rows) {
  const esc = (v) => {
    const s = v == null ? '' : String(v)
    return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
  }
  return [headers.join(','), ...rows.map((r) => headers.map((h) => esc(r[h])).join(','))].join(
    '\n'
  )
}

/** Minimal CSV parser for our GSC exports (quoted fields supported). */
export function parseCsv(text) {
  const lines = String(text).replace(/^\uFEFF/, '').split(/\r?\n/).filter((l) => l.length > 0)
  if (lines.length === 0) return []
  const headers = splitCsvLine(lines[0])
  return lines.slice(1).map((line) => {
    const cells = splitCsvLine(line)
    const row = {}
    headers.forEach((h, i) => {
      row[h] = cells[i] ?? ''
    })
    return row
  })
}

function splitCsvLine(line) {
  const out = []
  let cur = ''
  let inQuotes = false
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          cur += '"'
          i++
        } else {
          inQuotes = false
        }
      } else {
        cur += ch
      }
    } else if (ch === '"') {
      inQuotes = true
    } else if (ch === ',') {
      out.push(cur)
      cur = ''
    } else {
      cur += ch
    }
  }
  out.push(cur)
  return out
}

export async function fetchAllRows(sc, site, dimension, range) {
  const { startDate, endDate } = range
  const rows = []
  let startRow = 0

  for (;;) {
    const res = await sc.searchanalytics.query({
      siteUrl: site,
      requestBody: {
        startDate,
        endDate,
        dimensions: [dimension],
        rowLimit: ROW_LIMIT,
        startRow,
        dataState: 'final',
      },
    })
    const batch = res.data.rows ?? []
    rows.push(...batch)
    if (batch.length < ROW_LIMIT) break
    startRow += batch.length
  }

  return rows
}

export function mapDimensionRows(dimension, apiRows) {
  const mapped = apiRows.map((r) => ({
    [dimension]: r.keys?.[0] ?? '',
    clicks: Number(r.clicks ?? 0),
    impressions: Number(r.impressions ?? 0),
    ctr: Number(r.ctr ?? 0),
    position: Number(r.position ?? 0),
  }))
  mapped.sort((a, b) => Number(b.clicks) - Number(a.clicks))
  return mapped
}

export async function writeSnapshotFiles({
  outDir,
  dimension,
  filenameBase,
  rows,
  meta,
}) {
  await mkdir(outDir, { recursive: true })
  const headers = [dimension, 'clicks', 'impressions', 'ctr', 'position']
  const csvPath = path.join(outDir, `${filenameBase}.csv`)
  const jsonPath = path.join(outDir, `${filenameBase}.json`)
  const metaPath = path.join(outDir, `${filenameBase}.meta.json`)

  await writeFile(csvPath, toCsv(headers, rows), 'utf8')
  await writeFile(jsonPath, JSON.stringify({ ...meta, rows }, null, 2), 'utf8')
  await writeFile(metaPath, JSON.stringify(meta, null, 2), 'utf8')

  return { csvPath, jsonPath, metaPath }
}

export function snapshotStamp(date = new Date()) {
  return date.toISOString().slice(0, 10)
}

export async function listSnapshotDirs() {
  await mkdir(GSC_DIR, { recursive: true })
  const entries = await readdir(GSC_DIR, { withFileTypes: true })
  return entries
    .filter((e) => e.isDirectory() && /^\d{4}-\d{2}-\d{2}$/.test(e.name))
    .map((e) => e.name)
    .sort()
}

export async function loadPageRowsFromDir(dir) {
  const jsonPath = path.join(dir, 'pages.json')
  const csvPath = path.join(dir, 'pages.csv')
  try {
    const raw = await readFile(jsonPath, 'utf8')
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed.rows)) return { rows: parsed.rows, source: jsonPath, meta: parsed }
    if (Array.isArray(parsed)) return { rows: parsed, source: jsonPath, meta: null }
  } catch {
    /* fall through to CSV */
  }
  const csv = await readFile(csvPath, 'utf8')
  const rows = parseCsv(csv).map((r) => ({
    page: r.page,
    clicks: Number(r.clicks || 0),
    impressions: Number(r.impressions || 0),
    ctr: Number(r.ctr || 0),
    position: Number(r.position || 0),
  }))
  return { rows, source: csvPath, meta: null }
}

/**
 * Compare two page snapshots. Pure — used by decay CLI and tests.
 */
export function comparePageSnapshots(baselineRows, currentRows, opts = {}) {
  const minImpressions = Number(opts.minImpressions ?? 50)
  const clickDropPct = Number(opts.clickDropPct ?? 30)
  const positionWorseBy = Number(opts.positionWorseBy ?? 5)
  const impressionDropPct = Number(opts.impressionDropPct ?? 40)

  const baseMap = new Map(baselineRows.map((r) => [normalizePageKey(r.page), r]))
  const curMap = new Map(currentRows.map((r) => [normalizePageKey(r.page), r]))

  const alerts = []
  const seen = new Set([...baseMap.keys(), ...curMap.keys()])

  for (const key of seen) {
    const base = baseMap.get(key)
    const cur = curMap.get(key)
    if (!base || !cur) {
      if (base && !cur && Number(base.impressions) >= minImpressions) {
        alerts.push({
          type: 'missing_in_current',
          page: base.page,
          baseline: metricsOf(base),
          current: null,
          detail: 'URL had impressions in baseline but is absent from current export',
        })
      }
      continue
    }

    const bImp = Number(base.impressions)
    const cImp = Number(cur.impressions)
    const bClicks = Number(base.clicks)
    const cClicks = Number(cur.clicks)
    const bPos = Number(base.position)
    const cPos = Number(cur.position)

    if (Math.max(bImp, cImp) < minImpressions) continue

    if (bClicks >= 5 && cClicks < bClicks) {
      const drop = ((bClicks - cClicks) / bClicks) * 100
      if (drop >= clickDropPct) {
        alerts.push({
          type: 'clicks_drop',
          page: cur.page,
          baseline: metricsOf(base),
          current: metricsOf(cur),
          detail: `Clicks −${drop.toFixed(1)}% (${bClicks} → ${cClicks})`,
          delta: { clicksPct: -drop },
        })
      }
    }

    if (bImp >= minImpressions && cPos - bPos >= positionWorseBy) {
      alerts.push({
        type: 'position_worse',
        page: cur.page,
        baseline: metricsOf(base),
        current: metricsOf(cur),
        detail: `Avg position ${bPos.toFixed(1)} → ${cPos.toFixed(1)} (+${(cPos - bPos).toFixed(1)})`,
        delta: { position: cPos - bPos },
      })
    }

    if (bImp >= minImpressions && cImp < bImp) {
      const drop = ((bImp - cImp) / bImp) * 100
      if (drop >= impressionDropPct) {
        alerts.push({
          type: 'impressions_drop',
          page: cur.page,
          baseline: metricsOf(base),
          current: metricsOf(cur),
          detail: `Impressions −${drop.toFixed(1)}% (${bImp} → ${cImp})`,
          delta: { impressionsPct: -drop },
        })
      }
    }
  }

  const rank = { missing_in_current: 0, clicks_drop: 1, position_worse: 2, impressions_drop: 3 }
  alerts.sort((a, b) => (rank[a.type] ?? 9) - (rank[b.type] ?? 9) || a.page.localeCompare(b.page))

  return {
    alertCount: alerts.length,
    alerts,
    comparedUrls: seen.size,
    thresholds: { minImpressions, clickDropPct, positionWorseBy, impressionDropPct },
  }
}

function normalizePageKey(page) {
  return String(page || '')
    .trim()
    .replace(/\/+$/, '')
    .toLowerCase()
}

function metricsOf(row) {
  return {
    clicks: Number(row.clicks || 0),
    impressions: Number(row.impressions || 0),
    ctr: Number(row.ctr || 0),
    position: Number(row.position || 0),
  }
}

export function formatDecayMarkdown(report, { baselineLabel, currentLabel }) {
  const lines = [
    '# GSC content decay report',
    '',
    `- Baseline: \`${baselineLabel}\``,
    `- Current: \`${currentLabel}\``,
    `- Compared URLs: ${report.comparedUrls}`,
    `- Alerts: **${report.alertCount}**`,
    `- Thresholds: minImpressions=${report.thresholds.minImpressions}, clickDrop≥${report.thresholds.clickDropPct}%, positionWorse≥${report.thresholds.positionWorseBy}, impressionDrop≥${report.thresholds.impressionDropPct}%`,
    '',
  ]

  if (report.alertCount === 0) {
    lines.push('_No alerts above thresholds._', '')
    return lines.join('\n')
  }

  lines.push('| Type | Page | Detail |', '|------|------|--------|')
  for (const a of report.alerts) {
    lines.push(`| ${a.type} | ${a.page} | ${a.detail.replace(/\|/g, '/')} |`)
  }
  lines.push('')
  return lines.join('\n')
}
