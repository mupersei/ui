import { render } from '@testing-library/react'
import { ChromeExtensionJsonLd } from './ChromeExtensionJsonLd'

describe('ChromeExtensionJsonLd', () => {
  const defaultProps = {
    siteUrl: 'https://example.com',
    name: 'Test Extension',
    description: 'A test extension',
    downloadUrl: 'https://chrome.google.com/webstore/detail/test',
  }

  const getScriptContents = (container: HTMLElement) => {
    const scripts = container.querySelectorAll('script[type="application/ld+json"]')
    return Array.from(scripts).map((script) => JSON.parse(script.innerHTML))
  }

  describe('기본 렌더링', () => {
    it('3개의 JSON-LD 스크립트가 렌더링되어야 함', () => {
      const { container } = render(<ChromeExtensionJsonLd {...defaultProps} />)
      const scripts = container.querySelectorAll('script[type="application/ld+json"]')
      expect(scripts).toHaveLength(3)
    })

    it('SoftwareApplication 스키마가 포함되어야 함', () => {
      const { container } = render(<ChromeExtensionJsonLd {...defaultProps} />)
      const contents = getScriptContents(container)
      const softwareApp = contents.find((c) => c['@type'] === 'SoftwareApplication')

      expect(softwareApp).toBeDefined()
      expect(softwareApp.name).toBe('Test Extension')
      expect(softwareApp.description).toBe('A test extension')
      expect(softwareApp.applicationCategory).toBe('BrowserApplication')
      expect(softwareApp.operatingSystem).toBe('Chrome')
    })

    it('Organization 스키마가 포함되어야 함', () => {
      const { container } = render(<ChromeExtensionJsonLd {...defaultProps} />)
      const contents = getScriptContents(container)
      const organization = contents.find((c) => c['@type'] === 'Organization')

      expect(organization).toBeDefined()
      expect(organization.name).toBe('Test Extension')
      expect(organization.url).toBe('https://example.com')
    })

    it('WebSite 스키마가 포함되어야 함', () => {
      const { container } = render(<ChromeExtensionJsonLd {...defaultProps} />)
      const contents = getScriptContents(container)
      const website = contents.find((c) => c['@type'] === 'WebSite')

      expect(website).toBeDefined()
      expect(website.name).toBe('Test Extension')
      expect(website.url).toBe('https://example.com')
    })
  })

  describe('기본값', () => {
    it('기본 버전이 1.0.0이어야 함', () => {
      const { container } = render(<ChromeExtensionJsonLd {...defaultProps} />)
      const contents = getScriptContents(container)
      const softwareApp = contents.find((c) => c['@type'] === 'SoftwareApplication')

      expect(softwareApp.softwareVersion).toBe('1.0.0')
    })

    it('기본 가격이 0이어야 함', () => {
      const { container } = render(<ChromeExtensionJsonLd {...defaultProps} />)
      const contents = getScriptContents(container)
      const softwareApp = contents.find((c) => c['@type'] === 'SoftwareApplication')

      expect(softwareApp.offers.price).toBe('0')
      expect(softwareApp.offers.priceCurrency).toBe('USD')
    })

    it('기본 스크린샷 경로가 적용되어야 함', () => {
      const { container } = render(<ChromeExtensionJsonLd {...defaultProps} />)
      const contents = getScriptContents(container)
      const softwareApp = contents.find((c) => c['@type'] === 'SoftwareApplication')

      expect(softwareApp.screenshot).toBe('https://example.com/og-image.png')
    })

    it('기본 로고 경로가 적용되어야 함', () => {
      const { container } = render(<ChromeExtensionJsonLd {...defaultProps} />)
      const contents = getScriptContents(container)
      const organization = contents.find((c) => c['@type'] === 'Organization')

      expect(organization.logo).toBe('https://example.com/logo.png')
    })
  })

  describe('선택적 props', () => {
    it('커스텀 버전이 적용되어야 함', () => {
      const { container } = render(
        <ChromeExtensionJsonLd {...defaultProps} version="2.0.0" />
      )
      const contents = getScriptContents(container)
      const softwareApp = contents.find((c) => c['@type'] === 'SoftwareApplication')

      expect(softwareApp.softwareVersion).toBe('2.0.0')
    })

    it('rating이 포함되어야 함', () => {
      const { container } = render(
        <ChromeExtensionJsonLd
          {...defaultProps}
          rating={{ ratingValue: '4.5', ratingCount: '100' }}
        />
      )
      const contents = getScriptContents(container)
      const softwareApp = contents.find((c) => c['@type'] === 'SoftwareApplication')

      expect(softwareApp.aggregateRating).toBeDefined()
      expect(softwareApp.aggregateRating['@type']).toBe('AggregateRating')
      expect(softwareApp.aggregateRating.ratingValue).toBe('4.5')
      expect(softwareApp.aggregateRating.ratingCount).toBe('100')
    })

    it('features가 포함되어야 함', () => {
      const { container } = render(
        <ChromeExtensionJsonLd
          {...defaultProps}
          features={['기능 1', '기능 2', '기능 3']}
        />
      )
      const contents = getScriptContents(container)
      const softwareApp = contents.find((c) => c['@type'] === 'SoftwareApplication')

      expect(softwareApp.featureList).toEqual(['기능 1', '기능 2', '기능 3'])
    })

    it('빈 features 배열은 featureList를 추가하지 않아야 함', () => {
      const { container } = render(
        <ChromeExtensionJsonLd {...defaultProps} features={[]} />
      )
      const contents = getScriptContents(container)
      const softwareApp = contents.find((c) => c['@type'] === 'SoftwareApplication')

      expect(softwareApp.featureList).toBeUndefined()
    })

    it('socialLinks가 포함되어야 함', () => {
      const { container } = render(
        <ChromeExtensionJsonLd
          {...defaultProps}
          socialLinks={['https://twitter.com/test', 'https://github.com/test']}
        />
      )
      const contents = getScriptContents(container)
      const organization = contents.find((c) => c['@type'] === 'Organization')

      expect(organization.sameAs).toEqual([
        'https://twitter.com/test',
        'https://github.com/test',
      ])
    })

    it('빈 socialLinks 배열은 sameAs를 추가하지 않아야 함', () => {
      const { container } = render(
        <ChromeExtensionJsonLd {...defaultProps} socialLinks={[]} />
      )
      const contents = getScriptContents(container)
      const organization = contents.find((c) => c['@type'] === 'Organization')

      expect(organization.sameAs).toBeUndefined()
    })

    it('검색 기능이 포함되어야 함', () => {
      const { container } = render(
        <ChromeExtensionJsonLd {...defaultProps} includeSearch={true} />
      )
      const contents = getScriptContents(container)
      const website = contents.find((c) => c['@type'] === 'WebSite')

      expect(website.potentialAction).toBeDefined()
      expect(website.potentialAction['@type']).toBe('SearchAction')
    })

    it('검색 기능이 비활성화되면 potentialAction이 없어야 함', () => {
      const { container } = render(
        <ChromeExtensionJsonLd {...defaultProps} includeSearch={false} />
      )
      const contents = getScriptContents(container)
      const website = contents.find((c) => c['@type'] === 'WebSite')

      expect(website.potentialAction).toBeUndefined()
    })
  })

  describe('URL 처리', () => {
    it('상대 경로 스크린샷이 절대 경로로 변환되어야 함', () => {
      const { container } = render(
        <ChromeExtensionJsonLd {...defaultProps} screenshotPath="/custom-screenshot.png" />
      )
      const contents = getScriptContents(container)
      const softwareApp = contents.find((c) => c['@type'] === 'SoftwareApplication')

      expect(softwareApp.screenshot).toBe('https://example.com/custom-screenshot.png')
    })

    it('절대 경로 스크린샷은 그대로 사용되어야 함', () => {
      const { container } = render(
        <ChromeExtensionJsonLd
          {...defaultProps}
          screenshotPath="https://cdn.example.com/screenshot.png"
        />
      )
      const contents = getScriptContents(container)
      const softwareApp = contents.find((c) => c['@type'] === 'SoftwareApplication')

      expect(softwareApp.screenshot).toBe('https://cdn.example.com/screenshot.png')
    })

    it('상대 경로 로고가 절대 경로로 변환되어야 함', () => {
      const { container } = render(
        <ChromeExtensionJsonLd {...defaultProps} logoPath="/custom-logo.png" />
      )
      const contents = getScriptContents(container)
      const organization = contents.find((c) => c['@type'] === 'Organization')

      expect(organization.logo).toBe('https://example.com/custom-logo.png')
    })

    it('절대 경로 로고는 그대로 사용되어야 함', () => {
      const { container } = render(
        <ChromeExtensionJsonLd
          {...defaultProps}
          logoPath="https://cdn.example.com/logo.png"
        />
      )
      const contents = getScriptContents(container)
      const organization = contents.find((c) => c['@type'] === 'Organization')

      expect(organization.logo).toBe('https://cdn.example.com/logo.png')
    })
  })
})
