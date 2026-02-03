import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Mic } from 'lucide-react'
import { ItemDetailsDialog, type ItemDetailsItem, type ItemDetailsCategory } from './ItemDetailsDialog'

describe('ItemDetailsDialog', () => {
  const mockCategories: ItemDetailsCategory[] = [
    { id: 'cat-1', label: '카테고리 1' },
    { id: 'cat-2', label: '카테고리 2' },
  ]

  const mockItem: ItemDetailsItem = {
    id: 'test-item',
    title: '테스트 아이템',
    description: '테스트 아이템 설명입니다.',
    icon: Mic,
    categories: mockCategories,
    features: ['기능 1', '기능 2', '기능 3'],
    badges: ['MP3', 'WAV', 'OGG'],
    ctaUrl: 'https://example.com',
    ctaLabel: '시작하기',
  }

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
    it('item이 null이면 렌더링되지 않아야 함', () => {
      render(<ItemDetailsDialog open={true} onOpenChange={jest.fn()} item={null} />)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('open이 true일 때 다이얼로그가 렌더링되어야 함', async () => {
      render(<ItemDetailsDialog open={true} onOpenChange={jest.fn()} item={mockItem} />)

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument()
      })
    })

    it('open이 false일 때 다이얼로그가 렌더링되지 않아야 함', () => {
      render(<ItemDetailsDialog open={false} onOpenChange={jest.fn()} item={mockItem} />)
      expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    })

    it('아이템 타이틀이 렌더링되어야 함', async () => {
      render(<ItemDetailsDialog open={true} onOpenChange={jest.fn()} item={mockItem} />)

      await waitFor(() => {
        expect(screen.getByText('테스트 아이템')).toBeInTheDocument()
      })
    })

    it('아이템 설명이 렌더링되어야 함', async () => {
      render(<ItemDetailsDialog open={true} onOpenChange={jest.fn()} item={mockItem} />)

      await waitFor(() => {
        expect(screen.getByText('테스트 아이템 설명입니다.')).toBeInTheDocument()
      })
    })
  })

  describe('카테고리', () => {
    it('카테고리가 렌더링되어야 함', async () => {
      render(<ItemDetailsDialog open={true} onOpenChange={jest.fn()} item={mockItem} />)

      await waitFor(() => {
        expect(screen.getByText('카테고리 1')).toBeInTheDocument()
        expect(screen.getByText('카테고리 2')).toBeInTheDocument()
      })
    })

    it('카테고리가 없으면 렌더링되지 않아야 함', async () => {
      const itemWithoutCategories = { ...mockItem, categories: undefined }
      render(<ItemDetailsDialog open={true} onOpenChange={jest.fn()} item={itemWithoutCategories} />)

      await waitFor(() => {
        expect(screen.queryByText('카테고리 1')).not.toBeInTheDocument()
      })
    })
  })

  describe('기능 목록', () => {
    it('기능 목록이 렌더링되어야 함', async () => {
      render(<ItemDetailsDialog open={true} onOpenChange={jest.fn()} item={mockItem} />)

      await waitFor(() => {
        expect(screen.getByText('기능 1')).toBeInTheDocument()
        expect(screen.getByText('기능 2')).toBeInTheDocument()
        expect(screen.getByText('기능 3')).toBeInTheDocument()
      })
    })

    it('기본 기능 타이틀이 표시되어야 함', async () => {
      render(<ItemDetailsDialog open={true} onOpenChange={jest.fn()} item={mockItem} />)

      await waitFor(() => {
        expect(screen.getByText('주요 기능')).toBeInTheDocument()
      })
    })

    it('커스텀 기능 타이틀이 표시되어야 함', async () => {
      render(
        <ItemDetailsDialog
          open={true}
          onOpenChange={jest.fn()}
          item={mockItem}
          featuresTitle="Custom Features"
        />
      )

      await waitFor(() => {
        expect(screen.getByText('Custom Features')).toBeInTheDocument()
      })
    })

    it('기능이 없으면 기능 섹션이 렌더링되지 않아야 함', async () => {
      const itemWithoutFeatures = { ...mockItem, features: undefined }
      render(<ItemDetailsDialog open={true} onOpenChange={jest.fn()} item={itemWithoutFeatures} />)

      await waitFor(() => {
        expect(screen.queryByText('주요 기능')).not.toBeInTheDocument()
      })
    })
  })

  describe('배지', () => {
    it('배지가 렌더링되어야 함', async () => {
      render(<ItemDetailsDialog open={true} onOpenChange={jest.fn()} item={mockItem} />)

      await waitFor(() => {
        expect(screen.getByText('MP3')).toBeInTheDocument()
        expect(screen.getByText('WAV')).toBeInTheDocument()
        expect(screen.getByText('OGG')).toBeInTheDocument()
      })
    })

    it('기본 배지 타이틀이 표시되어야 함', async () => {
      render(<ItemDetailsDialog open={true} onOpenChange={jest.fn()} item={mockItem} />)

      await waitFor(() => {
        expect(screen.getByText('지원 형식')).toBeInTheDocument()
      })
    })

    it('커스텀 배지 타이틀이 표시되어야 함', async () => {
      render(
        <ItemDetailsDialog
          open={true}
          onOpenChange={jest.fn()}
          item={mockItem}
          badgesTitle="Supported Formats"
        />
      )

      await waitFor(() => {
        expect(screen.getByText('Supported Formats')).toBeInTheDocument()
      })
    })

    it('배지가 없으면 배지 섹션이 렌더링되지 않아야 함', async () => {
      const itemWithoutBadges = { ...mockItem, badges: undefined }
      render(<ItemDetailsDialog open={true} onOpenChange={jest.fn()} item={itemWithoutBadges} />)

      await waitFor(() => {
        expect(screen.queryByText('지원 형식')).not.toBeInTheDocument()
      })
    })
  })

  describe('버튼 동작', () => {
    it('닫기 버튼 클릭 시 onOpenChange(false)가 호출되어야 함', async () => {
      const onOpenChange = jest.fn()
      render(<ItemDetailsDialog open={true} onOpenChange={onOpenChange} item={mockItem} />)

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument()
      })

      await userEvent.click(screen.getByRole('button', { name: '닫기' }))

      expect(onOpenChange).toHaveBeenCalledWith(false)
    })

    it('커스텀 닫기 라벨이 적용되어야 함', async () => {
      render(
        <ItemDetailsDialog
          open={true}
          onOpenChange={jest.fn()}
          item={mockItem}
          closeLabel="Cancel"
        />
      )

      await waitFor(() => {
        expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument()
      })
    })

    it('CTA 버튼 클릭 시 새 창으로 열어야 함', async () => {
      render(<ItemDetailsDialog open={true} onOpenChange={jest.fn()} item={mockItem} />)

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument()
      })

      await userEvent.click(screen.getByRole('button', { name: /시작하기/i }))

      expect(mockWindowOpen).toHaveBeenCalledWith(
        'https://example.com',
        '_blank',
        'noopener,noreferrer'
      )
    })

    it('ctaUrl이 없으면 CTA 버튼이 렌더링되지 않아야 함', async () => {
      const itemWithoutCta = { ...mockItem, ctaUrl: undefined }
      render(<ItemDetailsDialog open={true} onOpenChange={jest.fn()} item={itemWithoutCta} />)

      await waitFor(() => {
        expect(screen.queryByRole('button', { name: /시작하기/i })).not.toBeInTheDocument()
      })
    })
  })

  describe('스타일', () => {
    it('추가 className이 적용되어야 함', async () => {
      render(
        <ItemDetailsDialog
          open={true}
          onOpenChange={jest.fn()}
          item={mockItem}
          className="custom-dialog"
        />
      )

      await waitFor(() => {
        const dialog = screen.getByRole('dialog')
        expect(dialog).toHaveClass('custom-dialog')
      })
    })
  })
})
