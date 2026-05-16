'use client'

import { MeshGradient } from '@paper-design/shaders-react'

interface MeshGradientBgProps {
  colors?: string[]
  distortion?: number
  swirl?: number
  speed?: number
  offsetX?: number
  veilClassName?: string
  className?: string
}

/** Animated mesh gradient background. Stretches to its absolutely-positioned parent. */
export function MeshGradientBg({
  colors = ['#1E172D', '#2A1F45', '#A68AFF', '#D8D0FF', '#FFFFAB', '#F6F1EB'],
  distortion = 1.0,
  swirl = 0.7,
  speed = 0.35,
  offsetX = 0.08,
  veilClassName = 'bg-[#1E172D]/55',
  className = '',
}: MeshGradientBgProps) {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      <MeshGradient
        width="100%"
        height="100%"
        colors={colors}
        distortion={distortion}
        swirl={swirl}
        grainMixer={0}
        grainOverlay={0}
        speed={speed}
        offsetX={offsetX}
        style={{ width: '100%', height: '100%' }}
      />
      <div className={`absolute inset-0 ${veilClassName}`} />
    </div>
  )
}
