import Link from 'next/link'
import { COHORT } from '@/lib/cohort'
import { MODULES, START_HERE } from '@/lib/espace/content'
import { getMember } from '@/lib/espace/session'
import { LoginForm } from './login-form'

const display = { fontFamily: 'var(--font-display)' }

export default async function EspacePage() {
  const member = await getMember()

  if (!member) {
    return (
      <div className="mx-auto max-w-[420px] rounded-2xl border border-[#1E172D]/10 bg-white p-7 shadow-sm md:p-9">
        <h1 className="mb-1 text-2xl font-extrabold tracking-tight" style={display}>
          Connexion
        </h1>
        <p className="mb-6 text-sm text-[#1E172D]/60">Espace réservé aux participants de la {COHORT.name.toLowerCase()}.</p>
        <LoginForm />
      </div>
    )
  }

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl" style={display}>
          Bonjour {member.name}
        </h1>
        <p className="mt-2 text-[#1E172D]/60">{COHORT.name} : tes ressources et les replays de chaque session.</p>
      </div>

      <section>
        <h2 className="mb-4 text-xl font-extrabold" style={display}>
          Pour commencer
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {START_HERE.map((r) => (
            <a
              key={r.href}
              href={r.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-[#1E172D]/10 bg-white p-5 transition hover:-translate-y-0.5 hover:border-[#A68AFF] hover:shadow-md"
            >
              <p className="font-bold leading-snug" style={display}>
                {r.label} <span className="text-[#A68AFF] transition group-hover:translate-x-0.5">→</span>
              </p>
              {r.description && <p className="mt-1.5 text-sm text-[#1E172D]/60">{r.description}</p>}
            </a>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-extrabold" style={display}>
          Replays et ressources par session
        </h2>
        <ul className="space-y-3">
          {MODULES.map((m) => (
            <li key={m.slug}>
              <Link
                href={`/espace/modules/${m.slug}`}
                className="flex items-center gap-4 rounded-2xl border border-[#1E172D]/10 bg-white p-4 transition hover:border-[#A68AFF] hover:shadow-md md:p-5"
              >
                <span
                  className="flex h-10 w-10 flex-none items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{ ...display, background: 'linear-gradient(145deg, #3A2860 0%, #A68AFF 100%)' }}
                >
                  {m.n}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-bold" style={display}>
                    Module {m.n} : {m.title}
                  </span>
                  <span className="block truncate text-sm text-[#1E172D]/60">
                    Semaine {m.n + 1} · {m.date}
                  </span>
                </span>
                <span
                  className={`flex-none rounded-full px-3 py-1 text-xs font-bold ${
                    m.replay ? 'bg-[#FFFFAB] text-[#1E172D]' : 'bg-[#1E172D]/5 text-[#1E172D]/50'
                  }`}
                >
                  {m.replay ? 'Replay dispo' : 'À venir'}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
