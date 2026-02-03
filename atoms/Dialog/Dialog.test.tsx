import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from './Dialog'

describe('Dialog', () => {
  describe('렌더링', () => {
    it('트리거 버튼이 렌더링되어야 함', () => {
      render(
        <Dialog>
          <DialogTrigger>열기</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>제목</DialogTitle>
              <DialogDescription>설명</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )
      expect(screen.getByRole('button', { name: '열기' })).toBeInTheDocument()
    })

    it('다이얼로그가 초기에는 닫혀있어야 함', () => {
      render(
        <Dialog>
          <DialogTrigger>열기</DialogTrigger>
          <DialogContent>
            <DialogTitle>제목</DialogTitle>
            <DialogDescription>설명</DialogDescription>
          </DialogContent>
        </Dialog>
      )
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })
  })

  describe('열기/닫기', () => {
    it('트리거 클릭 시 다이얼로그가 열려야 함', async () => {
      render(
        <Dialog>
          <DialogTrigger>열기</DialogTrigger>
          <DialogContent>
            <DialogTitle>제목</DialogTitle>
            <DialogDescription>설명</DialogDescription>
          </DialogContent>
        </Dialog>
      )

      await userEvent.click(screen.getByRole('button', { name: '열기' }))

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument()
      })
    })

    it('닫기 버튼 클릭 시 다이얼로그가 닫혀야 함', async () => {
      render(
        <Dialog>
          <DialogTrigger>열기</DialogTrigger>
          <DialogContent>
            <DialogTitle>제목</DialogTitle>
            <DialogDescription>설명</DialogDescription>
          </DialogContent>
        </Dialog>
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
    it('DialogTitle이 렌더링되어야 함', async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogTitle>테스트 제목</DialogTitle>
            <DialogDescription>설명</DialogDescription>
          </DialogContent>
        </Dialog>
      )

      await waitFor(() => {
        expect(screen.getByText('테스트 제목')).toBeInTheDocument()
      })
    })

    it('DialogDescription이 렌더링되어야 함', async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogTitle>제목</DialogTitle>
            <DialogDescription>테스트 설명</DialogDescription>
          </DialogContent>
        </Dialog>
      )

      await waitFor(() => {
        expect(screen.getByText('테스트 설명')).toBeInTheDocument()
      })
    })

    it('DialogHeader가 렌더링되어야 함', async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogHeader data-testid="header">
              <DialogTitle>제목</DialogTitle>
              <DialogDescription>설명</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )

      await waitFor(() => {
        expect(screen.getByTestId('header')).toBeInTheDocument()
      })
    })

    it('DialogFooter가 렌더링되어야 함', async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogTitle>제목</DialogTitle>
            <DialogDescription>설명</DialogDescription>
            <DialogFooter data-testid="footer">
              <button>확인</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )

      await waitFor(() => {
        expect(screen.getByTestId('footer')).toBeInTheDocument()
      })
    })
  })

  describe('스타일', () => {
    it('DialogHeader에 추가 className이 적용되어야 함', async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogHeader className="custom-header" data-testid="header">
              <DialogTitle>제목</DialogTitle>
              <DialogDescription>설명</DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      )

      await waitFor(() => {
        expect(screen.getByTestId('header')).toHaveClass('custom-header')
      })
    })

    it('DialogFooter에 추가 className이 적용되어야 함', async () => {
      render(
        <Dialog defaultOpen>
          <DialogContent>
            <DialogTitle>제목</DialogTitle>
            <DialogDescription>설명</DialogDescription>
            <DialogFooter className="custom-footer" data-testid="footer">
              <button>확인</button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )

      await waitFor(() => {
        expect(screen.getByTestId('footer')).toHaveClass('custom-footer')
      })
    })
  })
})
