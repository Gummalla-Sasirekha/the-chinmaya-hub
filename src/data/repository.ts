import { collection, doc, getDoc, getDocs, query, where } from 'firebase/firestore'
import {
  announcements as mockAnnouncements,
  timetable as mockTimetable
} from './mockData'
import { db } from '../lib/firebase'
import type { Announcement, Faculty, School, TimetableEntry } from '../types'

const parseCsvRow = (row: string): string[] => {
  const values: string[] = []
  let current = ''
  let insideQuotes = false

  for (let i = 0; i < row.length; i++) {
    const char = row[i]

    if (char === '"') {
      if (insideQuotes && row[i + 1] === '"') {
        current += '"'
        i++
      } else {
        insideQuotes = !insideQuotes
      }
    } else if (char === ',' && !insideQuotes) {
      values.push(current.trim())
      current = ''
    } else {
      current += char
    }
  }

  values.push(current.trim())

  return values
}

const normalizeFaculty = (
  id: string,
  data: Partial<Faculty>
): Faculty => ({
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
        const values = parseCsvRow(row)

        return {
          id: values[0] ?? '',
          name: values[1] ?? ''
        }
      })
      .filter(
        (school) =>
          school.id.length > 0 &&
          school.name.length > 0
      )

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
        const values = parseCsvRow(row)

        return {
          id: values[0] ?? '',
          name: values[1] ?? '',
          schoolId: values[2] ?? '',
          email: values[3] ?? '',
          phone: values[4] ?? '',
          designation: values[5] ?? '',
          roomNo: values[6] ?? '',
          totalDutiesAllotted: 0,
          dutiesDone: 0,
          dutiesSwapped: 0
        }
      })
      .filter(
        (faculty) =>
          faculty.id.length > 0 &&
          faculty.name.length > 0 &&
          faculty.schoolId.length > 0
      )

    return faculty.filter(
      (faculty) => faculty.schoolId === schoolId
    )
  } catch (error) {
    console.error('Could not load Faculty.csv:', error)

    return []
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

    const faculty = rows.map((row) => {
      const values = parseCsvRow(row)

      return {
        id: values[0] ?? '',
        name: values[1] ?? '',
        schoolId: values[2] ?? '',
        email: values[3] ?? '',
        phone: values[4] ?? '',
        designation: values[5] ?? '',
        roomNo: values[6] ?? '',
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

    return null
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
