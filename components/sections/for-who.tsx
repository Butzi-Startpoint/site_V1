'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import type { Variants } from 'framer-motion'

const forYes = [
  'Vous êtes coach, consultant, formateur ou freelance',
  'Votre CA est entre 50k€ et 130k€',
  'Vous utilisez des outils numériques au quotidien',
  'Vous avez testé ChatGPT mais sans méthode structurée',
  "Vous voulez gagner du temps et développer votre activité avec l'IA",
  'Vous êtes prêt à investir du temps pendant 6 semaines',
]

const forNo = [
  'Vous cherchez une solution magique sans effort',
  'Vous êtes développeur ou profil technique avancé',
  'Vous débutez totalement en entrepreneuriat',
  'Vous cherchez uniquement à connecter des outils entre eux',
  'Vous pensez que "l\'IA va faire le travail à votre place"',
]

const listItem: Variants = {
  hidden:  { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 250, damping: 24 } },
}

const staggerList: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

export function ForWho() {
  return (
    <section className="bg-[#F6F1EB] py-20 md:py-28 relative overflow-hidden" id="pour-qui">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#F6F1EB] via-transparent to-[#F6F1EB] pointer-events-none" />

      <div className="relative max-w-[1140px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFAB] text-[#1E172D] text-xs font-bold uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Pour qui ?
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold text-[#1E172D] leading-[1.15] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ce programme est fait pour vous si…
          </motion.h2>
        </motion.div>

        {/* Two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* YES */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            whileHover={{ boxShadow: '0 16px 48px rgba(30,23,45,0.07)' }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl p-8 border border-[#1E172D]/8 relative overflow-hidden cursor-default"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FFFFAB] via-[#A68AFF] to-[#D8D0FF] rounded-t-2xl" />

            <motion.h3
              variants={fadeUp}
              className="flex items-center gap-3 text-xl font-bold text-[#1E172D] mb-7"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="w-9 h-9 rounded-full bg-[#FFFFAB] flex items-center justify-center text-lg shadow-sm">✅</span>
              C&apos;est pour vous
            </motion.h3>

            <motion.ul variants={staggerList} className="flex flex-col gap-3">
              {forYes.map((item) => (
                <motion.li
                  key={item}
                  variants={listItem}
                  className="flex items-start gap-3 text-[0.93rem] text-[#1E172D]/78 leading-snug group"
                >
                  <motion.span
                    className="mt-0.5 w-5 h-5 rounded-full bg-[#A68AFF]/15 flex items-center justify-center flex-shrink-0 text-[#A68AFF] text-xs font-bold"
                    whileHover={{ scale: 1.15, backgroundColor: 'rgba(166,138,255,0.3)' }}
                  >
                    →
                  </motion.span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* NO */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            whileHover={{ boxShadow: '0 16px 48px rgba(30,23,45,0.07)' }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl p-8 border border-[#1E172D]/8 relative overflow-hidden cursor-default"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#1E172D]/20 via-[#1E172D]/10 to-transparent rounded-t-2xl" />

            <motion.h3
              variants={fadeUp}
              className="flex items-center gap-3 text-xl font-bold text-[#1E172D] mb-7"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="w-9 h-9 rounded-full bg-[#1E172D]/8 flex items-center justify-center text-lg">❌</span>
              Ce n&apos;est pas pour vous
            </motion.h3>

            <motion.ul variants={staggerList} className="flex flex-col gap-3">
              {forNo.map((item) => (
                <motion.li
                  key={item}
                  variants={listItem}
                  className="flex items-start gap-3 text-[0.93rem] text-[#1E172D]/45 leading-snug"
                >
                  <span className="mt-0.5 flex-shrink-0 text-[#1E172D]/25 font-bold text-xs w-5 h-5 flex items-center justify-center">
                    ✕
                  </span>
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="text-center"
        >
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.02, borderColor: 'rgba(30,23,45,0.5)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#1E172D]/20 text-[#1E172D] font-semibold text-base cursor-pointer"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Parlez-nous de vos objectifs →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
