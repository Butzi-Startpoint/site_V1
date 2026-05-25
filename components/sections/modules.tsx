'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import type { Variants } from 'framer-motion'

const cardSpring: Variants = {
  hidden:  { opacity: 0, y: 32, scale: 0.96 },
  visible: { opacity: 1, y: 0,  scale: 1,
    transition: { type: 'spring', stiffness: 220, damping: 24 } },
}

const phaseModules: {
  phase: string
  phaseColor: string
  pre?: { badge: string; title: string }
  modules: { num: string; title: string }[]
  post?: { badge: string; title: string }
}[] = [
  {
    phase: 'Phase 1 — Simplifier',
    phaseColor: '#A68AFF',
    pre: { badge: 'Prépa', title: 'Paramétrage & connexion des outils' },
    modules: [
      { num: '1', title: 'Poser les fondations' },
      { num: '2', title: 'Gagnez du temps tout de suite' },
    ],
  },
  {
    phase: 'Phase 2 — Scaler',
    phaseColor: '#1E172D',
    modules: [
      { num: '3', title: 'Marketing augmenté' },
      { num: '4', title: 'La vente augmentée' },
      { num: '5', title: 'Vision stratégique augmentée' },
    ],
  },
  {
    phase: 'Phase 3 — Systématiser',
    phaseColor: '#A68AFF',
    modules: [
      { num: '6', title: 'Débloquer son quotidien' },
    ],
    post: { badge: 'Inclus', title: 'Coaching de groupe : créer son plan d\'action et son système' },
  },
]

const phases = [
  {
    num: 'Phase 1',
    label: 'Semaines 0–2',
    title: 'Simplifier',
    tagline: 'Récupérez du temps dès la semaine 1',
    bullets: [
      'Vos outils IA configurés et prêts à l\'emploi',
      'Des prompts testés, adaptés à votre quotidien',
      'Vos emails et documents rédigés en quelques clics',
      'Votre veille métier qui tourne sans vous',
      'Vos premières heures récupérées chaque semaine',
    ],
    result: "Vos premières heures récupérées dès la semaine 1.",
    color: '#A68AFF',
    dotColor: '#A68AFF',
    bg: 'rgba(166,138,255,0.08)',
    border: '1px solid rgba(166,138,255,0.25)',
    iconBg: 'rgba(166,138,255,0.12)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#A68AFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.58a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z"/>
        <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7"/>
        <path d="M14.5 17.5 4.5 15"/>
      </svg>
    ),
  },
  {
    num: 'Phase 2',
    label: 'Semaines 3–5',
    title: 'Scaler',
    tagline: 'Produisez plus sans travailler plus',
    bullets: [
      'Un contenu créé une fois, décliné partout',
      'Votre marketing qui produit pendant que vous bossez',
      'Une offre claire, chiffrée, prête à envoyer',
      'Des prospects identifiés et contactés par l\'IA',
      'Vos textes et prises de parole calibrés en minutes',
    ],
    result: "Un système de contenu et une offre prêts à vendre.",
    color: '#1E172D',
    dotColor: '#1E172D',
    bg: 'rgba(255,255,171,0.25)',
    border: '1px solid rgba(255,255,171,0.7)',
    iconBg: 'rgba(255,255,171,0.5)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1E172D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
  {
    num: 'Phase 3',
    label: 'Semaines 5–6',
    title: 'Systématiser',
    tagline: 'Construisez le système qui tourne sans vous',
    bullets: [
      'Vos assistants IA sur mesure',
      'Vos tâches répétitives tournent en automatique',
      'Une feuille de route IA alignée sur vos revenus',
      'Un projet IA déployé dans votre activité',
      'Votre système complet, documenté, prêt à déléguer',
    ],
    result: "Votre système IA personnel, opérationnel et documenté.",
    color: '#A68AFF',
    dotColor: '#A68AFF',
    bg: 'rgba(30,23,45,0.04)',
    border: '1px solid rgba(30,23,45,0.12)',
    iconBg: 'rgba(30,23,45,0.08)',
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#A68AFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/>
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07M8.46 8.46a5 5 0 0 0 0 7.07"/>
      </svg>
    ),
    dark: true,
  },
]

export function Modules() {
  return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden" id="modules">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A68AFF]/30 to-transparent" />

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
            className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFAB] text-[#1E172D] text-xs font-bold uppercase tracking-widest mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            La Méthode 3S
          </motion.span>
          <motion.p
            variants={fadeUp}
            className="text-[#A68AFF] text-sm font-semibold uppercase tracking-wider mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            de &ldquo;j&apos;ai testé ChatGPT&rdquo; à &ldquo;j&apos;ai un système IA&rdquo;
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold text-[#1E172D] leading-[1.15] tracking-tight mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            3 phases.{' '}
            <span className="text-[#A68AFF]">6 semaines.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#1E172D]/55 text-lg max-w-[560px] mx-auto">
            Un chemin clair pour intégrer l&apos;IA dans votre quotidien d&apos;indépendant.
          </motion.p>
        </motion.div>

        {/* 3 Phase cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12"
        >
          {phases.map((p) => (
            <motion.div
              key={p.num}
              variants={cardSpring}
              whileHover={{
                y: -8,
                boxShadow: '0 24px 56px rgba(30,23,45,0.1)',
                transition: { type: 'spring', stiffness: 300, damping: 22 },
              }}
              className="rounded-2xl p-7 flex flex-col cursor-default relative overflow-hidden"
              style={{ background: p.bg, border: p.border }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
                style={{ background: p.iconBg }}
              >
                {p.icon}
              </div>

              {/* Phase num + label */}
              <div className="flex items-baseline gap-2 mb-1">
                <span
                  className="text-xs font-bold uppercase tracking-widest"
                  style={{ color: p.color, fontFamily: 'var(--font-display)' }}
                >
                  {p.num}
                </span>
                <span className="text-xs text-[#1E172D]/40 font-medium">{p.label}</span>
              </div>

              <h3
                className="text-2xl font-extrabold text-[#1E172D] mb-1 tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {p.title}
              </h3>

              <p className="text-[#1E172D]/45 text-xs font-medium mb-4 leading-snug">{p.tagline}</p>

              {/* Bullet list */}
              <ul className="flex flex-col gap-2 mb-5 flex-1">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span
                      className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-[5px]"
                      style={{ background: p.dotColor, opacity: 0.7 }}
                    />
                    <span className="text-[#1E172D]/70 text-sm leading-snug">{b}</span>
                  </li>
                ))}
              </ul>

              {/* Résultat */}
              <div
                className="flex items-start gap-2.5 text-sm font-semibold px-4 py-3 rounded-xl"
                style={{
                  background: p.dark ? 'rgba(166,138,255,0.1)' : 'rgba(30,23,45,0.05)',
                  border: p.dark ? '1px solid rgba(166,138,255,0.2)' : '1px solid rgba(30,23,45,0.08)',
                  fontFamily: 'var(--font-display)',
                  color: p.dark ? '#A68AFF' : '#1E172D',
                }}
              >
                <span className="mt-0.5 flex-shrink-0">→</span>
                <span className="text-[#1E172D]/70 font-medium text-xs leading-relaxed">
                  <span className="text-[#1E172D] font-bold">Résultat&nbsp;:</span> {p.result}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Détail des modules par phase */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="mt-4 mb-12"
        >
          <motion.h3
            variants={fadeUp}
            className="text-center text-xs font-bold uppercase tracking-widest text-[#1E172D]/45 mb-8"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Au programme
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-start">
            {phaseModules.map((row) => (
              <motion.div key={row.phase} variants={fadeUp}>
                {/* En-tête de phase */}
                <div className="flex items-center gap-2.5 mb-3 px-1">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: row.phaseColor }}
                  />
                  <h4
                    className="text-[11px] font-bold uppercase tracking-widest text-[#1E172D]/55"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {row.phase}
                  </h4>
                </div>

                {/* Liste fine des modules */}
                <div
                  className="rounded-2xl bg-white border border-[#1E172D]/8 overflow-hidden"
                  style={{ boxShadow: '0 1px 4px rgba(30,23,45,0.03)' }}
                >
                  {row.pre && (
                    <div className="flex items-center gap-3 px-4 py-3 border-b border-[#1E172D]/[0.06] bg-[#FFFFAB]/25">
                      <span
                        className="flex-shrink-0 inline-flex items-center justify-center px-2 h-6 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#FFFFAB] text-[#1E172D]"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {row.pre.badge}
                      </span>
                      <span className="text-[#1E172D]/70 font-medium text-sm leading-snug">
                        {row.pre.title}
                      </span>
                    </div>
                  )}
                  {row.modules.map((m) => (
                    <div
                      key={m.num}
                      className="flex items-center gap-3 px-4 py-3 border-b border-[#1E172D]/[0.06] last:border-0 transition-colors hover:bg-[#A68AFF]/[0.04]"
                    >
                      <span
                        className="flex-shrink-0 w-6 h-6 rounded-md inline-flex items-center justify-center text-[11px] font-bold bg-[#A68AFF]/12 text-[#A68AFF]"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {m.num}
                      </span>
                      <span
                        className="text-[#1E172D] font-semibold text-sm leading-snug tracking-tight"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {m.title}
                      </span>
                    </div>
                  ))}
                  {row.post && (
                    <div className="flex items-center gap-3 px-4 py-3 border-t border-[#1E172D]/[0.06] bg-[#FFFFAB]/25">
                      <span
                        className="flex-shrink-0 inline-flex items-center justify-center px-2 h-6 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[#FFFFAB] text-[#1E172D]"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {row.post.badge}
                      </span>
                      <span className="text-[#1E172D]/70 font-medium text-sm leading-snug">
                        {row.post.title}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA : recevoir le programme */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="text-center"
        >
          <a
            href="mailto:contact@startpoint-ia.fr?subject=Recevoir%20le%20programme%20Acc%C3%A9l%C3%A9ration%20IA%20360%20d%C3%A9taill%C3%A9&body=Bonjour%2C%0A%0AJe%20souhaite%20recevoir%20le%20programme%20Acc%C3%A9l%C3%A9ration%20IA%20360%20d%C3%A9taill%C3%A9.%0A%0AMerci."
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1E172D] text-[#FFFFAB] font-bold text-sm hover:bg-[#2a1f3d] transition-colors cursor-pointer"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Recevoir le programme
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
