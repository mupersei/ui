'use client'

import * as React from 'react'
import { Mic, Chrome, type LucideIcon } from 'lucide-react'

import { cn } from '../../utils'
import { Button } from '../../atoms'

export interface HeroSectionProps {
  title?: string
  subtitle?: string
  description?: string
  ctaUrl?: string
  ctaLabel?: string
  trustBadge?: string
  icon?: LucideIcon
  ctaIcon?: LucideIcon
  ariaLabel?: string
  className?: string
}

const HeroSection = React.forwardRef<HTMLElement, HeroSectionProps>(
  (
    {
      title = 'Recorda',
      subtitle = '브라우저에서 바로 녹음하세요',
      description = '마이크, 탭 오디오를 한 번의 클릭으로. 무료 크롬 확장 프로그램.',
      ctaUrl = 'https://chrome.google.com/webstore/detail/recorda',
      ctaLabel = 'Chrome에 추가하기',
      trustBadge = '무료 · 설치 간편 · 개인정보 보호',
      icon: IconComponent = Mic,
      ctaIcon: CtaIconComponent = Chrome,
      ariaLabel = '히어로 섹션',
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
          'relative py-20 md:py-32 px-4 overflow-hidden',
          className
        )}
        aria-label={ariaLabel}
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background -z-10" aria-hidden="true" />

        <div className="container mx-auto max-w-4xl text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary text-primary-foreground mb-8 shadow-lg">
            <IconComponent className="h-10 w-10" aria-hidden="true" />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-foreground font-medium mb-4">
            {subtitle}
          </p>

          {/* Description */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            {description}
          </p>

          {/* CTA Button */}
          <Button
            size="lg"
            onClick={handleCtaClick}
            className="h-14 px-8 text-lg gap-2 shadow-lg hover:shadow-xl transition-shadow"
            aria-label={`${ctaLabel} (새 창에서 열림)`}
          >
            <CtaIconComponent className="h-5 w-5" aria-hidden="true" />
            {ctaLabel}
          </Button>

          {/* Trust badge */}
          {trustBadge && (
            <p className="mt-6 text-sm text-muted-foreground">
              {trustBadge}
            </p>
          )}
        </div>
      </section>
    )
  }
)
HeroSection.displayName = 'HeroSection'

export { HeroSection }
