import type { Metadata } from 'next'
import { Navbar } from '@/components/sections/navbar'
import { FooterSection } from '@/components/sections/footer-section'
import { MeshGradientBg } from '@/components/ui/mesh-gradient-bg'

export const metadata: Metadata = {
  title: 'Programme détaillé : Accélération IA 360 | StartPoint IA',
  description:
    "Programme de formation détaillé Accélération IA 360 : objectifs pédagogiques, contenu des modules, modalités, évaluation, accessibilité et mentions Qualiopi de l'organisme StartPoint IA (EURL BUTZI).",
}

/* ───────────────────────── Données du programme ───────────────────────── */

const ficheItems: { label: string; value: string }[] = [
  { label: 'Intitulé', value: 'Accélération IA 360 : Méthode Levier' },
  { label: 'Durée', value: '12 heures de formation, sur 8 semaines' },
  { label: 'Modalité', value: 'Formation à distance : distanciel synchrone via classes virtuelles de groupe hebdomadaires' },
  { label: 'Sessions live', value: '8 classes virtuelles de 90 min' },
  { label: 'Public', value: 'Entrepreneurs, indépendants, consultants, coaches, formateurs, freelances' },
  { label: 'Prérequis', value: 'Avoir un ordinateur avec une connexion internet · niveau débutant en IA accepté' },
  { label: 'Effectif', value: '10 participants maximum par cohorte' },
  { label: 'Tarif', value: "À partir de 2 997 € HT, finançable (FAF, déductibilité fiscale)" },
  { label: 'Sanction', value: 'Attestation de fin de formation' },
  { label: 'Accessibilité', value: 'Formation accessible aux personnes en situation de handicap' },
]

const objectifs: string[] = [
  "Configurer et paramétrer un assistant IA adapté à son activité professionnelle.",
  "Concevoir des prompts structurés et efficaces pour ses cas d'usage métier.",
  "Produire des documents professionnels (emails, devis, contrats, contenus marketing) assistés par l'IA.",
  "Construire une stratégie de contenu et de prospection augmentée par l'IA.",
  "Évaluer la pertinence et les limites d'un outil IA pour un cas d'usage donné.",
]

const evaluation: string[] = [
  'Évaluation de positionnement en début de formation (auto-évaluation).',
  'Quiz de validation des acquis à chaque module.',
  'Projet final : construction de son « Système IA Personnel » (cas pratique évalué).',
  'Enquête de satisfaction en fin de formation.',
  'Seuil de réussite : 80 % aux évaluations.',
]

type Module = {
  num: string
  week: string
  step: string
  objectif: string
  contenu: string[]
  livrable: string
}

const modules: Module[] = [
  {
    num: '·',
    week: 'Semaine 1',
    step: 'Paramétrage des outils et rencontre',
    objectif: "Disposer d'un environnement IA opérationnel et rencontrer la communauté d'entrepreneurs.",
    contenu: [
      'Présentation du parcours, des objectifs et des modalités de suivi',
      'Paramétrage complet de votre outil IA',
      "Rencontre avec la communauté d'entrepreneurs et accès au Cercle StartPoint",
      'Mise en place de la fonctionnalité audio',
    ],
    livrable: 'Votre outil configuré et un réseau.',
  },
  {
    num: '1',
    week: 'Module 1 · Semaine 2',
    step: 'Poser des fondations solides',
    objectif: "Comprendre l'architecture d'un assistant IA, le connecter à vos outils et produire vos premiers prompts fiables.",
    contenu: [
      "Démystification de l'IA : ce qui marche vraiment pour les entrepreneurs",
      'Architecture et subtilités du prompt',
      'Connecter Claude à vos outils du quotidien',
      "Création de visuels, de présentations et d'emails professionnels",
    ],
    livrable: "Les bases de l'IA générative et une cartographie de votre workflow.",
  },
  {
    num: '2',
    week: 'Module 2 · Semaine 3',
    step: 'Gagner du temps tout de suite',
    objectif: 'Soulager les tâches les plus pénibles et chronophages du quotidien.',
    contenu: [
      'Prise de notes automatique et productivité',
      'Organisation intelligente : to-do, blocs de temps, planification',
      'Création de documents personnalisés sans hallucination',
      'Recherche et veille accélérées',
    ],
    livrable: "Un document prêt à l'emploi et une semaine type optimisée.",
  },
  {
    num: '3',
    week: 'Module 3 · Semaine 4',
    step: "Utilisez l'IA comme un partenaire stratégique",
    objectif: "Utiliser l'IA comme partenaire stratégique pour piloter son activité.",
    contenu: [
      'Clarification de la vision et structuration des idées',
      'Comparaison de scénarios business et prise de décision',
      'Identification des leviers de croissance',
      'Construction de votre dashboard stratégique pluggé sur vos données',
    ],
    livrable: "Un dashboard stratégique pluggé sur vos données, une matrice impact/effort et un plan d'action.",
  },
  {
    num: '4',
    week: 'Module 4 · Semaine 5',
    step: "L'IA dans le Marketing",
    objectif: "Concevoir et décliner ses contenus marketing à grande échelle avec l'IA.",
    contenu: [
      'Définition du persona et choix des canaux',
      "Formulation de l'USP",
      "Création de posts, de visuels et d'un site avec l'IA",
      'Distribution : un contenu décliné en cinq formats',
    ],
    livrable: "Un post publié (texte + visuel) et un site réalisé avec l'IA.",
  },
  {
    num: '5',
    week: 'Module 5 · Semaine 6',
    step: 'Plus de prospects et des offres plus claires',
    objectif: "Structurer son offre et son cycle de vente avec l'appui de l'IA.",
    contenu: [
      "Construction et chiffrage d'une offre",
      "Prospection et génération de leads assistées par l'IA",
      'Préparation de calls, scripts et négociation',
      'Supports commerciaux interactifs et fidélisation (upsell, cross-sell)',
    ],
    livrable: 'Une offre structurée et deux propositions commerciales avec supports interactifs.',
  },
  {
    num: '6',
    week: 'Module 6 · Semaine 7',
    step: 'Configurer vos assistants et automatismes IA',
    objectif: "Créer des solutions IA sur mesure pour ses besoins spécifiques.",
    contenu: [
      "Création de projets avec l'IA",
      'Maîtrise des Claude Skills',
      'Découverte et test du vibe coding',
      "Création d'un tableau de bord",
    ],
    livrable: 'Une création codée et des modèles pour Claude Skills.',
  },
  {
    num: '·',
    week: 'Semaine 8',
    step: 'Coaching de déblocage',
    objectif: "Formaliser un système IA personnel complet et un plan d'action durable.",
    contenu: [
      'Agents et assistants pour gagner en autonomie',
      'Connecteurs et Cowork : automatiser sans coder',
      'Roadmap : standardiser, simplifier, automatiser',
      'Coaching personnalisé pour construire vos premiers projets sur mesure',
    ],
    livrable: "Un système IA complet et un plan d'action post-programme.",
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
        {/* ── Bandeau premium ── */}
        <header className="relative overflow-hidden bg-[#1E172D] py-16 md:py-24">
          <MeshGradientBg
            colors={['#1E172D', '#3A2860', '#A68AFF', '#D8D0FF', '#FFFFAB']}
            veilClassName="bg-[#1E172D]/68"
          />
          <div className="relative z-10 max-w-[860px] mx-auto px-6 text-center md:text-left">
            {/* Badge glassmorphism */}
            <span
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F6F1EB] text-xs font-bold uppercase tracking-widest mb-6"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="w-2 h-2 rounded-full bg-[#FFFFAB] animate-pulse" />
              Formation intensive · 8 semaines
            </span>

            <h1
              className="text-4xl md:text-6xl font-extrabold text-[#F6F1EB] leading-[1.05] tracking-tight mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Accélération IA 360
            </h1>

            <p
              className="text-xl md:text-2xl font-bold leading-snug mb-5"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-[#D8D0FF]">De «&nbsp;j&apos;ai testé ChatGPT&nbsp;»</span>{' '}
              <span className="text-[#F6F1EB]">à «&nbsp;</span>
              <span className="text-[#FFFFAB]">j&apos;ai mon propre système IA</span>
              <span className="text-[#F6F1EB]">&nbsp;».</span>
            </p>

            <p className="text-[#D8D0FF]/85 text-base md:text-lg leading-relaxed max-w-[640px] mx-auto md:mx-0">
              Programme détaillé suivant la Méthode Levier (Clarifier › Déléguer › Réinventer › Amplifier › Assumer › Libérer).
              Organisme de formation{' '}
              <strong className="text-[#F6F1EB]">StartPoint IA (EURL BUTZI)</strong>, certifié
              Qualiopi au titre des actions de formation.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-3 mt-8">
              <a
                href="/#pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#FFFFAB] text-[#1E172D] font-bold text-sm md:text-base hover:bg-[#f5f08c] hover:scale-[1.02] transition-all"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Rejoindre la prochaine cohorte →
              </a>
              <a
                href="/financement"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/25 bg-white/5 backdrop-blur-md text-[#F6F1EB] font-semibold text-sm md:text-base hover:bg-white/10 transition-colors"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Estimer mon financement
              </a>
            </div>
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
              <strong>Accélération IA 360</strong>{' '}
              est un parcours de 8 semaines qui permet aux entrepreneurs, indépendants et dirigeants de TPE
              d&apos;intégrer concrètement l&apos;intelligence artificielle dans leur activité, sans
              compétences techniques préalables. La progression suit la{' '}
              <strong>Méthode Levier</strong> : <em>Clarifier</em> l&apos;IA, <em>Déléguer</em> vos
              tâches, <em>Réinventer</em> votre stratégie, <em>Amplifier</em> votre production,{' '}
              <em>Assumer</em> votre offre, puis <em>Libérer</em> votre quotidien grâce à un système
              IA personnel.
            </p>
          </Section>

          {/* Objectifs pédagogiques */}
          <Section title="Objectifs pédagogiques">
            <p>À l&apos;issue de la formation, le stagiaire sera capable de :</p>
            <Bullets items={objectifs} />
          </Section>

          {/* Public & prérequis */}
          <Section title="Public visé et prérequis">
            <p>
              <strong>Public :</strong>{' '}
              entrepreneurs, indépendants, consultants, coaches, formateurs et freelances souhaitant
              gagner du temps et développer leur activité avec l&apos;IA.
            </p>
            <p>
              <strong>Prérequis :</strong>{' '}
              avoir un ordinateur avec une connexion internet ; niveau débutant en IA accepté.
            </p>
          </Section>

          {/* Durée, rythme et modalités */}
          <Section title="Durée, rythme et modalités">
            <p>
              La formation représente <strong>12 heures au total</strong>, réparties sur{' '}
              <strong>8 semaines</strong>. Elle se déroule <strong>à distance en synchrone</strong>{' '}
              via des classes virtuelles de groupe hebdomadaires.
            </p>
            <p>
              Le format se compose de <strong>8 classes virtuelles de groupe de 90 minutes</strong>{' '}
              (une par semaine, le mardi de 9 h 30 à 11 h). Les{' '}
              <strong>replays sont disponibles</strong> et le rattrapage est possible.
            </p>
            <p>
              <strong>Disponibilité conseillée :</strong>{' '}
              environ 1 h 30 par semaine pendant la durée du parcours.
            </p>
          </Section>

          {/* Programme détaillé */}
          <Section title="Contenu détaillé du programme">
            <div className="space-y-4 mt-2">
              {modules.map((m) => (
                <div
                  key={m.step}
                  className="bg-white rounded-2xl border border-[#1E172D]/8 p-5 md:p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span
                      className="flex-shrink-0 w-7 h-7 rounded-md inline-flex items-center justify-center text-xs font-bold bg-[#A68AFF]/12 text-[#A68AFF]"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {m.num}
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 pt-0.5">
                      <h4
                        className="text-base md:text-lg font-bold text-[#1E172D] leading-snug tracking-tight"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {m.step}
                      </h4>
                      <span className="text-[11px] font-semibold text-[#A68AFF] uppercase tracking-widest">
                        {m.week}
                      </span>
                    </div>
                  </div>
                  <p className="text-[#1E172D]/75 text-sm mb-3">
                    <strong className="text-[#1E172D]">Objectif :</strong>{' '}
                    {m.objectif}
                  </p>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-[#1E172D]/40 mb-2">
                    Contenu
                  </p>
                  <Bullets items={m.contenu} />
                  <p className="text-sm text-[#1E172D]/75 mt-3 pt-3 border-t border-[#1E172D]/8">
                    <strong className="text-[#1E172D]">Livrable :</strong>{' '}
                    {m.livrable}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          {/* Méthodes & moyens */}
          <Section title="Méthodes pédagogiques et moyens">
            <Bullets
              items={[
                'Plateforme e-learning accessible 24/7 (plus de 80 vidéos, fiches et modèles).',
                'Classes virtuelles interactives en petit groupe (10 participants maximum).',
                'Kit de prompts et de modèles fourni à chaque module.',
                'Accompagnement asynchrone et communauté d\'apprenants entre les sessions.',
                'Études de cas et exercices appliqués à l\'activité de chaque participant.',
              ]}
            />
          </Section>

          {/* Évaluation & sanction */}
          <Section title="Modalités d'évaluation et sanction">
            <Bullets items={evaluation} />
            <p>
              <strong>Sanction :</strong>{' '}
              une <strong>attestation de fin de formation</strong> est remise à l&apos;issue du
              parcours, mentionnant les objectifs, le volume horaire et les compétences acquises.
            </p>
          </Section>

          {/* Suivi & assiduité */}
          <Section title="Modalités de suivi et d'assiduité">
            <p>
              L&apos;assiduité est suivie via les connexions à la plateforme e-learning, la
              participation aux classes virtuelles et la remise des livrables. Un référent
              pédagogique assure le suivi individuel tout au long du parcours.
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
              d&apos;Assurance Formation (AGEFICE, FIF-PL, FAFCEA) et les frais sont{' '}
              <strong>déductibles fiscalement</strong> (IS ou BIC/BNC réel selon votre statut).
              Une estimation personnalisée est disponible sur la{' '}
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
                href="mailto:hello@startpoint-ia.fr"
                className="text-[#A68AFF] font-bold hover:underline"
              >
                hello@startpoint-ia.fr
              </a>{' '}
              (réponse sous 48 h ouvrées).
            </p>
          </Section>

          {/* Réclamations */}
          <Section title="Réclamations et médiation">
            <p>
              Toute réclamation peut être adressée par écrit à{' '}
              <a
                href="mailto:hello@startpoint-ia.fr"
                className="text-[#A68AFF] font-bold hover:underline"
              >
                hello@startpoint-ia.fr
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
                <strong>StartPoint IA</strong>, marque commerciale de <strong>BUTZI EURL</strong>
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
                  href="mailto:hello@startpoint-ia.fr"
                  className="text-[#A68AFF] font-bold hover:underline"
                >
                  hello@startpoint-ia.fr
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
