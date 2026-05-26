'use client';

import React, { useState } from 'react';
import { ScrambleText } from '@/components/ui/scramble-text';
import { CertLink } from '@/components/ui/qualiopi-badge';

// --- Données de l'accordion StartPoint IA ---
const accordionItems = [
  {
    id: 1,
    title: 'Gagnez jusqu’à 10h / semaine',
    imageUrl: '/accordion/1.jpg',
    // Productivité / planning
  },
  {
    id: 2,
    title: 'Débloquer votre potentiel de CA',
    imageUrl:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
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

// --- Types ---
interface AccordionItemData {
  id: number;
  title: string;
  imageUrl: string;
  objectPosition?: string;
  zoom?: number;
}

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

            {/* Marque — petit wordmark tech + effet déchiffrage */}
            <ScrambleText
              text="Accélération IA 360"
              className="block text-[#A68AFF] text-sm md:text-base font-bold tracking-[0.12em] uppercase whitespace-nowrap"
              style={{ fontFamily: 'var(--font-tech)' }}
            />

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A68AFF]/15 border border-[#A68AFF]/30 text-[#D8D0FF] text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#A68AFF] animate-pulse" />
              Prochaine cohorte : 23 septembre 2026 — 4 places restantes
            </span>

            {/* Titre principal — promesse */}
            <h1
              className="text-5xl md:text-6xl lg:text-[3.75rem] font-bold text-[#F6F1EB] leading-[1.05] tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="block">Plus de temps</span>
              <span className="block">Plus de clients</span>
              <span className="block mt-1">
                <span className="relative inline-block">
                  <span className="text-[#FFFFAB]">En 6 semaines</span>
                  <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#A68AFF] rounded-full" />
                </span>
                .
              </span>
            </h1>

            {/* Phrase intermédiaire qui ressort */}
            <p
              className="text-lg md:text-2xl font-bold text-[#F6F1EB] whitespace-nowrap pt-3 md:pt-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              C&apos;est possible aujourd&apos;hui avec{' '}
              <span className="text-[#A68AFF]">l&apos;IA</span>.
            </p>

            {/* Sous-titre */}
            <p className="text-lg text-[#D8D0FF] leading-relaxed max-w-xl mx-auto lg:mx-0">
              <span className="block [text-wrap:balance]">
                Coupez votre administratif en deux et boostez votre visibilité avec des outils et des méthodes accessibles sans compétences techniques.
              </span>
              <span className="block mt-2 text-[#F6F1EB] font-medium">
                90 mn / semaine live, le reste à votre rythme
              </span>
            </p>

            {/* CTA + social proof */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-6 md:pt-8">
              <a
                href="#pricing"
                className={[
                  'inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-base',
                  'bg-[#FFFFAB] text-[#1E172D] shadow-lg shadow-[#FFFFAB]/20',
                  'hover:bg-[#f5f08c] hover:shadow-[#FFFFAB]/30 hover:scale-[1.02]',
                  'transition-all duration-200',
                ].join(' ')}
              >
                Rejoindre la prochaine cohorte
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

            {/* Réassurance Qualiopi — sous le bouton */}
            <div className="mt-5 text-center lg:text-left">
              <p
                className="text-[#FFFFAB] text-sm font-semibold tracking-wide"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Organisme de formation certifié Qualiopi
              </p>
              <CertLink className="mt-1 text-[#D8D0FF] text-xs hover:text-[#F6F1EB] transition-colors" />
            </div>
          </div>

          {/* ── Côté droit : accordion images ── */}
          <div className="w-full lg:w-[55%]">
            <div className="flex flex-row items-center justify-center gap-3 overflow-x-auto p-2 pb-4 scrollbar-none">
              {accordionItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isActive={index === activeIndex}
                  onMouseEnter={() => setActiveIndex(index)}
                />
              ))}
            </div>

            {/* Indicateurs de navigation mobile */}
            <div className="flex justify-center gap-2 mt-4 lg:hidden">
              {accordionItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={[
                    'h-1.5 rounded-full transition-all duration-300',
                    index === activeIndex
                      ? 'w-6 bg-[#A68AFF]'
                      : 'w-1.5 bg-[#D8D0FF]/40',
                  ].join(' ')}
                  aria-label={`Voir ${accordionItems[index].title}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
