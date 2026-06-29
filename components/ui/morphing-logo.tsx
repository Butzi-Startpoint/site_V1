'use client'

import { useEffect, useRef, useState } from 'react'
import { ScrambleText } from '@/components/ui/scramble-text'

/**
 * Logo animé du header (mobile) : le GIF "StartPoint IA" se joue une fois
 * (~5,9 s, sans boucle) puis se transforme en wordmark « Accélération IA 360 »
 * avec l'effet de déchiffrage lettre par lettre (ScrambleText).
 *
 * Le timer démarre au chargement du GIF (onLoad), avec repli si l'image est
 * déjà en cache (img.complete au montage).
 */
const GIF_DURATION_MS = 5900

export function MorphingLogo() {
  const [morphed, setMorphed] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const startTimer = () => {
    if (timerRef.current) return
    timerRef.current = setTimeout(() => setMorphed(true), GIF_DURATION_MS)
  }

  useEffect(() => {
    // Image déjà en cache : onLoad ne se déclenchera pas, on démarre ici.
    if (imgRef.current?.complete) startTimer()
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <span className="flex items-center h-12 overflow-visible">
      {morphed ? (
        <ScrambleText
          text="Accélération IA 360"
          speed={40}
          className="text-[#1E172D] text-base font-bold tracking-[0.1em] uppercase whitespace-nowrap"
          style={{ fontFamily: 'var(--font-tech)' }}
        />
      ) : (
        <img
          ref={imgRef}
          src="/startpoint-logo.gif"
          alt="StartPoint IA"
          onLoad={startTimer}
          className="h-36 w-auto object-contain -my-12"
        />
      )}
    </span>
  )
}
