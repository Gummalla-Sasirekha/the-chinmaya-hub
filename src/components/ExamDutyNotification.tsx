import type { Faculty } from '../types'

type ExamDuty = {
  date: string
  session: 'FN' | 'AN'
}

const pradeebaDuties: ExamDuty[] = [
  {
    date: '2026-09-15',
    session: 'AN',
  },
  {
    date: '2026-09-16',
    session: 'FN',
  },
  {
    date: '2026-09-18',
    session: 'FN',
  },
]

function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

function getSessionLabel(session: 'FN' | 'AN') {
  return session === 'FN' ? 'Forenoon (FN)' : 'Afternoon (AN)'
}

export default function ExamDutyNotification({
  faculty,
}: {
  faculty: Faculty | null
}) {
  // Stage 1: testing only with Pradeeba
  if (!faculty || faculty.id !== 'f5') {
    return null
  }

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const upcomingDuty = pradeebaDuties.find((duty) => {
    const dutyDate = new Date(`${duty.date}T00:00:00`)
    return dutyDate >= today
  })

  if (!upcomingDuty) {
    return null
  }

  return (
    <section className="mx-auto mt-6 max-w-2xl">
      <div className="relative overflow-hidden rounded-2xl border border-[#C9A24D]/40 bg-white p-5 shadow-[0_4px_18px_rgba(20,33,61,0.07)]">
        
        {/* Gold notification accent */}
        <div className="absolute left-0 top-0 h-full w-1 bg-[#C9A24D]" />

        <div className="flex items-start gap-4">
          
          {/* Bell */}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#14213D] text-[#C9A24D]">
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

          <div className="min-w-0 flex-1">
            
            <div className="flex flex-wrap items-center gap-2">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A24D]">
                Exam Duty
              </p>

              <span className="rounded-full bg-[#14213D] px-2 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
                CIA-1
              </span>
            </div>

            <h3 className="mt-2 text-base font-bold text-[#14213D]">
              Invigilation Duty Assigned
            </h3>

            <p className="mt-1 text-xs leading-relaxed text-slate-500">
              You have an examination invigilation duty scheduled for the
              upcoming CIA-1 examination.
            </p>

            <div className="mt-4 grid grid-cols-2 gap-2">
              
              <div className="rounded-xl bg-[#F7F5F0] px-3 py-3">
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Date
                </p>

                <p className="mt-1 text-xs font-bold text-[#14213D]">
                  {formatDate(upcomingDuty.date)}
                </p>
              </div>

              <div className="rounded-xl bg-[#F7F5F0] px-3 py-3">
                <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Session
                </p>

                <p className="mt-1 text-xs font-bold text-[#14213D]">
                  {getSessionLabel(upcomingDuty.session)}
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}