'use client'

import * as React from 'react'

import { cn } from '../../utils'
import { Button } from '../../atoms'

export interface FooterLink {
  label: string
  href: string
}

export interface FooterProps {
  brandName?: string
  copyright?: string
  links?: FooterLink[]
  navAriaLabel?: string
  className?: string
}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  (
    {
      brandName = 'Brand',
      copyright = 'All rights reserved.',
      links = [
        { label: '이용약관', href: '/terms' },
        { label: '개인정보처리방침', href: '/privacy' },
        { label: '문의하기', href: '/contact' },
      ],
      navAriaLabel = 'Footer links',
      className,
    },
    ref
  ) => {
    const currentYear = new Date().getFullYear()

    return (
      <footer
        ref={ref}
        className={cn('border-t py-4 bg-background', className)}
        role="contentinfo"
      >
        <div className="container flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0 px-2 sm:px-4 md:px-6">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {brandName}. {copyright}
          </p>
          {links.length > 0 && (
            <nav className="flex space-x-6" aria-label={navAriaLabel}>
              {links.map((link) => (
                <Button
                  key={link.href}
                  variant="link"
                  size="sm"
                  className="text-xs text-muted-foreground p-0 h-auto"
                  asChild
                >
                  <a href={link.href}>{link.label}</a>
                </Button>
              ))}
            </nav>
          )}
        </div>
      </footer>
    )
  }
)
Footer.displayName = 'Footer'

export { Footer }
