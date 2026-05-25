import { Navbar } from '@/components/sections/navbar'
import { LandingAccordionItem } from '@/components/ui/interactive-image-accordion'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { ClientsBar } from '@/components/sections/clients-bar'
import { CircularTestimonialsSection } from '@/components/sections/circular-testimonials-section'
import { Problem } from '@/components/sections/problem'
import { Modules } from '@/components/sections/modules'
import { ForWho } from '@/components/sections/for-who'
import { ValueStack } from '@/components/sections/value-stack'
import { Bonuses } from '@/components/sections/bonuses'
import { Pricing } from '@/components/sections/pricing'
import { Guarantees } from '@/components/sections/guarantees'
import { AfterProgram } from '@/components/sections/after-program'
import { Team } from '@/components/sections/team'
import { FaqSection } from '@/components/sections/faq-section'
import { LeadMagnet } from '@/components/sections/lead-magnet'
import { CtaFinal } from '@/components/sections/cta-final'
import { FooterSection } from '@/components/sections/footer-section'

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero accordion — offset pour la navbar fixe */}
      <div className="pt-[64px]">
        <LandingAccordionItem />
      </div>

      <ClientsBar />
      <Problem />
      <CircularTestimonialsSection />
      <Modules />
      <TestimonialsSection />
      <ValueStack />
      <Bonuses />
      <Pricing />
      <Guarantees />
      <ForWho />
      <AfterProgram />
      <Team />
      <FaqSection />
      <LeadMagnet />
      <CtaFinal />
      <FooterSection />
    </>
  )
}
