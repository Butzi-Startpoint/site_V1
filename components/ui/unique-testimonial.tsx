"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    id: 1,
    quote: "J'ai divisé par 3 le temps passé sur mes devis et mes emails. En 6 semaines, j'ai des workflows qui tournent seuls.",
    author: "Marie Leroy",
    role: "Consultante RH indépendante",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 2,
    quote: "Le programme m'a donné une méthode, pas juste des outils. Aujourd'hui j'intègre l'IA dans chaque partie de mon business.",
    author: "Thomas Mercier",
    role: "Fondateur, Buildlab Studio",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: 3,
    quote: "Enfin un programme qui part de mes vrais problèmes terrain. Pas de théorie inutile — concret, actionnable, efficace.",
    author: "Sofia Aziz",
    role: "Coach certifiée & fondatrice",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
  },
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayedQuote, setDisplayedQuote] = useState(testimonials[0].quote)
  const [displayedRole, setDisplayedRole] = useState(testimonials[0].role)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const handleSelect = (index: number) => {
    if (index === activeIndex || isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setDisplayedQuote(testimonials[index].quote)
      setDisplayedRole(testimonials[index].role)
      setActiveIndex(index)
      setTimeout(() => setIsAnimating(false), 400)
    }, 200)
  }

  return (
    <div className="flex flex-col items-center gap-10 py-12">
      {/* Quote */}
      <div className="relative px-8 max-w-2xl w-full">
        <span className="absolute -left-2 -top-6 text-7xl font-serif text-[#1E172D]/[0.06] select-none pointer-events-none">&ldquo;</span>

        <p
          className={cn(
            "text-xl md:text-2xl font-light text-[#1E172D] text-center leading-relaxed transition-all duration-300 ease-out",
            isAnimating ? "opacity-0 blur-sm scale-[0.98]" : "opacity-100 blur-0 scale-100",
          )}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {displayedQuote}
        </p>

        <span className="absolute -right-2 -bottom-8 text-7xl font-serif text-[#1E172D]/[0.06] select-none pointer-events-none">&rdquo;</span>
      </div>

      <div className="flex flex-col items-center gap-5 mt-2">
        {/* Role */}
        <p
          className={cn(
            "text-xs text-[#1E172D]/40 tracking-[0.2em] uppercase transition-all duration-500 ease-out",
            isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0",
          )}
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {displayedRole}
        </p>

        {/* Avatars */}
        <div className="flex items-center justify-center gap-2">
          {testimonials.map((testimonial, index) => {
            const isActive = activeIndex === index
            const isHovered = hoveredIndex === index && !isActive
            const showName = isActive || isHovered

            return (
              <button
                key={testimonial.id}
                onClick={() => handleSelect(index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={cn(
                  "relative flex items-center gap-0 rounded-full cursor-pointer",
                  "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                  isActive ? "bg-[#1E172D] shadow-lg" : "bg-transparent hover:bg-[#1E172D]/5",
                  showName ? "pr-4 pl-2 py-2" : "p-0.5",
                )}
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className={cn(
                      "w-8 h-8 rounded-full object-cover",
                      "transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                      isActive ? "ring-2 ring-[#A68AFF]/40" : "ring-0",
                      !isActive && "hover:scale-105",
                    )}
                  />
                </div>

                <div
                  className={cn(
                    "grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]",
                    showName ? "grid-cols-[1fr] opacity-100 ml-2" : "grid-cols-[0fr] opacity-0 ml-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <span
                      className={cn(
                        "text-sm font-semibold whitespace-nowrap block",
                        "transition-colors duration-300",
                        isActive ? "text-[#F6F1EB]" : "text-[#1E172D]",
                      )}
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {testimonial.author}
                    </span>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
