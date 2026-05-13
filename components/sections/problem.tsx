'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, staggerFast, viewport } from '@/lib/animations'
import type { Variants } from 'framer-motion'

const problems = [
  {
    icon: '🤯',
    title: "Trop d'outils, aucune stratégie",
    desc: "ChatGPT, Perplexity, Claude, Gemini… Vous testez tout, vous ne maîtrisez rien.",
    color: '#D8D0FF',
  },
  {
    icon: '😰',
    title: "La peur d'être largué",
    desc: "Vos concurrents avancent. Vous voyez l'IA partout mais vous ne savez pas par où commencer.",
    color: '#FFFFAB',
  },
  {
    icon: '💸',
    title: "Du temps et de l'énergie gaspillés",
    desc: "Des heures sur des tâches que l'IA pourrait accélérer : emails, contenus, admin, recherche…",
    color: '#A68AFF',
  },
]

const cardVariant: Variants = {
  hidden:  { opacity: 0, x: -28, rotateY: -5 },
  visible: { opacity: 1, x: 0,   rotateY: 0,
    transition: { type: 'spring', stiffness: 200, damping: 22 } },
}

function TiltCard({ item }: { item: typeof problems[0] }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width  - 0.5) * 10
    const y = ((e.clientY - rect.top)  / rect.height - 0.5) * 10
    setTilt({ x: -y, y: x })
  }

  return (
    <motion.div
      variants={cardVariant}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setTilt({ x: 0, y: 0 }); setHovered(false) }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        scale: hovered ? 1.02 : 1,
        boxShadow: hovered
          ? `0 20px 48px rgba(30,23,45,0.14), 0 0 0 1px ${item.color}33`
          : '0 2px 8px rgba(30,23,45,0.04)',
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
      style={{ transformStyle: 'preserve-3d', perspective: 800 }}
      className="bg-white rounded-2xl px-6 py-5 flex items-start gap-4 cursor-default"
    >
      {/* Colored left bar that grows on hover */}
      <motion.div
        className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full"
        style={{ backgroundColor: item.color }}
        animate={{ scaleY: hovered ? 1 : 0.3, opacity: hovered ? 1 : 0.4 }}
        transition={{ duration: 0.2 }}
      />

      <motion.span
        className="text-2xl flex-shrink-0 mt-0.5 select-none"
        animate={{ scale: hovered ? 1.15 : 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      >
        {item.icon}
      </motion.span>

      <div style={{ transform: 'translateZ(8px)' }}>
        <h4
          className="font-bold text-[#1E172D] text-[0.95rem] mb-1"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {item.title}
        </h4>
        <p className="text-[#1E172D]/60 text-sm leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  )
}

export function Problem() {
  return (
    <section className="bg-[#FFFFAB] py-20 md:py-28 relative overflow-hidden" id="constat">
      {/* Floating accent orbs */}
      <div className="pointer-events-none absolute top-0 right-0 w-64 h-64 rounded-full float-slow"
        style={{ background: 'radial-gradient(circle, rgba(166,138,255,0.18) 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
      <div className="pointer-events-none absolute bottom-0 left-0 w-48 h-48 rounded-full float-medium"
        style={{ background: 'radial-gradient(circle, rgba(30,23,45,0.07) 0%, transparent 70%)', transform: 'translate(-20%, 20%)' }} />

      <div className="relative max-w-[1140px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — texte */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
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
              Vous avez testé ChatGPT. Deux-trois prompts. Des résultats moyens. Vous êtes retourné à vos
              habitudes.{' '}
              <strong className="text-[#1E172D]">
                Le problème, ce n&apos;est pas l&apos;outil. C&apos;est l&apos;absence de méthode.
              </strong>
            </motion.p>

            <motion.div variants={fadeUp}>
              <motion.a
                href="#pricing"
                whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(30,23,45,0.2)' }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#1E172D] text-[#F6F1EB] font-semibold text-base shadow-lg cursor-pointer shimmer-hover"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Réserver un appel gratuit
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right — cartes avec tilt 3D */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={staggerFast}
            className="flex flex-col gap-4 relative"
            style={{ perspective: 1000 }}
          >
            {problems.map((p) => (
              <div key={p.title} className="relative">
                <TiltCard item={p} />
              </div>
            ))}
          </motion.div>

        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="text-center mt-14"
        >
          <motion.a
            href="#programme"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#1E172D]/30 text-[#1E172D] font-semibold text-sm hover:border-[#1E172D]/60 hover:bg-white/60 transition-colors cursor-pointer"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Découvrir le parcours IA →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
