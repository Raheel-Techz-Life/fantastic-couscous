import type { Metadata } from 'next'
import { Navigation } from '@/components/landing/Navigation'
import { Footer } from '@/components/landing/Footer'
import { HowItWorksClient } from '@/app/how-it-works/HowItWorksClient'

export const metadata: Metadata = {
  title: 'Solution | Voice-First Frictionless Recruitment Platform',
  description: 'Understand HAAZRI\'s solution: zero-barrier multilingual voice onboarding and 24-hour location-matched verified talent loops.',
}

export default function SolutionPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HowItWorksClient />
      <Footer />
    </main>
  )
}
