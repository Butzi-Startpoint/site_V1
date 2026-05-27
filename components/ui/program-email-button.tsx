'use client'

import { useState, type FormEvent } from 'react'
import { cn } from '@/lib/utils'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
function encodeForm(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')
}

/**
 * Bouton qui ouvre une pop-up demandant l'email pour recevoir
 * le programme complet (certifié Qualiopi).
 */
export function ProgramEmailButton({
  label = 'Recevoir le programme complet',
  className,
}: {
  label?: string
  className?: string
}) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!isValidEmail(email)) return
    setSending(true)
    const payload = { 'form-name': 'programme-leads', email }
    try {
      localStorage.setItem('programme-lead', JSON.stringify({ ...payload, ts: Date.now() }))
    } catch {}
    try {
      await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm(payload),
      })
    } catch {}
    setSending(false)
    setSent(true)
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
                  Le programme complet certifié Qualiopi arrive dans votre boîte mail.
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
                  Laissez votre email : on vous envoie le programme détaillé
                  &nbsp;Accélération&nbsp;IA&nbsp;360, certifié Qualiopi.
                </p>
                <form onSubmit={submit} className="space-y-3">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="prenom@votreentreprise.fr"
                    className="w-full px-5 py-3.5 rounded-2xl border-2 border-[#1E172D]/12 bg-white text-[#1E172D] text-base font-medium focus:outline-none focus:border-[#A68AFF] transition-colors"
                    style={{ fontFamily: 'var(--font-display)' }}
                  />
                  <button
                    type="submit"
                    disabled={!isValidEmail(email) || sending}
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
