'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Users, Zap, Star } from 'lucide-react'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import { Button } from '@/components/ui/button'
import * as PricingCard from '@/components/ui/pricing-card'
import type { Variants } from 'framer-motion'

const cardVariant: Variants = {
  hidden:  { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0,  scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 22 } },
}

const QualiopiNote = () => (
  <div className="mt-4 flex items-start gap-2 px-3 py-2.5 rounded-xl bg-[#F6F1EB]/60 border border-[#1E172D]/8">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#A68AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
    <p className="text-[10px] text-[#1E172D]/50 leading-relaxed">
      Formation certifiée <strong className="text-[#1E172D]/70">Qualiopi</strong> · éligible FAF
      (FIF-PL, AGEFICE) · prise en charge <strong className="text-[#1E172D]/70">900 € à 2 500 €</strong> possible
    </p>
  </div>
)

const plans = [
  {
    key: 'essentiel',
    icon: <Users className="w-4 h-4" />,
    name: 'Essentiel',
    description: 'Tout le programme Méthode 3S + bonus inclus',
    valueDesc: 'Valeur 4 979 €',
    price: '2 997 €',
    badge: null,
    cta: 'Réserver ma place',
    ctaVariant: 'outline' as const,
    popular: false,
    sectionLabel: 'Inclus',
    payment: 'Paiement en 1x ou 3x sans frais',
    features: [
      '6 sessions live en groupe (1/semaine, 2h)',
      'Accès au cours en ligne : +80 vidéos',
      'La Méthode 3S : framework complet',
      'Kit de prompts et templates à chaque module',
      'Communauté WhatsApp Entrepreneurs Augmentés',
      'Replays des sessions + Q&A entre sessions',
    ],
    extras: null,
  },
  {
    key: 'momentum',
    icon: <Zap className="w-4 h-4" />,
    name: 'Momentum',
    description: 'Tout le programme Méthode 3S + bonus inclus, plus :',
    valueDesc: 'Valeur 4 979 €',
    price: '3 497 €',
    badge: 'Recommandé',
    cta: 'Réserver ma place',
    ctaVariant: 'default' as const,
    popular: true,
    sectionLabel: 'Tout l\'Essentiel, plus',
    payment: 'Paiement en 1x ou 3x sans frais',
    features: [
      'Tout le programme Essentiel',
      'Audit individuel pré-programme (30 min)',
      '1 session hot seat individuelle (45 min)',
      '6 mois de Cercle Entrepreneurs Augmentés',
      'Kit de templates avancés par métier',
    ],
    extras: [
      { label: 'Audit individuel', val: '200 €' },
      { label: 'Hot seat 45 min',  val: '350 €' },
      { label: 'Cercle 6 mois',    val: '474 €' },
    ],
  },
  {
    key: 'premium',
    icon: <Star className="w-4 h-4" />,
    name: 'Premium',
    description: 'Inclut tout le programme Méthode 3S + accompagnement sur-mesure avec coaching 1:1 et spécialiste automatisation sur votre stack.',
    valueDesc: null,
    price: '8 000 €',
    badge: null,
    cta: 'Demander un devis',
    ctaVariant: 'outline' as const,
    popular: false,
    sectionLabel: 'Sur mesure',
    payment: null,
    features: [
      'Tout le programme Méthode 3S + bonus inclus',
      'Coaching 1:1 avec spécialiste automatisation',
      'Sur devis, hors cycle groupe',
      '12 mois de Cercle Entrepreneurs Augmentés inclus',
    ],
    extras: null,
  },
]

export function Pricing() {
  return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden" id="pricing">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A68AFF]/20 to-transparent" />

      <div className="max-w-[1140px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
          className="text-center mb-12"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFAB] text-[#1E172D] text-xs font-bold uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Les offres
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold text-[#1E172D] leading-[1.15] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Choisissez l&apos;accompagnement{' '}
            <span className="text-[#A68AFF]">qui vous correspond</span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={viewport}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:items-start"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.key}
              variants={cardVariant}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
              className={plan.popular ? 'relative' : ''}
            >
              <PricingCard.Card className={plan.popular
                ? 'border-[#A68AFF]/50 shadow-[0_0_0_1px_rgba(166,138,255,0.3),0_8px_32px_rgba(166,138,255,0.15)]'
                : 'hover:shadow-[0_20px_56px_rgba(30,23,45,0.09)]'
              }>
                <PricingCard.Header className={plan.popular ? 'bg-[#A68AFF]/8' : ''}>
                  <PricingCard.Plan>
                    <PricingCard.PlanName style={{ fontFamily: 'var(--font-display)' }}>
                      {plan.icon}
                      <span className="font-bold text-[#1E172D] text-base">{plan.name}</span>
                    </PricingCard.PlanName>
                    {plan.badge && (
                      <PricingCard.Badge style={{ fontFamily: 'var(--font-display)' }}>
                        {plan.badge}
                      </PricingCard.Badge>
                    )}
                  </PricingCard.Plan>

                  <PricingCard.Price>
                    <PricingCard.MainPrice style={{ fontFamily: 'var(--font-display)' }}>
                      {plan.price}
                    </PricingCard.MainPrice>
                  </PricingCard.Price>

                  <p className="text-[#1E172D]/50 text-xs mb-1 leading-relaxed">{plan.description}</p>
                  {plan.valueDesc && (
                    <p className="text-[#A68AFF] text-xs font-semibold mb-3">{plan.valueDesc}</p>
                  )}

                  <Button
                    variant={plan.ctaVariant}
                    className={`w-full font-bold rounded-full cursor-pointer mt-3 ${
                      plan.popular
                        ? 'bg-[#A68AFF] hover:bg-[#9070ee] text-white border-0'
                        : 'border-2 border-[#1E172D] text-[#1E172D] hover:bg-[#1E172D] hover:text-[#F6F1EB]'
                    }`}
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {plan.cta} →
                  </Button>

                  {plan.payment && (
                    <p className="text-center text-[10px] text-[#1E172D]/40 mt-2 font-medium">{plan.payment}</p>
                  )}

                  {(plan.key === 'essentiel' || plan.key === 'momentum') && <QualiopiNote />}
                </PricingCard.Header>

                <PricingCard.Body>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-[#1E172D]/35 mb-3"
                      style={{ fontFamily: 'var(--font-display)' }}>
                      {plan.sectionLabel}
                    </p>
                    <PricingCard.List>
                      {plan.features.map((f) => (
                        <PricingCard.ListItem key={f}>
                          <CheckCircle2 className="w-4 h-4 text-[#A68AFF] flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{f}</span>
                        </PricingCard.ListItem>
                      ))}
                    </PricingCard.List>
                  </div>

                  {plan.extras && (
                    <>
                      <PricingCard.Separator>valeur incluse</PricingCard.Separator>
                      <div className="bg-[#A68AFF]/8 border border-[#A68AFF]/15 rounded-xl px-4 py-3 text-sm">
                        {plan.extras.map(row => (
                          <div key={row.label} className="flex justify-between text-[#1E172D]/55 text-xs py-1">
                            <span>{row.label}</span><span>{row.val}</span>
                          </div>
                        ))}
                        <div className="border-t border-[#A68AFF]/20 mt-2 pt-2 flex justify-between font-bold text-[#1E172D] text-xs">
                          <span>Valeur totale des extras</span><span>1 024 €</span>
                        </div>
                        <p className="text-[#A68AFF] text-[11px] font-semibold mt-2 text-center">
                          Pour seulement 500 € de plus
                        </p>
                      </div>
                    </>
                  )}
                </PricingCard.Body>
              </PricingCard.Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Scarcity pill */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp}
          className="flex justify-center mt-8"
        >
          <div
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-[0.88rem] font-medium text-[#1E172D]"
            style={{
              background: 'white',
              border: '1px solid rgba(30,23,45,0.1)',
              boxShadow: '0 2px 8px rgba(30,23,45,0.06)',
              fontFamily: 'var(--font-display)',
            }}
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-[#A68AFF] flex-shrink-0"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            8 personnes max par cohorte —{' '}
            <span className="text-[#A68AFF] font-bold">4 places restantes</span>
            {' '}pour la session du 9 juin
          </div>
        </motion.div>
      </div>
    </section>
  )
}
