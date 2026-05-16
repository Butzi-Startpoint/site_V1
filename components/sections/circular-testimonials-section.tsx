'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import { CircularTestimonials } from '@/components/ui/circular-testimonials'

const testimonials = [
  {
    quote: "En 3 semaines j'avais déjà récupéré 6h par semaine sur mes emails et devis. Le ROI est immédiat, pas besoin d'attendre la fin du programme pour voir les résultats.",
    name: "Marie Leroy",
    designation: "Consultante RH indépendante",
    src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote: "J'avais testé 4 formations IA avant celle-ci. C'est la première qui part vraiment de mon business et pas d'un outil. La méthode change tout.",
    name: "Thomas Mercier",
    designation: "Fondateur, Buildlab Studio",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote: "Mon système de contenu tourne maintenant en quasi-autonomie. Je publie 3x plus qu'avant en y passant 2x moins de temps. C'est exactement ce que je cherchais.",
    name: "Sofia Aziz",
    designation: "Coach certifiée & fondatrice",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote: "Le module sur les propositions commerciales m'a changé la vie. Je génère des devis 5x plus vite, avec plus de qualité et de personnalisation.",
    name: "Julien Fabre",
    designation: "Consultant stratégie digitale",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote: "Butzi ne vend pas du rêve. Il te donne des outils concrets, adaptés à ton activité. J'ai vu les résultats dès la première session.",
    name: "Camille Rousseau",
    designation: "Architecte d'intérieur freelance",
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
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
            Témoignages
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
