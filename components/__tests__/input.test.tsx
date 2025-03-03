import { render, screen } from '@testing-library/react'
import { Input } from '../ui/input'

describe('Input', () => {
  it('renders input with default attributes', () => {
    render(<Input placeholder="Enter text" />)
    const input = screen.getByPlaceholderText('Enter text')
    expect(input).toBeInTheDocument()
    expect(input).toHaveClass('flex', 'h-9', 'w-full', 'rounded-md')
  })

  it('applies custom className', () => {
    render(<Input className="custom-class" data-testid="test-input" />)
    const input = screen.getByTestId('test-input')
    expect(input).toHaveClass('custom-class')
  })

  it('forwards type attribute', () => {
    render(<Input type="password" data-testid="password-input" />)
    const input = screen.getByTestId('password-input')
    expect(input).toHaveAttribute('type', 'password')
  })

  it('handles disabled state', () => {
    render(<Input disabled data-testid="disabled-input" />)
    const input = screen.getByTestId('disabled-input')
    expect(input).toBeDisabled()
    expect(input).toHaveClass('disabled:cursor-not-allowed', 'disabled:opacity-50')
  })
}) 