import { getSiteUrl } from '@/lib/site-url';
import { buildSitemapIndexXml, SITEMAP_XML_HEADERS } from '@/lib/sitemap-xml';

export async function GET() {
  const baseUrl = getSiteUrl();
  const now = new Date();

  const sitemaps = [
    { loc: `${baseUrl}/sitemap-reformas-integrales.xml`, lastmod: now },
    { loc: `${baseUrl}/sitemap-reformas-estancia.xml`, lastmod: now },
    { loc: `${baseUrl}/sitemap-servicios-tecnicos.xml`, lastmod: now },
    { loc: `${baseUrl}/sitemap-reformas-comerciales.xml`, lastmod: now },
    { loc: `${baseUrl}/sitemap-legal.xml`, lastmod: now },
  ];

  return new Response(buildSitemapIndexXml(sitemaps), { headers: SITEMAP_XML_HEADERS });
}
