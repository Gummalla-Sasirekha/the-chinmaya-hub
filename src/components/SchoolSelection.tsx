import type { School } from '../types'

type Props = {
  schools: School[]
  onSelect: (school: School) => void
  onBack: () => void
}

export default function SchoolSelection({
  schools,
  onSelect,
  onBack,
}: Props) {
  return (
    <main className="screen px-6 pb-8 pt-10">
      <button
        onClick={onBack}
        className="grid size-11 place-items-center rounded-xl text-xl text-slate-500"
        aria-label="Go back"
      >
        ‹
      </button>

      <p className="mt-6 text-sm font-semibold uppercase tracking-[.2em] text-orange-500">
        Step 1 of 1
      </p>

      <h1 className="mt-2 text-3xl font-bold text-slate-900">
        Choose your school
      </h1>

      <p className="mt-2 text-slate-500">
        This personalises your faculty directory and announcements.
      </p>

      <div className="mt-8 space-y-3">
        {schools.map((school, index) => (
          <button
            key={school.id}
            onClick={() => onSelect(school)}
            className="glass flex min-h-20 w-full items-center gap-4 rounded-2xl p-4 text-left transition hover:border-orange-200 active:scale-[.99]"
          >
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-orange-50 font-bold text-orange-500">
              0{index + 1}
            </span>

            <span className="flex-1 text-sm font-semibold leading-5 text-slate-700">
              {school.name}
            </span>

            <span className="text-xl text-orange-400">
              ›
            </span>
          </button>
        ))}
      </div>
    </main>
  )
}
