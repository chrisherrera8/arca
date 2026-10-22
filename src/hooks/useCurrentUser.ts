import { useUser, useOrganization } from '@clerk/react'
import type { User, UserRole } from '@/types'

const ROLES: UserRole[] = ['admin', 'manager', 'member']

function toUserRole(clerkRole: string | undefined): UserRole {
  const role = clerkRole?.replace('org:', '') as UserRole
  return ROLES.includes(role) ? role : 'member'
}

export function useCurrentUser(): { currentUser: User | null; isLoaded: boolean } {
  const { user, isLoaded } = useUser()
  const { membership } = useOrganization()

  if (!isLoaded || !user) return { currentUser: null, isLoaded }

  return {
    isLoaded,
    currentUser: {
      id: user.id,
      name: user.fullName ?? user.username ?? user.primaryEmailAddress?.emailAddress ?? 'Unknown',
      email: user.primaryEmailAddress?.emailAddress ?? '',
      role: toUserRole(membership?.role),
      avatar: user.imageUrl,
      createdAt: user.createdAt ?? new Date(),
      updatedAt: user.updatedAt ?? new Date(),
    },
  }
}
