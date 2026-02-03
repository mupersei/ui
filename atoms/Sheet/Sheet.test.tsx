import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from './Sheet'

describe('Sheet', () => {
  describe('렌더링', () => {
    it('트리거가 렌더링되어야 함', () => {
      render(
        <Sheet>
          <SheetTrigger>열기</SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>제목</SheetTitle>
              <SheetDescription>설명</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      )
      expect(screen.getByRole('button', { name: '열기' })).toBeInTheDocument()
    })

    it('초기에는 시트가 닫혀있어야 함', () => {
      render(
        <Sheet>
          <SheetTrigger>열기</SheetTrigger>
          <SheetContent>
            <SheetTitle>제목</SheetTitle>
            <SheetDescription>설명</SheetDescription>
          </SheetContent>
        </Sheet>
      )
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  describe('열기/닫기', () => {
    it('트리거 클릭 시 시트가 열려야 함', async () => {
      render(
        <Sheet>
          <SheetTrigger>열기</SheetTrigger>
          <SheetContent>
            <SheetTitle>제목</SheetTitle>
            <SheetDescription>설명</SheetDescription>
          </SheetContent>
        </Sheet>
      )

      await userEvent.click(screen.getByRole('button', { name: '열기' }))

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument()
      })
    })

    it('닫기 버튼 클릭 시 시트가 닫혀야 함', async () => {
      render(
        <Sheet>
          <SheetTrigger>열기</SheetTrigger>
          <SheetContent>
            <SheetTitle>제목</SheetTitle>
            <SheetDescription>설명</SheetDescription>
          </SheetContent>
        </Sheet>
      )

      await userEvent.click(screen.getByRole('button', { name: '열기' }))

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument()
      })

      await userEvent.click(screen.getByRole('button', { name: 'Close' }))

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      })
    })
  })

  describe('컨텐츠', () => {
    it('SheetTitle이 렌더링되어야 함', async () => {
      render(
        <Sheet defaultOpen>
          <SheetContent>
            <SheetTitle>테스트 제목</SheetTitle>
            <SheetDescription>설명</SheetDescription>
          </SheetContent>
        </Sheet>
      )

      await waitFor(() => {
        expect(screen.getByText('테스트 제목')).toBeInTheDocument()
      })
    })

    it('SheetDescription이 렌더링되어야 함', async () => {
      render(
        <Sheet defaultOpen>
          <SheetContent>
            <SheetTitle>제목</SheetTitle>
            <SheetDescription>테스트 설명</SheetDescription>
          </SheetContent>
        </Sheet>
      )

      await waitFor(() => {
        expect(screen.getByText('테스트 설명')).toBeInTheDocument()
      })
    })

    it('SheetHeader가 렌더링되어야 함', async () => {
      render(
        <Sheet defaultOpen>
          <SheetContent>
            <SheetHeader data-testid="header">
              <SheetTitle>제목</SheetTitle>
              <SheetDescription>설명</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      )

      await waitFor(() => {
        expect(screen.getByTestId('header')).toBeInTheDocument()
      })
    })

    it('SheetFooter가 렌더링되어야 함', async () => {
      render(
        <Sheet defaultOpen>
          <SheetContent>
            <SheetTitle>제목</SheetTitle>
            <SheetDescription>설명</SheetDescription>
            <SheetFooter data-testid="footer">
              <button>확인</button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      )

      await waitFor(() => {
        expect(screen.getByTestId('footer')).toBeInTheDocument()
      })
    })
  })

  describe('side variants', () => {
    it('right side가 기본값이어야 함', async () => {
      render(
        <Sheet defaultOpen>
          <SheetContent data-testid="content">
            <SheetTitle>제목</SheetTitle>
            <SheetDescription>설명</SheetDescription>
          </SheetContent>
        </Sheet>
      )

      await waitFor(() => {
        const content = screen.getByTestId('content')
        expect(content).toHaveClass('right-0')
      })
    })

    it('left side가 적용되어야 함', async () => {
      render(
        <Sheet defaultOpen>
          <SheetContent side="left" data-testid="content">
            <SheetTitle>제목</SheetTitle>
            <SheetDescription>설명</SheetDescription>
          </SheetContent>
        </Sheet>
      )

      await waitFor(() => {
        const content = screen.getByTestId('content')
        expect(content).toHaveClass('left-0')
      })
    })

    it('top side가 적용되어야 함', async () => {
      render(
        <Sheet defaultOpen>
          <SheetContent side="top" data-testid="content">
            <SheetTitle>제목</SheetTitle>
            <SheetDescription>설명</SheetDescription>
          </SheetContent>
        </Sheet>
      )

      await waitFor(() => {
        const content = screen.getByTestId('content')
        expect(content).toHaveClass('top-0')
      })
    })

    it('bottom side가 적용되어야 함', async () => {
      render(
        <Sheet defaultOpen>
          <SheetContent side="bottom" data-testid="content">
            <SheetTitle>제목</SheetTitle>
            <SheetDescription>설명</SheetDescription>
          </SheetContent>
        </Sheet>
      )

      await waitFor(() => {
        const content = screen.getByTestId('content')
        expect(content).toHaveClass('bottom-0')
      })
    })
  })

  describe('스타일', () => {
    it('SheetHeader에 추가 className이 적용되어야 함', async () => {
      render(
        <Sheet defaultOpen>
          <SheetContent>
            <SheetHeader className="custom-header" data-testid="header">
              <SheetTitle>제목</SheetTitle>
              <SheetDescription>설명</SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      )

      await waitFor(() => {
        expect(screen.getByTestId('header')).toHaveClass('custom-header')
      })
    })

    it('SheetFooter에 추가 className이 적용되어야 함', async () => {
      render(
        <Sheet defaultOpen>
          <SheetContent>
            <SheetTitle>제목</SheetTitle>
            <SheetDescription>설명</SheetDescription>
            <SheetFooter className="custom-footer" data-testid="footer">
              <button>확인</button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      )

      await waitFor(() => {
        expect(screen.getByTestId('footer')).toHaveClass('custom-footer')
      })
    })
  })
})
