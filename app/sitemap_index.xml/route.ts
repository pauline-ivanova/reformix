import { NextRequest, NextResponse } from 'next/server';
import { 
  getReformasIntegralesPages, 
  getReformasEstanciaPages, 
  getServiciosTecnicosPages, 
  getReformasComercialesPages, 
  getLegalPages 
} from '@/lib/content-utils';
import fs from 'fs';
import path from 'path';

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

export async function GET(request: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';
  const now = new Date();
  
  // Count pages in each category using shared logic
  const reformasIntegralesCount = getReformasIntegralesPages().length;
  const reformasEstanciaCount = getReformasEstanciaPages().length;
  const serviciosTecnicosCount = getServiciosTecnicosPages().length;
  const reformasComercialesCount = getReformasComercialesPages().length;
  const staticPagesCount = getLegalPages().length;
  
  const totalPages = reformasIntegralesCount + reformasEstanciaCount + serviciosTecnicosCount + reformasComercialesCount + staticPagesCount;
  
  // List of all sitemaps
  const sitemaps = [
    {
      loc: `${baseUrl}/sitemap-reformas-integrales.xml`,
      lastmod: now,
      name: 'Reformas Integrales',
      pageCount: reformasIntegralesCount,
    },
    {
      loc: `${baseUrl}/sitemap-reformas-estancia.xml`,
      lastmod: now,
      name: 'Reformas por Estancia',
      pageCount: reformasEstanciaCount,
    },
    {
      loc: `${baseUrl}/sitemap-servicios-tecnicos.xml`,
      lastmod: now,
      name: 'Servicios Técnicos',
      pageCount: serviciosTecnicosCount,
    },
    {
      loc: `${baseUrl}/sitemap-reformas-comerciales.xml`,
      lastmod: now,
      name: 'Reformas Comerciales',
      pageCount: reformasComercialesCount,
    },
    {
      loc: `${baseUrl}/sitemap-legal.xml`,
      lastmod: now,
      name: 'Información y Legal',
      pageCount: staticPagesCount,
    },
  ];

  // Check if request wants XML (for search engines)
  const acceptHeader = request.headers.get('accept') || '';
  const userAgent = request.headers.get('user-agent') || '';
  const isSearchEngine = /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot|sogou|exabot|facebot|ia_archiver/i.test(userAgent);
  const explicitlyWantsXML = request.nextUrl.searchParams.get('format') === 'xml' ||
                             (acceptHeader.includes('application/xml') && !acceptHeader.includes('text/html')) ||
                             (acceptHeader.includes('text/xml') && !acceptHeader.includes('text/html'));
  const wantsXML = isSearchEngine || explicitlyWantsXML;

  if (wantsXML) {
    // Return XML format
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps.map(sitemap => `  <sitemap>
    <loc>${sitemap.loc}</loc>
    <lastmod>${sitemap.lastmod.toISOString()}</lastmod>
  </sitemap>`).join('\n')}
</sitemapindex>`;

    return new NextResponse(xml, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    });
  }

  // Return HTML format (for browsers) - адаптировано под бренд Reformix
  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="canonical" href="${baseUrl}/sitemap_index.xml">
  <title>Índice de Sitemap XML - Reformix Barcelona</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
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
    .header h1 {
      font-size: 32px;
      font-weight: 600;
      margin: 0;
    }
    .header p {
      font-size: 16px;
      opacity: 0.95;
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.6;
    }
    .header a {
      color: #fff;
      text-decoration: underline;
    }
    .header a:hover {
      opacity: 0.9;
    }
    .nav-breadcrumb {
      max-width: 1200px;
      margin: 0 auto;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 30px 20px;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .info {
      margin-bottom: 25px;
      font-size: 15px;
      color: #555;
    }
    .info strong {
      color: #002e7c;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
      background: white;
    }
    thead {
      background: #002e7c;
      color: white;
    }
    th {
      padding: 12px 15px;
      text-align: left;
      font-weight: 600;
      font-size: 14px;
    }
    tbody tr {
      border-bottom: 1px solid #e5e5e5;
    }
    tbody tr:nth-child(even) {
      background-color: #f9f9f9;
    }
    tbody tr:hover {
      background-color: #f5f5f5;
    }
    td {
      padding: 12px 15px;
      font-size: 14px;
    }
    td a {
      color: #B84A2A;
      text-decoration: none;
    }
    td a:hover {
      text-decoration: underline;
    }
    .nav-breadcrumb {
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
    <h1>Índice de Sitemap XML</h1>
  </div>
  
  <div class="nav-breadcrumb">
    <a href="${baseUrl}">Inicio</a>
    <span>›</span>
    <span>Índice de Sitemap XML</span>
  </div>
  
  <div class="container">
    <div class="info">
      <p style="margin-bottom: 15px;">
        Este índice de sitemap XML contiene <strong>${sitemaps.length}</strong> sitemaps con un total de <strong>${totalPages}</strong> páginas.
      </p>
      <p style="margin-bottom: 0;">
        <strong>Desglose por categoría:</strong><br>
        • Reformas Integrales: <strong>${reformasIntegralesCount}</strong> páginas<br>
        • Reformas por Estancia: <strong>${reformasEstanciaCount}</strong> páginas<br>
        • Servicios Técnicos: <strong>${serviciosTecnicosCount}</strong> páginas<br>
        • Reformas Comerciales: <strong>${reformasComercialesCount}</strong> páginas<br>
        • Información y Legal: <strong>${staticPagesCount}</strong> páginas
      </p>
    </div>
    
    <table>
      <thead>
        <tr>
          <th>Sitemap</th>
          <th>Páginas</th>
          <th>Última Modificación</th>
        </tr>
      </thead>
      <tbody>
        ${sitemaps.map(sitemap => `
        <tr>
          <td><a href="${sitemap.loc}">${sitemap.name}</a></td>
          <td><strong>${sitemap.pageCount}</strong></td>
          <td>${formatDate(sitemap.lastmod)}</td>
        </tr>`).join('')}
      </tbody>
    </table>
    
    <div class="quick-links">
      <a href="${baseUrl}" class="quick-link">← Volver al Inicio</a>
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

