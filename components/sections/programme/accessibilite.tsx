'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewport } from '@/lib/animations'

export function ProgrammeAccessibilite() {
  return (
    <section className="bg-white py-20 md:py-24" id="accessibilite">
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
            Inclusion & adaptation
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#1E172D] tracking-tight mt-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Accessibilité handicap
          </h2>
          <p className="text-[#1E172D]/65 text-base mt-3 max-w-[680px]">
            StartPoint IA s&apos;engage à rendre la formation accessible aux personnes en
            situation de handicap. Nous étudions chaque demande individuellement pour adapter
            le parcours.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div className="bg-[#F6F1EB]/60 border border-[#1E172D]/8 rounded-2xl p-6 md:p-7">
            <h3
              className="text-base font-bold text-[#1E172D] mb-3 flex items-center gap-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-lg">♿</span> Nos engagements
            </h3>
            <ul className="space-y-2 text-sm text-[#1E172D]/75 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-[#A68AFF] font-bold mt-0.5">›</span>
                <span>Étude individualisée des besoins d&apos;adaptation avant l&apos;entrée en formation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A68AFF] font-bold mt-0.5">›</span>
                <span>Supports pédagogiques disponibles en formats alternatifs sur demande</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A68AFF] font-bold mt-0.5">›</span>
                <span>Sessions live avec activation possible des sous-titres automatiques</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A68AFF] font-bold mt-0.5">›</span>
                <span>Aménagement du rythme et des évaluations si nécessaire</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#A68AFF] font-bold mt-0.5">›</span>
                <span>Orientation vers les réseaux Cap Emploi / Agefiph / FIPHFP si besoin</span>
              </li>
            </ul>
          </div>

          <div
            className="rounded-2xl p-6 md:p-7 relative overflow-hidden"
            style={{
              background:
                'linear-gradient(135deg, rgba(166,138,255,0.10) 0%, rgba(216,208,255,0.05) 100%)',
              border: '1px solid rgba(166,138,255,0.25)',
            }}
          >
            <h3
              className="text-base font-bold text-[#1E172D] mb-3 flex items-center gap-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-lg">📞</span> Référent handicap
            </h3>
            <p className="text-[#1E172D]/75 text-sm leading-relaxed mb-4">
              Un référent handicap dédié est à votre disposition pour étudier votre situation et
              construire avec vous le parcours le plus adapté. La prise de contact est
              confidentielle et sans engagement.
            </p>
            <div className="space-y-2 text-sm">
              <p className="text-[#1E172D]/80">
                <strong className="text-[#1E172D]">Email&nbsp;:</strong>{' '}
                <a
                  href="mailto:contact@butzi-speaker.com?subject=Accessibilit%C3%A9%20%E2%80%94%20Programme%20Entrepreneurs%20Augment%C3%A9s"
                  className="text-[#A68AFF] hover:underline"
                >
                  contact@butzi-speaker.com
                </a>
              </p>
              <p className="text-[#1E172D]/80">
                <strong className="text-[#1E172D]">Délai de réponse&nbsp;:</strong> sous 48h
                ouvrées
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
