export interface ChromeExtensionRating {
  ratingValue: string
  ratingCount: string
}

export interface ChromeExtensionJsonLdProps {
  /** 사이트 URL */
  siteUrl: string
  /** 확장프로그램 이름 */
  name: string
  /** 확장프로그램 설명 */
  description: string
  /** 소프트웨어 버전 */
  version?: string
  /** Chrome 웹스토어 다운로드 URL */
  downloadUrl: string
  /** 스크린샷 URL (상대 경로 가능) */
  screenshotPath?: string
  /** 로고 URL (상대 경로 가능) */
  logoPath?: string
  /** 기능 목록 */
  features?: string[]
  /** 가격 (기본값: "0") */
  price?: string
  /** 통화 (기본값: "USD") */
  priceCurrency?: string
  /** 평점 정보 */
  rating?: ChromeExtensionRating
  /** 소셜 미디어 링크 목록 */
  socialLinks?: string[]
  /** 검색 기능 포함 여부 */
  includeSearch?: boolean
  /** 검색 URL 템플릿 (예: "/?q={search_term_string}") */
  searchUrlTemplate?: string
}

export function ChromeExtensionJsonLd({
  siteUrl,
  name,
  description,
  version = '1.0.0',
  downloadUrl,
  screenshotPath = '/og-image.png',
  logoPath = '/logo.png',
  features = [],
  price = '0',
  priceCurrency = 'USD',
  rating,
  socialLinks = [],
  includeSearch = false,
  searchUrlTemplate = '/?q={search_term_string}',
}: ChromeExtensionJsonLdProps) {
  const screenshotUrl = screenshotPath.startsWith('http')
    ? screenshotPath
    : `${siteUrl}${screenshotPath}`

  const logoUrl = logoPath.startsWith('http')
    ? logoPath
    : `${siteUrl}${logoPath}`

  const softwareApplicationSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    applicationCategory: 'BrowserApplication',
    operatingSystem: 'Chrome',
    offers: {
      '@type': 'Offer',
      price,
      priceCurrency,
    },
    author: {
      '@type': 'Organization',
      name,
      url: siteUrl,
    },
    softwareVersion: version,
    downloadUrl,
    screenshot: screenshotUrl,
  }

  if (rating) {
    softwareApplicationSchema.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: rating.ratingValue,
      ratingCount: rating.ratingCount,
    }
  }

  if (features.length > 0) {
    softwareApplicationSchema.featureList = features
  }

  const organizationSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url: siteUrl,
    logo: logoUrl,
  }

  if (socialLinks.length > 0) {
    organizationSchema.sameAs = socialLinks
  }

  const websiteSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url: siteUrl,
  }

  if (includeSearch) {
    websiteSchema.potentialAction = {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}${searchUrlTemplate}`,
      },
      'query-input': 'required name=search_term_string',
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  )
}
