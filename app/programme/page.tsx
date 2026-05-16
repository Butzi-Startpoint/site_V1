import type { Metadata } from 'next'
import { Navbar } from '@/components/sections/navbar'
import { FooterSection } from '@/components/sections/footer-section'
import { ProgrammeHero } from '@/components/sections/programme/hero'
import { ProgrammePhases } from '@/components/sections/programme/phases'
import { ProgrammeCtaMid } from '@/components/sections/programme/cta-mid'
import { ProgrammeDuree } from '@/components/sections/programme/duree'
import { ProgrammeModalites } from '@/components/sections/programme/modalites'
import { ProgrammePrerequis } from '@/components/sections/programme/prerequis'
import { ProgrammeAccessibilite } from '@/components/sections/programme/accessibilite'
import { ProgrammeInscription } from '@/components/sections/programme/inscription'
import { ProgrammeQualiopi } from '@/components/sections/programme/qualiopi'
import { ProgrammeDownload } from '@/components/sections/programme/download'
import { ProgrammeCtaFinal } from '@/components/sections/programme/cta-final'

export const metadata: Metadata = {
  title: 'Programme détaillé — Méthode 3S de Butzi | StartPoint IA',
  description:
    "Programme complet, modules détaillés, modalités d'évaluation, prérequis, accessibilité et inscription. Formation certifiée Qualiopi de 6 semaines pour indépendants.",
}

export default function ProgrammePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[64px] bg-[#F6F1EB]">
        <ProgrammeHero />
        <ProgrammePhases />
        <ProgrammeCtaMid />
        <ProgrammeDuree />
        <ProgrammeModalites />
        <ProgrammePrerequis />
        <ProgrammeAccessibilite />
        <ProgrammeDownload />
        <ProgrammeInscription />
        <ProgrammeQualiopi />
        <ProgrammeCtaFinal />
      </main>
      <FooterSection />
    </>
  )
}
