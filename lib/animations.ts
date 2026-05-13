import type { Variants } from 'framer-motion'

/* ── Spring config presets ── */
export const springSnappy  = { type: 'spring', stiffness: 400, damping: 30 } as const
export const springSmooth  = { type: 'spring', stiffness: 200, damping: 25 } as const
export const springBouncy  = { type: 'spring', stiffness: 300, damping: 20 } as const
export const tweenFast     = { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] } as const
export const tweenSmooth   = { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } as const

/* ── Fade variants ── */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { ...tweenSmooth } },
}

export const fadeUpSpring: Variants = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { ...springSmooth } },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
}

export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { ...tweenSmooth } },
}

export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { ...tweenSmooth } },
}

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { ...springSmooth } },
}

export const scaleInSpring: Variants = {
  hidden:  { opacity: 0, scale: 0.88, y: 16 },
  visible: { opacity: 1, scale: 1,   y: 0,  transition: { ...springBouncy } },
}

export const slideLeft: Variants = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { ...tweenSmooth } },
}

/* ── Stagger containers ── */
export const stagger: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}

export const staggerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.02 } },
}

export const staggerSlow: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

/* ── Viewport config ── */
export const viewport     = { once: true, margin: '-80px' } as const
export const viewportEarly = { once: true, margin: '-40px' } as const
