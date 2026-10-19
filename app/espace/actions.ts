'use server'

import { redirect } from 'next/navigation'
import { authenticate, endSession, startSession } from '@/lib/espace/session'

export type LoginState = { error?: string; identifier?: string }

export async function login(_prev: LoginState, formData: FormData): Promise<LoginState> {
  const identifier = String(formData.get('identifier') ?? '')
  const password = String(formData.get('password') ?? '')
  const member = authenticate(identifier, password)
  if (!member) {
    await new Promise((r) => setTimeout(r, 800)) // freine les essais en rafale
    return { error: 'Prénom ou mot de passe incorrect.', identifier }
  }
  await startSession(member.id)
  redirect('/espace')
}

export async function logout() {
  await endSession()
  redirect('/espace')
}
