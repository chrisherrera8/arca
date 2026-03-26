import { describe, it, expect } from 'vitest'
import { render, screen } from '../../tests/test-utils'
import AppLayout from './AppLayout'
import { TEST_ADMIN_USER } from '../../tests/fixtures'

describe('AppLayout Component', () => {
  it('renders the sidebar', () => {
    render(<AppLayout />, { currentUser: TEST_ADMIN_USER })

    expect(screen.getByText('Acme')).toBeInTheDocument()
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Budgets')).toBeInTheDocument()
  })

  it('renders the top bar with user info', () => {
    render(<AppLayout />, { currentUser: TEST_ADMIN_USER })

    expect(screen.getByText('Admin User')).toBeInTheDocument()
    expect(screen.getByText('admin@acme.com')).toBeInTheDocument()
  })

  it('renders the top bar with notifications button', () => {
    render(<AppLayout />, { currentUser: TEST_ADMIN_USER })

    expect(screen.getByRole('button', { name: /notifications/i })).toBeInTheDocument()
  })

  it('renders the main content area', () => {
    render(<AppLayout />, { currentUser: TEST_ADMIN_USER })

    const mainContent = screen.getByRole('main')
    expect(mainContent).toBeInTheDocument()
  })

  it('renders sidebar navigation items correctly', () => {
    render(<AppLayout />, { currentUser: TEST_ADMIN_USER })

    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Budgets')).toBeInTheDocument()
    expect(screen.getByText('Teams')).toBeInTheDocument()
    expect(screen.getByText('Analytics')).toBeInTheDocument()
  })

  it('renders Settings and Logout in the sidebar', () => {
    render(<AppLayout />, { currentUser: TEST_ADMIN_USER })

    expect(screen.getByRole('button', { name: /settings/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /logout/i })).toBeInTheDocument()
  })
})
