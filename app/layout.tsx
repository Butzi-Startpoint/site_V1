import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Plus_Jakarta_Sans } from 'next/font/google'
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

export const metadata: Metadata = {
  title: 'Entrepreneurs Augmentés — Programme IA pour Indépendants | StartPoint IA',
  description:
    'Le programme de 6 semaines qui transforme votre façon de travailler avec l\'IA. Sans jargon technique. Pour coaches, consultants, formateurs et freelances.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${plusJakartaSans.variable} antialiased`}
    >
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  )
}
