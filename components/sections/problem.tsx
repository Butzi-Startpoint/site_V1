'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import { CtaChevronButton } from '@/components/ui/cta-chevron-button'

const problems: React.ReactNode[] = [
  <>Vous n&apos;avez pas le temps de tester 15 outils IA pour trouver <strong>celui qui marche pour VOUS</strong>.</>,
  <><strong>Vos devis, vos mails, vos relances</strong>&nbsp;: tout est <strong>refait à la main</strong>, à chaque fois.</>,
  <>Vous avez l&apos;impression que <strong>vos concurrents utilisent l&apos;IA mieux que vous</strong>.</>,
  <>Vous oubliez une relance, un devis reste sans suite&nbsp;: c&apos;est du <strong>chiffre d&apos;affaires en moins</strong>.</>,
]

export function Problem() {
  return (
    <section className="bg-[#FFFFAB] py-20 md:py-28 relative overflow-hidden" id="constat">
      {/* Floating accent orbs */}
      <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 rounded-full float-slow"
        style={{ background: 'radial-gradient(circle, rgba(166,138,255,0.18) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
      <div className="pointer-events-none absolute bottom-0 left-0 w-48 h-48 rounded-full float-medium"
        style={{ background: 'radial-gradient(circle, rgba(30,23,45,0.07) 0%, transparent 70%)', transform: 'translate(-20%, 20%)' }} />

      <div className="relative max-w-[1140px] mx-auto px-6">
        {/* Texte + CTA, centrés */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="max-w-[760px] mx-auto text-center"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-[#1E172D] text-[#FFFFAB] text-xs font-bold uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Le constat
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold text-[#1E172D] leading-[1.15] tracking-tight mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Vous utilisez l&apos;IA à{' '}
            <span className="relative inline-block">
              <span className="relative z-10">5%</span>
              <motion.span
                className="absolute -bottom-1 left-0 h-[4px] bg-[#A68AFF] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              />
            </span>{' '}
            de son potentiel.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#1E172D]/70 text-lg leading-relaxed mb-8"
          >
            Vous avez testé ChatGPT. Deux-trois prompts. Des résultats moyens. Vous êtes retourné à vos habitudes.{' '}
            <strong className="text-[#1E172D]">
              Le problème, ce n&apos;est pas l&apos;outil. C&apos;est que personne ne vous a montré comment
              l&apos;utiliser pour VOTRE activité.
            </strong>
          </motion.p>

          <motion.div variants={fadeUp} className="flex justify-center">
            <CtaChevronButton
              as="a"
              href="https://calendly.com/butzi/15-minutes-call-catch-up"
              target="_blank"
              rel="noopener noreferrer"
              tone="dark"
              size="md"
            >
              Réserver un appel gratuit
            </CtaChevronButton>
          </motion.div>
        </motion.div>

        {/* Encadré sombre « Vous vous reconnaissez ? » — les 4 points apparaissent un par un */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.16, delayChildren: 0.1 } } }}
          className="mt-12 md:mt-16 max-w-[820px] mx-auto rounded-3xl bg-[#1E172D] px-6 py-8 md:px-10 md:py-10 shadow-[0_24px_60px_rgba(30,23,45,0.25)]"
        >
          <motion.h3
            variants={fadeUp}
            className="text-center text-2xl md:text-3xl font-extrabold text-[#FFFFAB] tracking-tight mb-6 md:mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Vous vous reconnaissez&nbsp;?
          </motion.h3>

          <ul className="flex flex-col max-w-[640px] mx-auto">
            {problems.map((text, i) => (
              <motion.li
                key={i}
                variants={fadeUp}
                className="flex items-start gap-4 py-4 border-b border-white/10 last:border-0"
              >
                {/* Croix violette */}
                <span
                  className="flex-shrink-0 mt-0.5 text-[#A68AFF] font-bold text-base leading-none select-none"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  ✕
                </span>
                <p className="text-[#F6F1EB]/80 text-[0.95rem] leading-relaxed [&_strong]:text-[#F6F1EB] [&_strong]:font-bold">
                  {text}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
