import type { Metadata } from 'next'
import { Navbar } from '@/components/sections/navbar'
import { FooterSection } from '@/components/sections/footer-section'

export const metadata: Metadata = {
  title: 'Mentions légales | Accélération IA 360',
  description:
    "Mentions légales du site acceleration-ia.fr, édité par BUTZI EURL (marque StartPoint IA), organisme de formation certifié Qualiopi.",
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

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[88px] bg-[#F6F1EB] min-h-screen">
        <div className="max-w-[820px] mx-auto px-6 py-12 md:py-16">
          <h1
            className="text-3xl md:text-4xl font-extrabold text-[#1E172D] tracking-tight mb-3"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Mentions légales
          </h1>
          <p className="text-[#1E172D]/60 text-sm mb-10">
            Conformément à l&apos;article 6 de la loi n°2004-575 du 21 juin 2004 pour la confiance
            dans l&apos;économie numérique (LCEN), il est précisé aux utilisateurs du site{' '}
            <strong>acceleration-ia.fr</strong> l&apos;identité des intervenants dans le cadre de sa
            réalisation et de son suivi.
          </p>

          <Section title="Éditeur du site">
            <p><strong>BUTZI</strong>, EURL au capital de 1 000 €, exploitant sous la marque commerciale <strong>StartPoint IA</strong>.</p>
            <p>SIREN : 847 593 100 · SIRET : 847 593 100 00021 · RCS Nanterre</p>
            <p>TVA intracommunautaire : FR 69 847 593 100</p>
            <p>
              Les actions de formation professionnelle continue dispensées par BUTZI EURL sont{' '}
              <strong>exonérées de TVA</strong> en application de l&apos;article 261-4-4° a du Code
              général des impôts. Les prix des formations sont donc nets de taxe.
            </p>
            <p>Code APE/NAF : 85.59A — Formation continue d&apos;adultes</p>
            <p>Siège social : 61 boulevard du Maréchal Joffre, 92340 Bourg-la-Reine, France</p>
            <p>Directeur de la publication : Johannes Alinhac</p>
            <p>
              Contact :{' '}
              <a href="mailto:hello@startpoint-ia.fr" className="text-[#A68AFF] font-bold hover:underline">
                hello@startpoint-ia.fr
              </a>{' '}
              · 06 31 98 65 25
            </p>
          </Section>

          <Section title="Organisme de formation">
            <p>
              BUTZI EURL est un organisme de formation enregistré sous le numéro{' '}
              <strong>11941352394</strong> auprès du préfet de région Île-de-France. Cet
              enregistrement ne vaut pas agrément de l&apos;État.
            </p>
            <p>
              L&apos;organisme est certifié <strong>Qualiopi</strong> au titre de la catégorie
              d&apos;actions suivante : actions de formation.
            </p>
          </Section>

          <Section title="Hébergement">
            <p>Le site est hébergé par :</p>
            <p>
              <strong>Netlify, Inc.</strong><br />
              512 2nd Street, Suite 200, San Francisco, CA 94107, États-Unis<br />
              Téléphone : +1 844-899-7312<br />
              E-mail :{' '}
              <a href="mailto:support@netlify.com" className="text-[#A68AFF] font-bold hover:underline">
                support@netlify.com
              </a>{' '}
              ·{' '}
              <a href="https://www.netlify.com" target="_blank" rel="noopener" className="text-[#A68AFF] font-bold hover:underline">
                www.netlify.com
              </a>
            </p>
            <p>
              Le tunnel de commande (sous-domaine <strong>panier.acceleration-ia.fr</strong>) est
              opéré via la plateforme <strong>Systeme.io</strong> (Systeme.io, France).
            </p>
          </Section>

          <Section title="Propriété intellectuelle">
            <p>
              Le site acceleration-ia.fr ainsi que l&apos;ensemble de ses contenus (textes, images,
              vidéos, logos, icônes, logiciels, etc.) sont la propriété exclusive de BUTZI EURL, sauf
              mention contraire. Toute reproduction, représentation, modification, publication ou
              adaptation de tout ou partie du site, par quelque procédé que ce soit, est interdite
              sans l&apos;autorisation écrite préalable de BUTZI EURL. Toute utilisation non
              autorisée est constitutive d&apos;une contrefaçon au sens des articles L.335-2 et
              suivants du Code de la propriété intellectuelle.
            </p>
          </Section>

          <Section title="Données personnelles et cookies">
            <p>
              Le traitement des données personnelles collectées via le site est décrit dans notre{' '}
              <a href="/politique-confidentialite" className="text-[#A68AFF] font-bold hover:underline">
                politique de confidentialité
              </a>
              . Conformément au RGPD et à la loi « Informatique et Libertés », vous disposez de droits
              d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition, de limitation et de
              portabilité, exerçables à{' '}
              <a href="mailto:hello@startpoint-ia.fr" className="text-[#A68AFF] font-bold hover:underline">
                hello@startpoint-ia.fr
              </a>
              .
            </p>
          </Section>

          <Section title="Conditions de vente">
            <p>
              Les conditions générales de vente applicables aux formations et prestations sont
              accessibles lors de la commande, sur le tunnel de vente{' '}
              <a href="https://panier.acceleration-ia.fr/cgv" target="_blank" rel="noopener" className="text-[#A68AFF] font-bold hover:underline">
                panier.acceleration-ia.fr/cgv
              </a>
              .
            </p>
          </Section>

          <Section title="Responsabilité">
            <p>
              BUTZI EURL s&apos;efforce de fournir des informations à jour et vérifiées, sans pouvoir
              être tenue responsable des erreurs, omissions ou de l&apos;indisponibilité de certaines
              pages. L&apos;utilisation du site se fait sous l&apos;entière responsabilité de
              l&apos;utilisateur.
            </p>
          </Section>

          <Section title="Droit applicable">
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, et à
              défaut de résolution amiable, les tribunaux du ressort du siège social de
              l&apos;éditeur seront seuls compétents.
            </p>
          </Section>

          <p className="text-xs text-[#1E172D]/45 mt-8">Dernière mise à jour : 9 septembre 2026.</p>
        </div>
      </main>
      <FooterSection />
    </>
  )
}
