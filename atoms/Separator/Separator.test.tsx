import { render, screen } from '@testing-library/react'
import { Separator } from './Separator'

describe('Separator', () => {
  describe('렌더링', () => {
    it('Separator가 렌더링되어야 함', () => {
      render(<Separator data-testid="separator" />)
      expect(screen.getByTestId('separator')).toBeInTheDocument()
    })

    it('decorative가 false일 때 role이 separator여야 함', () => {
      render(<Separator decorative={false} data-testid="separator" />)
      expect(screen.getByRole('separator')).toBeInTheDocument()
    })

    it('기본값(decorative=true)일 때 role이 none이어야 함', () => {
      render(<Separator data-testid="separator" />)
      expect(screen.getByTestId('separator')).toHaveAttribute('role', 'none')
    })
  })

  describe('방향', () => {
    it('기본 방향이 horizontal이어야 함', () => {
      render(<Separator data-testid="separator" />)
      const separator = screen.getByTestId('separator')
      expect(separator).toHaveClass('h-[1px]', 'w-full')
    })

    it('vertical 방향이 적용되어야 함', () => {
      render(<Separator orientation="vertical" data-testid="separator" />)
      const separator = screen.getByTestId('separator')
      expect(separator).toHaveClass('h-full', 'w-[1px]')
    })

    it('horizontal 방향이 명시적으로 적용되어야 함', () => {
      render(<Separator orientation="horizontal" data-testid="separator" />)
      const separator = screen.getByTestId('separator')
      expect(separator).toHaveClass('h-[1px]', 'w-full')
    })
  })

  describe('스타일', () => {
    it('기본 스타일이 적용되어야 함', () => {
      render(<Separator data-testid="separator" />)
      const separator = screen.getByTestId('separator')
      expect(separator).toHaveClass('shrink-0', 'bg-border')
    })

    it('추가 className이 적용되어야 함', () => {
      render(<Separator className="my-custom-class" data-testid="separator" />)
      expect(screen.getByTestId('separator')).toHaveClass('my-custom-class')
    })
  })

  describe('접근성', () => {
    it('decorative가 기본적으로 true여야 함', () => {
      render(<Separator data-testid="separator" />)
      const separator = screen.getByTestId('separator')
      expect(separator).toHaveAttribute('data-orientation', 'horizontal')
    })

    it('aria-orientation이 설정되어야 함', () => {
      render(<Separator orientation="vertical" decorative={false} data-testid="separator" />)
      const separator = screen.getByRole('separator')
      expect(separator).toHaveAttribute('aria-orientation', 'vertical')
    })
  })

  describe('ref 전달', () => {
    it('ref가 전달되어야 함', () => {
      const ref = { current: null } as React.RefObject<HTMLDivElement>
      render(<Separator ref={ref} />)
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })
  })
})
