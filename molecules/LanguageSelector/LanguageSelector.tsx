'use client'

import * as React from 'react'
import { Globe } from 'lucide-react'

import { cn } from '../../utils'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../../atoms'

export type Locale = 'ko' | 'en'

export interface Language {
  code: Locale
  label: string
}

export interface LanguageSelectorProps {
  currentLocale: Locale
  onLocaleChange: (locale: Locale) => void
  languages?: Language[]
  className?: string
}

const defaultLanguages: Language[] = [
  { code: 'ko', label: '한국어' },
  { code: 'en', label: 'English' },
]

const LanguageSelector = React.forwardRef<HTMLButtonElement, LanguageSelectorProps>(
  ({ currentLocale, onLocaleChange, languages = defaultLanguages, className }, ref) => {
    const currentLanguage = languages.find((lang) => lang.code === currentLocale)

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            size="sm"
            className={cn('h-10 flex items-center gap-1 focus-visible:ring-0 focus-visible:ring-offset-0', className)}
          >
            <Globe className="h-4 w-4" />
            <span>{currentLanguage?.label || '언어'}</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {languages.map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => onLocaleChange(lang.code)}
              className={cn(
                'cursor-pointer',
                currentLocale === lang.code && 'bg-accent'
              )}
            >
              {lang.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    )
  }
)
LanguageSelector.displayName = 'LanguageSelector'

export { LanguageSelector }
