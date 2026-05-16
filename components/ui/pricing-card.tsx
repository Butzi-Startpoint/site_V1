import React from 'react';
import { cn } from '@/lib/utils';

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        'bg-card relative w-full rounded-xl',
        'p-1.5 shadow-xl backdrop-blur-xl',
        'border border-[rgba(30,23,45,0.1)]',
        className,
      )}
      {...props}
    />
  );
}

function Header({
  className,
  children,
  glassEffect = true,
  ...props
}: React.ComponentProps<'div'> & { glassEffect?: boolean }) {
  return (
    <div
      className={cn(
        'bg-[#F6F1EB] relative mb-4 rounded-xl border border-[rgba(30,23,45,0.06)] p-4',
        className,
      )}
      {...props}
    >
      {glassEffect && (
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-48 rounded-[inherit]"
          style={{
            background:
              'linear-gradient(180deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 40%, rgba(0,0,0,0) 100%)',
          }}
        />
      )}
      {children}
    </div>
  );
}

function Plan({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('mb-8 flex items-center justify-between', className)}
      {...props}
    />
  );
}

function Description({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p className={cn('text-[#1E172D]/55 text-xs', className)} {...props} />
  );
}

function PlanName({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn(
        "text-[#1E172D]/60 flex items-center gap-2 text-sm font-medium [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  );
}

function Badge({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'border-[#A68AFF]/40 text-[#A68AFF] bg-[#A68AFF]/10 rounded-full border px-2 py-0.5 text-xs font-semibold',
        className,
      )}
      {...props}
    />
  );
}

function Price({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div className={cn('mb-3 flex items-end gap-1', className)} {...props} />
  );
}

function MainPrice({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn('text-3xl font-extrabold tracking-tight text-[#1E172D]', className)}
      {...props}
    />
  );
}

function Period({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn('text-[#1E172D]/60 pb-1 text-sm', className)}
      {...props}
    />
  );
}

function OriginalPrice({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'text-[#1E172D]/35 mr-1 ml-auto text-lg line-through',
        className,
      )}
      {...props}
    />
  );
}

function Body({ className, ...props }: React.ComponentProps<'div'>) {
  return <div className={cn('space-y-6 p-3', className)} {...props} />;
}

function List({ className, ...props }: React.ComponentProps<'ul'>) {
  return <ul className={cn('space-y-3', className)} {...props} />;
}

function ListItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      className={cn(
        'text-[#1E172D]/65 flex items-start gap-3 text-sm',
        className,
      )}
      {...props}
    />
  );
}

function Separator({
  children = 'Inclus en plus',
  className,
  ...props
}: React.ComponentProps<'div'> & { children?: string; className?: string }) {
  return (
    <div
      className={cn(
        'text-[#1E172D]/40 flex items-center gap-3 text-xs',
        className,
      )}
      {...props}
    >
      <span className="bg-[#1E172D]/20 h-[1px] flex-1" />
      <span className="shrink-0">{children}</span>
      <span className="bg-[#1E172D]/20 h-[1px] flex-1" />
    </div>
  );
}

export {
  Card,
  Header,
  Description,
  Plan,
  PlanName,
  Badge,
  Price,
  MainPrice,
  Period,
  OriginalPrice,
  Body,
  List,
  ListItem,
  Separator,
};
