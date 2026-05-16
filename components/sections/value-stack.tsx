'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'

const stackItems = [
  {
    num: '01',
    title: '6 sessions live en groupe',
    desc: '1 session/semaine · 2h · Démos, Q&A, mise en pratique sur VOS cas',
    value: '1 800 €',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A68AFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="14" height="12" rx="2"/>
        <path d="M16 10l4-2v8l-4-2"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Accès au cours en ligne : +80 vidéos',
    desc: 'Théorie, tutos, exemples concrets · à votre rythme',
    value: '997 €',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A68AFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
        <line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="13" y2="11"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'La Méthode 3S : framework complet',
    desc: 'Le système Simplifier › Scaler › Systématiser appliqué à votre métier',
    value: '500 €',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A68AFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="5" rx="1"/><rect x="2" y="10" width="20" height="5" rx="1"/><rect x="2" y="17" width="20" height="5" rx="1"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Kit de prompts et templates à chaque module',
    desc: 'Prêts à l\'emploi, testés sur +120 entrepreneurs',
    value: '397 €',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A68AFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
        <polyline points="14,2 14,8 20,8"/>
        <line x1="9" y1="13" x2="15" y2="13"/>
        <line x1="9" y1="17" x2="12" y2="17"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Communauté WhatsApp Entrepreneurs Augmentés',
    desc: 'Groupe privé participants + contenu exclusif',
    value: '297 €',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A68AFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Replays des sessions + Q&A entre les sessions',
    desc: 'Vous ne perdez rien si vous manquez une session',
    value: '297 €',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A68AFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5,3 19,12 5,21 5,3"/>
      </svg>
    ),
  },
]

const rowVariant = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
}

export function ValueStack() {
  return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A68AFF]/20 to-transparent" />

      <div className="max-w-[800px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
          className="text-center mb-12"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-[#1E172D] text-[#FFFFAB] text-xs font-bold uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ce qui est inclus
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-extrabold text-[#1E172D] leading-[1.2] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ce qui est inclus dans le programme{' '}
            <span className="text-[#A68AFF]">Méthode 3S</span>
          </motion.h2>
        </motion.div>

        {/* Stack rows */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } } }}
          className="space-y-2.5 mb-6"
        >
          {stackItems.map((item) => (
            <motion.div
              key={item.num}
              variants={rowVariant}
              className="flex items-center gap-4 rounded-2xl px-5 py-4 cursor-default"
              style={{
                background: 'rgba(30,23,45,0.03)',
                border: '1px solid rgba(30,23,45,0.07)',
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(166,138,255,0.15)' }}
              >
                {item.icon}
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[#1E172D] font-semibold text-sm leading-snug"
                  style={{ fontFamily: 'var(--font-display)' }}>
                  {item.title}
                </p>
                <p className="text-[#1E172D]/50 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
              </div>

              <div className="flex-shrink-0 text-right pl-4">
                <span
                  className="text-[#A68AFF] font-bold text-sm whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {item.value}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Total bar */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl px-6 py-5 flex items-center justify-between"
          style={{ background: '#FFFFAB' }}
        >
          <div>
            <p className="text-[#1E172D]/50 text-[10px] uppercase tracking-widest font-bold"
              style={{ fontFamily: 'var(--font-display)' }}>
              Valeur totale du programme
            </p>
            <p className="text-[#1E172D] font-extrabold text-3xl tracking-tight mt-0.5"
              style={{ fontFamily: 'var(--font-display)' }}>
              4 288 €
            </p>
          </div>
          <div className="text-right">
            <p className="text-[#1E172D]/50 text-xs mb-0.5">À partir de</p>
            <p className="text-[#1E172D] font-extrabold text-2xl tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}>
              2 997 €
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
