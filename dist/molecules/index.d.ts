import * as React from 'react';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}
declare const SearchBar: React.ForwardRefExoticComponent<SearchBarProps & React.RefAttributes<HTMLInputElement>>;

type ViewMode = 'grid' | 'list';
interface ViewToggleProps {
    viewMode: ViewMode;
    onViewModeChange: (mode: ViewMode) => void;
    gridLabel?: string;
    listLabel?: string;
    className?: string;
}
declare const ViewToggle: React.ForwardRefExoticComponent<ViewToggleProps & React.RefAttributes<HTMLDivElement>>;

type Locale = 'ko' | 'en';
interface Language {
    code: Locale;
    label: string;
}
interface LanguageSelectorProps {
    currentLocale: Locale;
    onLocaleChange: (locale: Locale) => void;
    languages?: Language[];
    className?: string;
}
declare const LanguageSelector: React.ForwardRefExoticComponent<LanguageSelectorProps & React.RefAttributes<HTMLButtonElement>>;

export { type Language, LanguageSelector, type LanguageSelectorProps, type Locale, SearchBar, type SearchBarProps, type ViewMode, ViewToggle, type ViewToggleProps };
