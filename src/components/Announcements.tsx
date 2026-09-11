import { useState } from 'react'
import type { ReactNode } from 'react'

import type {
  Announcement,
  AnnouncementCategory,
  School,
} from '../types'

type Props = {
  school: School
  announcements: Announcement[]
  onBack: () => void
}

const categories: (AnnouncementCategory | 'All')[] = [
  'All',
  'Invigilation',
  'Evaluation',
  'Meeting',
  'Circular',
]

export default function Announcements({
  school,
  announcements,
  onBack,
}: Props) {
  const [filter, setFilter] =
    useState<AnnouncementCategory | 'All'>('All')

  /*
   * CIA-1 Examination Timetable
   *
   * This is intentionally added here instead of changing mockData.ts.
   * That keeps the existing announcement data untouched.
   */
  const ciaAnnouncement: Announcement = {
    id: 'cia-1-examination-timetable',
    schoolId: 'stem',
    category: 'Evaluation',
    title: 'CIA-1 Examination Timetable',
    priority: 'high',
    date: '2026-09-07',
    time: 'See timetable',
    venue: 'See attached timetable',
    assignedFaculty: [],
    attachmentUrl: '/the-chinmaya-hub/CIA-1.pdf',
    attachmentName: 'CIA-1 Examination Timetable.pdf',
  }

  /*
   * Add CIA-1 only for the STEM school.
   *
   * The duplicate check means that if you later add the same
   * announcement to Firebase/mockData, it won't appear twice.
   */
  const allAnnouncements =
    school.id === 'stem' &&
    !announcements.some(
      (item) => item.id === ciaAnnouncement.id,
    )
      ? [ciaAnnouncement, ...announcements]
      : announcements

  const visible = allAnnouncements.filter(
    (item) =>
      filter === 'All' || item.category === filter,
  )

  return (
    <main className="min-h-screen bg-[#F7F5F0] px-5 pb-10 pt-6 text-[#14213D] sm:px-6">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="mx-auto flex max-w-2xl items-center gap-4">

        <button
          onClick={onBack}
          aria-label="Back"
          className="
            flex h-11 w-11 shrink-0 items-center justify-center
            rounded-xl border border-slate-200 bg-white
            text-[#14213D] shadow-sm
            transition-all duration-200
            hover:border-[#C9A24D]
            active:scale-95
          "
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
            Updates
          </p>

          <h1 className="mt-0.5 text-lg font-bold text-[#14213D]">
            Announcements
          </h1>
        </div>

      </header>


      {/* =====================================================
          PAGE INTRO
      ===================================================== */}

      <section className="mx-auto mt-8 max-w-2xl">

        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C9A24D]">
          Your School
        </p>

        <h2 className="mt-1 text-3xl font-bold tracking-tight text-[#14213D]">
          School Updates
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500">
          Stay updated with the latest academic announcements.
        </p>

        <p className="mt-2 truncate text-xs font-medium text-slate-400">
          {school.name}
        </p>

      </section>


      {/* =====================================================
          FILTERS
      ===================================================== */}

      <section className="mx-auto mt-6 max-w-2xl">

        <div className="flex gap-2 overflow-x-auto pb-1">

          {categories.map((category) => (

            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`
                h-9 shrink-0 rounded-xl px-4
                text-xs font-bold
                transition-all duration-200

                ${
                  filter === category
                    ? 'bg-[#14213D] text-white shadow-sm'
                    : 'border border-slate-200 bg-white text-slate-500 hover:border-[#C9A24D] hover:text-[#14213D]'
                }
              `}
            >
              {category}
            </button>

          ))}

        </div>

      </section>


      {/* =====================================================
          RESULT COUNT
      ===================================================== */}

      <section className="mx-auto mt-7 max-w-2xl">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-lg font-bold text-[#14213D]">
              {visible.length}{' '}
              {visible.length === 1
                ? 'announcement'
                : 'announcements'}
            </p>

            <p className="mt-0.5 text-xs text-slate-400">
              {filter === 'All'
                ? 'All school updates'
                : `${filter} updates`}
            </p>

          </div>

          <div className="h-1.5 w-10 rounded-full bg-[#C9A24D]" />

        </div>

      </section>


      {/* =====================================================
          ANNOUNCEMENT LIST
      ===================================================== */}

      <section className="mx-auto mt-4 max-w-2xl space-y-3">

        {visible.map((item) => (

          <article
            key={item.id}
            className="
              rounded-2xl border border-slate-200
              bg-white p-4
              shadow-[0_2px_10px_rgba(20,33,61,0.04)]
              transition-all duration-200
              hover:border-[#C9A24D]
            "
          >

            {/* =================================================
                TOP ROW
            ================================================= */}

            <div className="flex items-center justify-between gap-3">

              {/* Category */}

              <div className="flex items-center gap-2">

                <div className="
                  flex h-8 w-8 shrink-0
                  items-center justify-center
                  rounded-lg bg-[#14213D]
                  text-[#C9A24D]
                ">

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="h-4 w-4"
                  >
                    <path d="M4 11a8 8 0 0 1 16 0v4l2 2H2l2-2v-4Z" />
                    <path d="M10 21h4" />
                  </svg>

                </div>

                <span className="
                  text-[10px] font-bold uppercase
                  tracking-[0.08em]
                  text-[#C9A24D]
                ">
                  {item.category}
                </span>

              </div>


              {/* Priority */}

              <span
                className={`
                  rounded-full px-2.5 py-1
                  text-[9px] font-bold uppercase
                  tracking-wide

                  ${
                    item.priority === 'high'
                      ? 'bg-red-50 text-red-600'
                      : item.priority === 'med'
                        ? 'bg-[#F7F5F0] text-[#C9A24D]'
                        : 'bg-slate-50 text-slate-400'
                  }
                `}
              >
                {item.priority}
              </span>

            </div>


            {/* =================================================
                TITLE
            ================================================= */}

            <h2 className="
              mt-4
              text-[15px]
              font-bold
              leading-6
              text-[#14213D]
            ">
              {item.title}
            </h2>


            {/* =================================================
                INFORMATION
            ================================================= */}

            <div className="
              mt-4
              border-t border-slate-100
              pt-4
            ">

              <div className="
                grid grid-cols-2
                gap-x-4 gap-y-4
              ">

                {/* DATE */}

                <Info
                  label="Date"
                  value={item.date}
                  icon={
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-4 w-4"
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
                  }
                />


                {/* TIME */}

                <Info
                  label="Time"
                  value={item.time}
                  icon={
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-4 w-4"
                    >
                      <circle
                        cx="12"
                        cy="12"
                        r="9"
                      />

                      <path d="M12 7v5l3 2" />
                    </svg>
                  }
                />


                {/* VENUE */}

                <div className="col-span-2">

                  <Info
                    label="Venue"
                    value={item.venue}
                    icon={
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-4 w-4"
                      >
                        <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />

                        <circle
                          cx="12"
                          cy="10"
                          r="2.5"
                        />
                      </svg>
                    }
                  />

                </div>


                {/* ASSIGNED FACULTY */}

                {item.assignedFaculty.length > 0 && (

                  <div className="col-span-2">

                    <Info
                      label="Assigned Faculty"
                      value={item.assignedFaculty.join(', ')}
                      icon={
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          className="h-4 w-4"
                        >
                          <circle
                            cx="9"
                            cy="8"
                            r="3"
                          />

                          <path d="M3 20a6 6 0 0 1 12 0" />

                          <path d="M16 11a3 3 0 1 0 0-6" />

                          <path d="M18 20a5 5 0 0 0-3-4.6" />
                        </svg>
                      }
                    />

                  </div>

                )}

              </div>

            </div>


            {/* =================================================
                PDF ATTACHMENT
            ================================================= */}

            {item.attachmentUrl && (

              <div className="
                mt-5
                border-t border-slate-100
                pt-4
              ">

                <a
                  href={item.attachmentUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex w-full
                    items-center justify-between
                    rounded-xl
                    border border-slate-200
                    bg-[#F7F5F0]
                    px-4 py-3

                    transition-all duration-200

                    hover:border-[#C9A24D]
                    hover:bg-white
                  "
                >

                  {/* PDF ICON + TEXT */}

                  <div className="
                    flex min-w-0
                    items-center gap-3
                  ">

                    <div className="
                      flex h-10 w-10 shrink-0
                      items-center justify-center
                      rounded-xl
                      bg-[#14213D]
                      text-[#C9A24D]
                    ">

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-5 w-5"
                      >
                        <path d="M6 2h9l4 4v16H6z" />

                        <path d="M14 2v5h5" />

                        <path d="M9 13h6M9 17h6" />
                      </svg>

                    </div>


                    <div className="min-w-0">

                      <p className="
                        truncate
                        text-xs
                        font-bold
                        text-[#14213D]
                      ">
                        {item.attachmentName ??
                          'View attachment'}
                      </p>

                      <p className="
                        mt-0.5
                        text-[10px]
                        text-slate-400
                      ">
                        Open PDF document
                      </p>

                    </div>

                  </div>


                  {/* ARROW */}

                  <span className="
                    ml-3
                    shrink-0
                    text-lg
                    text-[#C9A24D]
                  ">
                    →
                  </span>

                </a>

              </div>

            )}

          </article>

        ))}


        {/* =====================================================
            EMPTY STATE
        ===================================================== */}

        {!visible.length && (

          <div className="
            rounded-2xl
            border border-slate-200
            bg-white
            px-6 py-12
            text-center
            shadow-sm
          ">

            <div className="
              mx-auto
              flex h-12 w-12
              items-center justify-center
              rounded-2xl
              bg-[#14213D]
              text-[#C9A24D]
            ">

              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="M4 11a8 8 0 0 1 16 0v4l2 2H2l2-2v-4Z" />
                <path d="M10 21h4" />
              </svg>

            </div>


            <p className="
              mt-4
              text-sm
              font-bold
              text-[#14213D]
            ">
              No announcements
            </p>


            <p className="
              mt-1
              text-xs
              text-slate-400
            ">
              No announcements in this category.
            </p>

          </div>

        )}

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="
        mx-auto
        mt-10
        max-w-2xl
        border-t border-slate-200
        pt-5
        text-center
      ">

        <p className="
          text-[9px]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-[#C9A24D]
        ">
          CVV Academic Pulse
        </p>

        <p className="
          mt-1
          text-[10px]
          text-slate-400
        ">
          Academic information, connected.
        </p>

      </footer>

    </main>
  )
}


/* ============================================================
   INFO ITEM
============================================================ */

function Info({
  label,
  value,
  icon,
}: {
  label: string
  value: string
  icon: ReactNode
}) {
  return (
    <div className="flex items-start gap-2">

      <div className="
        mt-0.5
        shrink-0
        text-[#C9A24D]
      ">
        {icon}
      </div>


      <div className="min-w-0">

        <p className="
          text-[9px]
          font-bold
          uppercase
          tracking-[0.08em]
          text-slate-400
        ">
          {label}
        </p>


        <p className="
          mt-0.5
          break-words
          text-xs
          font-semibold
          leading-5
          text-[#14213D]
        ">
          {value}
        </p>

      </div>

    </div>
  )
}
