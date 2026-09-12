/**
 * IndexNow helpers — notify Bing + participating engines of URL add/change/delete.
 * Complements sitemap crawl; does not replace sitemap submission.
 */
import { execFileSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
export const ROOT = path.resolve(__dirname, '../..')
export const CONTENT_ROOT = path.join(ROOT, 'A-landings-content')

/** Must match `public/<key>.txt` (ownership proof). */
export const INDEXNOW_KEY = '30c04298c93f93b87ea68f0136d8098a'
export const INDEXNOW_HOST = 'www.reformix.barcelona'
export const INDEXNOW_KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`
export const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

export const DEFAULT_SITE_ORIGIN = `https://${INDEXNOW_HOST}`

const CONTENT_MD_RE = /^A-landings-content\/(.+\.md)$/i

/**
 * `01-000-reformas-integrales.md` → `/reformas-integrales`
 * `00-000-homepage.md` → `/`
 * @param {string} filePath
 * @returns {string | null}
 */
export function contentFileToSitePath(filePath) {
  const normalized = filePath.replace(/\\/g, '/')
  const abs = path.isAbsolute(normalized)
    ? normalized
    : path.join(ROOT, normalized)
  const rel = path.relative(CONTENT_ROOT, abs).replace(/\\/g, '/')
  if (!rel || rel.startsWith('..')) return null
  if (!/\.md$/i.test(rel)) return null

  const base = rel.replace(/\.md$/i, '')
  const match = base.match(/^\d+-\d+-(.+)$/)
  if (!match) return null
  const slug = match[1]
  if (slug === 'homepage') return '/'
  return `/${slug}`
}

/**
 * @param {string} sitePath
 * @param {string} [origin]
 */
export function toAbsoluteUrl(sitePath, origin = DEFAULT_SITE_ORIGIN) {
  const base = origin.replace(/\/$/, '')
  if (sitePath === '/') return `${base}/`
  const pathPart = sitePath.startsWith('/') ? sitePath : `/${sitePath}`
  return `${base}${pathPart.replace(/\/$/, '')}`
}

/**
 * @param {string} line
 * @returns {{ status: string, path: string, oldPath?: string } | null}
 */
export function parseNameStatusLine(line) {
  const trimmed = line.trim()
  if (!trimmed) return null
  const parts = trimmed.split('\t')
  const status = parts[0]
  if (!status) return null
  if (status.startsWith('R') || status.startsWith('C')) {
    const oldPath = parts[1]
    const newPath = parts[2]
    if (!oldPath || !newPath) return null
    return { status, path: newPath, oldPath }
  }
  const filePath = parts[1]
  if (!filePath) return null
  return { status, path: filePath }
}

/**
 * @param {string[]} nameStatusLines
 * @param {{ origin?: string }} [opts]
 * @returns {{ urls: string[] }}
 */
export function urlsFromNameStatus(nameStatusLines, opts = {}) {
  const origin = opts.origin || DEFAULT_SITE_ORIGIN
  const urlSet = new Set()

  const addPath = (repoPath) => {
    const m = CONTENT_MD_RE.exec(repoPath.replace(/\\/g, '/'))
    if (!m) return
    const sitePath = contentFileToSitePath(repoPath)
    if (!sitePath) return
    urlSet.add(toAbsoluteUrl(sitePath, origin))
  }

  for (const line of nameStatusLines) {
    const row = parseNameStatusLine(line)
    if (!row) continue
    if (row.oldPath) {
      addPath(row.oldPath)
      addPath(row.path)
      continue
    }
    addPath(row.path)
  }

  return { urls: [...urlSet].sort() }
}

/**
 * @param {string} fromRef
 * @param {string} toRef
 * @returns {string[]}
 */
export function gitNameStatus(fromRef, toRef) {
  const out = execFileSync(
    'git',
    [
      'diff',
      '--name-status',
      '-z',
      `${fromRef}...${toRef}`,
      '--',
      'A-landings-content',
    ],
    { cwd: ROOT, encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 }
  )
  if (!out) return []
  const tokens = out.split('\0').filter(Boolean)
  const lines = []
  let i = 0
  while (i < tokens.length) {
    const status = tokens[i]
    if (!status) break
    if (status.startsWith('R') || status.startsWith('C')) {
      const oldPath = tokens[i + 1]
      const newPath = tokens[i + 2]
      if (oldPath && newPath) lines.push(`${status}\t${oldPath}\t${newPath}`)
      i += 3
    } else {
      const filePath = tokens[i + 1]
      if (filePath) lines.push(`${status}\t${filePath}`)
      i += 2
    }
  }
  return lines
}

/** Child sitemap paths under the site origin. */
export const INDEXNOW_SITEMAP_PATHS = [
  '/sitemap-reformas-integrales.xml',
  '/sitemap-reformas-estancia.xml',
  '/sitemap-servicios-tecnicos.xml',
  '/sitemap-reformas-comerciales.xml',
]

const INDEXNOW_SKIP_PATH_RE =
  /^\/(api|_next)(\/|$)|^\/(privacidad|aviso-legal|cookies)(\/|$)/i

/**
 * @param {string} xml
 * @returns {string[]}
 */
export function extractLocsFromSitemapXml(xml) {
  return [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)].map((m) => m[1].trim())
}

/**
 * @param {string} absoluteUrl
 * @returns {boolean}
 */
export function isIndexNowContentUrl(absoluteUrl) {
  try {
    const { pathname } = new URL(absoluteUrl)
    if (INDEXNOW_SKIP_PATH_RE.test(pathname)) return false
    return true
  } catch {
    return false
  }
}

/**
 * Fetch live child sitemaps → URL list (skips legal).
 * @param {{ origin?: string, fetchImpl?: typeof fetch }} [opts]
 * @returns {Promise<{ urls: string[], sitemapsUsed: string[] }>}
 */
export async function urlsFromLiveSitemaps(opts = {}) {
  const origin = (opts.origin || DEFAULT_SITE_ORIGIN).replace(/\/$/, '')
  const fetchImpl = opts.fetchImpl || fetch
  const sitemapsUsed = []
  const urlSet = new Set()

  for (const sitemapPath of INDEXNOW_SITEMAP_PATHS) {
    const res = await fetchImpl(`${origin}${sitemapPath}`)
    if (!res.ok) {
      throw new Error(`sitemap ${sitemapPath} HTTP ${res.status}`)
    }
    const xml = await res.text()
    let added = 0
    for (const loc of extractLocsFromSitemapXml(xml)) {
      if (!isIndexNowContentUrl(loc)) continue
      let normalized
      try {
        const u = new URL(loc)
        normalized =
          u.pathname === '/' || u.pathname === ''
            ? `${u.origin}/`
            : `${u.origin}${u.pathname.replace(/\/$/, '')}`
      } catch {
        continue
      }
      urlSet.add(normalized)
      added++
    }
    if (added > 0) sitemapsUsed.push(sitemapPath)
  }

  const home = `${origin}/`
  const urls = [...urlSet].sort((a, b) => {
    if (a === home) return -1
    if (b === home) return 1
    return a.localeCompare(b)
  })

  return { urls, sitemapsUsed }
}

/**
 * @param {string[]} urls
 * @param {{ dryRun?: boolean, endpoint?: string, key?: string, host?: string, keyLocation?: string }} [opts]
 */
export async function submitIndexNow(urls, opts = {}) {
  const unique = [...new Set(urls)].filter(Boolean)
  if (unique.length === 0) {
    return { ok: true, submitted: 0, skipped: true, status: null, body: '' }
  }

  const payload = {
    host: opts.host || INDEXNOW_HOST,
    key: opts.key || INDEXNOW_KEY,
    keyLocation: opts.keyLocation || INDEXNOW_KEY_LOCATION,
    urlList: unique,
  }

  if (opts.dryRun) {
    return { ok: true, submitted: unique.length, dryRun: true, payload, status: null, body: '' }
  }

  const endpoint = opts.endpoint || INDEXNOW_ENDPOINT
  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  })
  const body = await res.text()
  const ok = res.status === 200 || res.status === 202 || res.status === 204
  return { ok, submitted: unique.length, status: res.status, body, payload }
}

/**
 * @param {string} url
 * @param {{ attempts?: number, delayMs?: number }} [opts]
 */
export async function waitUntilUrlOk(url, opts = {}) {
  const attempts = opts.attempts ?? 24
  const delayMs = opts.delayMs ?? 15_000
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(url, { method: 'GET', redirect: 'follow' })
      if (res.ok) return { ok: true, attempts: i + 1, status: res.status }
    } catch {
      // retry
    }
    if (i < attempts - 1) {
      await new Promise((r) => setTimeout(r, delayMs))
    }
  }
  return { ok: false, attempts, status: null }
}
