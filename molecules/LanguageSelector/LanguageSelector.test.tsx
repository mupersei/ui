import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LanguageSelector } from './LanguageSelector'

describe('LanguageSelector', () => {
  const defaultProps = {
    currentLocale: 'ko' as const,
    onLocaleChange: jest.fn(),
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('렌더링', () => {
    it('버튼이 렌더링되어야 함', () => {
      render(<LanguageSelector {...defaultProps} />)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('현재 언어가 표시되어야 함', () => {
      render(<LanguageSelector {...defaultProps} currentLocale="ko" />)
      expect(screen.getByText('한국어')).toBeInTheDocument()
    })

    it('영어 로케일일 때 English가 표시되어야 함', () => {
      render(<LanguageSelector {...defaultProps} currentLocale="en" />)
      expect(screen.getByText('English')).toBeInTheDocument()
    })
  })

  describe('상호작용', () => {
    it('버튼 클릭 시 드롭다운이 열려야 함', async () => {
      render(<LanguageSelector {...defaultProps} />)

      const button = screen.getByRole('button')
      await userEvent.click(button)

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })
    })

    it('언어 선택 시 onLocaleChange가 호출되어야 함', async () => {
      const handleChange = jest.fn()
      render(<LanguageSelector currentLocale="ko" onLocaleChange={handleChange} />)

      const button = screen.getByRole('button')
      await userEvent.click(button)

      await waitFor(() => {
        expect(screen.getByRole('menu')).toBeInTheDocument()
      })

      const englishOption = screen.getByRole('menuitem', { name: 'English' })
      await userEvent.click(englishOption)

      expect(handleChange).toHaveBeenCalledWith('en')
    })
  })

  describe('커스텀 언어 목록', () => {
    it('커스텀 언어 목록이 표시되어야 함', async () => {
      const customLanguages = [
        { code: 'ko' as const, label: '한국어' },
        { code: 'en' as const, label: 'English' },
      ]

      render(
        <LanguageSelector
          {...defaultProps}
          languages={customLanguages}
        />
      )

      const button = screen.getByRole('button')
      await userEvent.click(button)

      await waitFor(() => {
        expect(screen.getByRole('menuitem', { name: '한국어' })).toBeInTheDocument()
        expect(screen.getByRole('menuitem', { name: 'English' })).toBeInTheDocument()
      })
    })
  })

  describe('스타일', () => {
    it('추가 className이 적용되어야 함', () => {
      render(<LanguageSelector {...defaultProps} className="custom-selector" />)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('custom-selector')
    })
  })

  describe('반응형 디자인', () => {
    it('버튼에 반응형 높이가 적용되어야 함', () => {
      render(<LanguageSelector {...defaultProps} />)
      const button = screen.getByRole('button')
      expect(button).toHaveClass('h-8', 'sm:h-10')
    })

    it('언어 텍스트가 모바일에서 숨겨지고 태블릿 이상에서 표시되어야 함', () => {
      render(<LanguageSelector {...defaultProps} />)
      const languageText = screen.getByText('한국어')
      expect(languageText).toHaveClass('hidden', 'sm:inline')
    })
  })
})
