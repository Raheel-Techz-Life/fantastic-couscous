import type { Metadata } from 'next'
import { Navigation } from '@/components/landing/Navigation'
import { Footer } from '@/components/landing/Footer'
import { ValidationLogicClient } from './ValidationLogicClient'

export const metadata: Metadata = {
  title: 'Validation Logic | HAAZRI Proof of Concept',
  description: 'Explore the proof of concept validation logic for HAAZRI: real-time worker calls, employer dashboards, and field insights from regional pilots.',
}

export default function ValidationLogicPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <ValidationLogicClient />
      <Footer />
    </main>
  )
}
