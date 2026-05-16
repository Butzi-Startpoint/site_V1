'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, scaleIn, viewport } from '@/lib/animations'
import { CtaChevronButton } from '@/components/ui/cta-chevron-button'

export function Financing() {
  return (
    <section className="bg-[#F6F1EB] py-14">
      <div className="max-w-[1140px] mx-auto px-6 flex flex-col gap-5">

        {/* Bandeau financement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          whileHover={{ boxShadow: '0 12px 36px rgba(30,23,45,0.06)' }}
          transition={{ duration: 0.2 }}
          className="bg-white rounded-2xl border border-[#1E172D]/8 px-8 py-7"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-bold uppercase tracking-widest text-[#A68AFF] mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Financement &amp; Facilités
          </motion.p>
          <motion.div
            variants={stagger}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5"
          >
            {[
              { icon: '🏛️', text: <><strong>Éligible OPCO</strong> — jusqu&apos;à <strong>2 500&nbsp;€</strong> pris en charge par votre FAF</> },
              { icon: '💳', text: <>Paiement en <strong>3x ou 4x sans frais</strong> disponible sur toutes les offres</> },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="flex items-center gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="w-12 h-12 rounded-xl bg-[#A68AFF]/10 flex items-center justify-center text-xl flex-shrink-0"
                >
                  {item.icon}
                </motion.div>
                <p className="text-[#1E172D]/75 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Encart appel dark */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          whileHover={{ boxShadow: '0 16px 48px rgba(30,23,45,0.25)' }}
          transition={{ duration: 0.2 }}
          className="bg-[#1E172D] rounded-2xl px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute right-0 top-0 bottom-0 w-64 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(166,138,255,0.12) 0%, transparent 70%)' }} />

          <div className="flex items-center gap-4 relative z-10">
            <motion.div
              whileHover={{ scale: 1.1, rotate: -5 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="w-12 h-12 rounded-xl bg-[#FFFFAB]/12 flex items-center justify-center text-2xl flex-shrink-0"
            >
              📞
            </motion.div>
            <div>
              <p className="text-[#F6F1EB] font-semibold text-base" style={{ fontFamily: 'var(--font-display)' }}>
                Besoin d&apos;en discuter avant de vous décider ?
              </p>
              <p className="text-[#F6F1EB]/45 text-sm mt-0.5">
                Réservez un appel de 15&nbsp;min pour trouver la formule qui vous convient.
              </p>
            </div>
          </div>

          <CtaChevronButton
            as="a"
            href="https://calendly.com/"
            target="_blank"
            rel="noopener noreferrer"
            tone="yellow"
            size="md"
            className="relative z-10 flex-shrink-0"
          >
            Réserver un appel gratuit
          </CtaChevronButton>
        </motion.div>
      </div>
    </section>
  )
}
