export function FooterSection() {
  return (
    <footer className="bg-[#1E172D] border-t border-[#F6F1EB]/8 py-10 text-center">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2.5 mb-6">
          <div className="w-7 h-7 rounded-lg bg-[#FFFFAB]/15 flex items-center justify-center">
            <span className="text-[#FFFFAB] font-extrabold text-xs" style={{ fontFamily: 'var(--font-display)' }}>
              S
            </span>
          </div>
          <span className="font-bold text-[#F6F1EB]/70 text-sm tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            StartPoint<span className="text-[#A68AFF]"> IA</span>
          </span>
        </div>

        <p className="text-[#F6F1EB]/30 text-sm mb-3">
          © 2026 StartPoint IA (EURL BUTZI) · Organisme de formation certifié Qualiopi
        </p>
        <div className="flex items-center justify-center gap-4 text-sm">
          {['Mentions légales', 'CGV', 'Politique de confidentialité'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[#F6F1EB]/35 hover:text-[#F6F1EB]/70 transition-colors"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
