import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import {
  announcements as mockAnnouncements,
  faculty as mockFaculty,
  timetable as mockTimetable
} from './mockData'
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

// ============================================================
// SCHOOLS
// ============================================================

export async function getSchools(): Promise<School[]> {
  try {
    const response = await fetch(
      `${import.meta.env.BASE_URL}Schools.csv`
    )

    if (!response.ok) {
      throw new Error('Failed to load Schools.csv')
    }

    const text = await response.text()

    const rows = text
      .trim()
      .split(/\r?\n/)
      .slice(1)

    const schools: School[] = rows
      .map((row) => {
        const values =
          row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) ?? []

        const clean = values.map((value) =>
          value.replace(/^"|"$/g, '').trim()
        )

        return {
          id: clean[0] ?? '',
          name: clean[1] ?? ''
        }
      })
      .filter((school) => school.id && school.name)

    if (schools.length === 0) {
      throw new Error('No schools found in Schools.csv')
    }

    return schools
  } catch (error) {
    console.error('Could not load Schools.csv:', error)
    return []
  }
}

// ============================================================
// FACULTY
// ============================================================

export async function getFaculty(
  schoolId: string
): Promise<Faculty[]> {

  try {
    const response = await fetch(
      `${import.meta.env.BASE_URL}Faculty.csv`
    )

    if (!response.ok) {
      throw new Error('Failed to load Faculty.csv')
    }

    const text = await response.text()

    const rows = text
      .trim()
      .split(/\r?\n/)
      .slice(1)

    const faculty: Faculty[] = rows
      .map((row) => {
        const values =
          row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) ?? []

        const clean = values.map((value) =>
          value.replace(/^"|"$/g, '').trim()
        )

        return {
          id: clean[0] ?? '',
          name: clean[1] ?? '',
          schoolId: clean[2] ?? '',
          email: clean[3] ?? '',
          phone: clean[4] ?? '',
          designation: clean[5] ?? '',
          roomNo: clean[6] ?? '',
          totalDutiesAllotted: 0,
          dutiesDone: 0,
          dutiesSwapped: 0
        }
      })
      .filter(
        (faculty) =>
          faculty.id &&
          faculty.name &&
          faculty.schoolId
      )

    const schoolFaculty = faculty.filter(
      (faculty) => faculty.schoolId === schoolId
    )

    if (schoolFaculty.length === 0) {
      throw new Error(
        `No faculty found for school: ${schoolId}`
      )
    }

    return schoolFaculty

  } catch (error) {
    console.error('Could not load Faculty.csv:', error)

    return mockFaculty.filter(
      (faculty) => faculty.schoolId === schoolId
    )
  }
}

// ============================================================
// FACULTY BY ID
// ============================================================

export async function getFacultyById(
  facultyId: string
): Promise<Faculty | null> {

  try {
    const response = await fetch(
      `${import.meta.env.BASE_URL}Faculty.csv`
    )

    if (!response.ok) {
      throw new Error('Failed to load Faculty.csv')
    }

    const text = await response.text()

    const rows = text
      .trim()
      .split(/\r?\n/)
      .slice(1)

    const faculty = rows
      .map((row) => {
        const values =
          row.match(/(".*?"|[^",]+)(?=\s*,|\s*$)/g) ?? []

        const clean = values.map((value) =>
          value.replace(/^"|"$/g, '').trim()
        )

        return {
          id: clean[0] ?? '',
          name: clean[1] ?? '',
          schoolId: clean[2] ?? '',
          email: clean[3] ?? '',
          phone: clean[4] ?? '',
          designation: clean[5] ?? '',
          roomNo: clean[6] ?? '',
          totalDutiesAllotted: 0,
          dutiesDone: 0,
          dutiesSwapped: 0
        } as Faculty
      })

    return (
      faculty.find(
        (person) => person.id === facultyId
      ) ?? null
    )

  } catch (error) {
    console.error('Could not load Faculty.csv:', error)

    return (
      mockFaculty.find(
        (faculty) => faculty.id === facultyId
      ) ?? null
    )
  }
}

// ============================================================
// TIMETABLE
// ============================================================

export async function getTimetable(
  facultyId: string
): Promise<TimetableEntry[]> {

  if (!db) {
    return mockTimetable.filter(
      (entry) => entry.facultyId === facultyId
    )
  }

  try {
    const snapshot = await getDocs(
      query(
        collection(db, 'timetable'),
        where('facultyId', '==', facultyId)
      )
    )

    return snapshot.docs.map((d) => ({
      id: d.id,
      ...d.data()
    } as TimetableEntry))

  } catch {
    return mockTimetable.filter(
      (entry) => entry.facultyId === facultyId
    )
  }
}

// ============================================================
// ANNOUNCEMENTS
// ============================================================

export async function getAnnouncements(
  schoolId: string
): Promise<Announcement[]> {

  if (!db) {
    return mockAnnouncements.filter(
      (announcement) =>
        announcement.schoolId === schoolId
    )
  }

  try {
    const snapshot = await getDocs(
      query(
        collection(db, 'announcements'),
        where('schoolId', '==', schoolId)
      )
    )

    return snapshot.docs.map((d) => ({
      id: d.id,
      ...d.data()
    } as Announcement))

  } catch {
    return mockAnnouncements.filter(
      (announcement) =>
        announcement.schoolId === schoolId
    )
  }
}
