'use client'

import { useState, type FormEvent } from 'react'

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}
function encodeForm(data: Record<string, string>) {
  return Object.keys(data)
    .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
    .join('&')
}

/**
 * Widget de chat (desktop) : bulle flottante → ouvre un mini-chat.
 * À l'envoi, le message est soumis au formulaire Netlify "chat-messages"
 * (notification email à configurer côté Netlify).
 */
export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    if (!message.trim() || !isValidEmail(email)) return
    setSending(true)
    const payload = { 'form-name': 'chat-messages', email, message }
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
    <div className="hidden md:block fixed bottom-5 right-5 z-[90]">
      {open && (
        <div className="mb-3 w-[340px] bg-white rounded-2xl shadow-[0_20px_60px_rgba(30,23,45,0.25)] border border-[#1E172D]/8 overflow-hidden">
          {/* Header */}
          <div className="bg-[#1E172D] px-5 py-4 flex items-start justify-between">
            <div>
              <p className="text-[#F6F1EB] font-bold text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                Une question&nbsp;?
              </p>
              <p className="text-[#F6F1EB]/60 text-xs mt-0.5">On vous répond par email rapidement.</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer le chat"
              className="text-[#F6F1EB]/60 hover:text-[#F6F1EB] cursor-pointer text-lg leading-none"
            >
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="p-4">
            {sent ? (
              <div className="text-center py-4">
                <div className="text-3xl mb-2">📬</div>
                <p className="text-[#1E172D] font-bold text-sm" style={{ fontFamily: 'var(--font-display)' }}>
                  Message envoyé&nbsp;!
                </p>
                <p className="text-[#1E172D]/60 text-xs mt-1 leading-relaxed">
                  On revient vers vous par email très vite.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="flex flex-col gap-2.5">
                <textarea
                  required
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Votre message…"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#1E172D]/15 bg-white text-[#1E172D] text-sm focus:outline-none focus:border-[#A68AFF] transition resize-none"
                />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email pour la réponse"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#1E172D]/15 bg-white text-[#1E172D] text-sm focus:outline-none focus:border-[#A68AFF] transition"
                  style={{ fontFamily: 'var(--font-display)' }}
                />
                <button
                  type="submit"
                  disabled={sending || !message.trim() || !isValidEmail(email)}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#1E172D] text-[#FFFFAB] font-bold text-sm hover:bg-[#2a1f3d] disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
                  style={{ fontFamily: 'var(--font-display)' }}
                >
                  {sending ? 'Envoi…' : 'Envoyer'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Bulle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Ouvrir le chat"
        className="w-14 h-14 rounded-full bg-[#A68AFF] flex items-center justify-center shadow-[0_8px_24px_rgba(166,138,255,0.45)] hover:scale-110 transition-transform duration-200 ml-auto"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
            <path d="M12 2C6.477 2 2 5.94 2 10.8c0 2.49 1.17 4.74 3.06 6.36-.13 1.1-.5 2.4-1.36 3.54-.17.22-.02.55.26.53 1.86-.14 3.3-.78 4.3-1.42.83.2 1.72.31 2.64.31 5.523 0 10-3.94 10-8.8S17.523 2 12 2z" />
          </svg>
        )}
      </button>
    </div>
  )
}
