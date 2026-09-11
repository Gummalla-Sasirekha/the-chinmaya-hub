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

      {/* ================= FACULTY INFO ================= */}

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

            {/* Room / Location */}
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

        {/* Profile arrow */}
        <span className="shrink-0 text-base text-[#C9A24D] transition-transform duration-200 group-hover:translate-x-1">
          →
        </span>

      </button>


      {/* ================= CONTACT ACTIONS ================= */}

      <div className="mt-4 flex gap-2 border-t border-slate-100 pt-3">

        {/* ================= CALL ================= */}

        <a
          href={`tel:${faculty.phone}`}
          aria-label={`Call ${faculty.name}`}
          className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-[#F7F5F0] text-[11px] font-semibold text-[#14213D] transition-all duration-200 hover:border-[#C9A24D] hover:bg-white active:scale-95"
        >

          {/* Green Phone Logo */}
          <svg
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px]"
            aria-hidden="true"
          >
            <path
              fill="#25D366"
              d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z"
            />
          </svg>

          <span>Call</span>

        </a>


        {/* ================= EMAIL ================= */}

        <a
          href={`mailto:${faculty.email}`}
          aria-label={`Email ${faculty.name}`}
          className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-[#F7F5F0] text-[11px] font-semibold text-[#14213D] transition-all duration-200 hover:border-[#C9A24D] hover:bg-white active:scale-95"
        >

          {/* Gmail-style Logo */}
          <svg
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px]"
            aria-hidden="true"
          >
            {/* Red */}
            <path
              fill="#EA4335"
              d="M3 6.5v11.8c0 .94.76 1.7 1.7 1.7H7V10.1L12 14l5-3.9V20h2.3c.94 0 1.7-.76 1.7-1.7V6.5l-2.2 1.7L12 12.5 5.2 8.2 3 6.5Z"
            />

            {/* Blue */}
            <path
              fill="#4285F4"
              d="M3 6.5 12 13.5V20H7V10.1L3 7V6.5Z"
            />

            {/* Green */}
            <path
              fill="#34A853"
              d="M21 6.5v11.8c0 .94-.76 1.7-1.7 1.7H17V10.1l4-3.1v-.5Z"
            />

            {/* Yellow */}
            <path
              fill="#FBBC04"
              d="m3 6.5 2.2 1.7L7 9.6V20H4.7c-.94 0-1.7-.76-1.7-1.7V6.5Z"
            />

            {/* Red top */}
            <path
              fill="#EA4335"
              d="M3 6.5 5.2 8.2 12 13.5l6.8-5.3L21 6.5V5.7C21 4.76 20.24 4 19.3 4H4.7C3.76 4 3 4.76 3 5.7v.8Z"
            />

          </svg>

          <span>Email</span>

        </a>


        {/* ================= WHATSAPP ================= */}

        <a
          href={`https://wa.me/${whatsappPhone}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Chat with ${faculty.name} on WhatsApp`}
          className="flex h-10 flex-1 items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-[#F7F5F0] text-[11px] font-semibold text-[#14213D] transition-all duration-200 hover:border-[#C9A24D] hover:bg-white active:scale-95"
        >

          {/* WhatsApp Logo */}
          <svg
            viewBox="0 0 24 24"
            className="h-[18px] w-[18px]"
            aria-hidden="true"
          >

            <path
              fill="#25D366"
              d="M12 2.5a9.5 9.5 0 0 0-8.2 14.3L2.5 21.5l4.9-1.3A9.5 9.5 0 1 0 12 2.5Z"
            />

            <path
              fill="#fff"
              d="M16.6 13.9c-.25-.13-1.48-.73-1.71-.81-.23-.08-.4-.13-.57.13-.17.25-.65.81-.8.98-.15.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.24-.75-.67-1.25-1.49-1.4-1.74-.15-.25-.02-.39.11-.52.12-.12.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.49c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.43 1.02 2.6.13.17 1.76 2.69 4.27 3.77.6.26 1.07.42 1.43.54.6.19 1.15.16 1.58.1.48-.07 1.48-.61 1.69-1.2.21-.59.21-1.1.15-1.2-.06-.1-.23-.16-.48-.29Z"
            />

          </svg>

          <span>WhatsApp</span>

        </a>

      </div>

    </article>
  )
}