import { getReformasComercialesPages } from '@/lib/content-utils';
import { buildUrlsetXml, pageToSitemapUrl, SITEMAP_XML_HEADERS } from '@/lib/sitemap-xml';

export async function GET() {
  const urls = getReformasComercialesPages().map((page) => pageToSitemapUrl(page));
  return new Response(buildUrlsetXml(urls), { headers: SITEMAP_XML_HEADERS });
}
