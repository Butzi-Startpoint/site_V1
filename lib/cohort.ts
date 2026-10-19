/* ── Calendrier de la cohorte en cours ──
   Mention contractuelle obligatoire : ces dates doivent être identiques
   partout sur le site. Toute modification se fait ici et uniquement ici. */

export type CohortSession = { n: number; date: string }

export const COHORT = {
  name: "Cohorte d'octobre 2026",
  format: 'une session collective de 1h30 par semaine, sur 8 semaines',
  slot: 'vendredi de 14h à 15h30',
  slotNote:
    'Le calendrier définitif est établi avec les participants avant le démarrage de la cohorte, afin de tenir compte au mieux des disponibilités du groupe.',
  totalHours: '12 heures au total',
  maxParticipants: '10 participants maximum',
  sessions: [
    { n: 1, date: 'vendredi 23 octobre 2026' },
    { n: 2, date: 'vendredi 30 octobre 2026' },
    { n: 3, date: 'vendredi 6 novembre 2026' },
    { n: 4, date: 'vendredi 13 novembre 2026' },
    { n: 5, date: 'vendredi 20 novembre 2026' },
    { n: 6, date: 'vendredi 27 novembre 2026' },
    { n: 7, date: 'vendredi 4 décembre 2026' },
    { n: 8, date: 'vendredi 11 décembre 2026' },
  ] as CohortSession[],
  replayNote: "Les sessions sont enregistrées et les replays sont accessibles en cas d'absence.",
} as const
