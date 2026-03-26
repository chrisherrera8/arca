import { describe, it, expect } from 'vitest'
import { render, screen } from '../tests/test-utils'
import App from './App'

describe('App', () => {
  it('renders the application header', () => {
    render(<App />)
    
    const heading = screen.getByRole('heading', { name: /arca community platform/i })
    expect(heading).toBeInTheDocument()
  })

  it('displays the welcome message', () => {
    render(<App />)
    
    const paragraph = screen.getByText(/a safe and welcoming community/i)
    expect(paragraph).toBeInTheDocument()
  })

  it('renders the main content section', () => {
    render(<App />)
    
    const welcomeHeading = screen.getByRole('heading', { name: /welcome to arca/i })
    expect(welcomeHeading).toBeInTheDocument()
  })
})
