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
    <main className="screen flex flex-col px-6 pb-8 pt-14">
      <div className="mb-auto">
        <div className="mb-10 flex items-center gap-3">
          <div className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-orange-400 to-rose-500 text-xl text-white shadow-lg">
            ॐ
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-orange-600">
              Chinmaya
            </p>
            <p className="font-semibold text-slate-700">
              Vishwavidyapeeth
            </p>
          </div>
        </div>

        <p className="text-sm font-medium uppercase tracking-[.24em] text-orange-500">
          Welcome to
        </p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
          CVV FAMILY
        </h1>
        <p className="mt-3 max-w-sm text-slate-500">
          Your academic community, in one simple place.
        </p>

        <div className="glass mt-10 rounded-3xl p-5">
          <p className="text-sm font-semibold text-slate-700">Sign in as</p>

          <div className="mt-3 grid grid-cols-2 gap-2">
            {(['student', 'faculty'] as UserRole[]).map(option => (
              <button
                key={option}
                type="button"
                onClick={() => setRole(option)}
                className={`min-h-11 rounded-xl px-2 text-xs font-bold capitalize transition ${
                  role === option
                    ? 'bg-slate-800 text-white'
                    : 'bg-white text-slate-500 shadow-sm'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <label
            className="mt-5 block text-sm font-semibold text-slate-700"
            htmlFor="identity"
          >
            CVV email
          </label>
          <input
            id="identity"
            value={identifier}
            onChange={e => setIdentifier(e.target.value)}
            className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
            placeholder="Enter your CVV email"
          />

          <label
            className="mt-5 block text-sm font-semibold text-slate-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            className="mt-2 h-12 w-full rounded-xl border border-slate-200 bg-white px-4 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
            placeholder="••••••••"
          />

          {error && <p className="mt-3 text-sm text-rose-600">{error}</p>}

          <button
            disabled={loading}
            onClick={submit}
            className="mt-6 h-12 w-full rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 font-semibold text-white shadow-lg transition active:scale-[.98] disabled:opacity-60"
          >
            {loading ? 'Signing in…' : `Continue as ${role}`}
          </button>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-slate-400">
        For CVV students and faculty
      </p>
    </main>
  )
}
