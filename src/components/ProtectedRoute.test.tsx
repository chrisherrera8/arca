import { describe, it, expect, vi, beforeEach } from 'vitest'
import { Routes, Route } from 'react-router-dom'
import { render, screen } from '../../tests/test-utils'
import ProtectedRoute from './ProtectedRoute'

const useUserMock = vi.hoisted(() => vi.fn())

vi.mock('@clerk/react', () => ({
  useUser: useUserMock,
}))

function renderRoutes(initialRoute: string) {
  return render(
    <Routes>
      <Route path="/sign-in" element={<div>Sign in page</div>} />
      <Route element={<ProtectedRoute />}>
        <Route path="/dashboard" element={<div>Secret dashboard</div>} />
      </Route>
    </Routes>,
    { initialRoute },
  )
}

describe('ProtectedRoute', () => {
  beforeEach(() => {
    useUserMock.mockReset()
  })

  it('renders protected content when signed in', () => {
    useUserMock.mockReturnValue({ isLoaded: true, isSignedIn: true })
    renderRoutes('/dashboard')

    expect(screen.getByText('Secret dashboard')).toBeInTheDocument()
  })

  it('redirects to /sign-in when signed out', () => {
    useUserMock.mockReturnValue({ isLoaded: true, isSignedIn: false })
    renderRoutes('/dashboard')

    expect(screen.getByText('Sign in page')).toBeInTheDocument()
    expect(screen.queryByText('Secret dashboard')).not.toBeInTheDocument()
  })

  it('renders nothing while Clerk is loading', () => {
    useUserMock.mockReturnValue({ isLoaded: false, isSignedIn: false })
    renderRoutes('/dashboard')

    expect(screen.queryByText('Secret dashboard')).not.toBeInTheDocument()
    expect(screen.queryByText('Sign in page')).not.toBeInTheDocument()
  })
})
