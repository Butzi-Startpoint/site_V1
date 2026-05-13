'use client';

import React, { useState } from 'react';

// --- Données de l'accordion StartPoint IA ---
const accordionItems = [
  {
    id: 1,
    title: 'Gagnez du temps',
    imageUrl:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072&auto=format&fit=crop',
    // Productivité / planning
  },
  {
    id: 2,
    title: 'Structurez votre méthode',
    imageUrl:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop',
    // Coaching / équipe / tableau blanc
  },
  {
    id: 3,
    title: 'Créez du contenu',
    imageUrl:
      'https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop',
    // Intelligence artificielle
  },
  {
    id: 4,
    title: 'Développez votre visibilité',
    imageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    // Entrepreneuriat / analytics
  },
  {
    id: 5,
    title: 'Pilotez avec l’IA',
    imageUrl:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop',
    // Formation en ligne / laptop
  },
];

// --- Types ---
interface AccordionItemData {
  id: number;
  title: string;
  imageUrl: string;
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
        style={{ transform: isActive ? 'scale(1.03)' : 'scale(1)' }}
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
  const [activeIndex, setActiveIndex] = useState(4);

  return (
    <section className="bg-[#1E172D] font-sans">
      <div className="container mx-auto px-6 py-16 md:py-28">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">

          {/* ── Côté gauche : texte ── */}
          <div className="w-full lg:w-[45%] text-center lg:text-left space-y-6">

            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#A68AFF]/15 border border-[#A68AFF]/30 text-[#D8D0FF] text-sm font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#A68AFF] animate-pulse" />
              Prochaine cohorte — Places limitées
            </span>

            {/* Titre principal */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold text-[#F6F1EB] leading-[1.15] tracking-tight">
              Devenez un{' '}
              <span className="relative inline-block">
                <span className="text-[#A68AFF]">Entrepreneur</span>
                <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-[#FFFFAB] rounded-full" />
              </span>
              {' '}
              <span className="text-[#F6F1EB]">Augmenté</span>
            </h1>

            {/* Sous-titre */}
            <p className="text-lg text-[#D8D0FF] leading-relaxed max-w-lg mx-auto lg:mx-0">
              Le programme de 6 semaines qui vous apprend à utiliser l&apos;IA pour gagner du temps,
              structurer votre activité et booster votre chiffre d&apos;affaires.{' '}
              <span className="text-[#F6F1EB] font-medium">
                Sans jargon technique. Sans bullshit.
              </span>
            </p>

            {/* CTA + social proof */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 pt-2">
              <a
                href="#cohorte"
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

              {/* Social proof micro */}
              <div className="flex items-center gap-3 text-[#D8D0FF] text-sm">
                <div className="flex -space-x-2">
                  {['#A68AFF', '#D8D0FF', '#FFFFAB'].map((color, i) => (
                    <span
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#1E172D] flex items-center justify-center text-xs font-bold text-[#1E172D]"
                      style={{ backgroundColor: color }}
                    >
                      {String.fromCharCode(65 + i)}
                    </span>
                  ))}
                </div>
                <span>
                  +120 entrepreneurs <br className="hidden sm:block" />
                  déjà formés
                </span>
              </div>
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
