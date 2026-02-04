'use client'

import * as React from 'react'
import { ExternalLink, CheckSquare, type LucideIcon } from 'lucide-react'

import { cn } from '../../utils'
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Badge,
  Separator,
} from '../../atoms'

export interface ItemDetailsCategory {
  id: string
  label: string
}

export interface ItemDetailsItem {
  id: string
  title: string
  description: string
  icon: LucideIcon
  categories?: ItemDetailsCategory[]
  features?: string[]
  badges?: string[]
  ctaUrl?: string
  ctaLabel?: string
}

export interface ItemDetailsDialogProps<T extends ItemDetailsItem = ItemDetailsItem> {
  open: boolean
  onOpenChange: (open: boolean) => void
  item: T | null
  closeLabel?: string
  featuresTitle?: string
  badgesTitle?: string
  className?: string
}

function ItemDetailsDialogInner<T extends ItemDetailsItem>(
  {
    open,
    onOpenChange,
    item,
    closeLabel = '닫기',
    featuresTitle = '주요 기능',
    badgesTitle = '지원 형식',
    className,
  }: ItemDetailsDialogProps<T>,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  if (!item) return null

  const IconComponent = item.icon

  const handleCta = () => {
    if (item.ctaUrl) {
      window.open(item.ctaUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        ref={ref}
        className={cn('p-4 sm:p-6 sm:max-w-[600px] max-h-[90vh] overflow-y-auto', className)}
      >
        <DialogHeader>
          <div className="flex items-start gap-2 sm:gap-3">
            <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg border bg-background" aria-hidden="true">
              <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-foreground" />
            </div>
            <div className="flex-1">
              <DialogTitle className="text-lg sm:text-xl">{item.title}</DialogTitle>
              <DialogDescription className="mt-1.5">
                {item.description}
              </DialogDescription>
              {item.categories && item.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.categories.map((category) => (
                    <Badge key={category.id} variant="outline">
                      {category.label}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </DialogHeader>

        <div className="py-2">
          {item.features && item.features.length > 0 && (
            <>
              <Separator className="my-4" />
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-3">{featuresTitle}</h4>
                  <ul className="space-y-2">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckSquare className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden="true" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}

          {item.badges && item.badges.length > 0 && (
            <>
              <Separator className="my-4" />
              <div>
                <h4 className="text-sm font-medium mb-3">{badgesTitle}</h4>
                <div className="flex flex-wrap gap-2">
                  {item.badges.map((badge) => (
                    <Badge key={badge} variant="secondary">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>

        <DialogFooter className="flex sm:justify-between gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {closeLabel}
          </Button>
          {item.ctaUrl && item.ctaLabel && (
            <Button onClick={handleCta} className="gap-1.5" aria-label={`${item.title} ${item.ctaLabel} (새 창)`}>
              {item.ctaLabel}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

const ItemDetailsDialog = React.forwardRef(ItemDetailsDialogInner) as <T extends ItemDetailsItem>(
  props: ItemDetailsDialogProps<T> & { ref?: React.ForwardedRef<HTMLDivElement> }
) => React.ReactElement | null

export { ItemDetailsDialog }
