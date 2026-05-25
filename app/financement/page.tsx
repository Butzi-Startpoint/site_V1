import type { Metadata } from 'next'
import { Navbar } from '@/components/sections/navbar'
import { FooterSection } from '@/components/sections/footer-section'
import { FinancementSimulator } from '@/components/sections/financement/financement-simulator'

export const metadata: Metadata = {
  title: 'Simulateur de financement formation IA — Accélération IA 360 | StartPoint IA',
  description:
    'Calculez en 2 minutes combien vous pouvez vous faire financer sur la formation Accélération IA 360. AGEFICE, FIFPL, FAFCEA, crédit d\'impôt : estimation personnalisée.',
}

export default function FinancementPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[64px] bg-[#F6F1EB] min-h-screen">
        <FinancementSimulator />
      </main>
      <FooterSection />
      {/* Netlify form detection — hidden static form for build-time detection */}
      <form name="financement-leads" data-netlify="true" hidden>
        <input type="email" name="email" />
        <input type="text" name="statut" />
        <input type="text" name="estimation" />
      </form>
    </>
  )
}
