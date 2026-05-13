import { Navbar } from '@/components/sections/navbar'
import { LandingAccordionItem } from '@/components/ui/interactive-image-accordion'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { SocialProofBar } from '@/components/sections/social-proof-bar'
import { Problem } from '@/components/sections/problem'
import { Solution } from '@/components/sections/solution'
import { Modules } from '@/components/sections/modules'
import { ForWho } from '@/components/sections/for-who'
import { Pricing } from '@/components/sections/pricing'
import { Financing } from '@/components/sections/financing'
import { Guarantees } from '@/components/sections/guarantees'
import { FaqSection } from '@/components/sections/faq-section'
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

      <SocialProofBar />
      <Problem />
      <Solution />
      <TestimonialsSection />
      <Modules />
      <ForWho />
      <Pricing />
      <Financing />
      <Guarantees />
      <FaqSection />
      <CtaFinal />
      <FooterSection />
    </>
  )
}
