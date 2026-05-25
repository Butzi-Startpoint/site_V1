'use client'

import { motion } from 'framer-motion'

type Props = {
  label: string
  selected?: boolean
  onClick: () => void
}

export function OptionButton({ label, selected = false, onClick }: Props) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      className={`w-full text-left px-5 py-4 rounded-2xl border-2 transition-colors cursor-pointer ${
        selected
          ? 'bg-[#1E172D] border-[#1E172D] text-[#F6F1EB]'
          : 'bg-white border-[#1E172D]/12 text-[#1E172D] hover:border-[#A68AFF] hover:bg-[#A68AFF]/5'
      }`}
      style={{ fontFamily: 'var(--font-display)' }}
    >
      <span className="font-semibold text-base leading-snug">{label}</span>
    </motion.button>
  )
}
