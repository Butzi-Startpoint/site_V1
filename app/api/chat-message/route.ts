import { Resend } from 'resend'

export const runtime = 'nodejs'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const FROM = process.env.PROGRAMME_FROM_EMAIL || 'Butzi <programme@acceleration-ia.fr>'
const REPLY_TO = process.env.PROGRAMME_REPLY_TO || 'hello@startpoint-ia.fr'
const NOTIFICATION_TO = process.env.PROGRAMME_NOTIFICATION_TO || 'hello@startpoint-ia.fr'

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

function notificationHtml(email: string, message: string): string {
  return WRAP(`
  <p>Bonjour Butzi,</p>
  <p>Nouveau message via le <strong>chat du site</strong>.</p>
  <ul style="background:#F6F1EB;padding:16px 24px;border-radius:12px;list-style:none;">
    <li>• <strong>Email :</strong> ${escapeHtml(email)}</li>
  </ul>
  <p style="background:#FFFFAB;padding:16px 20px;border-radius:12px;white-space:pre-wrap;">${escapeHtml(message)}</p>
  <p style="color:#666;font-size:13px;">Répondez directement à ce mail pour répondre à la personne.</p>`)
}

function acknowledgmentHtml(message: string): string {
  return WRAP(`
  <p>Bonjour,</p>
  <p>Merci pour votre message&nbsp;! Il est bien arrivé et Butzi vous répondra personnellement par email très vite.</p>
  <p style="background:#F6F1EB;padding:16px 20px;border-radius:12px;white-space:pre-wrap;font-size:14px;color:#555;"><em>Votre message&nbsp;:</em><br>${escapeHtml(message)}</p>
  <p>À très vite,<br><strong>Butzi</strong><br><span style="color:#666;font-size:13px;">Fondateur — Startpoint IA</span></p>`)
}

export async function POST(request: Request) {
  if (!RESEND_API_KEY) {
    return Response.json({ error: 'Service email non configuré' }, { status: 500 })
  }

  let body: { email?: unknown; message?: unknown }
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Requête invalide' }, { status: 400 })
  }

  const email = typeof body.email === 'string' ? body.email.trim().slice(0, 200) : ''
  const message = typeof body.message === 'string' ? body.message.trim().slice(0, 4000) : ''

  if (!isValidEmail(email) || !message) {
    return Response.json({ error: 'Email valide et message requis' }, { status: 400 })
  }

  const resend = new Resend(RESEND_API_KEY)

  const [notification, ack] = await Promise.all([
    resend.emails.send({
      from: FROM,
      to: NOTIFICATION_TO,
      replyTo: email,
      subject: 'Nouveau message via le chat du site',
      html: notificationHtml(email, message),
    }),
    resend.emails.send({
      from: FROM,
      to: email,
      replyTo: REPLY_TO,
      subject: 'On a bien reçu votre message 📬',
      html: acknowledgmentHtml(message),
    }),
  ])

  if (notification.error) {
    console.error('[chat-message] notification error', notification.error)
    return Response.json({ error: 'Échec de l\'envoi' }, { status: 502 })
  }
  if (ack.error) {
    console.error('[chat-message] ack error', ack.error)
  }

  return Response.json({ ok: true })
}
