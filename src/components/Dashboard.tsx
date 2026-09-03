import type {
  Announcement,
  Faculty,
  School,
  UserRole,
} from '../types'

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
    <main className="screen px-6 pb-8 pt-8">
      {/* Header */}
      <header className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="text-sm text-slate-500">
            Good morning,
          </p>

          <h1 className="text-xl font-bold text-slate-900">
            CVV Family

            <span className="ml-1 rounded-full bg-slate-100 px-2 py-1 text-[10px] uppercase tracking-wide text-slate-600">
              {role}
            </span>
          </h1>
        </div>

        <div className="flex shrink-0 gap-1.5">
          <button
            onClick={onChangeSchool}
            className="rounded-lg bg-white px-2.5 py-2 text-[11px] font-semibold text-slate-600 shadow-sm"
          >
            Change
          </button>

          <button
            onClick={onLogout}
            className="rounded-lg bg-white px-2.5 py-2 text-[11px] font-semibold text-rose-600 shadow-sm"
          >
            Logout
          </button>
        </div>
      </header>

      {/* School */}
      <section className="mt-6">
        <div className="glass rounded-2xl p-5">
          <p className="text-xs font-semibold uppercase tracking-[.18em] text-orange-500">
            Your school
          </p>

          <h2 className="mt-2 text-xl font-bold text-slate-900">
            {school.name}
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Faculty, announcements and academic information
          </p>
        </div>
      </section>

      {/* Quick Access */}
      <section className="mt-7">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">
            Quick Access
          </h2>

          <span className="text-xs text-slate-400">
            Explore
          </span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-3">
          {/* Faculty Directory */}
          <button
            onClick={onDirectory}
            className="glass min-h-32 rounded-2xl p-4 text-left transition active:scale-[.98]"
          >
            <div className="grid size-11 place-items-center rounded-xl bg-orange-50 text-xl">
              👥
            </div>

            <h3 className="mt-4 text-sm font-bold text-slate-800">
              Faculty Directory
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Find faculty & contact details
            </p>
          </button>

          {/* Announcements */}
          <button
            onClick={onAnnouncements}
            className="glass min-h-32 rounded-2xl p-4 text-left transition active:scale-[.98]"
          >
            <div className="grid size-11 place-items-center rounded-xl bg-orange-50 text-xl">
              🔔
            </div>

            <h3 className="mt-4 text-sm font-bold text-slate-800">
              Announcements
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              Latest school updates
            </p>
          </button>

          {/* Timetable */}
          <button
            onClick={onTimetable}
            className="glass col-span-2 flex min-h-24 items-center gap-4 rounded-2xl p-4 text-left transition active:scale-[.98]"
          >
            <div className="grid size-12 shrink-0 place-items-center rounded-xl bg-orange-50 text-xl">
              📅
            </div>

            <div className="flex-1">
              <h3 className="text-sm font-bold text-slate-800">
                Timetable
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                View your year and course timetable
              </p>
            </div>

            <span className="text-xl text-orange-400">
              ›
            </span>
          </button>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="mt-7">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900">
            Recent Activity
          </h2>

          <span className="text-xs text-slate-400">
            Latest
          </span>
        </div>

        <div className="mt-3 space-y-3">
          {announcements.slice(0, 3).map((announcement) => (
            <button
              key={announcement.id}
              onClick={onAnnouncements}
              className="glass flex w-full items-center gap-3 rounded-2xl p-4 text-left"
            >
              <div className="grid size-10 shrink-0 place-items-center rounded-xl bg-orange-50">
                🔔
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-semibold text-slate-700">
                  {announcement.title}
                </p>

                <p className="mt-1 text-xs text-slate-400">
                  Announcement
                </p>
              </div>

              <span className="text-lg text-slate-300">
                ›
              </span>
            </button>
          ))}

          {announcements.length === 0 && (
            <div className="glass rounded-2xl p-5 text-center">
              <p className="text-sm text-slate-500">
                No recent announcements.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Statistics */}
      <section className="mt-7">
        <h2 className="text-lg font-bold text-slate-900">
          Statistics
        </h2>

        <div className="mt-3 grid grid-cols-4 divide-x overflow-hidden rounded-2xl bg-white shadow-sm">
          {/* Faculty */}
          <div className="px-2 py-4 text-center">
            <p className="text-lg font-bold text-slate-900">
              {faculty.length}
            </p>

            <p className="mt-1 text-[10px] text-slate-500">
              Faculty
            </p>
          </div>

          {/* Alerts */}
          <div className="px-2 py-4 text-center">
            <p className="text-lg font-bold text-slate-900">
              {announcements.length}
            </p>

            <p className="mt-1 text-[10px] text-slate-500">
              Alerts
            </p>
          </div>

          {/* Duties */}
          <div className="px-2 py-4 text-center">
            <p className="text-lg font-bold text-slate-900">
              —
            </p>

            <p className="mt-1 text-[10px] text-slate-500">
              Duties
            </p>
          </div>

          {/* Evaluation */}
          <div className="px-2 py-4 text-center">
            <p className="text-lg font-bold text-slate-900">
              —
            </p>

            <p className="mt-1 text-[10px] text-slate-500">
              Evaluation
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
