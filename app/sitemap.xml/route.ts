import { NextResponse } from 'next/server';
import { getSiteUrl } from '@/lib/site-url';

export async function GET() {
  return NextResponse.redirect(`${getSiteUrl()}/sitemap_index.xml`, 301);
}
