import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Mic, Chrome, Star } from 'lucide-react'
import { HeroSection } from './HeroSection'

describe('HeroSection', () => {
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
      render(<HeroSection />)
      expect(screen.getByRole('region')).toBeInTheDocument()
    })

    it('기본 타이틀이 렌더링되어야 함', () => {
      render(<HeroSection />)
      expect(screen.getByRole('heading', { level: 1, name: 'Recorda' })).toBeInTheDocument()
    })

    it('커스텀 타이틀이 렌더링되어야 함', () => {
      render(<HeroSection title="Custom Title" />)
      expect(screen.getByRole('heading', { level: 1, name: 'Custom Title' })).toBeInTheDocument()
    })

    it('기본 서브타이틀이 렌더링되어야 함', () => {
      render(<HeroSection />)
      expect(screen.getByText('브라우저에서 바로 녹음하세요')).toBeInTheDocument()
    })

    it('커스텀 서브타이틀이 렌더링되어야 함', () => {
      render(<HeroSection subtitle="Custom Subtitle" />)
      expect(screen.getByText('Custom Subtitle')).toBeInTheDocument()
    })

    it('기본 설명이 렌더링되어야 함', () => {
      render(<HeroSection />)
      expect(screen.getByText(/마이크, 탭 오디오를 한 번의 클릭으로/)).toBeInTheDocument()
    })

    it('커스텀 설명이 렌더링되어야 함', () => {
      render(<HeroSection description="Custom Description" />)
      expect(screen.getByText('Custom Description')).toBeInTheDocument()
    })

    it('기본 trust badge가 렌더링되어야 함', () => {
      render(<HeroSection />)
      expect(screen.getByText('무료 · 설치 간편 · 개인정보 보호')).toBeInTheDocument()
    })

    it('커스텀 trust badge가 렌더링되어야 함', () => {
      render(<HeroSection trustBadge="Custom Badge" />)
      expect(screen.getByText('Custom Badge')).toBeInTheDocument()
    })

    it('trust badge가 없으면 렌더링되지 않아야 함', () => {
      render(<HeroSection trustBadge="" />)
      expect(screen.queryByText('무료 · 설치 간편 · 개인정보 보호')).not.toBeInTheDocument()
    })
  })

  describe('CTA 버튼', () => {
    it('기본 CTA 버튼 라벨이 렌더링되어야 함', () => {
      render(<HeroSection />)
      expect(screen.getByRole('button', { name: /Chrome에 추가하기/i })).toBeInTheDocument()
    })

    it('커스텀 CTA 버튼 라벨이 렌더링되어야 함', () => {
      render(<HeroSection ctaLabel="Download Now" />)
      expect(screen.getByRole('button', { name: /Download Now/i })).toBeInTheDocument()
    })

    it('CTA 버튼 클릭 시 새 창으로 열어야 함', async () => {
      render(<HeroSection ctaUrl="https://example.com" />)

      await userEvent.click(screen.getByRole('button', { name: /Chrome에 추가하기/i }))

      expect(mockWindowOpen).toHaveBeenCalledWith(
        'https://example.com',
        '_blank',
        'noopener,noreferrer'
      )
    })
  })

  describe('아이콘', () => {
    it('기본 아이콘이 렌더링되어야 함', () => {
      render(<HeroSection />)
      // Mic 아이콘은 aria-hidden이므로 SVG로 확인
      const section = screen.getByRole('region')
      expect(section.querySelector('svg')).toBeInTheDocument()
    })

    it('커스텀 아이콘이 렌더링되어야 함', () => {
      render(<HeroSection icon={Star} />)
      const section = screen.getByRole('region')
      expect(section.querySelector('svg')).toBeInTheDocument()
    })
  })

  describe('접근성', () => {
    it('기본 aria-label이 있어야 함', () => {
      render(<HeroSection />)
      expect(screen.getByRole('region')).toHaveAttribute('aria-label', '히어로 섹션')
    })

    it('커스텀 aria-label이 적용되어야 함', () => {
      render(<HeroSection ariaLabel="Custom Section" />)
      expect(screen.getByRole('region')).toHaveAttribute('aria-label', 'Custom Section')
    })

    it('CTA 버튼에 접근성 라벨이 있어야 함', () => {
      render(<HeroSection ctaLabel="Chrome에 추가하기" />)
      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-label',
        'Chrome에 추가하기 (새 창에서 열림)'
      )
    })
  })

  describe('스타일', () => {
    it('추가 className이 적용되어야 함', () => {
      render(<HeroSection className="custom-hero" />)
      expect(screen.getByRole('region')).toHaveClass('custom-hero')
    })
  })
})
