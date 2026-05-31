import { Resend } from 'resend'

export const runtime = 'nodejs'

const RESEND_API_KEY = process.env.RESEND_API_KEY
const FROM = process.env.PROGRAMME_FROM_EMAIL || 'Butzi <programme@acceleration-ia.fr>'
const REPLY_TO = process.env.PROGRAMME_REPLY_TO || 'hello@startpoint-ia.fr'
const NOTIFICATION_TO = process.env.PROGRAMME_NOTIFICATION_TO || 'hello@startpoint-ia.fr'
const PROGRAMME_URL = process.env.PROGRAMME_PUBLIC_URL || 'https://acceleration-ia.fr/programme'
const CALENDLY_URL = process.env.CALENDLY_15MIN_URL || 'https://calendly.com/butzi/15-minutes-call-catch-up'

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

function notificationHtml(firstName: string, email: string): string {
  const now = new Date().toLocaleString('fr-FR', { dateStyle: 'long', timeStyle: 'short', timeZone: 'Europe/Paris' })
  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;color:#1E172D;max-width:560px;margin:0 auto;padding:24px;line-height:1.6">
  <p>Bonjour Butzi,</p>
  <p><strong>${escapeHtml(firstName)}</strong> vient de demander à recevoir le programme complet Accélération IA depuis la landing page.</p>
  <ul style="background:#F6F1EB;padding:16px 24px;border-radius:12px;list-style:none;">
    <li>• <strong>Prénom :</strong> ${escapeHtml(firstName)}</li>
    <li>• <strong>Email :</strong> ${escapeHtml(email)}</li>
    <li>• <strong>Date :</strong> ${escapeHtml(now)}</li>
    <li>• <strong>Source :</strong> landing — bouton « Recevoir le programme complet »</li>
  </ul>
  <p>L'email de bienvenue a été envoyé automatiquement à ${escapeHtml(email)} avec le lien du programme et la proposition de RDV 15 min.</p>
  <p style="color:#666;font-size:13px;margin-top:32px;">— notification automatique du site</p>
</body></html>`
}

function welcomeHtml(firstName: string): string {
  return `<!DOCTYPE html><html><body style="font-family:system-ui,sans-serif;color:#1E172D;max-width:560px;margin:0 auto;padding:24px;line-height:1.6">
  <p>Bonjour ${escapeHtml(firstName)},</p>
  <p>Merci pour votre intérêt pour <strong>Accélération IA 360</strong> !</p>
  <p>Voici le programme détaillé, certifié Qualiopi, avec les 8 sessions, les objectifs pédagogiques et les modalités de financement :</p>
  <p style="text-align:center;margin:24px 0;">
    <a href="${PROGRAMME_URL}" style="display:inline-block;background:#1E172D;color:#FFFFAB;padding:14px 28px;border-radius:999px;text-decoration:none;font-weight:bold;">
      Voir le programme complet →
    </a>
  </p>
  <p>Avant de vous lancer, j'aime bien échanger 15 minutes au téléphone avec chaque entrepreneur intéressé. Pas de blabla commercial : on regarde ensemble si la formation correspond vraiment à votre situation, vos objectifs et vos contraintes du moment.</p>
  <p style="background:#FFFFAB;padding:16px 20px;border-radius:12px;">
    📞 <strong>Réservez un créneau qui vous arrange :</strong><br>
    <a href="${CALENDLY_URL}" style="color:#1E172D;font-weight:bold;">${CALENDLY_URL}</a>
  </p>
  <p>Si vous avez des questions d'ici là, répondez simplement à ce mail.</p>
  <p>À très vite,<br><strong>Butzi</strong><br><span style="color:#666;font-size:13px;">Fondateur — Startpoint IA</span></p>
</body></html>`
}

export async function POST(request: Request) {
  if (!RESEND_API_KEY) {
    return Response.json({ error: 'Service email non configuré' }, { status: 500 })
  }

  let body: { firstName?: unknown; email?: unknown }
  try {
    body = await request.json()
  } catch {
    return Response.json({ error: 'Requête invalide' }, { status: 400 })
  }

  const firstName = typeof body.firstName === 'string' ? body.firstName.trim().slice(0, 80) : ''
  const email = typeof body.email === 'string' ? body.email.trim().slice(0, 200) : ''

  if (!firstName || !isValidEmail(email)) {
    return Response.json({ error: 'Prénom et email valides requis' }, { status: 400 })
  }

  const resend = new Resend(RESEND_API_KEY)

  const [notification, welcome] = await Promise.all([
    resend.emails.send({
      from: FROM,
      to: NOTIFICATION_TO,
      replyTo: email,
      subject: `${firstName} a demandé le programme complet Accélération IA`,
      html: notificationHtml(firstName, email),
    }),
    resend.emails.send({
      from: FROM,
      to: email,
      replyTo: REPLY_TO,
      subject: 'Le programme Accélération IA 360, et un café (virtuel) ?',
      html: welcomeHtml(firstName),
    }),
  ])

  if (notification.error || welcome.error) {
    console.error('[programme-lead] resend error', { notification: notification.error, welcome: welcome.error })
    return Response.json({ error: 'Échec de l\'envoi' }, { status: 502 })
  }

  return Response.json({ ok: true })
}
