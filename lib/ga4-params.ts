/** Paths that are not a service landing (home, legal, contact hub). */
const NON_SERVICE_SLUGS = new Set([
  '',
  'contacto',
  'cookies',
  'privacidad',
  'aviso-legal',
  'sitemap',
  'api',
])

/** Derive GA4 `service` dim from a URL path (no query/hash). */
export function inferServiceFromPath(pathname: string): string {
  const clean = pathname.split('?')[0]?.split('#')[0] ?? ''
  const slug = clean.replace(/\/+$/, '').replace(/^\//, '').split('/')[0] ?? ''
  if (!slug || NON_SERVICE_SLUGS.has(slug)) return ''
  return slug
}
