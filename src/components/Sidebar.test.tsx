import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '../../tests/test-utils'
import Sidebar from './Sidebar'
import { TEST_ADMIN_USER } from '../../tests/fixtures'

describe('Sidebar Component', () => {
  const mockNavigate = vi.fn()

  beforeEach(() => {
    mockNavigate.mockClear()
  })

  it('renders organization name "Acme"', () => {
    render(<Sidebar currentUser={TEST_ADMIN_USER} onNavigate={mockNavigate} />)
    
    const orgName = screen.getByText('Acme')
    expect(orgName).toBeInTheDocument()
  })

  it('renders all menu items: Dashboard, Budgets, Teams, Analytics', () => {
    render(<Sidebar currentUser={TEST_ADMIN_USER} onNavigate={mockNavigate} />)
    
    expect(screen.getByText('Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Budgets')).toBeInTheDocument()
    expect(screen.getByText('Teams')).toBeInTheDocument()
    expect(screen.getByText('Analytics')).toBeInTheDocument()
  })

  it('renders Settings button at the bottom', () => {
    render(<Sidebar currentUser={TEST_ADMIN_USER} onNavigate={mockNavigate} />)
    
    const settingsButton = screen.getByRole('button', { name: /settings/i })
    expect(settingsButton).toBeInTheDocument()
  })

  it('renders Logout button at the bottom', () => {
    render(<Sidebar currentUser={TEST_ADMIN_USER} onNavigate={mockNavigate} />)
    
    const logoutButton = screen.getByRole('button', { name: /logout/i })
    expect(logoutButton).toBeInTheDocument()
  })

  it('calls onNavigate when Dashboard menu item is clicked', () => {
    render(<Sidebar currentUser={TEST_ADMIN_USER} onNavigate={mockNavigate} />)
    
    const dashboardLink = screen.getByRole('link', { name: /dashboard/i })
    fireEvent.click(dashboardLink)
    expect(mockNavigate).toHaveBeenCalledWith('dashboard')
  })

  it('calls onNavigate when Budgets menu item is clicked', () => {
    render(<Sidebar currentUser={TEST_ADMIN_USER} onNavigate={mockNavigate} />)
    
    const budgetsLink = screen.getByRole('link', { name: /budgets/i })
    fireEvent.click(budgetsLink)
    expect(mockNavigate).toHaveBeenCalledWith('budgets')
  })

  it('calls onNavigate when Teams menu item is clicked', () => {
    render(<Sidebar currentUser={TEST_ADMIN_USER} onNavigate={mockNavigate} />)
    
    const teamsLink = screen.getByRole('link', { name: /teams/i })
    fireEvent.click(teamsLink)
    expect(mockNavigate).toHaveBeenCalledWith('teams')
  })

  it('calls onNavigate when Analytics menu item is clicked', () => {
    render(<Sidebar currentUser={TEST_ADMIN_USER} onNavigate={mockNavigate} />)
    
    const analyticsLink = screen.getByRole('link', { name: /analytics/i })
    fireEvent.click(analyticsLink)
    expect(mockNavigate).toHaveBeenCalledWith('analytics')
  })

  it('calls onNavigate when Settings button is clicked', () => {
    render(<Sidebar currentUser={TEST_ADMIN_USER} onNavigate={mockNavigate} />)
    
    const settingsButton = screen.getByRole('button', { name: /settings/i })
    fireEvent.click(settingsButton)
    expect(mockNavigate).toHaveBeenCalledWith('settings')
  })

  it('calls onNavigate when Logout button is clicked', () => {
    render(<Sidebar currentUser={TEST_ADMIN_USER} onNavigate={mockNavigate} />)
    
    const logoutButton = screen.getByRole('button', { name: /logout/i })
    fireEvent.click(logoutButton)
    expect(mockNavigate).toHaveBeenCalledWith('logout')
  })

  it('highlights the active menu item', () => {
    render(
      <Sidebar 
        currentUser={TEST_ADMIN_USER} 
        onNavigate={mockNavigate} 
        activePage="dashboard"
      />
    )
    
    const dashboardLink = screen.getByRole('link', { name: /dashboard/i })
    expect(dashboardLink.closest('[data-active="true"]')).toBeInTheDocument()
  })
})
