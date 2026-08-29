import { initializeApp } from 'firebase/app'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Add VITE_FIREBASE_* values in a .env file when connecting a real Firebase project.
const config = { apiKey: import.meta.env.VITE_FIREBASE_API_KEY, authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN, projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID, appId: import.meta.env.VITE_FIREBASE_APP_ID }
const enabled = Boolean(config.apiKey && config.projectId)
export const db = enabled ? getFirestore(initializeApp(config)) : null
export const auth = enabled ? getAuth() : null

export async function signIn(identifier: string, password: string) {
  // Local sample mode intentionally allows navigation without a Firebase project.
  if (!auth) return
  await signInWithEmailAndPassword(auth, identifier, password)
}
