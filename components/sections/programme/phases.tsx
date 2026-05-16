'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewport } from '@/lib/animations'
import type { Variants } from 'framer-motion'

const cardSpring: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 220, damping: 24 },
  },
}

const phases = [
  {
    num: 1,
    title: 'Simplifier',
    label: 'Semaines 0–2',
    desc: "Vous gagnez du temps immédiatement. Paramétrage de vos outils, prompting avancé, premiers workflows sur vos tâches chronophages.",
    color: '#A68AFF',
    pre: {
      title: 'Préparation & paramétrage',
      tag: 'Session préparatoire',
      desc: "On se connaît, on paramètre vos outils, on prépare le terrain. Ice breaker, communauté WhatsApp, fonctionnalité audio — vous arrivez en semaine 1 prêt à produire.",
      livrable: 'Votre outil configuré pour votre métier',
    },
    modules: [
      {
        num: 'Module 1',
        title: 'Poser les fondations',
        desc: "Panorama des outils IA, sécurité, prompting avancé. Emails : reformuler, nuancer, adapter le ton. Présenter visuellement avec Claude.",
        livrable: 'Vos premiers prompts maîtrisés + un email pro réécrit',
        objectifs: [
          'Identifier les principaux outils IA et leurs usages',
          'Appliquer les bonnes pratiques de sécurité et de confidentialité',
          'Rédiger des prompts structurés et efficaces',
        ],
      },
      {
        num: 'Module 2',
        title: 'Gagnez du temps de suite',
        desc: "Des résultats immédiats sur vos tâches chronophages. Organisation optimisée, documents légaux en minutes, recherche et veille accélérées, notes automatiques.",
        livrable: "1 document légal prêt à l'emploi + semaine type optimisée",
        objectifs: [
          'Automatiser la production de documents administratifs courants',
          'Mettre en place une routine de veille et de recherche assistée par IA',
          'Optimiser son organisation hebdomadaire grâce à l\'IA',
        ],
      },
    ],
  },
  {
    num: 2,
    title: 'Scaler',
    label: 'Semaines 3–4',
    desc: "Vous produisez plus sans travailler plus. Marketing augmenté, contenu qui se décline en 5 formats, offre commerciale structurée.",
    color: '#1E172D',
    modules: [
      {
        num: 'Module 3',
        title: 'Marketing augmenté',
        desc: "Clarifiez votre message, créez du contenu qui parle à votre cible. Persona, posts et visuels IA, votre site fait avec l'IA, 1 contenu = 5 formats.",
        livrable: '1 post publié + calendrier éditorial + site en ligne',
        objectifs: [
          'Construire un persona client opérationnel',
          'Décliner un contenu en plusieurs formats (post, mail, visuel, vidéo, article)',
          'Mettre en ligne une page web simple avec l\'IA',
        ],
      },
      {
        num: 'Module 4',
        title: 'Vente augmentée',
        desc: "Construisez une offre solide, trouvez les bonnes personnes, closez avec confiance. Présentations commerciales percutantes, fidélisation et upsell.",
        livrable: '1 offre structurée + proposition commerciale chiffrée',
        objectifs: [
          'Structurer une offre claire et différenciante',
          'Produire une proposition commerciale chiffrée avec l\'IA',
          'Préparer un entretien de vente et les objections clients',
        ],
      },
    ],
  },
  {
    num: 3,
    title: 'Systématiser',
    label: 'Semaines 5–6',
    desc: "Vous construisez le système qui tourne sans vous. Projets sur mesure, agents IA, connecteurs, stratégie business augmentée, plan d'action complet.",
    color: '#A68AFF',
    modules: [
      {
        num: 'Module 5',
        title: 'Débloquez votre quotidien',
        desc: "L'IA devient un outil sur mesure pour votre métier. Créez vos propres projets, Claude Skills, vibe coding, visuels et design sur mesure.",
        livrable: 'Votre création codée + des templates Claude Skills',
        objectifs: [
          'Concevoir un projet IA adapté à son métier',
          'Créer et déployer une Claude Skill réutilisable',
          'Produire un livrable visuel sur mesure (template, dashboard, mini-app)',
        ],
      },
      {
        num: 'Module 6',
        title: "L'IA comme partenaire stratégique",
        desc: "Prenez du recul sur votre business. Clarifiez vos idées, explorez des pistes, prenez de meilleures décisions. Stratégie CA augmentée.",
        livrable: 'Votre stratégie business augmentée + dashboard livrable',
        objectifs: [
          'Utiliser l\'IA comme sparring partner stratégique',
          'Modéliser des scénarios de chiffre d\'affaires',
          'Construire un tableau de bord de pilotage simple',
        ],
      },
    ],
    post: {
      title: 'Votre système IA personnel',
      tag: 'Module 7',
      desc: "Agents, connecteurs Claude, plan d'action — construisez le système qui tourne pour vous. Et la question qui compte : qu'allez-vous changer dès demain ?",
      livrable: "Votre plan d'action IA complet + système opérationnel",
      objectifs: [
        'Identifier 3 automatisations clés pour son activité',
        'Mettre en place un agent IA simple',
        'Formaliser un plan d\'action à 90 jours',
      ],
    },
  },
]

function ModuleCard({
  m,
}: {
  m: {
    num: string
    title: string
    desc: string
    livrable: string
    objectifs: string[]
  }
}) {
  return (
    <motion.div
      variants={cardSpring}
      whileHover={{
        y: -4,
        boxShadow: '0 20px 56px rgba(166,138,255,0.16)',
        transition: { type: 'spring', stiffness: 300, damping: 22 },
      }}
      className="bg-white border border-[#1E172D]/8 rounded-2xl p-7 flex flex-col cursor-default relative overflow-hidden"
    >
      <span
        className="text-xs font-bold uppercase tracking-widest text-[#A68AFF] mb-2"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {m.num}
      </span>
      <h3
        className="text-xl font-bold text-[#1E172D] mb-3"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {m.title}
      </h3>
      <p className="text-[#1E172D]/65 text-sm leading-relaxed mb-5">{m.desc}</p>

      <div className="mb-5">
        <p
          className="text-[11px] font-bold uppercase tracking-widest text-[#1E172D]/50 mb-2"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Objectifs pédagogiques
        </p>
        <ul className="space-y-1.5">
          {m.objectifs.map((o) => (
            <li key={o} className="flex items-start gap-2 text-sm text-[#1E172D]/75 leading-relaxed">
              <span className="text-[#A68AFF] font-bold mt-0.5">›</span>
              <span>{o}</span>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="flex items-center gap-2.5 text-sm font-semibold px-4 py-2.5 rounded-xl mt-auto bg-[#A68AFF]/8 border border-[#A68AFF]/15 text-[#1E172D]/80"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        <span className="text-base">✨</span>
        <span>{m.livrable}</span>
      </div>
    </motion.div>
  )
}

function FeatureCard({
  tag,
  title,
  desc,
  livrable,
  objectifs,
}: {
  tag: string
  title: string
  desc: string
  livrable: string
  objectifs?: string[]
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      className="rounded-2xl p-7 md:p-8 relative overflow-hidden mb-4"
      style={{
        background:
          'linear-gradient(135deg, rgba(255,255,171,0.18) 0%, rgba(255,255,171,0.08) 100%)',
        border: '1px solid rgba(255,255,171,0.55)',
      }}
    >
      <span
        className="text-xs font-bold uppercase tracking-widest text-[#A68AFF] mb-2 block"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {tag}
      </span>
      <h3
        className="text-xl font-bold text-[#1E172D] mb-3"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h3>
      <p className="text-[#1E172D]/65 text-sm leading-relaxed mb-5 max-w-3xl">{desc}</p>

      {objectifs && (
        <div className="mb-5">
          <p
            className="text-[11px] font-bold uppercase tracking-widest text-[#1E172D]/50 mb-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Objectifs pédagogiques
          </p>
          <ul className="space-y-1.5">
            {objectifs.map((o) => (
              <li key={o} className="flex items-start gap-2 text-sm text-[#1E172D]/75 leading-relaxed">
                <span className="text-[#A68AFF] font-bold mt-0.5">›</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        className="inline-flex items-center gap-2.5 text-sm font-semibold px-4 py-2.5 rounded-xl bg-[#A68AFF]/12 border border-[#A68AFF]/20 text-[#1E172D]/85"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        <span className="text-base">✨</span>
        <span>{livrable}</span>
      </div>
    </motion.div>
  )
}

export function ProgrammePhases() {
  return (
    <section className="bg-white py-20 md:py-24 relative overflow-hidden" id="phases">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A68AFF]/30 to-transparent" />

      <div className="max-w-[1140px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="mb-12"
        >
          <span
            className="text-xs font-bold uppercase tracking-widest text-[#A68AFF]"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Contenu pédagogique
          </span>
          <h2
            className="text-3xl md:text-4xl font-extrabold text-[#1E172D] tracking-tight mt-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Les 3 phases &amp; 7 modules
          </h2>
          <p className="text-[#1E172D]/60 text-base mt-3 max-w-[640px]">
            Chaque module précise ses objectifs pédagogiques, son livrable et la séquence
            d&apos;apprentissage. Tout est conçu pour un transfert immédiat dans votre activité.
          </p>
        </motion.div>

        {phases.map((phase) => (
          <div key={phase.num} className="mb-14 last:mb-0">
            {/* Phase header */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="text-xs font-bold uppercase tracking-widest text-[#A68AFF] px-3 py-1 rounded-full"
                  style={{
                    fontFamily: 'var(--font-display)',
                    background: 'rgba(166,138,255,0.1)',
                    border: '1px solid rgba(166,138,255,0.2)',
                  }}
                >
                  Phase {phase.num} — {phase.title}
                </span>
                <span className="text-xs text-[#1E172D]/40 font-medium">{phase.label}</span>
                <div className="flex-1 h-px bg-gradient-to-r from-[#A68AFF]/20 to-transparent" />
              </div>
              <p className="text-[#1E172D]/65 text-sm leading-relaxed max-w-[720px]">
                {phase.desc}
              </p>
            </motion.div>

            {/* Pre-card (Phase 1) */}
            {phase.pre && (
              <FeatureCard
                tag={phase.pre.tag}
                title={phase.pre.title}
                desc={phase.pre.desc}
                livrable={phase.pre.livrable}
              />
            )}

            {/* Modules */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {phase.modules.map((m) => (
                <ModuleCard key={m.num} m={m} />
              ))}
            </motion.div>

            {/* Post-card (Phase 3 — Module 7) */}
            {phase.post && (
              <div className="mt-4">
                <FeatureCard
                  tag={phase.post.tag}
                  title={phase.post.title}
                  desc={phase.post.desc}
                  livrable={phase.post.livrable}
                  objectifs={phase.post.objectifs}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
