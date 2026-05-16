'use client'

import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import { MeshGradientBg } from '@/components/ui/mesh-gradient-bg'
import { CtaChevronButton } from '@/components/ui/cta-chevron-button'

const cercleFeatures = [
  'Q&A mensuel en visio avec Butzi — votre cas concret traité en live',
  'Experts invités chaque mois : juridique, fiscal, marketing, ops',
  'Veille IA curatée chaque semaine — 3 ressources commentées',
]

const tiers = [
  { label: '6 mois inclus', sublabel: 'avec Momentum', highlight: false },
  { label: '12 mois inclus', sublabel: 'avec Premium', highlight: true },
  { label: '79 €/mois', sublabel: 'alumni Essentiel · sans engagement', highlight: false },
]

export function AfterProgram() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#1E172D]">
      {/* Animated mesh shader background */}
      <MeshGradientBg
        colors={['#1E172D', '#3A2860', '#A68AFF', '#D8D0FF', '#FFFFAB']}
        distortion={1.0}
        swirl={0.65}
        speed={0.32}
        offsetX={0.05}
        veilClassName="bg-[#1E172D]/72"
      />

      {/* Top hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A68AFF]/40 to-transparent" />

      <div className="relative z-10 max-w-[860px] mx-auto px-6 text-center">
        {/* Eyebrow + Section title */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="mb-12 md:mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFAB] text-[#1E172D] text-xs font-bold uppercase tracking-widest mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Après le programme
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-[#F6F1EB] leading-[1.05] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Et après les{' '}
            <span className="text-[#FFFFAB]">6 semaines&nbsp;?</span>
          </motion.h2>
        </motion.div>

        {/* Cercle — open layout, no card */}
        <div className="space-y-12 md:space-y-14">
          {/* Title + description */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-4 mb-5"
            >
              {/* Premium circular emblem */}
              <span
                aria-hidden="true"
                className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center"
              >
                {/* Outer glow halo */}
                <span
                  className="absolute inset-[-6px] rounded-full"
                  style={{
                    background:
                      'radial-gradient(circle, rgba(255,255,171,0.35) 0%, rgba(255,255,171,0) 70%)',
                  }}
                />
                {/* SVG emblem */}
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  className="relative drop-shadow-[0_4px_18px_rgba(255,255,171,0.35)]"
                >
                  <defs>
                    <linearGradient id="cercle-ring" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFAB" />
                      <stop offset="55%" stopColor="#D8D0FF" />
                      <stop offset="100%" stopColor="#FFFFAB" />
                    </linearGradient>
                    <radialGradient id="cercle-core" cx="50%" cy="40%" r="60%">
                      <stop offset="0%" stopColor="#FFFFC8" />
                      <stop offset="100%" stopColor="#FFFFAB" />
                    </radialGradient>
                  </defs>
                  {/* Outer ring */}
                  <circle
                    cx="24"
                    cy="24"
                    r="21"
                    fill="none"
                    stroke="url(#cercle-ring)"
                    strokeWidth="1.5"
                    opacity="0.9"
                  />
                  {/* Mid ring */}
                  <circle
                    cx="24"
                    cy="24"
                    r="15"
                    fill="none"
                    stroke="rgba(216,208,255,0.55)"
                    strokeWidth="0.9"
                  />
                  {/* Center disc */}
                  <circle
                    cx="24"
                    cy="24"
                    r="6"
                    fill="url(#cercle-core)"
                  />
                  {/* Highlight gloss */}
                  <circle
                    cx="21.5"
                    cy="21.5"
                    r="2"
                    fill="rgba(255,255,255,0.55)"
                  />
                </svg>
              </span>

              <h3
                className="text-2xl md:text-3xl font-extrabold text-[#F6F1EB] tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Le Cercle Entrepreneurs Augmentés
              </h3>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-[#F6F1EB] text-lg md:text-xl leading-relaxed max-w-[640px] mx-auto"
            >
              La communauté privée des alumni StartPoint IA. Pour continuer à
              progresser, rester à jour et ne pas bosser seul avec l&apos;IA.
            </motion.p>
          </motion.div>

          {/* Features — bullet list, no card */}
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
            }}
            className="grid gap-4 md:gap-5 max-w-[680px] mx-auto text-left"
          >
            {cercleFeatures.map((f) => (
              <motion.li
                key={f}
                variants={fadeUp}
                className="flex items-start gap-3.5"
              >
                <CheckCircle2
                  className="w-6 h-6 text-[#FFFFAB] flex-shrink-0 mt-0.5"
                  strokeWidth={2}
                />
                <p className="text-[#F6F1EB] text-base md:text-lg leading-relaxed">
                  {f}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tiers — pills row */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            className="pt-2"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#F6F1EB]/70 text-xs font-bold uppercase tracking-widest mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Inclus dans le programme
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4"
            >
              {tiers.map((t) => (
                <div
                  key={t.label}
                  className={`px-5 py-3 rounded-2xl backdrop-blur-md flex flex-col items-center min-w-[180px] ${
                    t.highlight
                      ? 'bg-[#FFFFAB]/12 ring-1 ring-[#FFFFAB]/35'
                      : 'bg-[#F6F1EB]/8 ring-1 ring-[#F6F1EB]/15'
                  }`}
                >
                  <p
                    className="font-extrabold text-lg md:text-xl"
                    style={{
                      fontFamily: 'var(--font-display)',
                      color: t.highlight ? '#FFFFAB' : '#F6F1EB',
                    }}
                  >
                    {t.label}
                  </p>
                  <p className="text-[#F6F1EB]/75 text-xs md:text-sm mt-0.5 leading-snug">
                    {t.sublabel}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Calendly CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="pt-4 flex justify-center"
          >
            <CtaChevronButton
              as="a"
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              tone="cream-outline"
              size="md"
            >
              Réserver un appel de 15 min
            </CtaChevronButton>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
