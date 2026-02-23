import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.reformix.barcelona';

  // Redirect to sitemap_index.xml
  return NextResponse.redirect(`${baseUrl}/sitemap_index.xml`, 301);
}
