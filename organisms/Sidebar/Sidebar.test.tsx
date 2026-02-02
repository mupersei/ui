import { render, screen, fireEvent } from '@testing-library/react'
import { Sidebar } from './Sidebar'

describe('Sidebar', () => {
  const mockCategories = [
    { id: 'all', label: '전체' },
    { id: 'category1', label: '카테고리 1' },
    { id: 'category2', label: '카테고리 2' },
  ]

  const defaultProps = {
    categories: mockCategories,
    activeCategory: 'all',
    onCategoryChange: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('렌더링', () => {
    it('Sidebar가 렌더링되어야 함', () => {
      render(<Sidebar {...defaultProps} />)
      expect(screen.getByRole('complementary')).toBeInTheDocument()
    })

    it('카테고리 제목이 표시되어야 함', () => {
      render(<Sidebar {...defaultProps} />)
      expect(screen.getByText('카테고리')).toBeInTheDocument()
    })

    it('커스텀 카테고리 제목이 표시되어야 함', () => {
      render(<Sidebar {...defaultProps} categoryTitle="필터" />)
      expect(screen.getByText('필터')).toBeInTheDocument()
    })

    it('모든 카테고리가 렌더링되어야 함', () => {
      render(<Sidebar {...defaultProps} />)

      mockCategories.forEach((category) => {
        expect(screen.getByRole('button', { name: category.label })).toBeInTheDocument()
      })
    })
  })

  describe('카테고리 선택', () => {
    it('활성 카테고리가 강조되어야 함', () => {
      render(<Sidebar {...defaultProps} activeCategory="category1" />)

      const activeButton = screen.getByRole('button', { name: '카테고리 1' })
      expect(activeButton).toHaveAttribute('aria-current', 'page')
    })

    it('카테고리 클릭 시 onCategoryChange가 호출되어야 함', () => {
      const handleChange = jest.fn()
      render(<Sidebar {...defaultProps} onCategoryChange={handleChange} />)

      fireEvent.click(screen.getByRole('button', { name: '카테고리 2' }))
      expect(handleChange).toHaveBeenCalledWith('category2')
    })
  })

  describe('필터 버튼', () => {
    it('onFilterClick이 있을 때 필터 버튼이 표시되어야 함', () => {
      render(<Sidebar {...defaultProps} onFilterClick={jest.fn()} />)
      expect(screen.getByRole('button', { name: '필터' })).toBeInTheDocument()
    })

    it('onFilterClick이 없을 때 필터 버튼이 표시되지 않아야 함', () => {
      render(<Sidebar {...defaultProps} />)
      expect(screen.queryByRole('button', { name: '필터' })).not.toBeInTheDocument()
    })

    it('필터 버튼 클릭 시 onFilterClick이 호출되어야 함', () => {
      const handleFilter = jest.fn()
      render(<Sidebar {...defaultProps} onFilterClick={handleFilter} />)

      fireEvent.click(screen.getByRole('button', { name: '필터' }))
      expect(handleFilter).toHaveBeenCalledTimes(1)
    })

    it('커스텀 필터 라벨이 표시되어야 함', () => {
      render(<Sidebar {...defaultProps} onFilterClick={jest.fn()} filterLabel="Filter" />)
      expect(screen.getByRole('button', { name: 'Filter' })).toBeInTheDocument()
    })
  })

  describe('도움말 버튼', () => {
    it('onHelpClick이 있을 때 도움말 버튼이 표시되어야 함', () => {
      render(<Sidebar {...defaultProps} onHelpClick={jest.fn()} />)
      expect(screen.getByRole('button', { name: '도움말' })).toBeInTheDocument()
    })

    it('onHelpClick이 없을 때 도움말 버튼이 표시되지 않아야 함', () => {
      render(<Sidebar {...defaultProps} />)
      expect(screen.queryByRole('button', { name: '도움말' })).not.toBeInTheDocument()
    })

    it('도움말 버튼 클릭 시 onHelpClick이 호출되어야 함', () => {
      const handleHelp = jest.fn()
      render(<Sidebar {...defaultProps} onHelpClick={handleHelp} />)

      fireEvent.click(screen.getByRole('button', { name: '도움말' }))
      expect(handleHelp).toHaveBeenCalledTimes(1)
    })
  })

  describe('접근성', () => {
    it('aria-label이 설정되어야 함', () => {
      render(<Sidebar {...defaultProps} />)
      expect(screen.getByLabelText('카테고리 네비게이션')).toBeInTheDocument()
    })

    it('네비게이션에 aria-labelledby가 설정되어야 함', () => {
      render(<Sidebar {...defaultProps} />)
      expect(screen.getByRole('navigation')).toHaveAttribute('aria-labelledby')
    })
  })

  describe('스타일', () => {
    it('추가 className이 적용되어야 함', () => {
      render(<Sidebar {...defaultProps} className="custom-sidebar" />)
      expect(screen.getByRole('complementary')).toHaveClass('custom-sidebar')
    })
  })
})
