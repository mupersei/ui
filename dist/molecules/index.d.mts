import * as React from 'react';
export { I as ItemCard, a as ItemCardItem, b as ItemCardProps, c as ItemCardViewMode, L as Language, d as LanguageSelector, e as LanguageSelectorProps, f as Locale, V as ViewMode, g as ViewToggle, h as ViewToggleProps } from '../ItemCard-DuVG9YIS.mjs';
import * as react_jsx_runtime from 'react/jsx-runtime';
import 'lucide-react';

interface SearchBarProps {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
}
declare const SearchBar: React.ForwardRefExoticComponent<SearchBarProps & React.RefAttributes<HTMLInputElement>>;

interface ChromeExtensionRating {
    ratingValue: string;
    ratingCount: string;
}
interface ChromeExtensionJsonLdProps {
    /** 사이트 URL */
    siteUrl: string;
    /** 확장프로그램 이름 */
    name: string;
    /** 확장프로그램 설명 */
    description: string;
    /** 소프트웨어 버전 */
    version?: string;
    /** Chrome 웹스토어 다운로드 URL */
    downloadUrl: string;
    /** 스크린샷 URL (상대 경로 가능) */
    screenshotPath?: string;
    /** 로고 URL (상대 경로 가능) */
    logoPath?: string;
    /** 기능 목록 */
    features?: string[];
    /** 가격 (기본값: "0") */
    price?: string;
    /** 통화 (기본값: "USD") */
    priceCurrency?: string;
    /** 평점 정보 */
    rating?: ChromeExtensionRating;
    /** 소셜 미디어 링크 목록 */
    socialLinks?: string[];
    /** 검색 기능 포함 여부 */
    includeSearch?: boolean;
    /** 검색 URL 템플릿 (예: "/?q={search_term_string}") */
    searchUrlTemplate?: string;
}
declare function ChromeExtensionJsonLd({ siteUrl, name, description, version, downloadUrl, screenshotPath, logoPath, features, price, priceCurrency, rating, socialLinks, includeSearch, searchUrlTemplate, }: ChromeExtensionJsonLdProps): react_jsx_runtime.JSX.Element;

export { ChromeExtensionJsonLd, type ChromeExtensionJsonLdProps, type ChromeExtensionRating, SearchBar, type SearchBarProps };
