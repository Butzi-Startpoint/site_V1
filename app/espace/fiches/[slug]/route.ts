import { FICHES } from '@/lib/espace/fiches'
import { getMember } from '@/lib/espace/session'

export async function GET(_req: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const html = Object.hasOwn(FICHES, slug) ? FICHES[slug] : undefined
  // Même réponse (404) sans connexion ou si la fiche n'existe pas.
  if (!html || !(await getMember())) return new Response('Not found', { status: 404 })
  return new Response(html, {
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'private, no-store',
      'x-robots-tag': 'noindex, nofollow',
    },
  })
}
