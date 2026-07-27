/* ── Offres et URLs de réservation ── */

export type OfferKey = 'essentiel' | 'momentum' | 'premium'

export type Offer = {
  name: string
  checkoutUrl: string
}

export const OFFERS: Record<OfferKey, Offer> = {
  essentiel: {
    name: 'Essentiel',
    checkoutUrl: 'https://panier.acceleration-ia.fr/essentiel',
  },
  momentum: {
    name: 'Momentum',
    checkoutUrl: 'https://panier.acceleration-ia.fr/momentum',
  },
  premium: {
    name: 'Premium',
    checkoutUrl: 'https://panier.acceleration-ia.fr/premium',
  },
}

/* Prise de rendez-vous pour les particuliers (aiguillage hors checkout). */
export const CALENDLY_URL = 'https://calendly.com/butzi/15-minutes-call-catch-up'
