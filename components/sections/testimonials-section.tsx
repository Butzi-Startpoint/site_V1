'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import { TestimonialsColumn, type Testimonial } from '@/components/ui/testimonials-columns-1'

const testimonials: Testimonial[] = [
  // Vrais retours
  {
    text: "Butzi m'a aidé à intégrer l'IA bien plus vite dans mon travail et à gagner en fluidité et en temps.",
    image: "/accompli/Daniel.jpg",
    name: "Daniel Marín",
    role: "Coach Ayurveda",
  },
  {
    text: "Je suis redescendu à 45h par semaine, je dégage 8h pour la création pure, et mon chiffre d'affaires a grimpé de 35% sur quatre mois.",
    image: "/accompli/nabeel.jpeg",
    name: "Nabeel Arshad",
    role: "Growth Cats · One With Magic",
  },
  {
    text: "Nous avons pu créer notre propre ERP, qu'aucun autre outil du marché n'était en mesure de faire. Un gain de temps énorme.",
    image: "/accompli/Guillaume.jpg",
    name: "Guillaume Touzé",
    role: "Association Easy Way",
  },
  {
    text: "J'ai réalisé que l'IA n'était pas limitée à un usage précis, mais quelque chose de beaucoup plus vaste, aux possibilités presque infinies.",
    image: "/accompli/Paul.jpeg",
    name: "Paul Rivenc",
    role: "Done Design",
  },
  {
    text: "J'utilisais l'IA au hasard, sans vraie méthode. Aujourd'hui j'ai un système clair qui gère mes contenus et une partie de mon administratif — je récupère facilement une journée par semaine.",
    image: "/retours/diana-chao.jpg",
    name: "Diana Chao",
    role: "Chez Mama Ly",
  },
  // Retours complémentaires
  {
    text: "En 3 semaines j'avais déjà récupéré 6h par semaine sur mes emails et devis. Le ROI est immédiat, pas besoin d'attendre la fin du programme.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Marie Leroy",
    role: "Consultante RH indépendante",
  },
  {
    text: "J'avais testé 4 formations IA avant celle-ci. C'est la première qui part vraiment de mon business et pas d'un outil. La différence est énorme.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Thomas Mercier",
    role: "Fondateur, Buildlab Studio",
  },
  {
    text: "Mon système de contenu tourne maintenant en quasi-autonome. Je publie 3x plus qu'avant en y passant 2x moins de temps.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Sofia Aziz",
    role: "Coach certifiée & fondatrice",
  },
  {
    text: "J'ai arrêté de passer mes dimanches à préparer ma semaine. L'IA s'en charge. Je me concentre enfin sur ce que j'aime faire.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Camille Rousseau",
    role: "Architecte d'intérieur freelance",
  },
]

const firstColumn  = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn  = testimonials.slice(6, 9)

export function TestimonialsSection() {
  return (
    <section className="bg-[#F6F1EB] py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A68AFF]/20 to-transparent" />

      <div className="max-w-[1140px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="flex flex-col items-center text-center max-w-[540px] mx-auto mb-12"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-[#1E172D] text-[#FFFFAB] text-xs font-bold uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Des vrais résultats
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold text-[#1E172D] leading-[1.15] tracking-tight mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Les retours d&apos;entrepreneurs{' '}
            <span className="text-[#A68AFF]">après l&apos;accompagnement</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[#1E172D]/55 text-base leading-relaxed">
            Des entrepreneurs qui ont intégré l&apos;IA dans leur quotidien.
          </motion.p>
        </motion.div>

        {/* Scrolling columns */}
        <div className="flex justify-center gap-5 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[680px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn}  duration={18} />
          <TestimonialsColumn testimonials={secondColumn} duration={22} className="hidden md:block" />
          <TestimonialsColumn testimonials={thirdColumn}  duration={20} className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}
