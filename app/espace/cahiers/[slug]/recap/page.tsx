import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getCahier } from '@/lib/espace/cahiers'
import { getMember } from '@/lib/espace/session'
import { RecapView } from '../../../recap'

const display = { fontFamily: 'var(--font-display)' }

export default async function RecapPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = await getMember()
  const cahier = getCahier(slug)
  if (!member || !cahier?.recap) notFound()
  const { recap } = cahier
  return (
    <article className="space-y-8">
      <div>
        <Link href="/espace/modules/module-0" className="text-sm font-semibold text-[#1E172D]/60 hover:text-[#1E172D]">
          ← Semaine {cahier.week}
        </Link>
        <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#6F4FD1]">Semaine {cahier.week}</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight md:text-4xl" style={display}>
          {recap.title}
        </h1>
        {recap.intro && <p className="mt-2 text-[#1E172D]/60">{recap.intro}</p>}
      </div>
      <section className="rounded-2xl border border-[#1E172D]/10 bg-white p-6 shadow-sm">
        <RecapView sections={recap.sections} />
      </section>
    </article>
  )
}
