import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Star } from 'lucide-react'
import { CtaSection } from './CtaSection'

describe('CtaSection', () => {
  const mockWindowOpen = jest.fn()
  const originalOpen = window.open

  beforeEach(() => {
    window.open = mockWindowOpen
    jest.clearAllMocks()
  })

  afterEach(() => {
    window.open = originalOpen
  })

  describe('렌더링', () => {
    it('section 요소로 렌더링되어야 함', () => {
      render(<CtaSection />)
      expect(screen.getByRole('region')).toBeInTheDocument()
    })

    it('기본 타이틀이 렌더링되어야 함', () => {
      render(<CtaSection />)
      expect(screen.getByRole('heading', { level: 2, name: '지금 바로 시작하세요' })).toBeInTheDocument()
    })

    it('커스텀 타이틀이 렌더링되어야 함', () => {
      render(<CtaSection title="Custom Title" />)
      expect(screen.getByRole('heading', { level: 2, name: 'Custom Title' })).toBeInTheDocument()
    })

    it('기본 설명이 렌더링되어야 함', () => {
      render(<CtaSection />)
      expect(screen.getByText(/무료로 Recorda를 설치하고/)).toBeInTheDocument()
    })

    it('커스텀 설명이 렌더링되어야 함', () => {
      render(<CtaSection description="Custom Description" />)
      expect(screen.getByText('Custom Description')).toBeInTheDocument()
    })
  })

  describe('CTA 버튼', () => {
    it('기본 CTA 버튼 라벨이 렌더링되어야 함', () => {
      render(<CtaSection />)
      expect(screen.getByRole('button', { name: /Chrome에 추가하기/i })).toBeInTheDocument()
    })

    it('커스텀 CTA 버튼 라벨이 렌더링되어야 함', () => {
      render(<CtaSection ctaLabel="Install Now" />)
      expect(screen.getByRole('button', { name: /Install Now/i })).toBeInTheDocument()
    })

    it('CTA 버튼 클릭 시 새 창으로 열어야 함', async () => {
      render(<CtaSection ctaUrl="https://example.com" />)

      await userEvent.click(screen.getByRole('button', { name: /Chrome에 추가하기/i }))

      expect(mockWindowOpen).toHaveBeenCalledWith(
        'https://example.com',
        '_blank',
        'noopener,noreferrer'
      )
    })

    it('커스텀 CTA 아이콘이 적용되어야 함', () => {
      render(<CtaSection ctaIcon={Star} />)
      const button = screen.getByRole('button', { name: /Chrome에 추가하기/i })
      expect(button.querySelector('svg')).toBeInTheDocument()
    })
  })

  describe('Secondary 버튼', () => {
    it('기본 secondary 버튼이 렌더링되어야 함', () => {
      render(<CtaSection />)
      expect(screen.getByRole('link', { name: /더 알아보기/i })).toBeInTheDocument()
    })

    it('커스텀 secondary 버튼 라벨이 렌더링되어야 함', () => {
      render(<CtaSection secondaryLabel="Learn More" />)
      expect(screen.getByRole('link', { name: /Learn More/i })).toBeInTheDocument()
    })

    it('secondary URL이 올바르게 설정되어야 함', () => {
      render(<CtaSection secondaryUrl="/about" />)
      expect(screen.getByRole('link', { name: /더 알아보기/i })).toHaveAttribute('href', '/about')
    })

    it('secondary URL이 없으면 버튼이 렌더링되지 않아야 함', () => {
      render(<CtaSection secondaryUrl="" />)
      expect(screen.queryByRole('link', { name: /더 알아보기/i })).not.toBeInTheDocument()
    })
  })

  describe('접근성', () => {
    it('기본 aria-label이 있어야 함', () => {
      render(<CtaSection />)
      expect(screen.getByRole('region')).toHaveAttribute('aria-label', '설치 안내')
    })

    it('커스텀 aria-label이 적용되어야 함', () => {
      render(<CtaSection ariaLabel="Custom Section" />)
      expect(screen.getByRole('region')).toHaveAttribute('aria-label', 'Custom Section')
    })

    it('CTA 버튼에 접근성 라벨이 있어야 함', () => {
      render(<CtaSection ctaLabel="Chrome에 추가하기" />)
      const ctaButton = screen.getByRole('button', { name: /Chrome에 추가하기/i })
      expect(ctaButton).toHaveAttribute('aria-label', 'Chrome에 추가하기 (새 창에서 열림)')
    })
  })

  describe('스타일', () => {
    it('추가 className이 적용되어야 함', () => {
      render(<CtaSection className="custom-cta" />)
      expect(screen.getByRole('region')).toHaveClass('custom-cta')
    })
  })
})
