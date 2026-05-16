'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'

const items = [
  {
    val: '6',
    unit: 'semaines',
    label: 'Durée totale',
    desc: 'Programme structuré sur un parcours continu et progressif.',
    color: '#A68AFF',
  },
  {
    val: '12',
    unit: 'h',
    label: 'Live collectif',
    desc: 'Sessions en visio en groupe, animées par Butzi (6 × 2h).',
    color: '#1E172D',
  },
  {
    val: '5',
    unit: 'h',
    label: 'Cours en ligne',
    desc: 'Modules e-learning accessibles 24/7 sur la plateforme dédiée.',
    color: '#A68AFF',
  },
  {
    val: '4',
    unit: 'h',
    label: 'Travail supervisé',
    desc: 'Mises en pratique avec support asynchrone du formateur.',
    color: '#1E172D',
  },
]

export function ProgrammeDuree() {
  return (
    <section className="bg-[#F6F1EB] py-20 md:py-24" id="duree">
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
            Volume horaire
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#1E172D] tracking-tight mt-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Durée totale
          </h2>
          <p className="text-[#1E172D]/65 text-base mt-3 max-w-[640px]">
            <strong>6 semaines</strong> · <strong>12h</strong> de live collectif +{' '}
            <strong>5h</strong> de cours en ligne + <strong>4h</strong> de travail supervisé.
            Soit <strong>21h</strong> de formation au total.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {items.map((i) => (
            <motion.div
              key={i.label}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: '0 20px 48px rgba(30,23,45,0.08)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="bg-white border border-[#1E172D]/8 rounded-2xl p-6"
            >
              <div className="flex items-baseline gap-1 mb-3">
                <span
                  className="text-5xl font-extrabold tracking-tight"
                  style={{ color: i.color, fontFamily: 'var(--font-display)' }}
                >
                  {i.val}
                </span>
                <span className="text-xl font-bold text-[#1E172D]/55"
                  style={{ fontFamily: 'var(--font-display)' }}>
                  {i.unit}
                </span>
              </div>
              <h3
                className="text-base font-bold text-[#1E172D] mb-1.5"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {i.label}
              </h3>
              <p className="text-[#1E172D]/60 text-sm leading-relaxed">{i.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Format & rythme */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="mt-6 bg-white rounded-2xl border border-[#1E172D]/8 p-6 md:p-7"
        >
          <h3
            className="text-base font-bold text-[#1E172D] mb-3 flex items-center gap-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="text-lg">📅</span> Format &amp; rythme
          </h3>
          <ul className="space-y-2 text-sm text-[#1E172D]/75 leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="text-[#A68AFF] font-bold mt-0.5">›</span>
              <span>
                <strong>100% distanciel</strong> — visioconférence (Zoom / Google Meet) + plateforme e-learning.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#A68AFF] font-bold mt-0.5">›</span>
              <span>
                <strong>1 session live par semaine</strong> (2h), en soirée pour préserver vos journées clients.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#A68AFF] font-bold mt-0.5">›</span>
              <span>
                <strong>Communauté WhatsApp</strong> active pendant toute la durée du programme.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#A68AFF] font-bold mt-0.5">›</span>
              <span>
                <strong>Replays disponibles</strong> 6 mois après la fin du programme.
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
