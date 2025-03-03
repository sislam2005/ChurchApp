import { render, screen } from '@testing-library/react'
import { Label } from '../ui/label'

describe('Label', () => {
  it('renders label with default styles', () => {
    render(<Label>Test Label</Label>)
    const label = screen.getByText('Test Label')
    expect(label).toBeInTheDocument()
    expect(label).toHaveClass('text-sm', 'font-medium', 'leading-none')
  })

  it('applies custom className', () => {
    render(<Label className="custom-class">Custom Label</Label>)
    const label = screen.getByText('Custom Label')
    expect(label).toHaveClass('custom-class')
  })

  it('handles htmlFor attribute', () => {
    render(<Label htmlFor="test-input">Input Label</Label>)
    const label = screen.getByText('Input Label')
    expect(label).toHaveAttribute('for', 'test-input')
  })

  it('handles disabled state through peer classes', () => {
    render(<Label>Disabled Label</Label>)
    const label = screen.getByText('Disabled Label')
    expect(label).toHaveClass('peer-disabled:cursor-not-allowed', 'peer-disabled:opacity-70')
  })
}) 