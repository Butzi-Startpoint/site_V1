"use client"

import React, { useEffect, useRef, useState, useMemo, useCallback } from "react"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"

type QuoteSegment = { text: string; bold?: boolean }
interface Testimonial {
  quote: string | QuoteSegment[]
  name: string
  designation: string
  src: string
}
interface Colors {
  name?: string
  designation?: string
  testimony?: string
  arrowBackground?: string
  arrowForeground?: string
  arrowHoverBackground?: string
}
interface FontSizes {
  name?: string
  designation?: string
  quote?: string
}
interface CircularTestimonialsProps {
  testimonials: Testimonial[]
  autoplay?: boolean
  colors?: Colors
  fontSizes?: FontSizes
}

function calculateGap(width: number) {
  const minWidth = 1024, maxWidth = 1456, minGap = 60, maxGap = 86
  if (width <= minWidth) return minGap
  if (width >= maxWidth) return Math.max(minGap, maxGap + 0.06018 * (width - maxWidth))
  return minGap + (maxGap - minGap) * ((width - minWidth) / (maxWidth - minWidth))
}

export const CircularTestimonials = ({
  testimonials,
  autoplay = true,
  colors = {},
  fontSizes = {},
}: CircularTestimonialsProps) => {
  const colorName        = colors.name             ?? "#1E172D"
  const colorDesignation = colors.designation      ?? "#1E172D99"
  const colorTestimony   = colors.testimony        ?? "#1E172Dbb"
  const colorArrowBg     = colors.arrowBackground  ?? "#1E172D"
  const colorArrowFg     = colors.arrowForeground  ?? "#F6F1EB"
  const colorArrowHover  = colors.arrowHoverBackground ?? "#A68AFF"
  const fsName           = fontSizes.name          ?? "1.5rem"
  const fsDesig          = fontSizes.designation   ?? "0.925rem"
  const fsQuote          = fontSizes.quote         ?? "1.075rem"

  const [activeIndex, setActiveIndex]   = useState(0)
  const [hoverPrev,   setHoverPrev]     = useState(false)
  const [hoverNext,   setHoverNext]     = useState(false)
  const [containerW,  setContainerW]    = useState(1200)

  const containerRef   = useRef<HTMLDivElement>(null)
  const intervalRef    = useRef<NodeJS.Timeout | null>(null)
  const len            = useMemo(() => testimonials.length, [testimonials])
  const active         = useMemo(() => testimonials[activeIndex], [activeIndex, testimonials])

  useEffect(() => {
    const resize = () => { if (containerRef.current) setContainerW(containerRef.current.offsetWidth) }
    resize()
    window.addEventListener("resize", resize)
    return () => window.removeEventListener("resize", resize)
  }, [])

  // Autoplay désactivé sur mobile : la hauteur du témoignage varie selon la
  // longueur du texte (colonne unique), ce qui décalait toute la page à chaque
  // rotation pendant le scroll. Sur desktop, la colonne image (hauteur fixe)
  // domine donc aucun décalage.
  useEffect(() => {
    if (!autoplay) return
    const mq = window.matchMedia('(min-width: 768px)')
    const start = () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (mq.matches) {
        intervalRef.current = setInterval(() => setActiveIndex(p => (p + 1) % len), 5000)
      }
    }
    start()
    mq.addEventListener('change', start)
    return () => {
      mq.removeEventListener('change', start)
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [autoplay, len])

  const handleNext = useCallback(() => {
    setActiveIndex(p => (p + 1) % len)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [len])

  const handlePrev = useCallback(() => {
    setActiveIndex(p => (p - 1 + len) % len)
    if (intervalRef.current) clearInterval(intervalRef.current)
  }, [len])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev()
      if (e.key === "ArrowRight") handleNext()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [handlePrev, handleNext])

  function getImageStyle(index: number): React.CSSProperties {
    const gap = calculateGap(containerW)
    const maxStickUp = gap * 0.8
    const isActive = index === activeIndex
    const isLeft   = (activeIndex - 1 + len) % len === index
    const isRight  = (activeIndex + 1) % len === index
    if (isActive) return {
      zIndex: 3, opacity: 1, pointerEvents: "auto",
      transform: "translateX(0px) translateY(0px) scale(1) rotateY(0deg)",
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    }
    if (isLeft) return {
      zIndex: 2, opacity: 1, pointerEvents: "auto",
      transform: `translateX(-${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(15deg)`,
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    }
    if (isRight) return {
      zIndex: 2, opacity: 1, pointerEvents: "auto",
      transform: `translateX(${gap}px) translateY(-${maxStickUp}px) scale(0.85) rotateY(-15deg)`,
      transition: "all 0.8s cubic-bezier(.4,2,.3,1)",
    }
    return { zIndex: 1, opacity: 0, pointerEvents: "none", transition: "all 0.8s cubic-bezier(.4,2,.3,1)" }
  }

  const quoteVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit:    { opacity: 0, y: -20 },
  }

  return (
    <div style={{ width: "100%", maxWidth: "56rem", padding: "2rem" }}>
      <div style={{ display: "grid", gap: "5rem" }}
        className="md:grid-cols-2 grid-cols-1">
        {/* Images */}
        <div ref={containerRef}
          style={{ position: "relative", width: "100%", height: "24rem", perspective: "1000px" }}>
          {testimonials.map((t, i) => (
            <img key={t.src} src={t.src} alt={t.name}
              style={{
                position: "absolute", width: "100%", height: "100%",
                objectFit: "cover", borderRadius: "1.5rem",
                boxShadow: "0 10px 30px rgba(30,23,45,0.15)",
                ...getImageStyle(i),
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <AnimatePresence mode="wait">
            <motion.div key={activeIndex} variants={quoteVariants}
              initial="initial" animate="animate" exit="exit"
              transition={{ duration: 0.3, ease: "easeInOut" }}>
              <h3 style={{ color: colorName, fontSize: fsName, fontWeight: "bold", marginBottom: "0.25rem",
                fontFamily: "var(--font-display)" }}>
                {active.name}
              </h3>
              <p style={{ color: colorDesignation, fontSize: fsDesig, marginBottom: "2rem" }}>
                {active.designation}
              </p>
              <p style={{ color: colorTestimony, fontSize: fsQuote, lineHeight: 1.75 }}>
                {(Array.isArray(active.quote) ? active.quote : [{ text: active.quote }])
                  .flatMap((seg) =>
                    seg.text
                      .split(" ")
                      .filter(Boolean)
                      .map((w) => ({ w, bold: seg.bold })),
                  )
                  .map(({ w, bold }, i) => (
                    <motion.span key={i}
                      initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                      transition={{ duration: 0.22, ease: "easeInOut", delay: 0.025 * i }}
                      style={{ display: "inline-block", fontWeight: bold ? 700 : "inherit", color: bold ? colorName : "inherit" }}>
                      {w}&nbsp;
                    </motion.span>
                  ))}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Arrows */}
          <div style={{ display: "flex", gap: "1.5rem", paddingTop: "3rem" }}
            className="md:pt-0">
            <button onClick={handlePrev}
              onMouseEnter={() => setHoverPrev(true)}
              onMouseLeave={() => setHoverPrev(false)}
              aria-label="Précédent"
              style={{
                width: "2.7rem", height: "2.7rem", borderRadius: "50%", border: "none",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "background-color 0.3s",
                backgroundColor: hoverPrev ? colorArrowHover : colorArrowBg,
              }}>
              <FaArrowLeft size={18} color={colorArrowFg} />
            </button>
            <button onClick={handleNext}
              onMouseEnter={() => setHoverNext(true)}
              onMouseLeave={() => setHoverNext(false)}
              aria-label="Suivant"
              style={{
                width: "2.7rem", height: "2.7rem", borderRadius: "50%", border: "none",
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", transition: "background-color 0.3s",
                backgroundColor: hoverNext ? colorArrowHover : colorArrowBg,
              }}>
              <FaArrowRight size={18} color={colorArrowFg} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CircularTestimonials
