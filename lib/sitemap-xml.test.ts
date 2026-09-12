import assert from 'node:assert/strict';
import {
  buildSitemapIndexXml,
  buildUrlsetXml,
  pageToSitemapUrl,
} from './sitemap-xml.ts';
import { getSiteUrl } from './site-url.ts';

const base = getSiteUrl();
assert.ok(!/\s/.test(base), 'site URL must not contain whitespace');
assert.equal(base, 'https://www.reformix.barcelona');

const indexXml = buildSitemapIndexXml([
  { loc: `${base}/sitemap-legal.xml`, lastmod: new Date('2026-01-01T00:00:00.000Z') },
]);
assert.match(indexXml, /^<\?xml version="1\.0"/);
assert.match(indexXml, /<sitemapindex xmlns=/);
assert.doesNotMatch(indexXml, /<!DOCTYPE html>/i);
assert.match(indexXml, new RegExp(`<loc>${base}/sitemap-legal\\.xml</loc>`));
assert.doesNotMatch(indexXml, /reformix\.barcelona\s*\n/);

const urlset = buildUrlsetXml([
  pageToSitemapUrl({
    slug: '',
    lastModified: new Date('2026-01-01T00:00:00.000Z'),
    changeFrequency: 'weekly',
    priority: 1,
    title: 'Inicio',
  }),
  pageToSitemapUrl({
    slug: 'contacto',
    lastModified: new Date('2026-01-02T00:00:00.000Z'),
    changeFrequency: 'monthly',
    priority: 0.8,
    title: 'Contacto',
  }),
]);
assert.match(urlset, /<urlset xmlns=/);
assert.match(urlset, new RegExp(`<loc>${base}</loc>`));
assert.match(urlset, new RegExp(`<loc>${base}/contacto</loc>`));
assert.doesNotMatch(urlset, /<!DOCTYPE html>/i);

console.log('sitemap-xml tests: ok');
