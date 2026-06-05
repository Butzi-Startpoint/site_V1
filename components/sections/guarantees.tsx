'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'

export function Guarantees() {
  return (
    <section className="bg-[#F6F1EB] py-16 md:py-20 relative overflow-hidden" id="garanties">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A68AFF]/20 to-transparent" />

      <div className="max-w-[800px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="text-center mb-10"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFAB] text-[#1E172D] text-xs font-bold uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Garantie
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold text-[#1E172D] leading-[1.15] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Vous ne prenez{' '}
            <span className="text-[#A68AFF]">aucun risque.</span>
          </motion.h2>
        </motion.div>

        {/* Content — open layout, no box */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="max-w-[640px] mx-auto"
        >
          {/* Icon + title */}
          <motion.div variants={fadeUp} className="flex items-start gap-4 mb-5">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: 'rgba(166,138,255,0.12)' }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#A68AFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 12 11 14 15 10"/>
              </svg>
            </div>
            <h3
              className="text-xl md:text-2xl font-bold text-[#1E172D] leading-snug pt-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Garantie &ldquo;Résultat ou on continue&rdquo;
            </h3>
          </motion.div>

          {/* Text */}
          <motion.p variants={fadeUp} className="text-[#1E172D]/70 text-base md:text-lg leading-relaxed mb-6">
            Vous suivez le programme, vous faites les exercices, et après les 8 semaines vous n&apos;avez pas
            de système d&apos;IA opérationnel ? On continue ensemble gratuitement :{' '}
            <strong className="text-[#1E172D]">3 mois de Cercle StartPoint offerts + 1 session individuelle de déblocage.</strong>
          </motion.p>

          {/* Condition pill */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-3"
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl self-start"
              style={{ background: 'rgba(166,138,255,0.08)', border: '1px solid rgba(166,138,255,0.15)' }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#A68AFF] flex-shrink-0" />
              <p className="text-[#1E172D]/45 text-xs italic">
                Applicable aux offres Essentiel et Momentum · Présence à minimum 7/8 sessions + exercices rendus.
              </p>
            </div>
            <div
              className="inline-flex items-start gap-2 px-4 py-2 rounded-xl self-start"
              style={{ background: 'rgba(166,138,255,0.08)', border: '1px solid rgba(166,138,255,0.15)' }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#A68AFF] flex-shrink-0 mt-1.5" />
              <p className="text-[#1E172D]/45 text-xs italic">
                Possibilité de se faire remplacer par une personne de son entreprise en cas d&apos;indisponibilité sur une session.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
