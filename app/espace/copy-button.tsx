'use client'

import { useState } from 'react'

export function CopyButton({ text }: { text: string }) {
  const [done, setDone] = useState(false)
  return (
    <button
      type="button"
      onClick={async () => {
        await navigator.clipboard.writeText(text)
        setDone(true)
        setTimeout(() => setDone(false), 1800)
      }}
      className="rounded-lg bg-[#1E172D] px-3 py-1.5 text-xs font-semibold text-[#F6F1EB] hover:bg-[#2c2342]"
    >
      {done ? 'Copié' : 'Copier'}
    </button>
  )
}
