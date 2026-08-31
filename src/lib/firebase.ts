import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, getDoc, getFirestore } from 'firebase/firestore'
import type { User } from 'firebase/auth'
import type { UserProfile } from '../types'

// Add VITE_FIREBASE_* values in a .env file when connecting a real Firebase project.
const config = { apiKey: import.meta.env.VITE_FIREBASE_API_KEY, authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN, projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID, appId: import.meta.env.VITE_FIREBASE_APP_ID }
const enabled = Boolean(config.apiKey && config.projectId)
export const db = enabled ? getFirestore(initializeApp(config)) : null
export const auth = enabled ? getAuth() : null

export async function signIn(identifier: string, password: string): Promise<User | null> {
  // Local sample mode intentionally allows navigation without a Firebase project.
  if (!auth) return null
  return (await signInWithEmailAndPassword(auth, identifier, password)).user
}

// Production users need a Firestore document at users/{uid}:
// { role: 'admin' | 'faculty' | 'student', facultyId?: '<faculty document id>' }.
export async function getUserProfile(uid: string): Promise<UserProfile | null> {
  if (!db) return null
  const snapshot = await getDoc(doc(db, 'users', uid))
  if (!snapshot.exists()) return null
  const data = snapshot.data() as Partial<UserProfile>
  if (data.role !== 'admin' && data.role !== 'faculty' && data.role !== 'student') return null
  return { role: data.role, facultyId: data.facultyId }
}
