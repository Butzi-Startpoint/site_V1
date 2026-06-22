'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import { useSwipe } from '@/lib/use-swipe'

type QuoteSegment = { text: string; bold?: boolean }
type Testimonial = {
  quote: string | QuoteSegment[]
  name: string
  designation: string
  src: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Les conseils de Butzi m'ont aidé à me défaire de certains préjugés sur des outils d'IA, à les intégrer plus rapidement dans mon travail et à gagner en fluidité et en temps.",
    name: "Daniel Marín",
    designation: "Coach Ayurveda",
    src: "/accompli/Daniel.jpg",
  },
  {
    quote: [
      { text: "Avant je tournais à 60h par semaine entre mes trois activités, sans jamais avoir le temps de créer, et je ne voyais pas comment l'IA pouvait changer ça. Butzi m'a aidé à construire un vrai système : aujourd'hui l'IA gère ma prise de notes, une partie de mon admin, et l'IA est devenue un réflexe. " },
      { text: "Je suis redescendu à 45h par semaine, je dégage 8h pour la création pure, et mon chiffre d'affaires a grimpé de 35% sur quatre mois.", bold: true },
      { text: " Le projet qui résume tout ça : j'ai créé Growth Cats, avec Claude. Sans coder. Et je respire enfin un peu !" },
    ],
    name: "Nabeel Arshad",
    designation: "Growth Cats · One With Magic — magicien & entrepreneur",
    src: "/accompli/nabeel.jpeg",
  },
  {
    quote:
      "J'utilisais déjà certains outils IA de manière isolée et je sentais que j'utilisais à peine 10% de leur potentiel. Après la formation, ma vision a changé : je commence par une stratégie globale où l'IA m'accompagne dès le début, avant de rentrer dans le détail, notamment sur l'automatisation. Nous avons même pu créer notre propre ERP qu'aucun autre outil du marché n'était en mesure de faire. Un gain de temps énorme et des choses impossibles à envisager avant !",
    name: "Guillaume Touzé",
    designation: "Association Easy Way",
    src: "/accompli/guillaume.jpg",
  },
  {
    quote:
      "Avant de travailler avec Butzi, j'avais quelques notions sur l'IA : je comprenais globalement ce que c'était et à quoi ça servait, mais je n'étais absolument pas conscient de l'ampleur et du potentiel qu'elle pouvait avoir. La première chose que Butzi a apportée, ça a été de m'aider à mettre de l'ordre dans toutes les informations que j'avais déjà en tête, tout en élargissant énormément ma compréhension du sujet. Sa formation m'a surtout été très utile dans ma manière d'utiliser l'IA au quotidien : j'ai réalisé que ce n'était pas un outil limité à une seule fonction, mais quelque chose de beaucoup plus vaste, avec des possibilités presque infinies.",
    name: "Paul Rivenc",
    designation: "Done Design",
    src: "/accompli/Paul.jpeg",
  },
]

function renderQuote(quote: string | QuoteSegment[]) {
  const segments = Array.isArray(quote) ? quote : [{ text: quote }]
  return segments.map((s, i) =>
    s.bold ? (
      <strong key={i} className="text-[#1E172D] font-bold">{s.text}</strong>
    ) : (
      <span key={i}>{s.text}</span>
    ),
  )
}

export function CircularTestimonialsSection() {
  const [active, setActive] = useState(0)
  const len = testimonials.length
  const goNext = () => setActive((i) => (i + 1) % len)
  const goPrev = () => setActive((i) => (i - 1 + len) % len)
  const swipe = useSwipe(goNext, goPrev)
  const t = testimonials[active]

  return (
    <section className="bg-[#F6F1EB] py-16 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A68AFF]/20 to-transparent" />

      {/* Halo d'ambiance */}
      <div
        className="pointer-events-none absolute top-1/4 right-0 w-[440px] h-[440px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(166,138,255,0.12) 0%, transparent 70%)', transform: 'translate(30%, -20%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(255,255,171,0.22) 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }}
      />

      <div className="relative max-w-[1140px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
          className="text-center mb-10 md:mb-12"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFAB] text-[#1E172D] text-xs font-bold uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Des vrais résultats
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold text-[#1E172D] leading-[1.15] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ce qu&apos;ils ont <span className="text-[#A68AFF]">accompli</span>
          </motion.h2>
        </motion.div>

        {/* Carte témoignage */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative max-w-[760px] mx-auto select-none"
          {...swipe}
        >
          <div className="relative rounded-3xl bg-white border border-[#1E172D]/[0.08] shadow-[0_24px_60px_rgba(30,23,45,0.10)] px-7 py-9 md:px-12 md:py-12 overflow-hidden">
            {/* Barre d'accent en haut */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#A68AFF] via-[#A68AFF]/60 to-[#FFFFAB]" />

            {/* Guillemet décoratif */}
            <span
              className="absolute -top-6 right-5 md:right-8 text-[140px] md:text-[180px] leading-none text-[#A68AFF]/[0.10] font-serif select-none pointer-events-none"
              aria-hidden="true"
            >
              &rdquo;
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: 'easeInOut' }}
              >
                <p className="relative text-[#1E172D]/80 text-lg md:text-xl leading-relaxed font-medium">
                  {renderQuote(t.quote)}
                </p>

                <div className="flex items-center gap-4 mt-8 pt-6 border-t border-[#1E172D]/[0.08]">
                  <img
                    src={t.src}
                    alt={t.name}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-[#A68AFF]/40 flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <p
                      className="text-[#1E172D] font-bold text-base md:text-lg leading-tight"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {t.name}
                    </p>
                    <p className="text-[#1E172D]/55 text-sm leading-snug">{t.designation}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation par avatars */}
          <div className="flex items-center justify-center gap-3 md:gap-4 mt-7">
            {testimonials.map((item, i) => (
              <button
                key={item.src}
                onClick={() => setActive(i)}
                aria-label={`Voir le témoignage de ${item.name}`}
                className="rounded-full transition-transform duration-300"
                style={{ transform: i === active ? 'scale(1)' : 'scale(0.82)' }}
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className={[
                    'w-11 h-11 md:w-12 md:h-12 rounded-full object-cover transition-all duration-300',
                    i === active
                      ? 'ring-2 ring-[#A68AFF] opacity-100'
                      : 'ring-1 ring-[#1E172D]/10 opacity-50 hover:opacity-90',
                  ].join(' ')}
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
