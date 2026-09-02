import type { UserProfile } from '../types'

// Firebase is intentionally disabled for now.
// The application currently runs completely in local/demo mode.

export const db = null
export const auth = null

export async function signIn(
  identifier: string,
  password: string
): Promise<null> {
  // Firebase login is disabled for now.
  // App.tsx handles the local demo login.
  return null
}

export async function getUserProfile(
  _uid: string
): Promise<UserProfile | null> {
  return null
}
