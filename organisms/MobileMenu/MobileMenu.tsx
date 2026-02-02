'use client'

import * as React from 'react'
import { Menu, ListFilter } from 'lucide-react'

import { cn } from '../../utils'
import {
  Button,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../../atoms'
import { SearchBar } from '../../molecules/SearchBar'

export interface Category {
  id: string
  label: string
}

export interface MobileMenuProps {
  categories: Category[]
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
  menuTitle?: string
  menuDescription?: string
  menuButtonLabel?: string
  categoryTitle?: string
  searchValue?: string
  onSearchChange?: (value: string) => void
  searchPlaceholder?: string
  onFilterClick?: () => void
  filterLabel?: string
  onHelpClick?: () => void
  helpLabel?: string
  className?: string
}

const MobileMenu = React.forwardRef<HTMLButtonElement, MobileMenuProps>(
  (
    {
      categories,
      activeCategory,
      onCategoryChange,
      menuTitle = '메뉴',
      menuDescription = '카테고리 및 메뉴 옵션을 선택하세요',
      menuButtonLabel = '메뉴 열기',
      categoryTitle = '카테고리',
      searchValue = '',
      onSearchChange,
      searchPlaceholder = '검색...',
      onFilterClick,
      filterLabel = '필터',
      onHelpClick,
      helpLabel = '도움말',
      className,
    },
    ref
  ) => {
    const [open, setOpen] = React.useState(false)

    const handleCategoryChange = (categoryId: string) => {
      onCategoryChange(categoryId)
      setOpen(false)
    }

    return (
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            size="icon"
            className={cn('h-10 w-10', className)}
            aria-label={menuButtonLabel}
          >
            <Menu className="h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[80%] sm:w-[350px]">
          <SheetHeader>
            <SheetTitle>{menuTitle}</SheetTitle>
            <SheetDescription className="sr-only">
              {menuDescription}
            </SheetDescription>
          </SheetHeader>

          <div className="py-4 space-y-6">
            {onSearchChange && (
              <SearchBar
                value={searchValue}
                onChange={onSearchChange}
                placeholder={searchPlaceholder}
                className="w-full"
              />
            )}

            <div>
              <h3 className="font-medium mb-3 text-sm text-muted-foreground">
                {categoryTitle}
              </h3>
              <nav className="space-y-1">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeCategory === category.id ? 'default' : 'ghost'}
                    className="w-full justify-start text-left"
                    onClick={() => handleCategoryChange(category.id)}
                  >
                    {category.label}
                  </Button>
                ))}
              </nav>
            </div>

            <div className="pt-4 border-t space-y-2">
              {onFilterClick && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full h-10"
                  onClick={onFilterClick}
                >
                  <ListFilter className="h-4 w-4 mr-2" />
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
        </SheetContent>
      </Sheet>
    )
  }
)
MobileMenu.displayName = 'MobileMenu'

export { MobileMenu }
