import type { Metadata } from 'next'
import { Navigation } from '@/components/landing/Navigation'
import { Footer } from '@/components/landing/Footer'
import { SimulatorClient } from './SimulatorClient'

export const metadata: Metadata = {
  title: 'Dual Experience Simulator | HAAZRI Sandbox',
  description: 'Try the HAAZRI voice-first recruitment platform: register as a worker via voice callback (IVR) and review profiles as an employer.',
}

export default function SimulatorPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <SimulatorClient />
      <Footer />
    </main>
  )
}
