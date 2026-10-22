import type { RecapSection } from '@/lib/espace/cahiers'

const display = { fontFamily: 'var(--font-display)' }

const SHADES = ['#F1EDFF', '#E4DCFF', '#D8D0FF', '#C7B9FF', '#B7A4FF']

function Nest({ levels, depth = 0 }: { levels: string[]; depth?: number }) {
  const [label, ...rest] = levels
  return (
    <div className="rounded-xl p-3" style={{ background: SHADES[Math.min(depth, SHADES.length - 1)] }}>
      <p className="text-sm font-bold" style={display}>
        {label}
      </p>
      {rest.length > 0 && (
        <div className="mt-2">
          <Nest levels={rest} depth={depth + 1} />
        </div>
      )}
    </div>
  )
}

function Recap({ sec }: { sec: RecapSection }) {
  return (
    <div>
      <h3 className="text-xs font-bold uppercase tracking-widest text-[#6F4FD1]">{sec.title}</h3>
      {sec.text && <p className="mt-2 max-w-[68ch] leading-relaxed">{sec.text}</p>}
      {sec.items && (
        <div className="mt-3 flex flex-wrap gap-2">
          {sec.items.map((i) => (
            <span key={i} className="rounded-full bg-[#FFFFAB] px-3 py-1.5 text-sm font-semibold">
              {i}
            </span>
          ))}
        </div>
      )}
      {sec.levels && (
        <div className="mt-3 max-w-[480px]">
          <Nest levels={sec.levels} />
        </div>
      )}
      {sec.compare && (
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {sec.compare.map((c) => (
            <div key={c.title} className="rounded-xl border-l-4 border-[#A68AFF] bg-[#F6F1EB] p-4">
              <p className="font-bold" style={display}>
                {c.title}
              </p>
              <p className="mt-1 text-sm leading-relaxed text-[#1E172D]/75">{c.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export function RecapView({ sections }: { sections: RecapSection[] }) {
  return (
    <div className="space-y-7">
      {sections.map((sec) => (
        <Recap key={sec.title} sec={sec} />
      ))}
    </div>
  )
}
