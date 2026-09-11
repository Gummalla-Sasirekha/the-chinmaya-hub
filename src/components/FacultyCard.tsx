import type { Faculty } from '../types'

export default function FacultyCard({
  faculty,
  onViewProfile,
}: {
  faculty: Faculty
  onViewProfile: () => void
}) {
  const initials = faculty.name
    .trim()
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  const whatsappPhone = faculty.phone
    .replace(/\D/g, '')
    .replace(/^00/, '')

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_2px_10px_rgba(20,33,61,0.04)] transition-all duration-200 hover:border-[#C9A24D] hover:shadow-md">

      {/* Faculty Info */}
      <button
        onClick={onViewProfile}
        aria-label={`View ${faculty.name}'s profile`}
        className="group flex w-full items-center gap-3 text-left"
      >

        {/* Initials */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#14213D] text-sm font-bold tracking-wide text-[#C9A24D]">
          {initials}
        </div>

        {/* Details */}
        <div className="min-w-0 flex-1">

          <h3 className="truncate text-[15px] font-bold text-[#14213D]">
            {faculty.name}
          </h3>

          <p className="mt-1 truncate text-xs text-slate-500">
            {faculty.designation}
          </p>

          <div className="mt-1.5 flex items-center gap-1.5">

            {/* Location */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              className="h-3.5 w-3.5 text-[#C9A24D]"
            >
              <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>

            <span className="text-[11px] text-slate-400">
              Room {faculty.roomNo}
            </span>

          </div>

        </div>

        {/* Profile Arrow */}
        <span className="shrink-0 text-base text-[#C9A24D] transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>

      </button>


      {/* Contact Actions */}
      <div className="mt-4 flex gap-2 border-t border-slate-100 pt-3">

        {/* CALL */}
        <a
          href={`tel:${faculty.phone}`}
          aria-label={`Call ${faculty.name}`}
          className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#14213D] text-[11px] font-semibold text-white transition active:scale-95"
        >

          {/* Phone icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4 text-[#C9A24D]"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.08 5.18 2 2 0 0 1 5.08 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.25a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
          </svg>

          <span>Call</span>

        </a>


        {/* EMAIL */}
        <a
          href={`mailto:${faculty.email}`}
          aria-label={`Email ${faculty.name}`}
          className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-[#F7F5F0] text-[11px] font-semibold text-[#14213D] transition hover:border-[#C9A24D] active:scale-95"
        >

          {/* Email icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4 text-[#C9A24D]"
          >
            <rect
              x="3"
              y="5"
              width="18"
              height="14"
              rx="2"
            />

            <path d="m3 7 9 6 9-6" />
          </svg>

          <span>Email</span>

        </a>


        {/* WHATSAPP */}
        <a
          href={`https://wa.me/${whatsappPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with ${faculty.name} on WhatsApp`}
          className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-[#F7F5F0] text-[11px] font-semibold text-[#14213D] transition hover:border-[#C9A24D] active:scale-95"
        >

          {/* WhatsApp-style recognizable icon */}
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-4 w-4 text-[#C9A24D]"
          >
            <path d="M20.5 11.5a8.5 8.5 0 0 1-12.8 7.36L4 20l1.17-4.02A8.5 8.5 0 1 1 20.5 11.5Z" />

            <path
              d="M8.5 8.5c.3-.6.6-.6.9-.6h.3c.2 0 .4.1.5.4l.6 1.4c.1.2.1.4-.1.6l-.5.6c.5 1 1.3 1.8 2.3 2.3l.6-.5c.2-.2.4-.2.6-.1l1.4.6c.3.1.4.3.4.5v.3c0 .3 0 .6-.6.9-.4.2-1 .3-1.5.1-1.1-.3-2.3-1-3.4-2.1-1.1-1.1-1.8-2.3-2.1-3.4-.2-.5-.1-1.1.1-1.5Z"
            />
          </svg>

          <span>WhatsApp</span>

        </a>

      </div>

    </article>
  )
}