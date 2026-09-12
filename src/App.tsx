import { useEffect, useState } from 'react'

import type {
  Announcement,
  Faculty,
  School,
  TimetableEntry,
  UserRole,
} from './types'

import {
  getAnnouncements,
  getFaculty,
  getFacultyById,
  getSchools,
  getTimetable,
} from './data/repository'

import LoginScreen from './components/LoginScreen'
import SchoolSelection from './components/SchoolSelection'
import Dashboard from './components/Dashboard'
import FacultyDirectory from './components/FacultyDirectory'
import Announcements from './components/Announcements'
import FacultyProfile from './components/FacultyProfile'
import Timetable from './components/Timetable'

type View =
  | 'login'
  | 'schools'
  | 'dashboard'
  | 'directory'
  | 'profile'
  | 'announcements'
  | 'timetable'
  | 'admin'

export default function App() {
  const [view, setView] =
    useState<View>('login')

  const navigate = (nextView: View) => {
    window.history.pushState(
      { view: nextView },
      '',
      window.location.href
    )

    setView(nextView)
  }

  useEffect(() => {
    window.history.replaceState(
      { view: 'login' },
      '',
      window.location.href
    )

    const handlePopState = (
      event: PopStateEvent
    ) => {
      const previousView =
        event.state?.view ?? 'login'

      setView(previousView)
    }

    window.addEventListener(
      'popstate',
      handlePopState
    )

    return () => {
      window.removeEventListener(
        'popstate',
        handlePopState
      )
    }
  }, [])

  const [school, setSchool] =
    useState<School | null>(null)

  const [schools, setSchools] =
    useState<School[]>([])

  const [faculty, setFaculty] =
    useState<Faculty[]>([])

  const [announcements, setAnnouncements] =
    useState<Announcement[]>([])

  const [activeFaculty, setActiveFaculty] =
    useState<Faculty | null>(null)

  const [timetable, setTimetable] =
    useState<TimetableEntry[]>([])

  const [role, setRole] =
    useState<UserRole>('student')

  const [facultyId, setFacultyId] =
    useState<string | undefined>()

  /* =========================
     LOAD SCHOOLS
  ========================= */

  useEffect(() => {
    getSchools().then(setSchools)
  }, [])

  /* =========================
     SCHOOL SELECTION
  ========================= */

  const select = async (
    selectedSchool: School
  ) => {
    setSchool(selectedSchool)

    /*
     * Faculty users go directly
     * to their own profile.
     */

    if (
      role === 'faculty' &&
      facultyId
    ) {
      const person =
        await getFacultyById(facultyId)

      if (person) {
        showProfile(person)
        return
      }
    }

    navigate('dashboard')
  }

  /* =========================
     SHOW FACULTY PROFILE
  ========================= */

  const showProfile = (
    person: Faculty
  ) => {
    setActiveFaculty(person)

    navigate('profile')

    getTimetable(person.id)
      .then(setTimetable)
  }

  /* =========================
     LOAD SCHOOL DATA
  ========================= */

  useEffect(() => {
    if (school) {
      getFaculty(school.id)
        .then(setFaculty)

      getAnnouncements(school.id)
        .then(setAnnouncements)
    }
  }, [school])

  /* =========================
     LOGIN
  ========================= */

  if (view === 'login') {
    return (
      <LoginScreen
        onLogin={async (
          identifier,
          password,
          selectedRole
        ) => {
          const email =
            identifier
              .trim()
              .toLowerCase()

          /* =====================
             STUDENT DEMO LOGIN
          ===================== */

          if (
            selectedRole === 'student' &&
            email ===
              'student@cvv.ac.in' &&
            password === 'student123'
          ) {
            setRole('student')
            setFacultyId(undefined)
            setSchool(null)

            navigate('schools')

            return
          }

          /* =====================
             FACULTY DEMO LOGIN
          ===================== */

          if (
            selectedRole === 'faculty' &&
            email ===
              'pradeeba.v@cvv.ac.in' &&
            password === 'pradeeba123'
          ) {
            setRole('faculty')

            setFacultyId('f5')

            setSchool(null)

            navigate('schools')

            return
          }

          throw new Error(
            'Invalid email or password. Please check your login details.'
          )
        }}
      />
    )
  }

  /* =========================
     SCHOOL SELECTION
  ========================= */

  if (view === 'schools') {
    return (
      <SchoolSelection
        schools={schools}
        onSelect={select}
        onBack={() =>
          navigate('login')
        }
      />
    )
  }

  const selected =
    school ?? schools[0]

  if (!selected) {
    return null
  }

  /* =========================
     FACULTY DIRECTORY
  ========================= */

  if (view === 'directory') {
    return (
      <FacultyDirectory
        school={selected}
        faculty={faculty}
        onBack={() =>
          navigate('dashboard')
        }
        onAnnouncements={() =>
          navigate('announcements')
        }
        onViewProfile={showProfile}
      />
    )
  }

  /* =========================
     FACULTY PROFILE
  ========================= */

  if (
    view === 'profile' &&
    activeFaculty
  ) {
    return (
      <FacultyProfile
        faculty={activeFaculty}
        timetable={timetable}
        role={role}
        onBack={() =>
          navigate('directory')
        }
      />
    )
  }

  /* =========================
     ANNOUNCEMENTS
  ========================= */

  if (
    view === 'announcements'
  ) {
    return (
      <Announcements
        school={selected}
        announcements={
          announcements
        }
        onBack={() =>
          navigate('dashboard')
        }
      />
    )
  }

  /* =========================
     TIMETABLE
  ========================= */

  if (view === 'timetable') {
    return (
      <Timetable
        school={selected}
        onBack={() =>
          navigate('dashboard')
        }
      />
    )
  }

  /* =========================
     DASHBOARD
  ========================= */

  return (
    <Dashboard
      school={selected}
      faculty={faculty}
      announcements={
        announcements
      }
      role={role}
      onDirectory={() =>
        navigate('directory')
      }
      onAnnouncements={() =>
        navigate('announcements')
      }
      onChangeSchool={() => {
        setSchool(null)
        setActiveFaculty(null)

        navigate('schools')
      }}
      onLogout={() => {
        setSchool(null)
        setActiveFaculty(null)
        setFacultyId(undefined)
        setRole('student')

        window.history.replaceState(
          { view: 'login' },
          '',
          window.location.href
        )

        setView('login')
      }}
      onTimetable={() =>
        navigate('timetable')
      }
    />
  )
}
