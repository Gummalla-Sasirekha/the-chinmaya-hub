import { useEffect, useState } from 'react'
import type { ExamDuty, Faculty } from '../types'
import { getExamDuties } from '../data/repository'

type Props = {
  faculty: Faculty
}

export default function ExamDutyNotification({
  faculty,
}: Props) {
  const [upcomingDuty, setUpcomingDuty] =
    useState<ExamDuty | null>(null)

  useEffect(() => {
    const loadDuty = async () => {
      const duties =
        await getExamDuties(faculty.id)

      const today = new Date()

      today.setHours(0, 0, 0, 0)

      const upcoming =
        duties
          .filter((duty) => {
            const dutyDate = new Date(
              `${duty.date}T00:00:00`
            )

            return dutyDate >= today
          })
          .sort(
            (a, b) =>
              new Date(
                `${a.date}T00:00:00`
              ).getTime() -
              new Date(
                `${b.date}T00:00:00`
              ).getTime()
          )[0] ?? null

      setUpcomingDuty(upcoming)
    }

    loadDuty()
  }, [faculty.id])

  if (!upcomingDuty) {
    return null
  }

  const formattedDate =
    new Date(
      `${upcomingDuty.date}T00:00:00`
    ).toLocaleDateString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })

  return (
    <div className="mx-auto mb-6 mt-7 max-w-2xl rounded-2xl border border-[#C9A24D]/40 bg-white p-5 shadow-sm">

      <div className="mb-3 flex items-center justify-between">

        <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B]">
          Invigilation Duty
        </span>

        <span className="rounded-full bg-[#C9A24D]/15 px-3 py-1 text-xs font-semibold text-[#14213D]">
          {upcomingDuty.exam}
        </span>

      </div>

      <h3 className="text-lg font-semibold text-[#14213D]">
        Invigilation Duty Assigned
      </h3>

      <p className="mt-1 text-sm text-[#64748B]">
        You have been assigned an invigilation duty for this examination.
      </p>

      <div className="mt-4 grid grid-cols-2 gap-3">

        <div className="rounded-xl bg-[#F7F5F0] p-3">
          <p className="text-xs text-[#64748B]">
            Date
          </p>

          <p className="mt-1 font-semibold text-[#14213D]">
            {formattedDate}
          </p>
        </div>

        <div className="rounded-xl bg-[#F7F5F0] p-3">
          <p className="text-xs text-[#64748B]">
            Session
          </p>

          <p className="mt-1 font-semibold text-[#14213D]">
            {upcomingDuty.session}
          </p>
        </div>

      </div>

    </div>
  )
}
