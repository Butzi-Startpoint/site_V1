'use client'

import { motion } from 'framer-motion'
import { viewport } from '@/lib/animations'
import { ButziVideo } from '@/components/ui/butzi-video'

/**
 * Bloc média de la section fondateur.
 * - Desktop : photo de Butzi sur le cercle jaune (« pic Butzi »).
 * - Mobile : la vidéo verticale directement (ni photo, ni cercle jaune).
 * Le choix se fait en CSS : sur mobile la photo est en display:none et ne se
 * charge pas ; sur desktop la carte vidéo est en display:none et ne charge
 * aucune iframe.
 */
export function FounderMedia() {
  return (
    <>
      {/* Desktop : photo sur cercle jaune */}
      <div className="hidden md:flex relative items-center justify-center">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute z-0 h-[500px] w-[500px] rounded-full"
          style={{ background: '#FFFFAB' }}
        />
        <motion.img
          src="/team/butzi.webp"
          alt="Butzi (Johannes Alinhac), fondateur de StartPoint IA"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative z-10 w-[420px] lg:w-[460px] h-auto object-contain [mask-image:linear-gradient(to_bottom,black_82%,transparent)]"
        />
      </div>

      {/* Mobile : vidéo verticale directement */}
      <ButziVideo className="md:hidden w-[320px] sm:w-[360px]" />
    </>
  )
}
