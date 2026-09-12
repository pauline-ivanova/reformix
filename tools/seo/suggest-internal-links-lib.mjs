/**
 * Pure helpers for internal-link suggestions over A-landings-content.
 * Suggest-only — never auto-insert into Markdown.
 *
 * Hub model: NN-000-slug.md = hub for category NN; other NN-*.md = spokes.
 */

export function normalizeContentPath(raw) {
  const trimmed = String(raw || '').trim()
  if (!trimmed) return '/'
  const withSlash = trimmed.startsWith('/') ? trimmed : `/${trimmed}`
  return withSlash.replace(/\/+$/, '') || '/'
}

/**
 * @param {{ category: string, order: string, slug: string }} parsed
 */
export function isHubLanding(parsed) {
  return Boolean(parsed) && parsed.order === '000' && parsed.category !== '00'
}

/**
 * @param {{ category: string, order: string }} parsed
 */
export function isHomepageLanding(parsed) {
  return Boolean(parsed) && parsed.category === '00'
}

function bodyMentionsPath(body, targetPath) {
  const needle = normalizeContentPath(targetPath)
  if (!needle || needle === '/') return false
  const patterns = [needle, `${needle}/`, needle.replace(/^\//, '')]
  const text = String(body || '')
  return patterns.some(
    (p) =>
      text.includes(`](${p}`) ||
      text.includes(`href="${p}`) ||
      text.includes(`href='${p}`) ||
      text.includes(`](/${p.replace(/^\//, '')}`)
  )
}

/**
 * @param {Array<{
 *   path: string,
 *   title?: string,
 *   body: string,
 *   category: string,
 *   order: string,
 *   slug: string,
 *   filePath?: string,
 * }>} docs
 */
export function buildInternalLinkSuggestions(docs, opts = {}) {
  const pathPrefix = opts.pathPrefix ? normalizeContentPath(opts.pathPrefix) : null

  const all = docs.map((d) => ({
    ...d,
    path: normalizeContentPath(d.path),
  }))

  const live = all.filter((d) => !isHomepageLanding(d))
  const hubs = live.filter((d) => isHubLanding(d))
  const hubByCategory = new Map(hubs.map((h) => [h.category, h]))

  /** @type {Array<object>} */
  const suggestions = []

  for (const doc of live) {
    if (pathPrefix && doc.path !== pathPrefix && !doc.path.startsWith(`${pathPrefix}/`)) {
      continue
    }

    const title = doc.title || doc.path
    const hub = hubByCategory.get(doc.category)

    // Spoke without link to its category hub
    if (!isHubLanding(doc) && hub && !bodyMentionsPath(doc.body, hub.path)) {
      suggestions.push({
        type: 'add_hub_link',
        source: doc.path,
        sourceTitle: title,
        targets: [hub.path],
        reason: `Spoke in category ${doc.category} does not link to hub`,
        action: `Consider linking to ${hub.path} (editorial review)`,
      })
    }

    // Hub missing links to category spokes
    if (isHubLanding(doc)) {
      const spokes = live.filter(
        (s) => s.category === doc.category && !isHubLanding(s) && s.path !== doc.path
      )
      const missing = spokes
        .map((s) => s.path)
        .filter((p) => !bodyMentionsPath(doc.body, p))
        .slice(0, 12)
      if (missing.length > 0) {
        suggestions.push({
          type: 'hub_missing_spokes',
          source: doc.path,
          sourceTitle: title,
          targets: missing,
          reason: 'Category spokes not linked from hub body',
          action: 'Add ServicesSection / MD links after editorial review',
        })
      }
    }

    // Same-category siblings not linked (spokes only)
    if (!isHubLanding(doc)) {
      const siblings = live.filter(
        (s) =>
          s.category === doc.category &&
          !isHubLanding(s) &&
          s.path !== doc.path
      )
      const unlinked = siblings
        .map((s) => s.path)
        .filter((p) => !bodyMentionsPath(doc.body, p))
        .slice(0, 8)
      if (unlinked.length > 0) {
        suggestions.push({
          type: 'sibling_link',
          source: doc.path,
          sourceTitle: title,
          targets: unlinked,
          reason: 'Same-category siblings not linked in body',
          action: 'Suggest one related CTA / inline markdown link (max one mid-body)',
        })
      }
    }
  }

  // Orphans: spokes with no inbound from hub or any sibling body
  const inbound = new Map()
  for (const doc of live) {
    for (const other of live) {
      if (other.path === doc.path) continue
      if (bodyMentionsPath(doc.body, other.path)) {
        if (!inbound.has(other.path)) inbound.set(other.path, new Set())
        inbound.get(other.path).add(doc.path)
      }
    }
  }

  for (const doc of live) {
    if (pathPrefix && doc.path !== pathPrefix && !doc.path.startsWith(`${pathPrefix}/`)) {
      continue
    }
    if (isHubLanding(doc)) continue
    const hits = inbound.get(doc.path)
    const hub = hubByCategory.get(doc.category)
    const linkedFromHub = hub ? bodyMentionsPath(hub.body, doc.path) : false
    if ((!hits || hits.size === 0) && !linkedFromHub) {
      suggestions.push({
        type: 'orphan',
        source: doc.path,
        sourceTitle: doc.title || doc.path,
        targets: hub ? [hub.path] : [],
        reason: 'No inbound links from hub or sibling landings',
        action: 'Link from hub/siblings after review',
      })
    }
  }

  const order = {
    orphan: 0,
    add_hub_link: 1,
    hub_missing_spokes: 2,
    sibling_link: 3,
  }
  suggestions.sort(
    (a, b) => (order[a.type] ?? 9) - (order[b.type] ?? 9) || a.source.localeCompare(b.source)
  )

  return {
    generatedAt: new Date().toISOString(),
    docCount: live.length,
    suggestionCount: suggestions.length,
    suggestions,
    note: 'Suggest-only. Do not auto-insert into Markdown — agent/owner review required.',
  }
}

export function formatSuggestionsMarkdown(report) {
  const lines = [
    '# Internal link suggestions',
    '',
    `_Suggest-only — do **not** auto-insert into Markdown._`,
    '',
    `- Docs scanned: ${report.docCount}`,
    `- Suggestions: **${report.suggestionCount}**`,
    `- Generated: ${report.generatedAt}`,
    '',
  ]

  if (report.suggestionCount === 0) {
    lines.push('_No suggestions._', '')
    return lines.join('\n')
  }

  lines.push('| Type | Source | Targets | Reason |', '|------|--------|---------|--------|')
  for (const s of report.suggestions) {
    const targets = (s.targets || []).join('<br>') || '—'
    lines.push(
      `| ${s.type} | ${s.source} | ${targets} | ${String(s.reason).replace(/\|/g, '/')} |`
    )
  }
  lines.push('')
  return lines.join('\n')
}
