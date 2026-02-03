'use client'

import * as React from 'react'

import { cn } from '../../utils'
import { ItemCard, type ItemCardItem, type ItemCardViewMode } from '../../molecules/ItemCard'

export interface ItemsSectionProps<T extends ItemCardItem = ItemCardItem> {
  title?: string
  subtitle?: string
  items: T[]
  viewMode?: ItemCardViewMode
  onItemDetailClick?: (item: T) => void
  onItemCtaClick?: (item: T) => void
  detailLabel?: string
  defaultCtaLabel?: string
  ariaLabelledBy?: string
  className?: string
}

function ItemsSectionInner<T extends ItemCardItem>(
  {
    title = '서비스 둘러보기',
    subtitle = '다양한 기능을 살펴보세요',
    items,
    viewMode = 'grid',
    onItemDetailClick,
    onItemCtaClick,
    detailLabel = '상세',
    defaultCtaLabel = '시작',
    ariaLabelledBy = 'items-title',
    className,
  }: ItemsSectionProps<T>,
  ref: React.ForwardedRef<HTMLElement>
) {
  return (
    <section
      ref={ref}
      className={cn('py-20 md:py-28 px-4', className)}
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

        {/* Items Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                mode="grid"
                onDetailClick={onItemDetailClick}
                onCtaClick={onItemCtaClick}
                detailLabel={detailLabel}
                defaultCtaLabel={defaultCtaLabel}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {items.map((item) => (
              <ItemCard
                key={item.id}
                item={item}
                mode="list"
                onDetailClick={onItemDetailClick}
                onCtaClick={onItemCtaClick}
                detailLabel={detailLabel}
                defaultCtaLabel={defaultCtaLabel}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

const ItemsSection = React.forwardRef(ItemsSectionInner) as <T extends ItemCardItem>(
  props: ItemsSectionProps<T> & { ref?: React.ForwardedRef<HTMLElement> }
) => React.ReactElement

export { ItemsSection }
