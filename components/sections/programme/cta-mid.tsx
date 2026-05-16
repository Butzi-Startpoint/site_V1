'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewport } from '@/lib/animations'

export function ProgrammeCtaMid() {
  return (
    <section className="bg-white pb-12 md:pb-16">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          whileHover={{ boxShadow: '0 20px 56px rgba(166,138,255,0.25)' }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, rgba(166,138,255,0.14) 0%, rgba(255,255,171,0.18) 100%)',
            border: '1px solid rgba(166,138,255,0.3)',
          }}
        >
          <div className="relative z-10 flex items-start md:items-center gap-4 max-w-2xl">
            <motion.div
              whileHover={{ scale: 1.08, rotate: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="w-14 h-14 rounded-xl bg-[#1E172D] flex items-center justify-center text-2xl flex-shrink-0"
            >
              <span>📞</span>
            </motion.div>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest text-[#A68AFF] mb-1.5"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Un doute&nbsp;? Un projet précis&nbsp;?
              </p>
              <h3
                className="text-[#1E172D] font-bold text-xl md:text-2xl tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                15 minutes pour voir si le programme est fait pour vous.
              </h3>
              <p className="text-[#1E172D]/65 text-sm mt-2 leading-relaxed">
                Un appel avec Butzi pour préciser vos objectifs, valider votre
                financement et choisir la cohorte adaptée à votre agenda.
              </p>
            </div>
          </div>

          <motion.a
            href="https://calendly.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, boxShadow: '0 10px 28px rgba(30,23,45,0.2)' }}
            whileTap={{ scale: 0.97 }}
            className="relative z-10 flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#1E172D] text-[#F6F1EB] font-bold text-sm cursor-pointer shimmer-hover"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Réserver un appel gratuit
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
