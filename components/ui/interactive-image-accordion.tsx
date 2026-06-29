'use client';

import React, { useState } from 'react';
import { ScrambleText } from '@/components/ui/scramble-text';
import { CertLink } from '@/components/ui/qualiopi-badge';

const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?sca_esv=2c335ba9186fa769&cs=0&sxsrf=ANbL-n79kVxeIk2N7m4oTbLKTaV3V2L3Zg:1780688794225&q=Butzi+-+Conf%C3%A9rencier+%26+Magicien+%7C+Keynote+Speaker+%26+Magician+Avis&rldimm=15684917062307454983&tbm=lcl&hl=fr-FR#lkt=LocalPoiReviews';

// --- Types ---
interface AccordionItemData {
  id: number;
  title: string;
  imageUrl: string;
  objectPosition?: string;
  zoom?: number;
}

// --- Données de l'accordion StartPoint IA ---
const accordionItems: AccordionItemData[] = [
  {
    id: 1,
    title: 'Gagnez jusqu’à 10h / semaine',
    imageUrl: '/accordion/1.jpg',
    // Productivité / planning
  },
  {
    id: 2,
    title: 'Débloquer votre potentiel de CA',
    imageUrl: '/accordion/2.jpg',
    // Coaching / équipe / tableau blanc
  },
  {
    id: 3,
    title: 'Accélérer l’administratif',
    imageUrl: '/accordion/3.jpg',
    // Intelligence artificielle
  },
  {
    id: 4,
    title: 'Créer un vrai système d’IA',
    imageUrl: '/accordion/5.jpg',
    objectPosition: 'left bottom',
    // Formation en ligne / laptop
  },
];

interface AccordionItemProps {
  item: AccordionItemData;
  isActive: boolean;
  onMouseEnter: () => void;
}

// --- Accordion Item ---
const AccordionItem: React.FC<AccordionItemProps> = ({
  item,
  isActive,
  onMouseEnter,
}) => {
  return (
    <div
      className={[
        'relative h-[460px] rounded-2xl overflow-hidden cursor-pointer',
        'transition-all duration-700 ease-in-out',
        isActive ? 'w-[400px]' : 'w-[62px]',
        isActive ? 'ring-2 ring-[#A68AFF]/60 shadow-[0_0_32px_rgba(166,138,255,0.25)]' : '',
      ].join(' ')}
      onMouseEnter={onMouseEnter}
    >
      {/* Image de fond */}
      <img
        src={item.imageUrl}
        alt={item.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-in-out"
        style={{
          transform: isActive ? `scale(${item.zoom ?? 1.03})` : 'scale(1)',
          transformOrigin: item.objectPosition ?? 'center',
          objectPosition: item.objectPosition ?? 'center',
        }}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src =
            'https://placehold.co/400x460/1E172D/A68AFF?text=StartPoint+IA';
        }}
      />

      {/* Overlay dégradé — plus prononcé sur items inactifs */}
      <div
        className={[
          'absolute inset-0 transition-opacity duration-700',
          isActive
            ? 'bg-gradient-to-t from-[#1E172D]/80 via-[#1E172D]/30 to-transparent'
            : 'bg-[#1E172D]/70',
        ].join(' ')}
      />

      {/* Pastille numéro — visible en mode inactif */}
      <span
        className={[
          'absolute top-4 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full',
          'flex items-center justify-center text-xs font-bold',
          'transition-opacity duration-300',
          'bg-[#FFFFAB] text-[#1E172D]',
          isActive ? 'opacity-0' : 'opacity-90',
        ].join(' ')}
      >
        {item.id}
      </span>

      {/* Texte du titre */}
      <span
        className={[
          'absolute text-white font-semibold whitespace-nowrap',
          'transition-all duration-500 ease-in-out',
          isActive
            ? // Actif : horizontal, bas-centre
              'text-xl bottom-6 left-1/2 -translate-x-1/2 rotate-0 tracking-tight'
            : // Inactif : vertical, centré
              'text-sm bottom-24 left-1/2 -translate-x-1/2 rotate-90 tracking-wide',
        ].join(' ')}
      >
        {item.title}
      </span>

      {/* Barre colorée en bas sur item actif */}
      <span
        className={[
          'absolute bottom-0 left-0 h-1 bg-[#A68AFF] transition-all duration-700',
          isActive ? 'w-full' : 'w-0',
        ].join(' ')}
      />
    </div>
  );
};

// --- Composant principal ---
export function LandingAccordionItem() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-[#1E172D] font-sans">
      <div className="container mx-auto px-6 pt-8 md:pt-12 pb-16 md:pb-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">

          {/* ── Côté gauche : texte ── */}
          <div className="w-full lg:w-[45%] text-center lg:text-left space-y-6">

            {/* Badge Qualiopi — tout en haut du hero, mobile uniquement */}
            <div className="lg:hidden flex justify-center -mb-1">
              <span className="inline-flex items-center gap-2 pl-1.5 pr-3 py-1 rounded-full bg-white/95 shadow-[0_4px_16px_rgba(0,0,0,0.18)]">
                <span className="inline-flex items-center justify-center bg-white rounded-full">
                  <img src="/qualiopi-logo.png" alt="Certification Qualiopi" className="h-5 w-auto" />
                </span>
                <span className="text-[#1E172D] text-xs font-semibold tracking-wide">
                  Certifiée Qualiopi
                </span>
              </span>
            </div>

            {/* Marque — petit wordmark tech + effet déchiffrage */}
            <ScrambleText
              text="Accélération IA 360"
              className="block text-[#A68AFF] text-sm md:text-base font-bold tracking-[0.12em] uppercase whitespace-nowrap"
              style={{ fontFamily: 'var(--font-tech)' }}
            />

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A68AFF]/15 border border-[#A68AFF]/30 text-[#D8D0FF] text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#A68AFF] animate-pulse" />
              Prochaine cohorte : octobre 2026
            </span>

            {/* Titre principal — promesse */}
            {/* Mobile : version courte */}
            <h1
              className="lg:hidden text-4xl font-bold text-[#F6F1EB] leading-[1.15] tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="block">Plus de temps,</span>
              <span className="block mt-1">plus de <span className="text-[#FFFFAB]">croissance</span>.</span>
              <span className="block mt-1">Grâce à l&apos;IA.</span>
            </h1>
            {/* Desktop : titre original (inchangé) */}
            <h1
              className="hidden lg:block text-3xl md:text-6xl lg:text-[3.75rem] font-bold text-[#F6F1EB] leading-[1.15] md:leading-[1.05] tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="block">Reprenez votre temps.</span>
              <span className="block mt-1">Libérez <span className="text-[#FFFFAB]">votre croissance</span>.</span>
              <span className="block mt-1">Avec l&apos;IA</span>
            </h1>

            {/* Sous-titre */}
            <p className="text-lg text-[#D8D0FF] leading-relaxed max-w-xl mx-auto lg:mx-0 pt-2">
              <span className="block [text-wrap:balance]">
                <span className="text-[#F6F1EB] font-bold">La formation à l&apos;IA certifiée <span className="font-normal md:font-bold">Qualiopi</span></span> qui donne des résultats dès les premières semaines, avec des outils concrets et des méthodes accessibles sans aucune compétence technique.
              </span>
              {/* Desktop : ligne 1h30 ici ; sur mobile elle passe sous le carrousel */}
              <span className="hidden lg:block mt-2 text-[#F6F1EB] font-medium">
                1h30 par semaine, à distance, sur 8 semaines.
              </span>
            </p>

            {/* CTA + social proof — desktop : ici ; mobile : sous le carrousel */}
            <div className="hidden lg:flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-6 md:pt-8">
              <a
                href="#methode"
                className={[
                  'inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base',
                  'bg-[#FFFFAB] text-[#1E172D] shadow-lg shadow-[#FFFFAB]/20',
                  'hover:bg-[#f5f08c] hover:shadow-[#FFFFAB]/30 hover:scale-[1.02]',
                  'transition-all duration-200',
                ].join(' ')}
              >
                En savoir plus
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>

            </div>
          </div>

          {/* ── Côté droit : accordion images ── */}
          <div className="w-full lg:w-[55%]">
            {/* Desktop : accordéon multi-panneaux */}
            <div className="hidden lg:flex flex-row items-center justify-center gap-3 overflow-x-auto p-2 pb-4 scrollbar-none">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              ))}
            </div>

            {/* Mobile : image statique unique (plus de carrousel) */}
            <div className="lg:hidden">
              <div className="relative w-full h-[380px] rounded-2xl overflow-hidden ring-2 ring-[#A68AFF]/50 shadow-[0_0_32px_rgba(166,138,255,0.25)] select-none">
                <img
                  src="/accordion/1.jpg"
                  alt="Accélération IA 360 — gagnez du temps grâce à l’IA"
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.onerror = null
                    target.src = 'https://placehold.co/600x380/1E172D/A68AFF?text=StartPoint+IA'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E172D]/85 via-[#1E172D]/20 to-transparent" />
              </div>
            </div>

            {/* Mobile : ligne 1h30 + CTA, après l’image */}
            <div className="lg:hidden mt-8 flex flex-col items-center gap-5 text-center">
              <p className="text-[#F6F1EB] font-medium text-lg">
                1h30 par semaine, à distance, sur 8 semaines.
              </p>
              <a
                href="#methode"
                className={[
                  'inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base',
                  'bg-[#FFFFAB] text-[#1E172D] shadow-lg shadow-[#FFFFAB]/20',
                  'transition-all duration-200',
                ].join(' ')}
              >
                En savoir plus
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Bandeau réassurance : Qualiopi + note Google, juste au-dessus des logos */}
        <div className="mt-12 md:mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row flex-wrap items-start justify-center lg:justify-start gap-6 sm:gap-x-10 sm:gap-y-6">
          {/* Qualiopi */}
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center bg-white rounded-lg px-2.5 py-1.5 flex-shrink-0">
              <img src="/qualiopi-logo.png" alt="Certification Qualiopi" className="h-7 md:h-8 w-auto" />
            </span>
            <div className="text-left">
              <p
                className="text-[#F6F1EB] text-sm font-semibold leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Organisme de formation certifié Qualiopi
              </p>
              <CertLink className="text-[#D8D0FF] text-xs hover:text-[#F6F1EB] transition-colors" />
            </div>
          </div>

          {/* Séparateur vertical */}
          <span className="hidden sm:block w-px h-10 bg-white/15" />

          {/* Note Google */}
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5"
          >
            <span className="text-[#FBBC04] text-base leading-none tracking-tight">★★★★★</span>
            <div className="text-left">
              <p
                className="text-[#F6F1EB] text-sm font-semibold leading-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                4,9/5 sur Google
              </p>
              <span className="text-[#D8D0FF] text-xs group-hover:text-[#F6F1EB] transition-colors">
                Voir les avis →
              </span>
            </div>
          </a>

          {/* Séparateur vertical */}
          <span className="hidden sm:block w-px h-10 bg-white/15" />

          {/* Partenaire CCI : masqué sur mobile ; desktop texte puis logo flottant */}
          <div className="hidden sm:flex flex-row-reverse sm:flex-row items-center gap-2.5">
            <p
              className="text-[#F6F1EB] text-sm font-semibold leading-tight whitespace-nowrap"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Partenaire de la CCI
            </p>
            <img
              src="/logos/CCI.png"
              alt="Chambre de Commerce et d'Industrie de Normandie"
              className="h-20 md:h-24 w-auto sm:-my-7 md:-my-9"
              style={{ filter: 'brightness(0) invert(1) opacity(0.9)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
