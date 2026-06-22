'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'

const bonuses = [
  {
    num: 'Bonus 1',
    title: 'Kit Accélérateur "Premiers résultats en 48h"',
    desc: '5 systèmes d\'IA prêts à l\'emploi (emails pro, posts LinkedIn, devis, comptes-rendus, veille métier). Vous gagnez du temps avant même la première session.',
    value: '297 €',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E172D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    num: 'Bonus 2',
    title: 'Bibliothèque de Cas d\'Usage IA par Métier',
    desc: '+40 cas d\'usage classés par profil (consultant, coach, formateur, freelance) avec le prompt exact et le résultat attendu.',
    value: '297 €',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E172D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
      </svg>
    ),
  },
  {
    num: 'Bonus 3',
    title: 'Garantie Zéro Session Perdue',
    desc: 'Replay sous 24h + résumé écrit avec les actions clés. Vous manquez une session, vous ne perdez rien.',
    value: '197 €',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E172D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        <polyline points="9 12 11 14 15 10"/>
      </svg>
    ),
  },
  {
    num: 'Bonus 4',
    title: 'Kit opérationnel à chaque module',
    desc: 'Templates, skills IA, prompts, checklists, systèmes d\'IA. Tout ce qu\'il faut pour appliquer immédiatement, testé sur +120 entrepreneurs.',
    value: '297 €',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E172D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    num: 'Bonus 5',
    title: 'Mises à jour à vie',
    desc: 'L\'IA évolue chaque mois. Votre cours aussi. Accès permanent aux nouvelles vidéos, prompts et méthodes ajoutés au programme.',
    value: '497 €',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1E172D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/>
        <polyline points="1 20 1 14 7 14"/>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
      </svg>
    ),
  },
]

const cardVariant = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring' as const, stiffness: 220, damping: 24 } },
}

export function Bonuses() {
  return (
    <section className="bg-[#F6F1EB] py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-[800px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
          className="text-center mb-10"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFAB] text-[#1E172D] text-xs font-bold uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Bonus
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-extrabold text-[#1E172D] leading-[1.2] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Bonus inclus dans{' '}
            <span className="text-[#A68AFF]">toutes les offres</span>
          </motion.h2>
        </motion.div>

        {/* Bonus cards — repliés par défaut (mobile + desktop), clic pour dérouler */}
        <details className="group mb-8 rounded-2xl border border-[#1E172D]/10 bg-white/60 overflow-hidden">
          <summary className="flex items-center gap-3 px-5 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-[#A68AFF]/[0.04] transition-colors">
            <span
              className="flex-shrink-0 w-9 h-9 rounded-xl bg-[#FFFFAB] inline-flex items-center justify-center text-[#1E172D] font-extrabold text-sm"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              5
            </span>
            <div className="flex-1">
              <p className="text-[#1E172D] font-bold text-sm md:text-base" style={{ fontFamily: 'var(--font-display)' }}>
                Voir le détail des 5 bonus
              </p>
              <p className="text-[#1E172D]/50 text-xs">Inclus dans toutes les offres · valeur 1&nbsp;585&nbsp;€</p>
            </div>
            <svg
              className="w-4 h-4 text-[#1E172D]/40 transition-transform duration-200 group-open:rotate-180 flex-shrink-0"
              fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
            className="space-y-4 px-4 md:px-5 pb-5 pt-1"
          >
          {bonuses.map((b) => (
            <motion.div
              key={b.num}
              variants={cardVariant}
              whileHover={{
                y: -3,
                transition: { type: 'spring', stiffness: 300, damping: 22 },
              }}
              className="flex gap-5 rounded-2xl p-6 cursor-default relative overflow-hidden bg-white"
              style={{
                border: '1px solid rgba(30,23,45,0.07)',
              }}
            >
              {/* Icon in yellow */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                style={{ background: '#FFFFAB' }}
              >
                {b.icon}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-1.5">
                  <div>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest text-[#A68AFF] block mb-0.5"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {b.num}
                    </span>
                    <h3
                      className="text-[#1E172D] font-bold text-base leading-snug"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {b.title}
                    </h3>
                  </div>
                  <span
                    className="flex-shrink-0 text-[#A68AFF] font-bold text-sm whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {b.value}
                  </span>
                </div>
                <p className="text-[#1E172D]/60 text-sm leading-relaxed">{b.desc}</p>
              </div>
            </motion.div>
          ))}
          </motion.div>
        </details>

        {/* Hero comparison block — value vs price, cliquable vers les offres */}
        <motion.a
          href="#pricing"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.01 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative block rounded-3xl overflow-hidden p-8 md:p-12 cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #1E172D 0%, #2a1f3d 100%)',
            boxShadow: '0 24px 64px rgba(30,23,45,0.25)',
          }}
        >
          {/* Accent glows */}
          <div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,171,0.18) 0%, transparent 70%)',
            }}
          />
          <div
            className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(166,138,255,0.15) 0%, transparent 70%)',
            }}
          />

          {/* Breakdown — comparatif pleine largeur */}
          <div className="relative w-full">
            <div className="space-y-2.5">
              <div className="flex items-baseline justify-between gap-6 text-[#F6F1EB]/85">
                <span className="text-sm md:text-base">
                  Programme{' '}
                  <span style={{ fontFamily: 'var(--font-tech)' }}>Accélération IA 360</span>{' '}
                  complet
                </span>
                <span
                  className="font-bold text-base md:text-lg whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  4 488 €
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-6 text-[#F6F1EB]/85">
                <span className="text-sm md:text-base">Tous les bonus inclus</span>
                <span
                  className="font-bold text-base md:text-lg whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  + 1 585 €
                </span>
              </div>
              <div className="h-px bg-[#F6F1EB]/15 my-2" />
              <div className="flex items-baseline justify-between gap-6">
                <span
                  className="text-[#F6F1EB] text-base md:text-lg font-bold"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Valeur cumulée totale
                </span>
                <span
                  className="text-[#F6F1EB]/60 text-2xl md:text-3xl font-extrabold whitespace-nowrap line-through decoration-[#A68AFF]/70 decoration-[3px]"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  6 073 €
                </span>
              </div>
              <div className="flex items-baseline justify-between gap-6 pt-1">
                <span
                  className="text-[#FFFFAB] text-base md:text-lg font-bold"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  À partir de
                </span>
                <span
                  className="text-[#FFFFAB] text-3xl md:text-4xl font-extrabold tracking-tight whitespace-nowrap leading-none"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  2 997 €
                </span>
              </div>
            </div>
          </div>
        </motion.a>
      </div>
    </section>
  )
}
