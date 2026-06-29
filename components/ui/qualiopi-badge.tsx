'use client'

import { useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

const CERT_PDF = '/qualiopi-certificat.pdf'

/* Lien "Voir le certificat" → ouvre le PDF dans une pop-up (modal).
   Par défaut affiche le texte "Voir le certificat" ; on peut passer un
   déclencheur personnalisé (ex. le logo Qualiopi) via `children`. */
export function CertLink({
  className,
  children,
  ariaLabel,
}: {
  className?: string
  children?: ReactNode
  ariaLabel?: string
}) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={ariaLabel}
        className={cn('group inline-flex items-center gap-1.5 cursor-pointer', className)}
      >
        {children ?? (
          <>
            Voir le certificat
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </>
        )}
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#1E172D]/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Certificat Qualiopi"
        >
          <div
            className="relative w-full max-w-3xl h-[85vh] bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="absolute top-3 right-3 z-10 w-9 h-9 rounded-full bg-[#1E172D] text-white flex items-center justify-center hover:bg-[#2a1f3d] transition-colors cursor-pointer"
            >
              ✕
            </button>
            <iframe src={CERT_PDF} title="Certificat Qualiopi" className="w-full h-full border-0" />
          </div>
        </div>
      )}
    </>
  )
}

type Props = {
  size?: 'md' | 'lg'
  className?: string
}

/**
 * Badge de réassurance Qualiopi : logo officiel sur fond blanc (non modifié),
 * avec à côté la mention légale obligatoire et le lien vers le certificat.
 * À utiliser sur fond clair.
 */
export function QualiopiBadge({ size = 'md', className }: Props) {
  const logoW = size === 'lg' ? 'w-[180px]' : 'w-[150px]'
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row items-center gap-5 md:gap-7',
        className,
      )}
    >
      {/* Logo officiel — fond blanc, non recoloré/détouré */}
      <div className="inline-flex flex-shrink-0 bg-white rounded-2xl p-4 md:p-5 border border-[#1E172D]/8 shadow-[0_4px_20px_rgba(30,23,45,0.06)]">
        <img
          src="/qualiopi-logo.png"
          alt="Organisme de formation certifié Qualiopi"
          className={cn(logoW, 'h-auto')}
        />
      </div>

      <div className="text-center sm:text-left max-w-[420px]">
        <p
          className={cn(
            'text-[#1E172D]/55 italic leading-relaxed',
            size === 'lg' ? 'text-sm md:text-base' : 'text-xs md:text-sm',
          )}
        >
          La certification qualité a été délivrée au titre de la catégorie d&apos;actions
          suivante&nbsp;: Actions de formation.
        </p>
        <CertLink
          className="mt-2 text-[#A68AFF] font-semibold text-sm hover:text-[#9070ee] transition-colors"
        />
      </div>
    </div>
  )
}
