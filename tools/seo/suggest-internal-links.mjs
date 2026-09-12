/**
 * Suggest internal links for A-landings-content (suggest-only — never writes MD).
 *
 * Usage:
 *   node tools/seo/suggest-internal-links.mjs
 *   node tools/seo/suggest-internal-links.mjs --path /reformas-cocinas
 *   node tools/seo/suggest-internal-links.mjs --json
 *   node tools/seo/suggest-internal-links.mjs --write
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import {
  extractLandingMeta,
  listContentFiles,
  parseContentFileName,
} from '../content/validate-lib.mjs'
import {
  buildInternalLinkSuggestions,
  formatSuggestionsMarkdown,
  normalizeContentPath,
} from './suggest-internal-links-lib.mjs'

function parseArgs(argv) {
  const opts = { pathPrefix: null, json: false, write: false, help: false }
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i]
    if (a === '--help' || a === '-h') opts.help = true
    else if (a === '--json') opts.json = true
    else if (a === '--write') opts.write = true
    else if (a === '--path' || a.startsWith('--path=')) {
      opts.pathPrefix = a.includes('=') ? a.slice('--path='.length) : argv[++i]
    } else if (!a.startsWith('-') && !opts.pathPrefix) {
      opts.pathPrefix = a
    }
  }
  return opts
}

function printHelp() {
  console.log(`Internal-link suggestions (Cursor/agent review — no Markdown writes).

Options:
  --path <prefix>   Limit to URLs under prefix (e.g. /reformas-cocinas)
  --json            Print JSON instead of markdown
  --write           Write report under docs/seo/research/link-suggestions/
  --help
`)
}

async function loadDocuments(root = process.cwd()) {
  const files = listContentFiles(root)
  const docs = []
  for (const filePath of files) {
    const parsed = parseContentFileName(filePath)
    const raw = await readFile(filePath, 'utf8')
    const meta = extractLandingMeta(raw)
    const slug = meta.slug || parsed?.slug || ''
    docs.push({
      path: slug ? `/${slug}` : '/',
      title: meta.title || slug,
      body: meta.body || '',
      category: parsed?.category || '',
      order: parsed?.order || '',
      slug: parsed?.slug || slug,
      filePath: path.basename(filePath),
    })
  }
  return docs
}

async function main() {
  const opts = parseArgs(process.argv.slice(2))
  if (opts.help) {
    printHelp()
    return
  }

  const docs = await loadDocuments()
  if (docs.length === 0) {
    console.error('No A-landings-content/*.md files found')
    process.exit(1)
  }

  const suggestions = buildInternalLinkSuggestions(docs, {
    pathPrefix: opts.pathPrefix ? normalizeContentPath(opts.pathPrefix) : null,
  })

  if (opts.json) {
    process.stdout.write(JSON.stringify(suggestions, null, 2) + '\n')
  } else {
    process.stdout.write(formatSuggestionsMarkdown(suggestions))
  }

  if (opts.write) {
    const stamp = new Date().toISOString().slice(0, 10)
    const outDir = path.join('docs', 'seo', 'research', 'link-suggestions')
    await mkdir(outDir, { recursive: true })
    const mdPath = path.join(outDir, `suggestions-${stamp}.md`)
    const jsonPath = path.join(outDir, `suggestions-${stamp}.json`)
    await writeFile(mdPath, formatSuggestionsMarkdown(suggestions), 'utf8')
    await writeFile(jsonPath, JSON.stringify(suggestions, null, 2), 'utf8')
    console.error(`Wrote ${mdPath}`)
    console.error(`Wrote ${jsonPath}`)
  }
}

main().catch((err) => {
  console.error(err?.message || err)
  process.exit(1)
})
