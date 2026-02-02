import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from './Input'

describe('Input', () => {
  describe('렌더링', () => {
    it('input 요소가 렌더링되어야 함', () => {
      render(<Input />)
      expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('placeholder가 표시되어야 함', () => {
      render(<Input placeholder="이메일 입력" />)
      expect(screen.getByPlaceholderText('이메일 입력')).toBeInTheDocument()
    })

    it('type 속성이 적용되어야 함', () => {
      render(<Input type="email" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('type', 'email')
    })
  })

  describe('값 입력', () => {
    it('value가 표시되어야 함', () => {
      render(<Input value="테스트 값" readOnly />)
      expect(screen.getByDisplayValue('테스트 값')).toBeInTheDocument()
    })

    it('onChange 이벤트가 발생해야 함', async () => {
      const handleChange = jest.fn()
      render(<Input onChange={handleChange} />)

      const input = screen.getByRole('textbox')
      await userEvent.type(input, 'hello')

      expect(handleChange).toHaveBeenCalled()
    })

    it('사용자 입력이 표시되어야 함', async () => {
      render(<Input />)
      const input = screen.getByRole('textbox')

      await userEvent.type(input, '테스트 입력')
      expect(input).toHaveValue('테스트 입력')
    })
  })

  describe('상태', () => {
    it('disabled 상태가 적용되어야 함', () => {
      render(<Input disabled />)
      const input = screen.getByRole('textbox')
      expect(input).toBeDisabled()
    })

    it('readOnly 상태가 적용되어야 함', () => {
      render(<Input readOnly value="읽기 전용" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveAttribute('readonly')
    })

    it('required 속성이 적용되어야 함', () => {
      render(<Input required />)
      const input = screen.getByRole('textbox')
      expect(input).toBeRequired()
    })
  })

  describe('className', () => {
    it('추가 className이 적용되어야 함', () => {
      render(<Input className="custom-input" />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('custom-input')
    })

    it('기본 스타일이 적용되어야 함', () => {
      render(<Input />)
      const input = screen.getByRole('textbox')
      expect(input).toHaveClass('rounded-md', 'border')
    })
  })

  describe('ref', () => {
    it('ref가 전달되어야 함', () => {
      const ref = { current: null } as React.RefObject<HTMLInputElement>
      render(<Input ref={ref} />)
      expect(ref.current).toBeInstanceOf(HTMLInputElement)
    })
  })

  describe('포커스', () => {
    it('포커스가 되어야 함', async () => {
      render(<Input />)
      const input = screen.getByRole('textbox')

      await userEvent.click(input)
      expect(input).toHaveFocus()
    })

    it('onFocus 이벤트가 발생해야 함', () => {
      const handleFocus = jest.fn()
      render(<Input onFocus={handleFocus} />)

      const input = screen.getByRole('textbox')
      fireEvent.focus(input)

      expect(handleFocus).toHaveBeenCalledTimes(1)
    })

    it('onBlur 이벤트가 발생해야 함', () => {
      const handleBlur = jest.fn()
      render(<Input onBlur={handleBlur} />)

      const input = screen.getByRole('textbox')
      fireEvent.blur(input)

      expect(handleBlur).toHaveBeenCalledTimes(1)
    })
  })
})
