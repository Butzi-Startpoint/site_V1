'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import { CircularTestimonials } from '@/components/ui/circular-testimonials'

const testimonials = [
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

export function CircularTestimonialsSection() {
  return (
    <section className="bg-[#F6F1EB] py-16 md:py-20 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A68AFF]/20 to-transparent" />

      <div className="max-w-[1140px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
          className="text-center mb-12"
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
            Ce qu&apos;ils ont{' '}
            <span className="text-[#A68AFF]">accompli</span>
          </motion.h2>
        </motion.div>

        {/* Component */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center"
        >
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name:                "#1E172D",
              designation:         "#1E172D99",
              testimony:           "#1E172Dcc",
              arrowBackground:     "#1E172D",
              arrowForeground:     "#F6F1EB",
              arrowHoverBackground:"#A68AFF",
            }}
            fontSizes={{
              name:        "22px",
              designation: "14px",
              quote:       "17px",
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
