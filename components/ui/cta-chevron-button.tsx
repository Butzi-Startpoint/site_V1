'use client'

import * as React from 'react'
import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Tone = 'dark' | 'yellow' | 'cream-outline'

type CommonProps = {
  tone?: Tone
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: React.ReactNode
}

type AsButton = CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button'
  href?: never
}

type AsAnchor = CommonProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  as: 'a'
  href: string
}

type Props = AsButton | AsAnchor

/* Theme tones — keep the project palette (#1E172D / #FFFFAB / #F6F1EB / #A68AFF) */
const toneStyles: Record<
  Tone,
  { bg: string; text: string; chevronBg: string; chevronText: string; ring: string }
> = {
  dark: {
    bg: 'bg-[#1E172D]',
    text: 'text-[#F6F1EB]',
    chevronBg: 'bg-[#FFFFAB]/20',
    chevronText: 'text-[#FFFFAB]',
    ring: 'focus-visible:ring-[#A68AFF]',
  },
  yellow: {
    bg: 'bg-[#FFFFAB]',
    text: 'text-[#1E172D]',
    chevronBg: 'bg-[#1E172D]/12',
    chevronText: 'text-[#1E172D]',
    ring: 'focus-visible:ring-[#1E172D]/40',
  },
  'cream-outline': {
    bg: 'bg-[#F6F1EB]/10 border border-[#F6F1EB]/25',
    text: 'text-[#F6F1EB]',
    chevronBg: 'bg-[#F6F1EB]/20',
    chevronText: 'text-[#F6F1EB]',
    ring: 'focus-visible:ring-[#F6F1EB]/40',
  },
}

const sizeStyles = {
  sm: { padding: 'pl-5 pr-2.5 py-2', text: 'text-sm', height: 'h-10', chevron: 12 },
  md: { padding: 'pl-6 pr-3 py-2.5', text: 'text-sm', height: 'h-12', chevron: 14 },
  lg: { padding: 'pl-8 pr-3 py-3.5', text: 'text-base', height: 'h-14', chevron: 16 },
}

export const CtaChevronButton = React.forwardRef<HTMLElement, Props>(
  function CtaChevronButton(
    { tone = 'dark', size = 'md', className, children, ...rest },
    ref,
  ) {
    const t = toneStyles[tone]
    const s = sizeStyles[size]
    const isAnchor = (rest as AsAnchor).as === 'a'

    const baseClasses = cn(
      'group relative inline-flex items-center justify-start whitespace-nowrap overflow-hidden rounded-full font-bold cursor-pointer no-underline',
      'transition-shadow duration-300',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      'shimmer-hover',
      t.bg,
      t.text,
      t.ring,
      s.padding,
      s.text,
      s.height,
      className,
    )

    const inner = (
      <>
        <span
          className="mr-10 transition-opacity duration-500 group-hover:opacity-0"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          {children}
        </span>
        <span
          aria-hidden="true"
          className={cn(
            'absolute right-1 top-1 bottom-1 rounded-full z-10 grid place-items-center',
            'transition-[width] duration-500 ease-out',
            'w-[28%] group-hover:w-[calc(100%-0.5rem)] group-active:scale-95',
            t.chevronBg,
            t.chevronText,
          )}
        >
          <ChevronRight size={s.chevron} strokeWidth={2.5} />
        </span>
      </>
    )

    if (isAnchor) {
      const { as: _as, href, ...anchorProps } = rest as AsAnchor
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={baseClasses}
          {...anchorProps}
        >
          {inner}
        </a>
      )
    }

    const { as: _as, ...buttonProps } = rest as AsButton
    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseClasses}
        {...buttonProps}
      >
        {inner}
      </button>
    )
  },
)
