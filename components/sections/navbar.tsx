'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, useScroll, useSpring } from 'framer-motion'
import { CtaChevronButton } from '@/components/ui/cta-chevron-button'
import { MorphingLogo } from '@/components/ui/morphing-logo'
import { CertLink } from '@/components/ui/qualiopi-badge'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
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
        <div className="max-w-[1280px] mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo animé */}
          <Link href="/" className="flex items-center no-underline group cursor-pointer">
            {/* Mobile : GIF qui se transforme en wordmark « Accélération IA 360 » */}
            <span className="md:hidden">
              <MorphingLogo />
            </span>
            {/* Desktop : GIF inchangé */}
            <img
              src="/startpoint-logo.gif"
              alt="StartPoint IA"
              className="hidden md:block h-40 w-auto object-contain -my-12"
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
            Prochaine cohorte octobre 2026
          </CtaChevronButton>

          {/* Qualiopi — mobile uniquement : logo + mention en dessous, ouvre le certificat */}
          <CertLink
            ariaLabel="Organisme de formation certifié Qualiopi — voir le certificat"
            className="md:hidden flex-col items-center gap-1.5"
          >
            <span className="inline-flex bg-white rounded-xl px-3 py-2 shadow-[0_2px_10px_rgba(30,23,45,0.12)]">
              <img src="/qualiopi-logo.png" alt="Certifié Qualiopi" className="h-11 w-auto" />
            </span>
            <span
              className="text-[#1E172D] text-[9px] font-semibold leading-tight text-center max-w-[112px]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Organisme de formation certifié Qualiopi
            </span>
          </CertLink>
        </div>
      </motion.header>
    </>
  )
}
