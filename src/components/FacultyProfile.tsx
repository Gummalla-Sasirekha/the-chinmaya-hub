import { useMemo, useState } from 'react'
import type { Faculty, TimetableEntry } from '../types'

type Props = {
  faculty: Faculty
  timetable: TimetableEntry[]
  onBack: () => void
}

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function FacultyProfile({
  faculty,
  timetable,
  onBack,
}: Props) {
  const initials = faculty.name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const [timetableView, setTimetableView] = useState<'today' | 'week'>(
    'today',
  )

  const ordered = [...timetable].sort(
    (a, b) =>
      days.indexOf(a.day) - days.indexOf(b.day) ||
      a.startTime.localeCompare(b.startTime),
  )

  const today = useMemo(
    () =>
      new Intl.DateTimeFormat('en-US', {
        weekday: 'short',
      }).format(new Date()),
    [],
  )

  const todayEntries = ordered.filter((entry) => entry.day === today)

  const visible =
    timetableView === 'today'
      ? todayEntries
      : ordered

  return (
    <main className="min-h-screen bg-[#F7F5F0] px-5 pb-10 pt-6 text-[#14213D] sm:px-6">

      {/* ==================== HEADER ==================== */}

      <header className="mx-auto flex max-w-2xl items-center gap-4">

        <button
          onClick={onBack}
          aria-label="Back to faculty directory"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#14213D] shadow-sm transition-all duration-200 hover:border-[#C9A24D] active:scale-95"
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

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A24D]">
            Faculty
          </p>

          <h1 className="mt-0.5 text-lg font-bold text-[#14213D]">
            Faculty Profile
          </h1>
        </div>

      </header>


      {/* ==================== PROFILE CARD ==================== */}

      <section className="mx-auto mt-7 max-w-2xl">

        <div className="relative overflow-hidden rounded-3xl bg-[#14213D] p-5 shadow-lg">

          {/* Gold accent */}
          <div className="absolute right-0 top-0 h-full w-1 bg-[#C9A24D]" />

          <div className="flex items-center gap-4">

            {/* Initials */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-lg font-bold tracking-wide text-[#C9A24D] ring-1 ring-white/10">
              {initials}
            </div>

            {/* Faculty information */}
            <div className="min-w-0">

              <h2 className="text-xl font-bold text-white">
                {faculty.name}
              </h2>

              <p className="mt-1 text-sm leading-relaxed text-slate-300">
                {faculty.designation}
              </p>

              <div className="mt-2 flex items-center gap-1.5">

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-4 w-4 text-[#C9A24D]"
                >
                  <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>

                <span className="text-xs text-slate-300">
                  Room {faculty.roomNo}
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ==================== DUTY TRACKING ==================== */}

      <section className="mx-auto mt-8 max-w-2xl">

        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A24D]">
            Overview
          </p>

          <h2 className="mt-1 text-xl font-bold text-[#14213D]">
            Duty Tracking
          </h2>
        </div>


        <div className="mt-4 grid grid-cols-3 gap-3">

          <Stat
            label="Allotted"
            value={faculty.totalDutiesAllotted}
          />

          <Stat
            label="Done"
            value={faculty.dutiesDone}
          />

          <Stat
            label="Swapped"
            value={faculty.dutiesSwapped}
          />

        </div>

      </section>


      {/* ==================== TIMETABLE ==================== */}

      <section className="mx-auto mt-8 max-w-2xl">

        <div className="flex items-end justify-between gap-3">

          <div className="min-w-0">

            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A24D]">
              Academic Schedule
            </p>

            <h2 className="mt-1 text-xl font-bold text-[#14213D]">
              Timetable
            </h2>

            <p className="mt-1 text-xs text-slate-500">
              {timetableView === 'today'
                ? `Today · ${today}`
                : `${ordered.length} weekly classes`}
            </p>

          </div>


          {/* Toggle */}
          <div className="flex shrink-0 rounded-xl border border-slate-200 bg-white p-1 shadow-sm">

            <button
              onClick={() => setTimetableView('today')}
              className={`h-8 rounded-lg px-3 text-[11px] font-bold transition ${
                timetableView === 'today'
                  ? 'bg-[#14213D] text-white shadow-sm'
                  : 'text-slate-500'
              }`}
            >
              Today
            </button>

            <button
              onClick={() => setTimetableView('week')}
              className={`h-8 rounded-lg px-3 text-[11px] font-bold transition ${
                timetableView === 'week'
                  ? 'bg-[#14213D] text-white shadow-sm'
                  : 'text-slate-500'
              }`}
            >
              Weekly
            </button>

          </div>

        </div>


        {/* ==================== TODAY VIEW ==================== */}

        {timetableView === 'today' && (

          <div className="mt-4 space-y-3">

            {visible.map((entry) => (

              <article
                key={entry.id}
                className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_2px_10px_rgba(20,33,61,0.04)] transition hover:border-[#C9A24D]"
              >

                <div className="flex items-start gap-3">

                  {/* Gold timeline marker */}
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#F7F5F0] text-[#C9A24D]">

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>

                  </div>


                  <div className="min-w-0 flex-1">

                    <p className="text-sm font-bold text-[#14213D]">
                      {entry.subject}
                    </p>

                    <p className="mt-1 text-xs font-medium text-slate-500">
                      {entry.startTime} – {entry.endTime}
                    </p>

                    <p className="mt-1 text-[11px] text-slate-400">
                      {entry.class} · Room {entry.roomNo}
                    </p>

                  </div>

                </div>

              </article>

            ))}


            {!visible.length && (

              <div className="rounded-2xl border border-slate-200 bg-white px-6 py-10 text-center shadow-sm">

                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#14213D] text-[#C9A24D]">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-5 w-5"
                  >
                    <rect
                      x="3"
                      y="4"
                      width="18"
                      height="17"
                      rx="2"
                    />

                    <path d="M16 2v4M8 2v4M3 10h18" />

                  </svg>

                </div>

                <p className="mt-4 text-sm font-semibold text-[#14213D]">
                  No classes scheduled
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  There are no timetable entries for today.
                </p>

              </div>

            )}

          </div>

        )}


        {/* ==================== WEEKLY VIEW ==================== */}

        {timetableView === 'week' && (

          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_2px_10px_rgba(20,33,61,0.04)]">

            <div className="overflow-x-auto">

              <table className="min-w-full text-left text-xs">

                <thead className="bg-[#14213D] text-white">

                  <tr>

                    <th className="whitespace-nowrap px-4 py-3 font-semibold">
                      Day
                    </th>

                    <th className="whitespace-nowrap px-4 py-3 font-semibold">
                      Time
                    </th>

                    <th className="whitespace-nowrap px-4 py-3 font-semibold">
                      Class
                    </th>

                    <th className="whitespace-nowrap px-4 py-3 font-semibold">
                      Room
                    </th>

                  </tr>

                </thead>


                <tbody>

                  {visible.map((entry) => (

                    <tr
                      key={entry.id}
                      className="border-t border-slate-100 text-slate-700"
                    >

                      <td className="whitespace-nowrap px-4 py-3 font-bold text-[#14213D]">
                        {entry.day}
                      </td>

                      <td className="whitespace-nowrap px-4 py-3">

                        <span>
                          {entry.startTime} – {entry.endTime}
                        </span>

                        <span className="mt-1 block font-semibold text-[#14213D]">
                          {entry.subject}
                        </span>

                      </td>

                      <td className="whitespace-nowrap px-4 py-3">
                        {entry.class}
                      </td>

                      <td className="whitespace-nowrap px-4 py-3">
                        {entry.roomNo}
                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>


            {!visible.length && (

              <p className="p-8 text-center text-sm text-slate-500">
                No timetable entries have been added yet.
              </p>

            )}

          </div>

        )}

      </section>


      {/* ==================== FOOTER ==================== */}

      <footer className="mx-auto mt-10 max-w-2xl border-t border-slate-200 pt-5 text-center">

        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#C9A24D]">
          CVV Academic Pulse
        </p>

        <p className="mt-1 text-[10px] text-slate-400">
          Faculty academic information
        </p>

      </footer>

    </main>
  )
}


/* ==================== STAT CARD ==================== */

function Stat({
  label,
  value,
}: {
  label: string
  value: number
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white px-3 py-4 shadow-[0_2px_10px_rgba(20,33,61,0.04)]">

      <p className="text-2xl font-bold tracking-tight text-[#14213D]">
        {value}
      </p>

      <p className="mt-1 text-[11px] font-medium text-slate-500">
        {label}
      </p>

      <div className="mt-3 h-1 w-7 rounded-full bg-[#C9A24D]" />

    </div>
  )
}