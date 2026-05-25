"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export interface FeatureItem {
  id: number;
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  imageFallback?: string;
}

interface FeaturesProps {
  features: FeatureItem[];
  /** Durée d'affichage par item, en ms (défaut 7000) */
  autoMs?: number;
}

export function Features({ features, autoMs = 7000 }: FeaturesProps) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Incrément de la barre de progression
  const stepMs = Math.max(20, Math.round(autoMs / 100));
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 1));
    }, stepMs);
    return () => clearInterval(interval);
  }, [stepMs]);

  // Passage à l'item suivant quand la barre est pleine
  useEffect(() => {
    if (progress >= 100) {
      const t = setTimeout(() => {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }, 200);
      return () => clearTimeout(t);
    }
  }, [progress, features.length]);

  // Recentrage horizontal sur mobile
  useEffect(() => {
    const activeFeatureElement = featureRefs.current[currentFeature];
    const container = containerRef.current;
    if (activeFeatureElement && container) {
      const containerRect = container.getBoundingClientRect();
      const elementRect = activeFeatureElement.getBoundingClientRect();
      container.scrollTo({
        left:
          activeFeatureElement.offsetLeft -
          (containerRect.width - elementRect.width) / 2,
        behavior: "smooth",
      });
    }
  }, [currentFeature]);

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
  };

  const active = features[currentFeature];

  return (
    <div className="grid lg:grid-cols-2 lg:gap-16 gap-10 items-center">
      {/* Gauche — liste avec barres de progression */}
      <div
        ref={containerRef}
        className="md:space-x-6 lg:space-x-0 lg:space-y-4 overflow-x-auto scrollbar-none lg:overflow-visible flex lg:flex-col flex-row order-2 lg:order-1 pb-2 scroll-smooth"
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          const isActive = currentFeature === index;

          return (
            <div
              key={feature.id}
              ref={(el) => {
                featureRefs.current[index] = el;
              }}
              className="relative cursor-pointer flex-shrink-0"
              onClick={() => handleFeatureClick(index)}
            >
              <div
                className={`flex lg:flex-row flex-col items-start gap-4 p-4 max-w-sm lg:max-w-2xl rounded-2xl transition-all duration-300 ${
                  isActive
                    ? "bg-white border border-[#1E172D]/8 shadow-[0_12px_40px_rgba(30,23,45,0.08)]"
                    : "border border-transparent hover:bg-[#1E172D]/[0.02]"
                }`}
              >
                {/* Icône */}
                <div
                  className={`hidden md:flex items-center justify-center w-11 h-11 rounded-xl flex-shrink-0 transition-all duration-300 ${
                    isActive
                      ? "bg-[#A68AFF] text-white"
                      : "bg-[#A68AFF]/12 text-[#A68AFF]"
                  }`}
                >
                  <Icon size={22} strokeWidth={1.9} />
                </div>

                {/* Contenu */}
                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-lg font-extrabold tracking-tight leading-tight transition-colors duration-300 ${
                      isActive ? "text-[#1E172D]" : "text-[#1E172D]/70"
                    }`}
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {feature.title}
                  </h3>
                  {feature.subtitle && (
                    <p
                      className="text-[#A68AFF] text-[11px] font-bold uppercase tracking-widest mt-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {feature.subtitle}
                    </p>
                  )}
                  <p
                    className={`text-sm leading-relaxed mt-2 transition-colors duration-300 ${
                      isActive ? "text-[#1E172D]/65" : "text-[#1E172D]/45"
                    }`}
                  >
                    {feature.description}
                  </p>

                  {/* Barre de progression */}
                  <div className="mt-4 bg-[#1E172D]/8 rounded-full h-1 overflow-hidden">
                    {isActive && (
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#A68AFF] to-[#FFFFAB]"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1, ease: "linear" }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Droite — photo de l'item actif */}
      <div className="relative order-1 lg:order-2 w-full max-w-md mx-auto">
        <motion.div
          key={currentFeature}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-[#1E172D]/8 shadow-[0_24px_64px_rgba(30,23,45,0.14)]"
          style={{
            background:
              "linear-gradient(180deg, rgba(166,138,255,0.14) 0%, rgba(255,255,171,0.20) 100%)",
          }}
        >
          <img
            src={active.image}
            alt={active.title}
            className="absolute inset-0 w-full h-full object-cover object-top"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              if (active.imageFallback) target.src = active.imageFallback;
            }}
          />
        </motion.div>
      </div>
    </div>
  );
}
