'use client'

import { LogoCloud } from '@/components/ui/logo-cloud-3'

// Logos clients (PNG à fond transparent) — rendus en silhouette blanche
// par le filtre du LogoCloud (brightness(0) invert(1) opacity(0.7)).
const logos = [
  { alt: 'Chanel', src: '/logos/chanel.png', heightClass: 'h-3.5 md:h-4' },
  { alt: 'TED', src: '/logos/ted.png' },
  { alt: 'Samsung', src: '/logos/Samsung.png' },
  { alt: 'Airbus', src: '/logos/Airbus_Logo_2017.svg.png', heightClass: 'h-4 md:h-5' },
  { alt: 'Mindvalley', src: '/logos/Mindvalley.png', heightClass: 'h-5 md:h-6' },
  { alt: 'Bpifrance', src: '/logos/Bpifrance_logo.svg.png' },
  { alt: 'CCI', src: '/logos/CCI.png', heightClass: 'h-16 md:h-[72px]' },
  { alt: 'DCF', src: '/logos/DCF_Logo_Nom_complet.png', heightClass: 'h-8 md:h-10' },
]

export function ClientsBar() {
  return (
    <div className="bg-[#1E172D] py-5 px-6 relative">
      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A68AFF]/30 to-transparent" />

      <p
        className="text-center text-[#F6F1EB]/70 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Ils ont fait confiance à Butzi
      </p>

      <LogoCloud logos={logos} />

      {/* Bottom separator */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A68AFF]/20 to-transparent" />
    </div>
  )
}
