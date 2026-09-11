import type {
  Announcement,
  Faculty,
  School,
  UserRole,
} from '../types'

import ExamDutyNotification from './ExamDutyNotification'

type Props = {
  school: School
  faculty: Faculty[]
  announcements: Announcement[]
  role: UserRole
  onDirectory: () => void
  onAnnouncements: () => void
  onTimetable: () => void
  onChangeSchool: () => void
  onLogout: () => void
}

export default function Dashboard({
  school,
  faculty,
  announcements,
  role,
  onDirectory,
  onAnnouncements,
  onTimetable,
  onChangeSchool,
  onLogout,
}: Props) {
  return (
    <main className="min-h-screen bg-[#F7F5F0] px-5 pb-10 pt-7 text-[#14213D] sm:px-6">

      {/* ==================== HEADER ==================== */}
      <header className="mx-auto flex max-w-2xl items-start justify-between gap-3">

        <div className="min-w-0">
          <p className="text-sm text-slate-500">
            Good morning,
          </p>

          <div className="mt-1 flex flex-wrap items-center gap-2">
            <h1 className="text-2xl font-bold tracking-tight text-[#14213D]">
              CVV Family
            </h1>

            <span className="rounded-full bg-[#14213D] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-[#C9A24D]">
              {role}
            </span>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2">

          <button
            onClick={onChangeSchool}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-[11px] font-semibold text-[#14213D] shadow-sm transition-all duration-200 hover:border-[#C9A24D] hover:shadow-md active:scale-95"
          >
            Change School
          </button>

          <button
            onClick={onLogout}
            className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-[11px] font-semibold text-slate-600 shadow-sm transition-all duration-200 hover:border-[#C9A24D] hover:text-[#14213D] hover:shadow-md active:scale-95"
          >
            Logout
          </button>

        </div>
      </header>


      {/* ==================== SCHOOL CARD ==================== */}
      <section className="mx-auto mt-7 max-w-2xl">

        <div className="relative overflow-hidden rounded-3xl bg-[#14213D] px-5 py-5 shadow-lg sm:p-6">

          {/* Gold side accent */}
          <div className="absolute right-0 top-0 h-full w-1 bg-[#C9A24D]" />

          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#C9A24D]">
            Your school
          </p>

          <h2 className="mt-3 max-w-lg text-[22px] font-bold leading-[1.25] text-white sm:text-2xl">
            {school.name}
          </h2>

          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-300">
            Faculty, announcements and academic information
          </p>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1.5">

            <span className="h-1.5 w-1.5 rounded-full bg-[#C9A24D]" />

            <span className="text-[10px] font-medium text-slate-200">
              Academic Space
            </span>

          </div>

        </div>
      </section>

      {role === 'faculty' && (
        <ExamDutyNotification
          faculty={faculty.find((person) => person.id === 'f5') ?? null}
        />
      )}


      {/* ==================== QUICK ACCESS ==================== */}
      <section className="mx-auto mt-8 max-w-2xl">

        <div className="flex items-end justify-between">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A24D]">
              Navigate
            </p>

            <h2 className="mt-1 text-xl font-bold text-[#14213D]">
              Quick Access
            </h2>
          </div>

        </div>


        <div className="mt-4 grid grid-cols-2 gap-3">

          {/* -------- FACULTY DIRECTORY -------- */}
          <button
            onClick={onDirectory}
            className="group min-h-[142px] rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-[0_2px_10px_rgba(20,33,61,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C9A24D] hover:shadow-md active:scale-[.98]"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#14213D] text-[#C9A24D]">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>

            </div>

            <h3 className="mt-5 text-sm font-bold text-[#14213D]">
              Faculty Directory
            </h3>

            <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
              Find faculty & contact details
            </p>

          </button>


          {/* -------- ANNOUNCEMENTS -------- */}
          <button
            onClick={onAnnouncements}
            className="group min-h-[142px] rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-[0_2px_10px_rgba(20,33,61,0.04)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#C9A24D] hover:shadow-md active:scale-[.98]"
          >

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#14213D] text-[#C9A24D]">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                <path d="M10 21h4" />
              </svg>

            </div>

            <h3 className="mt-5 text-sm font-bold text-[#14213D]">
              Announcements
            </h3>

            <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
              Latest school updates
            </p>

          </button>


          {/* -------- TIMETABLE -------- */}
          <button
            onClick={onTimetable}
            className="group col-span-2 flex min-h-[102px] items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-[0_2px_10px_rgba(20,33,61,0.04)] transition-all duration-200 hover:border-[#C9A24D] hover:shadow-md active:scale-[.98]"
          >

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#14213D] text-[#C9A24D]">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
                <path d="M8 14h2M14 14h2M8 18h2M14 18h2" />
              </svg>

            </div>

            <div className="min-w-0 flex-1">

              <h3 className="text-sm font-bold text-[#14213D]">
                Timetable
              </h3>

              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                View your year and course timetable
              </p>

            </div>

            <span className="text-xl font-light text-[#C9A24D] transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>

          </button>

        </div>
      </section>


      {/* ==================== RECENT ACTIVITY ==================== */}
      <section className="mx-auto mt-8 max-w-2xl">

        <div className="flex items-end justify-between">

          <div>

            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A24D]">
              Updates
            </p>

            <h2 className="mt-1 text-xl font-bold text-[#14213D]">
              Recent Activity
            </h2>

          </div>

          <button
            onClick={onAnnouncements}
            className="text-xs font-semibold text-[#14213D] transition-colors hover:text-[#C9A24D]"
          >
            View all
          </button>

        </div>


        <div className="mt-4 space-y-3">

          {announcements.slice(0, 3).map((announcement) => (

            <button
              key={announcement.id}
              onClick={onAnnouncements}
              className="group flex w-full items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-[0_2px_10px_rgba(20,33,61,0.04)] transition-all duration-200 hover:border-[#C9A24D] hover:shadow-md active:scale-[.99]"
            >

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#14213D] text-[#C9A24D]">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4"
                >
                  <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
                  <path d="M10 21h4" />
                </svg>

              </div>


              <div className="min-w-0 flex-1">

                <p className="truncate text-sm font-semibold text-[#14213D]">
                  {announcement.title}
                </p>

                <p className="mt-1 text-[11px] text-slate-400">
                  School announcement
                </p>

              </div>


              <span className="text-lg text-[#C9A24D] transition-transform duration-200 group-hover:translate-x-1">
                →
              </span>

            </button>

          ))}


          {/* No announcements */}
          {announcements.length === 0 && (

            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-[0_2px_10px_rgba(20,33,61,0.04)]">

              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#14213D] text-[#C9A24D]">
                —
              </div>

              <p className="mt-3 text-sm font-medium text-[#14213D]">
                No recent announcements
              </p>

              <p className="mt-1 text-xs text-slate-400">
                New school updates will appear here.
              </p>

            </div>

          )}

        </div>
      </section>


      {/* ==================== STATISTICS ==================== */}
      <section className="mx-auto mt-8 max-w-2xl">

        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A24D]">
          Overview
        </p>

        <h2 className="mt-1 text-xl font-bold text-[#14213D]">
          Statistics
        </h2>


        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">

          {/* Faculty */}
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 shadow-[0_2px_10px_rgba(20,33,61,0.04)]">

            <p className="text-[23px] font-bold tracking-tight text-[#14213D]">
              {faculty.length}
            </p>

            <p className="mt-1 text-xs font-medium text-slate-500">
              Faculty
            </p>

            <div className="mt-3 h-1 w-8 rounded-full bg-[#C9A24D]" />

          </div>


          {/* Alerts */}
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 shadow-[0_2px_10px_rgba(20,33,61,0.04)]">

            <p className="text-[23px] font-bold tracking-tight text-[#14213D]">
              {announcements.length}
            </p>

            <p className="mt-1 text-xs font-medium text-slate-500">
              Alerts
            </p>

            <div className="mt-3 h-1 w-8 rounded-full bg-[#C9A24D]" />

          </div>


          {/* Duties */}
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 shadow-[0_2px_10px_rgba(20,33,61,0.04)]">

            <p className="text-[23px] font-bold tracking-tight text-[#14213D]">
              —
            </p>

            <p className="mt-1 text-xs font-medium text-slate-500">
              Duties
            </p>

            <div className="mt-3 h-1 w-8 rounded-full bg-[#C9A24D]" />

          </div>


          {/* Evaluation */}
          <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 shadow-[0_2px_10px_rgba(20,33,61,0.04)]">

            <p className="text-[23px] font-bold tracking-tight text-[#14213D]">
              —
            </p>

            <p className="mt-1 text-xs font-medium text-slate-500">
              Evaluation
            </p>

            <div className="mt-3 h-1 w-8 rounded-full bg-[#C9A24D]" />

          </div>

        </div>
      </section>


      {/* ==================== FOOTER ==================== */}
      <footer className="mx-auto mt-10 max-w-2xl border-t border-slate-200 pt-5 text-center">

        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C9A24D]">
          CVV Academic Pulse
        </p>

        <p className="mt-1 text-[10px] text-slate-400">
          Academic information, connected.
        </p>

      </footer>

    </main>
  )
}