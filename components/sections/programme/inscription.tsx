'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'

const etapes = [
  {
    num: '1',
    title: 'Pré-inscription',
    desc: "Vous remplissez le formulaire en ligne (5 min) en précisant votre activité et vos objectifs.",
  },
  {
    num: '2',
    title: 'Entretien de positionnement',
    desc: "Échange de 20 min avec Butzi pour valider l'adéquation entre votre projet et la formation.",
  },
  {
    num: '3',
    title: 'Devis & convention',
    desc: "Vous recevez le devis personnalisé et la convention de formation (obligatoire pour l'OPCO).",
  },
  {
    num: '4',
    title: 'Confirmation & accès',
    desc: "Après signature et règlement (ou accord OPCO), vous recevez vos accès et un guide d'accueil.",
  },
]

export function ProgrammeInscription() {
  return (
    <section className="bg-white py-20 md:py-24" id="inscription">
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
            Rejoindre la prochaine cohorte
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#1E172D] tracking-tight mt-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Modalités d&apos;inscription
          </h2>
          <p className="text-[#1E172D]/65 text-base mt-3 max-w-[640px]">
            Le processus est conçu pour être rapide et compatible avec un financement OPCO.
            Comptez en moyenne <strong>10 jours</strong> entre la pré-inscription et l&apos;entrée en formation.
          </p>
        </motion.div>

        {/* Étapes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {etapes.map((e) => (
            <motion.div
              key={e.num}
              variants={fadeUp}
              whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(166,138,255,0.15)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="bg-[#F6F1EB]/60 border border-[#1E172D]/8 rounded-2xl p-6 relative"
            >
              <div
                className="w-9 h-9 rounded-full bg-[#A68AFF] text-white flex items-center justify-center text-sm font-extrabold mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {e.num}
              </div>
              <h3
                className="text-base font-bold text-[#1E172D] mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {e.title}
              </h3>
              <p className="text-[#1E172D]/65 text-sm leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Délais & tarifs récap */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          <div className="bg-white border border-[#1E172D]/8 rounded-2xl p-6">
            <p
              className="text-xs font-bold uppercase tracking-widest text-[#A68AFF] mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Délai d&apos;accès
            </p>
            <p className="text-[#1E172D] text-base leading-relaxed">
              <strong>10 jours minimum</strong> entre l&apos;inscription et le démarrage (délai de
              rétractation OPCO inclus).
            </p>
          </div>
          <div className="bg-white border border-[#1E172D]/8 rounded-2xl p-6">
            <p
              className="text-xs font-bold uppercase tracking-widest text-[#A68AFF] mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Tarif
            </p>
            <p className="text-[#1E172D] text-base leading-relaxed">
              Voir la grille tarifaire sur la page d&apos;accueil — <strong>3x ou 4x sans
              frais</strong> disponibles.
            </p>
          </div>
          <div className="bg-white border border-[#1E172D]/8 rounded-2xl p-6">
            <p
              className="text-xs font-bold uppercase tracking-widest text-[#A68AFF] mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Financement
            </p>
            <p className="text-[#1E172D] text-base leading-relaxed">
              <strong>OPCO éligible</strong> — jusqu&apos;à 2 500 € pris en charge par votre FAF
              selon votre statut.
            </p>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-3"
        >
          <motion.a
            href="https://calendly.com/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(30,23,45,0.18)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1E172D] text-[#F6F1EB] font-bold text-sm cursor-pointer shimmer-hover"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Démarrer ma pré-inscription
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </motion.a>
          <motion.a
            href="mailto:contact@butzi-speaker.com?subject=Question%20programme%20Entrepreneurs%20Augment%C3%A9s"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-[#1E172D]/15 bg-white text-[#1E172D] font-semibold text-sm cursor-pointer hover:border-[#A68AFF] hover:text-[#A68AFF] transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Poser une question par email
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
