import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import { announcements as mockAnnouncements, faculty as mockFaculty, schools as mockSchools, timetable as mockTimetable } from './mockData'
import { db } from '../lib/firebase'
import type { Announcement, Faculty, School, TimetableEntry } from '../types'

const normalizeFaculty = (id: string, data: Partial<Faculty>): Faculty => ({
  id,
  schoolId: data.schoolId ?? '',
  name: data.name ?? '',
  phone: data.phone ?? '',
  email: data.email ?? '',
  designation: data.designation ?? '',
  roomNo: data.roomNo ?? '',
  totalDutiesAllotted: data.totalDutiesAllotted ?? 0,
  dutiesDone: data.dutiesDone ?? 0,
  dutiesSwapped: data.dutiesSwapped ?? 0
})

// Mock records keep the app useful before Firebase is configured. Once VITE_FIREBASE_*
// settings are present, these functions read the matching Firestore collections instead.
export async function getSchools(): Promise<School[]> {
  if (!db) return mockSchools
  try { return (await getDocs(collection(db, 'schools'))).docs.map(d => ({ id: d.id, ...d.data() } as School)) } catch { return mockSchools }
}
export async function getFaculty(schoolId: string): Promise<Faculty[]> {
  if (!db) return mockFaculty.filter(f => f.schoolId === schoolId)
  try { return (await getDocs(query(collection(db, 'faculty'), where('schoolId', '==', schoolId)))).docs.map(d => normalizeFaculty(d.id, d.data() as Partial<Faculty>)) } catch { return mockFaculty.filter(f => f.schoolId === schoolId) }
}
export async function getFacultyById(facultyId: string): Promise<Faculty | null> {
  if (!db) return mockFaculty.find(faculty => faculty.id === facultyId) ?? null
  try { const snapshot = await getDoc(doc(db, 'faculty', facultyId)); return snapshot.exists() ? normalizeFaculty(snapshot.id, snapshot.data() as Partial<Faculty>) : null } catch { return mockFaculty.find(faculty => faculty.id === facultyId) ?? null }
}
export async function getTimetable(facultyId: string): Promise<TimetableEntry[]> {
  if (!db) return mockTimetable.filter(entry => entry.facultyId === facultyId)
  try { return (await getDocs(query(collection(db, 'timetable'), where('facultyId', '==', facultyId)))).docs.map(d => ({ id: d.id, ...d.data() } as TimetableEntry)) } catch { return mockTimetable.filter(entry => entry.facultyId === facultyId) }
}
export async function getAnnouncements(schoolId: string): Promise<Announcement[]> {
  if (!db) return mockAnnouncements.filter(a => a.schoolId === schoolId)
  try { return (await getDocs(query(collection(db, 'announcements'), where('schoolId', '==', schoolId)))).docs.map(d => ({ id: d.id, ...d.data() } as Announcement)) } catch { return mockAnnouncements.filter(a => a.schoolId === schoolId) }
}
