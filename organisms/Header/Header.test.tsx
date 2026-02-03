import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Header } from './Header'

describe('Header', () => {
  const defaultProps = {
    searchValue: '',
    onSearchChange: jest.fn(),
    viewMode: 'grid' as const,
    onViewModeChange: jest.fn(),
    currentLocale: 'ko' as const,
    onLocaleChange: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('렌더링', () => {
    it('기본 브랜드 이름이 렌더링되어야 함', () => {
      render(<Header {...defaultProps} />)
      expect(screen.getByRole('heading', { level: 1, name: 'Recorda' })).toBeInTheDocument()
    })

    it('커스텀 브랜드 이름이 렌더링되어야 함', () => {
      render(<Header {...defaultProps} brandName="Custom Brand" />)
      expect(screen.getByRole('heading', { level: 1, name: 'Custom Brand' })).toBeInTheDocument()
    })

    it('기본 서브타이틀이 렌더링되어야 함', () => {
      render(<Header {...defaultProps} />)
      expect(screen.getByRole('heading', { level: 2, name: 'Service Hub' })).toBeInTheDocument()
    })

    it('커스텀 서브타이틀이 렌더링되어야 함', () => {
      render(<Header {...defaultProps} subTitle="Custom Subtitle" />)
      expect(screen.getByRole('heading', { level: 2, name: 'Custom Subtitle' })).toBeInTheDocument()
    })

    it('서브타이틀이 없으면 렌더링되지 않아야 함', () => {
      render(<Header {...defaultProps} subTitle="" />)
      expect(screen.queryByRole('heading', { level: 2 })).not.toBeInTheDocument()
    })

    it('검색바가 렌더링되어야 함', () => {
      render(<Header {...defaultProps} searchPlaceholder="검색어 입력" />)
      expect(screen.getByPlaceholderText('검색어 입력')).toBeInTheDocument()
    })

    it('뷰 토글이 렌더링되어야 함', () => {
      render(<Header {...defaultProps} />)
      expect(screen.getByRole('group')).toBeInTheDocument()
    })
  })

  describe('검색', () => {
    it('검색어 입력 시 onSearchChange가 호출되어야 함', async () => {
      const onSearchChange = jest.fn()
      render(<Header {...defaultProps} onSearchChange={onSearchChange} />)

      const input = screen.getByPlaceholderText('검색...')
      await userEvent.type(input, 'test')

      expect(onSearchChange).toHaveBeenCalled()
    })

    it('검색 값이 표시되어야 함', () => {
      render(<Header {...defaultProps} searchValue="검색어" />)
      expect(screen.getByDisplayValue('검색어')).toBeInTheDocument()
    })
  })

  describe('뷰 모드', () => {
    it('그리드 뷰 모드일 때 그리드 버튼이 활성화되어야 함', () => {
      render(<Header {...defaultProps} viewMode="grid" />)
      const gridButton = screen.getByRole('button', { name: '그리드 뷰' })
      expect(gridButton).toHaveAttribute('aria-pressed', 'true')
    })

    it('리스트 뷰 모드일 때 리스트 버튼이 활성화되어야 함', () => {
      render(<Header {...defaultProps} viewMode="list" />)
      const listButton = screen.getByRole('button', { name: '리스트 뷰' })
      expect(listButton).toHaveAttribute('aria-pressed', 'true')
    })
  })

  describe('스타일', () => {
    it('header 요소로 렌더링되어야 함', () => {
      render(<Header {...defaultProps} />)
      expect(screen.getByRole('banner')).toBeInTheDocument()
    })

    it('추가 className이 적용되어야 함', () => {
      render(<Header {...defaultProps} className="custom-header" />)
      expect(screen.getByRole('banner')).toHaveClass('custom-header')
    })
  })
})
