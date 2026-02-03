import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Mic, Video, Settings } from 'lucide-react'
import { ItemsSection } from './ItemsSection'
import type { ItemCardItem } from '../../molecules/ItemCard'

describe('ItemsSection', () => {
  const mockWindowOpen = jest.fn()
  const originalOpen = window.open

  beforeEach(() => {
    window.open = mockWindowOpen
    jest.clearAllMocks()
  })

  afterEach(() => {
    window.open = originalOpen
  })

  const mockItems: ItemCardItem[] = [
    {
      id: 'item-1',
      title: '아이템 1',
      description: '아이템 1 설명입니다.',
      icon: Mic,
      ctaUrl: 'https://example.com/1',
      ctaLabel: '시작하기',
    },
    {
      id: 'item-2',
      title: '아이템 2',
      description: '아이템 2 설명입니다.',
      icon: Video,
      ctaUrl: 'https://example.com/2',
      ctaLabel: '시작하기',
    },
    {
      id: 'item-3',
      title: '아이템 3',
      description: '아이템 3 설명입니다.',
      icon: Settings,
      ctaUrl: 'https://example.com/3',
      ctaLabel: '시작하기',
    },
  ]

  describe('렌더링', () => {
    it('section 요소로 렌더링되어야 함', () => {
      render(<ItemsSection items={mockItems} />)
      expect(screen.getByRole('region')).toBeInTheDocument()
    })

    it('기본 타이틀이 렌더링되어야 함', () => {
      render(<ItemsSection items={mockItems} />)
      expect(screen.getByRole('heading', { level: 2, name: '서비스 둘러보기' })).toBeInTheDocument()
    })

    it('커스텀 타이틀이 렌더링되어야 함', () => {
      render(<ItemsSection items={mockItems} title="Custom Title" />)
      expect(screen.getByRole('heading', { level: 2, name: 'Custom Title' })).toBeInTheDocument()
    })

    it('기본 서브타이틀이 렌더링되어야 함', () => {
      render(<ItemsSection items={mockItems} />)
      expect(screen.getByText('다양한 기능을 살펴보세요')).toBeInTheDocument()
    })

    it('커스텀 서브타이틀이 렌더링되어야 함', () => {
      render(<ItemsSection items={mockItems} subtitle="Custom Subtitle" />)
      expect(screen.getByText('Custom Subtitle')).toBeInTheDocument()
    })
  })

  describe('아이템 목록', () => {
    it('모든 아이템이 렌더링되어야 함', () => {
      render(<ItemsSection items={mockItems} />)

      expect(screen.getByText('아이템 1')).toBeInTheDocument()
      expect(screen.getByText('아이템 2')).toBeInTheDocument()
      expect(screen.getByText('아이템 3')).toBeInTheDocument()
    })

    it('아이템 설명이 렌더링되어야 함', () => {
      render(<ItemsSection items={mockItems} />)

      expect(screen.getByText('아이템 1 설명입니다.')).toBeInTheDocument()
      expect(screen.getByText('아이템 2 설명입니다.')).toBeInTheDocument()
      expect(screen.getByText('아이템 3 설명입니다.')).toBeInTheDocument()
    })

    it('빈 아이템 배열이면 아이템이 렌더링되지 않아야 함', () => {
      render(<ItemsSection items={[]} />)
      expect(screen.queryByText('아이템 1')).not.toBeInTheDocument()
    })
  })

  describe('뷰 모드', () => {
    it('기본 뷰 모드가 grid여야 함', () => {
      render(<ItemsSection items={mockItems} />)
      const section = screen.getByRole('region')
      const grid = section.querySelector('.grid')
      expect(grid).toBeInTheDocument()
    })

    it('grid 모드가 적용되어야 함', () => {
      render(<ItemsSection items={mockItems} viewMode="grid" />)
      const section = screen.getByRole('region')
      const grid = section.querySelector('.grid')
      expect(grid).toBeInTheDocument()
    })

    it('list 모드가 적용되어야 함', () => {
      render(<ItemsSection items={mockItems} viewMode="list" />)
      const section = screen.getByRole('region')
      const list = section.querySelector('.space-y-2')
      expect(list).toBeInTheDocument()
    })
  })

  describe('이벤트 핸들러', () => {
    it('상세 버튼 클릭 시 onItemDetailClick이 호출되어야 함', async () => {
      const onItemDetailClick = jest.fn()
      render(<ItemsSection items={mockItems} onItemDetailClick={onItemDetailClick} />)

      // aria-label이 "아이템 이름 상세" 형식이므로 regex 사용
      const detailButtons = screen.getAllByRole('button', { name: /상세$/i })
      await userEvent.click(detailButtons[0])

      expect(onItemDetailClick).toHaveBeenCalledWith(mockItems[0])
    })

    it('CTA 버튼 클릭 시 onItemCtaClick이 호출되어야 함', async () => {
      const onItemCtaClick = jest.fn()
      render(<ItemsSection items={mockItems} onItemCtaClick={onItemCtaClick} />)

      // aria-label이 "아이템 이름 시작하기" 형식이므로 regex 사용
      const ctaButtons = screen.getAllByRole('button', { name: /시작하기$/i })
      await userEvent.click(ctaButtons[0])

      expect(onItemCtaClick).toHaveBeenCalledWith(mockItems[0])
    })
  })

  describe('커스텀 라벨', () => {
    it('커스텀 detailLabel이 적용되어야 함', () => {
      render(<ItemsSection items={mockItems} detailLabel="Detail" />)
      // aria-label이 "아이템 이름 Detail" 형식이므로 regex 사용
      expect(screen.getAllByRole('button', { name: /Detail$/i })).toHaveLength(3)
    })

    it('커스텀 defaultCtaLabel이 적용되어야 함', () => {
      const itemsWithoutCta = mockItems.map((item) => ({ ...item, ctaLabel: undefined }))
      render(<ItemsSection items={itemsWithoutCta} defaultCtaLabel="Start" />)
      // aria-label이 "아이템 이름 Start" 형식이므로 regex 사용
      expect(screen.getAllByRole('button', { name: /Start$/i })).toHaveLength(3)
    })
  })

  describe('접근성', () => {
    it('기본 aria-labelledby가 있어야 함', () => {
      render(<ItemsSection items={mockItems} />)
      expect(screen.getByRole('region')).toHaveAttribute('aria-labelledby', 'items-title')
    })

    it('커스텀 aria-labelledby가 적용되어야 함', () => {
      render(<ItemsSection items={mockItems} ariaLabelledBy="custom-id" />)
      expect(screen.getByRole('region')).toHaveAttribute('aria-labelledby', 'custom-id')
    })

    it('타이틀의 id가 aria-labelledby와 일치해야 함', () => {
      render(<ItemsSection items={mockItems} ariaLabelledBy="my-items" />)
      const title = screen.getByRole('heading', { level: 2 })
      expect(title).toHaveAttribute('id', 'my-items')
    })
  })

  describe('스타일', () => {
    it('추가 className이 적용되어야 함', () => {
      render(<ItemsSection items={mockItems} className="custom-section" />)
      expect(screen.getByRole('region')).toHaveClass('custom-section')
    })
  })
})
