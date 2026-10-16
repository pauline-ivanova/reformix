/**
 * JSON-LD for /proyectos (CollectionPage) and /proyectos/[slug] (Article).
 * Canon: docs/schema-contracts.md
 */

import {
  absoluteSchemaUrl,
  buildBreadcrumbList,
  localBusinessRef,
  publisherOrgRef,
  websiteRef,
} from './ids';
import type { Project } from '../proyectos-data';

export function buildProyectosIndexJsonLd(input: {
  title: string;
  description: string;
  items: Array<{ name: string; url: string }>;
}): object {
  const pageUrl = absoluteSchemaUrl('/proyectos');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildBreadcrumbList([
        { name: 'Inicio', url: '/' },
        { name: 'Proyectos', url: '/proyectos' },
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
        name: 'Proyectos realizados por Reformix',
        numberOfItems: input.items.length,
        itemListElement: input.items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          url: absoluteSchemaUrl(item.url),
        })),
      },
    ],
  };
}

export function buildProyectoArticleJsonLd(project: Project): object {
  const pagePath = `/proyectos/${project.slug}`;
  const pageUrl = absoluteSchemaUrl(pagePath);
  const images = [
    project.heroImage,
    ...project.gallery.map((g) => g.src),
  ].filter((src, i, arr) => arr.indexOf(src) === i);

  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildBreadcrumbList([
        { name: 'Inicio', url: '/' },
        { name: 'Proyectos', url: '/proyectos' },
        { name: project.title, url: pagePath },
      ]),
      {
        '@type': 'Article',
        '@id': `${pageUrl}#article`,
        url: pageUrl,
        headline: project.h1,
        name: project.title,
        description: project.metaDescription,
        inLanguage: 'es-ES',
        isPartOf: websiteRef(),
        about: localBusinessRef(),
        author: localBusinessRef(),
        publisher: publisherOrgRef(),
        image: images.map((src) => absoluteSchemaUrl(src)),
        articleSection: 'Proyectos realizados',
        keywords: project.keywords.join(', '),
      },
    ],
  };
}
