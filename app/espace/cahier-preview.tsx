import Link from 'next/link'
import type { Cahier } from '@/lib/espace/cahiers'

const display = { fontFamily: 'var(--font-display)' }

/* Aperçu de la première page du cahier, dans la page de la semaine. */
export function CahierPreview({ cahier }: { cahier: Cahier }) {
  const href = `/espace/cahiers/${cahier.slug}`
  const first = cahier.blocks.find((b) => b.type === 'keypoints')
  return (
    <section>
      <h2 className="mb-3 text-lg font-extrabold" style={display}>
        Cahier d&apos;exercices
      </h2>
      <div className="grid gap-6 rounded-2xl border border-[#1E172D]/10 bg-white p-5 shadow-sm md:grid-cols-[220px_1fr] md:p-6">
        <Link
          href={href}
          aria-label="Ouvrir le cahier d'exercices"
          className="group mx-auto block w-full max-w-[220px] overflow-hidden rounded-md border border-[#1E172D]/15 bg-white shadow-[0_18px_40px_-24px_rgba(30,23,45,0.55)] transition group-hover:shadow-lg hover:-translate-y-0.5"
        >
          <div className="bg-[#1E172D] px-3 pb-3 pt-3">
            <p className="text-[7px] font-bold uppercase tracking-widest text-[#A68AFF]">Accélération IA 360 · Cahier</p>
            <p className="mt-1.5 text-lg font-extrabold leading-none text-[#FFFFAB]" style={display}>
              Semaine {cahier.week}
            </p>
            <p className="mt-1 text-[8px] font-bold leading-tight text-[#F6F1EB]">{cahier.title}</p>
          </div>
          <div className="space-y-2.5 px-3 py-3">
            <div className="h-1.5 w-1/3 rounded-full bg-[#6F4FD1]/70" />
            {first?.type === 'keypoints' &&
              first.points.map((p) => (
                <div key={p} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 flex-none rounded-full bg-[#A68AFF]" />
                  <span className="truncate text-[7px] text-[#1E172D]/80">{p}</span>
                </div>
              ))}
            <div className="space-y-2 pt-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-px bg-[#D8D0FF]" />
              ))}
            </div>
            <div className="h-1.5 w-2/5 rounded-full bg-[#6F4FD1]/70" />
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="h-2 w-2 flex-none rounded-[2px] border border-[#1E172D]/60" />
                <span className="h-1 flex-1 rounded-full bg-[#1E172D]/10" />
              </div>
            ))}
          </div>
        </Link>

        <div className="flex min-w-0 flex-col">
          <p className="text-sm text-[#1E172D]/65">{cahier.teaser}</p>
          <ul className="mt-4 grid gap-x-4 gap-y-1.5 text-sm sm:grid-cols-2">
            {cahier.blocks.map((b) => (
              <li key={b.id} className="flex gap-2">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#A68AFF]" />
                <span>{b.title}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-[#1E172D]/50">À remplir en ligne, ou à télécharger en PDF pour écrire à la main.</p>
          <div className="mt-auto pt-5">
            <Link
              href={href}
              className="inline-block rounded-xl bg-[#1E172D] px-5 py-3 font-semibold text-[#F6F1EB] transition hover:bg-[#2c2342]"
              style={display}
            >
              Ouvrir le cahier →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
