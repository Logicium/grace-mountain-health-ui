<script setup lang="ts">
import PillSection from '@/components/PillSection.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import EhrCta from '@/components/EhrCta.vue'
import { detailedServices as detailed, journey, pillars, serviceTags as tags } from '@/data/services'
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
