/**
 * Landing content validation helpers (A-landings-content + public image refs).
 * Canon: docs/ops-stack.md Phase C
 */
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export const CONTENT_DIR_NAME = 'A-landings-content'
export const FILENAME_RE = /^(\d{2})-(\d{3})-([a-z0-9-]+)\.md$/i

/** Minimum blocks every service landing must expose (flexible headings). */
export const REQUIRED_SECTION_PATTERNS = [
  { id: 'hero', label: 'Hero', re: /\bhero\b/i },
  { id: 'faq', label: 'FAQ', re: /\bfaq\b|preguntas?\s+frecuentes/i },
]

/** Soft guidance — warnings only (SEO guide: title ~45–55, desc ≤150). */
export const TITLE_SOFT_MAX = 60
export const DESCRIPTION_SOFT_MAX = 160

const IMAGE_PATH_RE =
  /(?:src|backgroundImage|logoPath|image|href)\s*=\s*["'`](\/images\/[^"'`]+)["'`]|!\[[^\]]*]\((\/images\/[^)\s]+)\)|`(\/images\/[^`]+)`|(?<![`\w])(\/images\/[a-zA-Z0-9._\/-]+\.(?:webp|png|jpe?g|gif|svg|avif))/g

/**
 * @param {string} root
 * @param {string} [contentDirName]
 */
export function listContentFiles(root, contentDirName = CONTENT_DIR_NAME) {
  const dir = path.join(root, contentDirName)
  if (!fs.existsSync(dir)) return []
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => path.join(dir, f))
    .sort()
}

/**
 * @param {string} filename
 */
export function parseContentFileName(filename) {
  const base = path.basename(filename)
  const match = base.match(FILENAME_RE)
  if (!match) return null
  return {
    category: match[1],
    order: match[2],
    slug: match[3],
    file: base,
  }
}

/**
 * Extract title/description from YAML frontmatter or legacy Metadatos SEO drafts.
 * @param {string} raw
 * @returns {{ title: string, description: string, image: string, slug: string, body: string, hasYamlFrontmatter: boolean }}
 */
export function extractLandingMeta(raw) {
  const { data, content } = matter(raw)
  const hasYamlFrontmatter = Object.keys(data).length > 0

  let title = typeof data.title === 'string' ? data.title.trim() : ''
  let description = typeof data.description === 'string' ? data.description.trim() : ''
  let image = typeof data.image === 'string' ? data.image.trim() : ''
  let slug = typeof data.slug === 'string' ? data.slug.trim().replace(/^\/+|\/+$/g, '') : ''

  if (!title) {
    title =
      matchFirst(content, [
        /\*\*Title(?:\s*\([^)]*\))?\s*:\*\*\s*`([^`]+)`/i,
        /\*\*Title\s+Tag\s*:\*\*\s*`([^`]+)`/i,
        /-\s*\*\*Title\s+Tag:\*\*\s*`([^`]+)`/i,
        /\*\*Title(?:\s*\([^)]*\))?\s*:\*\*\s*([^\n*`]+)/i,
      ]) || ''
  }

  if (!description) {
    description =
      matchFirst(content, [
        /\*\*Meta\s+Description(?:\s*\([^)]*\))?\s*:\*\*\s*`([^`]+)`/i,
        /-\s*\*\*Meta\s+Description:\*\*\s*`([^`]+)`/i,
        /\*\*Meta\s+Description(?:\s*\([^)]*\))?\s*:\*\*\s*([^\n*`]+)/i,
      ]) || ''
  }

  if (!image && typeof data.heroImage === 'string') {
    image = data.heroImage.trim()
  }

  return {
    title: collapseWs(title),
    description: collapseWs(description),
    image,
    slug,
    body: content,
    hasYamlFrontmatter,
  }
}

/**
 * @param {string} text
 * @param {RegExp[]} patterns
 */
function matchFirst(text, patterns) {
  for (const re of patterns) {
    const m = text.match(re)
    if (m?.[1]) return m[1].trim()
  }
  return null
}

function collapseWs(s) {
  return s.replace(/\s+/g, ' ').trim()
}

/**
 * Collect local `/images/...` references from text.
 * @param {string} text
 * @returns {string[]}
 */
export function extractImagePaths(text) {
  const found = new Set()
  for (const m of text.matchAll(IMAGE_PATH_RE)) {
    const p = m[1] || m[2] || m[3] || m[4]
    if (p) found.add(p.split(/[?#]/)[0])
  }
  // Frontmatter-style bare paths
  for (const m of text.matchAll(/^\s*(?:image|heroImage|backgroundImage)\s*:\s*["']?(\/images\/[^"'\s]+)/gim)) {
    found.add(m[1].split(/[?#]/)[0])
  }
  return [...found].sort()
}

/**
 * @param {string} root
 * @param {string[]} paths
 * @returns {{ path: string, exists: boolean }[]}
 */
export function checkPublicImages(root, paths) {
  return paths.map((p) => {
    const rel = p.replace(/^\//, '')
    const full = path.join(root, 'public', rel)
    return { path: p, exists: fs.existsSync(full) }
  })
}

/**
 * Scan app TSX for static `/images/` refs (live heroes).
 * @param {string} root
 * @returns {{ file: string, paths: string[] }[]}
 */
export function collectAppImageRefs(root) {
  const appDir = path.join(root, 'app')
  /** @type {{ file: string, paths: string[] }[]} */
  const out = []
  if (!fs.existsSync(appDir)) return out

  /** @param {string} dir */
  function walk(dir) {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      if (ent.name.startsWith('.')) continue
      const full = path.join(dir, ent.name)
      if (ent.isDirectory()) {
        if (ent.name === 'api' || ent.name === 'components') {
          // Still scan components for shared image strings
          if (ent.name === 'api') continue
        }
        walk(full)
        continue
      }
      if (!/\.(tsx|ts|jsx|js)$/.test(ent.name)) continue
      const text = fs.readFileSync(full, 'utf8')
      const paths = extractImagePaths(text)
      if (paths.length) {
        out.push({
          file: path.relative(root, full).replace(/\\/g, '/'),
          paths,
        })
      }
    }
  }

  walk(appDir)
  return out
}

/**
 * @typedef {{ severity: 'error' | 'warning', file: string, message: string }} Finding
 */

/**
 * Validate one landing markdown file.
 * @param {string} root
 * @param {string} filePath
 * @param {string} raw
 * @returns {{ findings: Finding[], meta: ReturnType<typeof extractLandingMeta> & { parsedName: ReturnType<typeof parseContentFileName> } }}
 */
export function validateLandingFile(root, filePath, raw) {
  /** @type {Finding[]} */
  const findings = []
  const rel = path.relative(root, filePath).replace(/\\/g, '/')
  const parsedName = parseContentFileName(filePath)
  const meta = extractLandingMeta(raw)

  if (!parsedName) {
    findings.push({
      severity: 'error',
      file: rel,
      message: `filename must match NN-NNN-slug.md (got ${path.basename(filePath)})`,
    })
  }

  if (!meta.title) {
    findings.push({
      severity: 'error',
      file: rel,
      message: 'missing title (YAML frontmatter `title` or Metadatos SEO Title)',
    })
  } else if (meta.title.length > TITLE_SOFT_MAX) {
    findings.push({
      severity: 'warning',
      file: rel,
      message: `title length ${meta.title.length} > soft max ${TITLE_SOFT_MAX}`,
    })
  }

  if (!meta.description) {
    findings.push({
      severity: 'error',
      file: rel,
      message: 'missing description (YAML `description` or Metadatos SEO Meta Description)',
    })
  } else if (meta.description.length > DESCRIPTION_SOFT_MAX) {
    findings.push({
      severity: 'warning',
      file: rel,
      message: `description length ${meta.description.length} > soft max ${DESCRIPTION_SOFT_MAX}`,
    })
  }

  if (parsedName && meta.slug && meta.slug !== parsedName.slug && parsedName.slug !== 'homepage') {
    findings.push({
      severity: 'error',
      file: rel,
      message: `frontmatter slug "${meta.slug}" != filename slug "${parsedName.slug}"`,
    })
  }

  for (const section of REQUIRED_SECTION_PATTERNS) {
    if (!section.re.test(raw)) {
      findings.push({
        severity: 'error',
        file: rel,
        message: `missing required section: ${section.label}`,
      })
    }
  }

  if (!/\bcta\b|solicita(r)?\s+(tu\s+)?presupuesto|pedir\s+(mi\s+)?presupuesto/i.test(raw)) {
    findings.push({
      severity: 'warning',
      file: rel,
      message: 'no obvious CTA / presupuesto call-to-action found',
    })
  }

  const imagePaths = extractImagePaths(raw)
  if (meta.image) imagePaths.push(meta.image)
  const uniqueImages = [...new Set(imagePaths)]
  for (const check of checkPublicImages(root, uniqueImages)) {
    if (!check.exists) {
      findings.push({
        severity: 'error',
        file: rel,
        message: `missing public asset: ${check.path}`,
      })
    }
  }

  return {
    findings,
    meta: { ...meta, parsedName },
  }
}

/**
 * Cross-file uniqueness + app image integrity.
 * @param {string} root
 * @param {{ file: string, title: string, description: string }[]} entries
 * @returns {Finding[]}
 */
export function validateCorpusUniqueness(entries) {
  /** @type {Finding[]} */
  const findings = []
  /** @type {Map<string, string[]>} */
  const byTitle = new Map()
  /** @type {Map<string, string[]>} */
  const byDesc = new Map()

  for (const e of entries) {
    if (e.title) {
      const list = byTitle.get(e.title) || []
      list.push(e.file)
      byTitle.set(e.title, list)
    }
    if (e.description) {
      const list = byDesc.get(e.description) || []
      list.push(e.file)
      byDesc.set(e.description, list)
    }
  }

  for (const [title, files] of byTitle) {
    if (files.length > 1) {
      for (const file of files) {
        findings.push({
          severity: 'error',
          file,
          message: `duplicate title shared with ${files.filter((f) => f !== file).join(', ')}: "${title}"`,
        })
      }
    }
  }

  for (const [description, files] of byDesc) {
    if (files.length > 1) {
      for (const file of files) {
        findings.push({
          severity: 'error',
          file,
          message: `duplicate description shared with ${files.filter((f) => f !== file).join(', ')}`,
        })
      }
    }
  }

  return findings
}

/**
 * @param {string} root
 * @returns {Finding[]}
 */
export function validateAppImages(root) {
  /** @type {Finding[]} */
  const findings = []
  const refs = collectAppImageRefs(root)
  for (const { file, paths } of refs) {
    for (const check of checkPublicImages(root, paths)) {
      if (!check.exists) {
        findings.push({
          severity: 'error',
          file,
          message: `missing public asset: ${check.path}`,
        })
      }
    }
  }
  return findings
}

/**
 * Run full content validation.
 * @param {string} root
 * @param {{ skipAppImages?: boolean }} [opts]
 */
export function validateContent(root, opts = {}) {
  /** @type {Finding[]} */
  const findings = []
  /** @type {{ file: string, title: string, description: string }[]} */
  const entries = []

  const files = listContentFiles(root)
  if (files.length === 0) {
    findings.push({
      severity: 'error',
      file: CONTENT_DIR_NAME,
      message: 'no markdown landings found',
    })
  }

  for (const filePath of files) {
    const raw = fs.readFileSync(filePath, 'utf8')
    const rel = path.relative(root, filePath).replace(/\\/g, '/')
    const { findings: fileFindings, meta } = validateLandingFile(root, filePath, raw)
    findings.push(...fileFindings)
    entries.push({
      file: rel,
      title: meta.title,
      description: meta.description,
    })
  }

  findings.push(...validateCorpusUniqueness(entries))

  if (!opts.skipAppImages) {
    findings.push(...validateAppImages(root))
  }

  const errors = findings.filter((f) => f.severity === 'error')
  const warnings = findings.filter((f) => f.severity === 'warning')

  return {
    ok: errors.length === 0,
    findings,
    errors,
    warnings,
    filesChecked: files.length,
  }
}
