'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'

export function ProgrammeHero() {
  return (
    <section className="relative bg-[#F6F1EB] pt-16 pb-12 md:pt-20 md:pb-16 overflow-hidden">
      {/* Décoration douce */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50"
        style={{
          background:
            'radial-gradient(ellipse at 80% 0%, rgba(166,138,255,0.15) 0%, transparent 60%), radial-gradient(ellipse at 0% 100%, rgba(255,255,171,0.18) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-[1140px] mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-[820px]"
        >
          {/* Fil d'Ariane */}
          <motion.nav variants={fadeUp} aria-label="Fil d'Ariane" className="mb-6">
            <ol className="flex items-center gap-2 text-xs font-medium text-[#1E172D]/55"
              style={{ fontFamily: 'var(--font-display)' }}>
              <li>
                <Link href="/" className="hover:text-[#A68AFF] transition-colors">
                  Accueil
                </Link>
              </li>
              <li aria-hidden className="text-[#1E172D]/30">/</li>
              <li className="text-[#1E172D]/85">Programme détaillé</li>
            </ol>
          </motion.nav>

          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFAB] text-[#1E172D] text-xs font-bold uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Programme officiel · Qualiopi
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold text-[#1E172D] leading-[1.05] tracking-tight mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Programme détaillé —{' '}
            <span className="text-[#A68AFF]">Méthode 3S</span> de Butzi
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-[#1E172D]/65 text-lg md:text-xl leading-relaxed max-w-[680px]"
          >
            Tous les modules, les modalités d&apos;évaluation, les prérequis et les conditions
            d&apos;accès à la formation <strong className="text-[#1E172D]">Entrepreneurs Augmentés</strong>.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10"
          >
            {[
              { val: '6', label: 'Semaines' },
              { val: '7', label: 'Modules' },
              { val: '21h', label: 'De formation' },
              { val: 'Qualiopi', label: 'Certifié' },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-white rounded-xl border border-[#1E172D]/8 px-4 py-3"
              >
                <div
                  className="text-2xl font-extrabold text-[#1E172D]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {s.val}
                </div>
                <div className="text-xs text-[#1E172D]/55 uppercase tracking-wider font-semibold mt-0.5"
                  style={{ fontFamily: 'var(--font-display)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
