import type { Metadata } from 'next'
import { Navbar } from '@/components/sections/navbar'
import { FooterSection } from '@/components/sections/footer-section'

export const metadata: Metadata = {
  title: 'Programme détaillé — Accélération IA 360 | StartPoint IA',
  description:
    "Programme de formation détaillé Accélération IA 360 : objectifs pédagogiques, contenu des modules, modalités, évaluation, accessibilité et mentions Qualiopi de l'organisme StartPoint IA (EURL BUTZI).",
}

/* ───────────────────────── Données du programme ───────────────────────── */

const ficheItems: { label: string; value: string }[] = [
  { label: 'Intitulé', value: 'Accélération IA 360 — Méthode 3S' },
  { label: 'Durée', value: '12 h en live collectif (8 sessions de 90 min) + accès e-learning en autonomie' },
  { label: 'Modalité', value: '100 % à distance (visioconférence + plateforme e-learning)' },
  { label: 'Rythme', value: 'Une session par semaine, le mardi de 9 h 30 à 11 h · replays disponibles' },
  { label: 'Public', value: 'Indépendants, freelances, coachs, consultants, formateurs, dirigeants de TPE' },
  { label: 'Prérequis', value: "Aucun prérequis technique · usage courant d'un navigateur et de la bureautique" },
  { label: 'Tarif', value: 'À partir de 2 997 € HT — finançable (FAF, crédit d\'impôt)' },
  { label: 'Sanction', value: 'Attestation de fin de formation' },
]

const objectifs: string[] = [
  "Identifier et configurer les principaux outils d'IA générative adaptés à son activité.",
  "Rédiger des prompts structurés et efficaces pour automatiser ses tâches récurrentes.",
  "Produire des contenus, des documents et des supports professionnels assistés par l'IA.",
  "Concevoir une stratégie et un système marketing & commercial augmentés par l'IA.",
  "Mettre en place au moins 3 automatisations opérationnelles dans son activité.",
  "Élaborer un plan d'action IA aligné sur ses objectifs de chiffre d'affaires.",
]

type Module = {
  num: string
  title: string
  objectif: string
  contenu: string[]
  livrable: string
}

const phases: { phase: string; semaines: string; intro: string; modules: Module[] }[] = [
  {
    phase: 'Session préparatoire',
    semaines: 'Semaine 0',
    intro: "Mise en route du parcours et prise en main de l'environnement de travail.",
    modules: [
      {
        num: '0',
        title: 'Paramétrage des outils & rencontre',
        objectif: "Disposer d'un environnement IA opérationnel et rejoindre la communauté d'apprenants.",
        contenu: [
          'Présentation du parcours, des objectifs et des modalités de suivi',
          'Création et paramétrage des comptes et outils IA',
          'Prise en main de la plateforme e-learning et de la communauté',
          'Tour de table et recueil des attentes individuelles',
        ],
        livrable: 'Environnement IA configuré et adapté à votre métier.',
      },
    ],
  },
  {
    phase: 'Phase 1 — Simplifier',
    semaines: 'Semaines 1–2',
    intro: 'Récupérer du temps dès la première semaine grâce aux fondamentaux de l\'IA.',
    modules: [
      {
        num: '1',
        title: "Les bases de l'IA et de votre LLM",
        objectif: "Comprendre le fonctionnement d'un modèle de langage et produire des prompts fiables.",
        contenu: [
          'Panorama des outils d\'IA générative et de leurs usages',
          'Bonnes pratiques de sécurité et de confidentialité des données (RGPD)',
          'Techniques de prompting avancé : rôle, contexte, format, itération',
          'Configuration de votre assistant IA pour votre activité',
        ],
        livrable: 'Une bibliothèque de prompts testés et adaptés à votre quotidien.',
      },
      {
        num: '2',
        title: 'Gagnez du temps tout de suite',
        objectif: "Automatiser les tâches récurrentes à faible valeur ajoutée du quotidien.",
        contenu: [
          'Rédaction et reformulation d\'emails et de documents en quelques clics',
          'Organisation, synthèse de notes et comptes rendus automatiques',
          'Recherche et veille métier accélérées par l\'IA',
          'Optimisation de votre semaine type',
        ],
        livrable: 'Une semaine type optimisée et au moins un document professionnel produit.',
      },
    ],
  },
  {
    phase: 'Phase 2 — Scaler',
    semaines: 'Semaines 3–5',
    intro: 'Produire davantage sans travailler plus : stratégie, marketing et vente augmentés.',
    modules: [
      {
        num: '3',
        title: 'Vision stratégique augmentée',
        objectif: "Utiliser l'IA comme partenaire stratégique pour piloter son activité.",
        contenu: [
          'L\'IA comme sparring partner stratégique',
          'Construction de scénarios et arbitrages de chiffre d\'affaires',
          'Mise en place d\'un tableau de bord de pilotage',
        ],
        livrable: 'Une analyse stratégique augmentée et un tableau de bord de pilotage.',
      },
      {
        num: '4',
        title: 'Marketing augmenté',
        objectif: "Concevoir et décliner ses contenus marketing à grande échelle avec l'IA.",
        contenu: [
          'Définition du persona et de la ligne éditoriale',
          'Création de contenus et de visuels assistés par l\'IA',
          'Principe « un contenu = cinq formats »',
          'Construction d\'un calendrier éditorial',
        ],
        livrable: 'Un contenu publié et un calendrier éditorial sur plusieurs semaines.',
      },
      {
        num: '5',
        title: 'La vente augmentée',
        objectif: "Structurer son offre et son cycle de vente avec l'appui de l'IA.",
        contenu: [
          'Structuration et chiffrage de l\'offre',
          'Prospection et personnalisation assistées par l\'IA',
          'Préparation de présentations et propositions commerciales',
          'Fidélisation et stratégies d\'upsell',
        ],
        livrable: 'Une offre structurée et une proposition commerciale chiffrée.',
      },
    ],
  },
  {
    phase: 'Phase 3 — Systématiser',
    semaines: 'Semaines 5–6',
    intro: 'Construire le système qui tourne sans vous et le rendre durable.',
    modules: [
      {
        num: '6',
        title: 'Débloquer son quotidien',
        objectif: "Créer des solutions IA sur mesure pour ses besoins spécifiques.",
        contenu: [
          'Conception de projets et d\'assistants IA personnalisés',
          'Mise en place d\'automatisations de tâches répétitives',
          'Création de supports et de visuels avancés',
        ],
        livrable: 'Au moins une création sur mesure et des automatisations opérationnelles.',
      },
      {
        num: '7',
        title: "Coaching de groupe : créer son plan d'action et son écosystème d'outils IA",
        objectif: "Formaliser un système IA personnel complet et un plan d'action à 90 jours.",
        contenu: [
          'Mise en place d\'agents et de connecteurs',
          'Construction de l\'écosystème d\'outils IA',
          'Élaboration du plan d\'action à 90 jours',
          'Coaching de groupe et retours personnalisés',
        ],
        livrable: 'Un plan d\'action IA complet et un système personnel documenté.',
      },
    ],
  },
]

/* ───────────────────────── Composants de mise en page ───────────────────────── */

function Section({
  id,
  title,
  children,
}: {
  id?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="mb-12">
      <h2
        className="text-2xl md:text-3xl font-extrabold text-[#1E172D] tracking-tight mb-4"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
      <div className="text-[#1E172D]/75 text-[15px] md:text-base leading-relaxed space-y-3">
        {children}
      </div>
    </section>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2.5">
          <span className="text-[#A68AFF] font-bold mt-0.5 flex-shrink-0">›</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  )
}

/* ───────────────────────── Page ───────────────────────── */

export default function ProgrammePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px] bg-[#F6F1EB] min-h-screen">
        {/* En-tête */}
        <header className="bg-[#1E172D] py-14 md:py-20">
          <div className="max-w-[860px] mx-auto px-6">
            <span
              className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFAB] text-[#1E172D] text-xs font-bold uppercase tracking-widest mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Programme de formation
            </span>
            <h1
              className="text-4xl md:text-5xl font-extrabold text-[#F6F1EB] leading-[1.1] tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Accélération IA 360
            </h1>
            <p className="text-[#D8D0FF] text-lg leading-relaxed">
              Programme détaillé · Méthode 3S (Simplifier › Scaler › Systématiser). Organisme de
              formation <strong className="text-[#F6F1EB]">StartPoint IA (EURL BUTZI)</strong> —
              certifié Qualiopi au titre des actions de formation.
            </p>
          </div>
        </header>

        <div className="max-w-[860px] mx-auto px-6 py-12 md:py-16">
          {/* Fiche synthétique */}
          <div className="bg-white rounded-3xl border border-[#1E172D]/10 shadow-[0_8px_40px_rgba(30,23,45,0.06)] p-6 md:p-8 mb-14">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {ficheItems.map((f) => (
                <div key={f.label} className="border-b border-[#1E172D]/8 pb-3 last:border-0">
                  <dt
                    className="text-[11px] font-bold uppercase tracking-widest text-[#A68AFF] mb-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {f.label}
                  </dt>
                  <dd className="text-[#1E172D]/80 text-sm leading-relaxed">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Présentation */}
          <Section title="Présentation de la formation">
            <p>
              <strong>Accélération IA 360</strong> est un parcours de 6 semaines qui permet aux
              indépendants et dirigeants de TPE d&apos;intégrer concrètement l&apos;intelligence
              artificielle dans leur activité, sans compétences techniques préalables. La
              progression suit la <strong>Méthode 3S</strong> : <em>Simplifier</em> son quotidien,{' '}
              <em>Scaler</em> sa production, puis <em>Systématiser</em> grâce à un système IA
              personnel.
            </p>
          </Section>

          {/* Objectifs pédagogiques */}
          <Section title="Objectifs pédagogiques">
            <p>À l&apos;issue de la formation, le participant sera capable de :</p>
            <Bullets items={objectifs} />
          </Section>

          {/* Public & prérequis */}
          <Section title="Public visé et prérequis">
            <p>
              <strong>Public :</strong> indépendants, freelances, coachs, consultants, formateurs,
              dirigeants de TPE et porteurs de projet souhaitant gagner du temps et développer leur
              activité avec l&apos;IA.
            </p>
            <p>
              <strong>Prérequis :</strong> aucun prérequis technique en IA ou en programmation. Une
              utilisation courante d&apos;un navigateur web et des outils bureautiques est
              nécessaire, ainsi qu&apos;une maîtrise du français à l&apos;oral et à l&apos;écrit.
            </p>
            <p>
              <strong>Matériel :</strong> un ordinateur avec une connexion internet stable, un
              casque ou des écouteurs, et une webcam recommandée pour les sessions live.
            </p>
            <p>
              <strong>Disponibilité :</strong> environ 3 heures par semaine (sessions live +
              mise en pratique) pendant la durée du parcours.
            </p>
          </Section>

          {/* Durée, rythme et modalités */}
          <Section title="Durée, rythme et modalités">
            <p>
              La formation représente <strong>12 heures de formation en live collectif</strong>,
              réparties en <strong>8 sessions de 90 minutes</strong>, complétées par un accès à une
              plateforme e-learning (plus de 80 vidéos) et un accompagnement asynchrone entre les
              sessions.
            </p>
            <p>
              Les sessions live ont lieu <strong>chaque mardi de 9 h 30 à 11 h</strong>, en
              visioconférence. Les <strong>replays sont disponibles</strong> et le rattrapage est
              possible en cas d&apos;absence ponctuelle. La formation se déroule{' '}
              <strong>100 % à distance</strong>.
            </p>
          </Section>

          {/* Programme détaillé */}
          <Section title="Contenu détaillé du programme">
            <div className="space-y-8 mt-2">
              {phases.map((ph) => (
                <div key={ph.phase}>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                    <h3
                      className="text-lg md:text-xl font-extrabold text-[#1E172D] tracking-tight"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {ph.phase}
                    </h3>
                    <span className="text-xs font-semibold text-[#A68AFF] uppercase tracking-widest">
                      {ph.semaines}
                    </span>
                  </div>
                  <p className="text-[#1E172D]/55 text-sm mb-4">{ph.intro}</p>

                  <div className="space-y-4">
                    {ph.modules.map((m) => (
                      <div
                        key={m.num}
                        className="bg-white rounded-2xl border border-[#1E172D]/8 p-5 md:p-6"
                      >
                        <div className="flex items-start gap-3 mb-3">
                          <span
                            className="flex-shrink-0 w-7 h-7 rounded-md inline-flex items-center justify-center text-xs font-bold bg-[#A68AFF]/12 text-[#A68AFF]"
                            style={{ fontFamily: 'var(--font-display)' }}
                          >
                            {m.num}
                          </span>
                          <h4
                            className="text-base md:text-lg font-bold text-[#1E172D] leading-snug tracking-tight pt-0.5"
                            style={{ fontFamily: 'var(--font-display)' }}
                          >
                            {m.title}
                          </h4>
                        </div>
                        <p className="text-[#1E172D]/75 text-sm mb-3">
                          <strong className="text-[#1E172D]">Objectif :</strong> {m.objectif}
                        </p>
                        <p className="text-[11px] font-bold uppercase tracking-widest text-[#1E172D]/40 mb-2">
                          Contenu
                        </p>
                        <Bullets items={m.contenu} />
                        <p className="text-sm text-[#1E172D]/75 mt-3 pt-3 border-t border-[#1E172D]/8">
                          <strong className="text-[#1E172D]">Livrable :</strong> {m.livrable}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Méthodes & moyens */}
          <Section title="Méthodes pédagogiques et moyens">
            <Bullets
              items={[
                'Sessions live interactives en petit groupe, alternant apports théoriques et mises en pratique.',
                'Plateforme e-learning accessible 24/7 (plus de 80 vidéos, fiches et modèles).',
                'Kit de prompts et de modèles fourni à chaque module.',
                'Accompagnement asynchrone et communauté d\'apprenants entre les sessions.',
                'Études de cas et exercices appliqués à l\'activité de chaque participant.',
              ]}
            />
          </Section>

          {/* Évaluation & sanction */}
          <Section title="Modalités d'évaluation et sanction">
            <Bullets
              items={[
                'Évaluation initiale : questionnaire de positionnement à l\'entrée en formation.',
                'Évaluation continue : auto-évaluations et un livrable validé à chaque module.',
                'Évaluation finale : présentation du système IA personnel et grille de compétences.',
                'Bilan : enquêtes de satisfaction à chaud puis à distance.',
              ]}
            />
            <p>
              <strong>Sanction :</strong> une <strong>attestation de fin de formation</strong> est
              remise à l&apos;issue du parcours, mentionnant les objectifs, le volume horaire et les
              compétences acquises.
            </p>
          </Section>

          {/* Suivi & assiduité */}
          <Section title="Modalités de suivi et d'assiduité">
            <p>
              L&apos;assiduité est suivie via les feuilles de présence (émargement) des sessions
              live, les connexions à la plateforme e-learning et la remise des livrables. Un
              référent pédagogique assure le suivi individuel tout au long du parcours.
            </p>
          </Section>

          {/* Tarifs & financement */}
          <Section title="Tarifs et financement">
            <p>
              Tarifs HT : <strong>Essentiel 2 997 €</strong> · <strong>Momentum 3 497 €</strong> ·{' '}
              <strong>Premium 5 997 €</strong>. Paiement en 1 fois ou en 3 fois sans frais.
            </p>
            <p>
              La formation est <strong>éligible au financement</strong> par les Fonds
              d&apos;Assurance Formation (AGEFICE, FIF-PL, FAFCEA) et peut ouvrir droit au crédit
              d&apos;impôt formation du dirigeant. Une estimation personnalisée est disponible sur la{' '}
              <a href="/financement" className="text-[#A68AFF] font-bold hover:underline">
                page financement
              </a>
              .
            </p>
          </Section>

          {/* Délais d'accès */}
          <Section title="Délais d'accès">
            <p>
              L&apos;inscription s&apos;effectue en plusieurs étapes : pré-inscription, entretien de
              positionnement, devis et convention, puis confirmation et accès. En cas de financement
              FAF, le dossier doit être déposé au minimum <strong>15 jours avant</strong> le début de
              la formation. Le délai d&apos;accès recommandé est d&apos;environ{' '}
              <strong>10 à 15 jours ouvrés</strong> avant le démarrage de la cohorte.
            </p>
          </Section>

          {/* Accessibilité */}
          <Section title="Accessibilité aux personnes en situation de handicap">
            <p>
              La formation se veut accessible à tous. Toute situation de handicap fait l&apos;objet
              d&apos;une étude individualisée afin de proposer les aménagements nécessaires (supports
              en formats alternatifs, sous-titrage des sessions, aménagement du rythme et des
              évaluations) et, le cas échéant, une orientation vers les acteurs spécialisés (Cap
              Emploi, Agefiph, FIPHFP). Notre référent handicap est joignable à{' '}
              <a
                href="mailto:contact@startpoint-ia.fr"
                className="text-[#A68AFF] font-bold hover:underline"
              >
                contact@startpoint-ia.fr
              </a>{' '}
              (réponse sous 48 h ouvrées).
            </p>
          </Section>

          {/* Réclamations */}
          <Section title="Réclamations et médiation">
            <p>
              Toute réclamation peut être adressée par écrit à{' '}
              <a
                href="mailto:contact@startpoint-ia.fr"
                className="text-[#A68AFF] font-bold hover:underline"
              >
                contact@startpoint-ia.fr
              </a>
              . Une réponse écrite est apportée sous 15 jours ouvrés. À défaut de solution amiable,
              le recours à un médiateur de la consommation reste possible.
            </p>
          </Section>

          {/* Indicateurs */}
          <Section title="Indicateurs de performance">
            <p>
              Les indicateurs de résultats (taux de satisfaction, taux de complétion, taux
              d&apos;atteinte des objectifs) seront publiés à l&apos;issue de la première cohorte.
            </p>
          </Section>

          {/* Mentions de l'organisme */}
          <Section title="L'organisme de formation">
            <div className="bg-white rounded-2xl border border-[#1E172D]/8 p-5 md:p-6 text-sm text-[#1E172D]/75 leading-relaxed">
              <p>
                <strong>StartPoint IA</strong> — marque commerciale de <strong>BUTZI EURL</strong>
              </p>
              <p>SIRET : 847 593 100 00013 · TVA intracommunautaire : FR 69 84 75 93 100</p>
              <p>Siège : 61 boulevard du Maréchal Joffre, 92340 Bourg-la-Reine</p>
              <p>Directeur de la publication : Johannes Alinhac</p>
              <p>
                Organisme de formation enregistré sous le numéro <strong>11941352394</strong> auprès
                du préfet de région Île-de-France. Cet enregistrement ne vaut pas agrément de
                l&apos;État.
              </p>
              <p>
                Certification <strong>Qualiopi</strong> au titre de la catégorie d&apos;actions
                suivante : actions de formation. Formation éligible aux FAF (AGEFICE, FIF-PL,
                FAFCEA).
              </p>
              <p>
                Contact :{' '}
                <a
                  href="mailto:contact@startpoint-ia.fr"
                  className="text-[#A68AFF] font-bold hover:underline"
                >
                  contact@startpoint-ia.fr
                </a>
              </p>
            </div>
            <p className="text-xs text-[#1E172D]/45 mt-4">
              Document à jour au 27 mai 2026. Les contenus et modalités peuvent faire l&apos;objet
              d&apos;ajustements pédagogiques.
            </p>
          </Section>
        </div>
      </main>
      <FooterSection />
    </>
  )
}
