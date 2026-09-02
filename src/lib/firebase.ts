import type { UserProfile } from '../types'

// Firebase is disabled for now.
// The application currently runs in local/demo mode.

export const db = null
export const auth = null

export async function signIn(
  _identifier: string,
  _password: string
): Promise<null> {
  return null
}

export async function getUserProfile(
  _uid: string
): Promise<UserProfile | null> {
  return null
}