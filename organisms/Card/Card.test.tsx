import { render, screen } from '@testing-library/react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from './Card'

describe('Card', () => {
  describe('Card 기본', () => {
    it('Card가 렌더링되어야 함', () => {
      render(<Card data-testid="card">내용</Card>)
      expect(screen.getByTestId('card')).toBeInTheDocument()
    })

    it('기본 스타일이 적용되어야 함', () => {
      render(<Card data-testid="card">내용</Card>)
      const card = screen.getByTestId('card')
      expect(card).toHaveClass('rounded-lg', 'border', 'shadow-sm')
    })

    it('추가 className이 적용되어야 함', () => {
      render(<Card className="custom-card" data-testid="card">내용</Card>)
      expect(screen.getByTestId('card')).toHaveClass('custom-card')
    })

    it('ref가 전달되어야 함', () => {
      const ref = { current: null } as React.RefObject<HTMLDivElement>
      render(<Card ref={ref}>내용</Card>)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
  })

  describe('CardHeader', () => {
    it('CardHeader가 렌더링되어야 함', () => {
      render(<CardHeader data-testid="header">헤더</CardHeader>)
      expect(screen.getByTestId('header')).toBeInTheDocument()
    })

    it('패딩 스타일이 적용되어야 함', () => {
      render(<CardHeader data-testid="header">헤더</CardHeader>)
      expect(screen.getByTestId('header')).toHaveClass('p-6')
    })
  })

  describe('CardTitle', () => {
    it('CardTitle이 렌더링되어야 함', () => {
      render(<CardTitle>제목</CardTitle>)
      expect(screen.getByText('제목')).toBeInTheDocument()
    })

    it('폰트 스타일이 적용되어야 함', () => {
      render(<CardTitle data-testid="title">제목</CardTitle>)
      expect(screen.getByTestId('title')).toHaveClass('text-2xl', 'font-semibold')
    })
  })

  describe('CardDescription', () => {
    it('CardDescription이 렌더링되어야 함', () => {
      render(<CardDescription>설명</CardDescription>)
      expect(screen.getByText('설명')).toBeInTheDocument()
    })

    it('텍스트 스타일이 적용되어야 함', () => {
      render(<CardDescription data-testid="desc">설명</CardDescription>)
      expect(screen.getByTestId('desc')).toHaveClass('text-sm', 'text-muted-foreground')
    })
  })

  describe('CardContent', () => {
    it('CardContent가 렌더링되어야 함', () => {
      render(<CardContent data-testid="content">콘텐츠</CardContent>)
      expect(screen.getByTestId('content')).toBeInTheDocument()
    })

    it('패딩 스타일이 적용되어야 함', () => {
      render(<CardContent data-testid="content">콘텐츠</CardContent>)
      expect(screen.getByTestId('content')).toHaveClass('p-6', 'pt-0')
    })
  })

  describe('CardFooter', () => {
    it('CardFooter가 렌더링되어야 함', () => {
      render(<CardFooter data-testid="footer">푸터</CardFooter>)
      expect(screen.getByTestId('footer')).toBeInTheDocument()
    })

    it('flex 스타일이 적용되어야 함', () => {
      render(<CardFooter data-testid="footer">푸터</CardFooter>)
      expect(screen.getByTestId('footer')).toHaveClass('flex', 'items-center')
    })
  })

  describe('통합 테스트', () => {
    it('전체 Card 구조가 올바르게 렌더링되어야 함', () => {
      render(
        <Card data-testid="card">
          <CardHeader>
            <CardTitle>카드 제목</CardTitle>
            <CardDescription>카드 설명입니다.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>카드 내용입니다.</p>
          </CardContent>
          <CardFooter>
            <button>액션</button>
          </CardFooter>
        </Card>
      )

      expect(screen.getByTestId('card')).toBeInTheDocument()
      expect(screen.getByText('카드 제목')).toBeInTheDocument()
      expect(screen.getByText('카드 설명입니다.')).toBeInTheDocument()
      expect(screen.getByText('카드 내용입니다.')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: '액션' })).toBeInTheDocument()
    })
  })
})
