import type { Metadata } from 'next'
import { Navbar } from '@/components/sections/navbar'
import { FooterSection } from '@/components/sections/footer-section'
import { AfterProgram } from '@/components/sections/after-program'

export const metadata: Metadata = {
  title: 'Le Cercle StartPoint : la communauté qui change la donne | StartPoint IA',
  description:
    "La communauté privée des alumni du Cercle StartPoint. Q&A mensuels avec Butzi, experts invités, veille IA curatée : pour continuer à progresser et ne pas bosser seul avec l'IA.",
}

export default function CercleStartpointPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px]">
        <AfterProgram />
      </main>
      <FooterSection />
    </>
  )
}
