// User types
export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  createdAt: Date
  updatedAt: Date
}

export type UserRole = 'admin' | 'community_member' | 'moderator'

// Community types
export interface Community {
  id: string
  name: string
  description: string
  icon?: string
  createdAt: Date
  updatedAt: Date
}

// Thread types
export interface Thread {
  id: string
  title: string
  content: string
  authorId: string
  communityId: string
  createdAt: Date
  updatedAt: Date
  pinned: boolean
}

// Reply types
export interface Reply {
  id: string
  content: string
  authorId: string
  threadId: string
  createdAt: Date
  updatedAt: Date
}

// Moderation types
export interface ModerationLog {
  id: string
  action: ModerationAction
  targetId: string
  targetType: 'thread' | 'reply' | 'community' | 'user'
  moderatorId: string
  reason: string
  createdAt: Date
}

export type ModerationAction = 'delete' | 'warn' | 'suspend' | 'restore'
