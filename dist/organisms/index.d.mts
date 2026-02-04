import * as React from 'react';
import { LucideIcon } from 'lucide-react';
import { V as ViewMode, f as Locale, a as ItemCardItem, c as ItemCardViewMode } from '../ItemCard-DuVG9YIS.mjs';

declare const Card: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardHeader: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardTitle: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardDescription: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardContent: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
declare const CardFooter: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;

interface Category$1 {
    id: string;
    label: string;
}
interface SidebarProps {
    categories: Category$1[];
    activeCategory: string;
    onCategoryChange: (categoryId: string) => void;
    categoryTitle?: string;
    onFilterClick?: () => void;
    filterLabel?: string;
    onHelpClick?: () => void;
    helpLabel?: string;
    className?: string;
}
declare const Sidebar: React.ForwardRefExoticComponent<SidebarProps & React.RefAttributes<HTMLDivElement>>;

interface Category {
    id: string;
    label: string;
}
interface MobileMenuProps {
    categories: Category[];
    activeCategory: string;
    onCategoryChange: (categoryId: string) => void;
    menuTitle?: string;
    menuDescription?: string;
    menuButtonLabel?: string;
    categoryTitle?: string;
    searchValue?: string;
    onSearchChange?: (value: string) => void;
    searchPlaceholder?: string;
    onFilterClick?: () => void;
    filterLabel?: string;
    onHelpClick?: () => void;
    helpLabel?: string;
    className?: string;
}
declare const MobileMenu: React.ForwardRefExoticComponent<MobileMenuProps & React.RefAttributes<HTMLButtonElement>>;

interface HeroSectionProps {
    title?: string;
    subtitle?: string;
    description?: string;
    ctaUrl?: string;
    ctaLabel?: string;
    trustBadge?: string;
    icon?: LucideIcon;
    ctaIcon?: LucideIcon;
    ariaLabel?: string;
    className?: string;
}
declare const HeroSection: React.ForwardRefExoticComponent<HeroSectionProps & React.RefAttributes<HTMLElement>>;

interface CtaSectionProps {
    title?: string;
    description?: string;
    ctaUrl?: string;
    ctaLabel?: string;
    ctaIcon?: LucideIcon;
    secondaryLabel?: string;
    secondaryUrl?: string;
    ariaLabel?: string;
    className?: string;
}
declare const CtaSection: React.ForwardRefExoticComponent<CtaSectionProps & React.RefAttributes<HTMLElement>>;

interface HeaderProps {
    brandName?: string;
    subTitle?: string;
    searchValue: string;
    onSearchChange: (value: string) => void;
    searchPlaceholder?: string;
    viewMode: ViewMode;
    onViewModeChange: (mode: ViewMode) => void;
    currentLocale: Locale;
    onLocaleChange: (locale: Locale) => void;
    className?: string;
}
declare const Header: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLDivElement>>;

interface FooterLink {
    label: string;
    href: string;
}
interface FooterProps {
    brandName?: string;
    copyright?: string;
    links?: FooterLink[];
    navAriaLabel?: string;
    className?: string;
}
declare const Footer: React.ForwardRefExoticComponent<FooterProps & React.RefAttributes<HTMLElement>>;

interface Feature {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
}
interface FeaturesSectionProps {
    title?: string;
    subtitle?: string;
    features: Feature[];
    ariaLabelledBy?: string;
    className?: string;
}
declare const FeaturesSection: React.ForwardRefExoticComponent<FeaturesSectionProps & React.RefAttributes<HTMLElement>>;

interface ItemDetailsCategory {
    id: string;
    label: string;
}
interface ItemDetailsItem {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    categories?: ItemDetailsCategory[];
    features?: string[];
    badges?: string[];
    ctaUrl?: string;
    ctaLabel?: string;
}
interface ItemDetailsDialogProps<T extends ItemDetailsItem = ItemDetailsItem> {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    item: T | null;
    closeLabel?: string;
    featuresTitle?: string;
    badgesTitle?: string;
    className?: string;
}
declare const ItemDetailsDialog: <T extends ItemDetailsItem>(props: ItemDetailsDialogProps<T> & {
    ref?: React.ForwardedRef<HTMLDivElement>;
}) => React.ReactElement | null;

interface ItemsSectionProps<T extends ItemCardItem = ItemCardItem> {
    title?: string;
    subtitle?: string;
    items: T[];
    viewMode?: ItemCardViewMode;
    onItemDetailClick?: (item: T) => void;
    onItemCtaClick?: (item: T) => void;
    detailLabel?: string;
    defaultCtaLabel?: string;
    ariaLabelledBy?: string;
    className?: string;
}
declare const ItemsSection: <T extends ItemCardItem>(props: ItemsSectionProps<T> & {
    ref?: React.ForwardedRef<HTMLElement>;
}) => React.ReactElement;

interface PageLayoutProps {
    header?: React.ReactNode;
    footer?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
    mainClassName?: string;
}
declare const PageLayout: React.ForwardRefExoticComponent<PageLayoutProps & React.RefAttributes<HTMLDivElement>>;

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, type Category$1 as Category, CtaSection, type CtaSectionProps, type Feature, FeaturesSection, type FeaturesSectionProps, Footer, type FooterLink, type FooterProps, Header, type HeaderProps, HeroSection, type HeroSectionProps, type ItemDetailsCategory, ItemDetailsDialog, type ItemDetailsDialogProps, type ItemDetailsItem, ItemsSection, type ItemsSectionProps, MobileMenu, type MobileMenuProps, PageLayout, type PageLayoutProps, Sidebar, type SidebarProps };
