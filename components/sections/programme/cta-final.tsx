'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'

export function ProgrammeCtaFinal() {
  return (
    <section className="bg-[#1E172D] py-20 md:py-24 relative overflow-hidden" id="cta-final">
      {/* Aurora background */}
      <div className="absolute inset-0 pointer-events-none aurora-bg opacity-50" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 30% 20%, rgba(166,138,255,0.18) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(255,255,171,0.10) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-[1140px] mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFAB]/15 text-[#FFFFAB] text-xs font-bold uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Prochaine cohorte — Places limitées
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold text-[#F6F1EB] leading-[1.1] tracking-tight mb-5 max-w-[820px] mx-auto"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Prêt à transformer votre façon de travailler avec{' '}
            <span className="text-[#A68AFF]">l&apos;IA&nbsp;?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#F6F1EB]/65 text-base md:text-lg max-w-[620px] mx-auto leading-relaxed"
          >
            6 semaines pour passer de &ldquo;j&apos;ai testé ChatGPT&rdquo; à un système IA
            opérationnel pour votre activité.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10"
          >
            <motion.a
              href="/#pricing"
              whileHover={{ scale: 1.04, boxShadow: '0 16px 40px rgba(255,255,171,0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FFFFAB] text-[#1E172D] font-bold text-base cursor-pointer shimmer-hover"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Rejoindre la prochaine cohorte
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>

            <motion.a
              href="/programme-entrepreneurs-augmentes.pdf"
              download
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-[#F6F1EB]/20 bg-[#F6F1EB]/5 text-[#F6F1EB] font-semibold text-sm cursor-pointer hover:bg-[#F6F1EB]/10 transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Télécharger le programme PDF
            </motion.a>
          </motion.div>

          {/* Mini-reassurance */}
          <motion.p
            variants={fadeUp}
            className="text-[#F6F1EB]/45 text-xs mt-8"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Éligible OPCO · Paiement en 3x ou 4x sans frais · Garantie satisfait ou remboursé
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
