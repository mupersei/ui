'use client'

import * as React from 'react'
import { type LucideIcon } from 'lucide-react'

import { cn } from '../../utils'
import { Button } from '../../atoms'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../organisms/Card'

export type ItemCardViewMode = 'grid' | 'list'

export interface ItemCardItem {
  id: string
  title: string
  description: string
  icon: LucideIcon
  ctaUrl?: string
  ctaLabel?: string
}

export interface ItemCardProps<T extends ItemCardItem = ItemCardItem> {
  item: T
  mode: ItemCardViewMode
  onDetailClick?: (item: T) => void
  onCtaClick?: (item: T) => void
  detailLabel?: string
  defaultCtaLabel?: string
  className?: string
}

function ItemCardInner<T extends ItemCardItem>(
  {
    item,
    mode,
    onDetailClick,
    onCtaClick,
    detailLabel = '상세',
    defaultCtaLabel = '시작',
    className,
  }: ItemCardProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  const IconComponent = item.icon

  const handleDetailClick = () => {
    onDetailClick?.(item)
  }

  const handleCtaClick = () => {
    if (item.ctaUrl) {
      window.open(item.ctaUrl, '_blank', 'noopener,noreferrer')
    }
    onCtaClick?.(item)
  }

  if (mode === 'grid') {
    return (
      <Card
        ref={ref}
        className={cn(
          'overflow-hidden transition-all hover:shadow-md hover:border-gray-300 h-full flex flex-col',
          className
        )}
      >
        <CardHeader className="pb-2 pt-4 px-5">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg border bg-background" aria-hidden="true">
              <IconComponent className="h-5 w-5 text-foreground" />
            </div>
            <CardTitle className="text-base font-medium">
              {item.title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pb-2 pt-1 px-5 flex-grow">
          <CardDescription className="text-sm line-clamp-2">
            {item.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex justify-between pt-4 px-5 pb-5">
          <Button
            variant="ghost"
            size="sm"
            className="text-sm text-muted-foreground h-8 px-2"
            onClick={handleDetailClick}
            aria-label={`${item.title} ${detailLabel}`}
          >
            {detailLabel}
          </Button>
          <Button
            variant="default"
            size="sm"
            className="text-sm h-8 px-4"
            onClick={handleCtaClick}
            aria-label={`${item.title} ${item.ctaLabel || defaultCtaLabel}`}
          >
            {item.ctaLabel || defaultCtaLabel}
          </Button>
        </CardFooter>
      </Card>
    )
  }

  // List view
  return (
    <article
      ref={ref}
      className={cn(
        'flex flex-row items-center justify-between p-4 rounded-lg border bg-card hover:shadow-sm hover:border-gray-300 transition-all',
        className
      )}
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className="flex items-center justify-center w-10 h-10 rounded-lg border bg-background shrink-0" aria-hidden="true">
          <IconComponent className="h-5 w-5 text-foreground" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-base truncate">{item.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-1">
            {item.description}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 ml-4">
        <Button
          variant="ghost"
          size="sm"
          className="text-sm text-muted-foreground h-8 px-2"
          onClick={handleDetailClick}
          aria-label={`${item.title} ${detailLabel}`}
        >
          {detailLabel}
        </Button>
        <Button
          variant="default"
          size="sm"
          className="text-sm h-8 px-4"
          onClick={handleCtaClick}
          aria-label={`${item.title} ${item.ctaLabel || defaultCtaLabel}`}
        >
          {item.ctaLabel || defaultCtaLabel}
        </Button>
      </div>
    </article>
  )
}

const ItemCard = React.forwardRef(ItemCardInner) as <T extends ItemCardItem>(
  props: ItemCardProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => React.ReactElement

export { ItemCard }
