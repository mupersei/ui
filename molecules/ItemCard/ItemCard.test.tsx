import { render, screen, fireEvent } from '@testing-library/react'
import { Mic } from 'lucide-react'
import { ItemCard, type ItemCardItem } from './ItemCard'

describe('ItemCard', () => {
  const mockItem: ItemCardItem = {
    id: 'test-item',
    title: '테스트 아이템',
    description: '테스트 설명입니다.',
    icon: Mic,
    ctaUrl: 'https://example.com',
    ctaLabel: '시작하기',
  }

  describe('Grid 모드', () => {
    it('그리드 모드에서 렌더링되어야 함', () => {
      render(<ItemCard item={mockItem} mode="grid" />)
      expect(screen.getByText('테스트 아이템')).toBeInTheDocument()
      expect(screen.getByText('테스트 설명입니다.')).toBeInTheDocument()
    })

    it('상세 버튼이 렌더링되어야 함', () => {
      render(<ItemCard item={mockItem} mode="grid" />)
      expect(screen.getByRole('button', { name: '테스트 아이템 상세' })).toBeInTheDocument()
    })

    it('CTA 버튼이 렌더링되어야 함', () => {
      render(<ItemCard item={mockItem} mode="grid" />)
      expect(screen.getByRole('button', { name: '테스트 아이템 시작하기' })).toBeInTheDocument()
    })

    it('커스텀 상세 라벨이 적용되어야 함', () => {
      render(<ItemCard item={mockItem} mode="grid" detailLabel="자세히" />)
      expect(screen.getByRole('button', { name: '테스트 아이템 자세히' })).toBeInTheDocument()
    })

    it('기본 CTA 라벨이 적용되어야 함', () => {
      const itemWithoutCtaLabel = { ...mockItem, ctaLabel: undefined }
      render(<ItemCard item={itemWithoutCtaLabel} mode="grid" defaultCtaLabel="실행" />)
      expect(screen.getByRole('button', { name: '테스트 아이템 실행' })).toBeInTheDocument()
    })
  })

  describe('List 모드', () => {
    it('리스트 모드에서 렌더링되어야 함', () => {
      render(<ItemCard item={mockItem} mode="list" />)
      expect(screen.getByText('테스트 아이템')).toBeInTheDocument()
      expect(screen.getByText('테스트 설명입니다.')).toBeInTheDocument()
    })

    it('article 태그로 렌더링되어야 함', () => {
      render(<ItemCard item={mockItem} mode="list" />)
      expect(screen.getByRole('article')).toBeInTheDocument()
    })

    it('상세 버튼이 렌더링되어야 함', () => {
      render(<ItemCard item={mockItem} mode="list" />)
      expect(screen.getByRole('button', { name: '테스트 아이템 상세' })).toBeInTheDocument()
    })

    it('CTA 버튼이 렌더링되어야 함', () => {
      render(<ItemCard item={mockItem} mode="list" />)
      expect(screen.getByRole('button', { name: '테스트 아이템 시작하기' })).toBeInTheDocument()
    })
  })

  describe('이벤트 핸들러', () => {
    it('상세 버튼 클릭 시 onDetailClick이 호출되어야 함', () => {
      const handleDetailClick = jest.fn()
      render(<ItemCard item={mockItem} mode="grid" onDetailClick={handleDetailClick} />)

      fireEvent.click(screen.getByRole('button', { name: '테스트 아이템 상세' }))
      expect(handleDetailClick).toHaveBeenCalledWith(mockItem)
    })

    it('CTA 버튼 클릭 시 onCtaClick이 호출되어야 함', () => {
      const handleCtaClick = jest.fn()
      // window.open을 모킹
      const windowOpenSpy = jest.spyOn(window, 'open').mockImplementation(() => null)

      render(<ItemCard item={mockItem} mode="grid" onCtaClick={handleCtaClick} />)

      fireEvent.click(screen.getByRole('button', { name: '테스트 아이템 시작하기' }))
      expect(handleCtaClick).toHaveBeenCalledWith(mockItem)
      expect(windowOpenSpy).toHaveBeenCalledWith('https://example.com', '_blank', 'noopener,noreferrer')

      windowOpenSpy.mockRestore()
    })

    it('ctaUrl이 없을 때 window.open이 호출되지 않아야 함', () => {
      const itemWithoutUrl = { ...mockItem, ctaUrl: undefined }
      const windowOpenSpy = jest.spyOn(window, 'open').mockImplementation(() => null)

      render(<ItemCard item={itemWithoutUrl} mode="grid" />)

      fireEvent.click(screen.getByText('시작하기'))
      expect(windowOpenSpy).not.toHaveBeenCalled()

      windowOpenSpy.mockRestore()
    })
  })

  describe('스타일', () => {
    it('추가 className이 적용되어야 함 (grid)', () => {
      render(<ItemCard item={mockItem} mode="grid" className="custom-class" />)
      const card = screen.getByText('테스트 아이템').closest('.custom-class')
      expect(card).toBeInTheDocument()
    })

    it('추가 className이 적용되어야 함 (list)', () => {
      render(<ItemCard item={mockItem} mode="list" className="custom-class" />)
      expect(screen.getByRole('article')).toHaveClass('custom-class')
    })
  })
})
