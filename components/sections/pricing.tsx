'use client'

import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'
import type { Variants } from 'framer-motion'

/* ─── Variants ─────────────────────────────────────────── */
const cardVariant: Variants = {
  hidden:  { opacity: 0, y: 40, scale: 0.96 },
  visible: { opacity: 1, y: 0,  scale: 1,
    transition: { type: 'spring', stiffness: 200, damping: 22 } },
}

const featureVariant: Variants = {
  hidden:  { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.28 } },
}

/* ─── Icons ─────────────────────────────────────────────── */
function Icon({ d, size = 16 }: { d: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round"
      className="flex-shrink-0 text-[#1E172D]/40 mt-0.5">
      <path d={d} />
    </svg>
  )
}

const icons = {
  video:    'M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z',
  laptop:   'M4 6a2 2 0 012-2h12a2 2 0 012 2v9a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm0 11h16',
  chat:     'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z',
  template: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1H5a1 1 0 01-1-1v-4zm10-10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zm0 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z',
  play:     'M5 3l14 9-14 9V3z',
  qa:       'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  search:   'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z',
  bolt:     'M13 10V3L4 14h7v7l9-11h-7z',
  users:    'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zm8 4v6m3-3h-6',
  clipboard:'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
  link:     'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
  map:      'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
  headphone:'M3 18v-6a9 9 0 0118 0v6M3 18a3 3 0 006 0M3 18v-1a3 3 0 013-3h.01M21 18a3 3 0 01-6 0M21 18v-1a3 3 0 00-3-3H12',
  key:      'M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z',
  star:     'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
  crown:    'M5 19l2-7 5 4 5-4 2 7H5zm7-16l2.5 5h5l-4 3 1.5 5L12 13l-4.5 3.5L9 11.5l-4-3h5L12 3z',
  book:     'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
}

/* ─── Qualiopi box ──────────────────────────────────────── */
function QualiopiBox() {
  return (
    <div className="flex items-start gap-2.5 bg-[#F6F1EB] rounded-xl px-4 py-3 mb-5">
      <Icon d={icons.clipboard} />
      <p className="text-[#1E172D]/60 text-xs leading-relaxed">
        Formation certifiée <strong className="text-[#1E172D]/80">Qualiopi</strong> — éligible aux financements FAF
        (FIF-PL, AGEFICE). Jusqu&apos;à <strong className="text-[#1E172D]/80">900 € à 2 500 €</strong> de prise en charge possible.
      </p>
    </div>
  )
}

/* ─── Essentiel ─────────────────────────────────────────── */
function EssentielCard() {
  const features = [
    { icon: icons.video,    text: '6 sessions visio live en groupe', sub: '1/semaine' },
    { icon: icons.laptop,   text: 'Accès au cours en ligne : +80 vidéos', sub: null },
    { icon: icons.chat,     text: 'Communauté WhatsApp Entrepreneurs Augmentés', sub: 'Groupe privé participants + contenu exclusif' },
    { icon: icons.template, text: 'Kit de prompts et templates à chaque module', sub: null },
    { icon: icons.play,     text: 'Replay des sessions', sub: null },
    { icon: icons.qa,       text: 'Sessions de questions-réponses entre les sessions', sub: null },
  ]

  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -4, boxShadow: '0 20px 56px rgba(30,23,45,0.08)', transition: { type: 'spring', stiffness: 300, damping: 22 } }}
      className="bg-white border border-[#1E172D]/10 rounded-2xl p-7 flex flex-col cursor-default"
    >
      <h3 className="text-2xl font-extrabold text-[#1E172D] mb-2" style={{ fontFamily: 'var(--font-display)' }}>Essentiel</h3>
      <p className="text-[#1E172D]/55 text-sm leading-relaxed mb-5">
        Le programme complet en groupe, avec tout ce qu&apos;il faut pour changer ta façon de bosser.
      </p>

      <div className="text-4xl font-extrabold text-[#1E172D] tracking-tight mb-0.5" style={{ fontFamily: 'var(--font-display)' }}>2 997 €</div>
      <p className="text-[#1E172D]/40 text-xs mb-5">Paiement en 1x ou 3x sans frais</p>

      <QualiopiBox />

      <p className="text-[10px] font-bold tracking-widest uppercase text-[#1E172D]/35 mb-3" style={{ fontFamily: 'var(--font-display)' }}>Inclus</p>

      <motion.ul
        initial="hidden" whileInView="visible" viewport={viewport}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
        className="flex flex-col gap-3 flex-1 mb-7"
      >
        {features.map((f, i) => (
          <motion.li key={i} variants={featureVariant} className="flex items-start gap-2.5">
            <Icon d={f.icon} />
            <div>
              <span className="text-sm text-[#1E172D]/80 leading-snug font-medium">{f.text}</span>
              {f.sub && <p className="text-xs text-[#1E172D]/40 mt-0.5">{f.sub}</p>}
            </div>
          </motion.li>
        ))}
      </motion.ul>

      <motion.a href="#"
        whileHover={{ backgroundColor: '#1E172D', color: '#F6F1EB' }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.18 }}
        className="block text-center w-full py-3.5 rounded-full font-bold text-[0.95rem] border-2 border-[#1E172D] text-[#1E172D] cursor-pointer"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Réserver ma place →
      </motion.a>
    </motion.div>
  )
}

/* ─── Momentum ──────────────────────────────────────────── */
function MomentumCard() {
  const features = [
    { icon: icons.template, text: 'Tout le programme Essentiel', sub: null, bold: true, badge: null },
    { icon: icons.search,   text: 'Audit individuel pré-programme', sub: 'Diagnostic de tes outils et feuille de route personnalisée · valeur 200 €', detail: '(30 min visio)', badge: null },
    { icon: icons.bolt,     text: '1 session "hot seat" individuelle', sub: 'On débloque ton cas concret en live · valeur 350 €', detail: '(45 min, semaine 3-4)', badge: null },
    { icon: icons.users,    text: '6 mois d\'accès au Cercle Entrepreneurs Augmentés', sub: 'Q&A mensuel en visio, intervenants experts, veille IA curatée · valeur 474 €', detail: null, badge: 'Bonus' },
    { icon: icons.book,     text: 'Kit de templates avancés par métier', sub: 'Claude Skills, prompts, workflows', detail: null, badge: null },
  ]

  return (
    <motion.div variants={cardVariant} className="relative flex flex-col" style={{ zIndex: 2 }}>
      {/* "Recommandé" label above card */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ type: 'spring', stiffness: 300, damping: 22, delay: 0.2 }}
        className="self-center mb-2 bg-[#1E172D] text-[#F6F1EB] text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wider"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Recommandé
      </motion.div>

      <motion.div
        whileHover={{ y: -4, boxShadow: '0 24px 64px rgba(166,138,255,0.18)', transition: { type: 'spring', stiffness: 300, damping: 22 } }}
        className="bg-white border-2 border-[#A68AFF]/50 rounded-2xl p-7 flex flex-col cursor-default flex-1 relative overflow-hidden gradient-border glow-pulse"
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% -10%, rgba(166,138,255,0.07) 0%, transparent 55%)' }} />

        <h3 className="text-2xl font-extrabold text-[#1E172D] mb-2 relative z-10" style={{ fontFamily: 'var(--font-display)' }}>Momentum</h3>
        <p className="text-[#1E172D]/55 text-sm leading-relaxed mb-5 relative z-10">
          Tout le programme Essentiel + un accompagnement individuel pour aller plus vite et plus loin.
        </p>

        <div className="relative z-10">
          <div className="flex items-baseline gap-2.5 mb-0.5">
            <span className="text-4xl font-extrabold text-[#1E172D] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>3 497 €</span>
            <span className="text-[#1E172D]/30 text-base line-through" style={{ fontFamily: 'var(--font-display)' }}>3 800 €</span>
          </div>
          <p className="text-[#1E172D]/40 text-xs mb-5">Paiement en 1x ou 3x sans frais</p>
        </div>

        <div className="relative z-10"><QualiopiBox /></div>

        <p className="text-[10px] font-bold tracking-widest uppercase text-[#1E172D]/35 mb-3 relative z-10" style={{ fontFamily: 'var(--font-display)' }}>Tout l&apos;Essentiel, plus</p>

        <motion.ul
          initial="hidden" whileInView="visible" viewport={viewport}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } }}
          className="flex flex-col gap-3.5 flex-1 mb-6 relative z-10"
        >
          {features.map((f, i) => (
            <motion.li key={i} variants={featureVariant} className="flex items-start gap-2.5">
              <Icon d={f.icon} />
              <div className="flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className={`text-sm leading-snug ${f.bold ? 'font-bold text-[#1E172D]' : 'font-medium text-[#1E172D]/80'}`}>
                    {f.text}
                  </span>
                  {f.detail && <span className="text-[#1E172D]/45 text-xs">{f.detail}</span>}
                  {f.badge && (
                    <span className="inline-block bg-[#A68AFF]/15 text-[#A68AFF] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                      {f.badge}
                    </span>
                  )}
                </div>
                {f.sub && <p className="text-xs text-[#1E172D]/40 mt-0.5 leading-relaxed">{f.sub}</p>}
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Value breakdown */}
        <div className="relative z-10 bg-[#A68AFF]/8 border border-[#A68AFF]/15 rounded-xl px-4 py-4 mb-6 text-sm">
          {[
            { label: 'Audit individuel', val: '200 €' },
            { label: 'Hot seat 45 min',  val: '350 €' },
            { label: 'Cercle 6 mois',    val: '474 €' },
          ].map(row => (
            <div key={row.label} className="flex justify-between text-[#1E172D]/55 text-xs py-1">
              <span>{row.label}</span><span>{row.val}</span>
            </div>
          ))}
          <div className="border-t border-[#A68AFF]/20 mt-2 pt-2 flex justify-between font-bold text-[#1E172D]">
            <span className="text-xs">Valeur totale des extras</span><span className="text-xs">1 024 €</span>
          </div>
          <p className="text-[#A68AFF] text-[11px] font-semibold mt-2 text-center">Pour un écart de seulement 500 € vs Essentiel</p>
        </div>

        <motion.a href="#"
          whileHover={{ scale: 1.02, boxShadow: '0 8px 24px rgba(166,138,255,0.4)' }}
          whileTap={{ scale: 0.97 }}
          className="block text-center w-full py-3.5 rounded-full font-bold text-[0.95rem] bg-[#A68AFF] text-white cursor-pointer shimmer-hover relative z-10"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Réserver ma place →
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

/* ─── Premium ───────────────────────────────────────────── */
function PremiumCard() {
  const features = [
    { icon: icons.clipboard, text: 'Audit approfondi + 1 session préparatoire avec Butzi (1h)', sub: 'Diagnostic business et stack d\'outils' },
    { icon: icons.laptop,    text: '6 sessions de coaching 1:1 avec un expert en automatisation', sub: 'Calendrier flexible, adapté à ton rythme' },
    { icon: icons.link,      text: 'Intervention spécialiste automatisation sur tes outils', sub: 'Zapier, Make, API - connecté à ton stack' },
    { icon: icons.map,       text: 'Plan d\'action et système IA sur-mesure livré clé en main', sub: null },
    { icon: icons.headphone, text: 'Support async entre les sessions', sub: 'Slack ou WhatsApp privé' },
    { icon: icons.users,     text: '12 mois d\'accès au Cercle Entrepreneurs Augmentés', sub: 'Valeur 948 € · accès alumni prioritaire', badge: 'Inclus' },
  ]

  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -4, boxShadow: '0 20px 56px rgba(30,23,45,0.08)', transition: { type: 'spring', stiffness: 300, damping: 22 } }}
      className="bg-white border border-[#1E172D]/10 rounded-2xl p-7 flex flex-col cursor-default"
    >
      <h3 className="text-2xl font-extrabold text-[#1E172D] mb-2" style={{ fontFamily: 'var(--font-display)' }}>Premium</h3>
      <p className="text-[#1E172D]/55 text-sm leading-relaxed mb-5">
        Accompagnement sur-mesure avec coaching 1:1 et un spécialiste automatisation sur ton stack.
      </p>

      <div className="text-4xl font-extrabold text-[#1E172D] tracking-tight mb-0.5" style={{ fontFamily: 'var(--font-display)' }}>8 000 €</div>
      <p className="text-[#1E172D]/40 text-xs mb-6">Sur devis, hors cycle groupe</p>

      <p className="text-[10px] font-bold tracking-widest uppercase text-[#1E172D]/35 mb-3" style={{ fontFamily: 'var(--font-display)' }}>Sur mesure</p>

      <motion.ul
        initial="hidden" whileInView="visible" viewport={viewport}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } } }}
        className="flex flex-col gap-3.5 flex-1 mb-7"
      >
        {features.map((f, i) => (
          <motion.li key={i} variants={featureVariant} className="flex items-start gap-2.5">
            <Icon d={f.icon} />
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="text-sm font-medium text-[#1E172D]/80 leading-snug">{f.text}</span>
                {f.badge && (
                  <span className="inline-block bg-[#FFFFAB] text-[#1E172D] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                    {f.badge}
                  </span>
                )}
              </div>
              {f.sub && <p className="text-xs text-[#1E172D]/40 mt-0.5">{f.sub}</p>}
            </div>
          </motion.li>
        ))}
      </motion.ul>

      <motion.a href="#"
        whileHover={{ backgroundColor: '#1E172D', color: '#F6F1EB' }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.18 }}
        className="block text-center w-full py-3.5 rounded-full font-bold text-[0.95rem] border-2 border-[#1E172D] text-[#1E172D] cursor-pointer"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        Demander un devis →
      </motion.a>
    </motion.div>
  )
}

/* ─── Cercle block ──────────────────────────────────────── */
function CercleBlock() {
  const items = [
    { icon: icons.key,  text: 'Q&A mensuel en visio avec Butzi · ton cas concret traité en live' },
    { icon: icons.star, text: 'Intervenants experts invités chaque mois · juridique, fiscal, marketing, ops' },
    { icon: icons.chat, text: 'Veille IA curatée : 3 liens commentés par semaine sur WhatsApp' },
    { icon: icons.book, text: 'Bibliothèque de prompts mise à jour · les meilleurs issus du groupe' },
  ]

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      className="bg-[#F6F1EB] border border-[#1E172D]/8 rounded-2xl px-7 py-6 mb-8"
    >
      {/* Header */}
      <div className="flex items-center gap-2.5 mb-1">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6}
          strokeLinecap="round" strokeLinejoin="round" className="text-[#C4963A]">
          <path d="M5 19l2-7 5 4 5-4 2 7H5zm7-16l2.5 5h5l-4 3 1.5 5L12 13l-4.5 3.5L9 11.5l-4-3h5L12 3z" />
        </svg>
        <h3 className="font-extrabold text-[#1E172D] text-base" style={{ fontFamily: 'var(--font-display)' }}>
          Le Cercle Entrepreneurs Augmentés
        </h3>
      </div>
      <p className="text-[#1E172D]/50 text-sm mb-5">
        Réservé aux alumni du programme · <strong className="text-[#1E172D]/70">79 €/mois, sans engagement</strong>
      </p>

      {/* Features grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <Icon d={item.icon} />
            <p className="text-sm text-[#1E172D]/70 leading-snug">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="border-t border-[#1E172D]/8 pt-4">
        <p className="text-xs text-[#1E172D]/45 leading-relaxed">
          Inclus <strong className="text-[#1E172D]/60">6 mois</strong> avec Momentum (valeur 474 €) ·{' '}
          <strong className="text-[#1E172D]/60">12 mois</strong> avec Premium (valeur 948 €).
          Accessible en option après le programme Essentiel.
        </p>
      </div>
    </motion.div>
  )
}

/* ─── Section ───────────────────────────────────────────── */
export function Pricing() {
  return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden" id="pricing">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#A68AFF]/20 to-transparent" />

      <div className="max-w-[1140px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={viewport} variants={stagger}
          className="text-center mb-12"
        >
          <motion.span
            variants={fadeUp}
            className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFAB] text-[#1E172D] text-xs font-bold uppercase tracking-widest mb-5"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Les offres
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold text-[#1E172D] leading-[1.15] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Choisissez l&apos;accompagnement{' '}
            <span className="text-[#A68AFF]">qui vous correspond</span>
          </motion.h2>
        </motion.div>

        {/* Cercle block */}
        <CercleBlock />

        {/* Cards */}
        <motion.div
          initial="hidden" whileInView="visible" viewport={viewport}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } } }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 md:items-start"
        >
          <EssentielCard />
          <MomentumCard />
          <PremiumCard />
        </motion.div>
      </div>
    </section>
  )
}
