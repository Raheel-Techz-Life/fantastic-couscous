'use client'

import { motion } from 'framer-motion'
import { landingConfig } from '@/config/landing-data'
import { Navigation } from '@/components/landing/Navigation'
import { Footer } from '@/components/landing/Footer'
import Link from 'next/link'
import { 
  ArrowRight, 
  Calendar, 
  User, 
  Tag 
} from 'lucide-react'

const posts = [
  {
    slug: 'voice-first-inclusion',
    title: 'Why 450M Indian workers can\'t use job portals — and what to do about it',
    category: 'Research',
    date: 'April 10, 2026',
    author: 'Vishwanath M K',
    excerpt: 'The literacy gap in India\'s informal workforce isn\'t just a social issue—it\'s a technical one. Here\'s how we\'re solving for zero-literacy.'
  },
  {
    slug: 'bhashini-integration',
    title: 'How BHASHINI is powering voice-first inclusion in India',
    category: 'Technology',
    date: 'April 05, 2026',
    author: 'Disha Raikar',
    excerpt: 'Linguistic barriers are the final frontier of digital inclusion. We dive deep into our integration with Digital India\'s AI stack.'
  },
  {
    slug: 'voice-biometrics',
    title: 'Building voice biometrics for rural India: what we learned',
    category: 'Security',
    date: 'March 28, 2026',
    author: 'Raheel Hosmani',
    excerpt: 'No passwords, no fingerprints. How vocal pitch became a secure identity layer for workers on the edge.'
  }
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 md:px-10 lg:px-20 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tight"
          >
            Insights & <span className="text-primary italic">Updates</span>
          </motion.h1>
          <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed">
            Thought leadership on informal labour markets, voice-first AI, and India's open digital networks.
          </p>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-24 px-6 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <motion.div 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col rounded-3xl border border-border bg-card group hover:border-primary transition-all overflow-hidden"
            >
              <div className="p-8 flex flex-col flex-1">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-primary/10 text-primary">{post.category}</span>
                  <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground font-medium">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                </div>
                <h2 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors flex-1">{post.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 line-clamp-3">{post.excerpt}</p>
                
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold">
                      {post.author[0]}
                    </div>
                    <span className="text-[10px] font-bold text-muted-foreground">{post.author}</span>
                  </div>
                  <Link href={`#`} className="text-xs font-bold text-primary flex items-center gap-1 group/btn">
                    Read More 
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
