import { collection, getDocs, query, where } from 'firebase/firestore'
import { announcements as mockAnnouncements, faculty as mockFaculty, schools as mockSchools } from './mockData'
import { db } from '../lib/firebase'
import type { Announcement, Faculty, School } from '../types'

// Mock records keep the app useful before Firebase is configured. Once VITE_FIREBASE_*
// settings are present, these functions read the matching Firestore collections instead.
export async function getSchools(): Promise<School[]> {
  if (!db) return mockSchools
  try { return (await getDocs(collection(db, 'schools'))).docs.map(d => ({ id: d.id, ...d.data() } as School)) } catch { return mockSchools }
}
export async function getFaculty(schoolId: string): Promise<Faculty[]> {
  if (!db) return mockFaculty.filter(f => f.schoolId === schoolId)
  try { return (await getDocs(query(collection(db, 'faculty'), where('schoolId', '==', schoolId)))).docs.map(d => ({ id: d.id, ...d.data() } as Faculty)) } catch { return mockFaculty.filter(f => f.schoolId === schoolId) }
}
export async function getAnnouncements(schoolId: string): Promise<Announcement[]> {
  if (!db) return mockAnnouncements.filter(a => a.schoolId === schoolId)
  try { return (await getDocs(query(collection(db, 'announcements'), where('schoolId', '==', schoolId)))).docs.map(d => ({ id: d.id, ...d.data() } as Announcement)) } catch { return mockAnnouncements.filter(a => a.schoolId === schoolId) }
}
