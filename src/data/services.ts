/**
 * The services page as data: the chip cloud, the four pillars, the detailed
 * service list and the patient journey. The view renders these, and the
 * prerender writes the same records into the static /services page so the
 * crawler reads the real list rather than an empty app shell.
 */

export const serviceTags = [
  'Annual wellness exams', 'Same-day sick visits', 'Telehealth', 'Chronic disease management',
  'Diabetes & A1c', 'Hypertension', 'Thyroid', 'Weight management',
  'Pediatric & family care', 'Men’s & women’s health', 'Minor injury care', 'Wound care',
  'IV hydration', 'B12 & wellness injections', 'Point-of-care testing', 'Lab review',
]

export type PillarTone = 'evergreen' | 'sage' | 'cream' | 'terracotta'

export interface Pillar {
  key: string
  eyebrow: string
  title: string
  body: string
  bullets: string[]
  tone: PillarTone
}

export const pillars: Pillar[] = [
  {
    key: 'primary',
    eyebrow: '01 · Foundation',
    title: 'Primary care for the whole family',
    body: 'New patient visits, follow-ups, annual exams, medication management, and care coordination — all delivered with continuity and time.',
    bullets: ['Annual exams', 'Sick visits', 'Med refills', 'Lab review'],
    tone: 'evergreen',
  },
  {
    key: 'walkin',
    eyebrow: '02 · When you need us',
    title: 'Walk-in & same-day sick visits',
    body: 'Coughs, colds, fever, sore throat, ear pain, UTIs, rashes, and more — seen quickly, in clinic or by telehealth when appropriate.',
    bullets: ['Same-day visits', 'Telehealth', 'Rapid testing'],
    tone: 'sage',
  },
  {
    key: 'chronic',
    eyebrow: '03 · The long haul',
    title: 'Chronic disease management',
    body: 'Diabetes, hypertension, asthma, COPD, thyroid, and more — managed with steady follow-up and shared care plans.',
    bullets: ['Diabetes', 'Hypertension', 'Asthma / COPD'],
    tone: 'cream',
  },
  {
    key: 'weight',
    eyebrow: '04 · Whole-person',
    title: 'Weight & wellness',
    body: 'Medically guided weight management, IV hydration, and wellness injections — with GLP-1 medication options when clinically appropriate.',
    bullets: ['Weight management', 'IV hydration', 'B12 / wellness injections'],
    tone: 'terracotta',
  },
]

export interface DetailedService {
  eyebrow: string
  title: string
  body: string
  bullets: string[]
}

export const detailedServices: DetailedService[] = [
  {
    eyebrow: 'Primary care',
    title: 'Primary care services',
    body: 'Ongoing primary care for new and established patients across the lifespan.',
    bullets: [
      'New patient visits & follow-ups',
      'Annual wellness exams & routine physicals',
      'Preventive health screenings',
      'Medication refills & management',
      'Blood pressure checks & monitoring',
      'Lab ordering & review',
      'Referrals to specialists when needed',
      'Care coordination for complex needs',
    ],
  },
  {
    eyebrow: 'Acute care',
    title: 'Walk-in & same-day sick visits',
    body: 'For the things that just can’t wait for next month.',
    bullets: [
      'Cough, cold, sore throat, fever',
      'Flu-like & COVID-like symptoms',
      'Sinus pressure & ear pain',
      'Nausea, vomiting, diarrhea, mild dehydration',
      'Seasonal allergies & bronchitis symptoms',
      'Asthma flare-ups',
      'Urinary symptoms & UTIs',
      'Skin irritation, rashes, minor infections',
    ],
  },
  {
    eyebrow: 'Chronic conditions',
    title: 'Chronic disease management',
    body: 'Steady, relationship-based management for ongoing conditions.',
    bullets: [
      'High blood pressure & cholesterol',
      'Type 2 diabetes & prediabetes',
      'Asthma & COPD',
      'Thyroid disorders',
      'Obesity & weight-related concerns',
      'GERD / acid reflux',
      'Arthritis & chronic pain concerns',
      'Anxiety, depression & sleep concerns',
    ],
  },
  {
    eyebrow: 'Preventive',
    title: 'Preventive care & wellness',
    body: 'Get ahead of issues with screening, lifestyle counseling, and a plan tailored to you.',
    bullets: [
      'Annual wellness visits',
      'Preventive lab screening',
      'Diabetes & cholesterol screening',
      'Weight & BMI assessment',
      'Nutrition & lifestyle counseling',
      'Tobacco cessation support',
      'Age-appropriate screenings',
      'Specialty referral coordination',
    ],
  },
  {
    eyebrow: 'Men’s health',
    title: 'Men’s health',
    body: 'Annual exams and the screenings that matter most for men.',
    bullets: [
      'Annual men’s wellness exams',
      'Blood pressure & cholesterol screening',
      'Diabetes screening',
      'Weight & energy management',
      'Prostate health discussion',
      'Cardiovascular risk assessment',
      'Mental health screening',
    ],
  },
  {
    eyebrow: 'Women’s health',
    title: 'Women’s health',
    body: 'Care across every season — from annuals through menopause.',
    bullets: [
      'Annual wellness visits',
      'Menstrual & menopause-related concerns',
      'Thyroid screening',
      'Urinary symptoms',
      'Basic reproductive health counseling',
      'Breast health discussion',
      'Referral coordination (mammograms, gynecology, specialty care)',
    ],
  },
  {
    eyebrow: 'Family',
    title: 'Pediatric & family care',
    body: 'Care for children and teens, plus families seen together.',
    bullets: [
      'Sick visits for children & teens',
      'Fever, cough, cold, sore throat, ear pain',
      'Allergy & asthma support',
      'Sports & school physicals',
      'Basic wellness guidance',
      'Specialty pediatric referral coordination',
    ],
  },
  {
    eyebrow: 'Minor injury',
    title: 'Minor injury & wound care',
    body: 'On-site care for the bumps, scrapes, and strains of daily life.',
    bullets: [
      'Minor cuts, scrapes & burns',
      'Sprains & strains',
      'Minor wound checks & dressing',
      'Minor sports & work injuries',
      'Back, joint, and muscle pain',
      'Splinter / minor foreign body care',
    ],
  },
  {
    eyebrow: 'Respiratory',
    title: 'Respiratory care',
    body: 'Evaluation and management for everything from a cough to a flare.',
    bullets: [
      'Cough, congestion & sinus symptoms',
      'Bronchitis & sore throat',
      'Asthma & COPD symptoms',
      'Wheezing & shortness of breath evaluation',
      'Seasonal allergies',
      'Flu-like & COVID-like illness',
    ],
  },
  {
    eyebrow: 'Testing',
    title: 'Point-of-care testing',
    body: 'In-house rapid testing so we can act on results the same visit.',
    bullets: [
      'Rapid strep, flu, COVID & RSV',
      'Mononucleosis testing',
      'Urinalysis & urine pregnancy (hCG)',
      'Fingerstick glucose & A1c',
      'Urine microalbumin',
    ],
  },
  {
    eyebrow: 'Weight & wellness',
    title: 'Weight management',
    body: 'A medically guided program with optional GLP-1 medication support.',
    bullets: [
      'Weight loss consultation',
      'Lifestyle & nutrition counseling',
      'Metabolic health evaluation',
      'Lab review & follow-up monitoring',
      'GLP-1 medication discussion when appropriate',
      'Goal setting & accountability',
    ],
  },
  {
    eyebrow: 'IV & injections',
    title: 'IV hydration & wellness injections',
    body: 'Hydration and targeted injections, screened for safety first.',
    bullets: [
      'IV hydration & wellness IV therapy',
      'B12 & Lipo-Mino injections',
      'Vitamin D injections',
      'Tri-Immune injections',
      'Patient screening before treatment',
    ],
  },
  {
    eyebrow: 'Heart health',
    title: 'Cardiovascular support',
    body: 'Risk reduction, monitoring, and coordinated specialty referral when needed.',
    bullets: [
      'Blood pressure & cholesterol',
      'Diabetes- & obesity-related heart risk',
      'Palpitations & chest discomfort screening',
      'Lifestyle counseling',
      'Medication management',
      'Cardiology referral coordination',
    ],
  },
  {
    eyebrow: 'Digestive',
    title: 'Digestive health',
    body: 'Evaluation and management for common GI concerns.',
    bullets: [
      'Acid reflux / GERD',
      'Nausea, vomiting, diarrhea, constipation',
      'Abdominal discomfort & bloating',
      'Hemorrhoid concerns',
      'GI / colonoscopy referral coordination',
    ],
  },
  {
    eyebrow: 'Skin',
    title: 'Skin conditions',
    body: 'Care for the most common skin concerns we see.',
    bullets: [
      'Rashes, eczema, contact dermatitis',
      'Acne & hives',
      'Insect bites & allergic reactions',
      'Minor skin & fungal infections',
      'Wound checks & minor burns',
    ],
  },
  {
    eyebrow: 'Musculoskeletal',
    title: 'Musculoskeletal & mobility',
    body: 'Conservative management and referral coordination for pain and mobility concerns.',
    bullets: [
      'Back, neck, shoulder, knee & hip pain',
      'Sprains & strains',
      'Arthritis concerns',
      'Minor sports & overuse injuries',
      'Imaging, PT & orthopedics referrals',
    ],
  },
  {
    eyebrow: 'Telehealth',
    title: 'Telehealth services',
    body: 'Virtual visits when they’re the right fit for your care.',
    bullets: [
      'Lab review & medication follow-up',
      'Chronic condition follow-up',
      'Diabetes & blood pressure follow-up',
      'Weight management follow-up',
      'Minor illness / sick visits',
      'Lifestyle & wellness coaching',
    ],
  },
]

export const journey = [
  { n: '01', t: 'Reach out', d: 'Book online through our portal or give us a call — no pressure, no runaround.' },
  { n: '02', t: 'Your first visit', d: 'We take the time to get a full picture: history, goals, and what matters most to you.' },
  { n: '03', t: 'Care between visits', d: 'Med refills, lab review, and follow-ups handled in-clinic or by telehealth.' },
  { n: '04', t: 'Care that grows with you', d: 'Your plan evolves alongside your life. We stay in your corner for the long haul.' },
]
