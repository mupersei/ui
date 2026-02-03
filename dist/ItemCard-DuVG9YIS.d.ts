import * as React from 'react';
import { LucideIcon } from 'lucide-react';

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

type ItemCardViewMode = 'grid' | 'list';
interface ItemCardItem {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    ctaUrl?: string;
    ctaLabel?: string;
}
interface ItemCardProps<T extends ItemCardItem = ItemCardItem> {
    item: T;
    mode: ItemCardViewMode;
    onDetailClick?: (item: T) => void;
    onCtaClick?: (item: T) => void;
    detailLabel?: string;
    defaultCtaLabel?: string;
    className?: string;
}
declare const ItemCard: <T extends ItemCardItem>(props: ItemCardProps<T> & {
    ref?: React.ForwardedRef<HTMLDivElement>;
}) => React.ReactElement;

export { ItemCard as I, type Language as L, type ViewMode as V, type ItemCardItem as a, type ItemCardProps as b, type ItemCardViewMode as c, LanguageSelector as d, type LanguageSelectorProps as e, type Locale as f, ViewToggle as g, type ViewToggleProps as h };
