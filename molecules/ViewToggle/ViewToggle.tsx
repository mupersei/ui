'use client'

import * as React from 'react'
import { Grid3X3, LayoutGrid } from 'lucide-react'

import { cn } from '../../utils'
import { Button } from '../../atoms'

export type ViewMode = 'grid' | 'list'

export interface ViewToggleProps {
  viewMode: ViewMode
  onViewModeChange: (mode: ViewMode) => void
  gridLabel?: string
  listLabel?: string
  className?: string
}

const ViewToggle = React.forwardRef<HTMLDivElement, ViewToggleProps>(
  ({ viewMode, onViewModeChange, gridLabel = '그리드 뷰', listLabel = '리스트 뷰', className }, ref) => {
    return (
      <div ref={ref} className={cn('flex items-center border rounded-md', className)} role="group" aria-label="뷰 모드 선택">
        <Button
          variant={viewMode === 'grid' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => onViewModeChange('grid')}
          className="rounded-none rounded-l-md h-8 w-8 sm:h-10 sm:w-10"
          aria-label={gridLabel}
          aria-pressed={viewMode === 'grid'}
        >
          <Grid3X3 className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
        </Button>
        <Button
          variant={viewMode === 'list' ? 'default' : 'ghost'}
          size="icon"
          onClick={() => onViewModeChange('list')}
          className="rounded-none rounded-r-md h-8 w-8 sm:h-10 sm:w-10"
          aria-label={listLabel}
          aria-pressed={viewMode === 'list'}
        >
          <LayoutGrid className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden="true" />
        </Button>
      </div>
    )
  }
)
ViewToggle.displayName = 'ViewToggle'

export { ViewToggle }
