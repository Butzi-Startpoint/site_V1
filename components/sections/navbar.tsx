'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import { CtaChevronButton } from '@/components/ui/cta-chevron-button'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 })
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const links = [
    { label: 'Accueil',     href: '/'             },
    { label: 'Programme',   href: '/#modules'     },
    { label: 'Offres',      href: '/#pricing'     },
    { label: 'Financement', href: '/financement'  },
    { label: 'FAQ',         href: '/#faq'         },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href.startsWith('/#')) return false
    return pathname === href
  }

  const ctaHref = '/#pricing'

  return (
    <>
      {/* Progress bar */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#A68AFF] via-[#D8D0FF] to-[#FFFFAB] z-[60]"
      />

      <motion.header
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#F6F1EB]/96 backdrop-blur-xl shadow-[0_4px_24px_rgba(30,23,45,0.08)] border-[#1E172D]/10'
            : 'bg-[#F6F1EB]/85 backdrop-blur-md border-transparent'
        }`}
      >
        <div className="max-w-[1140px] mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo animé — 3× plus grand (object-contain) */}
          <Link href="/" className="flex items-center no-underline group cursor-pointer -my-10 md:-my-12">
            <img
              src="/startpoint-logo.gif"
              alt="StartPoint IA"
              className="h-36 md:h-40 w-auto object-contain"
            />
          </Link>

          {/* Nav links */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors underline-grow cursor-pointer ${
                  isActive(l.href)
                    ? 'text-[#1E172D]'
                    : 'text-[#1E172D]/55 hover:text-[#1E172D]'
                }`}
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <CtaChevronButton
            as="a"
            href={ctaHref}
            tone="yellow"
            size="sm"
            className="hidden md:inline-flex"
          >
            Prochaine cohorte 23 septembre
          </CtaChevronButton>

          {/* Burger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden flex flex-col gap-1.5 p-1 cursor-pointer"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }} className="block w-6 h-0.5 bg-[#1E172D] rounded-full" />
            <motion.span animate={{ opacity: menuOpen ? 0 : 1 }}                        className="block w-6 h-0.5 bg-[#1E172D] rounded-full" />
            <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }} className="block w-6 h-0.5 bg-[#1E172D] rounded-full" />
          </motion.button>
        </div>

        {/* Mobile menu */}
        <motion.div
          initial={false}
          animate={{ height: menuOpen ? 'auto' : 0, opacity: menuOpen ? 1 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="md:hidden overflow-hidden bg-[#F6F1EB] border-t border-[#1E172D]/8"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                className={`text-base font-semibold transition-colors cursor-pointer ${
                  isActive(l.href)
                    ? 'text-[#1E172D]'
                    : 'text-[#1E172D]/65 hover:text-[#1E172D]'
                }`}
                style={{ fontFamily: 'var(--font-display)' }}>
                {l.label}
              </Link>
            ))}
            <a href={ctaHref} onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#FFFFAB] text-[#1E172D] text-sm font-semibold mt-2 cursor-pointer"
              style={{ fontFamily: 'var(--font-display)' }}>
              Prochaine cohorte 23 septembre →
            </a>
          </div>
        </motion.div>
      </motion.header>
    </>
  )
}
