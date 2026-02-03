import { render, screen } from '@testing-library/react'
import { ScrollArea, ScrollBar } from './ScrollArea'

describe('ScrollArea', () => {
  describe('렌더링', () => {
    it('ScrollArea가 렌더링되어야 함', () => {
      render(
        <ScrollArea data-testid="scroll-area">
          <div>콘텐츠</div>
        </ScrollArea>
      )
      expect(screen.getByTestId('scroll-area')).toBeInTheDocument()
    })

    it('children이 렌더링되어야 함', () => {
      render(
        <ScrollArea>
          <div>테스트 콘텐츠</div>
        </ScrollArea>
      )
      expect(screen.getByText('테스트 콘텐츠')).toBeInTheDocument()
    })
  })

  describe('스타일', () => {
    it('기본 스타일이 적용되어야 함', () => {
      render(
        <ScrollArea data-testid="scroll-area">
          <div>콘텐츠</div>
        </ScrollArea>
      )
      const scrollArea = screen.getByTestId('scroll-area')
      expect(scrollArea).toHaveClass('relative', 'overflow-hidden')
    })

    it('추가 className이 적용되어야 함', () => {
      render(
        <ScrollArea className="custom-scroll" data-testid="scroll-area">
          <div>콘텐츠</div>
        </ScrollArea>
      )
      expect(screen.getByTestId('scroll-area')).toHaveClass('custom-scroll')
    })
  })

  describe('ref 전달', () => {
    it('ref가 전달되어야 함', () => {
      const ref = { current: null } as React.RefObject<HTMLDivElement>
      render(
        <ScrollArea ref={ref}>
          <div>콘텐츠</div>
        </ScrollArea>
      )
      expect(ref.current).toBeInstanceOf(HTMLElement)
    })
  })
})

describe('ScrollBar', () => {
  // ScrollBar는 Radix ScrollArea 내부에서 콘텐츠 오버플로우가 있을 때만 표시됨
  // jsdom에서는 실제 레이아웃 계산이 불가능하므로 ScrollBar 테스트는 제한적임
  describe('컴포넌트 존재', () => {
    it('ScrollBar 컴포넌트가 export되어야 함', () => {
      expect(ScrollBar).toBeDefined()
    })
  })

  describe('ScrollArea 내 ViewPort', () => {
    it('ViewPort가 올바른 스타일로 렌더링되어야 함', () => {
      render(
        <ScrollArea data-testid="scroll-area">
          <div>테스트 콘텐츠</div>
        </ScrollArea>
      )
      const scrollArea = screen.getByTestId('scroll-area')
      const viewport = scrollArea.querySelector('[data-radix-scroll-area-viewport]')
      expect(viewport).toBeInTheDocument()
      expect(viewport).toHaveClass('h-full', 'w-full')
    })
  })
})
