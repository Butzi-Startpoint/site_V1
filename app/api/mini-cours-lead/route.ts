import { Resend } from 'resend'

export const runtime = 'nodejs'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const FROM = process.env.PROGRAMME_FROM_EMAIL || 'Butzi <programme@acceleration-ia.fr>'
const REPLY_TO = process.env.PROGRAMME_REPLY_TO || 'hello@startpoint-ia.fr'
const NOTIFICATION_TO = process.env.PROGRAMME_NOTIFICATION_TO || 'hello@startpoint-ia.fr'
const CALENDLY_URL = process.env.CALENDLY_15MIN_URL || 'https://calendly.com/butzi/15-minutes-call-catch-up'
const PME_URL = 'https://www.startpoint-ia.fr/conseil-ia'
const FOLLOWUP_DELAY_DAYS = 12

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

const WRAP = (inner: string) =>
  `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;color:#1E172D;max-width:560px;margin:0 auto;padding:24px;line-height:1.6">${inner}</body></html>`

function welcomeHtml(): string {
  return WRAP(`
  <p>Bonjour,</p>
  <p>Vous avez demandé d'avoir accès au mini-cours sur l'IA et vous allez voir, vous avez bien fait&nbsp;!</p>
  <p>Vous allez bientôt recevoir une série d'emails gratuits pour comprendre et faire les premiers pas dans l'IA, spécialement conçue pour les <strong>indépendants, entrepreneurs et freelances</strong>.</p>
  <p style="background:#FFFFAB;padding:16px 20px;border-radius:12px;">
    ⚠️ <strong>Attention&nbsp;!</strong> Ce n'est pas le même contenu que pour les PME&nbsp;: ici, on parle agilité, débrouille, efficacité et créativité.
  </p>
  <p>Si vous avez une équipe ou que vous rentrez plutôt dans la case PME, rendez-vous sur cette page du site&nbsp;: vous y trouverez un autre cours gratuit sur 4 jours, mieux adapté à vos besoins (qui parle notamment de sécurité des données, de déploiement de l'IA, etc.)&nbsp;:</p>
  <p style="text-align:center;margin:24px 0;">
    <a href="${PME_URL}" style="display:inline-block;background:#1E172D;color:#FFFFAB;padding:14px 28px;border-radius:999px;text-decoration:none;font-weight:bold;">
      Le cours gratuit pour les PME →
    </a>
  </p>
  <p>À très vite,<br><strong>Butzi</strong><br><span style="color:#666;font-size:13px;">Fondateur — Startpoint IA</span></p>`)
}

function followupHtml(): string {
  return WRAP(`
  <p>Bonjour,</p>
  <p>Vous voilà arrivé(e) au bout du mini-cours IA — bravo&nbsp;! 🎉 J'espère qu'il vous a donné des premières idées concrètes à appliquer dans votre activité.</p>
  <p>Maintenant que vous avez les bases, j'aime bien prendre 15 minutes (un café virtuel ☕) avec les personnes qui ont suivi le mini-cours. Pas de blabla commercial&nbsp;: on regarde ensemble où vous en êtes avec l'IA, ce qui bloque, et les prochaines étapes utiles <em>pour vous</em>.</p>
  <p style="text-align:center;margin:24px 0;">
    <a href="${CALENDLY_URL}" style="display:inline-block;background:#1E172D;color:#FFFFAB;padding:14px 28px;border-radius:999px;text-decoration:none;font-weight:bold;">
      Réserver mon café virtuel ☕ →
    </a>
  </p>
  <p style="background:#FFFFAB;padding:14px 20px;border-radius:12px;font-size:14px;">
    📞 Ou directement&nbsp;: <a href="${CALENDLY_URL}" style="color:#1E172D;font-weight:bold;">${CALENDLY_URL}</a>
  </p>
  <p>Si vous avez des questions d'ici là, répondez simplement à ce mail.</p>
  <p>À très vite,<br><strong>Butzi</strong><br><span style="color:#666;font-size:13px;">Fondateur — Startpoint IA</span></p>`)
}

function notificationHtml(email: string): string {
  return WRAP(`
  <p>Bonjour Butzi,</p>
  <p>Nouvelle inscription au <strong>mini-cours IA</strong> depuis la landing page.</p>
  <ul style="background:#F6F1EB;padding:16px 24px;border-radius:12px;list-style:none;">
    <li>• <strong>Email :</strong> ${escapeHtml(email)}</li>
    <li>• <strong>Source :</strong> landing — bloc « Mini-cours gratuit »</li>
  </ul>
  <p>L'email de bienvenue est parti automatiquement, et la relance « café virtuel » est programmée dans ${FOLLOWUP_DELAY_DAYS} jours.</p>
  <p style="color:#666;font-size:13px;margin-top:32px;">— notification automatique du site</p>`)
}

export async function POST(request: Request) {
  if (!RESEND_API_KEY) {
    return Response.json({ error: 'Service email non configuré' }, { status: 500 })
  }

  let body: { email?: unknown }
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Requête invalide' }, { status: 400 })
  }

  const email = typeof body.email === 'string' ? body.email.trim().slice(0, 200) : ''
  if (!isValidEmail(email)) {
    return Response.json({ error: 'Email valide requis' }, { status: 400 })
  }

  const resend = new Resend(RESEND_API_KEY)

  // 1) Bienvenue (immédiat) + notification à Butzi
  const [welcome] = await Promise.all([
    resend.emails.send({
      from: FROM,
      to: email,
      replyTo: REPLY_TO,
      subject: 'Votre mini-cours IA arrive 🎉',
      html: welcomeHtml(),
    }),
    resend.emails.send({
      from: FROM,
      to: NOTIFICATION_TO,
      replyTo: email,
      subject: 'Nouvelle inscription au mini-cours IA',
      html: notificationHtml(email),
    }),
  ])

  if (welcome.error) {
    console.error('[mini-cours-lead] welcome error', welcome.error)
    return Response.json({ error: 'Échec de l\'envoi' }, { status: 502 })
  }

  // 2) Relance « café virtuel » programmée à +12 jours (best-effort)
  try {
    const scheduledAt = new Date(Date.now() + FOLLOWUP_DELAY_DAYS * 24 * 60 * 60 * 1000).toISOString()
    const followup = await resend.emails.send({
      from: FROM,
      to: email,
      replyTo: REPLY_TO,
      subject: 'Vous avez fini le mini-cours — un café virtuel ? ☕',
      html: followupHtml(),
      scheduledAt,
    })
    if (followup.error) {
      console.error('[mini-cours-lead] follow-up schedule error', followup.error)
    }
  } catch (err) {
    console.error('[mini-cours-lead] follow-up exception', err)
  }

  return Response.json({ ok: true })
}
