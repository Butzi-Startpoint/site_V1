'use client'

import { motion } from 'framer-motion'
import { stagger, fadeIn, viewport } from '@/lib/animations'
import { AnimatedCounter } from '@/components/ui/animated-counter'

const stats = [
  { value: 12,  suffix: 'h',  label: 'de sessions live',            prefix: '' },
  { value: 6,   suffix: '',   label: "semaines d'accompagnement",    prefix: '' },
  { value: 80,  suffix: '+',  label: 'vidéos de cours en ligne',     prefix: '' },
  { value: 100, suffix: '%',  label: "applicable dès la 1ère session", prefix: '' },
]

export function SocialProofBar() {
  return (
    <section className="bg-[#A68AFF] py-8 relative overflow-hidden">
      {/* Subtle shimmer overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className="relative max-w-[1140px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-white/20"
        >
          {stats.map((s, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="flex flex-col items-center text-center px-4 md:px-8 group"
            >
              <div className="flex items-baseline gap-0.5">
                <AnimatedCounter
                  value={s.value}
                  suffix={s.suffix}
                  prefix={s.prefix}
                  className="text-white text-3xl font-extrabold tracking-tight leading-none counter-glow"
                />
              </div>
              <span
                className="text-white/70 text-sm font-medium mt-1.5 leading-snug"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
