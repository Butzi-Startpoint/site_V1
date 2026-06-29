'use client'

import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import { InfiniteSlider } from '@/components/ui/infinite-slider'

const metrics = [
  { value: '4', label: 'TEDx' },
  { value: '500+', label: 'Interventions' },
  { value: '2', label: 'Livres publiés' },
]

const butziGallery = [
  { src: '/mini-carroussel/tedx.jpg', caption: 'Conférencier TEDx' },
  { src: '/mini-carroussel/bpifrance.jpg', caption: 'Chez BPI France' },
  { src: '/mini-carroussel/samsung.png', caption: 'Chez Samsung' },
  { src: '/mini-carroussel/congres-comptables.jpeg', caption: 'Congrès comptables' },
  { src: '/mini-carroussel/telecom-nancy.jpeg', caption: 'Télécom Nancy' },
]

type Member = {
  name: string
  role: string
  bio: string
  img: string
  linkedin: string
  imgScale?: number
}

const teamMembers: Member[] = [
  {
    name: 'Clément Predo',
    role: 'Formateur & Spécialiste Claude',
    bio: "Diplômé de l'ESSEC, spécialisé en IA appliquée et performance business. Notre expert Claude : il gère les coachings spécialisés et les intégrations avancées du programme. Si Claude avait un prof préféré, ce serait lui.",
    img: '/team/clement.webp',
    linkedin: 'https://www.linkedin.com/in/clement-predo/',
    imgScale: 1.3,
  },
  {
    name: 'Alexandre Mili',
    role: 'Automatisations & Agents IA',
    bio: "Spécialiste automatisations et agents intelligents. Il conçoit les systèmes qui permettent aux entrepreneurs de déléguer leurs tâches répétitives à l'IA. Il conçoit les systèmes qui vous enlèvent les tâches répétitives, pas votre métier.",
    img: '/team/alexandre.webp',
    linkedin: 'https://www.linkedin.com/in/amili/',
    imgScale: 1.3,
  },
  {
    name: 'Gladys',
    role: 'Business Manager & Opérations',
    bio: "Dirige les opérations de StartPoint IA. Coordination des programmes, gestion des cohortes, relation participants. Si tout a l'air simple côté client, c'est grâce à elle.",
    img: '/team/gladys.webp',
    linkedin: 'https://www.linkedin.com/in/gladys-ducos/',
  },
]

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}
const fadeRight: Variants = {
  hidden: { opacity: 0, x: 48 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}
const metricVariant: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
}
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

/* Dégradé clair (violet → blanc) derrière les photos */
const PHOTO_GRADIENT =
  'linear-gradient(150deg, #EEEDFE 0%, #C9B8FF 55%, #FFFFFF 100%)'

/* Icône LinkedIn (SVG inline, hover violet) */
function LinkedInIcon({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`LinkedIn de ${label}`}
      className="inline-flex items-center justify-center w-9 h-9 rounded-full text-[#1E172D]/40 hover:text-[#A68AFF] hover:bg-[#A68AFF]/10 transition-colors"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
      </svg>
    </a>
  )
}

/* Carte d'un membre d'équipe — réutilisée par la grille desktop et le carrousel mobile */
function MemberCard({ m }: { m: Member }) {
  return (
    <div
      className="rounded-2xl bg-white border border-[#1E172D]/8 p-6 flex flex-col items-center text-center h-full transition-shadow hover:shadow-[0_16px_40px_rgba(30,23,45,0.10)]"
      style={{ boxShadow: '0 1px 4px rgba(30,23,45,0.04)' }}
    >
      {/* Photo ronde avec dégradé */}
      <div
        className="relative w-40 h-40 rounded-full flex-shrink-0 overflow-hidden"
        style={{ background: PHOTO_GRADIENT }}
      >
        <img
          src={m.img}
          alt={m.name}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top"
          style={m.imgScale ? { transform: `scale(${m.imgScale}) translateY(7%)`, transformOrigin: 'center', objectPosition: 'center' } : undefined}
          onError={(e) => {
            ;(e.target as HTMLImageElement).style.display = 'none'
          }}
        />
      </div>

      <h4
        className="text-lg font-extrabold text-[#1E172D] tracking-tight mt-4"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {m.name}
      </h4>
      <p
        className="text-[#A68AFF] text-[11px] font-bold uppercase tracking-widest mt-1 mb-3"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {m.role}
      </p>
      <p className="text-[#1E172D]/60 text-sm leading-relaxed flex-1">{m.bio}</p>

      {/* LinkedIn */}
      <div className="mt-4">
        <LinkedInIcon href={m.linkedin} label={m.name} />
      </div>
    </div>
  )
}

export function Team() {

  return (
    <section className="bg-[#F6F1EB] py-20 md:py-28 relative overflow-hidden" id="equipe">
      {/* Top separator */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A68AFF]/20 to-transparent" />

      <div className="max-w-[1140px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          className="text-center mb-14 md:mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFAB] text-[#1E172D] text-xs font-bold uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            L&apos;équipe
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold text-[#1E172D] leading-[1.15] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            L&apos;équipe{' '}
            <span className="text-[#A68AFF]">StartPoint IA</span>
          </motion.h2>
        </motion.div>

        {/* Bloc fondateur */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          className="relative rounded-3xl bg-white border border-[#1E172D]/8 p-6 md:p-12 mb-12 overflow-hidden"
          style={{ boxShadow: '0 8px 40px rgba(30,23,45,0.06)' }}
        >
          {/* Blob décoratif violet */}
          <div
            className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(166,138,255,0.18) 0%, transparent 70%)' }}
          />

          <div className="relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Photo */}
            <motion.div variants={slideLeft} className="relative flex-shrink-0">
              {/* Décor violet derrière la photo */}
              <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl bg-[#A68AFF]/15" />
              <div
                className="relative w-[230px] h-[290px] md:w-[392px] md:h-[490px] rounded-2xl overflow-hidden"
                style={{ background: PHOTO_GRADIENT }}
              >
                <img
                  src="/team/butzi.webp"
                  alt="Butzi (Johannes Alinhac)"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  onError={(e) => {
                    const t = e.target as HTMLImageElement
                    t.onerror = null
                    t.style.display = 'none'
                  }}
                />
              </div>
            </motion.div>

            {/* Texte + métriques */}
            <motion.div variants={fadeRight} className="flex-1 w-full min-w-0 md:w-auto text-center md:text-left">
              <h3
                className="text-2xl md:text-[28px] font-extrabold text-[#1E172D] tracking-tight leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Butzi <span className="text-[#1E172D]/45 font-medium text-xl">(Johannes Alinhac)</span>
              </h3>
              <p
                className="text-[#A68AFF] text-xs font-bold uppercase tracking-widest mt-2 mb-5"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Fondateur & Intervenant principal
              </p>

              {/* Metric cards */}
              <motion.div
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } } }}
                className="flex flex-nowrap justify-center md:justify-start gap-2 md:gap-3 mb-6"
              >
                {metrics.map((m) => (
                  <motion.div
                    key={m.label}
                    variants={metricVariant}
                    className="flex-1 md:flex-none min-w-0 md:min-w-[96px] px-2 md:px-5 py-2 md:py-3 rounded-xl bg-white border border-[#1E172D]/10 hover:border-[#A68AFF] transition-colors text-center"
                  >
                    <p
                      className="text-lg md:text-2xl font-extrabold text-[#1E172D] leading-none"
                      style={{ fontFamily: 'var(--font-display)' }}
                    >
                      {m.value}
                    </p>
                    <p className="text-[9px] md:text-[11px] font-semibold text-[#1E172D]/55 uppercase tracking-tight md:tracking-wide mt-1">
                      {m.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <p className="text-[#1E172D]/65 text-sm md:text-base leading-relaxed max-w-2xl mx-auto md:mx-0">
                Entrepreneur, conférencier international et auteur de deux ouvrages, Butzi a passé
                10 ans à construire ses activités en indépendant, avant de tout repenser avec
                l&apos;IA. Il a conçu les programmes de StartPoint IA à partir de cette expérience
                terrain. Résultat&nbsp;: des formations pensées par quelqu&apos;un qui a les mêmes
                galères que vous. (Mais avec de meilleurs prompts.)
              </p>

              {/* LinkedIn */}
              <div className="flex justify-center md:justify-start mt-4 -ml-1">
                <LinkedInIcon href="https://www.linkedin.com/in/butzispeaker/" label="Butzi" />
              </div>

              {/* Mini carrousel photos — défilement auto lent (masqué sur mobile) */}
              <div className="mt-6 hidden md:block">
                <InfiniteSlider
                  gap={12}
                  duration={45}
                  durationOnHover={90}
                  className="[mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
                >
                  {butziGallery.map((p) => (
                    <div
                      key={p.src}
                      className="relative flex-shrink-0 w-36 h-28 md:w-44 md:h-32 rounded-xl overflow-hidden"
                    >
                      <img
                        src={p.src}
                        alt={p.caption}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#1E172D]/90 via-[#1E172D]/40 to-transparent" />
                      <span
                        className="absolute bottom-2 left-2.5 right-2.5 text-white text-xs font-semibold leading-tight"
                        style={{ fontFamily: 'var(--font-display)' }}
                      >
                        {p.caption}
                      </span>
                    </div>
                  ))}
                </InfiniteSlider>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bloc équipe — Desktop : grille de 3 cartes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2, delayChildren: 0.05 } } }}
          className="hidden lg:grid grid-cols-3 gap-6"
        >
          {teamMembers.map((m) => (
            <motion.div
              key={m.name}
              variants={cardVariant}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
              className="h-full"
            >
              <MemberCard m={m} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bloc équipe — Mobile : juste les avatars ronds (pas de carte) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="lg:hidden flex flex-wrap items-start justify-center gap-x-5 gap-y-7"
        >
          {teamMembers.map((m) => (
            <motion.a
              key={m.name}
              variants={cardVariant}
              href={m.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center w-[104px]"
            >
              <span
                className="block w-24 h-24 rounded-full overflow-hidden ring-2 ring-[#A68AFF]/40"
                style={{ background: PHOTO_GRADIENT }}
              >
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top"
                  style={m.imgScale ? { transform: `scale(${m.imgScale}) translateY(7%)` } : undefined}
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).style.display = 'none'
                  }}
                />
              </span>
              <span
                className="mt-2.5 text-[#1E172D] font-bold text-sm leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {m.name}
              </span>
              <span className="text-[#A68AFF] text-[10px] font-bold uppercase tracking-wide mt-0.5 leading-tight">
                {m.role}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
