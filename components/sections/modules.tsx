'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import { ProgramEmailButton } from '@/components/ui/program-email-button'

/* Révélation premium : fondu + flou + légère montée, easing soyeux. */
const premiumReveal: Variants = {
  hidden: { opacity: 0, y: 30, filter: 'blur(14px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
}

/* ── Sessions (aperçu landing : nom + une phrase) ──
   Le détail complet de chaque session vit sur la page formation. */
type Session = {
  n: string
  week: string
  title: string
  desc: string
}

const programmeSessions: Session[] = [
  {
    n: '·',
    week: 'Semaine 1',
    title: 'Paramétrage des outils et rencontre',
    desc: "Vous rencontrez la communauté d'entrepreneurs, installez vos outils et arrivez en semaine 2 prêt à produire.",
  },
  {
    n: '1',
    week: 'Module 1 · Semaine 2',
    title: 'Poser des fondations solides',
    desc: "Comprendre ce que l'IA peut vraiment faire pour votre business. Architecture et subtilités de prompt, connecter Claude à vos outils. Premier résultat concret avant la fin de la session.",
  },
  {
    n: '2',
    week: 'Module 2 · Semaine 3',
    title: 'Gagner du temps tout de suite',
    desc: "Des résultats immédiats sur vos tâches les plus pénibles et chronophages. Créez vos documents sans hallucination.",
  },
  {
    n: '3',
    week: 'Module 3 · Semaine 4',
    title: "Utilisez l'IA comme un partenaire stratégique",
    desc: 'Prenez du recul sur votre business. Clarifiez votre vision, tranchez vos décisions importantes et créez votre dashboard stratégique pluggé sur vos données.',
  },
  {
    n: '4',
    week: 'Module 4 · Semaine 5',
    title: "L'IA dans le Marketing",
    desc: "Clarifiez votre message, créez du contenu qui parle vraiment à votre cible et construisez votre site, le tout avec l'IA.",
  },
  {
    n: '5',
    week: 'Module 5 · Semaine 6',
    title: 'Plus de prospects et des offres plus claires',
    desc: 'Construisez une offre solide, trouvez les bonnes personnes, closez avec confiance. Et présentez le tout avec des supports interactifs clairs.',
  },
  {
    n: '6',
    week: 'Module 6 · Semaine 7',
    title: 'Configurer vos assistants et automatismes IA',
    desc: "Donnez à l'IA la forme de votre activité. Vous construisez vos propres process IA pour que ce qui prenait des heures se fasse en quelques minutes, sans perdre la main.",
  },
  {
    n: '·',
    week: 'Semaine 8',
    title: 'Session de groupe',
    desc: "Session de groupe. On traite vos cas concrets en live, on ancre vos nouvelles habitudes et on cale votre plan d'action pour la suite. Vous repartez autonome.",
  },
]

/* ── Bloc Qualiopi ── */
const ficheQualiopi: [string, string][] = [
  ['Intitulé officiel', 'Accélération IA 360 : Méthode Levier'],
  ['Organisme', 'BUTZI EURL, organisme de formation certifié Qualiopi (SIRET 84759310000013)'],
  ['Modalité', 'Formation à distance : distanciel synchrone via classes virtuelles de groupe hebdomadaires'],
  ['Durée totale', '12 heures de formation, sur 8 semaines'],
  ['Sessions live', '8 classes virtuelles de 90 minutes'],
  ['Public visé', 'Entrepreneurs, indépendants, consultants, coaches, formateurs, freelances'],
  ['Prérequis', 'Avoir un ordinateur avec une connexion internet ; niveau débutant en IA accepté'],
  ['Effectif', '10 participants maximum par cohorte'],
  ['Accessibilité', 'Formation accessible aux personnes en situation de handicap. Contactez-nous pour adapter les modalités.'],
]

const objectifsQualiopi = [
  'Configurer et paramétrer un assistant IA adapté à son activité professionnelle',
  'Concevoir des prompts structurés et efficaces pour ses cas d\'usage métier',
  'Produire des documents professionnels (emails, devis, contrats, contenus marketing) assistés par l\'IA',
  'Construire une stratégie de contenu et de prospection augmentée par l\'IA',
  'Évaluer la pertinence et les limites d\'un outil IA pour un cas d\'usage donné',
]

const evaluationQualiopi = [
  'Évaluation de positionnement en début de formation (auto-évaluation)',
  'Quiz de validation des acquis à chaque module',
  'Projet final : construction de son « Système IA Personnel » (cas pratique évalué)',
  'Enquête de satisfaction en fin de formation',
  'Seuil de réussite : 80 % aux évaluations',
]

/* ── Bornes de départ et d'arrivée (style allégé) ── */
const startBorne = {
  label: 'Semaine 1 · point de départ',
  title: 'Embarquement.',
  text: 'On installe vos outils et vous rencontrez la communauté. Vous arrivez en semaine 2 prêt à produire.',
}

const endBorne = {
  label: 'Semaine 8 · atterrissage',
  title: 'Session de groupe.',
  text: 'On traite vos cas concrets en live et on ancre vos nouvelles habitudes. Vous repartez autonome.',
  detail: 'On débloque ensemble les dernières problématiques de chacun et vous créez votre propre roadmap sur la méthode Levier : vous repartez avec un plan d\'action clair, applicable dès le lendemain.',
}

/* ── Les 6 étapes de la Méthode Levier ── */
type LevierStep = {
  n: string
  step: string
  week: string
  objectif: string
  result: string
  highlight?: boolean
}

const levierSteps: LevierStep[] = [
  {
    n: '1',
    step: 'Clarifier',
    week: 'Semaine 2',
    objectif: "Comprendre ce que l'IA peut vraiment faire pour vous, sans jargon ni hype.",
    result: "Vous savez utiliser l'IA et repérer où elle peut vraiment vous aider.",
  },
  {
    n: '2',
    step: 'Déléguer',
    week: 'Semaine 3',
    objectif: 'Confier vos tâches répétitives (devis, mails, relances) et récupérer vos premières heures.',
    result: 'Vos premières heures récupérées, dès la semaine 3.',
  },
  {
    n: '3',
    step: 'Réinventer',
    week: 'Semaine 4',
    objectif: "Prendre du recul et repenser votre business avec l'IA comme copilote stratégique.",
    result: 'Une vision claire et un tableau de bord branché sur vos données.',
  },
  {
    n: '4',
    step: 'Amplifier',
    week: 'Semaine 5',
    objectif: 'Produire plus sans travailler plus : contenu, visibilité et marketing augmentés.',
    result: 'Un système de contenu qui travaille pour vous.',
  },
  {
    n: '5',
    step: 'Assumer',
    week: 'Semaine 6',
    objectif: 'Construire une offre claire, oser annoncer votre prix, et vendre en restant vous-même.',
    result: 'Vous parlez à plus de clients, sans vous renier.',
  },
  {
    n: '6',
    step: 'Libérer',
    week: 'Semaine 7',
    objectif: 'Créer vos propres process IA : ce qui prenait des heures se fait en quelques minutes, et vous gardez la main.',
    result: 'Votre système IA personnel : vos corvées en quelques clics, vous aux commandes.',
    highlight: true,
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

      {/* Halos d'ambiance premium */}
      <div
        className="pointer-events-none absolute top-1/4 right-0 w-[460px] h-[460px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(166,138,255,0.10) 0%, transparent 70%)', transform: 'translate(28%, -25%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[380px] h-[380px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,255,171,0.20) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }}
      />

      <div className="relative max-w-[1140px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          id="methode"
          className="text-center mb-14 md:mb-16 scroll-mt-28"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFAB] text-[#1E172D] text-xs font-bold uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Notre méthode
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold text-[#1E172D] leading-[1.15] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            La Méthode{' '}
            <span
              className="text-transparent bg-clip-text"
              style={{ backgroundImage: 'linear-gradient(135deg, #A68AFF 0%, #7C5CE0 100%)' }}
            >
              Levier
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-[#A68AFF] text-sm md:text-base font-semibold italic tracking-wide mt-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            de «&nbsp;j&apos;ai testé ChatGPT&nbsp;» à «&nbsp;j&apos;ai mon propre système IA&nbsp;»
          </motion.p>
          <motion.p variants={fadeUp} className="text-[#1E172D]/55 text-lg max-w-[600px] mx-auto mt-5">
            6 étapes, 8 semaines. Une semaine pour s&apos;installer, six modules pour transformer, une
            semaine pour ancrer. À chaque étape, on enlève du bruit avant d&apos;ajouter de la valeur.
          </motion.p>
        </motion.div>

        {/* Timeline verticale premium : rail continu + nœuds lumineux */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.13, delayChildren: 0.08 } } }}
          className="relative max-w-[760px] mx-auto mb-12"
        >
          {/* Rail vertical dégradé */}
          <div
            className="pointer-events-none absolute left-[19px] md:left-[21px] top-5 bottom-5 w-px"
            style={{
              background:
                'linear-gradient(to bottom, transparent, rgba(166,138,255,0.5) 10%, rgba(166,138,255,0.5) 90%, transparent)',
            }}
          />

          {/* Borne de départ */}
          <motion.div variants={premiumReveal} className="relative flex items-center gap-5 md:gap-7 pb-7 md:pb-8">
            <div className="relative z-10 flex-shrink-0">
              <div
                className="w-10 h-10 md:w-11 md:h-11 rounded-full inline-flex items-center justify-center"
                style={{ background: '#F1ECFF', boxShadow: '0 0 0 3px #fff, 0 4px 12px rgba(166,138,255,0.16)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A68AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
            </div>
            <div className="flex-1 min-w-0 rounded-2xl border border-dashed border-[#A68AFF]/40 bg-[#A68AFF]/[0.04] px-5 py-4 md:px-6 md:py-5">
              <span className="block text-[10px] font-bold uppercase tracking-widest text-[#A68AFF] mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                {startBorne.label}
              </span>
              <p className="text-[#1E172D]/75 text-sm leading-relaxed">
                <span className="text-[#1E172D] font-bold" style={{ fontFamily: 'var(--font-display)' }}>{startBorne.title}</span>{' '}
                {startBorne.text}
              </p>
            </div>
          </motion.div>

          {/* 6 étapes Levier */}
          {levierSteps.map((s) => (
            <motion.div key={s.n} variants={premiumReveal} className="relative flex items-center gap-5 md:gap-7 pb-7 md:pb-8">
              {/* Nœud numéroté lumineux */}
              <div className="relative z-10 flex-shrink-0">
                <div
                  className="w-10 h-10 md:w-11 md:h-11 rounded-full inline-flex items-center justify-center text-sm md:text-base font-semibold text-white"
                  style={{
                    fontFamily: 'var(--font-display)',
                    background: 'linear-gradient(145deg, #3A2860 0%, #A68AFF 100%)',
                    boxShadow: s.highlight
                      ? '0 0 0 3px #fff, 0 0 0 5px rgba(255,255,171,0.7), 0 5px 14px rgba(166,138,255,0.35)'
                      : '0 0 0 3px #fff, 0 4px 12px rgba(166,138,255,0.25)',
                  }}
                >
                  {s.n}
                </div>
              </div>

              {/* Carte */}
              <motion.div
                whileHover={{
                  y: -3,
                  boxShadow: s.highlight ? '0 24px 56px rgba(166,138,255,0.28)' : '0 22px 50px rgba(166,138,255,0.20)',
                  transition: { type: 'spring', stiffness: 300, damping: 24 },
                }}
                className="group relative overflow-hidden flex-1 min-w-0 rounded-2xl p-5 md:p-6"
                style={{
                  background: s.highlight
                    ? 'linear-gradient(180deg, rgba(166,138,255,0.10), rgba(166,138,255,0.03))'
                    : 'linear-gradient(180deg, #ffffff, #FBFAFF)',
                  border: s.highlight ? '1px solid rgba(166,138,255,0.5)' : '1px solid rgba(30,23,45,0.07)',
                  boxShadow: s.highlight ? '0 16px 44px rgba(166,138,255,0.16)' : '0 4px 20px rgba(30,23,45,0.04)',
                }}
              >
                {/* Voile teinté au survol — version claire/transparente de la couleur des cercles */}
                <div className="pointer-events-none absolute inset-0 bg-[#A68AFF]/0 group-hover:bg-[#A68AFF]/[0.08] transition-colors duration-1000 ease-out" />
                <div className="relative">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#A68AFF]" style={{ fontFamily: 'var(--font-display)' }}>
                    {s.week}
                  </span>
                  {s.highlight && (
                    <span
                      className="text-[9px] font-bold uppercase tracking-widest text-[#1E172D] bg-[#FFFFAB] rounded-full px-2 py-0.5"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Temps fort
                    </span>
                  )}
                </div>
                <h3 className="text-lg md:text-xl font-extrabold text-[#1E172D] tracking-tight mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
                  {s.step}
                </h3>
                <p className="text-[#1E172D]/65 text-sm leading-relaxed">{s.objectif}</p>
                {/* Résultat : caché par défaut (desktop), révélé en fondu au survol */}
                <div className="overflow-hidden transition-all duration-1000 ease-out max-h-0 opacity-0 mt-0 md:group-hover:max-h-24 md:group-hover:opacity-100 md:group-hover:mt-3">
                  <div className="flex items-start gap-2 pt-3 border-t border-[#1E172D]/[0.06]">
                    <span className="text-[#A68AFF] font-bold leading-snug" style={{ fontFamily: 'var(--font-display)' }}>›</span>
                    <span className="text-[#1E172D]/70 text-sm font-medium leading-snug">{s.result}</span>
                  </div>
                </div>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* Borne d'arrivée — carte qui se déplie au survol, comme les étapes */}
          <motion.div variants={premiumReveal} className="relative flex items-center gap-5 md:gap-7">
            <div className="relative z-10 flex-shrink-0">
              <div
                className="w-10 h-10 md:w-11 md:h-11 rounded-full inline-flex items-center justify-center"
                style={{ background: '#F1ECFF', boxShadow: '0 0 0 3px #fff, 0 4px 12px rgba(166,138,255,0.16)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#A68AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
            </div>
            <motion.div
              whileHover={{
                y: -3,
                boxShadow: '0 22px 50px rgba(166,138,255,0.20)',
                transition: { type: 'spring', stiffness: 300, damping: 24 },
              }}
              className="group relative overflow-hidden flex-1 min-w-0 rounded-2xl p-5 md:p-6"
              style={{
                background: 'linear-gradient(180deg, #ffffff, #FBFAFF)',
                border: '1px solid rgba(30,23,45,0.07)',
                boxShadow: '0 4px 20px rgba(30,23,45,0.04)',
              }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[#A68AFF]/0 group-hover:bg-[#A68AFF]/[0.08] transition-colors duration-1000 ease-out" />
              <div className="relative">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#A68AFF] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                  {endBorne.label}
                </span>
                <h3 className="text-lg md:text-xl font-extrabold text-[#1E172D] tracking-tight mb-1.5" style={{ fontFamily: 'var(--font-display)' }}>
                  {endBorne.title}
                </h3>
                <p className="text-[#1E172D]/65 text-sm leading-relaxed">{endBorne.text}</p>
                {/* Détail : caché par défaut (desktop), révélé en fondu au survol */}
                <div className="overflow-hidden transition-all duration-1000 ease-out max-h-0 opacity-0 mt-0 md:group-hover:max-h-32 md:group-hover:opacity-100 md:group-hover:mt-3">
                  <div className="flex items-start gap-2 pt-3 border-t border-[#1E172D]/[0.06]">
                    <span className="text-[#A68AFF] font-bold leading-snug" style={{ fontFamily: 'var(--font-display)' }}>›</span>
                    <span className="text-[#1E172D]/70 text-sm font-medium leading-snug">{endBorne.detail}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Programme de la formation — dépliant */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="mt-4 mb-12 max-w-[900px] mx-auto rounded-3xl border border-[#A68AFF]/25 bg-[#F6F1EB] overflow-hidden"
        >
          <details className="group">
            <summary className="flex items-center gap-3 px-6 md:px-8 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-[#A68AFF]/[0.04] transition-colors bg-white/60">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#A68AFF]/12 inline-flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A68AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
              </span>
              <div className="flex-1">
                <h3
                  className="text-lg md:text-xl font-extrabold text-[#1E172D] tracking-tight"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  Le programme de la formation
                </h3>
                <p className="text-[#1E172D]/50 text-xs">8 sessions de 90 minutes · cliquez pour voir le détail</p>
              </div>
              <svg
                className="w-4 h-4 text-[#1E172D]/40 transition-transform duration-200 group-open:rotate-180 flex-shrink-0"
                fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

            <div className="px-6 md:px-8 py-6 md:py-7 border-t border-[#1E172D]/[0.06]">
              <p className="text-[#1E172D]/55 text-sm mb-6 leading-relaxed">
                Une classe virtuelle de 90 minutes chaque semaine, le mardi de 9h30 à 11h.{' '}
                <span className="text-[#1E172D]/45">Replays disponibles, rattrapage possible.</span>
              </p>
              <div className="space-y-2.5">
                {programmeSessions.map((s) => (
                  <SessionRow key={s.week} s={s} color="#A68AFF" />
                ))}
              </div>
            </div>
          </details>
        </motion.div>

        {/* Bloc Qualiopi — dépliant principal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="max-w-[900px] mx-auto mb-12 rounded-3xl border border-[#A68AFF]/25 bg-[#F6F1EB] overflow-hidden"
        >
          <details className="group">
            <summary className="flex items-center gap-3 px-6 md:px-8 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:bg-[#A68AFF]/[0.04] transition-colors bg-white/60">
              <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#A68AFF]/12 inline-flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A68AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <polyline points="9 12 11 14 15 9" />
                </svg>
              </span>
              <div className="flex-1">
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
              <svg
                className="w-4 h-4 text-[#1E172D]/40 transition-transform duration-200 group-open:rotate-180 flex-shrink-0"
                fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>

          <div className="px-6 md:px-8 py-6 md:py-7 space-y-3 border-t border-[#1E172D]/[0.06]">
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
          </details>
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
          <a
            href="#pricing"
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#1E172D] text-[#F6F1EB] font-bold text-sm hover:bg-[#2a1f3d] transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Rejoindre la prochaine cohorte
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
