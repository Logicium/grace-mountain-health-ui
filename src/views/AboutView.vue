<script setup lang="ts">
import PillSection from '@/components/PillSection.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import StatPill from '@/components/StatPill.vue'
import EhrCta from '@/components/EhrCta.vue'
import TestimonialCard from '@/components/TestimonialCard.vue'

const values = [
  { t: 'Listen first', d: 'Every visit starts with the question — what matters most to you today?' },
  { t: 'Plain language', d: 'No jargon, no patronizing. Just clear answers and shared decisions.' },
  { t: 'Evidence + context', d: 'We follow the data, then translate it for the life you actually live.' },
  { t: 'Continuity', d: 'You see the same care team, every time. That’s how trust gets built.' },
]
</script>

<template>
  <!-- Header -->
  <section class="section">
    <div class="container about-head">
      <div>
        <span class="eyebrow">About us</span>
        <h1 class="about-title">
          A small mountain practice<br />with an outsized commitment to care.
        </h1>
        <p class="about-lede">
          Grace Mountain Health &amp; Wellness was founded on a simple frustration:
          modern healthcare too often forgets the human in front of it. We built the
          practice we wanted for our own families.
        </p>
        <div class="about-stats">
          <StatPill value="2,400+" label="patients served" tone="sage" />
          <StatPill value="98%" label="would refer a friend" tone="cream" />
          <StatPill value="12 yrs" label="of community care" tone="sky" />
        </div>
      </div>
      <figure class="about-photo">
        <img src="/about-team.jpg" alt="The Grace Mountain care team standing outside the clinic" loading="lazy" />
        <span class="shape-circle about-photo__c shape-circle--terracotta" aria-hidden="true" />
      </figure>
    </div>
  </section>

  <!-- Values pill -->
  <PillSection tone="sage">
    <SectionHeading
      eyebrow="What we believe"
      title="Four ideas that shape every visit."
      align="center"
      tag="h2"
    />
    <div class="values">
      <div v-for="(v, i) in values" :key="v.t" class="values__item">
        <span class="values__num">{{ String(i + 1).padStart(2, '0') }}</span>
        <h3>{{ v.t }}</h3>
        <p>{{ v.d }}</p>
      </div>
    </div>
  </PillSection>

  <!-- Team -->
  <section class="section">
    <div class="container">
      <SectionHeading
        eyebrow="Care team"
        title="The people you’ll actually see."
        subtitle="No call centers, no rotating providers. Real continuity, on purpose."
        tag="h2"
      />
      <div class="grid grid-3">
        <article v-for="m in [
          { n: 'Dr. Grace Holloway, MD', r: 'Founder · Family Medicine', img: '/team-grace.jpg' },
          { n: 'Maya Chen, FNP-BC', r: 'Family Nurse Practitioner', img: '/team-maya.jpg' },
          { n: 'Daniel Reyes, RD', r: 'Registered Dietitian', img: '/team-daniel.jpg' },
        ]" :key="m.n" class="member">
          <div class="member__photo"><img :src="m.img" :alt="m.n" loading="lazy" /></div>
          <h3>{{ m.n }}</h3>
          <p>{{ m.r }}</p>
        </article>
      </div>
    </div>
  </section>

  <!-- Voice -->
  <section class="section">
    <div class="container">
      <SectionHeading eyebrow="In their words" title="What patients tell us most often." tag="h2" />
      <div class="grid grid-2">
        <TestimonialCard
          quote="The first time my doctor sent me a follow-up text two days after my appointment, I almost cried. That had never happened before."
          name="Eliana M."
          role="Patient since 2025"
        />
        <TestimonialCard
          quote="They explained everything. Twice. Without making me feel small for needing it explained twice."
          name="Trevor K."
          role="Patient"
        />
      </div>
    </div>
  </section>

  <div class="container section"><EhrCta /></div>
</template>

<style scoped>
.about-head {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: center;
}
@media (max-width: 960px) { .about-head { grid-template-columns: 1fr; } }

.about-title { font-size: clamp(2.4rem, 5vw, 4rem); margin: var(--space-3) 0 var(--space-5); }
.about-lede { font-size: 1.1rem; max-width: 56ch; }
.about-stats { display: flex; flex-wrap: wrap; gap: var(--space-3); margin-top: var(--space-5); }

.about-photo {
  position: relative;
  margin: 0;
  aspect-ratio: 4/5;
  border-radius: clamp(120px, 24vw, 280px) clamp(40px, 8vw, 80px) clamp(120px, 24vw, 280px) clamp(40px, 8vw, 80px);
  overflow: hidden;
  background: var(--color-sage-soft);
  box-shadow: var(--shadow-lg);
}
.about-photo img { width: 100%; height: 100%; object-fit: cover; }
.about-photo__c { width: 160px; height: 160px; right: -40px; top: -40px; }

.values {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-6);
}
@media (max-width: 900px) { .values { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .values { grid-template-columns: 1fr; } }
.values__num { font-family: var(--font-serif); font-size: 1.6rem; color: var(--color-evergreen); }
.values__item h3 { margin: var(--space-2) 0; font-size: 1.2rem; }
.values__item p { margin: 0; }

.member { display: flex; flex-direction: column; gap: var(--space-3); }
.member__photo {
  aspect-ratio: 1;
  border-radius: 50%;
  overflow: hidden;
  background: var(--color-sage-soft);
  width: 100%;
  max-width: 280px;
}
.member__photo img { width: 100%; height: 100%; object-fit: cover; }
.member h3 { margin: var(--space-3) 0 0; font-size: 1.15rem; }
.member p { margin: 0; color: var(--color-mute); font-size: 0.95rem; }
</style>
