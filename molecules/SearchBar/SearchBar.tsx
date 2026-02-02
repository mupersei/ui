'use client'

import * as React from 'react'
import { Search } from 'lucide-react'

import { cn } from '../../utils'
import { Input } from '../../atoms'

export interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ value, onChange, placeholder = '검색...', className }, ref) => {
    return (
      <div className={cn('relative', className)} role="search">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
        <Input
          ref={ref}
          type="search"
          placeholder={placeholder}
          className="pl-8 h-10 w-full"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value)}
          aria-label={placeholder}
        />
      </div>
    )
  }
)
SearchBar.displayName = 'SearchBar'

export { SearchBar }
