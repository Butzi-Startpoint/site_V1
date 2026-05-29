export type Statut =
  | 'gerant-sarl'
  | 'liberal-bnc'
  | 'micro-commercial'
  | 'micro-liberal'
  | 'artisan'
  | 'sas-sasu'
  | 'autre'

export type Anciennete = 'moins-1an' | '1-3ans' | 'plus-3ans'
export type Urssaf = 'oui' | 'non' | 'ne-sait-pas'
export type Budget = 'non' | 'partie' | 'tout' | 'ne-sait-pas'
export type Fiscal = 'is' | 'ir-reel' | 'micro' | 'ne-sait-pas'
export type Tmi = '11' | '30' | '41' | '45' | 'ne-sait-pas'
export type StartDate = 'moins-15j' | '15j-1mois' | 'plus-1mois' | 'ne-sait-pas'

export type WizardState = {
  statut: Statut | null
  anciennete: Anciennete | null
  urssaf: Urssaf | null
  budget: Budget | null
  fiscal: Fiscal | null
  tmi: Tmi | null
  startDate: StartDate | null
  email: string
  consent: boolean
}

export type FafName = 'AGEFICE' | 'FIFPL' | 'FAFCEA' | 'OPCO' | 'Non identifié'

export type Estimation = {
  fafName: FafName
  fafAmount: number
  fafNote: string
  deductibility: number
  remainingAfterFaf: number
  netCost: number
  price: number
}
