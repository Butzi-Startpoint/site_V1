import { Navbar } from '@/components/sections/navbar'
import { LandingAccordionItem } from '@/components/ui/interactive-image-accordion'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { CircularTestimonialsSection } from '@/components/sections/circular-testimonials-section'
import { Problem } from '@/components/sections/problem'
import { Founder } from '@/components/sections/founder'
import { Modules } from '@/components/sections/modules'
import { ForWho } from '@/components/sections/for-who'
import { ValueStack } from '@/components/sections/value-stack'
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
      <div className="pt-[88px]">
        <LandingAccordionItem />
      </div>

      <Problem />
      <Founder />
      <CircularTestimonialsSection />
      <Modules />
      <TestimonialsSection />
      <ValueStack />

      {/* Sur mobile : « Pour qui » remonte juste après « Ce qui est inclus » (réordonnancement via flex order) */}
      <div className="flex flex-col">
        <div className="order-1 md:order-3"><ForWho /></div>
        <div className="order-2 md:order-1"><Pricing /></div>
        <div className="order-3 md:order-2"><Guarantees /></div>
      </div>

      <AfterProgram />
      <Team />
      <FaqSection />
      <LeadMagnet />
      <CtaFinal />
      <FooterSection />
    </>
  )
}
