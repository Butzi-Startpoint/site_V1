'use client'

import { useActionState } from 'react'
import { login, type LoginState } from './actions'

const field =
  'w-full rounded-xl border border-[#1E172D]/15 bg-white px-4 py-3 text-[#1E172D] outline-none transition focus:border-[#A68AFF] focus:ring-2 focus:ring-[#A68AFF]/30'

export function LoginForm() {
  const [state, action, pending] = useActionState<LoginState, FormData>(login, {})
  return (
    <form action={action} className="space-y-4">
      <label className="block text-sm font-semibold">
        Prénom ou email
        <input name="identifier" type="text" defaultValue={state.identifier} autoCapitalize="none" autoComplete="username" required className={`${field} mt-1.5 font-normal`} />
      </label>
      <label className="block text-sm font-semibold">
        Mot de passe
        <input name="password" type="password" autoComplete="current-password" required className={`${field} mt-1.5 font-normal`} />
      </label>
      {state.error && (
        <p role="alert" className="text-sm font-medium text-red-700">
          {state.error}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-xl bg-[#1E172D] px-5 py-3 font-semibold text-[#F6F1EB] transition hover:bg-[#2c2342] disabled:opacity-60"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {pending ? 'Connexion…' : 'Se connecter'}
      </button>
    </form>
  )
}
