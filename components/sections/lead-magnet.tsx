'use client'

import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, stagger, viewport } from '@/lib/animations'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join('&')

export function LeadMagnet() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!email) return
    setStatus('submitting')
    setErrorMsg('')
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'lead-magnet',
          'bot-field': '',
          email,
        }),
      })
      setStatus('success')
    } catch (err) {
      console.error(err)
      setErrorMsg("Une erreur est survenue. Réessayez dans un instant.")
      setStatus('error')
    }
  }

  return (
    <section className="bg-[#F6F1EB] py-20 md:py-24 relative overflow-hidden" id="mini-cours">
      {/* Soft decorative gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 20% 30%, rgba(166,138,255,0.10) 0%, transparent 50%), radial-gradient(ellipse at 90% 70%, rgba(255,255,171,0.18) 0%, transparent 55%)',
        }}
      />

      <div className="relative max-w-[920px] mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={stagger}
          whileHover={{ boxShadow: '0 30px 80px rgba(30,23,45,0.10)' }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-3xl border border-[#1E172D]/8 px-6 py-10 md:px-12 md:py-14 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
            {/* Left: text */}
            <div>
              <motion.span
                variants={fadeUp}
                className="inline-block px-3 py-1 rounded-full bg-[#FFFFAB] text-[#1E172D] text-[11px] font-bold uppercase tracking-widest mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Mini-cours gratuit
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="text-3xl md:text-4xl font-extrabold text-[#1E172D] leading-[1.15] tracking-tight"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Pas encore prêt&nbsp;? Commencez par le{' '}
                <span className="text-[#A68AFF]">mini-cours gratuit.</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-[#1E172D]/65 text-base md:text-lg mt-4 leading-relaxed"
              >
                4 vidéos par email pour faire vos premiers pas avec l&apos;IA dans votre
                activité d&apos;indépendant.
              </motion.p>

              <motion.ul
                variants={fadeUp}
                className="mt-5 space-y-2 text-sm text-[#1E172D]/70"
              >
                {[
                  'Vos 3 premiers prompts qui font gagner du temps',
                  '1 méthode pour réécrire vos emails en 30 secondes',
                  '1 routine de veille assistée par IA',
                  'La feuille de route 6 semaines en bonus',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span className="text-[#A68AFF] font-bold mt-0.5">›</span>
                    <span>{t}</span>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Right: form */}
            <motion.div
              variants={fadeUp}
              className="w-full md:w-[360px] flex-shrink-0"
            >
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 240, damping: 22 }}
                  className="rounded-2xl px-6 py-8 text-center"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(166,138,255,0.14) 0%, rgba(255,255,171,0.20) 100%)',
                    border: '1px solid rgba(166,138,255,0.3)',
                  }}
                >
                  <div className="text-4xl mb-3">📬</div>
                  <p
                    className="text-[#1E172D] font-bold text-base md:text-lg leading-snug"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    C&apos;est parti&nbsp;! Vérifiez votre boîte mail.
                  </p>
                  <p className="text-[#1E172D]/60 text-sm mt-2 leading-relaxed">
                    La première vidéo arrive dans quelques minutes. Pensez à
                    regarder vos spams au cas où.
                  </p>
                </motion.div>
              ) : (
                <form
                  name="lead-magnet"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-3"
                >
                  {/* Netlify form-name hidden input */}
                  <input type="hidden" name="form-name" value="lead-magnet" />
                  {/* Honeypot for spam */}
                  <p className="hidden">
                    <label>
                      Don&apos;t fill this out:{' '}
                      <input name="bot-field" tabIndex={-1} autoComplete="off" />
                    </label>
                  </p>

                  <label
                    htmlFor="lead-magnet-email"
                    className="text-xs font-bold uppercase tracking-widest text-[#1E172D]/55"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    Votre adresse email
                  </label>
                  <input
                    id="lead-magnet-email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="vous@exemple.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={status === 'submitting'}
                    className="w-full px-4 py-3.5 rounded-xl border border-[#1E172D]/15 bg-white text-[#1E172D] text-base placeholder:text-[#1E172D]/30 focus:outline-none focus:border-[#A68AFF] focus:ring-2 focus:ring-[#A68AFF]/20 transition disabled:opacity-50"
                    style={{ fontFamily: 'var(--font-display)' }}
                  />

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, boxShadow: '0 12px 30px rgba(30,23,45,0.20)' }}
                    whileTap={{ scale: 0.98 }}
                    disabled={status === 'submitting'}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#1E172D] text-[#F6F1EB] font-bold text-sm cursor-pointer shimmer-hover disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    {status === 'submitting' ? 'Envoi…' : 'Recevoir le mini-cours gratuit'}
                    {status !== 'submitting' && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    )}
                  </motion.button>

                  {status === 'error' && (
                    <p className="text-red-600 text-xs mt-1">{errorMsg}</p>
                  )}

                  <p
                    className="text-[11px] text-[#1E172D]/45 leading-relaxed mt-1"
                    style={{ fontFamily: 'var(--font-display)' }}
                  >
                    En soumettant votre email vous acceptez de recevoir le mini-cours et
                    la newsletter StartPoint IA. Désabonnement en un clic.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
