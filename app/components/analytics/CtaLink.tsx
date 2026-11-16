'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { ComponentProps, MouseEvent } from 'react'
import { trackCtaClick } from '@/lib/ga4'
import { withContactServiceDonor } from '@/lib/contact-services'

type CtaLinkProps = ComponentProps<typeof Link> & {
  /** Stable id for breakdowns in GA4 (e.g. hero_primary, footer_cta). */
  ctaId?: string
  /** Override service dim; defaults to path-derived slug. */
  service?: string
}

/**
 * Next Link that fires consent-gated `cta_click` on click.
 * Contact CTAs inherit `?service=` from the current landing (donor page).
 */
export default function CtaLink({
  ctaId,
  service,
  onClick,
  children,
  href,
  ...rest
}: CtaLinkProps) {
  const pathname = usePathname() || ''
  const resolvedHref =
    typeof href === 'string'
      ? withContactServiceDonor(href, pathname)
      : href

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const linkUrl =
      typeof resolvedHref === 'string'
        ? resolvedHref
        : resolvedHref.pathname || String(resolvedHref)
    const linkText =
      typeof children === 'string'
        ? children
        : e.currentTarget.textContent?.trim() || undefined

    trackCtaClick({
      linkUrl,
      linkText,
      ctaId,
      service,
    })
    onClick?.(e)
  }

  return (
    <Link href={resolvedHref} onClick={handleClick} {...rest}>
      {children}
    </Link>
  )
}
