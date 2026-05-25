'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CountUp } from './count-up'
import type { Estimation, FafName } from './types'

function encodeForm(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')
}
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const STEPPERS: Record<Exclude<FafName, 'Non identifié'>, string[]> = {
  AGEFICE: [
    'Télécharger l\'attestation CFP sur votre espace URSSAF',
    'Trouver votre Point d\'Accueil AGEFICE (CCI ou CMA de votre département)',
    'Remplir la demande de prise en charge (on vous fournit le programme + convention)',
    'Déposer le dossier minimum 15 jours avant le début de la formation',
    'Suivre la formation',
    'Transmettre l\'attestation d\'assiduité pour remboursement',
  ],
  FIFPL: [
    'Télécharger l\'attestation CFP sur votre espace URSSAF',
    'Se connecter sur l\'extranet FIFPL (fifpl.fr)',
    'Déposer la demande de prise en charge en ligne (avant le début de la formation)',
    'Joindre le devis + programme détaillé (on vous les fournit)',
    'Suivre la formation',
    'Transmettre les justificatifs pour remboursement',
  ],
  FAFCEA: [
    'Télécharger l\'attestation CFP sur votre espace URSSAF',
    'Se connecter sur l\'extranet FAFCEA (fafcea.com)',
    'Déposer la demande en ligne avant le début de la formation',
    'Joindre le devis + programme (on vous les fournit)',
    'Suivre la formation',
    'Transmettre les justificatifs pour remboursement',
  ],
  OPCO: [
    'Identifier votre OPCO selon votre branche professionnelle',
    'Contactez-nous pour qu\'on vous oriente — le circuit OPCO diffère du FAF',
    'Constituer le dossier avec votre OPCO (devis + convention fournis)',
    'Suivre la formation',
    'Transmettre les justificatifs pour remboursement',
  ],
}

export function Results({ estimation }: { estimation: Estimation; shareUrl?: string }) {
  const steps = estimation.fafName !== 'Non identifié' ? STEPPERS[estimation.fafName] : []
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmitGuide = async (e: FormEvent) => {
    e.preventDefault()
    if (!isValidEmail(email)) return
    setSending(true)
    const payload = {
      'form-name': 'financement-leads',
      email,
      estimation: JSON.stringify({ net: estimation.netCost, faf: estimation.fafName }),
      consent: consent ? 'oui' : 'non',
    }
    try {
      localStorage.setItem('financement-lead', JSON.stringify({ ...payload, ts: Date.now() }))
    } catch {}
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm(payload),
      })
    } catch {}
    setSending(false)
    setSent(true)
  }

  return (
    <div className="max-w-[760px] mx-auto px-6 pb-24 pt-10">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <span
          className="inline-block px-4 py-1.5 rounded-full bg-[#FFFFAB] text-[#1E172D] text-xs font-bold uppercase tracking-widest mb-5"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Votre estimation
        </span>
        <h2
          className="text-3xl md:text-5xl font-extrabold text-[#1E172D] leading-[1.1] tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Votre estimation de financement
        </h2>
      </motion.div>

      {/* Invoice block */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white rounded-3xl border border-[#1E172D]/10 shadow-[0_8px_40px_rgba(30,23,45,0.08)] p-6 md:p-8 mb-8"
      >
        <div className="space-y-4">
          {/* Price */}
          <div className="flex justify-between items-baseline pb-4 border-b border-[#1E172D]/10">
            <div>
              <p className="text-[#1E172D] font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                Formation Accélération IA 360 (14h)
              </p>
              <p className="text-xs text-[#1E172D]/50 mt-0.5">Tarif Essentiel HT</p>
            </div>
            <p
              className="text-xl md:text-2xl font-extrabold text-[#1E172D]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {estimation.price.toLocaleString('fr-FR')} €
            </p>
          </div>

          {/* FAF row */}
          <div className="flex justify-between items-baseline">
            <div className="flex-1 pr-4">
              <p className="text-[#1E172D]/80 font-medium" style={{ fontFamily: 'var(--font-display)' }}>
                — Financement {estimation.fafName} estimé
              </p>
              {estimation.fafNote && (
                <p className="text-xs text-[#1E172D]/50 mt-1 leading-relaxed">{estimation.fafNote}</p>
              )}
            </div>
            <p
              className="text-lg md:text-xl font-bold text-emerald-600 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <CountUp to={-estimation.fafAmount} startDelay={400} />
            </p>
          </div>

          {/* Deductibility */}
          <div className="flex justify-between items-baseline">
            <div className="flex-1 pr-4">
              <p className="text-[#1E172D]/80 font-medium" style={{ fontFamily: 'var(--font-display)' }}>
                — Économie fiscale (déductibilité)
              </p>
              <p className="text-xs text-[#1E172D]/50 mt-1 leading-relaxed">
                Montant restant × taux IS ou TMI
              </p>
            </div>
            <p
              className="text-lg md:text-xl font-bold text-emerald-600 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <CountUp to={-estimation.deductibility} startDelay={700} />
            </p>
          </div>

          {/* Crédit d'impôt */}
          <div className="flex justify-between items-baseline">
            <div className="flex-1 pr-4">
              <p className="text-[#1E172D]/80 font-medium" style={{ fontFamily: 'var(--font-display)' }}>
                — Crédit d&apos;impôt formation dirigeant
              </p>
              <p className="text-xs text-[#1E172D]/50 mt-1 leading-relaxed">
                14h × 11,88 € SMIC horaire
              </p>
            </div>
            <p
              className="text-lg md:text-xl font-bold text-emerald-600 whitespace-nowrap"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <CountUp to={-estimation.creditImpot} startDelay={1000} />
            </p>
          </div>

          {/* Total */}
          <div className="border-t-2 border-dashed border-[#1E172D]/20 pt-5 mt-2">
            <div className="bg-[#FFFFAB] rounded-2xl p-5 flex justify-between items-center">
              <p
                className="text-[#1E172D] font-extrabold text-base md:text-lg"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Coût réel net estimé
              </p>
              <p
                className="text-2xl md:text-3xl font-extrabold text-[#1E172D]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <CountUp to={estimation.netCost} durationMs={1600} startDelay={1300} />
              </p>
            </div>
          </div>
        </div>

      </motion.div>

      {/* Disclaimer + appel direct */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-10"
      >
        <p className="text-sm text-[#1E172D]/60 italic mb-4 max-w-[520px] mx-auto">
          Le montant estimé est une estimation qui dépend de nombreux facteurs.
        </p>
        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#1E172D] text-[#FFFFAB] font-bold text-sm md:text-base hover:bg-[#2a1f3d] transition-colors cursor-pointer"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Appelez-nous pour en discuter →
        </a>
      </motion.div>

      {/* Next steps */}
      {steps.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-3xl border border-[#1E172D]/10 p-6 md:p-8 mb-8"
        >
          <h3
            className="text-xl md:text-2xl font-extrabold text-[#1E172D] mb-1 tracking-tight"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Vos prochaines étapes
          </h3>
          <p className="text-[#1E172D]/55 text-sm mb-6">
            Circuit {estimation.fafName} — étape par étape
          </p>
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full bg-[#A68AFF] text-white text-xs font-bold flex items-center justify-center mt-0.5"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {i + 1}
                </span>
                <p className="text-[#1E172D]/85 text-[15px] leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </motion.div>
      )}

      {/* Recevoir le guide par email */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="bg-[#1E172D] rounded-3xl p-6 md:p-10 mb-8"
      >
        {sent ? (
          <div className="text-center py-4">
            <h3
              className="text-2xl md:text-3xl font-extrabold text-[#F6F1EB] mb-3 tracking-tight"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              C&apos;est parti&nbsp;! 🎉
            </h3>
            <p className="text-[#F6F1EB]/75 text-base md:text-lg leading-relaxed max-w-[520px] mx-auto">
              Votre guide de dépôt {estimation.fafName !== 'Non identifié' ? estimation.fafName : 'FAF'} pas
              à pas et nos conseils arrivent dans votre boîte mail.
            </p>
          </div>
        ) : (
          <>
            <h3
              className="text-2xl md:text-3xl font-extrabold text-[#F6F1EB] mb-3 tracking-tight text-center"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Recevez le guide de dépôt pas à pas + nos conseils
            </h3>
            <p className="text-[#F6F1EB]/75 text-base md:text-lg leading-relaxed max-w-[520px] mx-auto mb-7 text-center">
              Laissez votre email&nbsp;: on vous envoie le guide de dépôt détaillé, étape par
              étape, et nos conseils pour maximiser votre prise en charge.
            </p>
            <form
              onSubmit={handleSubmitGuide}
              name="financement-leads"
              data-netlify="true"
              className="space-y-4 max-w-[480px] mx-auto"
            >
              <input type="hidden" name="form-name" value="financement-leads" />
              <input
                type="email"
                required
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="prenom@votreentreprise.fr"
                className="w-full px-5 py-4 rounded-2xl bg-white text-[#1E172D] text-base font-medium focus:outline-none focus:ring-2 focus:ring-[#A68AFF] transition"
                style={{ fontFamily: 'var(--font-display)' }}
              />
              <label className="flex items-start gap-3 text-sm text-[#F6F1EB]/70 leading-relaxed cursor-pointer">
                <input
                  type="checkbox"
                  name="consent"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-[#A68AFF] cursor-pointer"
                />
                <span>
                  J&apos;accepte de recevoir le guide et des informations sur le programme
                  Accélération IA 360.
                </span>
              </label>
              <button
                type="submit"
                disabled={!isValidEmail(email) || sending}
                className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-[#FFFFAB] text-[#1E172D] font-bold text-base hover:bg-[#f5f08c] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {sending ? 'Envoi…' : 'Recevoir le guide →'}
              </button>
            </form>
          </>
        )}
      </motion.div>

      {/* Legal note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-[11px] text-[#1E172D]/45 leading-relaxed text-center"
      >
        Les montants indiqués sont des estimations basées sur les barèmes 2026. Le montant
        réel de votre prise en charge dépend de votre situation individuelle et de la
        décision de votre FAF. StartPoint IA ne garantit pas l&apos;obtention du financement.
        Sources&nbsp;: AGEFICE (communication-agefice.fr), FIFPL (fifpl.fr), FAFCEA
        (fafcea.com).
      </motion.p>
    </div>
  )
}
