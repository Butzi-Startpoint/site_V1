'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import { PhoneRevealButton } from '@/components/ui/phone-reveal-button'
import { ProgramEmailButton } from '@/components/ui/program-email-button'
import type { Variants } from 'framer-motion'

const cardSpring: Variants = {
  hidden:  { opacity: 0, y: 32, scale: 0.96 },
  visible: { opacity: 1, y: 0,  scale: 1,
    transition: { type: 'spring', stiffness: 220, damping: 24 } },
}

/* ── Sessions (aperçu landing : nom + une phrase) ──
   Le détail complet de chaque session vit sur la page formation. */
type Session = {
  n: string
  week: string
  title: string
  desc: string
}

const programmePhases: { phase: string; color: string; sessions: Session[] }[] = [
  {
    phase: 'Phase 1 — Simplifier',
    color: '#A68AFF',
    sessions: [
      {
        n: '1',
        week: 'Semaine 1',
        title: 'Poser les fondations',
        desc: "Comprendre ce que l'IA peut vraiment faire pour votre business. Produire votre premier résultat concret avant la fin de la session.",
      },
      {
        n: '2',
        week: 'Semaine 2',
        title: 'Gagnez du temps de suite',
        desc: "Des résultats immédiats sur vos tâches les plus chronophages. Organisation, documents légaux, recherche : tout s'accélère.",
      },
    ],
  },
  {
    phase: 'Phase 2 — Scaler',
    color: '#1E172D',
    sessions: [
      {
        n: '3',
        week: 'Semaine 3',
        title: 'Vision stratégique augmentée',
        desc: 'Prenez du recul sur votre business. Clarifiez votre vision, explorez de nouvelles pistes, tranchez vos décisions importantes.',
      },
      {
        n: '4',
        week: 'Semaine 4',
        title: 'Marketing augmenté',
        desc: "Clarifiez votre message, créez du contenu qui parle vraiment à votre cible et construisez votre site, le tout avec l'IA.",
      },
      {
        n: '5',
        week: 'Semaine 5',
        title: 'Vente augmentée',
        desc: 'Construisez une offre solide, trouvez les bonnes personnes, closez avec confiance. Et présentez le tout avec des supports qui font la différence.',
      },
    ],
  },
  {
    phase: 'Phase 3 — Systématiser',
    color: '#A68AFF',
    sessions: [
      {
        n: '6',
        week: 'Semaine 6',
        title: 'Débloquer son quotidien',
        desc: "L'IA devient un outil sur mesure pour votre métier. Créez vos propres projets, codez sans coder, débloquez votre quotidien.",
      },
      {
        n: '7',
        week: 'Semaine 7',
        title: 'Votre système IA personnel',
        desc: "Transformez les semaines d'apprentissage en habitudes durables. Standardisez, simplifiez, automatisez, et passez à l'action pour de bon.",
      },
    ],
  },
]

/* ── Bloc Qualiopi ── */
const ficheQualiopi: [string, string][] = [
  ['Intitulé officiel', 'Accélération IA 360 — Méthode 3S'],
  ['Organisme', 'BUTZI EURL — Organisme de formation certifié Qualiopi (SIRET 84759310000013)'],
  ['Modalité', 'Formation à distance (FOAD) — 100 % asynchrone via plateforme LMS, accompagnée de classes virtuelles de groupe hebdomadaires'],
  ['Durée totale', "35 heures de formation (modules e-learning + exercices d'application + évaluations), sur 8 semaines"],
  ['Sessions live', '8 classes virtuelles de 90 minutes (accompagnement collectif, non obligatoire pour la validation)'],
  ['Public visé', 'Indépendants, consultants, coaches, formateurs, freelances'],
  ['Prérequis', "Activité indépendante depuis minimum 2 ans ; usage quotidien d'outils numériques ; niveau débutant en IA accepté"],
  ['Effectif', '8 participants maximum par cohorte'],
  ['Accessibilité', 'Formation accessible aux personnes en situation de handicap. Contactez-nous pour adapter les modalités.'],
]

const objectifsQualiopi = [
  'Configurer et paramétrer un assistant IA adapté à son activité professionnelle',
  'Concevoir des prompts structurés et efficaces pour ses cas d\'usage métier',
  'Produire des documents professionnels (emails, devis, contrats, contenus marketing) assistés par l\'IA',
  'Construire une stratégie de contenu et de prospection augmentée par l\'IA',
  'Mettre en place des automatisations et un système d\'outils IA opérationnel et documenté',
  'Évaluer la pertinence et les limites d\'un outil IA pour un cas d\'usage donné',
]

const evaluationQualiopi = [
  'Évaluation de positionnement en début de formation (auto-évaluation)',
  'Quiz de validation des acquis à chaque module',
  'Projet final : construction de son « Système IA Personnel » (cas pratique évalué)',
  'Enquête de satisfaction en fin de formation',
  'Seuil de réussite : 80 % aux évaluations',
]

const phases = [
  {
    num: 'Phase 1',
    label: 'Semaines 1–2',
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
    label: 'Semaines 6–7',
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

/* ── Sous-composants ── */
function MiniList({ items, color }: { items: string[]; color: string }) {
  return (
    <ul className="space-y-1.5">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2 text-[13px] text-[#1E172D]/70 leading-snug">
          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: color }} />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  )
}

/* Aperçu d'une session : nom + une phrase, sans détail. */
function SessionRow({ s, color }: { s: Session; color: string }) {
  return (
    <div className="flex items-start gap-3 bg-white rounded-2xl border border-[#1E172D]/10 px-4 md:px-5 py-4">
      <span
        className="flex-shrink-0 w-8 h-8 rounded-lg inline-flex items-center justify-center text-sm font-bold"
        style={{ background: `${color}1f`, color, fontFamily: 'var(--font-display)' }}
      >
        {s.n}
      </span>
      <div className="flex-1 min-w-0">
        <span className="block text-[10px] font-bold uppercase tracking-widest" style={{ color }}>
          {s.week}
        </span>
        <span
          className="block text-[#1E172D] font-bold text-sm md:text-[15px] leading-snug tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {s.title}
        </span>
        <p className="text-[#1E172D]/60 text-sm leading-relaxed mt-1">{s.desc}</p>
      </div>
    </div>
  )
}

/* Menu déroulant générique (accordéon). */
function Dropdown({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  return (
    <details
      className="group rounded-2xl border border-[#1E172D]/10 bg-white overflow-hidden"
      {...(defaultOpen ? { open: true } : {})}
    >
      <summary className="flex items-center gap-3 px-5 md:px-6 py-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-[#A68AFF]/[0.04] transition-colors">
        <span
          className="flex-1 text-[#1E172D] font-bold text-sm md:text-base tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {title}
        </span>
        <svg
          className="w-4 h-4 text-[#1E172D]/40 transition-transform duration-200 group-open:rotate-180 flex-shrink-0"
          fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </summary>
      <div className="px-5 md:px-6 pb-6 pt-1 border-t border-[#1E172D]/[0.06]">{children}</div>
    </details>
  )
}

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
            <span className="text-[#A68AFF]">8 semaines.</span>
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

        {/* Aperçu des sessions (nom + une phrase) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="mt-4 mb-12"
        >
          <motion.h3
            variants={fadeUp}
            className="text-center text-xs font-bold uppercase tracking-widest text-[#1E172D]/45 mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Au programme · 8 sessions de 90 minutes
          </motion.h3>
          <motion.p
            variants={fadeUp}
            className="text-center text-[#1E172D]/55 text-sm max-w-[560px] mx-auto mb-8 leading-relaxed"
          >
            Une classe virtuelle de 90 minutes chaque semaine, le mardi de 9h30 à 11h.{' '}
            <span className="text-[#1E172D]/45">Replays disponibles, rattrapage possible.</span>
          </motion.p>

          <div className="max-w-[860px] mx-auto space-y-8">
            {programmePhases.map((ph) => (
              <motion.div key={ph.phase} variants={fadeUp}>
                {/* En-tête de phase */}
                <div className="flex items-center gap-2.5 mb-3 px-1">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: ph.color }} />
                  <h4
                    className="text-[11px] font-bold uppercase tracking-widest text-[#1E172D]/55"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {ph.phase}
                  </h4>
                </div>
                <div className="space-y-2.5">
                  {ph.sessions.map((s) => (
                    <SessionRow key={s.n} s={s} color={ph.color} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bloc Qualiopi — menus déroulants */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="max-w-[900px] mx-auto mb-12 rounded-3xl border border-[#A68AFF]/25 bg-[#F6F1EB] overflow-hidden"
        >
          {/* En-tête */}
          <div className="flex items-center gap-3 px-6 md:px-8 py-5 border-b border-[#1E172D]/8 bg-white/60">
            <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#A68AFF]/12 inline-flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A68AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <polyline points="9 12 11 14 15 9" />
              </svg>
            </span>
            <div>
              <h3
                className="text-lg md:text-xl font-extrabold text-[#1E172D] tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Cadre &amp; certification Qualiopi
              </h3>
              <p className="text-[#1E172D]/50 text-xs">
                Organisme certifié Qualiopi · informations réglementaires
              </p>
            </div>
          </div>

          <div className="px-6 md:px-8 py-6 md:py-7 space-y-3">
            {/* Modalités de formation */}
            <Dropdown title="Modalités de formation">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 mt-4">
                {ficheQualiopi.map(([label, value]) => (
                  <div key={label} className="border-b border-[#1E172D]/8 pb-3">
                    <dt
                      className="text-[10px] font-bold uppercase tracking-widest text-[#A68AFF] mb-1"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {label}
                    </dt>
                    <dd className="text-[#1E172D]/80 text-[13px] leading-relaxed">{value}</dd>
                  </div>
                ))}
              </dl>
            </Dropdown>

            {/* Objectifs pédagogiques */}
            <Dropdown title="Objectifs pédagogiques">
              <p className="text-[#1E172D]/55 text-[13px] mb-3 mt-4">
                À l&apos;issue de la formation, le stagiaire sera capable de&nbsp;:
              </p>
              <MiniList items={objectifsQualiopi} color="#A68AFF" />
            </Dropdown>

            {/* Modalités d'évaluation */}
            <Dropdown title="Modalités d'évaluation">
              <div className="mt-4">
                <MiniList items={evaluationQualiopi} color="#A68AFF" />
              </div>
            </Dropdown>

            {/* Financement */}
            <p className="pt-3 text-[13px] text-[#1E172D]/70 leading-relaxed">
              <span className="font-bold text-[#1E172D]" style={{ fontFamily: 'var(--font-display)' }}>
                Financement&nbsp;:
              </span>{' '}
              formation éligible aux prises en charge FAF (AGEFICE, FIF-PL, FAFCEA).{' '}
              <a href="/financement" className="text-[#A68AFF] font-bold hover:underline">
                Voir la page financement →
              </a>
            </p>
          </div>
        </motion.div>

        {/* CTA : recevoir le programme + appel */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <ProgramEmailButton label="Recevoir le programme complet" />
          <PhoneRevealButton
            label="Appel gratuit pour plus d'informations"
            className="px-7 py-3.5 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  )
}
