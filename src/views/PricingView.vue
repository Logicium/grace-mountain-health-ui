<script setup lang="ts">
import PillSection from '@/components/PillSection.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import PricingTier from '@/components/PricingTier.vue'
import InsuranceGrid from '@/components/InsuranceGrid.vue'
import EhrCta from '@/components/EhrCta.vue'

const bundles = [
  {
    name: 'Starter Care',
    price: '$250',
    cadence: '3 visits',
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
    price: '$450',
    cadence: '6 visits · most popular',
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
    price: '$750',
    cadence: '12 visits',
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
    cadence: '10 shared visits',
    description: 'One bundle the whole household can pull from — plus 25% off in-house testing.',
    features: [
      '10 visits shared across family',
      '25% off in-house testing',
      'Coordinated family care',
      'Office or telehealth',
    ],
  },
]

const payAsYouGo = [
  { service: 'New Patient Visit', price: '$120' },
  { service: 'Follow-Up Visit', price: '$85' },
  { service: 'Sick Visit / Walk-In', price: '$95' },
  { service: 'Minor Injury Visit', price: '$115–$145' },
  { service: 'Wound Care Visit', price: '$95–$150' },
  { service: 'Telehealth New Patient', price: '$95' },
  { service: 'Telehealth Urgent Visit', price: '$85' },
  { service: 'Telehealth Follow-Up', price: '$65' },
]

const dpc = [
  { tier: 'Enrollment Fee (one-time)', price: '$99' },
  { tier: 'Ages 0–17', price: '$35 / mo' },
  { tier: 'Ages 18–29', price: '$50 / mo' },
  { tier: 'Ages 30–49', price: '$60 / mo' },
  { tier: 'Ages 50–64', price: '$70 / mo' },
  { tier: 'Ages 65+', price: '$75 / mo' },
]

const weight = [
  { program: 'Enrollment Fee (one-time)', price: '$99' },
  { program: 'Clinical Management Only', price: '$139 / mo' },
  { program: 'Semaglutide Program', price: 'Starting at $299 / mo' },
  { program: 'Tirzepatide Program', price: 'Starting at $399 / mo' },
]

const insurers = [
  { name: 'Blue Cross Blue Shield' },
  { name: 'UnitedHealthcare' },
  { name: 'Medicare' },
  { name: 'Colorado Medicaid' },
]

const faqs = [
  { q: 'Do I have to choose between insurance and cash pricing?', a: 'No. Cash options are always available, and we accept several major insurance plans. Super bills are available upon request so you can submit to your plan for reimbursement.' },
  { q: 'What is the DPC Membership?', a: 'Direct Primary Care (DPC) is a monthly membership for ongoing primary care access. Pricing is tiered by age, with a one-time enrollment fee.' },
  { q: 'How do Care Bundles work?', a: 'Care Bundles are prepaid sets of visits at a discounted per-visit rate. Use them for office or telehealth visits as you need them throughout the year.' },
  { q: 'Can I use an HSA or FSA?', a: 'Yes — for visits and most services. Itemized receipts and super bills are available on request.' },
  { q: 'Is medication included in the Weight & Wellness Program?', a: 'Medication pricing may vary by dose, formulation, pharmacy sourcing, and availability. All services and pricing are subject to clinical appropriateness and change.' },
]
</script>

<template>
  <section class="section">
    <div class="container">
      <SectionHeading
        eyebrow="Pricing"
        title="Simple, transparent pricing for our community."
        subtitle="All prices subject to change. Insurance coming soon. Cash options always available. Super bills available upon request."
        align="center"
        tag="h1"
      />
    </div>
  </section>

  <!-- Care Bundles -->
  <section class="section section--tight">
    <div class="container">
      <SectionHeading
        eyebrow="Care Bundles"
        title="Prepaid visit bundles."
        subtitle="Lock in a lower per-visit rate. Use bundles for in-office or telehealth visits."
        tag="h2"
      />
      <div class="grid grid-4 tiers">
        <PricingTier v-for="t in bundles" :key="t.name" :tier="t" />
      </div>
    </div>
  </section>

  <!-- Pay-As-You-Go -->
  <PillSection tone="cream">
    <SectionHeading
      eyebrow="Pay-As-You-Go"
      title="Single-visit pricing."
      subtitle="Pay only for the visit you need. No membership required."
      tag="h2"
    />
    <div class="ptable-wrap">
      <table class="ptable">
        <thead>
          <tr><th scope="col">Service</th><th scope="col">Price</th></tr>
        </thead>
        <tbody>
          <tr v-for="row in payAsYouGo" :key="row.service">
            <td>{{ row.service }}</td>
            <td class="ptable__price">{{ row.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </PillSection>

  <!-- DPC Membership -->
  <section class="section">
    <div class="container">
      <SectionHeading
        eyebrow="DPC Membership"
        title="Direct Primary Care membership."
        subtitle="A predictable monthly rate for ongoing access to primary care, with pricing tiered by age."
        tag="h2"
      />
      <div class="ptable-wrap">
        <table class="ptable">
          <thead>
            <tr><th scope="col">Membership Tier</th><th scope="col">Price</th></tr>
          </thead>
          <tbody>
            <tr v-for="row in dpc" :key="row.tier">
              <td>{{ row.tier }}</td>
              <td class="ptable__price">{{ row.price }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Weight & Wellness -->
  <PillSection tone="sage">
    <SectionHeading
      eyebrow="Weight &amp; Wellness Program"
      title="Medically guided weight management."
      subtitle="Clinical support with optional GLP-1 medication programs when appropriate."
      tag="h2"
    />
    <div class="ptable-wrap">
      <table class="ptable">
        <thead>
          <tr><th scope="col">Program</th><th scope="col">Price</th></tr>
        </thead>
        <tbody>
          <tr v-for="row in weight" :key="row.program">
            <td>{{ row.program }}</td>
            <td class="ptable__price">{{ row.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p class="fineprint">
      Medication pricing may vary by dose, formulation, pharmacy sourcing, and availability.
      All services and pricing subject to clinical appropriateness and change.
    </p>
  </PillSection>

  <!-- Insurance -->
  <section class="section">
    <div class="container">
      <SectionHeading
        eyebrow="Insurance"
        title="Insurance plans we accept."
        subtitle="More plans coming soon. Cash options always available. Super bills available upon request."
        tag="h2"
      />
      <InsuranceGrid :insurers="insurers" />
    </div>
  </section>

  <!-- FAQ -->
  <section class="section">
    <div class="container container-tight">
      <SectionHeading eyebrow="Common questions" title="The honest answers, up front." tag="h2" />
      <ul class="faq">
        <li v-for="f in faqs" :key="f.q" class="faq__item">
          <details>
            <summary>
              <span>{{ f.q }}</span>
              <span class="faq__chev" aria-hidden="true">+</span>
            </summary>
            <p>{{ f.a }}</p>
          </details>
        </li>
      </ul>
    </div>
  </section>

  <div class="container section"><EhrCta /></div>
</template>

<style scoped>
.tiers { align-items: stretch; }
.section--tight { padding-top: 0; }

/* ---------- Pricing tables ---------- */
.ptable-wrap {
  margin-top: var(--space-6);
  background: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
}
.ptable {
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
}
.ptable thead th {
  background: var(--color-evergreen);
  color: var(--color-cream);
  text-align: left;
  padding: var(--space-4) var(--space-5);
  font-family: var(--font-sans);
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
}
.ptable thead th:last-child { text-align: right; }
.ptable tbody td {
  padding: var(--space-4) var(--space-5);
  border-top: 1px solid var(--color-line);
  color: var(--color-ink);
}
.ptable tbody tr:first-child td { border-top: 0; }
.ptable tbody tr:nth-child(even) td { background: var(--color-cream-deep); }
.ptable__price {
  text-align: right;
  font-family: var(--font-serif);
  font-weight: 600;
  color: var(--color-evergreen-dark);
  white-space: nowrap;
}

.fineprint {
  margin-top: var(--space-5);
  font-size: 0.9rem;
  font-style: italic;
  color: var(--color-ink-soft);
  max-width: 70ch;
}

/* ---------- FAQ ---------- */
.faq { list-style: none; margin: 0; padding: 0; display: grid; gap: var(--space-3); }
.faq__item {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: 0 var(--space-6);
  box-shadow: var(--shadow-sm);
}
.faq summary {
  list-style: none;
  display: flex; align-items: center; justify-content: space-between; gap: var(--space-4);
  padding: var(--space-5) 0;
  font-family: var(--font-serif);
  font-size: 1.15rem;
  color: var(--color-evergreen-dark);
  cursor: pointer;
}
.faq summary::-webkit-details-marker { display: none; }
.faq__chev { font-size: 1.5rem; color: var(--color-evergreen); transition: transform var(--t-base); }
.faq details[open] .faq__chev { transform: rotate(45deg); }
.faq p { padding: 0 0 var(--space-5); margin: 0; max-width: 64ch; }
</style>
