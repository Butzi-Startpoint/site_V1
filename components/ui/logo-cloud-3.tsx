import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { cn } from '@/lib/utils'

export type Logo = {
  src: string
  alt: string
  width?: number
  height?: number
  /** Classe de hauteur Tailwind (par défaut 'h-5 md:h-6') */
  heightClass?: string
  /** Ne pas appliquer le filtre silhouette blanche (garde les couleurs d'origine) */
  noInvert?: boolean
  /** Texte affiché à côté du logo (ex. wordmark manquant) */
  label?: string
}

type LogoCloudProps = React.ComponentProps<'div'> & {
  logos: Logo[]
}

export function LogoCloud({ className, logos, ...props }: LogoCloudProps) {
  return (
    <div
      {...props}
      className={cn(
        'overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]',
        className,
      )}
    >
      <InfiniteSlider gap={56} duration={35} durationOnHover={70}>
        {logos.map((logo) => (
          <div key={`logo-${logo.alt}`} className="flex items-center gap-2.5">
            <img
              alt={logo.alt}
              src={logo.src}
              loading="lazy"
              className={cn(
                'pointer-events-none select-none object-contain w-auto',
                logo.heightClass ?? 'h-5 md:h-6',
              )}
              style={
                logo.noInvert
                  ? { opacity: 0.95 }
                  : { filter: 'brightness(0) invert(1) opacity(0.7)' }
              }
            />
            {logo.label && (
              <span
                className="text-[#F6F1EB]/70 font-bold uppercase tracking-wide text-base md:text-lg whitespace-nowrap"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {logo.label}
              </span>
            )}
          </div>
        ))}
      </InfiniteSlider>
    </div>
  )
}
