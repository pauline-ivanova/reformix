/** Canonical public site origin (always https://www…). Trim env paste artifacts. */

export const DEFAULT_SITE_URL = 'https://www.reformix.barcelona';

export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_SITE_URL;
  return raw.trim().replace(/\/$/, '');
}
