/**
 * Shared Schema.org entity @id nodes.
 * Full definitions live on layout/home; other pages reference via @id only.
 * Canon: docs/schema-contracts.md · docs/ops-stack.md Phase E
 */

export const DEFAULT_SITE_URL = 'https://www.reformix.barcelona'
export const BRAND_NAME = 'Reformix Barcelona'
export const BRAND_EMAIL = 'reformix.barcelona@gmail.com'
export const BRAND_PHONE = '+34 642 029 572'

export function schemaBaseUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL
  return raw.replace(/\/$/, '')
}

export function absoluteSchemaUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith('http')) return pathOrUrl
  return `${schemaBaseUrl()}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`
}

export function schemaOrgId(): string {
  return `${schemaBaseUrl()}/#organization`
}

export function schemaLocalBusinessId(): string {
  return `${schemaBaseUrl()}/#localbusiness`
}

export function schemaWebsiteId(): string {
  return `${schemaBaseUrl()}/#website`
}

/** Lean Organization ref — full node on layout. */
export function orgRef(): { '@id': string } {
  return { '@id': schemaOrgId() }
}

/** Lean LocalBusiness ref — full node on layout. */
export function localBusinessRef(): { '@id': string } {
  return { '@id': schemaLocalBusinessId() }
}

export function websiteRef(): { '@id': string } {
  return { '@id': schemaWebsiteId() }
}

/** Provider for Service schemas — points at LocalBusiness entity. */
export function providerLocalBusinessRef(): Record<string, unknown> {
  return {
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': schemaLocalBusinessId(),
    name: BRAND_NAME,
    url: schemaBaseUrl(),
  }
}

export function publisherOrgRef(): Record<string, unknown> {
  return {
    '@type': 'Organization',
    '@id': schemaOrgId(),
    name: BRAND_NAME,
    logo: {
      '@type': 'ImageObject',
      url: absoluteSchemaUrl('/reformix-logo.svg'),
    },
  }
}

export function buildBreadcrumbList(
  items: Array<{ name: string; url: string }>
): Record<string, unknown> {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteSchemaUrl(item.url),
    })),
  }
}
