'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import { TestimonialsColumn, type Testimonial } from '@/components/ui/testimonials-columns-1'

const testimonials: Testimonial[] = [
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
    text: "La méthode Butzi est concrète et applicable dès la première session. Zéro blabla, on passe directement aux systèmes d'IA.",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Julien Fabre",
    role: "Consultant stratégie digitale",
  },
  {
    text: "J'ai arrêté de passer mes dimanches à préparer ma semaine. L'IA s'en charge. Je me concentre enfin sur ce que j'aime faire.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Camille Rousseau",
    role: "Architecte d'intérieur freelance",
  },
  {
    text: "En tant que solopreneur, je n'avais pas de marge d'erreur. Ce programme m'a donné des systèmes fiables qui ne dépendent pas de ma disponibilité.",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    name: "Antoine Dubois",
    role: "Formateur indépendant",
  },
  {
    text: "Le module sur l'automatisation des propositions commerciales m'a changé la vie. Je génère des devis 5x plus vite, avec plus de qualité.",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    name: "Lucie Bernard",
    role: "Designer UX freelance",
  },
  {
    text: "Butzi ne vend pas du rêve. Il te donne des outils concrets, il t'aide à les adapter à ton activité, et tu vois les résultats immédiatement.",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Romain Petit",
    role: "Photographe professionnel",
  },
  {
    text: "La communauté seule vaut l'investissement. Des gens sérieux, qui partagent leurs systèmes d'IA, leurs prompts, leurs erreurs. Un vrai levier.",
    image: "https://randomuser.me/api/portraits/women/90.jpg",
    name: "Nadia Hamid",
    role: "Directrice de formation",
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
