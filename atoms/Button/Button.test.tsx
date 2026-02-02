import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  describe('렌더링', () => {
    it('children을 렌더링해야 함', () => {
      render(<Button>클릭</Button>)
      expect(screen.getByRole('button', { name: '클릭' })).toBeInTheDocument()
    })

    it('기본 variant는 default여야 함', () => {
      render(<Button>버튼</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-primary')
    })

    it('기본 size는 default여야 함', () => {
      render(<Button>버튼</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('h-10')
    })
  })

  describe('variants', () => {
    it('destructive variant가 적용되어야 함', () => {
      render(<Button variant="destructive">삭제</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-destructive')
    })

    it('outline variant가 적용되어야 함', () => {
      render(<Button variant="outline">외곽선</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('border')
    })

    it('secondary variant가 적용되어야 함', () => {
      render(<Button variant="secondary">보조</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('bg-secondary')
    })

    it('ghost variant가 적용되어야 함', () => {
      render(<Button variant="ghost">고스트</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('hover:bg-accent')
    })

    it('link variant가 적용되어야 함', () => {
      render(<Button variant="link">링크</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('underline-offset-4')
    })
  })

  describe('sizes', () => {
    it('sm size가 적용되어야 함', () => {
      render(<Button size="sm">작은 버튼</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('h-9')
    })

    it('lg size가 적용되어야 함', () => {
      render(<Button size="lg">큰 버튼</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('h-11')
    })

    it('icon size가 적용되어야 함', () => {
      render(<Button size="icon">🔍</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('h-10', 'w-10')
    })
  })

  describe('상호작용', () => {
    it('클릭 이벤트가 발생해야 함', () => {
      const handleClick = jest.fn()
      render(<Button onClick={handleClick}>클릭</Button>)

      fireEvent.click(screen.getByRole('button'))
      expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('disabled 상태에서 클릭이 되지 않아야 함', () => {
      const handleClick = jest.fn()
      render(<Button disabled onClick={handleClick}>비활성</Button>)

      const button = screen.getByRole('button')
      expect(button).toBeDisabled()

      fireEvent.click(button)
      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('asChild', () => {
    it('asChild가 true일 때 자식 요소로 렌더링되어야 함', () => {
      render(
        <Button asChild>
          <a href="/test">링크 버튼</a>
        </Button>
      )

      const link = screen.getByRole('link', { name: '링크 버튼' })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '/test')
    })
  })

  describe('className', () => {
    it('추가 className이 적용되어야 함', () => {
      render(<Button className="custom-class">커스텀</Button>)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-class')
    })
  })

  describe('ref', () => {
    it('ref가 전달되어야 함', () => {
      const ref = { current: null } as React.RefObject<HTMLButtonElement>
      render(<Button ref={ref}>Ref 테스트</Button>)
      expect(ref.current).toBeInstanceOf(HTMLButtonElement)
    })
  })
})
