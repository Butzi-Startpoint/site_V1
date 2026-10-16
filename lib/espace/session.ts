import 'server-only'
import { createHmac, scryptSync, timingSafeEqual } from 'node:crypto'
import { cookies } from 'next/headers'

/* ── Espace cohorte : authentification sans base de données ──
   Les comptes vivent dans la variable d'environnement ESPACE_MEMBERS (JSON),
   jamais dans le dépôt. Générer ou compléter avec `node scripts/espace-members.mjs`.
   Retirer quelqu'un = le supprimer de cette variable : sa session devient invalide. */

export type Member = { id: string; name: string; email?: string }
type StoredMember = Member & { hash: string }

const COOKIE = 'espace_session'
const MAX_AGE = 60 * 60 * 24 * 14 // 14 jours

function members(): StoredMember[] {
  try {
    const parsed = JSON.parse(process.env.ESPACE_MEMBERS ?? '[]')
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function secret(): string {
  const s = process.env.ESPACE_SECRET
  if (!s || s.length < 32) throw new Error('ESPACE_SECRET manquant ou trop court (32 caractères minimum)')
  return s
}

function sign(payload: string): string {
  return createHmac('sha256', secret()).update(payload).digest('base64url')
}

function safeEqual(a: string, b: string): boolean {
  const x = Buffer.from(a)
  const y = Buffer.from(b)
  return x.length === y.length && timingSafeEqual(x, y)
}

function checkPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(':')
  if (!salt || !hash) return false
  const candidate = scryptSync(password, salt, 64).toString('hex')
  return safeEqual(candidate, hash)
}

export function authenticate(identifier: string, password: string): Member | null {
  // On se connecte avec son prénom ou son email.
  const wanted = identifier.trim().toLowerCase()
  const found = members().find(
    (m) => m.id === wanted || m.name.toLowerCase() === wanted || m.email?.toLowerCase() === wanted,
  )
  // Même travail de hachage si l'email est inconnu, pour ne pas révéler quels emails existent.
  const ok = checkPassword(password, found?.hash ?? 'x:y')
  return found && ok ? { id: found.id, name: found.name, email: found.email } : null
}

export async function startSession(memberId: string) {
  const exp = Math.floor(Date.now() / 1000) + MAX_AGE
  const payload = `${memberId}.${exp}`
  const jar = await cookies()
  jar.set(COOKIE, `${payload}.${sign(payload)}`, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/espace',
    maxAge: MAX_AGE,
  })
}

export async function endSession() {
  const jar = await cookies()
  jar.delete({ name: COOKIE, path: '/espace' })
}

export async function getMember(): Promise<Member | null> {
  const jar = await cookies()
  const raw = jar.get(COOKIE)?.value
  if (!raw) return null
  const i = raw.lastIndexOf('.')
  const payload = raw.slice(0, i)
  if (i < 0 || !safeEqual(raw.slice(i + 1), sign(payload))) return null
  const [id, exp] = payload.split('.')
  if (Number(exp) < Date.now() / 1000) return null
  const found = members().find((m) => m.id === id)
  return found ? { id: found.id, name: found.name, email: found.email } : null
}
