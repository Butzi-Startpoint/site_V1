'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import { ExpertsScrollAnimation } from '@/components/ui/scrolling-animation'

export function ExpertsSection() {
  return (
    <section className="bg-[#F6F1EB] relative overflow-hidden">
      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A68AFF]/20 to-transparent z-10" />

      {/* Section header — pinned above the animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={stagger}
        className="relative z-10 text-center pt-16 pb-6 px-6"
      >
        <motion.span
          variants={fadeUp}
          className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFAB] text-[#1E172D] text-xs font-bold uppercase tracking-widest mb-5"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Les intervenants
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="text-4xl md:text-5xl font-extrabold text-[#1E172D] leading-[1.15] tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Des experts à{' '}
          <span className="text-[#A68AFF]">votre service</span>
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="text-[#1E172D]/55 text-base mt-4 max-w-lg mx-auto leading-relaxed"
        >
          Chaque mois, des spécialistes invités couvrent les sujets qui comptent vraiment
          pour votre activité : juridique, fiscal, marketing, automatisation et plus encore.
        </motion.p>
      </motion.div>

      {/* Scroll animation */}
      <ExpertsScrollAnimation />
    </section>
  )
}
