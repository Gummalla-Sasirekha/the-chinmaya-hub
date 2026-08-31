import { useEffect, useState } from 'react'
import type { Announcement, Faculty, School, TimetableEntry, UserRole } from './types'
import { getAnnouncements, getFaculty, getFacultyById, getSchools, getTimetable } from './data/repository'
import { getUserProfile, signIn } from './lib/firebase'
import LoginScreen from './components/LoginScreen'
import SchoolSelection from './components/SchoolSelection'
import Dashboard from './components/Dashboard'
import FacultyDirectory from './components/FacultyDirectory'
import Announcements from './components/Announcements'
import FacultyProfile from './components/FacultyProfile'
type View = 'login' | 'schools' | 'dashboard' | 'directory' | 'profile' | 'announcements'
export default function App() {
  const [view, setView] = useState<View>('login'); const [school, setSchool] = useState<School | null>(null); const [schools, setSchools] = useState<School[]>([]); const [faculty, setFaculty] = useState<Faculty[]>([]); const [announcements, setAnnouncements] = useState<Announcement[]>([]); const [activeFaculty, setActiveFaculty] = useState<Faculty | null>(null); const [timetable, setTimetable] = useState<TimetableEntry[]>([]); const [role, setRole] = useState<UserRole>('student'); const [facultyId, setFacultyId] = useState<string | undefined>()
  useEffect(() => { getSchools().then(setSchools) }, [])
  const select = async (s: School) => { setSchool(s); if (role === 'faculty' && facultyId) { const person = await getFacultyById(facultyId); if (person) { showProfile(person); return } } setView('dashboard') }
  const showProfile = (person: Faculty) => { setActiveFaculty(person); setView('profile'); getTimetable(person.id).then(setTimetable) }
  useEffect(() => { if (school) { getFaculty(school.id).then(setFaculty); getAnnouncements(school.id).then(setAnnouncements) } }, [school])
  if (view === 'login') return <LoginScreen onLogin={async (identifier, password, selectedRole) => { const user = await signIn(identifier, password); const profile = user ? await getUserProfile(user.uid) : null; if (profile && profile.role !== selectedRole) throw new Error(`This account is registered as ${profile.role}.`); setRole(profile?.role ?? selectedRole); setFacultyId(profile?.facultyId); setView('schools') }} />
  if (view === 'schools') return <SchoolSelection schools={schools} onSelect={select} />
  const selected = school ?? schools[0]; if (!selected) return null
  if (view === 'directory') return <FacultyDirectory school={selected} faculty={faculty} onBack={() => setView('dashboard')} onAnnouncements={() => setView('announcements')} onViewProfile={showProfile} />
  if (view === 'profile' && activeFaculty) return <FacultyProfile faculty={activeFaculty} timetable={timetable} onBack={() => setView('directory')} />
  if (view === 'announcements') return <Announcements school={selected} annnouncements={announcements} onBack={() => setView('dashboard')} />
  return <Dashboard school={selected} faculty={faculty} announcements={announcements} role={role} onDirectory={() => setView('directory')} onAnnnouncements={() => setView('announcements')} />
}
