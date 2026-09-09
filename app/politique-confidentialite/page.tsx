import type { Metadata } from 'next'
import { Navbar } from '@/components/sections/navbar'
import { FooterSection } from '@/components/sections/footer-section'

export const metadata: Metadata = {
  title: 'Politique de confidentialité | Accélération IA 360',
  description:
    "Politique de confidentialité du site acceleration-ia.fr : données collectées, finalités, sous-traitants, durées de conservation et droits RGPD.",
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h2
        className="text-xl md:text-2xl font-extrabold text-[#1E172D] tracking-tight mb-3"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {title}
      </h2>
      <div className="text-[#1E172D]/75 text-[15px] leading-relaxed space-y-2">{children}</div>
    </section>
  )
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2 mt-1">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-2.5">
          <span className="text-[#A68AFF] font-bold mt-0.5 flex-shrink-0">›</span>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  )
}

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px] bg-[#F6F1EB] min-h-screen">
        <div className="max-w-[820px] mx-auto px-6 py-12 md:py-16">
          <h1
            className="text-3xl md:text-4xl font-extrabold text-[#1E172D] tracking-tight mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Politique de confidentialité
          </h1>
          <p className="text-[#1E172D]/60 text-sm mb-10">
            La présente politique informe les utilisateurs du site <strong>acceleration-ia.fr</strong>{' '}
            sur la collecte et le traitement de leurs données personnelles, conformément au Règlement
            Général sur la Protection des Données (RGPD) et à la loi « Informatique et Libertés » du
            6 janvier 1978 modifiée.
          </p>

          <Section title="Responsable du traitement">
            <p>
              <strong>BUTZI EURL</strong> (marque StartPoint IA), SIRET 847 593 100 00021, 61
              boulevard du Maréchal Joffre, 92340 Bourg-la-Reine, France. Représentée par Johannes
              Alinhac.
            </p>
            <p>
              Contact :{' '}
              <a href="mailto:hello@startpoint-ia.fr" className="text-[#A68AFF] font-bold hover:underline">
                hello@startpoint-ia.fr
              </a>
            </p>
          </Section>

          <Section title="Données collectées">
            <p>Nous collectons uniquement les données nécessaires à nos activités :</p>
            <Bullets
              items={[
                'Nom et prénom',
                'Adresse e-mail',
                'Numéro de téléphone (si vous le communiquez)',
                'Informations transmises via le simulateur de financement (statut, ancienneté d\'activité, etc.)',
                'Contenu des messages envoyés via les formulaires ou le module de contact',
                'Données de commande lors d\'un achat (traitées sur le tunnel Systeme.io)',
                'Données de navigation techniques (adresse IP, journaux serveur)',
              ]}
            />
            <p>
              <strong>Caractère obligatoire ou facultatif :</strong> les champs signalés comme
              obligatoires dans nos formulaires sont nécessaires au traitement de votre demande ; à
              défaut de les renseigner, nous ne serons pas en mesure d&apos;y donner suite. Les
              autres informations sont facultatives et leur absence est sans conséquence.
            </p>
          </Section>

          <Section title="Finalités du traitement">
            <Bullets
              items={[
                'Répondre à vos demandes et vous recontacter',
                'Vous envoyer le programme, des ressources ou des informations sur la formation',
                'Estimer votre prise en charge / financement',
                'Établir devis, conventions et gérer les inscriptions et paiements',
                'Vous adresser des offres commerciales si vous y avez consenti',
                'Assurer le bon fonctionnement et la sécurité du site',
              ]}
            />
          </Section>

          <Section title="Bases légales">
            <Bullets
              items={[
                'Votre consentement (formulaires, demandes de ressources, prospection)',
                'L\'exécution d\'un contrat ou de mesures précontractuelles (demande d\'accompagnement, commande)',
                'Notre intérêt légitime à développer notre activité et améliorer nos services',
                'Le respect d\'obligations légales (ex. archivage des conventions et pièces comptables)',
              ]}
            />
          </Section>

          <Section title="Destinataires et sous-traitants">
            <p>
              Vos données sont accessibles à l&apos;équipe de BUTZI EURL et à nos sous-traitants
              techniques, strictement pour les finalités ci-dessus :
            </p>
            <Bullets
              items={[
                <><strong>Netlify, Inc.</strong> (États-Unis) — hébergement du site et réception des formulaires (Netlify Forms)</>,
                <><strong>Resend</strong> (États-Unis) — envoi des e-mails transactionnels</>,
                <><strong>Systeme.io</strong> (Union européenne) — tunnel de commande et paiement</>,
                <><strong>Calendly</strong> (États-Unis) — prise de rendez-vous</>,
                <><strong>Google</strong> — messagerie professionnelle et lecteur vidéo YouTube (mode « sans cookie »)</>,
                <><strong>Meta / WhatsApp</strong> — uniquement si vous nous contactez via le bouton WhatsApp</>,
                'Les organismes financeurs et certificateurs (ex. FAF/OPCO, Qualiopi) en cas de financement',
              ]}
            />
            <p>Aucune donnée n&apos;est vendue ni cédée à des tiers à des fins commerciales.</p>
          </Section>

          <Section title="Transferts hors Union européenne">
            <p>
              Certains sous-traitants (Netlify, Resend, Google, Calendly) sont établis aux
              États-Unis et peuvent traiter des données hors de l&apos;Union européenne. Ces
              transferts sont encadrés par des garanties conformes au RGPD (clauses contractuelles
              types de la Commission européenne, et le cas échéant certification DPF). Une copie de
              ces garanties peut être obtenue sur demande à hello@startpoint-ia.fr.
            </p>
          </Section>

          <Section title="Décision automatisée et profilage">
            <p>
              Vos données ne font l&apos;objet d&apos;aucune prise de décision entièrement
              automatisée ni de profilage produisant des effets juridiques à votre égard, au sens de
              l&apos;article 22 du RGPD. Le simulateur de financement fournit une simple estimation
              indicative, sans décision automatisée.
            </p>
          </Section>

          <Section title="Durées de conservation">
            <Bullets
              items={[
                'Prospects : jusqu\'à 3 ans après le dernier contact',
                'Clients et documents comptables/juridiques : jusqu\'à 10 ans (obligations légales)',
                'Contacts non commerciaux : jusqu\'à votre demande de suppression',
              ]}
            />
          </Section>

          <Section title="Cookies">
            <p>
              Le site n&apos;utilise <strong>aucun cookie publicitaire, de mesure d&apos;audience ou
              de suivi</strong>. Seuls sont utilisés les cookies strictement nécessaires au
              fonctionnement du site, exemptés de consentement au titre de l&apos;article 82 de la
              loi « Informatique et Libertés ».
            </p>
            <p>
              <strong>Vidéo :</strong> les vidéos de présentation ne sont pas chargées
              automatiquement. Seule une image d&apos;aperçu est affichée ; le lecteur YouTube
              (fourni par Google, en mode <em>youtube-nocookie</em>) n&apos;est chargé{' '}
              <strong>qu&apos;après votre clic</strong> sur le bouton de lecture. Tant que vous ne
              cliquez pas, aucune donnée n&apos;est transmise à Google et aucun traceur tiers
              n&apos;est déposé. Si vous lancez la lecture, Google est susceptible de déposer des
              traceurs et de recevoir votre adresse IP, selon{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener"
                className="text-[#A68AFF] font-bold hover:underline"
              >
                sa propre politique de confidentialité
              </a>
              .
            </p>
            <p>
              Vous pouvez à tout moment supprimer les cookies déjà déposés via les paramètres de
              votre navigateur.
            </p>
          </Section>

          <Section title="Vos droits">
            <p>Vous disposez des droits suivants sur vos données :</p>
            <Bullets
              items={[
                'Accès, rectification, effacement',
                'Limitation et opposition au traitement',
                'Portabilité des données',
                'Retrait du consentement à tout moment',
              ]}
            />
            <p>
              Pour les exercer, contactez-nous à{' '}
              <a href="mailto:hello@startpoint-ia.fr" className="text-[#A68AFF] font-bold hover:underline">
                hello@startpoint-ia.fr
              </a>
              . Vous pouvez également déposer une réclamation auprès de la CNIL —{' '}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener" className="text-[#A68AFF] font-bold hover:underline">
                www.cnil.fr
              </a>
              .
            </p>
          </Section>

          <Section title="Sécurité">
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles adaptées pour
              protéger vos données : connexions chiffrées (HTTPS/SSL), hébergement sur
              infrastructure sécurisée et accès restreint aux seules personnes habilitées.
            </p>
          </Section>

          <p className="text-xs text-[#1E172D]/45 mt-8">Dernière mise à jour : 9 septembre 2026.</p>
        </div>
      </main>
      <FooterSection />
    </>
  )
}
