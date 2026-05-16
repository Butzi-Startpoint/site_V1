'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'

const evaluations = [
  {
    icon: '📝',
    title: 'Évaluation initiale',
    desc: "Questionnaire de positionnement à l'entrée pour identifier votre niveau et adapter votre parcours.",
  },
  {
    icon: '🎯',
    title: 'Évaluation continue',
    desc: "Quiz d'auto-évaluation à chaque module + livrables concrets validés par le formateur (1 livrable / module).",
  },
  {
    icon: '🏁',
    title: 'Évaluation finale',
    desc: "Présentation orale du système IA personnel construit pendant la formation + grille d'évaluation des compétences.",
  },
  {
    icon: '📊',
    title: 'Bilan & feedback',
    desc: "Questionnaire de satisfaction à chaud puis à 3 mois pour mesurer le transfert dans l'activité.",
  },
]

export function ProgrammeModalites() {
  return (
    <section className="bg-white py-20 md:py-24" id="modalites">
      <div className="max-w-[1140px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="mb-10"
        >
          <span
            className="text-xs font-bold uppercase tracking-widest text-[#A68AFF]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Suivi pédagogique
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#1E172D] tracking-tight mt-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Modalités d&apos;évaluation
          </h2>
          <p className="text-[#1E172D]/65 text-base mt-3 max-w-[640px]">
            L&apos;acquisition des compétences est mesurée tout au long du parcours, avec des
            preuves concrètes plutôt que des examens théoriques.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {evaluations.map((e) => (
            <motion.div
              key={e.title}
              variants={fadeUp}
              whileHover={{ y: -3, boxShadow: '0 16px 40px rgba(166,138,255,0.12)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="bg-[#F6F1EB]/60 border border-[#1E172D]/8 rounded-2xl p-6 flex gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#A68AFF]/10 flex items-center justify-center text-2xl flex-shrink-0">
                {e.icon}
              </div>
              <div>
                <h3
                  className="text-base font-bold text-[#1E172D] mb-1.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {e.title}
                </h3>
                <p className="text-[#1E172D]/65 text-sm leading-relaxed">{e.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sanction de la formation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="mt-6 rounded-2xl p-6 md:p-7 relative overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, rgba(166,138,255,0.10) 0%, rgba(216,208,255,0.05) 100%)',
            border: '1px solid rgba(166,138,255,0.25)',
          }}
        >
          <h3
            className="text-base font-bold text-[#1E172D] mb-2 flex items-center gap-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="text-lg">🎓</span> Sanction de la formation
          </h3>
          <p className="text-[#1E172D]/75 text-sm leading-relaxed">
            À l&apos;issue du parcours, une <strong>attestation de fin de formation</strong> est
            délivrée à chaque participant, mentionnant les objectifs pédagogiques atteints, le
            volume horaire suivi et les compétences acquises.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
