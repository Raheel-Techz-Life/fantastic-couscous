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
    default: 'Zero-Barrier Jobs | Voice-First Employment Platform',
    template: '%s | Zero-Barrier Jobs',
  },
  description: 'Apply for jobs with a single missed call. No literacy, no smartphone, no internet required. Bridging the digital divide for India\'s informal workforce.',
  keywords: ['Jobs', 'India', 'Voice AI', 'Bhashini', 'ONEST', 'Informal Workforce', 'Accessibility', 'Digital Inclusion'],
  authors: [{ name: 'Zero-Barrier Team' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://zerobarrier.jobs',
    title: 'Zero-Barrier Jobs | Voice-First Employment',
    description: 'Job applications as simple as a missed call. Revolutionizing employment for 450M+ informal workers.',
    siteName: 'Zero-Barrier Jobs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zero-Barrier Jobs',
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} font-sans antialiased`}
      >
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

