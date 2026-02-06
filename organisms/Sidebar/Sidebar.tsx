'use client'

import * as React from 'react'
import { ListFilter } from 'lucide-react'

import { cn } from '../../utils'
import { Button } from '../../atoms'

export interface Category {
  id: string
  label: string
}

export interface SidebarProps {
  categories: Category[]
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
  categoryTitle?: string
  onFilterClick?: () => void
  filterLabel?: string
  onHelpClick?: () => void
  helpLabel?: string
  className?: string
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  (
    {
      categories,
      activeCategory,
      onCategoryChange,
      categoryTitle = '카테고리',
      onFilterClick,
      filterLabel = '필터',
      onHelpClick,
      helpLabel = '도움말',
      className,
    },
    ref
  ) => {
    return (
      <aside
        ref={ref}
        className={cn('hidden md:block w-56 shrink-0', className)}
        aria-label="카테고리 네비게이션"
      >
        <div className="bg-card rounded-lg border shadow-sm p-4">
          <h3 id="sidebar-category-heading" className="font-medium mb-3 text-sm text-muted-foreground">
            {categoryTitle}
          </h3>
          <nav className="space-y-1" aria-labelledby="sidebar-category-heading">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'ghost'}
                className="w-full justify-start text-left"
                onClick={() => onCategoryChange(category.id)}
                aria-current={activeCategory === category.id ? 'page' : undefined}
              >
                {category.label}
              </Button>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t space-y-2">
            {onFilterClick && (
              <Button
                variant="outline"
                size="sm"
                className="w-full h-10"
                onClick={onFilterClick}
              >
                <ListFilter className="h-4 w-4 mr-2" aria-hidden="true" />
                {filterLabel}
              </Button>
            )}
            {onHelpClick && (
              <Button
                variant="outline"
                size="sm"
                className="w-full h-10"
                onClick={onHelpClick}
              >
                {helpLabel}
              </Button>
            )}
          </div>
        </div>
      </aside>
    )
  }
)
Sidebar.displayName = 'Sidebar'

export { Sidebar }
