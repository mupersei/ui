import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MobileMenu } from './MobileMenu'

describe('MobileMenu', () => {
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
    it('메뉴 버튼이 렌더링되어야 함', () => {
      render(<MobileMenu {...defaultProps} />)
      expect(screen.getByRole('button', { name: '메뉴 열기' })).toBeInTheDocument()
    })
  })

  describe('메뉴 열기/닫기', () => {
    it('버튼 클릭 시 메뉴가 열려야 함', async () => {
      render(<MobileMenu {...defaultProps} />)

      const menuButton = screen.getByRole('button', { name: '메뉴 열기' })
      await userEvent.click(menuButton)

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument()
      })
    })

    it('메뉴 제목이 표시되어야 함', async () => {
      render(<MobileMenu {...defaultProps} />)

      await userEvent.click(screen.getByRole('button', { name: '메뉴 열기' }))

      await waitFor(() => {
        expect(screen.getByText('메뉴')).toBeInTheDocument()
      })
    })

    it('커스텀 메뉴 제목이 표시되어야 함', async () => {
      render(<MobileMenu {...defaultProps} menuTitle="Navigation" />)

      await userEvent.click(screen.getByRole('button', { name: '메뉴 열기' }))

      await waitFor(() => {
        expect(screen.getByText('Navigation')).toBeInTheDocument()
      })
    })
  })

  describe('카테고리', () => {
    it('카테고리가 메뉴에 표시되어야 함', async () => {
      render(<MobileMenu {...defaultProps} />)

      await userEvent.click(screen.getByRole('button', { name: '메뉴 열기' }))

      await waitFor(() => {
        mockCategories.forEach((category) => {
          expect(screen.getByRole('button', { name: category.label })).toBeInTheDocument()
        })
      })
    })

    it('카테고리 클릭 시 onCategoryChange가 호출되어야 함', async () => {
      const handleChange = jest.fn()
      render(<MobileMenu {...defaultProps} onCategoryChange={handleChange} />)

      await userEvent.click(screen.getByRole('button', { name: '메뉴 열기' }))

      await waitFor(() => {
        expect(screen.getByRole('button', { name: '카테고리 1' })).toBeInTheDocument()
      })

      await userEvent.click(screen.getByRole('button', { name: '카테고리 1' }))

      expect(handleChange).toHaveBeenCalledWith('category1')
    })

    it('카테고리 선택 후 메뉴가 닫혀야 함', async () => {
      render(<MobileMenu {...defaultProps} />)

      await userEvent.click(screen.getByRole('button', { name: '메뉴 열기' }))

      await waitFor(() => {
        expect(screen.getByRole('dialog')).toBeInTheDocument()
      })

      await userEvent.click(screen.getByRole('button', { name: '카테고리 1' }))

      await waitFor(() => {
        expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
      })
    })
  })

  describe('검색 기능', () => {
    it('onSearchChange가 있을 때 검색바가 표시되어야 함', async () => {
      render(<MobileMenu {...defaultProps} onSearchChange={jest.fn()} />)

      await userEvent.click(screen.getByRole('button', { name: '메뉴 열기' }))

      await waitFor(() => {
        expect(screen.getByRole('search')).toBeInTheDocument()
      })
    })

    it('onSearchChange가 없을 때 검색바가 표시되지 않아야 함', async () => {
      render(<MobileMenu {...defaultProps} />)

      await userEvent.click(screen.getByRole('button', { name: '메뉴 열기' }))

      await waitFor(() => {
        expect(screen.getByText('카테고리')).toBeInTheDocument()
      })

      expect(screen.queryByRole('search')).not.toBeInTheDocument()
    })
  })

  describe('필터 및 도움말', () => {
    it('onFilterClick이 있을 때 필터 버튼이 표시되어야 함', async () => {
      render(<MobileMenu {...defaultProps} onFilterClick={jest.fn()} />)

      await userEvent.click(screen.getByRole('button', { name: '메뉴 열기' }))

      await waitFor(() => {
        expect(screen.getByRole('button', { name: '필터' })).toBeInTheDocument()
      })
    })

    it('onHelpClick이 있을 때 도움말 버튼이 표시되어야 함', async () => {
      render(<MobileMenu {...defaultProps} onHelpClick={jest.fn()} />)

      await userEvent.click(screen.getByRole('button', { name: '메뉴 열기' }))

      await waitFor(() => {
        expect(screen.getByRole('button', { name: '도움말' })).toBeInTheDocument()
      })
    })
  })

  describe('스타일', () => {
    it('추가 className이 트리거 버튼에 적용되어야 함', () => {
      render(<MobileMenu {...defaultProps} className="custom-menu" />)
      expect(screen.getByRole('button', { name: '메뉴 열기' })).toHaveClass('custom-menu')
    })
  })
})
