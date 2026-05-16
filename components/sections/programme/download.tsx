'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewport } from '@/lib/animations'

export function ProgrammeDownload() {
  return (
    <section className="bg-[#F6F1EB] py-16 md:py-20" id="download">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          whileHover={{ boxShadow: '0 24px 60px rgba(30,23,45,0.12)' }}
          transition={{ duration: 0.2 }}
          className="bg-[#1E172D] rounded-2xl px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden"
        >
          {/* Background glow */}
          <div
            className="absolute right-0 top-0 bottom-0 w-72 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at 80% 50%, rgba(166,138,255,0.18) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 flex items-start md:items-center gap-4 max-w-xl">
            <motion.div
              whileHover={{ scale: 1.08, rotate: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="w-14 h-14 rounded-xl bg-[#FFFFAB]/12 flex items-center justify-center text-3xl flex-shrink-0"
            >
              📄
            </motion.div>
            <div>
              <p
                className="text-xs font-bold uppercase tracking-widest text-[#A68AFF] mb-1.5"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Document officiel
              </p>
              <h3
                className="text-[#F6F1EB] font-bold text-xl md:text-2xl tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Programme téléchargeable en PDF
              </h3>
              <p className="text-[#F6F1EB]/55 text-sm mt-2 leading-relaxed">
                Tout le programme, les modalités, les tarifs et les mentions Qualiopi dans un
                document unique à partager à votre OPCO ou à votre comptable.
              </p>
            </div>
          </div>

          <motion.a
            href="/programme-entrepreneurs-augmentes.pdf"
            download
            whileHover={{ scale: 1.03, boxShadow: '0 12px 28px rgba(255,255,171,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="relative z-10 flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#FFFFAB] text-[#1E172D] font-bold text-sm cursor-pointer shimmer-hover"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Télécharger le PDF
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
