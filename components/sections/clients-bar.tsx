'use client'

import { LogoCloud } from '@/components/ui/logo-cloud-3'

// SVG wordmark data URIs for brands not on SimpleIcons
// All rendered in dark #1E172D → will be inverted to white/cream by the logo cloud filter
const svg = (content: string, w: number, h = 24) =>
  `data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${content}</svg>`,
  )}`

const logos = [
  {
    alt: 'Chanel',
    src: svg(
      `<text y="17" font-family="Georgia,'Times New Roman',serif" font-size="15" font-weight="400" letter-spacing="5" fill="#1E172D">CHANEL</text>`,
      110,
    ),
    width: 110,
  },
  {
    alt: 'Samsung',
    src: 'https://cdn.simpleicons.org/samsung/1E172D',
    width: 90,
  },
  {
    alt: 'TED',
    src: 'https://cdn.simpleicons.org/ted/1E172D',
    width: 52,
  },
  {
    alt: 'Cartier',
    src: svg(
      `<text y="17" font-family="Georgia,'Times New Roman',serif" font-size="14" font-weight="400" letter-spacing="4" fill="#1E172D">CARTIER</text>`,
      100,
    ),
    width: 100,
  },
  {
    alt: 'Airbus',
    src: 'https://cdn.simpleicons.org/airbus/1E172D',
    width: 80,
  },
  {
    alt: 'Mindvalley',
    src: svg(
      `<text y="17" font-family="Arial,Helvetica,sans-serif" font-size="14" font-weight="700" fill="#1E172D">Mindvalley</text>`,
      105,
    ),
    width: 105,
  },
  {
    alt: 'BPI France',
    src: svg(
      `<text y="17" font-family="Arial,Helvetica,sans-serif" font-size="14" font-weight="700" fill="#1E172D">Bpifrance</text>`,
      100,
    ),
    width: 100,
  },
  {
    alt: 'Hilton',
    src: 'https://cdn.simpleicons.org/hilton/1E172D',
    width: 70,
  },
  {
    alt: 'CCI France',
    src: svg(
      `<text y="17" font-family="Arial,Helvetica,sans-serif" font-size="14" font-weight="800" letter-spacing="3" fill="#1E172D">CCI</text>`,
      56,
    ),
    width: 56,
  },
]

export function ClientsBar() {
  return (
    <div className="bg-[#1E172D] py-5 px-6 relative">
      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A68AFF]/30 to-transparent" />

      <p
        className="text-center text-[#F6F1EB]/35 text-[10px] font-bold uppercase tracking-[0.2em] mb-4"
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
