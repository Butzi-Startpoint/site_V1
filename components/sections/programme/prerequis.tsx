'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'

const prerequis = [
  {
    icon: '💻',
    title: 'Matériel',
    items: [
      "Un ordinateur (Mac, PC ou Linux) avec connexion internet stable",
      "Un casque ou des écouteurs pour les sessions live",
      "Webcam recommandée (non obligatoire)",
    ],
  },
  {
    icon: '🧠',
    title: 'Niveau requis',
    items: [
      "Aucun prérequis technique en IA ou en code",
      "Pratique courante d'un navigateur web et des outils bureautiques",
      "Maîtrise du français (oral et écrit)",
    ],
  },
  {
    icon: '🎯',
    title: 'Public visé',
    items: [
      "Indépendants, freelances, coachs, consultants, formateurs",
      "Dirigeants de TPE et porteurs de projet",
      "Toute personne souhaitant intégrer l'IA dans son activité",
    ],
  },
  {
    icon: '⏱️',
    title: 'Disponibilité',
    items: [
      "Capacité à dégager ~4h / semaine pendant 6 semaines",
      "Présence aux sessions live recommandée (replays disponibles)",
      "Temps de mise en pratique entre les sessions",
    ],
  },
]

export function ProgrammePrerequis() {
  return (
    <section className="bg-[#F6F1EB] py-20 md:py-24" id="prerequis">
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
            Conditions d&apos;accès
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#1E172D] tracking-tight mt-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Prérequis
          </h2>
          <p className="text-[#1E172D]/65 text-base mt-3 max-w-[640px]">
            La formation est conçue pour être <strong>accessible sans bagage technique</strong>.
            L&apos;objectif : que vous repartiez avec un système opérationnel, pas avec des concepts abstraits.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {prerequis.map((p) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              whileHover={{ y: -3, boxShadow: '0 16px 40px rgba(30,23,45,0.06)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="bg-white border border-[#1E172D]/8 rounded-2xl p-6 md:p-7"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#FFFFAB]/50 flex items-center justify-center text-xl flex-shrink-0">
                  {p.icon}
                </div>
                <h3
                  className="text-lg font-bold text-[#1E172D]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {p.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {p.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-[#1E172D]/75 leading-relaxed"
                  >
                    <span className="text-[#A68AFF] font-bold mt-0.5">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
