import type { StaticPage } from './content-utils';
import { getSiteUrl } from './site-url';

export type SitemapIndexEntry = {
  loc: string;
  lastmod: Date;
};

export type SitemapUrlEntry = {
  loc: string;
  lastmod: Date;
  changefreq?: StaticPage['changeFrequency'];
  priority?: number;
};

export const SITEMAP_XML_HEADERS = {
  'Content-Type': 'application/xml; charset=utf-8',
  'Cache-Control': 'public, max-age=3600, s-maxage=3600',
} as const;

export function pageToSitemapUrl(page: StaticPage, baseUrl = getSiteUrl()): SitemapUrlEntry {
  return {
    loc: page.slug ? `${baseUrl}/${page.slug}` : baseUrl,
    lastmod: page.lastModified,
    changefreq: page.changeFrequency,
    priority: page.priority,
  };
}

export function buildSitemapIndexXml(sitemaps: SitemapIndexEntry[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  .map(
    (sitemap) => `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod.toISOString()}</lastmod>
  </sitemap>`
  )
  .join('\n')}
</sitemapindex>`;
}

export function buildUrlsetXml(urls: SitemapUrlEntry[]): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map((entry) => {
    const changefreq = entry.changefreq
      ? `\n    <changefreq>${entry.changefreq}</changefreq>`
      : '';
    const priority =
      entry.priority !== undefined
        ? `\n    <priority>${entry.priority}</priority>`
        : '';
    return `  <url>
    <loc>${entry.loc}</loc>
    <lastmod>${entry.lastmod.toISOString()}</lastmod>${changefreq}${priority}
  </url>`;
  })
  .join('\n')}
</urlset>`;
}
