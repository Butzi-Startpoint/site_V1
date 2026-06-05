import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Plus_Jakarta_Sans } from 'next/font/google'
import { Chakra_Petch } from 'next/font/google'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { ChatWidget } from '@/components/ui/chat-widget'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
})

const chakraPetch = Chakra_Petch({
  variable: '--font-tech',
  subsets: ['latin', 'latin-ext'],
  weight: ['500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Accélération IA 360 : Programme IA pour Indépendants | StartPoint IA',
  description:
    'Le programme de 8 semaines qui transforme votre façon de travailler avec l\'IA. Sans jargon technique. Pour coaches, consultants, formateurs et freelances.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${plusJakartaSans.variable} ${chakraPetch.variable} antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden">
        {children}
        <WhatsAppButton />
        <ChatWidget />
      </body>
    </html>
  )
}
