'use client'

import * as React from 'react'
import { type LucideIcon } from 'lucide-react'

import { cn } from '../../utils'

export interface Feature {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export interface FeaturesSectionProps {
  title?: string
  subtitle?: string
  features: Feature[]
  ariaLabelledBy?: string
  className?: string
}

const FeaturesSection = React.forwardRef<HTMLElement, FeaturesSectionProps>(
  (
    {
      title = '주요 기능',
      subtitle = '다양한 기능을 살펴보세요',
      features,
      ariaLabelledBy = 'features-title',
      className,
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={cn('py-20 md:py-28 px-2 sm:px-4 md:px-6 bg-muted/30', className)}
        aria-labelledby={ariaLabelledBy}
      >
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 id={ariaLabelledBy} className="text-3xl md:text-4xl font-bold mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={feature.id}
                  className="bg-card rounded-xl border p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                    <IconComponent className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    )
  }
)
FeaturesSection.displayName = 'FeaturesSection'

export { FeaturesSection }
