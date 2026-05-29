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
    image: "/accompli/guillaume.jpg",
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
    text: "En 3 semaines j'avais déjà récupéré 6h par semaine sur mes emails et devis. Le ROI est immédiat, pas besoin d'attendre la fin du programme.",
    image: "/retours/diana-chao.jpg",
    name: "Diana Chao",
    role: "Chez Mama Ly",
  },
  // Retours complémentaires
  {
    text: "Il a ouvert les esprits et nous a fourni des outils précis pour mettre en application l'IA dans notre quotidien professionnel.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Léna T.",
    role: "CerFrance",
  },
  {
    text: "Très bonne intervention sur l'utilisation de l'IA ! Merci pour votre intervention inspirante.",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Valérie Daviré",
    role: "Secrétaire médicale indépendante",
  },
  {
    text: "Le propos est pertinent, l'animation est rythmée et tonique, l'atmosphère toujours bienveillante. Ce détour inspirant a été apprécié à chaque fois par les participants.",
    image: "https://randomuser.me/api/portraits/women/47.jpg",
    name: "Laurène Castor",
    role: "Openclassrooms",
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
