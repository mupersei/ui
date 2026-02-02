import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchBar } from './SearchBar'

describe('SearchBar', () => {
  const defaultProps = {
    value: '',
    onChange: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('렌더링', () => {
    it('검색 입력 필드가 렌더링되어야 함', () => {
      render(<SearchBar {...defaultProps} />)
      expect(screen.getByRole('search')).toBeInTheDocument()
      expect(screen.getByRole('searchbox')).toBeInTheDocument()
    })

    it('기본 placeholder가 표시되어야 함', () => {
      render(<SearchBar {...defaultProps} />)
      expect(screen.getByPlaceholderText('검색...')).toBeInTheDocument()
    })

    it('커스텀 placeholder가 표시되어야 함', () => {
      render(<SearchBar {...defaultProps} placeholder="서비스 검색" />)
      expect(screen.getByPlaceholderText('서비스 검색')).toBeInTheDocument()
    })

    it('value가 표시되어야 함', () => {
      render(<SearchBar {...defaultProps} value="테스트 검색어" />)
      expect(screen.getByDisplayValue('테스트 검색어')).toBeInTheDocument()
    })
  })

  describe('상호작용', () => {
    it('입력 시 onChange가 호출되어야 함', async () => {
      const handleChange = jest.fn()
      render(<SearchBar value="" onChange={handleChange} />)

      const input = screen.getByRole('searchbox')
      await userEvent.type(input, 'hello')

      expect(handleChange).toHaveBeenCalled()
    })

    it('각 입력마다 onChange가 호출되어야 함', async () => {
      const handleChange = jest.fn()
      render(<SearchBar value="" onChange={handleChange} />)

      const input = screen.getByRole('searchbox')
      await userEvent.type(input, 'abc')

      expect(handleChange).toHaveBeenCalledTimes(3)
    })
  })

  describe('접근성', () => {
    it('aria-label이 설정되어야 함', () => {
      render(<SearchBar {...defaultProps} placeholder="서비스 검색" />)
      const input = screen.getByRole('searchbox')
      expect(input).toHaveAttribute('aria-label', '서비스 검색')
    })

    it('role="search"가 컨테이너에 설정되어야 함', () => {
      render(<SearchBar {...defaultProps} />)
      expect(screen.getByRole('search')).toBeInTheDocument()
    })
  })

  describe('스타일', () => {
    it('추가 className이 적용되어야 함', () => {
      render(<SearchBar {...defaultProps} className="custom-search" />)
      const container = screen.getByRole('search')
      expect(container).toHaveClass('custom-search')
    })
  })

  describe('ref', () => {
    it('ref가 input 요소에 전달되어야 함', () => {
      const ref = { current: null } as React.RefObject<HTMLInputElement>
      render(<SearchBar {...defaultProps} ref={ref} />)
      expect(ref.current).toBeInstanceOf(HTMLInputElement)
    })
  })
})
