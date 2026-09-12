import { BRAND_EMAIL } from '@/lib/schema/ids'

type BrandEmailProps = {
  className?: string
  children?: React.ReactNode
  /** When false, render plain text (still protected from CF obfuscation). */
  asLink?: boolean
}

/**
 * Renders the brand email without Cloudflare Email Address Obfuscation.
 * CF Scrape Shield rewrites mailto/plaintext emails to /cdn-cgi/l/email-protection
 * (404 for crawlers). Wrap with <!--email_off-->…<!--email_on--> so Ahrefs/GSC
 * see a real mailto: link.
 */
export function BrandEmail({
  className,
  children,
  asLink = true,
}: BrandEmailProps) {
  const label = children ?? BRAND_EMAIL

  return (
    <>
      <span dangerouslySetInnerHTML={{ __html: '<!--email_off-->' }} />
      {asLink ? (
        <a href={`mailto:${BRAND_EMAIL}`} className={className}>
          {label}
        </a>
      ) : (
        <span className={className}>{label}</span>
      )}
      <span dangerouslySetInnerHTML={{ __html: '<!--email_on-->' }} />
    </>
  )
}
