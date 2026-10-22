/* ── Cahiers d'exercices par semaine ──
   Un cahier = une liste de blocs. La page /espace/cahiers/[slug] les affiche en formulaire
   (réponses enregistrées sur l'appareil) et le bouton PDF les reprend tels quels, avec les
   réponses saisies ou des lignes vierges à remplir à la main. */

export type Field = { id: string; label: string; lines?: number; placeholder?: string }
export type CheckItem = { id: string; label: string }

export type Block =
  | { type: 'keypoints'; id: string; title: string; points: string[]; note: Field }
  | { type: 'fields'; id: string; title: string; intro?: string; fields: Field[] }
  | { type: 'checklist'; id: string; title: string; intro?: string; items: CheckItem[] }
  | {
      type: 'prompt'
      id: string
      title: string
      intro?: string
      prompt: string
      /** Remplace le jeton `[…]` du prompt par ce que l'apprenant écrit. */
      personalize?: { id: string; label: string; token: string; placeholder?: string }
      answers: Field[]
    }

export type Cahier = {
  slug: string
  week: number
  title: string
  intro: string
  /** Résumé court affiché sur l'aperçu. */
  teaser: string
  blocks: Block[]
}

export const CAHIERS: Cahier[] = [
  {
    slug: 'semaine-1',
    week: 1,
    title: "Paramétrage des outils et introduction à l'IA",
    intro:
      "Ce cahier accompagne la première séance. Vous pouvez le remplir en ligne pendant et après la session, ou le télécharger en PDF pour l'imprimer et écrire à la main.",
    teaser: 'Points clés, grille de configuration, prompt de base et deux missions à faire entre les sessions.',
    blocks: [
      {
        type: 'fields',
        id: 'moi',
        title: 'Pour commencer',
        fields: [
          { id: 'objectif', label: 'Mon objectif principal avec cette formation', lines: 3 },
          {
            id: 'bluffe',
            label: "Ce qui m'a bluffé avec l'IA dans mon activité (le « Tu savais que ? » à partager au groupe)",
            lines: 3,
          },
        ],
      },
      {
        type: 'keypoints',
        id: 'points-cles',
        title: 'Points clés',
        points: [
          "L'IA est un outil, pas une baguette magique",
          "La sécurité vient d'abord de vos usages, pas de l'outil",
          'Un bon paramétrage évite 80 % des erreurs',
        ],
        note: { id: 'retenu', label: 'Ce que je retiens, avec mes mots', lines: 3 },
      },
      {
        type: 'checklist',
        id: 'parametrage',
        title: 'Fiche pratique : bien démarrer avec ChatGPT',
        intro:
          "Paramétrage essentiel. Avec Claude, les mêmes réglages se trouvent dans Paramètres, puis Confidentialité. Cochez chaque ligne pendant la séance, elle est validée en direct pendant votre partage d'écran.",
        items: [
          { id: 'partage', label: "J'ai désactivé le partage des données pour entraîner les prochains modèles" },
          { id: 'sensibles', label: "Je ne colle jamais de données ultra sensibles (mots de passe, données bancaires)" },
          { id: 'contexte', label: 'Je contextualise toujours ma demande' },
          { id: 'install', label: "L'outil est installé sur mon ordinateur et sur mon smartphone" },
          { id: 'memoire', label: 'La mémoire est activée' },
          { id: 'perso', label: "J'ai dit à l'IA qui je suis et comment elle doit me répondre" },
          { id: 'audio', label: 'La dictée ou le mode vocal est activé sur ordinateur et sur smartphone' },
        ],
      },
      {
        type: 'prompt',
        id: 'prompt-base',
        title: 'Prompt de base universel à tester',
        intro: 'Écrivez votre métier, copiez le prompt, collez-le dans votre outil et notez ce que vous en tirez.',
        prompt:
          'Tu es un assistant spécialisé en [votre métier]. Dis-moi comment l\'IA peut m\'aider dans mon activité. Pose-moi 10 questions pour comprendre mon contexte et mon activité avant de répondre.',
        personalize: { id: 'metier', label: 'Mon métier', token: '[votre métier]', placeholder: 'ex. coach, consultante, formateur' },
        answers: [{ id: 'resultat', label: "Ce que l'IA m'a répondu, ce que j'ai retenu", lines: 5 }],
      },
      {
        type: 'prompt',
        id: 'mission-interview',
        title: 'Mission 1 : interviewez-moi en 30 questions',
        intro:
          "Les missions ne sont pas notées. Elles servent de base de travail à la semaine 2. Utilisez votre voix pour répondre.",
        prompt:
          "Tu es un consultant business bienveillant et curieux. Pose-moi 30 questions sur mon activité, mes objectifs et qui je suis : mon business, mes clients, mes offres, mon quotidien, mes forces, mes blocages, ce qui me prend le plus de temps, mes ambitions à 1 an, 3 ans et 10 ans.",
        answers: [{ id: 'interview', label: "Ce que j'ai découvert sur moi et mon activité (3 points)", lines: 5 }],
      },
      {
        type: 'prompt',
        id: 'mission-critique',
        title: 'Mission 2 : une IA qui challenge mes idées',
        intro: "Collez ce prompt dans les instructions personnalisées de votre outil, puis testez-le sur une idée en cours.",
        prompt:
          "Ne sois jamais complaisant avec moi. Quand je te présente une idée, un plan ou une décision business, challenge-la avant de la valider : cherche systématiquement les angles morts, les risques, les hypothèses non vérifiées et les alternatives auxquelles je n'ai pas pensé. Si tu es d'accord avec moi, dis-le en une phrase, puis consacre le reste de ta réponse à ce qui pourrait clocher. Ne me dis jamais ce que je veux entendre juste pour me faire plaisir.",
        answers: [{ id: 'critique', label: "L'idée que j'ai testée et ce que l'IA a relevé", lines: 5 }],
      },
      {
        type: 'fields',
        id: 'reflexion',
        title: 'Une question à garder en tête',
        intro: 'Quelle tâche de votre activité aimeriez-vous confier à l\'IA, et quel contrôle humain faudrait-il conserver ?',
        fields: [
          { id: 'tache', label: 'La tâche que je voudrais confier à l\'IA', lines: 2 },
          { id: 'controle', label: 'Le contrôle que je garde', lines: 2 },
          { id: 'temps', label: "Ce que je ferai du temps gagné", lines: 2 },
        ],
      },
    ],
  },
]

export function getCahier(slug: string): Cahier | undefined {
  return CAHIERS.find((c) => c.slug === slug)
}
