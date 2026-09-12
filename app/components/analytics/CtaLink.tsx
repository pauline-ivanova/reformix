'use client'

import Link from 'next/link'
import type { ComponentProps, MouseEvent } from 'react'
import { trackCtaClick } from '@/lib/ga4'

type CtaLinkProps = ComponentProps<typeof Link> & {
  /** Stable id for breakdowns in GA4 (e.g. hero_primary, footer_cta). */
  ctaId?: string
  /** Override service dim; defaults to path-derived slug. */
  service?: string
}

/**
 * Next Link that fires consent-gated `cta_click` on click.
 */
export default function CtaLink({
  ctaId,
  service,
  onClick,
  children,
  href,
  ...rest
}: CtaLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const linkUrl = typeof href === 'string' ? href : href.pathname || String(href)
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
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  )
}
