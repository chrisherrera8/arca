import '@testing-library/jest-dom'
import { afterEach, vi } from 'vitest'
import { cleanup } from '@testing-library/react'
import type { ReactNode } from 'react'
import { TEST_ADMIN_USER } from './fixtures'

// Cleanup after each test
afterEach(() => {
  cleanup()
})

// Mock Clerk hooks/components so component tests don't need a live ClerkProvider.
vi.mock('@clerk/react', () => ({
  useUser: () => ({
    isLoaded: true,
    isSignedIn: true,
    user: {
      id: TEST_ADMIN_USER.id,
      fullName: TEST_ADMIN_USER.name,
      username: null,
      primaryEmailAddress: { emailAddress: TEST_ADMIN_USER.email },
      imageUrl: '',
      createdAt: TEST_ADMIN_USER.createdAt,
      updatedAt: TEST_ADMIN_USER.updatedAt,
    },
  }),
  useOrganization: () => ({ organization: { name: 'Acme' }, membership: null }),
  SignUp: () => null,
  ClerkProvider: ({ children }: { children: ReactNode }) => children,
}))
