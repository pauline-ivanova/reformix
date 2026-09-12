import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  extractLandingMeta,
  extractImagePaths,
  parseContentFileName,
  validateLandingFile,
  validateCorpusUniqueness,
} from './validate-lib.mjs'

describe('parseContentFileName', () => {
  it('parses NN-NNN-slug.md', () => {
    assert.deepEqual(parseContentFileName('A-landings-content/02-001-reformas-cocinas.md'), {
      category: '02',
      order: '001',
      slug: 'reformas-cocinas',
      file: '02-001-reformas-cocinas.md',
    })
  })

  it('rejects bad names', () => {
    assert.equal(parseContentFileName('readme.md'), null)
  })
})

describe('extractLandingMeta', () => {
  it('reads YAML frontmatter', () => {
    const meta = extractLandingMeta(`---
title: "Hello Title"
description: "Hello desc for SEO page"
slug: "hello"
image: "/images/hero-bg.webp"
---
### Bloque 1: Hero
`)
    assert.equal(meta.title, 'Hello Title')
    assert.equal(meta.description, 'Hello desc for SEO page')
    assert.equal(meta.slug, 'hello')
    assert.equal(meta.image, '/images/hero-bg.webp')
    assert.equal(meta.hasYamlFrontmatter, true)
  })

  it('reads Metadatos SEO backticks', () => {
    const meta = extractLandingMeta(`# Draft

### **Metadatos SEO**
*   **Title (45-55 caracteres):** \`Reformas Cocinas | Reformix\`
*   **Meta Description (hasta 150 caracteres):** \`Transforma tu cocina en Barcelona.\`

### **Bloque 1: Hero Section**
`)
    assert.equal(meta.title, 'Reformas Cocinas | Reformix')
    assert.match(meta.description, /Transforma tu cocina/)
  })

  it('reads Title Tag / Meta Description bullets', () => {
    const meta = extractLandingMeta(`- **Title Tag:** \`Servicio de Fontanería\`
- **Meta Description:** \`Renovamos la fontanería de tu hogar.\`
### **Bloque 1: Hero Section**
`)
    assert.equal(meta.title, 'Servicio de Fontanería')
    assert.match(meta.description, /Renovamos la fontanería/)
  })
})

describe('extractImagePaths', () => {
  it('finds markdown and attribute image paths', () => {
    const paths = extractImagePaths(`
backgroundImage="/images/hero-bg.webp"
![x](/images/foo.png)
image: "/images/bar.jpg"
`)
    assert.deepEqual(paths.sort(), [
      '/images/bar.jpg',
      '/images/foo.png',
      '/images/hero-bg.webp',
    ])
  })
})

describe('validateLandingFile', () => {
  it('errors on missing title/sections', () => {
    const { findings } = validateLandingFile(
      process.cwd(),
      'A-landings-content/99-999-demo.md',
      '# Empty\n',
    )
    const messages = findings.filter((f) => f.severity === 'error').map((f) => f.message)
    assert.ok(messages.some((m) => /missing title/i.test(m)))
    assert.ok(messages.some((m) => /missing description/i.test(m)))
    assert.ok(messages.some((m) => /Hero/i.test(m)))
    assert.ok(messages.some((m) => /FAQ/i.test(m)))
  })

  it('passes a minimal valid landing', () => {
    const raw = `---
title: "Demo Landing Barcelona | Reformix"
description: "Servicio demo en Barcelona con presupuesto cerrado y garantía."
---
### Bloque 1: Hero Section
CTA presupuesto
### Bloque 10: FAQ
`
    const { findings } = validateLandingFile(
      process.cwd(),
      'A-landings-content/09-001-demo-landing.md',
      raw,
    )
    assert.deepEqual(
      findings.filter((f) => f.severity === 'error'),
      [],
    )
  })
})

describe('validateCorpusUniqueness', () => {
  it('flags duplicate titles', () => {
    const findings = validateCorpusUniqueness([
      { file: 'a.md', title: 'Same', description: 'd1' },
      { file: 'b.md', title: 'Same', description: 'd2' },
    ])
    assert.equal(findings.length, 2)
    assert.ok(findings.every((f) => /duplicate title/i.test(f.message)))
  })
})
