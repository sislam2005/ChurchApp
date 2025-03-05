import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '../ui/card'

describe('Card Components', () => {
  describe('Card', () => {
    it('renders card with default styles', () => {
      render(<Card>Card Content</Card>)
      const card = screen.getByText('Card Content')
      expect(card).toBeInTheDocument()
      expect(card).toHaveClass('rounded-xl', 'border', 'bg-card', 'shadow')
    })

    it('applies custom className to card', () => {
      render(<Card className="custom-class">Card Content</Card>)
      const card = screen.getByText('Card Content')
      expect(card).toHaveClass('custom-class')
    })
  })

  describe('CardHeader', () => {
    it('renders header with default styles', () => {
      render(<CardHeader>Header Content</CardHeader>)
      const header = screen.getByText('Header Content')
      expect(header).toBeInTheDocument()
      expect(header).toHaveClass('flex', 'flex-col', 'space-y-1.5', 'p-6')
    })
  })

  describe('CardTitle', () => {
    it('renders title with default styles', () => {
      render(<CardTitle>Card Title</CardTitle>)
      const title = screen.getByText('Card Title')
      expect(title).toBeInTheDocument()
      expect(title).toHaveClass('font-semibold', 'leading-none', 'tracking-tight')
    })
  })

  describe('CardDescription', () => {
    it('renders description with default styles', () => {
      render(<CardDescription>Card Description</CardDescription>)
      const description = screen.getByText('Card Description')
      expect(description).toBeInTheDocument()
      expect(description).toHaveClass('text-sm', 'text-muted-foreground')
    })
  })

  describe('CardContent', () => {
    it('renders content with default styles', () => {
      render(<CardContent>Content</CardContent>)
      const content = screen.getByText('Content')
      expect(content).toBeInTheDocument()
      expect(content).toHaveClass('p-6', 'pt-0')
    })
  })

  describe('CardFooter', () => {
    it('renders footer with default styles', () => {
      render(<CardFooter>Footer Content</CardFooter>)
      const footer = screen.getByText('Footer Content')
      expect(footer).toBeInTheDocument()
      expect(footer).toHaveClass('flex', 'items-center', 'p-6', 'pt-0')
    })
  })

  it('renders full card structure', () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Example Card</CardTitle>
          <CardDescription>This is a card description</CardDescription>
        </CardHeader>
        <CardContent>Main content</CardContent>
        <CardFooter>Footer content</CardFooter>
      </Card>
    )
    
    expect(screen.getByText('Example Card')).toBeInTheDocument()
    expect(screen.getByText('This is a card description')).toBeInTheDocument()
    expect(screen.getByText('Main content')).toBeInTheDocument()
    expect(screen.getByText('Footer content')).toBeInTheDocument()
  })
}) 