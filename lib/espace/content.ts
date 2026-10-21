import { COHORT } from '@/lib/cohort'

/* ── Contenu de l'espace cohorte ──
   Tout se modifie ici. Un module sans `replay` affiche « Replay bientôt disponible ». */

export type Link = {
  label: string
  description?: string
  href: string
  extra?: { label: string; href: string } // second lien dans la même carte (ex. replay)
}
export type Prompt = { title: string; text: string }

export type Module = {
  slug: string
  n: number // numéro de module officiel (0 à 7)
  title: string
  hint: string // objectif du module
  livrable: string
  date: string
  replay?: string // lien du replay (YouTube, Vimeo, Loom, Systeme.io…)
  recap?: string[] // paragraphes
  prompts?: Prompt[]
  resources?: Link[] // templates, PDF, liens
}

export const START_HERE: Link[] = [
  {
    label: 'Cours en ligne',
    description: 'Les leçons de la formation sur Systeme.io.',
    href: 'https://systeme.io/school',
  },
  {
    label: 'Kit Accélérateur : premiers résultats en 48h',
    description: 'Le kit à explorer quand tu le souhaites.',
    href: 'https://guides.acceleration-ia.fr/lecture/kit-accelerateur',
  },
  {
    label: "Bibliothèque de 54 cas d'usage",
    description: 'Les cas concrets qu’on gardera sous le coude pendant plusieurs mois.',
    href: 'https://guides.acceleration-ia.fr/lecture/cas-usages',
  },
  {
    label: "Faire un site avec l'IA",
    description: 'Le guide pour construire ton site avec l’IA.',
    href: 'https://guides.acceleration-ia.fr/lecture/faire-un-site',
    extra: {
      label: 'Voir le replay',
      href: 'https://drive.google.com/file/d/1nvkFUFjxFCxMi15-D71AT7bVtCoEP3O3/view?usp=sharing',
    },
  },
]

export const FICHES_PRATIQUES: Link[] = [
  {
    label: 'Fiche AI Act Solopreneur',
    description: "Les 8 pièges à éviter pour utiliser l'IA sans franchir la ligne, même seul.",
    href: '/espace/fiches/fiche-ai-act',
  },
]

/* Titres officiels : identiques à la page /programme (module 0 = semaine 1). */
const official: { title: string; objectif: string; livrable: string }[] = [
  {
    title: "Introduction à l'IA et paramétrage sécurisé de vos outils",
    objectif: "Comprendre les fondamentaux de l'IA générative, paramétrer votre outil IA de façon sécurisée et rencontrer la communauté d'entrepreneurs.",
    livrable: 'Votre outil configuré en sécurité et un réseau.',
  },
  {
    title: 'Poser des fondations solides',
    objectif: "Comprendre l'architecture d'un assistant IA, le connecter à vos outils et produire vos premiers prompts fiables.",
    livrable: "Les bases de l'IA générative et une cartographie de votre workflow.",
  },
  {
    title: 'Gagner du temps tout de suite',
    objectif: 'Soulager les tâches les plus pénibles et chronophages du quotidien.',
    livrable: "Un document prêt à l'emploi et une semaine type optimisée.",
  },
  {
    title: "Utilisez l'IA comme un partenaire stratégique",
    objectif: "Utiliser l'IA comme partenaire stratégique pour piloter son activité.",
    livrable: "Un dashboard stratégique pluggé sur vos données, une matrice impact/effort et un plan d'action.",
  },
  {
    title: "L'IA dans le Marketing",
    objectif: "Concevoir et décliner ses contenus marketing à grande échelle avec l'IA.",
    livrable: "Un post publié (texte + visuel) et un site réalisé avec l'IA.",
  },
  {
    title: 'Plus de prospects et des offres plus claires',
    objectif: "Structurer son offre et son cycle de vente avec l'appui de l'IA.",
    livrable: 'Une offre structurée et deux propositions commerciales avec supports interactifs.',
  },
  {
    title: 'Configurer vos assistants et automatismes IA',
    objectif: 'Créer des solutions IA sur mesure pour ses besoins spécifiques.',
    livrable: 'Une création codée et des modèles pour Claude Skills.',
  },
  {
    title: 'Session de groupe',
    objectif: "Formaliser un système IA personnel complet et un plan d'action durable.",
    livrable: "Un système IA complet et un plan d'action post-programme.",
  },
]

export const MODULES: Module[] = official.map((o, i) => ({
  slug: `module-${i}`,
  n: i,
  title: o.title,
  hint: o.objectif,
  livrable: o.livrable,
  date: COHORT.sessions[i].date,
}))

/* Exemple de remplissage d'un module :
   MODULES[0].replay = 'https://…'
   MODULES[0].recap = ['Premier paragraphe…', 'Deuxième…']
   MODULES[0].prompts = [{ title: 'Prompt d’installation', text: '…' }]
   MODULES[0].resources = [{ label: 'Template devis', href: 'https://…' }]
*/
