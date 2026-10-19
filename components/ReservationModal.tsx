'use client'

import { useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { createPortal } from 'react-dom'

/* ── Modale de réservation ──
   Inscriptions fermées pour la cohorte en cours : la modale n'aiguille plus
   vers le checkout (systeme.io) ni vers Calendly. Elle informe simplement que
   les inscriptions sont terminées et invite à nous écrire. Les props checkoutUrl
   / calendlyUrl / offerName restent dans le type pour ne pas casser les appelants,
   mais ne sont plus utilisées. */

const CONTACT_EMAIL = 'hello@startpoint-ia.fr'

type ReservationModalProps = {
  open: boolean
  onClose: () => void
  offerName: string
  checkoutUrl: string
  calendlyUrl: string
}

export function ReservationModal({ open, onClose }: ReservationModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtnRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      previouslyFocused?.focus()
    }
  }, [open])

  if (!open) return null

  const handleKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') {
      e.stopPropagation()
      onClose()
      return
    }
    if (e.key !== 'Tab' || !panelRef.current) return
    const focusables = Array.from(
      panelRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((el) => !el.hasAttribute('disabled'))
    if (focusables.length === 0) return
    const first = focusables[0]
    const last = focusables[focusables.length - 1]
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-[#1E172D]/70 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-modal-title"
    >
      <div className="min-h-full flex items-center justify-center p-4">
      <div
        ref={panelRef}
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 md:p-9 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-3 right-3 w-9 h-9 rounded-full text-[#1E172D]/50 hover:bg-[#1E172D]/5 hover:text-[#1E172D] flex items-center justify-center transition-colors cursor-pointer"
        >
          ✕
        </button>

        <h3
          id="reservation-modal-title"
          className="text-2xl font-extrabold text-[#1E172D] mb-3 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Les inscriptions pour cette cohorte sont terminées
        </h3>
        <p className="text-[#1E172D]/70 text-[15px] leading-relaxed mb-6">
          Vous avez une question ou souhaitez être informé de la prochaine
          cohorte ? Écrivez-nous, on vous répond.
        </p>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center gap-2 rounded-full bg-[#A68AFF] hover:bg-[#9070ee] text-white font-bold px-6 py-3 transition-colors"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Nous écrire
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </a>

        <p className="text-[#1E172D]/45 text-xs leading-relaxed mt-5">
          {CONTACT_EMAIL}
        </p>
      </div>
      </div>
    </div>,
    document.body,
  )
}
