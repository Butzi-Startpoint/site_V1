'use client'

import { useState, type ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'

type Faq = { q: string; a: ReactNode }

const faqs: Faq[] = [
  {
    q: 'Est-ce que je peux financer la formation avec mon CPF ?',
    a: (
      <>
        Non, la formation n&apos;est pas finançable par le CPF. Le CPF ne couvre pas
        ce type de formation pour les indépendants et dirigeants. Mais d&apos;autres
        financements existent et sont souvent plus avantageux&nbsp;: votre FAF
        (AGEFICE, FIF-PL ou FAFCEA selon votre statut), la déductibilité fiscale
        de la formation, et le crédit d&apos;impôt formation dirigeant.{' '}
        <a
          href="/financement"
          className="text-[#A68AFF] font-bold hover:underline whitespace-nowrap"
        >
          Estimez votre prise en charge en 2 min →
        </a>
      </>
    ),
  },
  {
    q: "J'ai déjà testé ChatGPT, pourquoi ce programme serait différent ?",
    a: "Tester ChatGPT sans méthode, c'est comme avoir un outil sans le mode d'emploi. Ce programme vous donne un cadre structuré, des cas d'usage concrets pour votre métier, et un accompagnement pour passer de \"j'ai essayé\" à \"je l'utilise tous les jours\".",
  },
  {
    q: 'Je ne suis pas technique, est-ce que je vais suivre ?',
    a: "Le programme est conçu spécifiquement pour des entrepreneurs non-tech. Si vous savez utiliser un ordinateur, envoyer des emails et naviguer sur internet, vous avez le niveau. Zéro code, zéro jargon technique.",
  },
  {
    q: 'Combien de temps ça demande par semaine ?',
    a: "Comptez environ 3h30 par semaine : 2h de session live + 1h à 1h30 de cours en ligne et exercices. C'est un engagement, mais c'est ce qui fait la différence avec un cours en ligne qu'on ne finit jamais.",
  },
  {
    q: 'Est-ce que je peux faire financer la formation ?',
    a: (
      <>
        Oui, la formation est certifiée Qualiopi et éligible aux financements FAF
        (AGEFICE pour les dirigeants, FIF-PL pour les professions libérales,
        FAFCEA pour les artisans). Selon votre statut, votre prise en charge peut
        couvrir plusieurs centaines d&apos;euros, à combiner avec la déductibilité
        fiscale et le crédit d&apos;impôt formation dirigeant. On vous guide dans
        les démarches.{' '}
        <a
          href="/financement"
          className="text-[#A68AFF] font-bold hover:underline whitespace-nowrap"
        >
          Estimez votre prise en charge →
        </a>
      </>
    ),
  },
  {
    q: 'Et si je rate une session ?',
    a: "Toutes les sessions sont enregistrées et les replays sont accessibles immédiatement. Cela dit, la valeur du programme vient de la pratique en live — on vous recommande d'être présent au maximum.",
  },
  {
    q: 'Quelle est la différence entre Essentiel et Momentum ?',
    a: "L'Essentiel vous donne tout le programme groupe + les ressources. Le Momentum ajoute un accompagnement personnalisé : un audit avant le programme pour cibler vos besoins, un hot seat individuel à mi-parcours, et 6 mois d'accès au Cercle StartPoint post-programme.",
  },
]

function FaqItem({ q, a, index }: { q: string; a: ReactNode; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className={`border-b border-[#1E172D]/8 last:border-0 group`}
    >
      <motion.button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left cursor-pointer"
        whileTap={{ scale: 0.995 }}
      >
        <span
          className={`font-bold text-[1.02rem] leading-snug transition-colors duration-200 ${
            open ? 'text-[#A68AFF]' : 'text-[#1E172D] group-hover:text-[#A68AFF]'
          }`}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {q}
        </span>

        {/* Animated +/- icon */}
        <motion.div
          animate={{
            rotate: open ? 45 : 0,
            backgroundColor: open ? '#A68AFF' : 'rgba(166,138,255,0.12)',
          }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
        >
          <svg
            width="14" height="14"
            viewBox="0 0 14 14"
            fill="none"
            className={`transition-colors duration-200 ${open ? 'stroke-white' : 'stroke-[#A68AFF]'}`}
            strokeWidth="2.2"
            strokeLinecap="round"
          >
            <line x1="7" y1="1" x2="7" y2="13" />
            <line x1="1" y1="7" x2="13" y2="7" />
          </svg>
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30, opacity: { duration: 0.2 } }}
            className="overflow-hidden"
          >
            <p className="text-[#1E172D]/62 text-[0.9rem] leading-relaxed pb-5 pr-12">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FaqSection() {
  return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden" id="faq">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A68AFF]/20 to-transparent" />

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
            FAQ
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold text-[#1E172D] leading-[1.15] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Vos questions fréquentes
          </motion.h2>
        </motion.div>

        {/* FAQ list */}
        <div className="max-w-[720px] mx-auto mb-12 bg-[#F6F1EB]/60 rounded-2xl px-8 py-2 border border-[#1E172D]/6">
          {faqs.map((item, i) => (
            <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </div>

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
            Choisir mon offre →
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
