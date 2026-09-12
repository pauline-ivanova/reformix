#!/usr/bin/env node
/**
 * Validate A-landings-content landings + public image refs used by MD/heroes.
 * Usage: node tools/content/validate.mjs [--json] [--skip-app-images]
 * Canon: docs/ops-stack.md Phase C
 */
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { validateContent } from './validate-lib.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '../..')

const args = new Set(process.argv.slice(2))
const asJson = args.has('--json')
const skipAppImages = args.has('--skip-app-images')

const result = validateContent(ROOT, { skipAppImages })

if (asJson) {
  console.log(JSON.stringify(result, null, 2))
} else {
  console.log(
    `content:validate — ${result.filesChecked} landings · ${result.errors.length} error(s) · ${result.warnings.length} warning(s)`,
  )

  const byFile = new Map()
  for (const f of result.findings) {
    const list = byFile.get(f.file) || []
    list.push(f)
    byFile.set(f.file, list)
  }

  for (const [file, items] of [...byFile.entries()].sort(([a], [b]) => a.localeCompare(b))) {
    console.log(`\n${file}`)
    for (const item of items) {
      const tag = item.severity === 'error' ? 'ERROR' : 'WARN '
      console.log(`  ${tag}  ${item.message}`)
    }
  }

  if (result.ok) {
    console.log('\nOK — content validation passed')
  } else {
    console.log('\nFAIL — fix errors above (warnings are non-blocking)')
  }
}

process.exit(result.ok ? 0 : 1)
