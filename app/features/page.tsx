import type { Metadata } from 'next'
import { Navigation } from '@/components/landing/Navigation'
import { Footer } from '@/components/landing/Footer'
import { FeaturesClient } from './FeaturesClient'

export const metadata: Metadata = {
  title: 'Features | Zero-Barrier Recruitment Infrastructure',
  description: 'Explore the technical capabilities of HAAZRI, from voice-first onboarding to verified reputation engines built for the informal workforce.',
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <FeaturesClient />
      <Footer />
    </main>
  )
}
