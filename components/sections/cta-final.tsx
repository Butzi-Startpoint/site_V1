'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import { CtaChevronButton } from '@/components/ui/cta-chevron-button'

export function CtaFinal() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30])

  return (
    <section ref={ref} className="aurora-bg py-24 md:py-32 relative overflow-hidden">
      {/* Parallax orb 1 */}
      <motion.div
        style={{ y, background: 'radial-gradient(circle, rgba(166,138,255,0.25) 0%, transparent 65%)' }}
        className="pointer-events-none absolute -top-20 -left-20 w-96 h-96 rounded-full"
        animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Parallax orb 2 */}
      <motion.div
        className="pointer-events-none absolute -bottom-20 -right-20 w-80 h-80 rounded-full"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          background: 'radial-gradient(circle, rgba(216,208,255,0.2) 0%, transparent 65%)',
        }}
      />

      {/* Top separator glow */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A68AFF]/40 to-transparent" />

      <div className="relative z-10 max-w-[1140px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A68AFF]/15 border border-[#A68AFF]/30 text-[#D8D0FF] text-xs font-bold uppercase tracking-widest mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-[#A68AFF]"
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            Prochaine cohorte : 23 septembre 2026. 6 places restantes
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#F6F1EB] leading-[1.12] tracking-tight mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Prochaine cohorte : 23 septembre 2026.{' '}
            <br />
            <span className="text-[#A68AFF]">6 places restantes.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#F6F1EB]/50 text-lg leading-relaxed mb-10"
          >
            Les places sont limitées à 10 pour garantir la qualité de l&apos;accompagnement.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href="#pricing"
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px rgba(255,255,171,0.3)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#FFFFAB] text-[#1E172D] font-bold text-base cursor-pointer shimmer-hover"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Choisir mon offre
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </motion.a>

            <CtaChevronButton
              as="a"
              href="https://calendly.com/butzi/15-minutes-call-catch-up"
              target="_blank"
              rel="noopener noreferrer"
              tone="cream-outline"
              size="lg"
            >
              Réserver un appel gratuit
            </CtaChevronButton>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-6 mt-12"
          >
            {['Formation certifiée Qualiopi', 'Jusqu\'à 10 personnes par cohorte', 'Garantie résultat'].map((badge) => (
              <span
                key={badge}
                className="flex items-center gap-2 text-[#F6F1EB]/40 text-xs font-medium"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span className="w-1 h-1 rounded-full bg-[#A68AFF]/60" />
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
