'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewport } from '@/lib/animations'

export function ProgrammeQualiopi() {
  return (
    <section className="bg-[#F6F1EB] py-20 md:py-24" id="qualiopi">
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
            Mentions légales formation
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#1E172D] tracking-tight mt-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Mentions Qualiopi
          </h2>
          <p className="text-[#1E172D]/65 text-base mt-3 max-w-[680px]">
            StartPoint IA (EURL BUTZI) est un organisme de formation certifié Qualiopi au titre
            de la catégorie d&apos;action <strong>« actions de formation »</strong>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="bg-white border border-[#1E172D]/8 rounded-2xl p-6"
          >
            <p
              className="text-xs font-bold uppercase tracking-widest text-[#A68AFF] mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Organisme
            </p>
            <p className="text-[#1E172D] font-bold text-base mb-1"
              style={{ fontFamily: 'var(--font-display)' }}>
              EURL BUTZI
            </p>
            <p className="text-[#1E172D]/60 text-sm leading-relaxed">
              Marque commerciale&nbsp;: StartPoint IA
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="bg-white border border-[#1E172D]/8 rounded-2xl p-6"
          >
            <p
              className="text-xs font-bold uppercase tracking-widest text-[#A68AFF] mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              N° déclaration d&apos;activité
            </p>
            <p className="text-[#1E172D] font-bold text-base mb-1"
              style={{ fontFamily: 'var(--font-display)' }}>
              À renseigner
            </p>
            <p className="text-[#1E172D]/60 text-sm leading-relaxed">
              Enregistré auprès du préfet de région.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="bg-white border border-[#1E172D]/8 rounded-2xl p-6"
          >
            <p
              className="text-xs font-bold uppercase tracking-widest text-[#A68AFF] mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Certification Qualiopi
            </p>
            <p className="text-[#1E172D] font-bold text-base mb-1"
              style={{ fontFamily: 'var(--font-display)' }}>
              Délivrée par un certificateur accrédité
            </p>
            <p className="text-[#1E172D]/60 text-sm leading-relaxed">
              Catégorie&nbsp;: actions de formation.
            </p>
          </motion.div>
        </div>

        {/* Indicateurs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="bg-white rounded-2xl border border-[#1E172D]/8 p-6 md:p-8 mb-6"
        >
          <h3
            className="text-base font-bold text-[#1E172D] mb-4 flex items-center gap-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="text-lg">📈</span> Indicateurs de performance
          </h3>
          <p className="text-[#1E172D]/65 text-sm leading-relaxed mb-5">
            Les indicateurs sont mis à jour à chaque clôture de cohorte. Les chiffres ci-dessous
            seront communiqués après la première cohorte certifiée.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { label: 'Taux de satisfaction', val: '—' },
              { label: 'Taux de complétion', val: '—' },
              { label: 'Taux de recommandation', val: '—' },
              { label: 'Nombre de bénéficiaires', val: '—' },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-[#F6F1EB]/60 border border-[#1E172D]/6 rounded-xl px-4 py-3"
              >
                <div
                  className="text-2xl font-extrabold text-[#1E172D]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {s.val}
                </div>
                <div
                  className="text-[11px] text-[#1E172D]/55 uppercase tracking-wider font-semibold mt-0.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Réclamation & médiation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="bg-white rounded-2xl border border-[#1E172D]/8 p-6 md:p-8"
        >
          <h3
            className="text-base font-bold text-[#1E172D] mb-3 flex items-center gap-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="text-lg">⚖️</span> Réclamation &amp; médiation
          </h3>
          <p className="text-[#1E172D]/75 text-sm leading-relaxed">
            Toute réclamation peut être adressée par email à{' '}
            <a
              href="mailto:contact@butzi-speaker.com?subject=R%C3%A9clamation%20%E2%80%94%20Programme%20Entrepreneurs%20Augment%C3%A9s"
              className="text-[#A68AFF] hover:underline font-semibold"
            >
              contact@butzi-speaker.com
            </a>
            . Une réponse écrite est garantie sous 15 jours ouvrés. En cas de désaccord
            persistant, le médiateur de la consommation compétent peut être saisi conformément
            aux dispositions du Code de la consommation.
          </p>
          <p className="text-[#1E172D]/45 text-xs leading-relaxed mt-4">
            Dernière mise à jour des informations Qualiopi&nbsp;: mai 2026. Pour toute question
            relative à la conformité de la formation, contactez le référent administratif.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
