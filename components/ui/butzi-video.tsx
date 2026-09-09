'use client'

import { useEffect, useRef, useState } from 'react'

/* Short YouTube « Un mot de Butzi » (format vertical 9:16). */
const SHORT_ID = 'RuqIZRAApzE'
/* Miniature : image fournie dans public/ (l'espace du nom est encodé). */
const POSTER = '/miniature%20video.png'

/* Charge l'API IFrame Player une seule fois pour toute la page. */
let apiPromise: Promise<void> | null = null
function loadYouTubeAPI(): Promise<void> {
  if (typeof window === 'undefined') return Promise.resolve()
  const w = window as unknown as { YT?: { Player: unknown }; onYouTubeIframeAPIReady?: () => void }
  if (w.YT?.Player) return Promise.resolve()
  if (apiPromise) return apiPromise
  apiPromise = new Promise<void>((resolve) => {
    const prev = w.onYouTubeIframeAPIReady
    w.onYouTubeIframeAPIReady = () => {
      prev?.()
      resolve()
    }
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    document.head.appendChild(tag)
  })
  return apiPromise
}

/**
 * Carte vidéo verticale de Butzi, en « façade » : seule une image d'aperçu est
 * affichée, et le lecteur YouTube n'est chargé qu'au clic de l'utilisateur.
 *
 * ⚠️ NE PAS remettre de lecture automatique. L'article 82 de la loi
 * Informatique et Libertés impose le consentement préalable avant toute
 * écriture/lecture dans le terminal : charger l'iframe YouTube sans action de
 * l'utilisateur déposerait des traceurs tiers et transmettrait son adresse IP à
 * Google sans consentement. La façade au clic est ce qui rend la page conforme
 * sans bandeau cookies. Le domaine « nocookie » ne suffit pas à lui seul.
 *
 * Le clic étant un geste utilisateur, la lecture démarre avec le son (50 %) et
 * la piste de sous-titres YouTube désactivée.
 */
export function ButziVideo({ className = '' }: { className?: string }) {
  type YTApi = {
    setVolume: (v: number) => void
    unMute: () => void
    playVideo: () => void
    unloadModule?: (m: string) => void
    setOption?: (m: string, o: string, v: unknown) => void
    destroy?: () => void
  }
  const holderRef = useRef<HTMLDivElement>(null)
  const playerRef = useRef<YTApi | undefined>(undefined)
  const [started, setStarted] = useState(false)

  /* ⚠️ Aucun préchargement de l'API YouTube : charger iframe_api dès l'affichage
     transmettrait l'adresse IP du visiteur à Google avant tout consentement.
     Le script n'est donc récupéré qu'au clic (le son reste autorisé grâce à la
     « sticky user activation » acquise par ce clic). */
  useEffect(() => {
    if (!started) return
    let cancelled = false
    loadYouTubeAPI().then(() => {
      if (cancelled || !holderRef.current) return
      const YT = (window as unknown as { YT: { Player: new (el: Element, opts: unknown) => YTApi } }).YT
      playerRef.current = new YT.Player(holderRef.current, {
        videoId: SHORT_ID,
        width: '100%',
        height: '100%',
        // Domaine « nocookie » : pas de cookies publicitaires/tracking YouTube.
        host: 'https://www.youtube-nocookie.com',
        playerVars: {
          autoplay: 1,
          mute: 0,
          loop: 1,
          playlist: SHORT_ID,
          controls: 1,
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
          cc_load_policy: 0,
          iv_load_policy: 3,
        },
        events: {
          onReady: (e: { target: YTApi }) => {
            e.target.setVolume(50)
            e.target.unMute()
            // Coupe la piste de sous-titres YouTube (les sous-titres incrustés restent).
            try {
              e.target.setOption?.('captions', 'track', {})
              e.target.unloadModule?.('captions')
            } catch {
              /* noop */
            }
            e.target.playVideo()
          },
        },
      })
    })
    return () => {
      cancelled = true
      try {
        playerRef.current?.destroy?.()
      } catch {
        /* noop */
      }
    }
  }, [started])

  return (
    <div
      className={`relative aspect-[9/16] rounded-2xl overflow-hidden shadow-[0_22px_60px_rgba(30,23,45,0.28)] ring-1 ring-black/5 bg-[#1E172D] ${className}`}
    >
      {/* Point de montage du player (rempli par l'iframe YouTube au clic) */}
      <div
        ref={holderRef}
        className={`absolute inset-0 w-full h-full [&>iframe]:absolute [&>iframe]:inset-0 [&>iframe]:w-full [&>iframe]:h-full ${
          started ? '' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Façade : miniature + bouton lecture, aucun contenu tiers chargé */}
      {!started && (
        <button
          type="button"
          onClick={() => setStarted(true)}
          aria-label="Lire la vidéo de Butzi (le lecteur YouTube sera chargé)"
          className="absolute inset-0 w-full h-full cursor-pointer group"
        >
          <img
            src={POSTER}
            alt="Un mot de Butzi en vidéo"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#1E172D" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        </button>
      )}
    </div>
  )
}
