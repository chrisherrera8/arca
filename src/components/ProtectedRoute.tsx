import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useUser } from '@clerk/react'

export default function ProtectedRoute() {
  const { isLoaded, isSignedIn } = useUser()
  const location = useLocation()

  if (!isLoaded) return null

  if (!isSignedIn) {
    return <Navigate to="/sign-in" state={{ from: location }} replace />
  }

  return <Outlet />
}
