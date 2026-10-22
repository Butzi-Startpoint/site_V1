/* ── Cahiers d'exercices par semaine ──
   Un cahier = une liste de blocs. La page /espace/cahiers/[slug] les affiche en formulaire
   (réponses enregistrées sur l'appareil) et le bouton PDF les reprend tels quels, avec les
   réponses saisies ou des lignes vierges à remplir à la main. */

export type Field = { id: string; label: string; lines?: number; placeholder?: string }
export type CheckItem = { id: string; label: string }

export type Block =
  | { type: 'keypoints'; id: string; title: string; points: string[] }
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
  | { type: 'recap'; id: string; title: string; intro?: string; sections: RecapSection[] }

/** Fiche récap : texte, liste, schéma emboîté ou comparaison de deux colonnes. */
export type RecapSection = {
  title: string
  text?: string
  items?: string[]
  /** Du plus large au plus précis, affichés comme des boîtes emboîtées. */
  levels?: string[]
  compare?: [{ title: string; text: string }, { title: string; text: string }]
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
          { id: 'idee', label: "Une idée à tester sur l'IA, partagée par les autres", lines: 2 },
          {
            id: 'checker',
            label: "À aller consulter dans l'espace apprenant",
            lines: 2,
            placeholder: "Ex. : livret d'accueil, charte d'usage de l'IA, fiche Formules IA et DPA, fiche AI Act…",
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
      },
      {
        type: 'checklist',
        id: 'parametrage',
        title: 'Fiche pratique : bien démarrer avec ChatGPT',
        intro:
          "Paramétrage essentiel. Avec Claude, les mêmes réglages se trouvent dans Paramètres, puis Confidentialité. Cochez chaque ligne pendant la séance, elle est validée en direct pendant votre partage d'écran.",
        items: [
          { id: 'partage', label: "J'ai désactivé le partage des données pour entraîner les prochains modèles" },
          { id: 'sensibles', label: 'Je ne colle jamais de données ultra sensibles (mots de passe, données bancaires)' },
          { id: 'contexte', label: 'Je contextualise toujours ma demande' },
          { id: 'install', label: "L'outil est installé sur mon ordinateur et sur mon smartphone" },
          { id: 'memoire', label: 'La mémoire est activée' },
          { id: 'perso', label: "J'ai dit à l'IA qui je suis et comment elle doit me répondre (mission de la semaine)" },
          { id: 'audio', label: 'La dictée ou le mode vocal est activé sur ordinateur et sur smartphone' },
        ],
      },
      {
        type: 'fields',
        id: 'seance',
        title: 'Pendant la séance',
        fields: [
          { id: 'marque', label: "Ce qui m'a marqué dans l'introduction à l'IA générative", lines: 3 },
          { id: 'questions', label: 'Mes questions', lines: 3 },
        ],
      },
      {
        type: 'prompt',
        id: 'prompt-base',
        title: 'Prompt de base universel à tester',
        intro: 'Écrivez votre métier, copiez le prompt, collez-le dans votre outil et notez ce que vous en tirez.',
        prompt:
          "Tu es un assistant spécialisé en [votre métier]. Dis-moi comment l'IA peut m'aider dans mon activité. Pose-moi 10 questions pour comprendre mon contexte et mon activité avant de répondre.",
        personalize: { id: 'metier', label: 'Mon métier', token: '[votre métier]', placeholder: 'ex. coach, consultante, formateur' },
        answers: [{ id: 'resultat', label: "Ce que l'IA m'a répondu, ce que j'ai retenu", lines: 4 }],
      },
      {
        type: 'prompt',
        id: 'mission-interview',
        title: 'Mission 1 : apprendre à tutoyer son IA',
        intro:
          "Demandez à votre IA de vous interviewer en 30 questions et répondez-lui à la voix, comme à une personne, en la tutoyant. Les missions ne sont pas notées : elles servent de base de travail à la semaine 2.",
        prompt:
          "Tu es un consultant business bienveillant et curieux. Pose-moi 30 questions sur mon activité, mes objectifs et qui je suis : mon business, mes clients, mes offres, mon quotidien, mes forces, mes blocages, ce qui me prend le plus de temps, mes ambitions à 1 an, 3 ans et 10 ans.",
        answers: [{ id: 'interview', label: "Ce que j'ai découvert sur moi et mon activité", lines: 3 }],
      },
      {
        type: 'prompt',
        id: 'mission-critique',
        title: 'Mission 2 : une IA qui challenge mes idées',
        intro: 'Collez ce prompt dans les instructions personnalisées de votre outil, puis testez-le sur une idée en cours.',
        prompt:
          "Ne sois jamais complaisant avec moi. Quand je te présente une idée, un plan ou une décision business, challenge-la avant de la valider : cherche systématiquement les angles morts, les risques, les hypothèses non vérifiées et les alternatives auxquelles je n'ai pas pensé. Si tu es d'accord avec moi, dis-le en une phrase, puis consacre le reste de ta réponse à ce qui pourrait clocher. Ne me dis jamais ce que je veux entendre juste pour me faire plaisir.",
        answers: [{ id: 'critique', label: "L'idée que j'ai testée et ce que l'IA a relevé", lines: 3 }],
      },
      {
        type: 'fields',
        id: 'reflexion',
        title: 'Une question à garder en tête',
        intro: "Quelle tâche de votre activité aimeriez-vous confier à l'IA, et quel contrôle humain faudrait-il conserver ?",
        fields: [
          { id: 'tache', label: "La tâche que je voudrais confier à l'IA", lines: 2 },
          { id: 'controle', label: 'Le contrôle que je garde', lines: 2 },
          { id: 'temps', label: 'Ce que je ferai du temps gagné', lines: 2 },
        ],
      },
      {
        type: 'recap',
        id: 'recap',
        title: 'Fiche récap de la séance',
        intro: "L'essentiel de ce qui a été dit sur l'IA. Nous y revenons en semaine 2.",
        sections: [
          {
            title: "Ce que l'IA change pour vous",
            text: "Le temps gagné n'est qu'une partie des bénéfices. D'autres gains se voient moins :",
            items: ["l'énergie émotionnelle préservée", 'les frustrations évitées', 'la place libérée pour décider et créer'],
          },
          {
            title: 'Automatiser et réfléchir avec elle',
            text: "L'IA automatise des tâches. Elle sert aussi de partenaire stratégique : elle vous connaît, challenge vos idées et vous aide à décider. Pensez à ce que vous ferez du temps gagné.",
          },
          {
            title: "L'IA en une image",
            levels: ['Intelligence artificielle', 'Apprentissage automatique', 'Réseaux de neurones', 'IA générative', 'Modèles de langage (LLM)'],
          },
          {
            title: "L'IA générative en deux mots",
            text: "Une IA qui crée du contenu (texte, image, son, code) à partir de votre consigne. Pour le texte, elle repose sur un modèle de langage : un réseau de neurones entraîné sur énormément de textes, qui calcule la suite la plus probable d'une phrase.",
          },
          {
            title: 'LLM ou agent',
            compare: [
              { title: 'Un LLM', text: 'Il répond : il reçoit votre texte et en génère un autre.' },
              {
                title: 'Un agent',
                text: "Il agit : un modèle associé à des outils, des autorisations et une boucle d'exécution. Il peut modifier des fichiers, vérifier ses résultats et enchaîner plusieurs actions.",
              },
            ],
          },
        ],
      },
    ],
  },
]

export function getCahier(slug: string): Cahier | undefined {
  return CAHIERS.find((c) => c.slug === slug)
}
