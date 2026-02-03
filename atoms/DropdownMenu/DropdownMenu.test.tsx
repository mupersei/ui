import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from './DropdownMenu'

describe('DropdownMenu', () => {
  describe('렌더링', () => {
    it('트리거가 렌더링되어야 함', () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>메뉴 열기</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>항목 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      expect(screen.getByRole('button', { name: '메뉴 열기' })).toBeInTheDocument()
    })

    it('초기에는 메뉴가 닫혀있어야 함', () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>메뉴 열기</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>항목 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
      expect(screen.queryByRole('menu')).not.toBeInTheDocument()
    })
  })

  describe('열기/닫기', () => {
    it('트리거 클릭 시 메뉴가 열려야 함', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>메뉴 열기</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>항목 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )

      await userEvent.click(screen.getByRole('button', { name: '메뉴 열기' }))

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })
    })

    it('메뉴 항목이 표시되어야 함', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>메뉴 열기</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>항목 1</DropdownMenuItem>
            <DropdownMenuItem>항목 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )

      await userEvent.click(screen.getByRole('button', { name: '메뉴 열기' }))

      await waitFor(() => {
        expect(screen.getByRole('menuitem', { name: '항목 1' })).toBeInTheDocument()
        expect(screen.getByRole('menuitem', { name: '항목 2' })).toBeInTheDocument()
      })
    })
  })

  describe('DropdownMenuLabel', () => {
    it('라벨이 렌더링되어야 함', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>메뉴 열기</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>메뉴 라벨</DropdownMenuLabel>
            <DropdownMenuItem>항목 1</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )

      await userEvent.click(screen.getByRole('button', { name: '메뉴 열기' }))

      await waitFor(() => {
        expect(screen.getByText('메뉴 라벨')).toBeInTheDocument()
      })
    })
  })

  describe('DropdownMenuSeparator', () => {
    it('구분선이 렌더링되어야 함', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>메뉴 열기</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>항목 1</DropdownMenuItem>
            <DropdownMenuSeparator data-testid="separator" />
            <DropdownMenuItem>항목 2</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )

      await userEvent.click(screen.getByRole('button', { name: '메뉴 열기' }))

      await waitFor(() => {
        expect(screen.getByTestId('separator')).toBeInTheDocument()
      })
    })
  })

  describe('DropdownMenuShortcut', () => {
    it('단축키가 렌더링되어야 함', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>메뉴 열기</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              항목 1
              <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )

      await userEvent.click(screen.getByRole('button', { name: '메뉴 열기' }))

      await waitFor(() => {
        expect(screen.getByText('⌘K')).toBeInTheDocument()
      })
    })
  })

  describe('DropdownMenuCheckboxItem', () => {
    it('체크박스 항목이 렌더링되어야 함', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>메뉴 열기</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuCheckboxItem checked={true}>
              체크 항목
            </DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )

      await userEvent.click(screen.getByRole('button', { name: '메뉴 열기' }))

      await waitFor(() => {
        expect(screen.getByRole('menuitemcheckbox')).toBeInTheDocument()
      })
    })
  })

  describe('DropdownMenuRadioGroup', () => {
    it('라디오 그룹이 렌더링되어야 함', async () => {
      render(
        <DropdownMenu>
          <DropdownMenuTrigger>메뉴 열기</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuRadioGroup value="option1">
              <DropdownMenuRadioItem value="option1">옵션 1</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="option2">옵션 2</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )

      await userEvent.click(screen.getByRole('button', { name: '메뉴 열기' }))

      await waitFor(() => {
        expect(screen.getByRole('menuitemradio', { name: '옵션 1' })).toBeInTheDocument()
        expect(screen.getByRole('menuitemradio', { name: '옵션 2' })).toBeInTheDocument()
      })
    })
  })
})
