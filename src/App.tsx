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

type View =
  | 'login'
  | 'schools'
  | 'dashboard'
  | 'directory'
  | 'profile'
  | 'announcements'
  | 'admin'

export default function App() {
  const [view, setView] = useState<View>('login')
  const navigate = (nextView: View) => {
  window.history.pushState({ view: nextView }, '', window.location.href)
  setView(nextView)
}
  useEffect(() => {
  window.history.replaceState(
    { view: 'login' },
    '',
    window.location.href
  )

  const handlePopState = (event: PopStateEvent) => {
    const previousView = event.state?.view ?? 'login'
    setView(previousView)
  }

  window.addEventListener('popstate', handlePopState)

  return () => {
    window.removeEventListener('popstate', handlePopState)
  }
}, [])
  const [school, setSchool] = useState<School | null>(null)
  const [schools, setSchools] = useState<School[]>([])
  const [faculty, setFaculty] = useState<Faculty[]>([])
  const [announcements, setAnnouncements] = useState<Announcement[]>([])
  const [activeFaculty, setActiveFaculty] = useState<Faculty | null>(null)
  const [timetable, setTimetable] = useState<TimetableEntry[]>([])
  const [role, setRole] = useState<UserRole>('student')
  const [facultyId, setFacultyId] = useState<string | undefined>()

  useEffect(() => {
    getSchools().then(setSchools)
  }, [])

  const select = async (selectedSchool: School) => {
    setSchool(selectedSchool)

    if (role === 'faculty' && facultyId) {
      const person = await getFacultyById(facultyId)

      if (person) {
        showProfile(person)
        return
      }
    }

    navigate('dashboard')
  }

  const showProfile = (person: Faculty) => {
    setActiveFaculty(person)
    navigate('profile')
    getTimetable(person.id).then(setTimetable)
  }

  useEffect(() => {
    if (school) {
      getFaculty(school.id).then(setFaculty)
      getAnnouncements(school.id).then(setAnnouncements)
    }
  }, [school])

if (view === 'login') {
  return (
    <LoginScreen
      onLogin={async (identifier, password, selectedRole) => {
        const email = identifier.trim().toLowerCase()

        // Student demo login
        if (
          selectedRole === 'student' &&
          email === 'student@cvv.ac.in' &&
          password === 'student123'
        ) {
          setRole('student')
          setFacultyId(undefined)
          setSchool(null)
          navigate('schools')
          return
        }

        // Faculty demo login
        if (
          selectedRole === 'faculty' &&
          email === 'faculty@cvv.ac.in' &&
          password === 'faculty123'
        ) {
          setRole('faculty')
          setFacultyId('f1')
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

  if (view === 'schools') {
  return (
    <SchoolSelection
      schools={schools}
      onSelect={select}
      onBack={() => navigate('login')}
    />
  )
}
  

  const selected = school ?? schools[0]

  if (!selected) {
    return null
  }

  if (view === 'directory') {
    return (
      <FacultyDirectory
        school={selected}
        faculty={faculty}
        onBack={() => navigate('dashboard')}
        onAnnouncements={() => navigate('announcements')}
        onViewProfile={showProfile}
      />
    )
  }

  if (view === 'profile' && activeFaculty) {
    return (
      <FacultyProfile
        faculty={activeFaculty}
        timetable={timetable}
        onBack={() => navigate('directory')}
      />
    )
  }

  if (view === 'announcements') {
    return (
      <Announcements
        school={selected}
        announcements={announcements}
        onBack={() => navigate('dashboard')}
      />
    )
  }

  return (
    <Dashboard
      school={selected}
      faculty={faculty}
      announcements={announcements}
      role={role}
      onDirectory={() => navigate('directory')}
      onAnnouncements={() => navigate('announcements')}
    />
  )
}
