import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { cn } from '@/lib/utils'

export type Logo = {
  src: string
  alt: string
  width?: number
  height?: number
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
          <img
            key={`logo-${logo.alt}`}
            alt={logo.alt}
            src={logo.src}
            height={logo.height ?? 'auto'}
            width={logo.width ?? 'auto'}
            loading="lazy"
            className="pointer-events-none h-5 select-none md:h-6 object-contain"
            style={{ filter: 'brightness(0) invert(1) opacity(0.7)' }}
          />
        ))}
      </InfiniteSlider>
    </div>
  )
}
