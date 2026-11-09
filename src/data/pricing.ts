/**
 * The pricing page as data: care bundles, pay-as-you-go visits, the DPC
 * membership tiers, the weight and wellness program, the insurers the practice
 * is working to accept, and the questions patients ask about paying. The view
 * renders these and the prerender writes them into the static /pricing page.
 */

export interface Bundle {
  name: string
  price: string
  cadence: string
  description: string
  features: string[]
  featured?: boolean
  cta?: string
}

export const bundles: Bundle[] = [
  {
    name: 'Starter Care',
    price: '$255',
    cadence: '3 visits · save 15%',
    description: 'A simple starting point for new patients who want flexibility without a membership.',
    features: [
      '3 office or telehealth visits',
      'Use throughout the year',
      'Itemized receipt for HSA/FSA',
      'Super bill on request',
    ],
  },
  {
    name: 'Standard Care',
    price: '$480',
    cadence: '6 visits · most popular · save 20%',
    description: 'Our most chosen bundle — enough visits to cover ongoing care, sick visits, and follow-ups.',
    features: [
      '6 office or telehealth visits',
      'Best value per visit',
      'Itemized receipts for HSA/FSA',
      'Discounted in-house testing add-ons',
    ],
    featured: true,
    cta: 'Choose Standard Care',
  },
  {
    name: 'Max Care',
    price: '$780',
    cadence: '12 visits · save 35%',
    description: 'For patients managing more complex health needs who want unhurried, ongoing access.',
    features: [
      '12 office or telehealth visits',
      'Lowest per-visit cost',
      'Priority scheduling',
      'Discounted in-house testing add-ons',
    ],
  },
  {
    name: 'Family Flex',
    price: '$700',
    cadence: '10 shared visits · save 30%',
    description: 'One bundle the whole household can pull from — plus 25% off in-house testing.',
    features: [
      '10 visits shared across family',
      '25% off in-house testing',
      'Coordinated family care',
      'Office or telehealth',
    ],
  },
]

export const payAsYouGo = [
  { service: 'New Patient Visit', price: '$120' },
  { service: 'Follow-Up Visit', price: '$85' },
  { service: 'Sick Visit / Walk-In', price: '$95' },
  { service: 'Minor Injury Visit', price: '$115–$145' },
  { service: 'Wound Care Visit', price: '$95–$150' },
  { service: 'Telehealth New Patient', price: '$95' },
  { service: 'Telehealth Urgent Visit', price: '$85' },
  { service: 'Telehealth Follow-Up', price: '$65' },
]

export const dpc = [
  { tier: 'Enrollment Fee (one-time)', price: '$99' },
  { tier: 'Ages 0–17', price: '$35 / mo' },
  { tier: 'Ages 18–29', price: '$50 / mo' },
  { tier: 'Ages 30–49', price: '$60 / mo' },
  { tier: 'Ages 50–64', price: '$70 / mo' },
  { tier: 'Ages 65+', price: '$75 / mo' },
]

export const weight = [
  { program: 'Enrollment Fee (one-time)', price: '$99' },
  { program: 'Clinical Management Only', price: '$139 / mo' },
  { program: 'Semaglutide Program', price: 'Starting at $299 / mo' },
  { program: 'Tirzepatide Program', price: 'Starting at $399 / mo' },
]

export const insurers = [
  { name: 'Blue Cross Blue Shield', logo: '/insurers/blue-cross-blue-shield.svg' },
  { name: 'UnitedHealthcare', logo: '/insurers/unitedhealthcare.svg' },
  { name: 'Medicare', logo: '/insurers/medicare.svg' },
  { name: 'Colorado Medicaid', logo: '/insurers/colorado-medicaid.svg' },
]

export const pricingFaqs = [
  { q: 'Do you take insurance?', a: 'Not yet — insurance is coming soon. We\'re working to accept several major plans. For now, cash options are always available, and super bills are provided upon request so you can submit to your plan for reimbursement.' },
  { q: 'What is the DPC Membership?', a: 'Direct Primary Care (DPC) is a monthly membership for ongoing primary care access. Pricing is tiered by age, with a one-time enrollment fee.' },
  { q: 'How do Care Bundles work?', a: 'Care Bundles are prepaid sets of visits at a discounted per-visit rate. Use them for office or telehealth visits as you need them throughout the year.' },
  { q: 'Can I use an HSA or FSA?', a: 'Yes — for visits and most services. Itemized receipts and super bills are available on request.' },
  { q: 'Is medication included in the Weight & Wellness Program?', a: 'Medication pricing may vary by dose, formulation, pharmacy sourcing, and availability. All services and pricing are subject to clinical appropriateness and change.' },
]
