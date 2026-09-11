import { useMemo, useState } from 'react'
import type { Faculty, School } from '../types'
import FacultyCard from './FacultyCard'

type Props = {
  school: School
  faculty: Faculty[]
  onBack: () => void
  onAnnouncements: () => void
  onViewProfile: (faculty: Faculty) => void
}

export default function FacultyDirectory({
  school,
  faculty,
  onBack,
  onAnnouncements,
  onViewProfile,
}: Props) {
  const [query, setQuery] = useState('')

  const matched = useMemo(
    () =>
      faculty.filter((person) =>
        `${person.name} ${person.designation} ${school.name}`
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [faculty, query, school.name],
  )

  return (
    <main className="min-h-screen bg-[#F7F5F0] px-5 pb-10 pt-6 text-[#14213D] sm:px-6">

      {/* ==================== HEADER ==================== */}

      <header className="mx-auto max-w-2xl">

        <div className="flex items-center justify-between">

          {/* Back */}
          <button
            onClick={onBack}
            aria-label="Go back"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#14213D] shadow-sm transition hover:border-[#C9A24D] active:scale-95"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-5 w-5"
            >
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
          </button>


          {/* Title */}
          <div className="text-center">

            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C9A24D]">
              Directory
            </p>

            <h1 className="mt-0.5 text-base font-bold text-[#14213D]">
              Faculty
            </h1>

          </div>


          {/* Announcements */}
          <button
            onClick={onAnnouncements}
            aria-label="Open announcements"
            className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#14213D] shadow-sm transition hover:border-[#C9A24D] active:scale-95"
          >

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

            {announcementsIndicator()}

          </button>

        </div>

      </header>


      {/* ==================== PAGE INTRO ==================== */}

      <section className="mx-auto mt-7 max-w-2xl">

        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A24D]">
          Your School
        </p>

        <h2 className="mt-1 text-2xl font-bold tracking-tight text-[#14213D]">
          Faculty Directory
        </h2>

        <p className="mt-2 text-sm leading-relaxed text-slate-500">
          Find faculty members and their contact details.
        </p>

        <p className="mt-2 truncate text-xs font-medium text-slate-400">
          {school.name}
        </p>

      </section>


      {/* ==================== SEARCH ==================== */}

      <section className="mx-auto mt-5 max-w-2xl">

        <div className="flex h-13 items-center rounded-2xl border border-slate-200 bg-white px-4 shadow-[0_2px_10px_rgba(20,33,61,0.04)] transition focus-within:border-[#C9A24D] focus-within:ring-2 focus-within:ring-[#C9A24D]/10">

          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="mr-3 h-5 w-5 shrink-0 text-slate-400"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
          </svg>

          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            className="w-full bg-transparent text-sm text-[#14213D] outline-none placeholder:text-slate-400"
            placeholder="Search by name or designation"
          />

          {query && (
            <button
              onClick={() => setQuery('')}
              aria-label="Clear search"
              className="ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500"
            >
              ×
            </button>
          )}

        </div>

      </section>


      {/* ==================== RESULT COUNT ==================== */}

      <section className="mx-auto mt-6 max-w-2xl">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-sm font-bold text-[#14213D]">
              {matched.length} faculty members
            </p>

            {query && (
              <p className="mt-0.5 text-[11px] text-slate-400">
                Results for "{query}"
              </p>
            )}
          </div>

          <div className="h-1.5 w-8 rounded-full bg-[#C9A24D]" />

        </div>

      </section>


      {/* ==================== FACULTY LIST ==================== */}

      <section className="mx-auto mt-3 max-w-2xl space-y-3">

        {matched.map((person) => (
          <FacultyCard
            key={person.id}
            faculty={person}
            onViewProfile={() => onViewProfile(person)}
          />
        ))}


        {/* Empty state */}
        {!matched.length && (

          <div className="rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center shadow-sm">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#14213D] text-[#C9A24D]">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>

            </div>

            <h3 className="mt-4 text-sm font-bold text-[#14213D]">
              No faculty found
            </h3>

            <p className="mt-1 text-xs text-slate-400">
              Try searching with a different name or designation.
            </p>

          </div>

        )}

      </section>


      {/* ==================== FOOTER ==================== */}

      <footer className="mx-auto mt-10 max-w-2xl border-t border-slate-200 pt-5 text-center">

        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C9A24D]">
          CVV Academic Pulse
        </p>

      </footer>

    </main>
  )
}


/*
 * Small notification indicator.
 * Kept separate so the header stays clean.
 */
function announcementsIndicator() {
  return (
    <span
      aria-hidden="true"
      className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-[#C9A24D]"
    />
  )
}