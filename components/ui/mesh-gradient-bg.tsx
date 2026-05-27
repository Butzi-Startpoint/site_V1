'use client'

import { motion } from 'framer-motion'

interface MeshGradientBgProps {
  colors?: string[]
  /** @deprecated conservé pour compat — ignoré (rendu CSS, plus de shader WebGL) */
  distortion?: number
  /** @deprecated conservé pour compat — ignoré */
  swirl?: number
  /** @deprecated conservé pour compat — ignoré */
  speed?: number
  /** @deprecated conservé pour compat — ignoré */
  offsetX?: number
  veilClassName?: string
  className?: string
}

/**
 * Fond dégradé « mesh » en CSS pur (remplace l'ancien shader WebGL
 * @paper-design/shaders-react, trop coûteux). Deux couches de radial-gradients
 * qui dérivent lentement en transform GPU — quasi gratuit pour le CPU.
 * S'étire sur son parent positionné en absolute.
 */
export function MeshGradientBg({
  colors = ['#1E172D', '#2A1F45', '#A68AFF', '#D8D0FF', '#FFFFAB', '#F6F1EB'],
  veilClassName = 'bg-[#1E172D]/55',
  className = '',
}: MeshGradientBgProps) {
  const [c0, c1, c2, c3, c4] = [
    colors[0] ?? '#1E172D',
    colors[1] ?? '#2A1F45',
    colors[2] ?? '#A68AFF',
    colors[3] ?? '#D8D0FF',
    colors[4] ?? '#FFFFAB',
  ]

  const layerA =
    `radial-gradient(60% 60% at 18% 22%, ${c2}cc 0%, transparent 60%),` +
    `radial-gradient(55% 55% at 82% 8%, ${c3}b3 0%, transparent 55%),` +
    `radial-gradient(70% 70% at 72% 88%, ${c1} 0%, transparent 60%)`

  const layerB =
    `radial-gradient(50% 50% at 88% 70%, ${c4}99 0%, transparent 55%),` +
    `radial-gradient(60% 60% at 10% 85%, ${c2}99 0%, transparent 55%),` +
    `radial-gradient(50% 50% at 40% 40%, ${c3}80 0%, transparent 50%)`

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ backgroundColor: c0 }}
    >
      <motion.div
        className="absolute -inset-[20%]"
        style={{ background: layerA, willChange: 'transform' }}
        animate={{ scale: [1, 1.12, 1], x: ['0%', '4%', '0%'], y: ['0%', '-3%', '0%'] }}
        transition={{ duration: 26, ease: 'easeInOut', repeat: Infinity }}
      />
      <motion.div
        className="absolute -inset-[20%]"
        style={{ background: layerB, willChange: 'transform', mixBlendMode: 'screen' }}
        animate={{ scale: [1.1, 1, 1.1], x: ['0%', '-5%', '0%'], y: ['0%', '4%', '0%'] }}
        transition={{ duration: 32, ease: 'easeInOut', repeat: Infinity }}
      />
      <div className={`absolute inset-0 ${veilClassName}`} />
    </div>
  )
}
