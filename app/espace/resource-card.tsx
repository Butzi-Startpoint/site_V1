import { ArrowRight, BookOpen, ClipboardList, FileText, Scale, ScrollText, ShieldCheck } from 'lucide-react'
import type { IconName, Link } from '@/lib/espace/content'

const ICONS = {
  doc: FileText,
  shield: ShieldCheck,
  scale: Scale,
  checklist: ClipboardList,
  recap: ScrollText,
  book: BookOpen,
} satisfies Record<IconName, typeof FileText>

const display = { fontFamily: 'var(--font-display)' }

/* Petit encadré pleine largeur : icône, titre, description sur une ligne. */
export function ResourceCard({ r }: { r: Link }) {
  const Icon = ICONS[r.icon ?? 'doc']
  return (
    <a
      href={r.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 rounded-xl border border-[#1E172D]/10 bg-white px-3.5 py-2.5 transition hover:border-[#A68AFF] hover:shadow-md"
    >
      <span className="flex h-9 w-9 flex-none items-center justify-center rounded-lg bg-[#F1EDFF] text-[#6F4FD1]">
        <Icon size={18} strokeWidth={2} aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-[15px] font-bold leading-tight" style={display}>
          {r.label}
        </span>
        {r.description && <span className="block truncate text-[13px] text-[#1E172D]/60">{r.description}</span>}
      </span>
      <ArrowRight size={16} aria-hidden className="flex-none text-[#A68AFF] transition group-hover:translate-x-0.5" />
    </a>
  )
}
