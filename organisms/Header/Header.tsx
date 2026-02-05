'use client'

import * as React from 'react'

import { cn } from '../../utils'
import { SearchBar } from '../../molecules/SearchBar'
import { ViewToggle, type ViewMode } from '../../molecules/ViewToggle'
import { LanguageSelector, type Locale } from '../../molecules/LanguageSelector'

export interface HeaderProps {
  brandName?: string
  subTitle?: string
  searchValue: string
  onSearchChange: (value: string) => void
  searchPlaceholder?: string
  viewMode: ViewMode
  onViewModeChange: (mode: ViewMode) => void
  currentLocale: Locale
  onLocaleChange: (locale: Locale) => void
  className?: string
}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  (
    {
      brandName = 'Recorda',
      subTitle = 'Service Hub',
      searchValue,
      onSearchChange,
      searchPlaceholder = '검색...',
      viewMode,
      onViewModeChange,
      currentLocale,
      onLocaleChange,
      className,
    },
    ref
  ) => {
    return (
      <header
        ref={ref}
        className={cn(
          'flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between',
          'py-4 px-2 sm:px-4 md:px-6 border-b bg-background',
          className
        )}
      >
        <div className="flex items-center gap-2 sm:gap-4">
          <h1 className="text-xl sm:text-2xl font-bold">{brandName}</h1>
          {subTitle && (
            <h2 className="text-base sm:text-xl text-muted-foreground">{subTitle}</h2>
          )}
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <SearchBar
            value={searchValue}
            onChange={onSearchChange}
            placeholder={searchPlaceholder}
            className="flex-1 sm:flex-none sm:w-64"
          />
          <ViewToggle viewMode={viewMode} onViewModeChange={onViewModeChange} />
          <LanguageSelector
            currentLocale={currentLocale}
            onLocaleChange={onLocaleChange}
          />
        </div>
      </header>
    )
  }
)
Header.displayName = 'Header'

export { Header }
export type { ViewMode, Locale }
