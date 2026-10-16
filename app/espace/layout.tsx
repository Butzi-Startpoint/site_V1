import type { Metadata } from 'next'
import Link from 'next/link'
import { getMember } from '@/lib/espace/session'
import { logout } from './actions'

export const metadata: Metadata = {
  title: 'Espace cohorte | StartPoint IA',
  robots: { index: false, follow: false },
}

export default async function EspaceLayout({ children }: { children: React.ReactNode }) {
  const member = await getMember()
  return (
    <div className="min-h-screen bg-[#F6F1EB] text-[#1E172D]">
      <header className="border-b border-[#1E172D]/10 bg-white">
        <div className="mx-auto flex max-w-[960px] items-center justify-between gap-4 px-6 py-4">
          <Link href="/espace" className="font-extrabold tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Accélération IA 360 <span className="text-[#A68AFF]">· Espace cohorte</span>
          </Link>
          {member && (
            <form action={logout} className="flex items-center gap-3 text-sm">
              <span className="hidden text-[#1E172D]/60 sm:inline">{member.name}</span>
              <button className="rounded-lg border border-[#1E172D]/15 px-3 py-1.5 font-semibold hover:bg-[#F6F1EB]">
                Se déconnecter
              </button>
            </form>
          )}
        </div>
      </header>
      <main className="mx-auto max-w-[960px] px-6 py-10 md:py-14">{children}</main>
    </div>
  )
}
