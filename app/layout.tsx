import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const viewport: Viewport = {
  themeColor: '#1D9E75',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'HAAZRI | India\'s Voice-First Workforce Operating System',
    template: '%s | HAAZRI',
  },
  description: 'HAAZRI is the voice-first workforce operating system serving as the trust layer connecting 400 million informal workers to employers of any size through a simple phone call.',
  keywords: ['Workforce OS', 'India', 'Voice AI', 'Bhashini', 'ONEST', 'Informal Labor', 'Accessibility', 'Digital Inclusion', 'Construction Hiring', 'Labour Codes Compliance'],

  authors: [{ name: 'HAAZRI Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://haazri.vishwadev.tech',
    title: 'HAAZRI | India\'s Voice-First Workforce OS',
    description: 'Serving as the trust layer connecting 400 million informal workers to employers of any size through a simple phone call.',

    siteName: 'HAAZRI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HAAZRI',
    description: 'Voice-First Job Platform for India\'s Informal Workforce.',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

