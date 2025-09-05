import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders without crashing', () => {
    const { container } = render(<Button />)
    expect(container).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<Button />)
    expect(asFragment()).toMatchSnapshot()
  })
})