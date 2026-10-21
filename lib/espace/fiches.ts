import ficheAiAct from './files/fiche-ai-act'
import ficheFormulesDpa from './files/fiche-formules-dpa'

/* Fiches pratiques servies par /espace/fiches/[slug], réservées aux membres connectés. */
export const FICHES: Record<string, string> = {
  'fiche-ai-act': ficheAiAct,
  'fiche-formules-dpa': ficheFormulesDpa,
}
