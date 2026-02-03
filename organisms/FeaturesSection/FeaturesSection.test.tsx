import { render, screen } from '@testing-library/react'
import { Mic, Video, Settings } from 'lucide-react'
import { FeaturesSection, type Feature } from './FeaturesSection'

describe('FeaturesSection', () => {
  const mockFeatures: Feature[] = [
    {
      id: 'feature-1',
      title: '기능 1',
      description: '기능 1 설명입니다.',
      icon: Mic,
    },
    {
      id: 'feature-2',
      title: '기능 2',
      description: '기능 2 설명입니다.',
      icon: Video,
    },
    {
      id: 'feature-3',
      title: '기능 3',
      description: '기능 3 설명입니다.',
      icon: Settings,
    },
  ]

  describe('렌더링', () => {
    it('section 요소로 렌더링되어야 함', () => {
      render(<FeaturesSection features={mockFeatures} />)
      expect(screen.getByRole('region')).toBeInTheDocument()
    })

    it('기본 타이틀이 렌더링되어야 함', () => {
      render(<FeaturesSection features={mockFeatures} />)
      expect(screen.getByRole('heading', { level: 2, name: '주요 기능' })).toBeInTheDocument()
    })

    it('커스텀 타이틀이 렌더링되어야 함', () => {
      render(<FeaturesSection features={mockFeatures} title="Custom Features" />)
      expect(screen.getByRole('heading', { level: 2, name: 'Custom Features' })).toBeInTheDocument()
    })

    it('기본 서브타이틀이 렌더링되어야 함', () => {
      render(<FeaturesSection features={mockFeatures} />)
      expect(screen.getByText('다양한 기능을 살펴보세요')).toBeInTheDocument()
    })

    it('커스텀 서브타이틀이 렌더링되어야 함', () => {
      render(<FeaturesSection features={mockFeatures} subtitle="Custom Subtitle" />)
      expect(screen.getByText('Custom Subtitle')).toBeInTheDocument()
    })
  })

  describe('기능 목록', () => {
    it('모든 기능이 렌더링되어야 함', () => {
      render(<FeaturesSection features={mockFeatures} />)

      expect(screen.getByText('기능 1')).toBeInTheDocument()
      expect(screen.getByText('기능 2')).toBeInTheDocument()
      expect(screen.getByText('기능 3')).toBeInTheDocument()
    })

    it('기능 설명이 렌더링되어야 함', () => {
      render(<FeaturesSection features={mockFeatures} />)

      expect(screen.getByText('기능 1 설명입니다.')).toBeInTheDocument()
      expect(screen.getByText('기능 2 설명입니다.')).toBeInTheDocument()
      expect(screen.getByText('기능 3 설명입니다.')).toBeInTheDocument()
    })

    it('기능 아이콘이 렌더링되어야 함', () => {
      render(<FeaturesSection features={mockFeatures} />)
      const section = screen.getByRole('region')
      const icons = section.querySelectorAll('svg')
      expect(icons).toHaveLength(3)
    })

    it('빈 기능 배열이면 기능이 렌더링되지 않아야 함', () => {
      render(<FeaturesSection features={[]} />)
      expect(screen.queryByText('기능 1')).not.toBeInTheDocument()
    })
  })

  describe('접근성', () => {
    it('기본 aria-labelledby가 있어야 함', () => {
      render(<FeaturesSection features={mockFeatures} />)
      expect(screen.getByRole('region')).toHaveAttribute('aria-labelledby', 'features-title')
    })

    it('커스텀 aria-labelledby가 적용되어야 함', () => {
      render(<FeaturesSection features={mockFeatures} ariaLabelledBy="custom-id" />)
      expect(screen.getByRole('region')).toHaveAttribute('aria-labelledby', 'custom-id')
    })

    it('타이틀의 id가 aria-labelledby와 일치해야 함', () => {
      render(<FeaturesSection features={mockFeatures} ariaLabelledBy="my-features" />)
      const title = screen.getByRole('heading', { level: 2 })
      expect(title).toHaveAttribute('id', 'my-features')
    })

    it('아이콘에 aria-hidden이 적용되어야 함', () => {
      render(<FeaturesSection features={mockFeatures} />)
      const section = screen.getByRole('region')
      const icons = section.querySelectorAll('svg')
      icons.forEach((icon) => {
        expect(icon).toHaveAttribute('aria-hidden', 'true')
      })
    })
  })

  describe('스타일', () => {
    it('추가 className이 적용되어야 함', () => {
      render(<FeaturesSection features={mockFeatures} className="custom-features" />)
      expect(screen.getByRole('region')).toHaveClass('custom-features')
    })
  })
})
