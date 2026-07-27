'use client'

import { motion } from 'framer-motion'
import { fadeUp, viewport } from '@/lib/animations'
import { COHORT } from '@/lib/cohort'
import { cn } from '@/lib/utils'

/* ── Bloc calendrier de la cohorte ──
   Affiché sur la page de vente (au-dessus des offres) et sur la page programme.
   Les dates viennent exclusivement de lib/cohort.ts (mention contractuelle). */
export function CohortCalendar({ className }: { className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      className={cn(
        'rounded-3xl border border-[#A68AFF]/25 bg-[#F6F1EB] overflow-hidden',
        className,
      )}
    >
      {/* En-tête */}
      <div className="flex items-start gap-3 px-6 md:px-8 py-5 bg-white/60 border-b border-[#1E172D]/[0.06]">
        <span className="flex-shrink-0 w-10 h-10 rounded-xl bg-[#A68AFF]/12 inline-flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A68AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
          </svg>
        </span>
        <div className="flex-1">
          <h3
            className="text-lg md:text-xl font-extrabold text-[#1E172D] tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {COHORT.name}
          </h3>
          <p className="text-[#1E172D]/55 text-xs md:text-[13px] leading-relaxed mt-0.5">
            {COHORT.format} · {COHORT.totalHours} · {COHORT.maxParticipants}
          </p>
        </div>
      </div>

      {/* Dates des sessions */}
      <div className="px-6 md:px-8 py-5 md:py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
          {COHORT.sessions.map((s) => (
            <div
              key={s.n}
              className="flex items-baseline justify-between gap-3 py-2 border-b border-[#1E172D]/8"
            >
              <span
                className="text-[11px] font-bold uppercase tracking-widest text-[#A68AFF]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Session {s.n}
              </span>
              <span className="text-[#1E172D]/80 text-sm font-medium">{s.date}</span>
            </div>
          ))}
        </div>
        <p className="text-[#1E172D]/55 text-xs italic leading-relaxed mt-4">
          {COHORT.replayNote}
        </p>
      </div>
    </motion.div>
  )
}
