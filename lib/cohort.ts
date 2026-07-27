/* ── Calendrier de la cohorte en cours ──
   Mention contractuelle obligatoire : ces dates doivent être identiques
   partout sur le site. Toute modification se fait ici et uniquement ici. */

export type CohortSession = { n: number; date: string }

export const COHORT = {
  name: "Cohorte d'octobre 2026",
  format: '8 sessions de 90 minutes, le mardi de 9h30 à 11h00',
  totalHours: '12 heures au total',
  maxParticipants: '10 participants maximum',
  sessions: [
    { n: 1, date: 'mardi 20 octobre 2026' },
    { n: 2, date: 'mardi 27 octobre 2026' },
    { n: 3, date: 'mardi 3 novembre 2026' },
    { n: 4, date: 'mardi 10 novembre 2026' },
    { n: 5, date: 'mardi 17 novembre 2026' },
    { n: 6, date: 'mardi 24 novembre 2026' },
    { n: 7, date: 'mardi 1er décembre 2026' },
    { n: 8, date: 'mardi 8 décembre 2026' },
  ] as CohortSession[],
  replayNote: "Les sessions sont enregistrées et les replays sont accessibles en cas d'absence.",
} as const
