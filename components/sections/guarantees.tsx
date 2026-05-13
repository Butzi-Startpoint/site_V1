'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import type { Variants } from 'framer-motion'

const cardVariant: Variants = {
  hidden:  { opacity: 0, y: 28, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,
    transition: { type: 'spring', stiffness: 220, damping: 24 } },
}

const guarantees = [
  {
    icon: '🛡️',
    title: 'Garantie "Résultat ou on continue"',
    text: "Vous assistez aux 6 sessions, vous faites les exercices, et à la fin du programme vous n'avez pas de workflow IA opérationnel ? On continue ensemble gratuitement : 3 mois de Cercle offerts + 1 session individuelle de déblocage.",
    condition: "Applicable aux offres Essentiel et Momentum · Condition : présence à minimum 5/6 sessions + exercices rendus.",
    color: '#A68AFF',
  },
  {
    icon: '📦',
    title: 'Garantie livrable — Offre Premium',
    text: "Vous repartez avec un système IA documenté, connecté à vos outils, opérationnel. Si le livrable n'est pas à la hauteur de ce qu'on a défini ensemble, on continue sans surcoût.",
    condition: "Applicable à l'offre Premium · Objectifs définis dès l'audit initial.",
    color: '#D8D0FF',
  },
]

export function Guarantees() {
  return (
    <section className="bg-[#F6F1EB] py-20 md:py-28 relative overflow-hidden" id="garanties">
      <div className="max-w-[1140px] mx-auto px-6">
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
            Nos garanties
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold text-[#1E172D] leading-[1.15] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Vous ne prenez{' '}
            <span className="text-[#A68AFF]">aucun risque.</span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {guarantees.map((g) => (
            <motion.div
              key={g.title}
              variants={cardVariant}
              whileHover={{
                y: -5,
                boxShadow: `0 20px 56px rgba(30,23,45,0.08)`,
                transition: { type: 'spring', stiffness: 300, damping: 22 },
              }}
              className="bg-white rounded-2xl p-8 cursor-default relative overflow-hidden"
              style={{ borderLeft: `5px solid ${g.color}` }}
            >
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none"
                style={{ background: `radial-gradient(circle at 90% 10%, ${g.color}18 0%, transparent 70%)` }} />

              <div className="flex items-start gap-4 mb-4">
                <motion.span
                  className="text-2xl flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: g.color + '18' }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  {g.icon}
                </motion.span>
                <h3
                  className="text-lg font-bold text-[#1E172D] leading-snug"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {g.title}
                </h3>
              </div>
              <p className="text-[#1E172D]/70 text-sm leading-relaxed mb-4">{g.text}</p>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ backgroundColor: g.color + '10' }}>
                <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: g.color }} />
                <p className="text-[#1E172D]/45 text-xs italic">{g.condition}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
