'use client'

import * as React from 'react'
import { Chrome, ArrowRight, type LucideIcon } from 'lucide-react'

import { cn } from '../../utils'
import { Button } from '../../atoms'

export interface CtaSectionProps {
  title?: string
  description?: string
  ctaUrl?: string
  ctaLabel?: string
  ctaIcon?: LucideIcon
  secondaryLabel?: string
  secondaryUrl?: string
  ariaLabel?: string
  className?: string
}

const CtaSection = React.forwardRef<HTMLElement, CtaSectionProps>(
  (
    {
      title = '지금 바로 시작하세요',
      description = '무료로 Recorda를 설치하고 브라우저에서 녹음을 시작하세요.',
      ctaUrl = 'https://chrome.google.com/webstore/detail/recorda',
      ctaLabel = 'Chrome에 추가하기',
      ctaIcon: CtaIconComponent = Chrome,
      secondaryLabel = '더 알아보기',
      secondaryUrl = '/help',
      ariaLabel = '설치 안내',
      className,
    },
    ref
  ) => {
    const handleCtaClick = () => {
      window.open(ctaUrl, '_blank', 'noopener,noreferrer')
    }

    return (
      <section
        ref={ref}
        className={cn(
          'py-20 md:py-28 px-4 bg-primary text-primary-foreground',
          className
        )}
        aria-label={ariaLabel}
      >
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg opacity-90 mb-10 max-w-xl mx-auto">
            {description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              onClick={handleCtaClick}
              className="h-14 px-8 text-lg gap-2 w-full sm:w-auto"
              aria-label={`${ctaLabel} (새 창에서 열림)`}
            >
              <CtaIconComponent className="h-5 w-5" aria-hidden="true" />
              {ctaLabel}
            </Button>

            {secondaryUrl && (
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 text-lg gap-2 w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href={secondaryUrl}>
                  {secondaryLabel}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </section>
    )
  }
)
CtaSection.displayName = 'CtaSection'

export { CtaSection }
