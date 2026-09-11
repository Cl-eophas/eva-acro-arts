// Client-supplied Eva Acrodance and Art content.
// ---------------------------------------------------------------------------
// Eva Acrodance and Art — site content
// This file centralizes all editable text/content so it can be updated
// without touching component code. Replace [PLACEHOLDER] items with real
// copy supplied by the client.
// ---------------------------------------------------------------------------

export const brand = {
  name: 'EVA ACRODANCE AND ART',
  fullName: 'EVA ACRODANCE AND ART',
  tagline: 'Move With Power, Move With Grace',
  roles: ['Movement', 'Training', 'Performance'],
  email: 'evelaurakarimi@gmail.com',
  phone: '+254 796 609521',
  phoneHref: '+254796609521',
  location: 'School of Nation, Kitusuru, Kirawa Road',
  social: {
    instagram: 'https://www.instagram.com/blackmambamvnt.ke/',
    tiktok: 'https://www.tiktok.com/@blackmambamvnt.ke',
  },
};

export const disciplines = [
  {
    id: 'aerial-arts',
    name: 'Aerial Arts',
    description: 'Hoop (lyra), silks and rope work building strength, line and airborne artistry.',
    image: 'perf-hoop-green',
  },
  {
    id: 'acrobatics',
    name: 'Acrobatics',
    description: 'Floor tumbling, partner acro and dynamic movement combinations.',
    image: 'train-acro-splits',
  },
  {
    id: 'handstands',
    name: 'Handstands',
    description: 'Alignment, balance and hold-building from first kick-up to freestanding press.',
    image: 'train-handstand-1',
  },
  {
    id: 'flexibility',
    name: 'Flexibility',
    description: 'Splits, bridges and mobility training for safer, deeper, more expressive lines.',
    image: 'train-acro-bridge-kick',
  },
  {
    id: 'strength-movement',
    name: 'Strength & Movement',
    description: 'Conditioning built for aerialists and acrobats — control, power and stamina.',
    image: 'train-strength-pose',
  },
  {
    id: 'kids-gymnastics',
    name: 'Kids Gymnastics',
    description: 'Playful, structured gymnastics foundations for young movers.',
    image: 'train-kids-hoop-2',
  },
];

export const trainingGroups = [
  {
    id: 'kids',
    name: 'Kids',
    ageRange: '[ADD AGE RANGE]',
    description: 'Fun, confidence-building classes introducing gymnastics, balance and aerial basics in a safe, supportive environment.',
    image: 'train-kids-hoop-1',
  },
  {
    id: 'teens',
    name: 'Teens',
    ageRange: '[ADD AGE RANGE]',
    description: 'Skill-focused training in acrobatics, flexibility and aerial arts for growing strength and discipline.',
    image: 'train-group-class-1',
  },
  {
    id: 'adults',
    name: 'Adults',
    ageRange: 'All levels',
    description: 'From first handstand to advanced aerial choreography — training designed around real adult schedules and goals.',
    image: 'train-handstand-2',
  },
];

export const performanceCategories = [
  {
    id: 'aerial-hoop',
    name: 'Aerial Hoop (Lyra)',
    description: 'Elegant, dynamic aerial hoop routines customizable to your event\u2019s theme and music.',
    image: 'perf-hoop-solo-2',
  },
  {
    id: 'acrobatic-showcase',
    name: 'Acrobatic Showcase',
    description: 'Floor-based acrobatics and flexibility artistry for stages, galas and receptions.',
    image: 'perf-hoop-duo',
  },
  {
    id: 'custom-choreo',
    name: 'Custom Choreography',
    description: 'Tailored performance pieces built around your event, brand or celebration.',
    image: 'perf-hoop-action',
  },
];

// Gallery: category tags -> 'performance' | 'training' | 'aerial' | 'acrobatics' | 'bts'
export const galleryItems = [
  { id: 1, src: 'perf-hoop-green', category: ['performance', 'aerial'], alt: 'Aerial hoop performer in dramatic green and blue stage lighting', size: 'tall' },
  { id: 2, src: 'gallery-hoop-1', category: ['performance', 'aerial'], alt: 'Aerial hoop artist mid-routine on stage', size: 'wide' },
  { id: 3, src: 'train-acro-splits', category: ['training', 'acrobatics'], alt: 'Acrobat performing a floor split on stage', size: 'normal' },
  { id: 4, src: 'perf-hoop-duo', category: ['performance', 'aerial', 'training'], alt: 'Two aerialists sharing a hoop routine', size: 'normal' },
  { id: 5, src: 'gallery-kids-1', category: ['training'], alt: 'Young student mid-jump during a showcase', size: 'normal' },
  { id: 6, src: 'perf-hoop-action', category: ['performance', 'aerial'], alt: 'Aerial hoop performer captured mid-spin', size: 'tall' },
  { id: 7, src: 'train-handstand-1', category: ['training', 'acrobatics'], alt: 'Handstand training on stage', size: 'normal' },
  { id: 8, src: 'gallery-hoop-2', category: ['performance', 'aerial'], alt: 'Aerial hoop artist in purple stage lighting', size: 'normal' },
  { id: 9, src: 'gallery-kids-pose', category: ['training'], alt: 'Young performer striking a pose on stage', size: 'normal' },
  { id: 10, src: 'gallery-hoop-3', category: ['performance', 'aerial', 'training'], alt: 'Duo aerial hoop pose with young performers', size: 'wide' },
  { id: 11, src: 'about-flexibility-bridge', category: ['training', 'acrobatics'], alt: 'Bridge and flexibility pose on a stage riser', size: 'tall' },
  { id: 12, src: 'gallery-hoop-4', category: ['performance', 'aerial'], alt: 'Aerial hoop performer in blue lighting', size: 'normal' },
  { id: 13, src: 'train-group-class-1', category: ['training'], alt: 'Group class lined up on stage', size: 'wide' },
  { id: 14, src: 'gallery-hoop-5', category: ['performance', 'aerial'], alt: 'Aerial hoop routine with dramatic shadow' , size: 'normal' },
  { id: 15, src: 'gallery-kids-2', category: ['training'], alt: 'Young student balancing on aerial hoop', size: 'normal' },
  { id: 16, src: 'gallery-hoop-6', category: ['performance', 'aerial'], alt: 'Aerial hoop performer reaching upward', size: 'normal' },
  { id: 17, src: 'perf-hoop-solo-2', category: ['performance', 'aerial'], alt: 'Solo aerial hoop performance', size: 'tall' },
  { id: 18, src: 'gallery-hoop-7', category: ['performance', 'aerial'], alt: 'Aerial hoop performer silhouette', size: 'normal' },
  { id: 19, src: 'train-strength-pose', category: ['training'], alt: 'Strength and movement training pose', size: 'normal' },
  { id: 20, src: 'gallery-hoop-8', category: ['performance', 'aerial'], alt: 'Aerial hoop routine, dynamic angle', size: 'normal' },
  { id: 21, src: 'gallery-kids-3', category: ['training'], alt: 'Group of young students on stage', size: 'wide' },
  { id: 22, src: 'gallery-hoop-9', category: ['performance', 'aerial'], alt: 'Aerial hoop performer with colorful lighting', size: 'normal' },
  { id: 23, src: 'bts-outdoor-training', category: ['bts', 'training'], alt: 'Casual outdoor acrobatics training session', size: 'normal' },
  { id: 24, src: 'bts-mats-1', category: ['bts'], alt: 'Behind-the-scenes floor training session', size: 'normal' },
  { id: 25, src: 'bts-mats-2', category: ['bts'], alt: 'Behind-the-scenes stretching and prep', size: 'wide' },
  { id: 26, src: 'gallery-floor-flow', category: ['training', 'acrobatics'], alt: 'Floor acrobatics movement flow', size: 'normal' },
  { id: 27, src: 'train-acro-bridge-kick', category: ['training', 'acrobatics'], alt: 'Bridge kick-over training' , size: 'normal' },
  { id: 28, src: 'train-kids-hoop-3', category: ['training', 'aerial'], alt: 'Young student on aerial hoop' , size: 'normal' },
  { id: 29, src: 'train-group-class-2', category: ['training'], alt: 'Group class showcase on stage', size: 'normal' },
  { id: 30, src: 'train-group-class-3', category: ['training'], alt: 'Students performing together on stage', size: 'normal' },
];

export const galleryFilters = [
  { id: 'all', label: 'All' },
  { id: 'performance', label: 'Performances' },
  { id: 'training', label: 'Training' },
  { id: 'aerial', label: 'Aerial' },
  { id: 'acrobatics', label: 'Acrobatics' },
  { id: 'bts', label: 'Behind the Scenes' },
];

export const aboutContent = {
  heading: 'The artist behind Eva Acrodance and Art',
  paragraphs: [
    '[ADD EVA\u2019S BIO — background, training history, and what drew her to acrobatics and aerial art.]',
    '[ADD EVA\u2019S PHILOSOPHY — how she approaches coaching and performance, and what students and clients can expect from working with her.]',
  ],
  highlights: [
    '[ADD YEARS TRAINING/TEACHING]',
    '[ADD DISCIPLINES OF SPECIALTY]',
    '[ADD NOTABLE EXPERIENCE — only real, verified details]',
  ],
};

export const services = [
  { title: 'Book a Performance', description: 'Weddings, corporate events, festivals and private celebrations.', anchor: 'book' },
  { title: 'Enquire About Training', description: 'Kids, teens and adult classes across aerial arts and acrobatics.', anchor: 'book' },
];

export const eventTypes = [
  'Wedding',
  'Corporate Event',
  'Private Party',
  'Festival',
  'Theatre / Stage Show',
  'Photo / Video Shoot',
  'Other',
];

export const trainingServices = [
  'Kids Classes',
  'Teens Classes',
  'Adult Classes',
  'Aerial Arts',
  'Acrobatics',
  'Handstands',
  'Flexibility',
  'Strength & Movement',
  'Kids Gymnastics',
  'Private / 1-on-1 Coaching',
];
