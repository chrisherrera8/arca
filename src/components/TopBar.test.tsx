import { describe, it, expect } from 'vitest'
import { render, screen } from '../../tests/test-utils'
import TopBar from './TopBar'
import { TEST_ADMIN_USER } from '../../tests/fixtures'

describe('TopBar Component', () => {
  it('renders the user name', () => {
    render(<TopBar currentUser={TEST_ADMIN_USER} />, {
      currentUser: TEST_ADMIN_USER,
    })

    expect(screen.getByText('Admin User')).toBeInTheDocument()
  })

  it('renders the user email', () => {
    render(<TopBar currentUser={TEST_ADMIN_USER} />, {
      currentUser: TEST_ADMIN_USER,
    })

    expect(screen.getByText('admin@acme.com')).toBeInTheDocument()
  })

  it('renders a notifications button', () => {
    render(<TopBar currentUser={TEST_ADMIN_USER} />, {
      currentUser: TEST_ADMIN_USER,
    })

    const notifButton = screen.getByRole('button', { name: /notifications/i })
    expect(notifButton).toBeInTheDocument()
  })

  it('renders a user avatar', () => {
    render(<TopBar currentUser={TEST_ADMIN_USER} />, {
      currentUser: TEST_ADMIN_USER,
    })

    const avatar = screen.getByLabelText(/user avatar/i)
    expect(avatar).toBeInTheDocument()
  })

  it('does not render a search bar', () => {
    render(<TopBar currentUser={TEST_ADMIN_USER} />, {
      currentUser: TEST_ADMIN_USER,
    })

    const searchInput = screen.queryByRole('searchbox')
    expect(searchInput).not.toBeInTheDocument()

    const searchPlaceholder = screen.queryByPlaceholderText(/search/i)
    expect(searchPlaceholder).not.toBeInTheDocument()
  })
})
