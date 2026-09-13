'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { viewport } from '@/lib/animations'
import { ButziVideo } from '@/components/ui/butzi-video'

/**
 * Bloc média de la section fondateur.
 * - Desktop : photo de Butzi sur le cercle jaune, avec un bouton play qui
 *   « respire » au centre. Au clic, la photo laisse place à la vidéo verticale
 *   qui démarre aussitôt (le clic vaut geste utilisateur → son autorisé).
 * - Mobile : la vidéo verticale directement (ni photo, ni cercle jaune).
 * Le choix se fait en CSS : sur mobile la photo est en display:none et ne se
 * charge pas ; sur desktop la carte vidéo n'est montée qu'au clic.
 */
export function FounderMedia() {
  const [playing, setPlaying] = useState(false)

  return (
    <>
      {/* Desktop : photo sur cercle jaune → vidéo au clic */}
      <div className="hidden md:flex relative items-center justify-center">
        {/* Cercle jaune (halo d'ambiance, conservé derrière la vidéo) */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute z-0 h-[500px] w-[500px] rounded-full"
          style={{ background: '#FFFFAB' }}
        />

        {!playing ? (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label="Lire la vidéo de présentation de Butzi"
            className="relative z-10 group cursor-pointer"
          >
            <motion.img
              src="/team/butzi.webp"
              alt="Butzi (Johannes Alinhac), fondateur de StartPoint IA"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              className="w-[420px] lg:w-[460px] h-auto object-contain [mask-image:linear-gradient(to_bottom,black_82%,transparent)]"
            />

            {/* Bouton play qui respire, centré verticalement sur la photo.
               La respiration est portée par deux ondes composées sur le GPU
               (transform + opacity uniquement). La pastille, elle, reste stable
               — on ne l'agrandit qu'au survol — pour éviter tout scintillement
               de son ombre / liseré au fil de l'animation. */}
            <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
              {/* Onde 1 */}
              <motion.span
                aria-hidden
                className="absolute h-20 w-20 rounded-full bg-white/40 will-change-transform [transform:translateZ(0)] [backface-visibility:hidden]"
                animate={{ scale: [1, 1.75], opacity: [0.5, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut' }}
              />
              {/* Onde 2, décalée pour un rythme continu de « respiration » */}
              <motion.span
                aria-hidden
                className="absolute h-20 w-20 rounded-full bg-white/30 will-change-transform [transform:translateZ(0)] [backface-visibility:hidden]"
                animate={{ scale: [1, 1.75], opacity: [0.4, 0] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut', delay: 1.3 }}
              />
              {/* Pastille play (stable, léger zoom au survol) */}
              <span className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_10px_30px_rgba(30,23,45,0.25)] ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-110">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="#1E172D" aria-hidden="true">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
          </button>
        ) : (
          <ButziVideo startImmediately className="relative z-10 w-[300px] lg:w-[320px]" />
        )}
      </div>

      {/* Mobile : vidéo verticale directement */}
      <ButziVideo className="md:hidden w-[320px] sm:w-[360px]" />
    </>
  )
}
