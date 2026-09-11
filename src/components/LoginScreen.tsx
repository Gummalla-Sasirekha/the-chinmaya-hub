import { useState } from 'react'
import type { UserRole } from '../types'

type Props = {
  onLogin: (
    identifier: string,
    password: string,
    selectedRole: UserRole
  ) => Promise<void>
}

export default function LoginScreen({ onLogin }: Props) {
  const [identifier, setIdentifier] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState<UserRole>('student')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async () => {
    setLoading(true)
    setError('')

    try {
      await onLogin(identifier, password, role)
    } catch (reason) {
      setError(
        reason instanceof Error
          ? reason.message
          : 'Please check your email and password.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#f7f5f0] px-5 py-8 sm:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md flex-col justify-center">

        {/* Brand */}
        <section className="mb-8 text-center">
          <div className="mx-auto mb-5 grid size-16 place-items-center rounded-2xl bg-[#14213d] text-2xl text-[#d6b36a] shadow-sm">
            ॐ
          </div>

          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9a7b3f]">
            Chinmaya Vishwa Vidyapeeth
          </p>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[#14213d]">
            CVV Academic Pulse
          </h1>

          <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
            Your academic community, in one simple place.
          </p>
        </section>

        {/* Login Card */}
        <section className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-[0_12px_40px_rgba(20,33,61,0.08)] sm:p-7">

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#14213d]">
              Welcome back
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Sign in to continue to your academic space.
            </p>
          </div>

          {/* Role Selection */}
          <div>
            <label className="text-sm font-medium text-slate-700">
              Continue as
            </label>

            <div className="mt-2 grid grid-cols-2 gap-2 rounded-xl bg-slate-100 p-1">
              {(['student', 'faculty'] as UserRole[]).map(option => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setRole(option)}
                  className={`h-11 rounded-lg text-sm font-semibold capitalize transition ${
                    role === option
                      ? 'bg-[#14213d] text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          {/* Email */}
          <div className="mt-5">
            <label
              htmlFor="identity"
              className="text-sm font-medium text-slate-700"
            >
              CVV email
            </label>

            <input
              id="identity"
              value={identifier}
              onChange={e => setIdentifier(e.target.value)}
              type="email"
              autoComplete="email"
              className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#9a7b3f] focus:bg-white focus:ring-4 focus:ring-[#d6b36a]/15"
              placeholder="Enter your CVV email"
            />
          </div>

          {/* Password */}
          <div className="mt-5">
            <label
              htmlFor="password"
              className="text-sm font-medium text-slate-700"
            >
              Password
            </label>

            <input
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              autoComplete="current-password"
              className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#9a7b3f] focus:bg-white focus:ring-4 focus:ring-[#d6b36a]/15"
              placeholder="Enter your password"
            />
          </div>

          {/* Error */}
          {error && (
            <div className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3">
              <p className="text-sm text-red-600">
                {error}
              </p>
            </div>
          )}

          {/* Login */}
          <button
            disabled={loading}
            onClick={submit}
            className="mt-6 h-12 w-full rounded-xl bg-[#14213d] text-sm font-semibold text-white shadow-sm transition hover:bg-[#1b2d52] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading
              ? 'Signing in…'
              : `Continue as ${role}`}
          </button>
        </section>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-slate-400">
          For CVV students and faculty
        </p>

      </div>
    </main>
  )
}
