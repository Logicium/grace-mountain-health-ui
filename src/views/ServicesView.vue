<script setup lang="ts">
import PillSection from '@/components/PillSection.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import EhrCta from '@/components/EhrCta.vue'

const tags = [
  'Annual wellness exams', 'Same-day sick visits', 'Telehealth', 'Chronic disease management',
  'Diabetes & A1c', 'Hypertension', 'Thyroid', 'Weight management',
  'Pediatric & family care', 'Men’s & women’s health', 'Minor injury care', 'Wound care',
  'IV hydration', 'B12 & wellness injections', 'Point-of-care testing', 'Lab review',
]

const pillars = [
  {
    key: 'primary',
    eyebrow: '01 · Foundation',
    title: 'Primary care for the whole family',
    body: 'New patient visits, follow-ups, annual exams, medication management, and care coordination — all delivered with continuity and time.',
    bullets: ['Annual exams', 'Sick visits', 'Med refills', 'Lab review'],
    tone: 'evergreen' as const,
  },
  {
    key: 'walkin',
    eyebrow: '02 · When you need us',
    title: 'Walk-in & same-day sick visits',
    body: 'Coughs, colds, fever, sore throat, ear pain, UTIs, rashes, and more — seen quickly, in clinic or by telehealth when appropriate.',
    bullets: ['Same-day visits', 'Telehealth', 'Rapid testing'],
    tone: 'sage' as const,
  },
  {
    key: 'chronic',
    eyebrow: '03 · The long haul',
    title: 'Chronic disease management',
    body: 'Diabetes, hypertension, asthma, COPD, thyroid, and more — managed with steady follow-up and shared care plans.',
    bullets: ['Diabetes', 'Hypertension', 'Asthma / COPD'],
    tone: 'cream' as const,
  },
  {
    key: 'weight',
    eyebrow: '04 · Whole-person',
    title: 'Weight & wellness',
    body: 'Medically guided weight management, IV hydration, and wellness injections — with GLP-1 medication options when clinically appropriate.',
    bullets: ['Weight management', 'IV hydration', 'B12 / wellness injections'],
    tone: 'terracotta' as const,
  },
]

const detailed = [
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

const journey = [
  { n: '01', t: 'Reach out', d: 'Book online through our portal or give us a call — no pressure, no runaround.' },
  { n: '02', t: 'Your first visit', d: 'We take the time to get a full picture: history, goals, and what matters most to you.' },
  { n: '03', t: 'Care between visits', d: 'Med refills, lab review, and follow-ups handled in-clinic or by telehealth.' },
  { n: '04', t: 'Care that grows with you', d: 'Your plan evolves alongside your life. We stay in your corner for the long haul.' },
]
</script>

<template>
  <!-- Header: centered, with chip cloud -->
  <section class="svc-hero" aria-labelledby="svc-title">
    <div class="svc-hero__decor" aria-hidden="true">
      <span class="shape-pill svc-hero__pill" />
      <span class="shape-circle svc-hero__c1 shape-circle--sage" />
      <span class="shape-circle svc-hero__c2 shape-circle--terracotta" />
      <span class="shape-ring svc-hero__r" />
    </div>
    <div class="container svc-hero__inner">
      <span class="eyebrow">Services · Trinidad, CO</span>
      <h1 id="svc-title" class="svc-hero__title">
        Primary care, walk-in visits,<br />
        and <em>whole-person</em> wellness.
      </h1>
      <p class="svc-hero__lede">
        Comprehensive primary care for families across Southern Colorado — from
        annual exams and chronic disease management to sick visits, minor injury
        care, weight management, and telehealth.
      </p>

      <ul class="svc-hero__tags" aria-label="What we treat">
        <li v-for="t in tags" :key="t">{{ t }}</li>
      </ul>
    </div>
  </section>

  <!-- Pillars: asymmetric bento -->
  <section class="section">
    <div class="container">
      <SectionHeading
        eyebrow="Care pillars"
        title="Four pillars. One care relationship."
        subtitle="Each pillar leans on the others — because health rarely lives in just one column."
        align="center"
        tag="h2"
      />
      <div class="pillars">
        <article
          v-for="p in pillars"
          :key="p.key"
          class="pillar"
          :class="[`pillar--${p.tone}`, `pillar--${p.key}`]"
        >
          <span class="pillar__eyebrow">{{ p.eyebrow }}</span>
          <h3 class="pillar__title">{{ p.title }}</h3>
          <p class="pillar__body">{{ p.body }}</p>
          <ul class="pillar__bullets">
            <li v-for="b in p.bullets" :key="b">{{ b }}</li>
          </ul>
          <span class="pillar__decor" aria-hidden="true" />
        </article>
      </div>
    </div>
  </section>

  <!-- Detailed services -->
  <PillSection tone="cream">
    <SectionHeading
      eyebrow="Every service"
      title="A closer look at what we offer."
      subtitle="If you don’t see what you need, ask — we’ll either help or point you to someone we trust."
      tag="h2"
    />
    <div class="svc-list">
      <article v-for="s in detailed" :key="s.title" class="svc-item">
        <span class="svc-item__eyebrow">{{ s.eyebrow }}</span>
        <h3 class="svc-item__title">{{ s.title }}</h3>
        <p class="svc-item__body">{{ s.body }}</p>
        <ul class="svc-item__list">
          <li v-for="b in s.bullets" :key="b">{{ b }}</li>
        </ul>
      </article>
    </div>
  </PillSection>

  <!-- Patient journey -->
  <PillSection tone="evergreen">
    <SectionHeading
      light
      eyebrow="What to expect"
      title="A care journey that respects your time."
      subtitle="From the first call to year-five visits, our process is designed around continuity."
      tag="h2"
    />
    <div class="journey">
      <div v-for="step in journey" :key="step.n" class="journey__step">
        <span class="journey__num">{{ step.n }}</span>
        <h3>{{ step.t }}</h3>
        <p>{{ step.d }}</p>
      </div>
    </div>
  </PillSection>

  <!-- CTA -->
  <div class="container section"><EhrCta /></div>
</template>

<style scoped>
/* ---------- Hero ---------- */
.svc-hero {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  padding-block: clamp(3rem, 8vw, 7rem);
  text-align: center;
}
.svc-hero__inner {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-5);
  max-width: 60rem;
}
.svc-hero__title {
  font-size: clamp(2.6rem, 6.5vw, 5rem);
  margin: 0;
  letter-spacing: -0.025em;
  line-height: 1.02;
}
.svc-hero__title em { font-style: italic; color: var(--color-terracotta); }
.svc-hero__lede {
  font-size: 1.15rem;
  max-width: 54ch;
  color: var(--color-ink-soft);
  margin: 0;
}

.svc-hero__tags {
  list-style: none;
  margin: var(--space-5) 0 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.55rem;
  max-width: 52rem;
}
.svc-hero__tags li {
  background: var(--color-white);
  border: 1px solid var(--color-line);
  color: var(--color-evergreen-dark);
  padding: 0.45rem 0.95rem;
  border-radius: var(--radius-pill);
  font-size: 0.85rem;
  font-weight: 500;
  box-shadow: var(--shadow-sm);
  transition: transform var(--t-base), background var(--t-base);
}
.svc-hero__tags li:hover { transform: translateY(-2px); background: var(--color-cream-deep); }
.svc-hero__tags li:nth-child(4n+1) { background: var(--color-sage-soft); border-color: transparent; }
.svc-hero__tags li:nth-child(4n+3) { background: var(--color-cream-deep); border-color: transparent; }

.svc-hero__decor { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
.svc-hero__pill {
  position: absolute;
  background: var(--color-sage-soft);
  border-top-left-radius: var(--radius-pill);
  border-top-right-radius: var(--radius-pill);
  width: min(120vw, 1400px);
  height: clamp(420px, 60vw, 760px);
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  opacity: 0.7;
}
.svc-hero__c1 { width: clamp(220px, 22vw, 360px); aspect-ratio: 1; top: 4%; left: -6%; opacity: 0.6; }
.svc-hero__c2 { width: clamp(160px, 16vw, 240px); aspect-ratio: 1; top: 14%; right: -4%; opacity: 0.7; }
.svc-hero__r  { width: clamp(180px, 20vw, 300px); aspect-ratio: 1; bottom: 4%; right: 12%; opacity: 0.45; }

/* ---------- Pillars (asymmetric bento) ---------- */
.pillars {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr;
  grid-template-rows: auto auto;
  gap: var(--space-5);
  margin-top: var(--space-6);
}
.pillar--primary  { grid-column: 1 / 2; grid-row: 1 / 3; }
.pillar--walkin   { grid-column: 2 / 3; grid-row: 1 / 2; }
.pillar--chronic  { grid-column: 3 / 4; grid-row: 1 / 2; }
.pillar--weight   { grid-column: 2 / 4; grid-row: 2 / 3; }

@media (max-width: 900px) {
  .pillars { grid-template-columns: 1fr 1fr; grid-template-rows: none; }
  .pillar--primary, .pillar--walkin, .pillar--chronic, .pillar--weight {
    grid-column: auto; grid-row: auto;
  }
  .pillar--primary { grid-column: 1 / -1; }
}
@media (max-width: 560px) {
  .pillars { grid-template-columns: 1fr; }
  .pillar--primary { grid-column: auto; }
}

.pillar {
  position: relative;
  isolation: isolate;
  overflow: hidden;
  border-radius: var(--radius-lg);
  padding: clamp(1.5rem, 3vw, 2.4rem);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  box-shadow: var(--shadow-sm);
  transition: transform var(--t-base), box-shadow var(--t-base);
  min-height: 220px;
}
.pillar:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }

.pillar--evergreen { background: var(--color-evergreen); color: var(--color-cream); }
.pillar--sage      { background: var(--color-sage-soft); }
.pillar--cream     { background: var(--color-cream-deep); }
.pillar--terracotta { background: var(--color-terracotta); color: var(--color-evergreen-dark); }

.pillar--primary { min-height: 100%; }
.pillar--primary .pillar__title { font-size: clamp(1.7rem, 3vw, 2.4rem); }
.pillar--primary .pillar__body { font-size: 1.05rem; max-width: 38ch; }

.pillar__eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 600;
  opacity: 0.85;
}
.pillar--evergreen .pillar__eyebrow { color: var(--color-sage); opacity: 1; }
.pillar__title { margin: 0; font-size: 1.3rem; }
.pillar__body  { margin: 0; }
.pillar--evergreen .pillar__body { color: rgba(250, 246, 239, 0.85); }

.pillar__bullets {
  list-style: none;
  padding: 0;
  margin: auto 0 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}
.pillar__bullets li {
  font-size: 0.82rem;
  font-weight: 500;
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.55);
  color: var(--color-evergreen-dark);
}
.pillar--evergreen .pillar__bullets li { background: rgba(250, 246, 239, 0.14); color: var(--color-cream); }
.pillar--terracotta .pillar__bullets li { background: rgba(255, 255, 255, 0.55); }

.pillar__decor {
  position: absolute;
  width: 220px; height: 220px;
  border-radius: 50%;
  right: -70px; bottom: -70px;
  background: rgba(255, 255, 255, 0.18);
  z-index: -1;
}
.pillar--evergreen .pillar__decor { background: rgba(167, 199, 167, 0.22); }

/* ---------- Detailed services list ---------- */
.svc-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-5);
  margin-top: var(--space-6);
}
@media (max-width: 960px) { .svc-list { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 620px) { .svc-list { grid-template-columns: 1fr; } }

.svc-item {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
  transition: transform var(--t-base), box-shadow var(--t-base);
}
.svc-item:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }

.svc-item__eyebrow {
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 600;
  color: var(--color-evergreen);
}
.svc-item__title { margin: var(--space-2) 0 var(--space-2); font-size: 1.2rem; color: var(--color-evergreen-dark); }
.svc-item__body { margin: 0 0 var(--space-3); color: var(--color-ink-soft); }
.svc-item__list { margin: 0; padding-left: 1.1rem; color: var(--color-ink); display: grid; gap: 0.3rem; }
.svc-item__list li { font-size: 0.95rem; }

/* ---------- Journey ---------- */
.journey {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-6);
}
@media (max-width: 900px) { .journey { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .journey { grid-template-columns: 1fr; } }
.journey__step h3 { color: var(--color-cream); margin: var(--space-3) 0 var(--space-2); font-size: 1.15rem; }
.journey__step p { color: rgba(250, 246, 239, 0.78); margin: 0; }
.journey__num {
  font-family: var(--font-serif);
  font-size: 2rem;
  color: var(--color-terracotta);
}
</style>
