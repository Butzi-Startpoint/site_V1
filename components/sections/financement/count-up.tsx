'use client'

import { useEffect, useState } from 'react'

type Props = {
  to: number
  prefix?: string
  suffix?: string
  durationMs?: number
  className?: string
  startDelay?: number
}

export function CountUp({
  to,
  prefix = '',
  suffix = ' €',
  durationMs = 1400,
  className,
  startDelay = 0,
}: Props) {
  const [val, setVal] = useState(0)

  useEffect(() => {
    let raf = 0
    const startTimeout = setTimeout(() => {
      const startTime = performance.now()
      const tick = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / durationMs, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setVal(Math.round(to * eased))
        if (progress < 1) raf = requestAnimationFrame(tick)
      }
      raf = requestAnimationFrame(tick)
    }, startDelay)
    return () => {
      clearTimeout(startTimeout)
      cancelAnimationFrame(raf)
    }
  }, [to, durationMs, startDelay])

  return (
    <span className={className}>
      {prefix}
      {val.toLocaleString('fr-FR')}
      {suffix}
    </span>
  )
}
