'use client'

import { useEffect, useRef, useState } from 'react'

const CIPHER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@%&/=+<>*'

type Props = {
  text: string
  className?: string
  style?: React.CSSProperties
  /** ms entre chaque frame d'animation */
  speed?: number
  /** nombre de frames brouillées avant de figer chaque lettre */
  revealEvery?: number
  /** délai avant le démarrage (ms) */
  delay?: number
}

/**
 * Effet "déchiffrage / cipher" : le texte se brouille puis se révèle
 * lettre par lettre, de gauche à droite. Rendu SSR-safe (affiche le
 * texte final au premier paint, puis démarre l'animation au montage).
 */
export function ScrambleText({
  text,
  className,
  style,
  speed = 45,
  revealEvery = 2,
  delay = 150,
}: Props) {
  const [display, setDisplay] = useState(text)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    // Respecte prefers-reduced-motion
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setDisplay(text)
      return
    }

    const chars = Array.from(text)
    let revealed = 0
    let tick = 0

    const start = () => {
      intervalRef.current = setInterval(() => {
        tick++
        const out = chars
          .map((ch, i) => {
            if (ch === ' ') return ' '
            if (i < revealed) return ch
            return CIPHER[Math.floor(Math.random() * CIPHER.length)]
          })
          .join('')
        setDisplay(out)
        if (tick % revealEvery === 0) revealed++
        if (revealed > chars.length) {
          setDisplay(text)
          if (intervalRef.current) clearInterval(intervalRef.current)
        }
      }, speed)
    }

    timeoutRef.current = setTimeout(start, delay)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [text, speed, revealEvery, delay])

  return (
    <span className={className} style={style} aria-label={text}>
      {display}
    </span>
  )
}
