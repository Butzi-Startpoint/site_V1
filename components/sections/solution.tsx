'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, scaleInSpring, viewport } from '@/lib/animations'

const formats = [
  {
    hours: '12',
    unit: 'h',
    title: 'Sessions live en groupe',
    desc: "8 sessions de 90 mn en visio. Démos, Q&A, mise en pratique sur VOS cas.",
    accentBg: 'rgba(166,138,255,0.12)',
    accentBorder: 'rgba(166,138,255,0.25)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#A68AFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="14" height="12" rx="2" />
        <path d="M16 10l4-2v8l-4-2" />
      </svg>
    ),
  },
  {
    hours: '5',
    unit: 'h',
    title: 'Cours en ligne',
    desc: '+80 vidéos à votre rythme. Théorie, tutos, exemples concrets.',
    accentBg: 'rgba(255,255,171,0.3)',
    accentBorder: 'rgba(255,255,171,0.6)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1E172D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <line x1="9" y1="7" x2="15" y2="7" />
        <line x1="9" y1="11" x2="13" y2="11" />
      </svg>
    ),
  },
  {
    hours: '4',
    unit: 'h',
    title: 'Travail supervisé',
    desc: 'Missions pratiques. Vous appliquez, on corrige ensemble.',
    accentBg: 'rgba(216,208,255,0.3)',
    accentBorder: 'rgba(216,208,255,0.6)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#A68AFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
]

export function Solution() {
  return (
    <section className="bg-[#F6F1EB] py-20 md:py-28 relative overflow-hidden dot-grid" id="programme">
      {/* Mask to fade dot grid edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F6F1EB] via-transparent to-[#F6F1EB] pointer-events-none" />

      <div className="relative max-w-[1140px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="text-center max-w-[680px] mx-auto mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFAB] text-[#1E172D] text-xs font-bold uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            La solution
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold text-[#1E172D] leading-[1.15] tracking-tight mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Un programme structuré.{' '}
            <span className="text-[#A68AFF]">Pas un cours de plus.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#1E172D]/60 text-lg leading-relaxed">
            6 semaines pour intégrer l&apos;IA dans votre quotidien d&apos;entrepreneur. Avec un cadre,
            une méthode, et un accompagnement humain.
          </motion.p>
        </motion.div>

        {/* Format cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8"
        >
          {formats.map((f) => (
            <motion.div
              key={f.title}
              variants={scaleInSpring}
              whileHover={{
                y: -8,
                boxShadow: '0 24px 56px rgba(30,23,45,0.12)',
                transition: { type: 'spring', stiffness: 300, damping: 22 },
              }}
              className="bg-white rounded-2xl p-7 text-center cursor-default relative overflow-hidden group"
              style={{
                border: `1px solid ${f.accentBorder}`,
                boxShadow: '0 2px 8px rgba(30,23,45,0.04)',
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{ background: f.accentBg }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
              />
              <motion.div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 relative z-10"
                style={{ background: f.accentBg, border: `1px solid ${f.accentBorder}` }}
                whileHover={{ scale: 1.08, rotate: 3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                {f.icon}
              </motion.div>
              <div className="relative z-10 flex items-baseline justify-center gap-0.5 mb-1">
                <span className="text-5xl font-extrabold text-[#1E172D] tracking-tight leading-none"
                  style={{ fontFamily: 'var(--font-display)' }}>{f.hours}</span>
                <span className="text-2xl font-bold text-[#A68AFF]"
                  style={{ fontFamily: 'var(--font-display)' }}>{f.unit}</span>
              </div>
              <h3 className="relative z-10 text-[#1E172D] font-bold text-base mb-2"
                style={{ fontFamily: 'var(--font-display)' }}>{f.title}</h3>
              <p className="relative z-10 text-[#1E172D]/55 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Places restantes — pill */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#1E172D]/10 shadow-sm text-[0.9rem] font-medium text-[#1E172D]"
            style={{ fontFamily: 'var(--font-display)' }}>
            <span className="text-base">👥</span>
            8 personnes maximum par cohorte —{' '}
            <span className="text-[#A68AFF] font-bold">4 places restantes</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
