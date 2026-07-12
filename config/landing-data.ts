// Editable configuration for HAAZRI (Zero-Barrier Jobs) platform
export const landingConfig = {
  branding: {
    name: 'HAAZRI',
    logo: '/logo.jpg', // Path to new logo
    colors: {
      primary: '#FF5400',
      darkAccent: '#0D2344',
      lightBg: '#FFF9F5',
      darkBgAccent: '#1E293B',
    },
  },

  navigation: {
    links: [
      { label: 'Home', href: '/' },
      { label: 'For Employers (B2B)', href: '/employers' },
      { label: 'For Government (B2G)', href: '/government' },
      { label: 'About Us / Team', href: '/about' },
      { label: 'Login / Dashboards', href: '/login' },
    ],
    cta: 'Get in touch',
  },

  home: {
    hero: {
      headline: "India's Voice-First Workforce OS",
      description:
        "Connecting 400 million informal workers to employers of any size through a simple phone call. Zero internet, zero smartphone, and zero literacy barriers.",
      buttons: [
        { label: 'Claim your pilot', type: 'primary', icon: '⚡' },
        { label: 'See the problem', type: 'secondary', icon: '💡' },
      ],
      stats: [
        { number: '24h', label: 'Talent match' },
        { number: '90%', label: 'Retention rate' },
        { number: '₹0', label: 'Worker cost' },
      ],
    },
    demo: {
      tag: 'Live Demo',
      title: 'Experience the Zero-Barrier flow',
      tabs: [
        {
          title: 'Demo: Worker callback',
          subtitle: 'IVR + BHASHINI voice flow in Hindi',
          background: '#085041',
        },
        {
          title: '1-tap SMS flow',
          subtitle: 'Worker confirms with a single digit',
          background: '#0C447C',
        },
        {
          title: 'Employer Dashboard',
          subtitle: 'Instant review on WhatsApp',
          background: '#3C3489',
        },
      ],
    },
  },

  problemStatement: {
    tag: 'The Broken Reality',
    headline: 'The informal labour market is fundamentally disconnected.',
    subheadline:
      'Word-of-mouth is unscalable, leaving employers short-handed and workers in perpetual uncertainty.',
    painPoints: [
      {
        who: 'Employers',
        icon: '🏭',
        title: 'Unverified Skills, No-Shows & Zero Loyalty',
        body:
          'Employers waste weeks trying to find dependable workers. They deal with high attrition, constant no-shows at critical construction/factory sites, and have no way to verify worker skills prior to day one of work.',
      },
      {
        who: 'Workers',
        icon: '👷',
        title: 'Invisible Skills, Reliance on Luck & Feast-or-Famine',
        body:
          'Informal workers live in a cycle of feast-or-famine. Without smartphones or literacy, they rely on luck or local middle-men to find work. Their real skills remain invisible, and they lack a portable employment identity.',
      },
      {
        who: 'Market System',
        icon: '🔗',
        title: 'Traditional Tech Platforms Have Failed',
        body:
          'White-collar job sites require smartphones, high literacy, and internet access. The 400M informal workforce is locked out. Word-of-mouth is the only solution left, and it is highly unreliable and localized.',
      },
    ],
    verdict: {
      label: 'Unverified · Fragile · Exclusionary',
      quote:
        '"Informal sector employers and blue-collar workers have no trusted, accessible, and structured way to find each other — making every hire a costly, repeated, and mostly failed effort."',
    },
  },

  howItWorks: {
    tag: 'Journey',
    title: 'The 6-Stage IVR Hiring Operating System',
    description: 'A seamless, voice-first system connecting local labour to business needs without barriers.',
    workerJourney: [
      {
        step: 1,
        title: 'Registration',
        description: 'Workers register by dialing a simple missed call, triggering an automated callback in their local dialect.',
        faq: 'What if I have no credit? (It works even with zero balance)',
      },
      {
        step: 2,
        title: 'Matching',
        description: 'Our system automatically matches registered workers to local job openings based on trade and location.',
      },
      {
        step: 3,
        title: 'Voice Pitch',
        description: 'Workers record a short 30-second audio pitch describing their experience and skill sets in their own language.',
      },
      {
        step: 4,
        title: 'Review',
        description: 'Employers receive applicant cards with play-back audio pitches translated into English or standard text.',
      },
      {
        step: 5,
        title: 'Decision',
        description: 'Employers make a decision with a single tap, notifying the worker via auto-dial or SMS alerts.',
      },
      {
        step: 6,
        title: 'Accessibility',
        description: 'Ensuring zero barrier entry: workers need no smartphone, no internet, and no literacy to get hired.',
      },
    ],
    employerJourney: [
      {
        title: 'WhatsApp notifications',
        description: 'Receive applicants where you already live. No new portal to learn.',
      },
      {
        title: 'Applicant cards',
        description: 'Detailed view with voice, transcript, and reputation score.',
      },
      {
        title: '1-tap hiring',
        description: 'Approve, shortlist, or call back with a single button.',
      },
    ],
    faqs: [
      { q: 'What languages are supported?', a: '22+ scheduled Indian languages via BHASHINI.' },
      { q: 'Is it DPDP Act compliant?', a: 'Yes, we use consent-first data handling.' },
      { q: 'How is identity verified?', a: 'Vocal pitch biometrics ensure unique profiles.' },
    ],
  },

  features: {
    worker: [
      { title: 'BHASHINI Voice', desc: '22+ languages, auto-detect' },
      { title: 'Missed Call', desc: 'Zero-cost, feature-phone ready' },
      { title: '1-tap SMS', desc: '<90 sec total application time' },
      { title: 'Voice Biometric', desc: 'Hardware-free identity layer' },
    ],
    employer: [
      { title: 'WhatsApp Dashboard', desc: 'Zero onboarding, mobile-native' },
      { title: 'Instant Card', desc: 'Voice + transcript + score' },
      { title: '1-tap Shortlist', desc: 'Frictionless hiring actions' },
      { title: 'ONEST Bulk Post', desc: 'Broadcast to open network' },
    ],
    comparison: [
      { feature: 'Literacy Required', haazri: 'None', traditional: 'High' },
      { feature: 'Device', haazri: 'Any Phone', traditional: 'Smartphone' },
      { feature: 'Internet', haazri: 'Not Required', traditional: 'Required' },
      { feature: 'Time to Apply', haazri: '<2 min', traditional: '20+ min' },
    ],
  },

  differentiators: {
    monotonicWage: {
      title: 'Monotonic Wage System',
      description: 'Prioritizes continuous, stable daily income over maximum temporary wages. Helps workers maintain steady food on the table and builds employer reliability.',
      badge: 'Continuous Income'
    },
    nightBeforeAlerts: {
      title: 'Automated Night-Before Work Alerts',
      description: 'System automatically calls scheduled workers the night before to confirm their shift attendance, allowing immediate replacement routing if they decline.',
      badge: 'Zero No-Shows'
    }
  },

  technology: {
    architecture: [
      { item: 'ASR/TTS Engine', tech: 'BHASHINI', purpose: 'Multilingual Voice' },
      { item: 'Identity Layer', tech: 'Voice Biometrics', purpose: 'Secure Portability' },
      { item: 'Message Protocol', tech: 'ONEST / Beckn', purpose: 'Interoperability' },
      { item: 'Interface', tech: 'WhatsApp / SMS', purpose: 'Zero-Friction Access' },
    ],
    compliance: 'Fully DPDP Act 2023 compliant and built on India Stack open standards.',
  },

  impact: {
    title: 'The 400M Informal Economy',
    description: 'HAAZRI acts as the digital bridge, connecting the unorganized sector to modern work opportunities at an unprecedented scale.',
    metrics: [
      { label: 'Target Workforce', value: '400M+' },
      { label: 'Exclusion Rate', value: '90%' },
      { label: 'Languages', value: '22+' },
      { label: 'Literacy Barrier', value: '0%' },
    ],
    personas: [
      { name: 'Ramu', role: 'Security Guard', context: 'Feature phone user, Hindi speaker.' },
      { name: 'Sunita', role: 'Domestic Worker', context: 'No literacy, Rajasthani dialect.' },
      { name: 'Mahesh', role: 'Construction Labour', context: 'Seasonal migrant, Marathi speaker.' },
    ],
  },

  team: {
    title: 'KNOW THE TEAM',
    tag: 'Team Vidyut',
    description: 'The builders scaling voice-first jobs infrastructure in Hubballi-Dharwad.',
    members: [
      { 
        initials: 'VK', 
        name: 'Vishwanath Koliwad', 
        role: 'Tech Lead', 
        description: 'Architecting high-performance system logic and engineering the core infrastructure that powers HAAZRI\'s voice-first OS. Focused on low-level optimization and scale.',
        location: 'Hubballi-Dharwad, Karnataka',
        image: '/vishwanath.jpg',
        avatarColor: 'blue', 
        badge: 'Architect' 
      },
      { 
        initials: 'RH', 
        name: 'Raheel Hosmani', 
        role: 'Product Lead', 
        description: 'Driving product velocity and aligning developer efforts. Specializes in rapid deployment of voice-biometric matches and interactive user workflows.',
        location: 'Hubballi-Dharwad, Karnataka',
        image: '/raheel.jpg',
        avatarColor: 'teal', 
        badge: 'Product' 
      },
      { 
        initials: 'DR', 
        name: 'Disha Raikar', 
        role: 'Design Lead', 
        description: 'Bridging the gap between raw functional logic and high-fidelity human interfaces. Designing the visual systems and user portals that scale accessibility.',
        location: 'Hubballi-Dharwad, Karnataka',
        image: '/disha.jpg',
        avatarColor: 'purple', 
        badge: 'Design' 
      },
      { 
        initials: 'BD', 
        name: 'Bhumika Dalabhanjan', 
        role: 'Head of Operations', 
        description: 'Managing the rollout and strategic integration. Building grassroots partnerships and ensuring maximum operational uptime in Tier 2/3 locations.',
        location: 'Hubballi-Dharwad, Karnataka',
        image: '/bhumika.jpg',
        avatarColor: 'coral', 
        badge: 'Operations' 
      },
    ],
  },

  forms: {
    employer: {
      title: 'Hire from the next 400M',
      fields: ['Company Name', 'Contact Person', 'Phone', 'Email', 'City', 'Monthly Volume'],
    },
    partner: {
      title: 'Join the ecosystem',
      fields: ['Organisation', 'Role', 'Interest Type', 'Message'],
    },
  },

  footer: {
    tagline: 'Voice-first job application system for India\'s informal workforce. Built on ONEST + BHASHINI.',
    columns: [
      {
        title: 'Platform',
        links: [
          { label: 'How it works', href: '/' },
          { label: 'For Employers', href: '/employers' },
          { label: 'For Government', href: '/government' },
          { label: 'About Us', href: '/about' },
        ],
      },
      {
        title: 'Connect',
        links: [
          { label: 'For Employers', href: '/employers' },
          { label: 'Login Portal', href: '/login' },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Privacy Policy', href: '/legal/privacy' },
          { label: 'Terms of Service', href: '/legal/terms' },
        ],
      },
    ],
    copyright: '© 2026 HAAZRI',
    location: 'Built in Hubballi-Dharwad, India',
  },
  cta: {
    title: "Let's bring this to millions",
    description: "We're scaling HAAZRI to reach India's informal workforce.\nInterested in partnering, funding, or piloting?",
    buttons: [
      { label: 'Get in touch', type: 'white' },
      { label: 'View Portal', type: 'outline-white' },
    ],
  },
};
