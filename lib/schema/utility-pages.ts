/**
 * Page-level JSON-LD builders (ContactPage, CollectionPage hubs, legal WebPage).
 * Canon: docs/schema-contracts.md
 */

import {
  absoluteSchemaUrl,
  BRAND_EMAIL,
  BRAND_PHONE,
  buildBreadcrumbList,
  localBusinessRef,
  orgRef,
  publisherOrgRef,
  schemaBaseUrl,
  websiteRef,
} from '@/lib/schema/ids'

const MAX_LIST_ITEMS = 24

export type CollectionListItem = {
  name: string
  url: string
}

export function buildContactPageJsonLd(input?: {
  description?: string
}): object {
  const pageUrl = absoluteSchemaUrl('/contacto')
  const description =
    input?.description ||
    'Contacta con Reformix Barcelona para solicitar un presupuesto gratuito. Estamos en Sabadell, Vallès Occidental.'

  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildBreadcrumbList([
        { name: 'Inicio', url: '/' },
        { name: 'Contacto', url: '/contacto' },
      ]),
      {
        '@type': 'ContactPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Contacto y Presupuesto',
        description,
        inLanguage: 'es-ES',
        isPartOf: websiteRef(),
        about: localBusinessRef(),
        mainEntity: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          email: BRAND_EMAIL,
          telephone: BRAND_PHONE,
          availableLanguage: ['Spanish', 'Catalan'],
          areaServed: 'ES',
          url: pageUrl,
        },
        publisher: publisherOrgRef(),
      },
    ],
  }
}

export function buildCollectionPageJsonLd(input: {
  pagePath: string
  title: string
  description?: string
  listName: string
  items: CollectionListItem[]
}): object {
  const pageUrl = absoluteSchemaUrl(input.pagePath)
  const items = input.items
    .filter((item) => item.url && item.url !== '/contacto')
    .slice(0, MAX_LIST_ITEMS)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildBreadcrumbList([
        { name: 'Inicio', url: '/' },
        { name: input.title, url: input.pagePath },
      ]),
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#collection`,
        url: pageUrl,
        name: input.title,
        description: input.description,
        inLanguage: 'es-ES',
        isPartOf: websiteRef(),
        about: localBusinessRef(),
        publisher: publisherOrgRef(),
        mainEntity: { '@id': `${pageUrl}#list` },
      },
      {
        '@type': 'ItemList',
        '@id': `${pageUrl}#list`,
        name: input.listName,
        numberOfItems: items.length,
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          url: absoluteSchemaUrl(item.url),
        })),
      },
    ],
  }
}

export function buildLegalPageJsonLd(input: {
  pagePath: string
  title: string
  description?: string
  dateModified?: string
}): object {
  const pageUrl = absoluteSchemaUrl(input.pagePath)
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildBreadcrumbList([
        { name: 'Inicio', url: '/' },
        { name: input.title, url: input.pagePath },
      ]),
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: input.title,
        description: input.description,
        inLanguage: 'es-ES',
        isPartOf: websiteRef(),
        about: orgRef(),
        dateModified: input.dateModified,
        publisher: publisherOrgRef(),
      },
    ],
  }
}

/** Stable Org @id for tests/docs. */
export function canonicalOrgId(): string {
  return `${schemaBaseUrl()}/#organization`
}
