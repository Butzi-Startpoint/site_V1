'use client'

import { useState, type FormEvent } from 'react'
import { cn } from '@/lib/utils'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/**
 * Bouton qui ouvre une pop-up demandant prénom + email pour recevoir
 * le programme complet (certifié Qualiopi).
 * Déclenche l'envoi de 2 emails via /api/programme-lead :
 *  - notification à Butzi
 *  - auto-réponse au demandeur avec lien programme + Calendly
 */
export function ProgramEmailButton({
  label = 'Recevoir le programme complet',
  className,
}: {
  label?: string
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const canSubmit = firstName.trim().length >= 2 && isValidEmail(email)

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!canSubmit) return
    setSending(true)
    setError(null)
    try {
      const res = await fetch('/api/programme-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: firstName.trim(), email: email.trim() }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Échec de l\'envoi')
      }
      setSent(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          'inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1E172D] text-[#FFFFAB] font-bold text-sm hover:bg-[#2a1f3d] transition-colors cursor-pointer',
          className,
        )}
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {label}
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1E172D]/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-md bg-white rounded-3xl p-7 md:p-9 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="absolute top-3 right-3 w-9 h-9 rounded-full text-[#1E172D]/50 hover:bg-[#1E172D]/5 hover:text-[#1E172D] flex items-center justify-center transition-colors cursor-pointer"
            >
              ✕
            </button>

            {sent ? (
              <div className="text-center py-4">
                <h3
                  className="text-2xl font-extrabold text-[#1E172D] mb-2 tracking-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  C&apos;est envoyé&nbsp;! 🎉
                </h3>
                <p className="text-[#1E172D]/65 text-sm leading-relaxed">
                  Le programme complet certifié Qualiopi arrive dans votre boîte mail,
                  avec une proposition de RDV 15 min pour en discuter.
                </p>
                <p className="text-[#1E172D]/55 text-xs leading-relaxed mt-3 italic">
                  Pensez à vérifier vos spams au cas où.
                </p>
              </div>
            ) : (
              <>
                <h3
                  className="text-2xl font-extrabold text-[#1E172D] mb-2 tracking-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Recevez le programme complet
                </h3>
                <p className="text-[#1E172D]/60 text-sm leading-relaxed mb-5">
                  Laissez vos coordonnées&nbsp;: on vous envoie le programme détaillé
                  &nbsp;Accélération&nbsp;IA&nbsp;360, certifié Qualiopi.
                </p>
                <form onSubmit={submit} className="space-y-3">
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Votre prénom"
                    autoComplete="given-name"
                    className="w-full px-5 py-3.5 rounded-2xl border-2 border-[#1E172D]/12 bg-white text-[#1E172D] text-base font-medium focus:outline-none focus:border-[#A68AFF] transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                  />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="prenom@votreentreprise.fr"
                    autoComplete="email"
                    className="w-full px-5 py-3.5 rounded-2xl border-2 border-[#1E172D]/12 bg-white text-[#1E172D] text-base font-medium focus:outline-none focus:border-[#A68AFF] transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                  />
                  {error && (
                    <p className="text-sm text-red-600 leading-relaxed">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={!canSubmit || sending}
                    className="w-full inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-[#1E172D] text-[#FFFFAB] font-bold text-sm hover:bg-[#2a1f3d] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {sending ? 'Envoi…' : 'Recevoir le programme →'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}
