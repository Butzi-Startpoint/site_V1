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
 * lettre par lettre. Se déclenche quand l'élément entre dans le viewport
 * (une seule fois). Rendu SSR-safe : le texte final est affiché au premier
 * paint, puis l'animation démarre.
 */
export function ScrambleText({
  text,
  className,
  style,
  speed = 45,
  revealEvery = 2,
  delay = 80,
}: Props) {
  const [display, setDisplay] = useState(text)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setDisplay(text)
      return
    }

    let started = false
    let interval: ReturnType<typeof setInterval> | null = null
    let timeout: ReturnType<typeof setTimeout> | null = null

    const run = () => {
      if (started) return
      started = true
      const chars = Array.from(text)
      let revealed = 0
      let tick = 0
      timeout = setTimeout(() => {
        interval = setInterval(() => {
          tick++
          setDisplay(
            chars
              .map((ch, i) => {
                if (ch === ' ') return ' '
                if (i < revealed) return ch
                return CIPHER[Math.floor(Math.random() * CIPHER.length)]
              })
              .join(''),
          )
          if (tick % revealEvery === 0) revealed++
          if (revealed > chars.length) {
            setDisplay(text)
            if (interval) clearInterval(interval)
          }
        }, speed)
      }, delay)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            run()
            io.disconnect()
          }
        })
      },
      { threshold: 0.5 },
    )
    io.observe(el)

    return () => {
      io.disconnect()
      if (interval) clearInterval(interval)
      if (timeout) clearTimeout(timeout)
    }
  }, [text, speed, revealEvery, delay])

  return (
    <span ref={ref} className={className} style={style} aria-label={text}>
      {display}
    </span>
  )
}
