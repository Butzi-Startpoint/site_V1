"use client"

import { useEffect, useRef, useState } from "react"

const experts = [
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    alt: "Expert automatisation",
    angle: 0,
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&auto=format&fit=crop&q=80",
    alt: "Experte marketing",
    angle: Math.PI / 4,
  },
  {
    src: "https://images.unsplash.com/photo-1619365734050-cb5e64a42d43?w=200&auto=format&fit=crop&q=80",
    alt: "Expert fiscal",
    angle: Math.PI / 2,
  },
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&auto=format&fit=crop&q=80",
    alt: "Experte juridique",
    angle: (3 * Math.PI) / 4,
  },
  {
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    alt: "Expert ops",
    angle: Math.PI,
  },
  {
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    alt: "Experte stratégie",
    angle: (5 * Math.PI) / 4,
  },
  {
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&auto=format&fit=crop&q=80",
    alt: "Expert IA",
    angle: (3 * Math.PI) / 2,
  },
  {
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop&q=80",
    alt: "Experte contenu",
    angle: (7 * Math.PI) / 4,
  },
]

export function ExpertsScrollAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      // start animating when section enters viewport, complete over 500px of scroll
      const start = -rect.height * 0.3
      const raw = -rect.top - start
      const p = Math.min(Math.max(raw / 500, 0), 1)
      setProgress(p)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const expandRadius = progress * 220

  return (
    <div ref={containerRef} className="min-h-[180vh] bg-[#F6F1EB]">
      <div className="h-screen flex items-center justify-center p-8 sticky top-0 overflow-hidden">
        <div className="relative">
          {/* Outer ring — fades in */}
          <div
            className="w-[560px] h-[560px] rounded-full flex items-center justify-center transition-all duration-500"
            style={{
              border: progress > 0.6 ? '1.5px solid rgba(166,138,255,0.2)' : '1.5px solid transparent',
            }}
          >
            {/* Middle ring */}
            <div
              className="w-[460px] h-[460px] rounded-full flex items-center justify-center transition-all duration-500"
              style={{
                border: progress > 0.25 ? '1.5px solid rgba(166,138,255,0.15)' : '1.5px solid transparent',
              }}
            >
              {/* Gradient ring */}
              <div
                className="w-[360px] h-[360px] rounded-full p-[2px] flex items-center justify-center relative"
                style={{
                  background: 'linear-gradient(135deg, #A68AFF, #D8D0FF, #FFFFAB)',
                }}
              >
                {/* Inner white circle */}
                <div className="w-full h-full rounded-full bg-[#F6F1EB] flex items-center justify-center relative">

                  {/* Expert photos */}
                  {experts.map((expert, i) => (
                    <div
                      key={i}
                      className="absolute w-20 h-20 rounded-2xl overflow-hidden border-4 border-[#F6F1EB] shadow-lg transition-transform duration-500 ease-out z-0"
                      style={{
                        transform: `translate(${expandRadius * Math.cos(expert.angle)}px, ${expandRadius * Math.sin(expert.angle)}px)`,
                        opacity: progress > 0.05 ? 1 : 0,
                        transitionDelay: `${i * 30}ms`,
                      }}
                    >
                      <img
                        src={expert.src}
                        alt={expert.alt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}

                  {/* Central text */}
                  <div
                    className="flex flex-col items-center justify-center relative z-20 text-center px-8 transition-all duration-500"
                    style={{
                      opacity: progress > 0.5 ? 1 : 0,
                      transform: progress > 0.5 ? 'scale(1)' : 'scale(0.95)',
                    }}
                  >
                    <span
                      className="inline-block px-3 py-1 rounded-full bg-[#A68AFF]/15 text-[#A68AFF] text-[10px] font-bold uppercase tracking-widest mb-3"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Intervenants
                    </span>
                    <h2
                      className="text-2xl font-extrabold text-[#1E172D] leading-snug mb-2"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      Des experts<br />à votre service
                    </h2>
                    <p className="text-[#1E172D]/55 text-xs leading-relaxed max-w-[180px]">
                      Juridique, fiscal, marketing, automatisation…
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
