'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import { LogoCloud } from '@/components/ui/logo-cloud-3'
import { PhoneRevealButton } from '@/components/ui/phone-reveal-button'

/* Lien vers les avis Google de Butzi. */
const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?sca_esv=2c335ba9186fa769&cs=0&sxsrf=ANbL-n79kVxeIk2N7m4oTbLKTaV3V2L3Zg:1780688794225&q=Butzi+-+Conf%C3%A9rencier+%26+Magicien+%7C+Keynote+Speaker+%26+Magician+Avis&rldimm=15684917062307454983&tbm=lcl&hl=fr-FR#lkt=LocalPoiReviews'

/* Réseaux sociaux de Butzi. TODO : renseigner les URLs Instagram et Facebook. */
const SOCIALS: { name: string; href: string; icon: React.ReactNode }[] = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/butzi_inspirations/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.38 2.13.67.66 1.34 1.07 2.13 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.38.66-.67 1.07-1.34 1.38-2.13.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.38-2.13C21.32 1.35 20.65.94 19.86.63 19.1.33 18.22.13 16.95.07 15.67.01 15.26 0 12 0z" />
        <path d="M12 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
        <circle cx="18.41" cy="5.59" r="1.44" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/butzispeaker/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: '#',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
      </svg>
    ),
  },
]

/* Chiffres clés, présentés façon section « L'équipe » (cartes blanches). */
const metrics = [
  { value: '4', label: 'TEDx' },
  { value: '500+', label: 'Interventions' },
  { value: '2', label: 'Livres' },
]

/* Mêmes logos que le bandeau du héro (rendus ici en silhouette sombre). */
const refLogos = [
  { alt: 'Chanel', src: '/logos/chanel.png', heightClass: 'h-3.5 md:h-4' },
  { alt: 'TED', src: '/logos/ted.png' },
  { alt: 'Samsung', src: '/logos/Samsung.png' },
  { alt: 'Airbus', src: '/logos/Airbus_Logo_2017.svg.png', heightClass: 'h-4 md:h-5' },
  { alt: 'Mindvalley', src: '/logos/Mindvalley.png', heightClass: 'h-5 md:h-6' },
  { alt: 'Bpifrance', src: '/logos/Bpifrance_logo.svg.png' },
  { alt: 'CCI', src: '/logos/CCI.png', heightClass: 'h-16 md:h-[72px]' },
  { alt: 'DCF', src: '/logos/DCF_Logo_Nom_complet.png', heightClass: 'h-8 md:h-10' },
]

export function Founder() {
  return (
    <section id="butzi" className="bg-white py-20 md:py-28 relative overflow-hidden">
      {/* Séparateur haut */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A68AFF]/25 to-transparent" />

      <div className="max-w-[1140px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="mb-12 md:mb-16 text-center md:text-left"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFAB] text-[#1E172D] text-xs font-bold uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Le fondateur
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-3xl font-extrabold text-[#1E172D] leading-[1.15] tracking-tight max-w-[720px] mx-auto md:mx-0"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <span className="text-[#A68AFF]">Un mot de Butzi</span>, fondateur de StartPoint IA
          </motion.h2>
        </motion.div>

        {/* Photo (cercle jaune) + texte */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Photo sur cercle jaune, surgit de bas en haut, + réseaux */}
          <div className="order-1 flex flex-col items-center gap-7">
            <div className="relative flex items-center justify-center">
              {/* Cercle jaune derrière (comme avant), agrandi avec la photo */}
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={viewport}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute z-0 h-[310px] w-[310px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] rounded-full"
                style={{ background: '#FFFFAB' }}
              />
              {/* Photo : plus grande, monte de bas en haut, bas fondu dans le cercle */}
              <motion.img
                src="/team/butzi.webp"
                alt="Butzi (Johannes Alinhac), fondateur de StartPoint IA"
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="relative z-10 w-[265px] sm:w-[340px] md:w-[420px] lg:w-[460px] h-auto object-contain [mask-image:linear-gradient(to_bottom,black_82%,transparent)]"
              />
            </div>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-1.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.name} de Butzi`}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full text-[#1E172D]/45 hover:text-[#A68AFF] hover:bg-[#A68AFF]/10 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Métriques + texte (hors carré blanc) */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
            className="order-2 min-w-0 text-center md:text-left"
          >
            {/* Chiffres clés façon section L'équipe */}
            <motion.div
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              className="flex flex-wrap md:flex-nowrap justify-center md:justify-start gap-2.5 mb-6"
            >
              {metrics.map((m) => (
                <motion.div
                  key={m.label}
                  variants={fadeUp}
                  className="px-3.5 py-2.5 rounded-xl bg-white border border-[#1E172D]/10 hover:border-[#A68AFF] transition-colors text-center min-w-[64px]"
                >
                  <p
                    className="text-xl font-extrabold text-[#1E172D] leading-none"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {m.value}
                  </p>
                  <p className="text-[10px] font-semibold text-[#1E172D]/55 uppercase tracking-wide mt-1">
                    {m.label}
                  </p>
                </motion.div>
              ))}

              {/* Note Google */}
              <motion.a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                className="px-3.5 py-2.5 rounded-xl bg-white border border-[#1E172D]/10 hover:border-[#A68AFF] transition-colors text-center min-w-[64px]"
              >
                <p
                  className="text-xl font-extrabold text-[#1E172D] leading-none"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  4,9/5
                </p>
                <p className="text-[10px] font-semibold text-[#1E172D]/55 uppercase tracking-wide mt-1 flex items-center justify-center gap-1">
                  <span className="text-[#FBBC04] text-sm leading-none">★</span> sur Google
                </p>
              </motion.a>
            </motion.div>

            {/* Texte */}
            <motion.p variants={fadeUp} className="text-[#1E172D]/75 text-lg leading-relaxed">
              «&nbsp;Vous êtes sûrement assailli de propositions&nbsp;: d&apos;outils, d&apos;agents,
              d&apos;automatisations. De grandes promesses sans vous connaître. Ici, on fait
              l&apos;inverse&nbsp;: on part de vous, on vous apprend à clarifier ce que vous voulez et
              on applique une méthode éprouvée et claire.
            </motion.p>
            <motion.p variants={fadeUp} className="text-[#1E172D]/75 text-lg leading-relaxed mt-4">
              Le but est de gagner de l&apos;espace pour repenser son activité avec l&apos;IA. De
              l&apos;espace pour se concentrer sur ce qui vous fait vibrer et, idéalement, scaler.
              <span className="md:hidden">&nbsp;»</span>
            </motion.p>
            <motion.p variants={fadeUp} className="hidden md:block text-[#1E172D]/75 text-lg leading-relaxed mt-4">
              Dans cette formation, on se concentre sur votre rapport à l&apos;IA, les bons réflexes et
              des usages concrets qui vont changer votre quotidien.&nbsp;»
            </motion.p>
            <motion.p variants={fadeUp} className="hidden md:block text-[#1E172D]/60 text-base italic leading-relaxed mt-8 md:mt-10">
              Butzi mène depuis 10 ans un travail de fond sur l&apos;humain&nbsp;: notre relation au
              travail, à la créativité et à la transformation.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-7 flex justify-center md:justify-start">
              <PhoneRevealButton
                label="Appelez Butzi pour parler de la formation"
                className="px-7 py-3.5 rounded-full"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Bandeau logos (test) — mêmes logos que le héro, en silhouette sombre */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="mt-16 md:mt-20 pt-10 border-t border-[#1E172D]/10"
        >
          <p
            className="text-center text-[#1E172D]/55 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Ils ont fait confiance à Butzi
          </p>
          <LogoCloud logos={refLogos} tone="dark" />
        </motion.div>
      </div>
    </section>
  )
}
