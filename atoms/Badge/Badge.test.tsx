import { render, screen } from '@testing-library/react'
import { Badge } from './Badge'

describe('Badge', () => {
  describe('렌더링', () => {
    it('children을 렌더링해야 함', () => {
      render(<Badge>새로운</Badge>)
      expect(screen.getByText('새로운')).toBeInTheDocument()
    })

    it('기본 variant는 default여야 함', () => {
      render(<Badge>기본</Badge>)
      const badge = screen.getByText('기본')
      expect(badge).toHaveClass('bg-primary')
    })
  })

  describe('variants', () => {
    it('default variant가 적용되어야 함', () => {
      render(<Badge variant="default">기본</Badge>)
      const badge = screen.getByText('기본')
      expect(badge).toHaveClass('bg-primary', 'text-primary-foreground')
    })

    it('secondary variant가 적용되어야 함', () => {
      render(<Badge variant="secondary">보조</Badge>)
      const badge = screen.getByText('보조')
      expect(badge).toHaveClass('bg-secondary', 'text-secondary-foreground')
    })

    it('destructive variant가 적용되어야 함', () => {
      render(<Badge variant="destructive">위험</Badge>)
      const badge = screen.getByText('위험')
      expect(badge).toHaveClass('bg-destructive', 'text-destructive-foreground')
    })

    it('outline variant가 적용되어야 함', () => {
      render(<Badge variant="outline">외곽선</Badge>)
      const badge = screen.getByText('외곽선')
      expect(badge).toHaveClass('text-foreground')
    })
  })

  describe('스타일', () => {
    it('기본 스타일이 적용되어야 함', () => {
      render(<Badge>스타일</Badge>)
      const badge = screen.getByText('스타일')
      expect(badge).toHaveClass('inline-flex', 'items-center', 'rounded-full')
    })

    it('추가 className이 적용되어야 함', () => {
      render(<Badge className="custom-badge">커스텀</Badge>)
      const badge = screen.getByText('커스텀')
      expect(badge).toHaveClass('custom-badge')
    })
  })

  describe('HTML 속성', () => {
    it('추가 HTML 속성이 전달되어야 함', () => {
      render(<Badge data-testid="test-badge" aria-label="테스트 뱃지">테스트</Badge>)
      const badge = screen.getByTestId('test-badge')
      expect(badge).toHaveAttribute('aria-label', '테스트 뱃지')
    })
  })
})
