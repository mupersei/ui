import * as React from 'react';

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

export { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, type Category$1 as Category, MobileMenu, type MobileMenuProps, Sidebar, type SidebarProps };
