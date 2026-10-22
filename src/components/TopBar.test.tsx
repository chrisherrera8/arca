import { describe, it, expect } from 'vitest'
import { render, screen } from '../../tests/test-utils'
import TopBar from './TopBar'

describe('TopBar Component', () => {
  it('renders Clerk\'s user button', () => {
    render(<TopBar />)

    expect(screen.getByTestId('user-button')).toBeInTheDocument()
  })

  it('renders Clerk\'s organization switcher', () => {
    render(<TopBar />)

    expect(screen.getByTestId('org-switcher')).toBeInTheDocument()
  })

  it('renders a notifications button', () => {
    render(<TopBar />)

    const notifButton = screen.getByRole('button', { name: /notifications/i })
    expect(notifButton).toBeInTheDocument()
  })

  it('does not render a search bar', () => {
    render(<TopBar />)

    expect(screen.queryByRole('searchbox')).not.toBeInTheDocument()
    expect(screen.queryByPlaceholderText(/search/i)).not.toBeInTheDocument()
  })
})
