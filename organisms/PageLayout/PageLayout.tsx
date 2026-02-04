'use client'

import * as React from 'react'

import { cn } from '../../utils'

export interface PageLayoutProps {
  header?: React.ReactNode
  footer?: React.ReactNode
  children: React.ReactNode
  className?: string
  mainClassName?: string
}

const PageLayout = React.forwardRef<HTMLDivElement, PageLayoutProps>(
  ({ header, footer, children, className, mainClassName }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('flex min-h-screen flex-col', className)}
      >
        {header}
        <main
          className={cn(
            'flex-1 container py-4 md:py-8 px-2 sm:px-4 md:px-6',
            mainClassName
          )}
        >
          {children}
        </main>
        {footer}
      </div>
    )
  }
)
PageLayout.displayName = 'PageLayout'

export { PageLayout }
