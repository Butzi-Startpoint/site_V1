import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MODULES } from '@/lib/espace/content'
import { getMember } from '@/lib/espace/session'
import { CopyButton } from '../../copy-button'

const display = { fontFamily: 'var(--font-display)' }

export default async function ModulePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const member = await getMember()
  if (!member) notFound()
  const m = MODULES.find((x) => x.slug === slug)
  if (!m) notFound()

  return (
    <article className="space-y-10">
      <div>
        <Link href="/espace" className="text-sm font-semibold text-[#1E172D]/60 hover:text-[#1E172D]">
          ← Retour à l’espace
        </Link>
        <p className="mt-5 text-xs font-bold uppercase tracking-widest text-[#A68AFF]">
          {m.n > 0 && `Module ${m.n} · `}Semaine {m.n + 1} · {m.date}
        </p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight md:text-4xl" style={display}>
          {m.title}
        </h1>
        <p className="mt-2 text-[#1E172D]/60">{m.hint}</p>
        <p className="mt-2 text-sm">
          <strong className="font-semibold">Livrable :</strong> {m.livrable}
        </p>
      </div>

      <section className="rounded-2xl border border-[#1E172D]/10 bg-white p-6">
        <h2 className="mb-3 text-lg font-extrabold" style={display}>
          Replay
        </h2>
        {m.replay ? (
          <a
            href={m.replay}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-xl bg-[#1E172D] px-5 py-3 font-semibold text-[#F6F1EB] hover:bg-[#2c2342]"
            style={display}
          >
            Regarder le replay →
          </a>
        ) : (
          <p className="text-[#1E172D]/60">Le replay sera disponible après la session.</p>
        )}
      </section>

      {m.recap && (
        <section>
          <h2 className="mb-3 text-lg font-extrabold" style={display}>
            Récap
          </h2>
          <div className="space-y-3 leading-relaxed">
            {m.recap.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      )}

      {m.prompts && (
        <section>
          <h2 className="mb-3 text-lg font-extrabold" style={display}>
            Prompts
          </h2>
          <div className="space-y-4">
            {m.prompts.map((p) => (
              <div key={p.title} className="rounded-2xl border border-[#1E172D]/10 bg-white p-5">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="font-bold" style={display}>
                    {p.title}
                  </h3>
                  <CopyButton text={p.text} />
                </div>
                <pre className="whitespace-pre-wrap rounded-xl bg-[#F6F1EB] p-4 text-sm leading-relaxed">{p.text}</pre>
              </div>
            ))}
          </div>
        </section>
      )}

      {m.resources && (
        <section>
          <h2 className="mb-3 text-lg font-extrabold" style={display}>
            Templates et ressources
          </h2>
          <ul className="space-y-2">
            {m.resources.map((r) => (
              <li key={r.href}>
                <a
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline decoration-[#A68AFF] underline-offset-4 hover:text-[#7C5CE0]"
                >
                  {r.label}
                </a>
                {r.description && <span className="text-[#1E172D]/60"> : {r.description}</span>}
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}
