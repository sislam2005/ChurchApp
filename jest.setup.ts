import '@testing-library/jest-dom'

// Extend Jest matchers
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R
      toHaveClass(...classNames: string[]): R
      toBeVisible(): R
      toHaveAttribute(attr: string, value?: string): R
    }
  }
} 