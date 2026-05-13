'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import type { Variants } from 'framer-motion'

const cardSpring: Variants = {
  hidden:  { opacity: 0, y: 32, scale: 0.96 },
  visible: { opacity: 1, y: 0,  scale: 1,
    transition: { type: 'spring', stiffness: 220, damping: 24 } },
}

const modules = [
  { num: 'Module 1', title: 'Poser les fondations',
    desc: "Panorama des outils IA, sécurité, prompting avancé. Emails : reformuler, nuancer, adapter le ton. Présenter visuellement avec Claude.",
    livrable: 'Vos premiers prompts maîtrisés + un email pro réécrit' },
  { num: 'Module 2', title: 'Gagnez du temps de suite',
    desc: "Des résultats immédiats sur vos tâches chronophages. Organisation optimisée, documents légaux en minutes, recherche et veille accélérées, notes automatiques.",
    livrable: "1 document légal prêt à l'emploi + semaine type optimisée" },
  { num: 'Module 3', title: 'Marketing augmenté',
    desc: "Clarifiez votre message, créez du contenu qui parle à votre cible. Persona, posts et visuels IA, votre site fait avec l'IA, 1 contenu = 5 formats.",
    livrable: '1 post publié + calendrier éditorial + site en ligne' },
  { num: 'Module 4', title: 'Vente augmentée',
    desc: "Construisez une offre solide, trouvez les bonnes personnes, closez avec confiance. Présentations commerciales percutantes, fidélisation et upsell.",
    livrable: '1 offre structurée + proposition commerciale chiffrée' },
  { num: 'Module 5', title: 'Débloquez votre quotidien',
    desc: "L'IA devient un outil sur mesure pour votre métier. Créez vos propres projets, Claude Skills, vibe coding, visuels et design sur mesure.",
    livrable: 'Votre création codée + des templates Claude Skills' },
  { num: 'Module 6', title: "L'IA comme partenaire stratégique",
    desc: "Prenez du recul sur votre business. Clarifiez vos idées, explorez des pistes, prenez de meilleures décisions. Stratégie CA augmentée.",
    livrable: 'Votre stratégie business augmentée + dashboard livrable' },
]

const Livrable = ({ text, dark = false }: { text: string; dark?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, x: -8 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={viewport}
    transition={{ duration: 0.4, delay: 0.2 }}
    className={`flex items-center gap-2.5 text-sm font-semibold px-4 py-2.5 rounded-xl mt-auto ${
      dark
        ? 'bg-[#A68AFF]/15 border border-[#A68AFF]/25 text-[#D8D0FF]'
        : 'bg-[#A68AFF]/8 border border-[#A68AFF]/15 text-[#1E172D]/75'
    }`}
    style={{ fontFamily: 'var(--font-display)' }}
  >
    <span className="text-base">✨</span>
    <span>{text}</span>
  </motion.div>
)

export function Modules() {
  return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden" id="modules">
      {/* Subtle top gradient */}
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
            className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFAB] text-[#1E172D] text-xs font-bold uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Les 7 modules
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold text-[#1E172D] leading-[1.15] tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Semaine par semaine,{' '}
            <span className="text-[#A68AFF]">vous montez en puissance.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#1E172D]/55 text-lg">
            Chaque module combine session live, cours en ligne et missions pratiques.
          </motion.p>
        </motion.div>

        {/* Session préparatoire — full width */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="mb-5"
        >
          <motion.div
            whileHover={{ y: -3, boxShadow: '0 12px 36px rgba(255,255,171,0.2)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="rounded-2xl p-7 md:p-8 cursor-default relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,171,0.15) 0%, rgba(255,255,171,0.08) 100%)',
              border: '1px solid rgba(255,255,171,0.45)',
            }}
          >
            <span
              className="text-xs font-bold uppercase tracking-widest text-[#A68AFF] mb-2 block"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Session préparatoire
            </span>
            <h3 className="text-xl font-bold text-[#1E172D] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Préparation &amp; paramétrage
            </h3>
            <p className="text-[#1E172D]/60 text-sm leading-relaxed mb-5 max-w-3xl">
              On se connaît, on paramètre vos outils, on prépare le terrain. Ice breaker, communauté WhatsApp,
              fonctionnalité audio — vous arrivez en semaine 1 prêt à produire.
            </p>
            <Livrable text="Votre outil configuré pour votre métier" />
          </motion.div>
        </motion.div>

        {/* Modules 1–6 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5"
        >
          {modules.map((m) => (
            <motion.div
              key={m.num}
              variants={cardSpring}
              whileHover={{
                y: -6,
                boxShadow: '0 16px 48px rgba(30,23,45,0.09)',
                transition: { type: 'spring', stiffness: 300, damping: 22 },
              }}
              className="bg-white border border-[#1E172D]/8 rounded-2xl p-7 flex flex-col cursor-default relative overflow-hidden group"
            >
              {/* Hover gradient top-left corner */}
              <motion.div
                className="absolute -top-12 -left-12 w-32 h-32 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(166,138,255,0.1) 0%, transparent 70%)' }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              />

              <span
                className="text-xs font-bold uppercase tracking-widest text-[#A68AFF] mb-2"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {m.num}
              </span>
              <h3 className="text-xl font-bold text-[#1E172D] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
                {m.title}
              </h3>
              <p className="text-[#1E172D]/58 text-sm leading-relaxed mb-5 flex-1">{m.desc}</p>
              <Livrable text={m.livrable} />
            </motion.div>
          ))}
        </motion.div>

        {/* Module 7 — dark full width */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="mb-12"
        >
          <motion.div
            whileHover={{ y: -4, boxShadow: '0 20px 60px rgba(30,23,45,0.3)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 24 }}
            className="bg-[#1E172D] rounded-2xl p-7 md:p-8 cursor-default relative overflow-hidden"
          >
            {/* Glow orb */}
            <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 80% 20%, rgba(166,138,255,0.15) 0%, transparent 60%)' }} />

            <span className="text-xs font-bold uppercase tracking-widest text-[#A68AFF] mb-2 block" style={{ fontFamily: 'var(--font-display)' }}>
              Module 7
            </span>
            <h3 className="text-xl font-bold text-[#F6F1EB] mb-3" style={{ fontFamily: 'var(--font-display)' }}>
              Votre système IA personnel
            </h3>
            <p className="text-[#F6F1EB]/55 text-sm leading-relaxed mb-5 max-w-3xl">
              Agents, connecteurs Claude, plan d&apos;action — construisez le système qui tourne pour vous.
              Et la question qui compte : qu&apos;allez-vous changer dès demain ?
            </p>
            <Livrable text="Votre plan d'action IA complet + système opérationnel" dark />
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="text-center"
        >
          <motion.a
            href="#pricing"
            whileHover={{ scale: 1.04, boxShadow: '0 12px 32px rgba(255,255,171,0.3)' }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FFFFAB] text-[#1E172D] font-bold text-base cursor-pointer shimmer-hover"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Rejoindre la prochaine cohorte →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
