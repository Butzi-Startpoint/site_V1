'use client'

import { useEffect, useRef, type KeyboardEvent as ReactKeyboardEvent } from 'react'
import { createPortal } from 'react-dom'

/* ── Modale d'aiguillage avant réservation ──
   Un acheteur professionnel peut payer en ligne immédiatement ; un particulier
   relève d'un autre régime légal (10 jours de rétractation, aucun encaissement
   possible avant), incompatible avec un checkout. La modale aiguille sans rien
   collecter : le SIRET est demandé plus loin, sur le bon de commande. */

type ReservationModalProps = {
  open: boolean
  onClose: () => void
  offerName: string
  checkoutUrl: string
  calendlyUrl: string
}

function withUtmContent(url: string, offerName: string) {
  const sep = url.includes('?') ? '&' : '?'
  return `${url}${sep}utm_content=${encodeURIComponent(offerName.toLowerCase())}`
}

export function ReservationModal({
  open,
  onClose,
  offerName,
  checkoutUrl,
  calendlyUrl,
}: ReservationModalProps) {
  const panelRef = useRef<HTMLDivElement>(null)
  const firstCardRef = useRef<HTMLButtonElement>(null)

  /* Focus initial sur la carte 1, restitution au bouton d'origine à la
     fermeture, scroll du body bloqué tant que la modale est ouverte. */
  useEffect(() => {
    if (!open) return
    const previouslyFocused = document.activeElement as HTMLElement | null
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    firstCardRef.current?.focus()
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

  const goTo = (url: string) => {
    window.location.assign(url)
  }

  /* Portal vers <body> : les cartes d'offres portent des transforms
     (framer-motion) qui feraient sinon du fixed un positionnement local. */
  return createPortal(
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-[#1E172D]/70 backdrop-blur-sm"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-modal-title"
    >
      {/* Wrapper scrollable : la molette fonctionne partout, la modale se
         centre quand elle tient à l'écran et défile sinon. */}
      <div className="min-h-full flex items-center justify-center p-4">
      <div
        ref={panelRef}
        className="relative w-full max-w-lg bg-white rounded-3xl p-6 md:p-9 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-3 right-3 w-9 h-9 rounded-full text-[#1E172D]/50 hover:bg-[#1E172D]/5 hover:text-[#1E172D] flex items-center justify-center transition-colors cursor-pointer"
        >
          ✕
        </button>

        <h3
          id="reservation-modal-title"
          className="text-2xl font-extrabold text-[#1E172D] mb-2 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Avant de réserver, une question
        </h3>
        <p className="text-[#1E172D]/60 text-sm leading-relaxed mb-6">
          Votre situation détermine les modalités d&apos;inscription et de financement.
        </p>

        <div className="space-y-3">
          {/* Carte 1 : entreprise, chemin principal */}
          <button
            ref={firstCardRef}
            type="button"
            onClick={() => goTo(checkoutUrl)}
            className="w-full text-left rounded-2xl border-2 border-[#A68AFF] bg-[#A68AFF]/8 hover:bg-[#A68AFF]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A68AFF] focus-visible:ring-offset-2 transition-colors cursor-pointer p-5"
          >
            <span
              className="block text-base font-extrabold text-[#1E172D] tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Je représente une entreprise
            </span>
            <span className="block text-[13px] text-[#1E172D]/65 leading-relaxed mt-1">
              Indépendant, freelance, micro-entrepreneur, profession libérale, gérant de
              société. Vous avez un numéro SIRET.
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#A68AFF] mt-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Accéder à la réservation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </button>

          {/* Carte 2 : particulier, chemin secondaire */}
          <button
            type="button"
            onClick={() => goTo(withUtmContent(calendlyUrl, offerName))}
            className="w-full text-left rounded-2xl border-2 border-[#1E172D]/12 bg-white hover:bg-[#1E172D]/[0.03] hover:border-[#1E172D]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A68AFF] focus-visible:ring-offset-2 transition-colors cursor-pointer p-5"
          >
            <span
              className="block text-base font-bold text-[#1E172D] tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Je suis un particulier
            </span>
            <span className="block text-[13px] text-[#1E172D]/65 leading-relaxed mt-1">
              Salarié, en recherche d&apos;emploi, en reconversion. Vous n&apos;avez pas de
              numéro SIRET.
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1E172D]/70 mt-3"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Prendre rendez-vous
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </button>
        </div>

        <p className="text-[#1E172D]/45 text-xs leading-relaxed mt-4">
          Cette formation est destinée aux professionnels. Si vous êtes particulier, un
          échange préalable est nécessaire pour étudier votre situation.
        </p>
      </div>
      </div>
    </div>,
    document.body,
  )
}
