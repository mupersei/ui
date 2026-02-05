import { render, screen } from '@testing-library/react'
import { Footer, type FooterLink } from './Footer'

describe('Footer', () => {
  const defaultLinks: FooterLink[] = [
    { label: '이용약관', href: '/terms' },
    { label: '개인정보처리방침', href: '/privacy' },
    { label: '문의하기', href: '/contact' },
  ]

  describe('렌더링', () => {
    it('footer 요소로 렌더링되어야 함', () => {
      render(<Footer />)
      expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    })

    it('기본 브랜드 이름과 저작권이 표시되어야 함', () => {
      render(<Footer />)
      const currentYear = new Date().getFullYear()
      expect(screen.getByText(new RegExp(`${currentYear} Brand`))).toBeInTheDocument()
    })

    it('커스텀 브랜드 이름이 표시되어야 함', () => {
      render(<Footer brandName="Custom Brand" />)
      const currentYear = new Date().getFullYear()
      expect(screen.getByText(new RegExp(`${currentYear} Custom Brand`))).toBeInTheDocument()
    })

    it('커스텀 저작권 문구가 표시되어야 함', () => {
      render(<Footer copyright="Custom copyright." />)
      expect(screen.getByText(/Custom copyright/)).toBeInTheDocument()
    })
  })

  describe('링크', () => {
    it('기본 링크들이 렌더링되어야 함', () => {
      render(<Footer />)
      expect(screen.getByRole('link', { name: '이용약관' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: '개인정보처리방침' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: '문의하기' })).toBeInTheDocument()
    })

    it('커스텀 링크들이 렌더링되어야 함', () => {
      const customLinks: FooterLink[] = [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '/blog' },
      ]
      render(<Footer links={customLinks} />)

      expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
    })

    it('링크들의 href가 올바르게 설정되어야 함', () => {
      render(<Footer links={defaultLinks} />)

      expect(screen.getByRole('link', { name: '이용약관' })).toHaveAttribute('href', '/terms')
      expect(screen.getByRole('link', { name: '개인정보처리방침' })).toHaveAttribute('href', '/privacy')
      expect(screen.getByRole('link', { name: '문의하기' })).toHaveAttribute('href', '/contact')
    })

    it('빈 링크 배열이면 nav가 렌더링되지 않아야 함', () => {
      render(<Footer links={[]} />)
      expect(screen.queryByRole('navigation')).not.toBeInTheDocument()
    })
  })

  describe('접근성', () => {
    it('nav에 aria-label이 있어야 함', () => {
      render(<Footer />)
      expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Footer links')
    })

    it('커스텀 nav aria-label이 적용되어야 함', () => {
      render(<Footer navAriaLabel="사이트 링크" />)
      expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', '사이트 링크')
    })
  })

  describe('스타일', () => {
    it('추가 className이 적용되어야 함', () => {
      render(<Footer className="custom-footer" />)
      expect(screen.getByRole('contentinfo')).toHaveClass('custom-footer')
    })
  })

  describe('반응형 디자인', () => {
    it('기본 디자인 스타일이 적용되어야 함', () => {
      render(<Footer />)
      const footer = screen.getByRole('contentinfo')
      expect(footer).toHaveClass('border-t', 'py-3', 'bg-background')
    })

    it('내부 컨테이너에 반응형 패딩이 적용되어야 함', () => {
      render(<Footer />)
      const footer = screen.getByRole('contentinfo')
      const container = footer.firstChild as HTMLElement
      expect(container).toHaveClass('px-2', 'sm:px-4', 'md:px-6')
    })

    it('모바일에서 세로 레이아웃, 태블릿 이상에서 가로 레이아웃이어야 함', () => {
      render(<Footer />)
      const footer = screen.getByRole('contentinfo')
      const container = footer.firstChild as HTMLElement
      expect(container).toHaveClass('flex-col', 'sm:flex-row')
    })
  })
})
