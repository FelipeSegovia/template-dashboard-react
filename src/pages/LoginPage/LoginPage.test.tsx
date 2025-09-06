import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import LoginPage from './LoginPage'

describe('LoginPage', () => {
  it('renders without crashing', () => {
    const { container } = render(<LoginPage />)
    expect(container).toBeInTheDocument()
  })

  it('matches snapshot', () => {
    const { asFragment } = render(<LoginPage />)
    expect(asFragment()).toMatchSnapshot()
  })
})