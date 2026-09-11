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
    <main className="min-h-screen bg-[#f7f5f0] px-5 pb-10 pt-7 sm:px-8">
      <div className="mx-auto max-w-2xl">

        {/* Back */}
        <button
          onClick={onBack}
          className="grid size-10 place-items-center rounded-full border border-slate-200 bg-white text-xl text-[#14213d] shadow-sm transition hover:bg-slate-50 active:scale-95"
          aria-label="Go back"
        >
          ←
        </button>

        {/* Header */}
        <section className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7b3f]">
            Your academic space
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#14213d] sm:text-4xl">
            Choose your school
          </h1>

          <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500 sm:text-base">
            Select your school to personalize your faculty directory and
            announcements.
          </p>
        </section>

        {/* Schools */}
        <section className="mt-8 space-y-3">
          {schools.map((school, index) => (
            <button
              key={school.id}
              onClick={() => onSelect(school)}
              className="group flex min-h-24 w-full items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 text-left shadow-[0_6px_24px_rgba(20,33,61,0.05)] transition-all hover:-translate-y-0.5 hover:border-[#d6b36a] hover:shadow-[0_10px_28px_rgba(20,33,61,0.08)] active:scale-[0.99] sm:p-5"
            >
              {/* Number */}
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-[#f8f1e3] text-sm font-bold text-[#9a7b3f]">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* School name */}
              <span className="flex-1 text-sm font-semibold leading-6 text-[#14213d] sm:text-base">
                {school.name}
              </span>

              {/* Arrow */}
              <span className="grid size-9 shrink-0 place-items-center rounded-full text-lg text-slate-400 transition group-hover:bg-[#14213d] group-hover:text-white">
                →
              </span>
            </button>
          ))}
        </section>

        {/* Footer */}
        <p className="mt-8 text-center text-xs text-slate-400">
          CVV Academic Pulse
        </p>

      </div>
    </main>
  )
}