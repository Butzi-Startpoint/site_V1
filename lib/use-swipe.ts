import { useRef } from 'react'

interface SwipeHandlers {
  onTouchStart: (e: React.TouchEvent) => void
  onTouchMove: (e: React.TouchEvent) => void
  onTouchEnd: () => void
}

/**
 * Détection de swipe horizontal sur mobile.
 * Renvoie des handlers à étaler sur l'élément à rendre swipable.
 * Le seuil par défaut (50px) évite de déclencher sur un simple tap.
 */
export function useSwipe(
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  threshold = 50,
): SwipeHandlers {
  const startX = useRef<number | null>(null)
  const startY = useRef<number | null>(null)
  const deltaX = useRef(0)
  const deltaY = useRef(0)

  return {
    onTouchStart: (e) => {
      startX.current = e.touches[0].clientX
      startY.current = e.touches[0].clientY
      deltaX.current = 0
      deltaY.current = 0
    },
    onTouchMove: (e) => {
      if (startX.current === null || startY.current === null) return
      deltaX.current = e.touches[0].clientX - startX.current
      deltaY.current = e.touches[0].clientY - startY.current
    },
    onTouchEnd: () => {
      // Ignore les gestes majoritairement verticaux (scroll de page)
      if (Math.abs(deltaX.current) > threshold && Math.abs(deltaX.current) > Math.abs(deltaY.current)) {
        if (deltaX.current < 0) onSwipeLeft()
        else onSwipeRight()
      }
      startX.current = null
      startY.current = null
    },
  }
}
