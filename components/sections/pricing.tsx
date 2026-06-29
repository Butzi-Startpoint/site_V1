'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, Users, Zap, Star } from 'lucide-react'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import { Button } from '@/components/ui/button'
import * as PricingCard from '@/components/ui/pricing-card'
import { QualiopiBadge } from '@/components/ui/qualiopi-badge'
import { PhoneRevealButton } from '@/components/ui/phone-reveal-button'
import type { Variants } from 'framer-motion'

const cardVariant: Variants = {
  hidden:  { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0,  scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 22 } },
}

type Theme = 'light' | 'highlight' | 'dark'

const themeClasses: Record<Theme, {
  card: string
  header: string
  planName: string
  price: string
  description: string
  valueDesc: string
  badge: string
  cta: string
  payment: string
  paymentSecondary: string
  sectionLabel: string
  listItem: string
  listSubNote: string
  checkIcon: string
  guarantee: string
  qualiopiWrap: string
  qualiopiText: string
  qualiopiStrong: string
  qualiopiIconStroke: string
  extrasTitle: string
  extrasSeparator: string
  extrasContainer: string
  extrasRow: string
  extrasTotal: string
  extrasFooter: string
}> = {
  light: {
    card: 'bg-white border-[#1E172D]/12 shadow-[0_2px_16px_rgba(30,23,45,0.04)] hover:shadow-[0_20px_56px_rgba(30,23,45,0.09)]',
    header: 'bg-white border-[#1E172D]/8',
    planName: 'text-[#1E172D]/70',
    price: 'text-[#1E172D]',
    description: 'text-[#1E172D]/50',
    valueDesc: 'text-[#A68AFF]',
    badge: '',
    cta: 'border-2 border-[#1E172D] text-[#1E172D] bg-transparent hover:bg-[#1E172D] hover:text-white',
    payment: 'text-[#1E172D]/40',
    paymentSecondary: 'text-[#1E172D]/55',
    sectionLabel: 'text-[#1E172D]/35',
    listItem: 'text-[#1E172D]',
    listSubNote: 'text-[#1E172D]/40',
    checkIcon: 'text-[#A68AFF]',
    guarantee: 'text-[#1E172D]/55',
    qualiopiWrap: 'bg-[#F6F1EB]/60 border-[#1E172D]/8',
    qualiopiText: 'text-[#1E172D]/50',
    qualiopiStrong: 'text-[#1E172D]/70',
    qualiopiIconStroke: '#A68AFF',
    extrasTitle: 'text-[#1E172D]',
    extrasSeparator: '',
    extrasContainer: 'bg-[#A68AFF]/8 border-[#A68AFF]/15',
    extrasRow: 'text-[#1E172D]/55',
    extrasTotal: 'border-[#A68AFF]/20 text-[#1E172D]',
    extrasFooter: 'text-[#A68AFF]',
  },
  highlight: {
    card: 'border-[#A68AFF]/70 shadow-[0_0_0_2px_rgba(166,138,255,0.45),0_24px_64px_rgba(166,138,255,0.30)]',
    header: 'bg-[#A68AFF]/8',
    planName: 'text-[#1E172D]/70',
    price: 'text-[#1E172D]',
    description: 'text-[#1E172D]/55',
    valueDesc: 'text-[#A68AFF]',
    badge: '',
    cta: 'bg-[#A68AFF] hover:bg-[#9070ee] text-white border-0',
    payment: 'text-[#1E172D]/40',
    paymentSecondary: 'text-[#1E172D]/55',
    sectionLabel: 'text-[#1E172D]/35',
    listItem: 'text-[#1E172D]',
    listSubNote: 'text-[#1E172D]/40',
    checkIcon: 'text-[#A68AFF]',
    guarantee: 'text-[#1E172D]/55',
    qualiopiWrap: 'bg-[#F6F1EB]/60 border-[#1E172D]/8',
    qualiopiText: 'text-[#1E172D]/50',
    qualiopiStrong: 'text-[#1E172D]/70',
    qualiopiIconStroke: '#A68AFF',
    extrasTitle: 'text-[#1E172D]',
    extrasSeparator: '',
    extrasContainer: 'bg-[#A68AFF]/8 border-[#A68AFF]/15',
    extrasRow: 'text-[#1E172D]/55',
    extrasTotal: 'border-[#A68AFF]/20 text-[#1E172D]',
    extrasFooter: 'text-[#A68AFF]',
  },
  dark: {
    card: 'bg-[#1E172D] border-white/10 shadow-[0_8px_40px_rgba(30,23,45,0.35)]',
    header: 'bg-[#1E172D] border-white/10',
    planName: 'text-white/75',
    price: 'text-white',
    description: 'text-white/55',
    valueDesc: 'text-white/70',
    badge: '',
    cta: 'bg-white text-[#1E172D] hover:bg-white/90 border-0',
    payment: 'text-white/40',
    paymentSecondary: 'text-white/65',
    sectionLabel: 'text-white/40',
    listItem: 'text-white/80',
    listSubNote: 'text-white/45',
    checkIcon: 'text-white',
    guarantee: 'text-white/60',
    qualiopiWrap: 'bg-white/5 border-white/10',
    qualiopiText: 'text-white/50',
    qualiopiStrong: 'text-white/75',
    qualiopiIconStroke: '#FFFFFF',
    extrasTitle: 'text-white',
    extrasSeparator: '',
    extrasContainer: 'bg-white/5 border-white/10',
    extrasRow: 'text-white/60',
    extrasTotal: 'border-white/15 text-white',
    extrasFooter: 'text-white',
  },
}

type Feature = string | { text: string; sub: string }

type Plan = {
  key: string
  icon: React.ReactNode
  name: string
  description: string
  valueDesc: string | null
  price: string
  badge: string | null
  cta: string
  href: string
  popular: boolean
  sectionLabel: string
  payment: string | null
  paymentSecondary: string | null
  features: Feature[]
  guarantee?: string
  extras: { label: string; val: string }[] | null
  extrasTitle?: string
  theme: Theme
}

const plans: Plan[] = [
  {
    key: 'essentiel',
    icon: <Users className="w-4 h-4" />,
    name: 'Essentiel',
    description: 'Tout le programme Méthode Levier + tous les bonus',
    valueDesc: 'Valeur 6 073 €',
    price: '2 997 €',
    badge: null,
    cta: 'Réserver ma place',
    href: 'https://panier.acceleration-ia.fr/essentiel',
    popular: false,
    sectionLabel: 'Inclus',
    payment: 'Paiement en 1x ou 3x sans frais',
    paymentSecondary: 'ou 3 x 1\u00a0019 €',
    features: [
      '8 sessions live en groupe (1/semaine, 90 mn)',
      'Accès au cours en ligne : +80 vidéos',
      'La Méthode Levier : la méthode complète',
      'Kit de prompts et templates à chaque module',
      'Communauté de pairs Cercle StartPoint',
      'Replays des sessions + Q&A entre sessions',
    ],
    extras: null,
    theme: 'light',
  },
  {
    key: 'momentum',
    icon: <Zap className="w-4 h-4" />,
    name: 'Momentum',
    description: 'Tout le programme Méthode Levier + tous les bonus, plus :',
    valueDesc: 'Valeur 6 073 €',
    price: '3 497 €',
    badge: 'Recommandé',
    cta: 'Réserver ma place',
    href: 'https://panier.acceleration-ia.fr/momentum',
    popular: true,
    sectionLabel: 'Tout l\'Essentiel, plus',
    payment: 'Paiement en 1x ou 3x sans frais',
    paymentSecondary: 'ou 3 x 1\u00a0189 €',
    features: [
      'Tout le programme Essentiel',
      'Audit individuel pré-programme (30 min)',
      '1 séance de coaching individuelle (45 min)',
      '6 mois de communauté de pairs Cercle StartPoint',
      'Kit de templates avancés par métier',
    ],
    extras: [
      { label: 'Audit individuel', val: '200 €' },
      { label: 'Séance de coaching 45 min', val: '350 €' },
      { label: 'Cercle StartPoint (6 mois)', val: '474 €' },
    ],
    extrasTitle: 'Valeur totale Momentum : 6 997 €',
    theme: 'highlight',
  },
  {
    key: 'premium',
    icon: <Star className="w-4 h-4" />,
    name: 'Premium',
    description: 'Le programme complet + votre système IA installé clé en main.',
    valueDesc: null,
    price: '5 997 €',
    badge: null,
    cta: 'Réserver ma place',
    href: 'https://panier.acceleration-ia.fr/premium',
    popular: false,
    sectionLabel: 'Inclus',
    payment: 'Paiement en 1x ou 3x sans frais',
    paymentSecondary: 'ou 3 x 2\u00a0039 €',
    features: [
      { text: 'Tout le programme Méthode Levier + tous les bonus', sub: 'Programme finançable via FAF (Qualiopi)' },
      '1 séance de coaching 1:1 avec Butzi (1 heure)',
      'Votre plan d\'action créé pour vous',
      'Audit de stack + setup de 3 automations livrées et documentées',
      'Playbook de maintenance inclus',
      '12 mois de communauté de pairs Cercle StartPoint inclus',
    ],
    guarantee: 'Vos automations ne fonctionnent pas après 30 jours ? Le spécialiste revient les corriger gratuitement.',
    extras: null,
    theme: 'dark',
  },
]

const QualiopiNote = ({ theme }: { theme: Theme }) => {
  const t = themeClasses[theme]
  return (
    <div className={`mt-4 flex items-start gap-2 px-3 py-2.5 rounded-xl border ${t.qualiopiWrap}`}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={t.qualiopiIconStroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
      <p className={`text-[10px] leading-relaxed ${t.qualiopiText}`}>
        Formation certifiée <strong className={t.qualiopiStrong}>Qualiopi</strong> · éligible FAF
        (AGEFICE, FIF-PL, FAFCEA) ·{' '}
        <a
          href="/financement"
          className="text-[#A68AFF] font-bold hover:underline whitespace-nowrap"
        >
          Estimez votre prise en charge →
        </a>
      </p>
    </div>
  )
}

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
          {plans.map((plan) => {
            const t = themeClasses[plan.theme]
            return (
              <motion.div
                key={plan.key}
                variants={cardVariant}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
                className={plan.popular ? 'relative' : ''}
              >
                <PricingCard.Card className={t.card}>
                  <PricingCard.Header className={t.header}>
                    <PricingCard.Plan>
                      <PricingCard.PlanName
                        className={t.planName}
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {plan.icon}
                        <span className={`font-bold text-base ${t.price}`}>{plan.name}</span>
                      </PricingCard.PlanName>
                      {plan.badge && (
                        <PricingCard.Badge
                          className={t.badge}
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          {plan.badge}
                        </PricingCard.Badge>
                      )}
                    </PricingCard.Plan>

                    <PricingCard.Price>
                      <PricingCard.MainPrice
                        className={t.price}
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {plan.price}
                      </PricingCard.MainPrice>
                    </PricingCard.Price>

                    <p className={`text-xs mb-1 leading-relaxed ${t.description}`}>{plan.description}</p>
                    {plan.valueDesc && (
                      <p className={`text-xs font-semibold mb-3 ${t.valueDesc}`}>{plan.valueDesc}</p>
                    )}

                    <Button
                      asChild
                      variant="default"
                      className={`w-full font-bold rounded-full cursor-pointer mt-3 ${t.cta}`}
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      <a href={plan.href}>{plan.cta} →</a>
                    </Button>

                    {plan.payment && (
                      <p className={`text-center text-[10px] mt-2 font-medium ${t.payment}`}>{plan.payment}</p>
                    )}
                    {plan.paymentSecondary && (
                      <p className={`text-center text-[11px] mt-0.5 font-semibold ${t.paymentSecondary}`}>
                        {plan.paymentSecondary}
                      </p>
                    )}

                    {(plan.key === 'essentiel' || plan.key === 'momentum') && <QualiopiNote theme={plan.theme} />}
                  </PricingCard.Header>

                  <PricingCard.Body>
                    <div>
                      <p className={`text-[10px] font-bold tracking-widest uppercase mb-3 ${t.sectionLabel}`}
                        style={{ fontFamily: 'var(--font-display)' }}>
                        {plan.sectionLabel}
                      </p>
                      <PricingCard.List>
                        {plan.features.map((f, i) => {
                          const text = typeof f === 'string' ? f : f.text
                          const sub = typeof f === 'string' ? null : f.sub
                          return (
                            <PricingCard.ListItem key={i} className={`${t.listItem} flex-col items-stretch`}>
                              <div className="flex items-start gap-3">
                                <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${t.checkIcon}`} aria-hidden="true" />
                                <span>{text}</span>
                              </div>
                              {sub && (
                                <span className={`text-[11px] mt-1 ml-7 italic ${t.listSubNote}`}>
                                  {sub}
                                </span>
                              )}
                            </PricingCard.ListItem>
                          )
                        })}
                      </PricingCard.List>
                    </div>

                    {plan.guarantee && (
                      <p className={`text-[11px] leading-relaxed italic ${t.guarantee}`}>
                        {plan.guarantee}
                      </p>
                    )}

                    {plan.extras && (
                      <details className="group">
                        <summary
                          className={`flex items-center justify-center gap-1.5 cursor-pointer list-none [&::-webkit-details-marker]:hidden text-[11px] font-bold uppercase tracking-widest ${t.sectionLabel}`}
                          style={{ fontFamily: 'var(--font-display)' }}
                        >
                          Valeur incluse
                          <svg
                            className="w-3.5 h-3.5 transition-transform duration-200 group-open:rotate-180"
                            fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="mt-3">
                          {plan.extrasTitle && (
                            <p
                              className={`text-center text-sm font-extrabold tracking-tight mb-3 ${t.extrasTitle}`}
                              style={{ fontFamily: 'var(--font-display)' }}
                            >
                              {plan.extrasTitle}
                            </p>
                          )}
                          <div className={`rounded-xl px-4 py-3 text-sm border ${t.extrasContainer}`}>
                            {plan.extras.map(row => (
                              <div key={row.label} className={`flex justify-between text-xs py-1 ${t.extrasRow}`}>
                                <span>{row.label}</span><span>{row.val}</span>
                              </div>
                            ))}
                            <div className={`border-t mt-2 pt-2 flex justify-between font-bold text-xs ${t.extrasTotal}`}>
                              <span>Valeur totale des extras</span><span>1 024 €</span>
                            </div>
                            <p className={`text-[11px] font-semibold mt-2 text-center ${t.extrasFooter}`}>
                              Pour seulement 500 € de plus
                            </p>
                          </div>
                        </div>
                      </details>
                    )}
                  </PricingCard.Body>
                </PricingCard.Card>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Appel gratuit + Financement — côte à côte */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <PhoneRevealButton label="Appel gratuit pour toutes questions" />

          <a
            href="/financement"
            className="group flex flex-col sm:flex-row items-center gap-x-3 gap-y-2 px-7 py-4 rounded-2xl text-center sm:text-left cursor-pointer no-underline transition-all duration-200 hover:shadow-[0_12px_32px_rgba(166,138,255,0.18)]"
            style={{
              background: 'white',
              border: '1px solid rgba(166,138,255,0.25)',
              boxShadow: '0 2px 8px rgba(30,23,45,0.06)',
              fontFamily: 'var(--font-display)',
            }}
          >
            <span className="inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-[#A68AFF] group-hover:gap-2.5 transition-all">
              Découvrez les possibilités de financement
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </a>
        </motion.div>

        {/* Réassurance Qualiopi */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp}
          className="mt-12 flex justify-center"
        >
          <QualiopiBadge size="md" />
        </motion.div>
      </div>
    </section>
  )
}
