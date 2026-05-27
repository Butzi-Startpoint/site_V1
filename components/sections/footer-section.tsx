export function FooterSection() {
  return (
    <footer className="bg-[#1E172D] border-t border-[#F6F1EB]/8 py-10 text-center">
      <div className="max-w-[1140px] mx-auto px-6">
        {/* Logo */}
        <div className="flex items-center justify-center mb-6">
          <img
            src="/startpoint-wordmark.png"
            alt="StartPoint IA"
            className="h-7 w-auto"
            style={{ filter: 'brightness(0) invert(1)', opacity: 0.8 }}
          />
        </div>

        <p className="text-[#F6F1EB]/30 text-sm mb-2">
          © 2026 StartPoint IA (EURL BUTZI) · Organisme de formation certifié Qualiopi
        </p>
        {/* TODO: remplacer [NDA À COMPLÉTER] par le vrai numéro de déclaration d'activité (récépissé de déclaration / Digiforma) */}
        <p className="text-[#F6F1EB]/30 text-sm mb-3 max-w-[640px] mx-auto leading-relaxed">
          Organisme de formation enregistré sous le numéro [NDA À COMPLÉTER] auprès du préfet
          de région Île-de-France. Cet enregistrement ne vaut pas agrément de l&apos;État.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm flex-wrap">
          <a
            href="https://www.startpoint-ia.fr/mentions-legales"
            target="_blank"
            rel="noopener"
            className="text-[#F6F1EB]/35 hover:text-[#F6F1EB]/70 transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Mentions légales
          </a>
          {/* TODO: créer une page CGV sur startpoint-ia.fr et mettre le lien ici */}
          <a
            href="#"
            className="text-[#F6F1EB]/35 hover:text-[#F6F1EB]/70 transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            CGV
          </a>
          <a
            href="https://www.startpoint-ia.fr/politique-confidentialite"
            target="_blank"
            rel="noopener"
            className="text-[#F6F1EB]/35 hover:text-[#F6F1EB]/70 transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Politique de confidentialité
          </a>
          {/* TODO: créer une page Règlement intérieur OF sur startpoint-ia.fr et mettre le lien ici */}
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="text-[#F6F1EB]/35 hover:text-[#F6F1EB]/70 transition-colors"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Règlement intérieur
          </a>
        </div>
      </div>
    </footer>
  )
}
