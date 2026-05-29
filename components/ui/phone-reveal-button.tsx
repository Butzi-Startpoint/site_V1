'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const PHONE_DISPLAY = '+33 6 31 98 65 25'
const PHONE_TEL = 'tel:+33631986525'

/**
 * Bouton qui se transforme en numéro de téléphone (apparition en fondu) au clic.
 */
export function PhoneRevealButton({
  label = 'Appel gratuit pour toutes questions',
  className,
}: {
  label?: string
  className?: string
}) {
  const [revealed, setRevealed] = useState(false)
  const base = cn(
    'inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#1E172D] text-[#F6F1EB] font-bold text-sm hover:bg-[#2a1f3d] transition-colors cursor-pointer no-underline',
    className,
  )

  if (revealed) {
    return (
      <a href={PHONE_TEL} className={base} style={{ fontFamily: 'var(--font-tech)' }}>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          style={{ fontFamily: 'var(--font-tech)' }}
        >
          {PHONE_DISPLAY}
        </motion.span>
      </a>
    )
  }
  return (
    <button
      type="button"
      onClick={() => setRevealed(true)}
      className={base}
      style={{ fontFamily: 'var(--font-display)' }}
    >
      {label}
    </button>
  )
}
