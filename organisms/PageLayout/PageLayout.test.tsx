import { render, screen } from '@testing-library/react'
import { PageLayout } from './PageLayout'

describe('PageLayout', () => {
  describe('렌더링', () => {
    it('main 요소로 렌더링되어야 함', () => {
      render(<PageLayout>Content</PageLayout>)
      expect(screen.getByRole('main')).toBeInTheDocument()
    })

    it('children이 렌더링되어야 함', () => {
      render(<PageLayout>Test Content</PageLayout>)
      expect(screen.getByText('Test Content')).toBeInTheDocument()
    })

    it('children이 main 요소 안에 렌더링되어야 함', () => {
      render(<PageLayout>Test Content</PageLayout>)
      const main = screen.getByRole('main')
      expect(main).toHaveTextContent('Test Content')
    })
  })

  describe('Header 슬롯', () => {
    it('header가 렌더링되어야 함', () => {
      render(
        <PageLayout header={<header data-testid="test-header">Header</header>}>
          Content
        </PageLayout>
      )
      expect(screen.getByTestId('test-header')).toBeInTheDocument()
    })

    it('header가 main 앞에 렌더링되어야 함', () => {
      render(
        <PageLayout header={<header data-testid="test-header">Header</header>}>
          Content
        </PageLayout>
      )
      const container = screen.getByTestId('test-header').parentElement
      const children = Array.from(container?.children || [])
      const headerIndex = children.findIndex(el => el.getAttribute('data-testid') === 'test-header')
      const mainIndex = children.findIndex(el => el.tagName === 'MAIN')
      expect(headerIndex).toBeLessThan(mainIndex)
    })

    it('header가 없으면 렌더링되지 않아야 함', () => {
      render(<PageLayout>Content</PageLayout>)
      expect(screen.queryByRole('banner')).not.toBeInTheDocument()
    })
  })

  describe('Footer 슬롯', () => {
    it('footer가 렌더링되어야 함', () => {
      render(
        <PageLayout footer={<footer data-testid="test-footer">Footer</footer>}>
          Content
        </PageLayout>
      )
      expect(screen.getByTestId('test-footer')).toBeInTheDocument()
    })

    it('footer가 main 뒤에 렌더링되어야 함', () => {
      render(
        <PageLayout footer={<footer data-testid="test-footer">Footer</footer>}>
          Content
        </PageLayout>
      )
      const container = screen.getByTestId('test-footer').parentElement
      const children = Array.from(container?.children || [])
      const footerIndex = children.findIndex(el => el.getAttribute('data-testid') === 'test-footer')
      const mainIndex = children.findIndex(el => el.tagName === 'MAIN')
      expect(footerIndex).toBeGreaterThan(mainIndex)
    })

    it('footer가 없으면 렌더링되지 않아야 함', () => {
      render(<PageLayout>Content</PageLayout>)
      expect(screen.queryByRole('contentinfo')).not.toBeInTheDocument()
    })
  })

  describe('Header와 Footer 함께 사용', () => {
    it('header, main, footer 순서로 렌더링되어야 함', () => {
      render(
        <PageLayout
          header={<header data-testid="test-header">Header</header>}
          footer={<footer data-testid="test-footer">Footer</footer>}
        >
          Content
        </PageLayout>
      )
      const container = screen.getByRole('main').parentElement
      const children = Array.from(container?.children || [])
      const headerIndex = children.findIndex(el => el.getAttribute('data-testid') === 'test-header')
      const mainIndex = children.findIndex(el => el.tagName === 'MAIN')
      const footerIndex = children.findIndex(el => el.getAttribute('data-testid') === 'test-footer')

      expect(headerIndex).toBeLessThan(mainIndex)
      expect(mainIndex).toBeLessThan(footerIndex)
    })
  })

  describe('스타일', () => {
    it('wrapper에 기본 클래스가 적용되어야 함', () => {
      render(<PageLayout>Content</PageLayout>)
      const wrapper = screen.getByRole('main').parentElement
      expect(wrapper).toHaveClass('flex', 'min-h-screen', 'flex-col')
    })

    it('wrapper에 추가 className이 적용되어야 함', () => {
      render(<PageLayout className="custom-wrapper">Content</PageLayout>)
      const wrapper = screen.getByRole('main').parentElement
      expect(wrapper).toHaveClass('custom-wrapper')
    })

    it('main에 기본 클래스가 적용되어야 함', () => {
      render(<PageLayout>Content</PageLayout>)
      const main = screen.getByRole('main')
      expect(main).toHaveClass('flex-1', 'container')
    })

    it('main에 추가 mainClassName이 적용되어야 함', () => {
      render(<PageLayout mainClassName="custom-main">Content</PageLayout>)
      const main = screen.getByRole('main')
      expect(main).toHaveClass('custom-main')
    })
  })

  describe('ref 전달', () => {
    it('ref가 wrapper div에 전달되어야 함', () => {
      const ref = { current: null }
      render(<PageLayout ref={ref}>Content</PageLayout>)
      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
  })
})
