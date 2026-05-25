'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import type { Variants } from 'framer-motion'

const forYes = [
  'Vous êtes coach, consultant, formateur ou freelance',
  'Vous vivez de votre activité depuis au moins 2 ans',
  'Vous utilisez des outils numériques au quotidien',
  'Vous avez testé ChatGPT mais sans méthode structurée',
  "Vous voulez gagner du temps et développer votre activité avec l'IA",
  'Vous êtes prêt à investir du temps pendant 6 semaines',
]

const forNo = [
  'Vous cherchez une solution magique sans effort',
  'Vous êtes développeur ou profil technique avancé',
  'Vous débutez totalement en entrepreneuriat',
  'Vous voulez juste des prompts à copier-coller sans comprendre la logique derrière',
  "Vous pensez que l'IA va faire le travail à votre place",
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

        {/* Two columns — open layout, no boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-12">

          {/* YES */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-7">
              <span className="w-2 h-2 rounded-full bg-[#A68AFF] flex-shrink-0" />
              <h3
                className="text-xl font-extrabold text-[#1E172D] tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                C&apos;est pour vous
              </h3>
            </motion.div>

            <motion.ul variants={staggerList} className="flex flex-col gap-4">
              {forYes.map((item) => (
                <motion.li
                  key={item}
                  variants={listItem}
                  className="flex items-start gap-3.5"
                >
                  <Check className="mt-[2px] flex-shrink-0 w-[18px] h-[18px] text-[#22A06B]" strokeWidth={2.75} aria-hidden="true" />
                  <span className="text-[#1E172D]/75 text-[0.95rem] leading-relaxed">{item}</span>
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
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-7">
              <span className="w-2 h-2 rounded-full bg-[#1E172D]/30 flex-shrink-0" />
              <h3
                className="text-xl font-extrabold text-[#1E172D] tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Ce n&apos;est pas pour vous
              </h3>
            </motion.div>

            <motion.ul variants={staggerList} className="flex flex-col gap-4">
              {forNo.map((item) => (
                <motion.li
                  key={item}
                  variants={listItem}
                  className="flex items-start justify-between gap-3.5"
                >
                  <span className="text-[#1E172D]/40 text-[0.95rem] leading-relaxed">{item}</span>
                  <span className="mt-[1px] flex-shrink-0 text-base leading-none select-none">❌</span>
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
