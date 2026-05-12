<script setup lang="ts">
import PillSection from '@/components/PillSection.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import PricingTier from '@/components/PricingTier.vue'
import InsuranceGrid from '@/components/InsuranceGrid.vue'
import EhrCta from '@/components/EhrCta.vue'

const tiers = [
  {
    name: 'Visit-based',
    price: '$0–$45',
    cadence: 'typical copay with insurance',
    description: 'Standard primary care covered by your insurance plan. No memberships, no surprises.',
    features: [
      'Annual wellness exams',
      'Sick visits, same week',
      'Lab orders & follow-up',
      'Patient portal & secure messaging',
    ],
  },
  {
    name: 'Mountain Membership',
    price: '$79',
    cadence: 'per month',
    description: 'For patients who want deeper access — and predictable cost — alongside their insurance.',
    features: [
      'Unlimited 24/7 messaging with your team',
      'Same-day virtual visits included',
      'Annual wellness blueprint',
      'Nutrition coaching (4 sessions / yr)',
      'Discounted in-house labs',
    ],
    featured: true,
    cta: 'Start membership',
  },
  {
    name: 'Self-pay visit',
    price: '$165',
    cadence: 'per office visit',
    description: 'Transparent rates for patients without insurance. Always quoted up front.',
    features: [
      '60-minute new patient visit',
      'Itemized receipt for HSA/FSA',
      'Discounted lab pricing',
      'Optional payment plans',
    ],
  },
]

const insurers = [
  { name: 'Aetna' },
  { name: 'BlueCross BlueShield' },
  { name: 'Cigna' },
  { name: 'UnitedHealthcare' },
  { name: 'Humana' },
  { name: 'Medicare' },
  { name: 'Tricare' },
  { name: 'NC Medicaid' },
]

const faqs = [
  { q: 'Do I have to pick between insurance and membership?', a: 'Not at all. Most members keep their insurance and use membership for the access and coaching insurance doesn’t cover.' },
  { q: 'Will you tell me what something costs before you do it?', a: 'Yes. We give written estimates for elective services and itemized self-pay rates on request.' },
  { q: 'Can I use an HSA or FSA?', a: 'Yes — for visits, labs, and most services. Memberships vary by plan; check with your administrator.' },
  { q: 'What if I’m uninsured?', a: 'Our self-pay rates are flat and clear. Ask about our hardship pricing if cost is a barrier.' },
]
</script>

<template>
  <section class="section">
    <div class="container">
      <SectionHeading
        eyebrow="Pricing & insurance"
        title="Clear costs. No bill-anxiety."
        subtitle="Three simple paths into care, plus in-network coverage with most major insurers."
        align="center"
        tag="h1"
      />
      <div class="grid grid-3 tiers">
        <PricingTier v-for="t in tiers" :key="t.name" :tier="t" />
      </div>
    </div>
  </section>

  <PillSection tone="cream">
    <SectionHeading
      eyebrow="Insurance"
      title="In-network with the plans your neighbors carry."
      subtitle="Don't see yours? Call us — many out-of-network plans still reimburse our visit rate."
      tag="h2"
    />
    <InsuranceGrid :insurers="insurers" />
  </PillSection>

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
