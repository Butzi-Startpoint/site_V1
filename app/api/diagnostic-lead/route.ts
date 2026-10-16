/**
 * POST /api/diagnostic-lead
 * Body : { email: string, company?: string }   (company = champ piège anti-bot)
 *
 * Ajoute le contact à la liste Brevo « Guides IA » (n°4 par défaut), la même
 * que celle du quiz guides.acceleration-ia.fr/diagnostic. Aucun email n'est
 * envoyé depuis ce site : Brevo gère la suite via ses automations.
 *
 * Variables d'environnement (Netlify, site acceleration-ia.fr) :
 *  - BREVO_API_KEY            obligatoire, reste côté serveur
 *  - BREVO_DIAGNOSTIC_LIST_ID optionnel, 4 par défaut
 *
 * Seuls l'email et la liste sont envoyés. Aucun attribut : le quiz fait pareil,
 * et `updateEnabled` (qui évite une erreur pour un contact existant) écraserait
 * la valeur déjà présente d'un attribut comme FORMULAIRE ou DATE_LEAD.
 * On ne touche jamais à `emailBlacklisted` : une personne désinscrite ne doit
 * pas être réinscrite.
 */

export const runtime = 'nodejs'

const BREVO_CONTACTS = 'https://api.brevo.com/v3/contacts'
const DEFAULT_LIST_ID = 4

function reply(status: number, data: Record<string, unknown>) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json' },
  })
}

/* Limite légère, par instance (best-effort, comme les fonctions du repo lead-magnets). */
const WINDOW_MS = 60_000
const MAX_HITS = 8
const hits = new Map<string, number[]>()
function rateLimited(ip: string): boolean {
  const now = Date.now()
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS)
  recent.push(now)
  hits.set(ip, recent)
  return recent.length > MAX_HITS
}

function isValidEmail(value: unknown): value is string {
  return (
    typeof value === 'string' &&
    value.length <= 254 &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
  )
}

function listId(): number {
  const n = Number(process.env.BREVO_DIAGNOSTIC_LIST_ID)
  return Number.isInteger(n) && n > 0 ? n : DEFAULT_LIST_ID
}

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-nf-client-connection-ip') ||
    (request.headers.get('x-forwarded-for') || '').split(',')[0].trim() ||
    'unknown'
  if (rateLimited(ip)) {
    return reply(429, { error: 'Trop de tentatives, réessayez dans un instant.' })
  }

  let payload: { email?: unknown; company?: unknown }
  try {
    payload = await request.json()
  } catch {
    return reply(400, { error: 'Requête invalide.' })
  }

  // Champ piège : un humain ne remplit pas ce champ caché. On répond « ok » sans rien faire.
  if (typeof payload.company === 'string' && payload.company.trim() !== '') {
    return reply(200, { ok: true })
  }

  if (!isValidEmail(payload.email)) {
    return reply(400, { error: 'Adresse email invalide.' })
  }

  const key = process.env.BREVO_API_KEY
  if (!key) {
    console.error('[diagnostic-lead] BREVO_API_KEY manquante')
    return reply(500, { error: 'Service momentanément indisponible.' })
  }

  let res: Response
  try {
    res = await fetch(BREVO_CONTACTS, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
        'api-key': key,
      },
      body: JSON.stringify({
        email: payload.email.trim().toLowerCase(),
        listIds: [listId()],
        updateEnabled: true,
      }),
      signal: AbortSignal.timeout(8000),
    })
  } catch {
    console.error('[diagnostic-lead] Brevo injoignable')
    return reply(502, { error: 'Service momentanément indisponible.' })
  }

  // 201 = contact créé, 204 = contact existant mis à jour.
  if (res.status === 201 || res.status === 204) return reply(200, { ok: true })

  let body: { code?: string; message?: string } = {}
  try {
    body = await res.json()
  } catch {
    /* corps non JSON */
  }
  if (res.status === 400 && body.code === 'duplicate_parameter') {
    return reply(200, { ok: true }) // contact déjà présent : succès
  }

  console.error('[diagnostic-lead] Brevo a refusé la requête', res.status, body.code ?? '')
  return reply(502, { error: 'Service momentanément indisponible.' })
}
