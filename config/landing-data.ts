export interface TeamMember {
  initials: string;
  name: string;
  role: string;
  description: string;
  location: string;
  image: string;
  avatarColor: string;
  badge: string;
  socials: Array<{ name: string; url: string }>;
}

export interface Achievement {
  title: string;
  description: string;
  date?: string;
  organization?: string;
  badge?: string;
  iconName?: string;
  image?: string;
  externalLink?: string;
}

export interface LandingConfig {
  branding: {
    name: string;
    logo: string;
    colors: Record<string, string>;
  };
  navigation: {
    links: Array<{ label: string; href: string }>;
    cta: string;
  };
  home: {
    hero: {
      headline: string;
      description: string;
      buttons: Array<{ label: string; type: string; icon: string }>;
      stats: Array<{ number: string; label: string }>;
<<<<<<< HEAD
=======
      tagline: string;
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
    };
    demo: {
      tag: string;
      title: string;
      tabs: Array<{ title: string; subtitle: string; background: string }>;
    };
  };
  problemStatement: {
    tag: string;
    headline: string;
    subheadline: string;
    painPoints: Array<{ who: string; icon: string; title: string; body: string }>;
    verdict: { label: string; quote: string };
<<<<<<< HEAD
=======
    twoSidedCrisis: {
      employerStruggles: Array<{ title: string; body: string }>;
      workerStruggles: Array<{ title: string; body: string }>;
    };
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
  };
  howItWorks: {
    tag: string;
    title: string;
    description: string;
    workerJourney: Array<{ step: number; title: string; description: string; faq?: string }>;
    employerJourney: Array<{ title: string; description: string }>;
    faqs: Array<{ q: string; a: string }>;
  };
  features: {
    worker: Array<{ title: string; desc: string }>;
    employer: Array<{ title: string; desc: string }>;
    comparison: Array<{ feature: string; haazri: string; traditional: string }>;
  };
  technology: {
    architecture: Array<{ item: string; tech: string; purpose: string }>;
    compliance: string;
  };
  impact: {
    title: string;
    description: string;
    metrics: Array<{ label: string; value: string }>;
    personas: Array<{ name: string; role: string; context: string }>;
  };
  team: {
    title: string;
    tag: string;
    description: string;
    members: TeamMember[];
  };
  differentiators: {
    monotonicWage: {
      title: string;
      description: string;
      badge: string;
    };
    nightBeforeAlerts: {
      title: string;
      description: string;
      badge: string;
    };
  };
  forms: Record<string, { title: string; fields: string[] }>;
  footer: {
    tagline: string;
    columns: Array<{ title: string; links: Array<{ label: string; href: string }> }>;
    copyright: string;
    location: string;
  };
  cta: {
    title: string;
    description: string;
    buttons: Array<{ label: string; type: string }>;
  };
  achievements?: Achievement[];
  award: {
    emoji: string;
  };
<<<<<<< HEAD
=======
  ecosystem: {
    title: string;
    tag: string;
    description: string;
    tiers: Array<{ name: string; target: string; details: string[]; highlight?: string }>;
  };
  marketDynamics: {
    title: string;
    tag: string;
    description: string;
    drivers: Array<{ title: string; stat: string; detail: string }>;
  };
  roadmap: {
    title: string;
    tag: string;
    phases: Array<{ phase: string; timeline: string; objective: string }>;
  };
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
}

// Editable configuration for HAAZRI (Zero-Barrier Jobs) platform
export const landingConfig: LandingConfig = {
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
<<<<<<< HEAD
      { label: 'Home', href: '/' },
      { label: 'Solution', href: '/solution' },
      { label: 'Technology', href: '/technology' },
      { label: 'Validation Logic', href: '/validation-logic' },
=======
      { label: 'Solution', href: '/solution' },
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
      { label: 'Simulator', href: '/dual-experience-simulator' },
      { label: 'For Employers', href: '/employers' },
      { label: 'For Government', href: '/government' },
      { label: 'About Us', href: '/about' },
<<<<<<< HEAD
=======
      { label: 'Contact', href: '/contact' },
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
    ],
    cta: 'Get in touch',
  },

  home: {
    hero: {
      headline: "India's Voice-First Workforce OS",
      description:
<<<<<<< HEAD
        "Tier-2 India faces a massive market failure: employers spend weeks searching informal networks while 50% of ex-workers stay jobless. HAAZRI is a voice-first employment exchange built to solve trust, not just tech.",
=======
        "Connecting 400 million informal workers to employers of any size through a simple phone call. HAAZRI serves as the essential trust layer for India's workforce, removing the smartphone barrier and transforming a fragmented landscape into a high-precision, enterprise-grade ecosystem.",
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
      buttons: [
        { label: 'Claim your pilot', type: 'primary', icon: '⚡' },
        { label: 'See the problem', type: 'secondary', icon: '💡' },
      ],
      stats: [
<<<<<<< HEAD
        { number: '24h', label: 'Talent match' },
        { number: '90%', label: 'Retention rate' },
        { number: '₹0', label: 'Worker cost' },
      ],
=======
        { number: '400M', label: 'Informal Workers' },
        { number: '24h', label: 'Talent Match' },
        { number: '₹0', label: 'Worker Cost' },
      ],
      tagline: "HAAZRI — Apna Pehla Kaam, Yahin Se.",
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
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
<<<<<<< HEAD
    tag: 'The Broken Reality',
    headline: 'The informal labour market is fundamentally disconnected.',
    subheadline:
      'Word-of-mouth is unscalable, leaving employers short-handed and workers in perpetual uncertainty.',
    painPoints: [
      {
        who: 'Employer (Shivanand)',
        icon: '🏭',
        title: 'Hiring is an exhausting, continuous crisis',
        body:
          'Spends weeks searching personal networks to find even one reliable worker. "Hiring itself is a very difficult task — we keep asking the same people again and again." After 15 years, the problem remains unresolved.',
      },
      {
        who: 'Employer (M Mahajan)',
        icon: '📦',
        title: 'Floods of applicants, but zero commitment',
        body:
          'Receives floods of irrelevant applications. Shortlisted candidates frequently no-show, wasting time and stalling operations. "Too many apply but none are serious — and the ones we call, they just don\'t come."',
=======
    tag: 'The Two-Sided Crisis',
    headline: 'Structural Inefficiency in the Informal Market.',
    subheadline:
      'As India’s construction and industrial sectors scale, traditional hiring methods reliant on luck and the "labor chowk" are failing. With a 93–95% informality rate in Karnataka\'s construction sector, one missing worker causes a cascading "Stalled Site" risk.',
    painPoints: [
      {
        who: 'Contractor (Shivanand)',
        icon: '🏭',
        title: 'Last-Minute No-Shows',
        body:
          'One missing loader halts twenty loaders, causing immediate project delays. "Hiring is an exhausting, continuous crisis. Without a backup pipeline, project timelines collapse."',
      },
      {
        who: 'Contractor (M Mahajan)',
        icon: '📦',
        title: 'No Verified Skill Proof',
        body:
          'Masons are hired without proof. Discovering incompetence mid-job causes immediate rework, wasted materials, and massive material waste.',
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
      },
      {
        who: 'Worker (Suresh B.)',
        icon: '👷',
<<<<<<< HEAD
        title: "Invisible to the formal economy",
        body:
          'Trained but no platform to connect with employers. Relies entirely on word-of-mouth. "I don\'t know where to go — I keep running around but nothing happens." ~50% of workers stay jobless between gigs.',
=======
        title: 'Income Volatility & Vagueness',
        body:
          'Workers leave home at 5:00 AM without knowing if a site is active or if the quoted wage is real. Reputation is not portable beyond a tiny circle of known contractors.',
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
      },
    ],
    verdict: {
      label: 'Unverified · Fragile · Exclusionary',
      quote:
<<<<<<< HEAD
        '"Informal sector employers and blue-collar workers have no trusted, accessible, and structured way to find each other — making every hire a costly, repeated, and mostly failed effort."',
    },
  },

  howItWorks: {
    tag: 'The Solution',
    title: 'Voice-First Frictionless Recruitment',
    description: 'Moving from "channel chaos" to a structured, trust-based employment exchange.',
    workerJourney: [
      {
        step: 1,
        title: 'Voice-First Onboarding',
        description: 'Toll-free IVR sign-up in 22+ languages. A spoken conversation is converted into a structured Job ID.',
        faq: 'Does it work on basic phones? (Yes, no smartphone or internet required)',
      },
      {
        step: 2,
        title: 'Verified Trust Engine',
        description: 'Unique Job Codes and digital trails track reliability, attendance, and behaviour.',
      },
      {
        step: 3,
        title: '30-Second Voice Pitch',
        description: 'Record a spoken intro. Employers hear your fit before calling, eliminating wasted visits.',
      },
      {
        step: 4,
        title: 'Targeted SMS Match',
        description: 'System sends targeted alerts based on location and skill match. Apply with a single tap.',
      },
      {
        step: 5,
        title: 'Candidate Backup System',
        description: 'If a worker fails to show up, the system auto-notifies the verified pool to recover the process.',
      },
      {
        step: 6,
        title: 'Economic Portability',
        description: 'Ratings build a portable digital record, opening doors to Govt. schemes like PM Vishwakarma.',
=======
        '"Demand is there. Supply is there. HAAZRI is the Match. Connecting India\'s informal labor market to structured opportunity without requiring a smartphone or literacy."',
    },
    twoSidedCrisis: {
      employerStruggles: [
        { title: 'No Verified Skill Proof', body: 'Masons are hired without proof; discovering incompetence mid-job causes immediate rework and wasted materials.' },
        { title: 'Last-Minute No-Shows', body: 'One missing person can stall an entire crew. Without a replacement pipeline, project timelines collapse.' },
        { title: 'Lack of Tiered Pools', body: 'Contractors must manually reconstruct a mix of skilled and unskilled labor for every new project, every time.' },
        { title: 'Zero Worker Loyalty', body: 'The daily-wage system works against retention; contractors cannot build a reliable, returning workforce.' },
      ],
      workerStruggles: [
        { title: 'Skilled (Masons, Electricians)', body: 'Years of experience remain invisible; reputation is not portable beyond a tiny circle of known contractors.' },
        { title: 'Semi-Skilled (Mixer Operators)', body: 'Often misclassified as unskilled, they lack a platform to prove their technical impact on structural quality.' },
        { title: 'Unskilled (Loaders, Helpers)', body: 'Highly vulnerable to wage manipulation with zero upward mobility pathways or transparency.' },
        { title: 'Income Volatility', body: 'Workers leave home at 5:00 AM without knowing if a site is active or if the quoted wage is real.' },
      ]
    }
  },

  howItWorks: {
    tag: '6-Stage Infrastructure',
    title: 'How HAAZRI Works',
    description: 'A sophisticated technical backbone with an intentionally invisible user interface, ensuring workflow continuity and 100% accessibility.',
    workerJourney: [
      {
        step: 1,
        title: 'Registration (IVR/WhatsApp/Web)',
        description: 'Workers dial the IVR to speak their trade, location, and wage; employers post needs via frictionless digital panels.',
        faq: 'What if the call drops? (Workflow Continuity: system stores state at the worker ID level to pick up exactly where they left off)',
      },
      {
        step: 2,
        title: 'Matching (SMS)',
        description: 'The system matches workers by skill and proximity; workers receive a local-language SMS to apply with a single keypress.',
      },
      {
        step: 3,
        title: 'Voice Pitch (IVR)',
        description: 'The IVR calls the worker to record a 30-second introduction, providing a "vocal resume" that is auto-transcribed for the employer.',
      },
      {
        step: 4,
        title: 'Review (WhatsApp/Web)',
        description: 'Employers review candidate profiles and voice transcripts through a dashboard—no app download or login friction required.',
      },
      {
        step: 5,
        title: 'Decision (IVR/SMS)',
        description: 'Upon employer acceptance, the worker receives an automated site address, start time, and wage confirmation in their native language.',
      },
      {
        step: 6,
        title: 'Accessibility (System)',
        description: 'The entire flow functions on basic feature phones, requiring zero internet or literacy from the worker side.',
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
      },
    ],
    employerJourney: [
      {
<<<<<<< HEAD
        title: 'WhatsApp Job Post',
        description: 'Post requirements where you already live. No complex dashboards to learn.',
      },
      {
        title: 'Voice-Screened Review',
        description: 'Review verified transcripts and audio recordings of the 30-second pitches.',
      },
      {
        title: '24-Hour Guarantee',
        description: 'Get a verified, location-matched candidate within 24 hours or we find a replacement for free.',
      },
    ],
    faqs: [
      { q: 'How does it handle low literacy?', a: 'Entirely voice-based interaction via BHASHINI AI; no reading or writing required.' },
      { q: 'What is the "Mafia Offer"?', a: 'Verified candidates in 24h or we find a replacement at no extra cost.' },
      { q: 'Is it built for Tier-2 cities?', a: 'Yes, specifically engineered for the labor paradoxes of cities like Hubballi-Dharwad.' },
=======
        title: 'Frictionless Digital Panel',
        description: 'Post hiring needs in seconds without complex setup or app downloads.',
      },
      {
        title: 'Vocal Resume Review',
        description: 'Hear candidate voice recordings and view auto-transcribed resumes on WhatsApp.',
      },
      {
        title: 'Automated Scheduling & Site Routing',
        description: 'System automatically confirms matching, confirms wages, and sends exact site routing to accepted workers.',
      },
    ],
    faqs: [
      { q: 'What is Workflow Continuity?', a: 'HAAZRI treats interactions as persistent sessions. If a call drops or language switches mid-flow, the state is saved at the worker ID level so they resume right where they left off.' },
      { q: 'How does it handle low literacy?', a: 'Using voice-first toll-free IVR, BHASHINI translation, and 1-tap SMS replies. No reading or smartphone app download required.' },
      { q: 'What are the main segments targeted?', a: 'Primarily construction (masons, mixer operators, loaders, helpers) and industrial labor in Tier-2/3 hubs.' },
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
    ],
  },

  features: {
    worker: [
<<<<<<< HEAD
      { title: 'Literacy-Free', desc: 'Register via voice in 22+ languages' },
      { title: 'Trust Builder', desc: 'Build a verified work record' },
      { title: 'Zero Cost', desc: 'No agent fees, no internet needed' },
      { title: 'Govt. Bridge', desc: 'Access Mudra & Vishwakarma schemes' },
    ],
    employer: [
      { title: '24h Velocity', desc: 'Verified candidates in one day' },
      { title: 'No-Show Recovery', desc: 'Automated backup pool notifications' },
      { title: 'Voice Screening', desc: 'Hear the candidate before you call' },
      { title: 'WhatsApp Integrated', desc: 'Zero learning curve infrastructure' },
    ],
    comparison: [
      { feature: 'Hiring Channel', haazri: 'Structured Voice', traditional: 'Fragile Word-of-Mouth' },
      { feature: 'Trust Layer', haazri: 'Verified Ratings', traditional: 'Blind Referral / Gut' },
      { feature: 'Recovery', haazri: 'Auto-Backup Pool', traditional: 'Restart from Zero' },
      { feature: 'Worker Access', haazri: 'Any Phone / Voice', traditional: 'Smartphone / Literacy' },
=======
      { title: 'Voice Onboarding', desc: 'No smartphone or literacy required; voice onboarding in native language' },
      { title: 'Digital Labor Identity', desc: 'Build a portable history of verified work and ratings' },
      { title: 'Income Continuity', desc: 'Steady work pipeline with monotonic wage floor protections' },
      { title: 'Welfare Bridge', desc: 'Seamless BOCW and e-Shram government welfare registrations' },
    ],
    employer: [
      { title: 'Verified Skill Proof', desc: 'Preview voice pitches and structured verification data' },
      { title: 'Zero No-Shows', desc: 'Night-before IVR/SMS confirmations with automated replacement routing' },
      { title: 'WhatsApp HRMS', desc: 'No app download; review, shortlist, and muster workers via WhatsApp' },
      { title: 'Compliance Ready', desc: 'Fully compliant logs mapping the 90 days required for labor benefit codes' },
    ],
    comparison: [
      { feature: 'Hiring Channel', haazri: 'Structured Voice-First OS', traditional: 'Fragile Word-of-Mouth' },
      { feature: 'Trust Layer', haazri: 'Digital Labor Identity', traditional: 'Blind Referral / Gut' },
      { feature: 'No-Show Buffer', haazri: 'Night-before Alerts + Auto-Backup', traditional: 'Crew Stalls, Restart Search' },
      { feature: 'Accessibility', haazri: 'Basic Feature Phone (No Internet)', traditional: 'Smartphone App & Literacy' },
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
    ],
  },

  differentiators: {
    monotonicWage: {
      title: 'Monotonic Wage System',
<<<<<<< HEAD
      description: 'Prioritizes continuous, stable daily income over maximum temporary wages. Helps workers maintain steady food on the table and builds employer reliability.',
      badge: 'Continuous Income'
    },
    nightBeforeAlerts: {
      title: 'Automated Night-Before Work Alerts',
      description: 'System automatically calls scheduled workers the night before to confirm their shift attendance, allowing immediate replacement routing if they decline.',
      badge: 'Zero No-Shows'
=======
      description: 'Optimizes for income continuity over temporary maximum wage spikes. The \"Urgent Work\" mode captures worker wage floors to drive near-100% fill rates.',
      badge: 'Income Continuity'
    },
    nightBeforeAlerts: {
      title: 'Automated Night-Before Alerts',
      description: 'Sends tier-specific IVR and SMS alerts to confirm site readiness, start times, and tools, eliminating the primary cause of sudden project stalls.',
      badge: 'Eliminating No-Shows'
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
    }
  },

  technology: {
    architecture: [
<<<<<<< HEAD
      { item: 'ASR/TTS Engine', tech: 'BHASHINI', purpose: 'Multilingual Voice' },
      { item: 'Onboarding', tech: 'Toll-free IVR', purpose: 'Literacy-Free Access' },
      { item: 'Message Protocol', tech: 'ONEST / Beckn', purpose: 'Interoperable Exchange' },
      { item: 'Matching Engine', tech: 'Location-Aware AI', purpose: 'High Velocity Placement' },
=======
      { item: 'ASR/TTS Engine', tech: 'BHASHINI AI', purpose: 'Multilingual Voice Transcription' },
      { item: 'Onboarding Portal', tech: 'Toll-free IVR & WhatsApp', purpose: 'Zero-Barrier Access' },
      { item: 'Protocol Layer', tech: 'ONEST / Beckn Network', purpose: 'Interoperable Workforce Exchange' },
      { item: 'Verification API', tech: 'Aadhaar / e-Shram Bridge', purpose: 'Instant Background Verification' },
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
    ],
    compliance: 'Fully DPDP Act 2023 compliant. Built on ONDC/ONEST and BHASHINI open standards.',
  },

  impact: {
<<<<<<< HEAD
    title: 'Solving a 15-Year Market Failure',
    description: 'HAAZRI targets the labour paradox where employers are desperate to hire while 50% of ex-workers remain jobless.',
    metrics: [
      { label: 'Worker Attrition', value: '90%' },
      { label: 'Problem Duration', value: '15+ yrs' },
      { label: 'Unclaimed Schemes', value: '₹Crores' },
      { label: 'Placement Target', value: '24 Hours' },
    ],
    personas: [
      { name: 'Shivanand', role: 'CEO, Uday Ikas', context: 'Desperate for reliable workers; tired of informal chaos.' },
      { name: 'M Mahajan', role: 'CEO, Shree Manjunath', context: 'Wastes hours on no-shows and irrelevant applicants.' },
      { name: 'Suresh B.', role: 'ITI Graduate', context: 'Jobless despite skills; no platform to reach employers.' },
=======
    title: 'Transforming India\'s Labor Landscape',
    description: 'HAAZRI is building the trust layer for the 400 million workers driving India\'s rapid physical development.',
    metrics: [
      { label: 'Informal Labor', value: '400M' },
      { label: 'Construction Market', value: '$1.21T' },
      { label: 'New Jobs by 2030', value: '30M' },
      { label: 'e-Shram Registrations', value: '310M' },
    ],
    personas: [
      { name: 'Shivanand', role: 'Contractor, Hubballi', context: 'Struggles with material waste and crew stalls when key workers don\'t show up.' },
      { name: 'M Mahajan', role: 'Industrial Contractor', context: 'Wants verified worker lists and muster logs to comply with upcoming labor codes.' },
      { name: 'Suresh B.', role: 'Semi-Skilled Mixer Operator', context: 'Has years of experience but lacks a portable identity to get fair, stable wages.' },
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
    ],
  },

  team: {
    title: 'THE SQUAD',
    tag: 'The Builders',
    description: 'Just 4 young builders pushing unapologetically cool tech for the unorganized labor sector. Shipping fast, breaking barriers, and replacing ancient hiring loops with slick, modern infrastructure.',
    members: [
      {
        initials: 'VK',
        name: 'Vishwanath Koliwad',
<<<<<<< HEAD
        role: 'Principal Architect & Logic Lead',
=======
        role: 'Head of Product & Innovation',
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
        description: 'Cooking the core infrastructure that keeps HAAZRI breathing. Low-level optimization and high-performance server logic so things stay strictly no-cap when it actually matters.',
        location: 'Hubballi, Karnataka',
        image: '/vishwanath.jpg',
        avatarColor: 'blue',
        badge: 'Lead Builder',
        socials: [
          { name: 'PORTFOLIO', url: 'https://vk.vishwadev.tech/' }
        ]
      },
      {
        initials: 'BD',
        name: 'Bhumika Dalabhanjan',
<<<<<<< HEAD
        role: 'Chief of Ops & Strategy',
=======
        role: 'Executive Director',
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
        description: 'Keeping the squad locked in and orchestrating the timeline. Making sure we don’t just write code, but actually deploy it seamlessly when the stakes are high.',
        location: 'Hubballi, Karnataka',
        image: '/bhumika.jpg',
        avatarColor: 'coral',
        badge: 'Strategist',
        socials: [
          { name: 'PORTFOLIO', url: 'https://brd.vishwadev.tech/' }
        ]
      },
      {
        initials: 'DR',
        name: 'Disha Raikar',
<<<<<<< HEAD
        role: 'Aesthetic Lead & Visionary',
=======
        role: 'Experience Curator',
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
        description: 'Bridging the gap between raw functionality and insanely slick interfaces. Bringing clean, next-gen visual systems to a sector that desperately needs a UI glow-up.',
        location: 'Hubballi, Karnataka',
        image: '/disha.jpg',
        avatarColor: 'purple',
        badge: 'Visionary',
        socials: [
          { name: 'PORTFOLIO', url: 'https://dr.vishwadev.tech/' }
        ]
      },
      {
        initials: 'RH',
        name: 'Raheel Hosmani',
<<<<<<< HEAD
        role: 'AI Systems & Speedrunner',
=======
        role: 'Technology Alchemist',
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
        description: 'High-frequency code shipper. Hooking up the autonomous AI systems and making sure our intelligence engines run blazing fast. If it ain’t quick, he don’t want it.',
        location: 'Hubballi, Karnataka',
        image: '/raheel.jpg',
        avatarColor: 'teal',
        badge: 'Shipper',
        socials: [
          { name: 'PORTFOLIO', url: 'https://rhlz.vishwadev.tech/' }
        ]
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
<<<<<<< HEAD
    tagline: 'Voice-first job application system for India\'s informal workforce. Built on ONEST + BHASHINI.',
=======
    tagline: 'Voice-first workforce operating system for India\'s informal labor market. Built on ONEST + BHASHINI.',
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
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
<<<<<<< HEAD
=======
          { label: 'Contact Us', href: '/contact' },
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
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
<<<<<<< HEAD
    title: "Let's bring this to millions",
    description: "We're scaling HAAZRI to reach India's informal workforce.\nInterested in partnering, funding, or piloting?",
=======
    title: "Join the Infrastructure of the Future",
    description: "We invite B2B partners and government stakeholders to collaborate in building the trust layer for India’s workforce. HAAZRI is more than a hiring tool; it is the professional and financial identity for the invisible 400 million.",
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
    buttons: [
      { label: 'Get in touch', type: 'white' },
      { label: 'View Portal', type: 'outline-white' },
    ],
  },
  achievements: [
    {
      title: "Achievement Title Placeholder 1",
      description: "This is a placeholder description for the first achievement. It should outline the key milestones, recognitions, or accomplishment details.",
      date: "October 2025",
      organization: "Awarding Organization / Competition",
      badge: "Winner",
      iconName: "Trophy",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&auto=format&fit=crop&q=60",
      externalLink: "https://example.com/achievement-1"
    },
    {
      title: "Achievement Title Placeholder 2",
      description: "This is a placeholder description for the second achievement, showing layout behavior when optional fields like images are omitted.",
      date: "August 2025",
      organization: "Deshpande Startups Acceleration",
      badge: "Cohort",
      iconName: "Award",
      externalLink: "https://example.com/achievement-2"
    },
    {
      title: "Achievement Title Placeholder 3",
      description: "This is a placeholder description for the third achievement, showing layout behavior when optional fields like external links are omitted.",
      date: "June 2025",
      organization: "Mainstream Media Network",
      badge: "Media",
      iconName: "Tv",
      image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&auto=format&fit=crop&q=60"
    }
  ],
  award: {
    emoji: '🏆',
  },
<<<<<<< HEAD
=======
  ecosystem: {
    title: "The Ecosystem Architecture",
    tag: "B2C, B2B, and B2G",
    description: "HAAZRI's multi-deployment model ensures that the supply-side moat remains free, while high-value data and compliance tools drive revenue from B2B and B2G partners.",
    tiers: [
      {
        name: "B2C (Workers)",
        target: "Always Free",
        details: [
          "Creates portable Digital Labor Identity based on platform work history",
          "Social Mobility Ladder: transforms 'Unskilled Loader' to 'Verified Semi-Skilled' operator",
          "Creditworthiness unlocks: verified history enables access to micro-loans and insurance"
        ],
        highlight: "Social Catalyst"
      },
      {
        name: "B2B (Employers)",
        target: "SMB & Enterprise Tiers",
        details: [
          "SMB: Hire via WhatsApp with zero setup, plus automated digital muster rolls",
          "Enterprise: Dedicated API integrations, bulk recruitment campaigns, SLA-backed no-show replacements",
          "Compliance matching: provides persistent logs mapping to regulatory guidelines"
        ],
        highlight: "Enterprise Scale"
      },
      {
        name: "B2G (Government)",
        target: "Public Infrastructure & Welfare Bridge",
        details: [
          "Frictionless e-Shram bridge via Aadhaar verification over IVR, removing physical center visits",
          "BOCW registration bridge to close the 13.4% fund utilization gap",
          "Last-mile voice-bridge mapping directly to Digital India and Skill India frameworks"
        ],
        highlight: "Welfare Delivery"
      }
    ]
  },
  marketDynamics: {
    title: "Market Dynamics & Policy Tailwinds",
    tag: "High Velocity Growth",
    description: "HAAZRI's expansion intersects with a massive construction boom and historical regulatory updates.",
    drivers: [
      {
        title: "The $1.21T Construction Market",
        stat: "$1.21T",
        detail: "India's construction market is projected to add 30 million new jobs by 2030, necessitating high-speed, high-density matching."
      },
      {
        title: "The November 2025 Labour Codes",
        stat: "Nov 2025",
        detail: "Mandatory aggregator welfare contributions. Under these codes, workers require 90 days of logged platform activity to qualify for social security benefits."
      },
      {
        title: "Welfare Compliance Bridge",
        stat: "310M+",
        detail: "Integrating with 310M+ existing e-Shram identity frameworks to deliver last-mile welfare benefit logs directly to construction workers."
      }
    ]
  },
  roadmap: {
    title: "Strategic Pilot & Scaling Roadmap",
    tag: "Milestones",
    phases: [
      {
        phase: "Phase 1: Pilot",
        timeline: "Months 0–6",
        objective: "Validate fill rates in Hubballi’s high-density Smart City infrastructure (59 of 63 projects completed) amidst rising private demand."
      },
      {
        phase: "Phase 2: Scale",
        timeline: "Months 6–18",
        objective: "Expand across Karnataka; launch first Enterprise API integrations and B2G pilots with labor departments."
      },
      {
        phase: "Phase 3: Expand",
        timeline: "Months 18–36",
        objective: "National expansion; launch embedded financial services, micro-insurance, and credit-scoring for workers."
      }
    ]
  }
>>>>>>> f43f30f (feat: premium visual polish, dashboards, and contact pilot line updates)
};
