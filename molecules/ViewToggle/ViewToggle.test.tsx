import { render, screen, fireEvent } from '@testing-library/react'
import { ViewToggle } from './ViewToggle'

describe('ViewToggle', () => {
  const defaultProps = {
    viewMode: 'grid' as const,
    onViewModeChange: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('렌더링', () => {
    it('두 개의 버튼이 렌더링되어야 함', () => {
      render(<ViewToggle {...defaultProps} />)
      const buttons = screen.getAllByRole('button')
      expect(buttons).toHaveLength(2)
    })

    it('그리드 뷰 버튼이 렌더링되어야 함', () => {
      render(<ViewToggle {...defaultProps} />)
      expect(screen.getByRole('button', { name: '그리드 뷰' })).toBeInTheDocument()
    })

    it('리스트 뷰 버튼이 렌더링되어야 함', () => {
      render(<ViewToggle {...defaultProps} />)
      expect(screen.getByRole('button', { name: '리스트 뷰' })).toBeInTheDocument()
    })

    it('커스텀 라벨이 적용되어야 함', () => {
      render(
        <ViewToggle
          {...defaultProps}
          gridLabel="Grid View"
          listLabel="List View"
        />
      )
      expect(screen.getByRole('button', { name: 'Grid View' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'List View' })).toBeInTheDocument()
    })
  })

  describe('상태', () => {
    it('grid 모드일 때 그리드 버튼이 활성화되어야 함', () => {
      render(<ViewToggle {...defaultProps} viewMode="grid" />)
      const gridButton = screen.getByRole('button', { name: '그리드 뷰' })
      expect(gridButton).toHaveAttribute('aria-pressed', 'true')
    })

    it('list 모드일 때 리스트 버튼이 활성화되어야 함', () => {
      render(<ViewToggle {...defaultProps} viewMode="list" />)
      const listButton = screen.getByRole('button', { name: '리스트 뷰' })
      expect(listButton).toHaveAttribute('aria-pressed', 'true')
    })
  })

  describe('상호작용', () => {
    it('그리드 버튼 클릭 시 onViewModeChange(grid)가 호출되어야 함', () => {
      const handleChange = jest.fn()
      render(<ViewToggle viewMode="list" onViewModeChange={handleChange} />)

      fireEvent.click(screen.getByRole('button', { name: '그리드 뷰' }))
      expect(handleChange).toHaveBeenCalledWith('grid')
    })

    it('리스트 버튼 클릭 시 onViewModeChange(list)가 호출되어야 함', () => {
      const handleChange = jest.fn()
      render(<ViewToggle viewMode="grid" onViewModeChange={handleChange} />)

      fireEvent.click(screen.getByRole('button', { name: '리스트 뷰' }))
      expect(handleChange).toHaveBeenCalledWith('list')
    })
  })

  describe('접근성', () => {
    it('role="group"이 설정되어야 함', () => {
      render(<ViewToggle {...defaultProps} />)
      expect(screen.getByRole('group', { name: '뷰 모드 선택' })).toBeInTheDocument()
    })

    it('aria-pressed가 올바르게 설정되어야 함', () => {
      render(<ViewToggle {...defaultProps} viewMode="grid" />)

      const gridButton = screen.getByRole('button', { name: '그리드 뷰' })
      const listButton = screen.getByRole('button', { name: '리스트 뷰' })

      expect(gridButton).toHaveAttribute('aria-pressed', 'true')
      expect(listButton).toHaveAttribute('aria-pressed', 'false')
    })
  })

  describe('스타일', () => {
    it('추가 className이 적용되어야 함', () => {
      render(<ViewToggle {...defaultProps} className="custom-toggle" />)
      const container = screen.getByRole('group')
      expect(container).toHaveClass('custom-toggle')
    })
  })

  describe('반응형 디자인', () => {
    it('버튼에 반응형 크기가 적용되어야 함', () => {
      render(<ViewToggle {...defaultProps} />)
      const gridButton = screen.getByRole('button', { name: '그리드 뷰' })
      const listButton = screen.getByRole('button', { name: '리스트 뷰' })

      expect(gridButton).toHaveClass('h-8', 'w-8', 'sm:h-10', 'sm:w-10')
      expect(listButton).toHaveClass('h-8', 'w-8', 'sm:h-10', 'sm:w-10')
    })

    it('아이콘에 반응형 크기가 적용되어야 함', () => {
      render(<ViewToggle {...defaultProps} />)
      const icons = screen.getByRole('group').querySelectorAll('svg')

      icons.forEach((icon) => {
        expect(icon).toHaveClass('h-3.5', 'w-3.5', 'sm:h-4', 'sm:w-4')
      })
    })
  })
})
