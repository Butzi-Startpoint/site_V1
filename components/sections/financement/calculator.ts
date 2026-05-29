import type { Estimation, FafName, Fiscal, Statut, Tmi, WizardState } from './types'

export const FORMATION_PRICE = 2997
export const FORMATION_HOURS = 12

export function calculateFaf(statut: Statut | null): { amount: number; name: FafName; note: string } {
  switch (statut) {
    case 'gerant-sarl':
    case 'micro-commercial':
      return {
        amount: FORMATION_HOURS * 35,
        name: 'AGEFICE',
        note: 'Plafond horaire distanciel synchrone : 35 €/h · Plafond annuel : 3 000 €',
      }
    case 'liberal-bnc':
    case 'micro-liberal':
      return {
        amount: 750,
        name: 'FIFPL',
        note: 'Le montant exact dépend de votre profession (600 à 1 500 €). Consultez fifpl.fr pour votre barème.',
      }
    case 'artisan':
      return {
        amount: FORMATION_HOURS * 25,
        name: 'FAFCEA',
        note: 'Plafond horaire formations transversales : 25 €/h · Plafond annuel : 100h/an',
      }
    case 'sas-sasu':
      return {
        amount: 0,
        name: 'OPCO',
        note: 'En tant que dirigeant assimilé salarié, vous ne relevez pas d\'un FAF. Contactez votre OPCO pour connaître vos droits.',
      }
    default:
      return { amount: 0, name: 'Non identifié', note: '' }
  }
}

export function calculateDeductibility(
  fiscal: Fiscal | null,
  tmi: Tmi | null,
  remainingAfterFaf: number,
): number {
  if (!fiscal || fiscal === 'micro' || fiscal === 'ne-sait-pas') return 0
  if (fiscal === 'is') return Math.round(remainingAfterFaf * 0.25)
  if (fiscal === 'ir-reel') {
    const rate = !tmi || tmi === 'ne-sait-pas' ? 0.30 : parseInt(tmi) / 100
    return Math.round(remainingAfterFaf * rate)
  }
  return 0
}

export function computeEstimation(state: WizardState): Estimation {
  const faf = calculateFaf(state.statut)
  const fafAmount = faf.amount
  const remainingAfterFaf = Math.max(0, FORMATION_PRICE - fafAmount)
  const deductibility = calculateDeductibility(state.fiscal, state.tmi, remainingAfterFaf)
  const netCost = Math.max(0, FORMATION_PRICE - fafAmount - deductibility)
  return {
    fafName: faf.name,
    fafAmount,
    fafNote: faf.note,
    deductibility,
    remainingAfterFaf,
    netCost,
    price: FORMATION_PRICE,
  }
}
