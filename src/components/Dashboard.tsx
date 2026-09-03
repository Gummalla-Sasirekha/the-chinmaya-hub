import type { Announcement, Faculty, School, UserRole } from '../types'

type Props = {
  school: School
  faculty: Faculty[]
  announcements: Announcement[]
  role: UserRole
  onDirectory: () => void
  onAnnouncements: () => void
  onChangeSchool: () => void
  onLogout: () => void
}

const categoryIcon: Record<string, string> = {
  Invigilation: '▣',
  Evaluation: '✓',
  Meeting: '◌',
  Circular: '◫',
}

export default function Dashboard({
  school,
  faculty,
  announcements,
  role,
  onDirectory,
  onAnnouncements,
  onChangeSchool,
  onLogout,
}: Props) {
  const latest = announcements
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 2)

  return (
    <main className="screen px-5 pb-8 pt-7">
      <header className="flex items-center justify-between gap-2">
        <div className="min-w-0">
          <p className="text-sm text-slate-500">Good morning,</p>
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

      <section className="mt-6 rounded-3xl bg-gradient-to-br from-slate-800 via-slate-700 to-orange-700 p-5 text-white shadow-xl">
        <p className="text-sm text-orange-100">Your school</p>

        <h2 className="mt-1 max-w-xs text-lg font-bold leading-6">
          {school.name}
        </h2>

        <p className="mt-5 text-sm text-slate-200">
          Everything academic, at a glance.
        </p>
      </section>

      <section className="mt-7">
        <h2 className="font-bold text-slate-800">Quick access</h2>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <button
            onClick={onDirectory}
            className="glass min-h-28 rounded-2xl p-4 text-left"
          >
            <span className="text-xl">♙</span>
            <p className="mt-3 font-semibold">Faculty directory</p>
            <p className="mt-1 text-xs text-slate-500">Find & contact</p>
          </button>

          <button
            onClick={onAnnouncements}
            className="glass min-h-28 rounded-2xl p-4 text-left"
          >
            <span className="text-xl">♢</span>
            <p className="mt-3 font-semibold">Announcements</p>
            <p className="mt-1 text-xs text-slate-500">
              View latest updates
            </p>
          </button>
        </div>
      </section>

      <section className="mt-7">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-slate-800">Recent activity</h2>

          <button
            onClick={onAnnouncements}
            className="text-sm font-semibold text-orange-600"
          >
            See all
          </button>
        </div>

        <div className="mt-3 space-y-3">
          {latest.map((a) => (
            <div
              key={a.id}
              className="flex gap-3 rounded-2xl bg-white p-4 shadow-sm"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-orange-50 text-orange-600">
                {categoryIcon[a.category]}
              </span>

              <div>
                <p className="text-sm font-semibold text-slate-700">
                  {a.title}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {a.date} · {a.time}
                </p>
              </div>
            </div>
          ))}

          {latest.length === 0 && (
            <div className="rounded-2xl bg-white p-4 text-sm text-slate-500 shadow-sm">
              No recent activity.
            </div>
          )}
        </div>
      </section>

      <section className="mt-7">
        <h2 className="font-bold text-slate-800">Duty allocation</h2>

        <div className="mt-3 space-y-3 rounded-2xl bg-white p-4 shadow-sm">
          <Progress
            label="Invigilation assigned"
            value={78}
            color="bg-orange-500"
          />

          <Progress
            label="Evaluation assigned"
            value={64}
            color="bg-sky-500"
          />

          <Progress
            label="Meetings assigned"
            value={86}
            color="bg-violet-500"
          />
        </div>
      </section>

      <section className="mt-7">
        <h2 className="font-bold text-slate-800">Statistics</h2>

        <div className="mt-3 grid grid-cols-4 divide-x rounded-2xl bg-white py-4 shadow-sm">
          <Stat
            label="Faculty"
            value={faculty.length}
            accent="text-orange-500"
          />

          <Stat
            label="Alerts"
            value={announcements.length}
            accent="text-rose-500"
          />

          <Stat
            label="Duties"
            value={announcements.filter(
              (a) => a.category !== 'Circular'
            ).length}
            accent="text-sky-600"
          />

          <Stat
            label="Evaluation"
            value={announcements.filter(
              (a) => a.category === 'Evaluation'
            ).length}
            accent="text-violet-600"
          />
        </div>
      </section>
    </main>
  )
}

function Stat({
  label,
  value,
  accent,
}: {
  label: string
  value: number
  accent: string
}) {
  return (
    <div className="min-w-0 px-2 text-center">
      <p className={`text-xl font-bold ${accent}`}>{value}</p>
      <p className="mt-1 truncate text-[10px] text-slate-500">
        {label}
      </p>
    </div>
  )
}

function Progress({
  label,
  value,
  color,
}: {
  label: string
  value: number
  color: string
}) {
  return (
    <div>
      <div className="flex justify-between text-xs">
        <span className="text-slate-600">{label}</span>
        <span className="font-semibold text-slate-700">{value}%</span>
      </div>

      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}
