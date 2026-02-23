import { NextRequest, NextResponse } from 'next/server';
import { REFORMAS_COMERCIALES_SLUGS } from '@/lib/content-utils';
import fs from 'fs';
import path from 'path';

function getFileModDate(filePath: string): Date {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime;
  } catch {
    return new Date();
  }
}

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const tzOffset = -date.getTimezoneOffset();
  const tzHours = String(Math.floor(Math.abs(tzOffset) / 60)).padStart(2, '0');
  const tzMinutes = String(Math.abs(tzOffset) % 60).padStart(2, '0');
  const tzSign = tzOffset >= 0 ? '+' : '-';
  return `${year}-${month}-${day} ${hours}:${minutes} ${tzSign}${tzHours}:${tzMinutes}`;
}

/**
 * Gets all static pages from app/ that are reformas comerciales pages
 */
function getReformasComercialesStaticPages(): Array<{
  slug: string;
  lastModified: Date;
  title?: string;
}> {
  const staticPages: Array<{
    slug: string;
    lastModified: Date;
    title?: string;
  }> = [];
  
  const appDir = path.join(process.cwd(), 'app');

  // Directories to exclude
  const excludeDirs = [
    'api',
    'components',
    '[slug]',
    'sitemap',
    'sitemap_index.xml',
    'sitemap-reformas-integrales.xml',
    'sitemap-reformas-estancia.xml',
    'sitemap-servicios-tecnicos.xml',
    'sitemap-reformas-comerciales.xml',
    'sitemap-legal.xml',
    'sitemap.xml',
    'site-map',
    '_next',
  ];

  function scanDirectory(dir: string, baseSlug: string = ''): void {
    if (!fs.existsSync(dir)) {
      return;
    }

    const items = fs.readdirSync(dir, { withFileTypes: true });

    for (const item of items) {
      // Skip hidden files and directories
      if (item.name.startsWith('.')) {
        continue;
      }

      // Skip excluded directories
      if (excludeDirs.includes(item.name)) {
        continue;
      }

      const fullPath = path.join(dir, item.name);

      if (item.isDirectory()) {
        // Recursively scan subdirectories
        const newSlug = baseSlug ? `${baseSlug}/${item.name}` : item.name;
        scanDirectory(fullPath, newSlug);
      } else if (item.name === 'page.tsx' || item.name === 'page.js') {
        // Found a page file
        const slug = baseSlug || '';
        
        // Include if it's a known reformas comerciales page
        if (slug && REFORMAS_COMERCIALES_SLUGS.has(slug)) {
          // Get file modification date
          let lastModified: Date;
          try {
            const stats = fs.statSync(fullPath);
            lastModified = stats.mtime;
          } catch {
            lastModified = new Date();
          }

          staticPages.push({
            slug,
            lastModified,
            title: slug.split('-').map(word => 
              word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' '),
          });
        }
      }
    }
  }

  scanDirectory(appDir);
  return staticPages;
}

export async function GET(request: NextRequest) {
  const protocol = request.headers.get('x-forwarded-proto') || 'http';
  const host = request.headers.get('host') || 'localhost:3000';
  const baseUrl = `${protocol}://${host}`;

  const routes: Array<{
    url: string;
    lastModified: Date;
    changeFrequency: string;
    priority: number;
    title?: string;
  }> = [];

  // Get all static pages from app/ that are reformas comerciales
  const staticPages = getReformasComercialesStaticPages();
  const addedSlugs = new Set<string>();

  // First, add the hub page (reformas-comerciales) if it exists
  const hubPage = staticPages.find(p => p.slug === 'reformas-comerciales');
  if (hubPage) {
    routes.push({
      url: `${baseUrl}/${hubPage.slug}`,
      lastModified: hubPage.lastModified,
      changeFrequency: 'monthly',
      priority: 0.8, // Hub page has slightly higher priority
      title: hubPage.title || 'Reformas Comerciales',
    });
    addedSlugs.add('reformas-comerciales');
  }

  // Then, add all other static pages from app/
  staticPages.forEach(staticPage => {
    // Skip hub page (already added)
    if (staticPage.slug === 'reformas-comerciales') {
      return;
    }

    routes.push({
      url: `${baseUrl}/${staticPage.slug}`,
      lastModified: staticPage.lastModified,
      changeFrequency: 'monthly',
      priority: 0.7,
      title: staticPage.title || staticPage.slug.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' '),
    });
    addedSlugs.add(staticPage.slug);
  });

  // Check if request wants XML (for search engines)
  const acceptHeader = request.headers.get('accept') || '';
  const userAgent = request.headers.get('user-agent') || '';
  const isSearchEngine = /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebot|ia_archiver/i.test(userAgent);
  const explicitlyWantsXML = request.nextUrl.searchParams.get('format') === 'xml' ||
                             (acceptHeader.includes('application/xml') && !acceptHeader.includes('text/html')) ||
                             (acceptHeader.includes('text/xml') && !acceptHeader.includes('text/html'));
  const wantsXML = isSearchEngine || explicitlyWantsXML;

  if (wantsXML) {
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastModified.toISOString()}</lastmod>
    <changefreq>${entry.changeFrequency}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    });
  }

  // Return HTML format (for browsers)
  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sitemap - Reformas Comerciales | Reformix Barcelona</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f5f5f5;
    }
    .header {
      background: linear-gradient(135deg, #002e7c 0%, #001a4a 100%);
      color: white;
      padding: 30px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      flex-wrap: wrap;
    }
    .header-logo {
      max-width: 100px;
      height: auto;
      display: block;
    }
    .header h1 { font-size: 32px; font-weight: 600; margin: 0; }
    .header p { font-size: 16px; opacity: 0.95; max-width: 800px; margin: 0 auto; line-height: 1.6; }
    .header a { color: #fff; text-decoration: underline; }
    .header a:hover { opacity: 0.9; }
    .nav-breadcrumb {
      max-width: 1200px;
      margin: 0 auto;
      padding: 15px 20px;
      background: #f9f9f9;
      border-bottom: 1px solid #e5e5e5;
      font-size: 14px;
    }
    .nav-breadcrumb a {
      color: #B84A2A;
      text-decoration: none;
    }
    .nav-breadcrumb a:hover {
      text-decoration: underline;
    }
    .nav-breadcrumb span {
      color: #999;
      margin: 0 8px;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 30px 20px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .info { margin-bottom: 25px; font-size: 15px; color: #555; }
    .info strong { color: #002e7c; }
    table { width: 100%; border-collapse: collapse; margin-top: 20px; background: white; }
    thead { background: #002e7c; color: white; }
    th { padding: 12px 15px; text-align: left; font-weight: 600; font-size: 14px; }
    tbody tr { border-bottom: 1px solid #e5e5e5; }
    tbody tr:nth-child(even) { background-color: #f9f9f9; }
    tbody tr:hover { background-color: #f5f5f5; }
    td { padding: 12px 15px; font-size: 14px; }
    td a { color: #C4572f; text-decoration: none; }
    td a:hover { text-decoration: underline; }
    .quick-links {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #e5e5e5;
    }
    .quick-link {
      display: inline-flex;
      align-items: center;
      padding: 8px 16px;
      background: #002e7c;
      color: white;
      text-decoration: none;
      border-radius: 6px;
      font-size: 14px;
      font-weight: 500;
      transition: background 0.2s;
    }
    .quick-link:hover {
      background: #001a4a;
      color: white;
    }
    @media (max-width: 768px) {
      .header { 
        padding: 25px 15px; 
        flex-direction: column;
        gap: 15px;
      }
      .header-logo { max-width: 80px; }
      .header h1 { font-size: 24px; text-align: center; }
      .container { padding: 20px 15px; }
      table { font-size: 13px; }
      th, td { padding: 10px 8px; }
      .quick-links { flex-direction: column; }
      .quick-link { width: 100%; justify-content: center; }
    }
  </style>
</head>
<body>
  <div class="header">
    <img src="${baseUrl}/images/reformix-logo-vertical-white.png" alt="Reformix Barcelona" class="header-logo">
    <h1>Sitemap - Reformas Comerciales</h1>
  </div>
  
  <div class="nav-breadcrumb">
    <a href="${baseUrl}">Inicio</a>
    <span>›</span>
    <a href="${baseUrl}/sitemap_index.xml">Índice de Sitemap</a>
    <span>›</span>
    <span>Reformas Comerciales</span>
  </div>
  
  <div class="container">
    <div class="info">
      Este sitemap contiene <strong>${routes.length}</strong> páginas.
    </div>
    <table>
      <thead>
        <tr>
          <th>URL de la Página</th>
          <th>Última Modificación</th>
        </tr>
      </thead>
      <tbody>
        ${routes.map(entry => `
        <tr>
          <td><a href="${entry.url}">${entry.title || entry.url}</a></td>
          <td>${formatDate(entry.lastModified)}</td>
        </tr>`).join('')}
      </tbody>
    </table>
    
    <div class="quick-links">
      <a href="${baseUrl}/sitemap_index.xml" class="quick-link">← Volver al Índice de Sitemap</a>
      <a href="${baseUrl}/sitemap-reformas-integrales.xml" class="quick-link">Ver Sitemap de Reformas Integrales</a>
      <a href="${baseUrl}/sitemap-reformas-estancia.xml" class="quick-link">Ver Sitemap de Reformas por Estancia</a>
      <a href="${baseUrl}/sitemap-servicios-tecnicos.xml" class="quick-link">Ver Sitemap de Servicios Técnicos</a>
    </div>
  </div>
</body>
</html>`;

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}

