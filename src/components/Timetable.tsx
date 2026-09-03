import { useState } from 'react'
import type { School } from '../types'

type Props = {
  school: School
  onBack: () => void
}

type Year = 'year2' | 'year3'

const courses = {
  year2: [
    {
      name: 'CSE',
      image: '/the-chinmaya-hub/timetables/stem/year2/year2-cse.jpg',
    },
    {
      name: 'AIML',
      image: '/the-chinmaya-hub/timetables/stem/year2/year2-aiml.jpg',
    },
    {
      name: 'Cyber Security',
      image: '/the-chinmaya-hub/timetables/stem/year2/year2-cy.jpg',
    },
    {
      name: 'Data Science',
      image: '/the-chinmaya-hub/timetables/stem/year2/year2-ds.jpg',
    },
    {
      name: 'ECE',
      image: '/the-chinmaya-hub/timetables/stem/year2/year2-ece.jpg',
    },
    {
      name: 'BCA 1',
      image: '/the-chinmaya-hub/timetables/stem/year2/year2-bca1.jpg',
    },
    {
      name: 'BCA 2',
      image: '/the-chinmaya-hub/timetables/stem/year2/year2-bca2.jpg',
    },
  ],

  year3: [
    {
      name: 'CSE 1',
      image: '/the-chinmaya-hub/timetables/stem/year3/year3-cse1.jpg',
    },
    {
      name: 'CSE 2',
      image: '/the-chinmaya-hub/timetables/stem/year3/year3-cse2.jpg',
    },
    {
      name: 'CSE 3',
      image: '/the-chinmaya-hub/timetables/stem/year3/year3-cse3.jpg',
    },
    {
      name: 'AIML 1',
      image: '/the-chinmaya-hub/timetables/stem/year3/year3-aiml1.jpg',
    },
    {
      name: 'AIML 2',
      image: '/the-chinmaya-hub/timetables/stem/year3/year3-aiml2.jpg',
    },
    {
      name: 'Cyber Security',
      image: '/the-chinmaya-hub/timetables/stem/year3/year3-cy.jpg',
    },
    {
      name: 'Data Science',
      image: '/the-chinmaya-hub/timetables/stem/year3/year3-ds.jpg',
    },
    {
      name: 'ECE',
      image: '/the-chinmaya-hub/timetables/stem/year3/year3-ece.jpg',
    },
    {
      name: 'BCA 1',
      image: '/the-chinmaya-hub/timetables/stem/year3/year3-bca1.jpg',
    },
    {
      name: 'BCA 2',
      image: '/the-chinmaya-hub/timetables/stem/year3/year3-bca2.jpg',
    },
    {
      name: 'BCA 3',
      image: '/the-chinmaya-hub/timetables/stem/year3/year3-bca3.jpg',
    },
    {
      name: 'BCA 4',
      image: '/the-chinmaya-hub/timetables/stem/year3/year3-bca4.jpg',
    },
    {
      name: 'BSc Computer Science',
      image: '/the-chinmaya-hub/timetables/stem/year3/year3-BScCS.jpg',
    },
  ],
}

export default function Timetable({ school, onBack }: Props) {
  const [year, setYear] = useState<Year | null>(null)

  const [selectedCourse, setSelectedCourse] = useState<{
    name: string
    image: string
  } | null>(null)

  // Timetable is currently available for STEM
  if (school.id !== 'stem') {
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
          Timetable
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Timetable
        </h1>

        <p className="mt-2 text-slate-500">
          Timetables are currently available for STEM.
        </p>
      </main>
    )
  }

  // Show selected timetable image
  if (selectedCourse) {
    return (
      <main className="screen px-6 pb-8 pt-10">
        <button
          onClick={() => setSelectedCourse(null)}
          className="grid size-11 place-items-center rounded-xl text-xl text-slate-500"
          aria-label="Go back"
        >
          ‹
        </button>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[.2em] text-orange-500">
          Timetable
        </p>

        <h1 className="mt-2 text-2xl font-bold text-slate-900">
          {selectedCourse.name}
        </h1>

        <div className="mt-6 overflow-hidden rounded-2xl bg-white shadow-sm">
          <img
            src={selectedCourse.image}
            alt={`${selectedCourse.name} timetable`}
            className="h-auto w-full"
          />
        </div>
      </main>
    )
  }

  // Show courses after selecting a year
  if (year) {
    return (
      <main className="screen px-6 pb-8 pt-10">
        <button
          onClick={() => setYear(null)}
          className="grid size-11 place-items-center rounded-xl text-xl text-slate-500"
          aria-label="Go back"
        >
          ‹
        </button>

        <p className="mt-6 text-sm font-semibold uppercase tracking-[.2em] text-orange-500">
          Step 2 of 2
        </p>

        <h1 className="mt-2 text-3xl font-bold text-slate-900">
          Choose your course
        </h1>

        <p className="mt-2 text-slate-500">
          Select your course to view the timetable.
        </p>

        <div className="mt-8 space-y-3">
          {courses[year].map((course) => (
            <button
              key={course.name}
              onClick={() => setSelectedCourse(course)}
              className="glass flex min-h-20 w-full items-center gap-4 rounded-2xl p-4 text-left transition hover:border-orange-200 active:scale-[.99]"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-orange-50 text-lg">
                📅
              </span>

              <span className="flex-1 text-sm font-semibold text-slate-700">
                {course.name}
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

  // Show year selection
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
        Step 1 of 2
      </p>

      <h1 className="mt-2 text-3xl font-bold text-slate-900">
        Choose your year
      </h1>

      <p className="mt-2 text-slate-500">
        Select your year to view the available courses.
      </p>

      <div className="mt-8 space-y-3">
        <button
          onClick={() => setYear('year2')}
          className="glass flex min-h-20 w-full items-center gap-4 rounded-2xl p-4 text-left transition hover:border-orange-200 active:scale-[.99]"
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-orange-50 font-bold text-orange-500">
            02
          </span>

          <span className="flex-1 text-sm font-semibold text-slate-700">
            Year 2
          </span>

          <span className="text-xl text-orange-400">
            ›
          </span>
        </button>

        <button
          onClick={() => setYear('year3')}
          className="glass flex min-h-20 w-full items-center gap-4 rounded-2xl p-4 text-left transition hover:border-orange-200 active:scale-[.99]"
        >
          <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-orange-50 font-bold text-orange-500">
            03
          </span>

          <span className="flex-1 text-sm font-semibold text-slate-700">
            Year 3
          </span>

          <span className="text-xl text-orange-400">
            ›
          </span>
        </button>
      </div>
    </main>
  )
}
