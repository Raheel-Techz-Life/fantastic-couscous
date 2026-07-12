import type { Metadata } from 'next'
import { Navigation } from '@/components/landing/Navigation'
import { Footer } from '@/components/landing/Footer'
import { TechnologyClient } from './TechnologyClient'

export const metadata: Metadata = {
  title: 'Technology | Built on ONEST + BHASHINI',
  description: 'Learn about HAAZRI\'s technical architecture, utilizing India\'s open digital infrastructure for voice-first recruitment and interoperable job IDs.',
}

export default function TechnologyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <TechnologyClient />
      <Footer />
    </main>
  )
}
