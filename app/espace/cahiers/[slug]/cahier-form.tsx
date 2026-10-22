'use client'

import Link from 'next/link'
import { useCallback, useEffect, useRef, useState } from 'react'
import { downloadCahierPdf, type CahierValues } from '@/lib/espace/cahier-pdf'
import type { Cahier, Field, RecapSection } from '@/lib/espace/cahiers'

const display = { fontFamily: 'var(--font-display)' }
const input =
  'w-full rounded-xl border border-[#1E172D]/15 bg-white px-4 py-3 text-[15px] text-[#1E172D] outline-none transition focus:border-[#A68AFF] focus:ring-2 focus:ring-[#A68AFF]/30'

const EMPTY: CahierValues = { text: {}, checks: {} }

export function CahierForm({ cahier, memberId, memberName }: { cahier: Cahier; memberId: string; memberName: string }) {
  const key = `cahier:${memberId}:${cahier.slug}`
  const [values, setValues] = useState<CahierValues>(EMPTY)
  const [ready, setReady] = useState(false)
  const [saved, setSaved] = useState(false)
  const [busy, setBusy] = useState(false)
  const [confirmReset, setConfirmReset] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    // Lecture du stockage local après l'hydratation (évite un écart serveur/navigateur).
    const t = setTimeout(() => {
      try {
        const raw = localStorage.getItem(key)
        if (raw) setValues({ ...EMPTY, ...JSON.parse(raw) })
      } catch {}
      setReady(true)
    }, 0)
    return () => clearTimeout(t)
  }, [key])

  const persist = useCallback(
    (next: CahierValues) => {
      setValues(next)
      setSaved(false)
      if (timer.current) clearTimeout(timer.current)
      timer.current = setTimeout(() => {
        try {
          localStorage.setItem(key, JSON.stringify(next))
          setSaved(true)
        } catch {}
      }, 400)
    },
    [key],
  )

  const setText = (id: string, v: string) => persist({ ...values, text: { ...values.text, [id]: v } })
  const setCheck = (id: string, v: boolean) => persist({ ...values, checks: { ...values.checks, [id]: v } })

  async function pdf() {
    setBusy(true)
    try {
      await downloadCahierPdf(cahier, values, memberName)
    } finally {
      setBusy(false)
    }
  }

  function reset() {
    try {
      localStorage.removeItem(key)
    } catch {}
    setValues(EMPTY)
    setConfirmReset(false)
    setSaved(false)
  }

  function area(f: Field) {
    return (
      <label key={f.id} className="block text-sm font-semibold leading-snug">
        {f.label}
        <textarea
          rows={f.lines ?? 3}
          value={values.text[f.id] ?? ''}
          onChange={(e) => setText(f.id, e.target.value)}
          placeholder={f.placeholder}
          disabled={!ready}
          className={`${input} mt-2 resize-y font-normal`}
        />
      </label>
    )
  }

  return (
    <div className="space-y-8">
      <div className="sticky top-0 z-10 -mx-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#1E172D]/10 bg-[#F6F1EB]/95 px-6 py-3 backdrop-blur">
        <Link href="/espace/modules/module-0" className="text-sm font-semibold text-[#1E172D]/60 hover:text-[#1E172D]">
          ← Semaine {cahier.week}
        </Link>
        <div className="flex items-center gap-3">
          <span className="hidden text-xs text-[#1E172D]/50 sm:inline" aria-live="polite">
            {saved ? 'Enregistré sur cet appareil' : ''}
          </span>
          <button
            type="button"
            onClick={pdf}
            disabled={busy}
            className="rounded-xl bg-[#1E172D] px-4 py-2.5 text-sm font-semibold text-[#F6F1EB] transition hover:bg-[#2c2342] disabled:opacity-60"
            style={display}
          >
            {busy ? 'Création du PDF…' : 'Télécharger en PDF'}
          </button>
        </div>
      </div>

      <header>
        <p className="text-xs font-bold uppercase tracking-widest text-[#6F4FD1]">Cahier d&apos;exercices · Semaine {cahier.week}</p>
        <h1 className="mt-1 text-3xl font-extrabold tracking-tight md:text-4xl" style={display}>
          {cahier.title}
        </h1>
        <p className="mt-3 max-w-[62ch] text-[#1E172D]/65">{cahier.intro}</p>
        <p className="mt-2 text-xs text-[#1E172D]/50">
          Vos réponses restent sur cet appareil et ne sont envoyées à personne. Le PDF contient ce que vous avez écrit, ou des lignes
          vides à remplir à la main.
        </p>
      </header>

      {cahier.blocks.map((b) => (
        <section key={b.id} className="rounded-2xl border border-[#1E172D]/10 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-extrabold" style={display}>
            {b.title}
          </h2>
          {'intro' in b && b.intro && <p className="mt-1.5 text-sm text-[#1E172D]/60">{b.intro}</p>}

          {b.type === 'keypoints' && (
            <ul className="mt-4 space-y-2">
              {b.points.map((p) => (
                <li key={p} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[#A68AFF]" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          )}

          {b.type === 'fields' && <div className="mt-4 space-y-4">{b.fields.map(area)}</div>}

          {b.type === 'checklist' && (
            <ul className="mt-4 space-y-2.5">
              {b.items.map((it) => (
                <li key={it.id}>
                  <label className="flex cursor-pointer items-start gap-3">
                    <input
                      type="checkbox"
                      checked={!!values.checks[it.id]}
                      onChange={(e) => setCheck(it.id, e.target.checked)}
                      className="mt-1 h-4 w-4 flex-none accent-[#6F4FD1]"
                    />
                    <span>{it.label}</span>
                  </label>
                </li>
              ))}
            </ul>
          )}

          {b.type === 'recap' && (
            <div className="mt-5 space-y-6">
              {b.sections.map((sec) => (
                <Recap key={sec.title} sec={sec} />
              ))}
            </div>
          )}

          {b.type === 'prompt' && <PromptBlock b={b} values={values} setText={setText} area={area} ready={ready} />}
        </section>
      ))}

      <div className="flex flex-wrap items-center justify-between gap-3 pb-6">
        <button
          type="button"
          onClick={pdf}
          disabled={busy}
          className="rounded-xl bg-[#1E172D] px-5 py-3 font-semibold text-[#F6F1EB] transition hover:bg-[#2c2342] disabled:opacity-60"
          style={display}
        >
          {busy ? 'Création du PDF…' : 'Télécharger en PDF'}
        </button>
        {confirmReset ? (
          <span className="flex items-center gap-2 text-sm">
            Effacer toutes mes réponses ?
            <button onClick={reset} className="rounded-lg bg-red-700 px-3 py-1.5 font-semibold text-white">
              Oui, effacer
            </button>
            <button onClick={() => setConfirmReset(false)} className="rounded-lg border border-[#1E172D]/15 px-3 py-1.5 font-semibold">
              Annuler
            </button>
          </span>
        ) : (
          <button onClick={() => setConfirmReset(true)} className="text-sm font-semibold text-[#1E172D]/50 hover:text-[#1E172D]">
            Effacer mes réponses
          </button>
        )}
      </div>
    </div>
  )
}

function PromptBlock({
  b,
  values,
  setText,
  area,
  ready,
}: {
  b: Extract<Cahier['blocks'][number], { type: 'prompt' }>
  values: CahierValues
  setText: (id: string, v: string) => void
  area: (f: Field) => React.ReactNode
  ready: boolean
}) {
  const [copied, setCopied] = useState(false)
  const metier = b.personalize ? (values.text[b.personalize.id] ?? '').trim() : ''
  const prompt = b.personalize && metier ? b.prompt.replace(b.personalize.token, metier) : b.prompt

  async function copy() {
    try {
      await navigator.clipboard.writeText(prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {}
  }

  return (
    <div className="mt-4 space-y-4">
      {b.personalize && (
        <label className="block text-sm font-semibold">
          {b.personalize.label}
          <input
            type="text"
            value={values.text[b.personalize.id] ?? ''}
            onChange={(e) => setText(b.personalize!.id, e.target.value)}
            placeholder={b.personalize.placeholder}
            disabled={!ready}
            className={`${input} mt-2 font-normal`}
          />
        </label>
      )}
      <div className="rounded-xl border-l-4 border-[#A68AFF] bg-[#F6F1EB] p-4">
        <div className="mb-2 flex items-center justify-between gap-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#6F4FD1]">Prompt</span>
          <button
            type="button"
            onClick={copy}
            className="rounded-lg bg-[#1E172D] px-3 py-1.5 text-xs font-semibold text-[#F6F1EB] hover:bg-[#2c2342]"
          >
            {copied ? 'Copié' : 'Copier'}
          </button>
        </div>
        <p className="whitespace-pre-wrap text-sm italic leading-relaxed">{prompt}</p>
      </div>
      {b.answers.map(area)}
    </div>
  )
}

const SHADES = ['#F1EDFF', '#E4DCFF', '#D8D0FF', '#C7B9FF', '#B7A4FF']

function Nest({ levels, depth = 0 }: { levels: string[]; depth?: number }) {
  const [label, ...rest] = levels
  return (
    <div className="rounded-xl p-3" style={{ background: SHADES[Math.min(depth, SHADES.length - 1)] }}>
      <p className="text-sm font-bold" style={display}>
        {label}
      </p>
      {rest.length > 0 && (
        <div className="mt-2">
          <Nest levels={rest} depth={depth + 1} />
        </div>
      )}
    </div>
  )
}

function Recap({ sec }: { sec: RecapSection }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-[#6F4FD1]">{sec.title}</h3>
      {sec.text && <p className="mt-2 max-w-[68ch] leading-relaxed">{sec.text}</p>}
      {sec.items && (
        <div className="mt-3 flex flex-wrap gap-2">
          {sec.items.map((i) => (
            <span key={i} className="rounded-full bg-[#FFFFAB] px-3 py-1.5 text-sm font-semibold">
              {i}
            </span>
          ))}
        </div>
      )}
      {sec.levels && (
        <div className="mt-3 max-w-[480px]">
          <Nest levels={sec.levels} />
        </div>
      )}
      {sec.compare && (
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {sec.compare.map((c) => (
            <div key={c.title} className="rounded-xl border-l-4 border-[#A68AFF] bg-[#F6F1EB] p-4">
              <p className="font-bold" style={display}>
                {c.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[#1E172D]/75">{c.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
