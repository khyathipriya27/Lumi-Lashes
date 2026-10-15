export interface LashService {
  id: string;
  name: string;
  category: 'extensions' | 'lift-tint' | 'maintenance';
  badge?: string;
  tagline: string;
  description: string;
  duration: string;
  startingPrice: string;
  idealFor: string;
  image: string;
  bgTone: 'rose' | 'buttercream' | 'cloudy' | 'ivory' | 'nude';
}

export interface LookbookItem {
  id: string;
  title: string;
  category: 'classic' | 'hybrid' | 'volume' | 'wispy' | 'lift';
  caption: string;
  curl: string;
  lengths: string;
  mapping: string;
  fullness: string;
  image: string;
  rotation?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  service: string;
  quote: string;
  vibe: string;
  badge: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

// Visual assets from generation
export const ASSETS = {
  heroLash: '/src/assets/images/hero_lash_editorial_1792048512495.jpg',
  artistPortrait: '/src/assets/images/artist_portrait_1792048513948.jpg',
  lookbookVolume: '/src/assets/images/lash_lookbook_volume_1792048514077.jpg',
  lookbookHybrid: '/src/assets/images/lash_lookbook_hybrid_1792048515189.jpg',
  lookbookClassic: '/src/assets/images/lash_lookbook_classic_1792048678026.jpg',
  lookbookLift: '/src/assets/images/lash_lookbook_lift_1792048678234.jpg',
  studioInterior: '/src/assets/images/studio_interior_1792048516862.jpg',
};

export const BRAND_CONFIG = {
  name: 'LUMI LASHES',
  tagline: 'A little lash magic.',
  phonePlaceholder: '(555) 782-LUMI',
  emailPlaceholder: 'hello@lumilashesstudio.com',
  addressPlaceholder: '418 Dahlia Boulevard, Atelier Suite 204',
  cityState: 'Austin, TX 78704',
  instagram: '@lumilashes.studio',
  tiktok: '@lumilashes',
  hours: [
    { days: 'Tuesday – Friday', time: '9:30 AM – 6:30 PM' },
    { days: 'Saturday', time: '10:00 AM – 5:00 PM' },
    { days: 'Sunday – Monday', time: 'Studio Closed (Lash Naps & Prep)' }
  ],
  announcement: 'Complimentary herbal tea & lash mist with every first set appointment ♡'
};

export const LASH_SERVICES: LashService[] = [
  {
    id: 'classic-full-set',
    name: 'Classic Lashes',
    category: 'extensions',
    badge: 'Timeless Beauty',
    tagline: 'Your lashes, just a little more irresistible.',
    description: 'One featherlight extension placed individually onto each healthy natural lash. Gives that enviable "born with it" mascara flutter with zero clumps or flaking.',
    duration: '105 mins',
    startingPrice: '$165',
    idealFor: 'Lash first-timers, clean-girl aesthetic, everyday effortless polish.',
    image: ASSETS.lookbookClassic,
    bgTone: 'rose'
  },
  {
    id: 'hybrid-full-set',
    name: 'Hybrid Lashes',
    category: 'extensions',
    badge: 'Studio Signature',
    tagline: 'The perfect mix of soft and statement.',
    description: 'Our most sought-after set! A custom blend of classic single extensions with handmade 3D-5D soft volume fans for airy texture, dimension, and wispy fullness.',
    duration: '120 mins',
    startingPrice: '$195',
    idealFor: 'Those who want textured flutter with noticeable density without heavy drama.',
    image: ASSETS.lookbookHybrid,
    bgTone: 'buttercream'
  },
  {
    id: 'volume-full-set',
    name: 'Volume Lashes',
    category: 'extensions',
    badge: 'Luxe Drama',
    tagline: 'Because a little extra never hurt.',
    description: 'Handmade bouquets of ultra-fine, velvety 0.05mm cashmere lashes wrapped 360° around each natural lash. Fluffy, dense, and lightweight as a whisper.',
    duration: '135 mins',
    startingPrice: '$235',
    idealFor: 'Full-glam enthusiasts, clients with sparse natural lashes needing fullness, special events.',
    image: ASSETS.lookbookVolume,
    bgTone: 'cloudy'
  },
  {
    id: 'wispy-angel-set',
    name: 'Wispy Angel Lashes',
    category: 'extensions',
    badge: 'Editorial Favorite',
    tagline: 'Fluttery peaks, soft valleys, pure magic.',
    description: 'Kim K & Manga-inspired styling featuring intentional spikes rising through a dreamy, feathery base line. Accentuates eye contour with dimensional peaks.',
    duration: '130 mins',
    startingPrice: '$215',
    idealFor: 'Fashion-forward clients who love eye-opening editorial styling and playful texture.',
    image: ASSETS.heroLash,
    bgTone: 'ivory'
  },
  {
    id: 'lash-lift',
    name: 'Lash Lift',
    category: 'lift-tint',
    badge: 'Zero Maintenance',
    tagline: 'Your natural lashes, beautifully elevated.',
    description: 'A gentle keratin-infused conditioning curl treatment that lifts and shapes your natural lashes straight from the root. Lasts 6 to 8 weeks with no extensions needed.',
    duration: '50 mins',
    startingPrice: '$95',
    idealFor: 'Clients with straight natural lashes wanting an eye-opening curling effect.',
    image: ASSETS.lookbookLift,
    bgTone: 'rose'
  },
  {
    id: 'lash-tint',
    name: 'Lash Tinting',
    category: 'lift-tint',
    tagline: 'Deep, glossy color that wakes up your eyes.',
    description: 'Custom semi-permanent deep blue-black or rich espresso glaze applied along the full lash shaft, providing mascara-depth pigment from base to tip.',
    duration: '25 mins',
    startingPrice: '$35',
    idealFor: 'Blonde, light brown, or sun-bleached natural lashes.',
    image: ASSETS.lookbookClassic,
    bgTone: 'nude'
  },
  {
    id: 'lash-fills',
    name: 'Lash Fill Sessions',
    category: 'maintenance',
    badge: 'Keep Them Fresh',
    tagline: 'Refresh, groom, and restore full flutter.',
    description: 'Gently removing outgrown extensions and placing fresh fans on new growth. We recommend visiting every 2 to 3 weeks to maintain optimal fullness and lash health.',
    duration: '60 – 75 mins',
    startingPrice: '$85 – $115',
    idealFor: 'Existing clients within 2–3.5 weeks of their previous set with at least 40% retention.',
    image: ASSETS.lookbookHybrid,
    bgTone: 'buttercream'
  },
  {
    id: 'lash-removal',
    name: 'Gentle Spa Removal',
    category: 'maintenance',
    tagline: 'Nourishing cream removal without damage.',
    description: 'Safe, pain-free soak-off using an organic oil-infused adhesive melting balm followed by a soothing keratin conditioning lash rinse.',
    duration: '30 mins',
    startingPrice: '$40',
    idealFor: 'Safely transitioning away from extensions or prepping for a brand new set.',
    image: ASSETS.studioInterior,
    bgTone: 'cloudy'
  }
];

export const LOOKBOOK_GALLERY: LookbookItem[] = [
  {
    id: 'look-1',
    title: 'The Golden Hour Flutter',
    category: 'hybrid',
    caption: 'Soft wispy hybrid set with subtle chocolate-brown accents for dreamy daylight glow.',
    curl: 'C & CC Mix',
    lengths: '8mm – 12mm',
    mapping: 'Kitten Eye (Gentle taper)',
    fullness: '85% Wispy Density',
    image: ASSETS.lookbookHybrid,
    rotation: '-rotate-2'
  },
  {
    id: 'look-2',
    title: 'Cashmere Velvet Volume',
    category: 'volume',
    caption: 'Seamless multi-length 4D volume fans crafted with 0.05mm cashmere fibers.',
    curl: 'D Curl Dramatic',
    lengths: '9mm – 14mm',
    mapping: 'Cat Eye Wing',
    fullness: '100% Symmetrical Fan Coverage',
    image: ASSETS.lookbookVolume,
    rotation: 'rotate-1'
  },
  {
    id: 'look-3',
    title: 'Morning Dew Natural Classic',
    category: 'classic',
    caption: 'One-to-one precision application emphasizing clean separation and natural curl.',
    curl: 'B & C Natural Curve',
    lengths: '7mm – 11mm',
    mapping: 'Doll Eye (Centered peak)',
    fullness: 'Natural 1:1 Enhancement',
    image: ASSETS.lookbookClassic,
    rotation: '-rotate-1'
  },
  {
    id: 'look-4',
    title: 'Editorial Angel Spikes',
    category: 'wispy',
    caption: 'Textured wispy styling with closed fan spikes creating whimsical, fluttery peaks.',
    curl: 'L+ & CC Curl',
    lengths: '9mm – 15mm Spikes',
    mapping: 'Manga / Angel Wispy',
    fullness: 'Textured Hybrid Spikes',
    image: ASSETS.heroLash,
    rotation: 'rotate-2'
  },
  {
    id: 'look-5',
    title: 'Keratin Lift & Gloss Tint',
    category: 'lift',
    caption: 'Zero extensions, 100% natural lash drama. Lifted straight from root with jet glaze.',
    curl: 'Custom Silicone Shield M',
    lengths: 'Natural Lash Length',
    mapping: 'Straight-Up Radial Lift',
    fullness: 'Natural Feather Lift',
    image: ASSETS.lookbookLift,
    rotation: '-rotate-2'
  },
  {
    id: 'look-6',
    title: 'Soft Glam Hybrid Doll',
    category: 'hybrid',
    caption: 'Enlarging doll-eye mapping with longer center lengths for round, doll-like gaze.',
    curl: 'CC Curl Soft Pop',
    lengths: '8mm – 13mm',
    mapping: 'Doll Eye Centered',
    fullness: 'Fluffy Hybrid 90%',
    image: ASSETS.lookbookHybrid,
    rotation: 'rotate-1'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Camille Vance',
    handle: '@camilleinclouds',
    service: 'Hybrid Full Set',
    quote: 'My morning routine dropped from 35 minutes to 5 minutes flat. Sarah took the time to map my almond eyes perfectly, and three weeks in, they still look like pure silk.',
    vibe: 'Everyday Polished',
    badge: 'Verified Client'
  },
  {
    id: 'test-2',
    name: 'Sloan Miller',
    handle: '@sloan.creative',
    service: 'Wispy Angel Set',
    quote: 'I have tried four boutique salons in town and Lumi is in an entirely different league. The studio is so calming, the lash nap was elite, and the retention is genuinely magical.',
    vibe: 'Obsessed Regular',
    badge: 'Verified Client'
  },
  {
    id: 'test-3',
    name: 'Maya Lin',
    handle: '@mayalindesign',
    service: 'Classic Set & Fill',
    quote: 'Zero burning, zero heavy glue feeling. Just weightless, gorgeous lashes that flutter whenever I blink. I get stopped by strangers asking what mascara I wear!',
    vibe: 'First-Timer to Devotee',
    badge: 'Verified Client'
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    category: 'Appointments',
    question: 'How should I arrive prepared for my lash appointment?',
    answer: 'Please arrive with squeaky-clean, makeup-free eyes! Avoid waterproof mascara, oily eye creams, and caffeine for at least 3 hours prior so your eyelids are relaxed and ready for the best lash nap.'
  },
  {
    category: 'Safety',
    question: 'Can lash extensions damage my natural lashes?',
    answer: 'Never at Lumi Lashes. We strictly isolate each natural lash and calculate the safe weight/diameter for your unique natural lashes. When lashes shed, the natural cycle replaces them safely without pulling or trauma.'
  },
  {
    category: 'Longevity',
    question: 'How long will my lash extensions last?',
    answer: 'Natural lashes shed in a normal 60–90 day cycle (around 2–5 natural lashes per eye daily). To keep your set looking full and fresh, we recommend scheduling a fill every 2 to 3 weeks.'
  },
  {
    category: 'Sensitivities',
    question: 'What if my eyes are sensitive or I wear contact lenses?',
    answer: 'We use premium medical-grade cyanoacrylate adhesive formulated with ultra-low fumes. If you wear contacts, we recommend removing them before your service or wearing glasses to your appointment for maximum relaxation.'
  },
  {
    category: 'First-Timers',
    question: 'I am not sure what set to choose! Can we decide together?',
    answer: 'Absolutely! Every first set begins with a 15-minute eye-shape, brow bone, and lifestyle consultation. We will examine your natural lash density and co-design your dream mapping before touching a single tweezer.'
  }
];

export const AFTERCARE_RULES = [
  {
    step: '01',
    title: 'The First 24 Hours',
    text: 'Avoid water, steam rooms, intense workouts, and cryotherapy while the adhesive completes its final cure. Keep them dry and happy.',
    tag: 'Critical Curing'
  },
  {
    step: '02',
    title: 'Daily Bubble Cleansing',
    text: 'Wash daily with an oil-free lash foam cleanser using a gentle soft brush. Clean lashes hold adhesive significantly longer and prevent blepharitis.',
    tag: 'Daily Ritual'
  },
  {
    step: '03',
    title: 'Brush Gently While Dry',
    text: 'Use your complimentary Lumi spoolie wand to brush from mid-shaft to tips. Only brush when completely dry, never when wet!',
    tag: 'Morning Routine'
  },
  {
    step: '04',
    title: 'Zero Oil Around The Eyes',
    text: 'Check cleansers, makeup removers, and face oils for mineral oils or glycols that break down cyanoacrylate glue bonds.',
    tag: 'Product Check'
  },
  {
    step: '05',
    title: 'Sleep on Silk & On Your Back',
    text: 'Friction is the enemy of retention. A silk or satin pillowcase helps prevent lashes from catching and twisting during sweet dreams.',
    tag: 'Beauty Sleep'
  },
  {
    step: '06',
    title: 'Never Pick, Pull, or DIY Remove',
    text: 'If you ever need them off or have an errant lash, reach out to us! Pulling an extension can damage your natural hair follicle.',
    tag: 'Golden Rule'
  }
];
