<script setup lang="ts">
import { content } from '@/data/site'
import BaseButton from '@/components/BaseButton.vue'
import StatPill from '@/components/StatPill.vue'

const ehr = import.meta.env.VITE_EHR_URL
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <!-- decorative oversized shapes -->
    <div class="hero__decor" aria-hidden="true">
      <span class="shape-circle hero__c-evergreen" />
      <span class="shape-circle hero__c-sage" />
      <span class="shape-circle hero__c-terracotta" />
      <span class="shape-pill hero__pill" />
      <span class="shape-ring hero__ring" />
    </div>

    <div class="container hero__grid">
      <div class="hero__copy">
        <span class="eyebrow">Primary care &amp; wellness · Trinidad, CO</span>
        <h1 id="hero-title" class="hero__title">
          Guided by <em>Grace</em>.<br />
          Committed to wellness.
        </h1>
        <p class="hero__sub">
          Grace Mountain Health &amp; Wellness is a modern primary care practice in Trinidad, Colorado —
          built on long visits, real listening, and transparent, affordable pricing for our community.
        </p>

        <div class="hero__cta">
          <BaseButton :href="ehr" external variant="primary" size="lg">
            Book your first visit
          </BaseButton>
          <BaseButton to="/about" variant="ghost" :iconRight="false">
            Meet the team →
          </BaseButton>
        </div>

        <div class="hero__stats">
          <StatPill value="Same-week" label="appointments" tone="sage" />
          <StatPill value="Transparent" label="cash pricing" tone="cream" />
          <StatPill value="Telehealth" label="when appropriate" tone="sky" />
        </div>
      </div>

      <div class="hero__media">
        <div class="hero__photo">
          <img src="/hero-portrait.jpg" alt="A clinician greeting a patient in a sunlit exam room" loading="eager" />
        </div>
        <span class="hero__chip hero__chip--top">
          <span class="dot" /> Now welcoming new patients
        </span>
        <span class="hero__chip hero__chip--bot">
          Guided by Grace. Committed to wellness.
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  padding-block: clamp(3rem, 7vw, 7rem);
  overflow: hidden;
  isolation: isolate;
}

.hero__grid {
  display: grid;
  grid-template-columns: 1.05fr 1fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: center;
  position: relative;
  z-index: 1;
}
@media (max-width: 960px) { .hero__grid { grid-template-columns: 1fr; } }

.hero__copy { display: flex; flex-direction: column; gap: var(--space-5); }
.hero__title {
  font-size: var(--fs-display);
  margin: 0;
  letter-spacing: -0.025em;
  line-height: 1;
}
.hero__title em { font-style: italic; color: var(--color-terracotta); }
.hero__sub { font-size: 1.15rem; max-width: 52ch; }
.hero__cta { display: flex; flex-wrap: wrap; gap: var(--space-3); align-items: center; }
.hero__stats { display: flex; flex-wrap: wrap; gap: var(--space-3); margin-top: var(--space-3); }

.hero__media { position: relative; aspect-ratio: 4/5; }
.hero__photo {
  position: relative;
  width: 100%; height: 100%;
  border-radius: clamp(120px, 22vw, 260px) clamp(120px, 22vw, 260px) clamp(40px, 8vw, 80px) clamp(40px, 8vw, 80px);
  overflow: hidden;
  background: var(--color-sage-soft);
  box-shadow: var(--shadow-lg);
}
.hero__photo img { width: 100%; height: 100%; object-fit: cover; }

.hero__chip {
  position: absolute;
  background: var(--color-cream);
  padding: 0.7rem 1.1rem;
  border-radius: var(--radius-pill);
  font-size: 0.88rem;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: var(--shadow-md);
  color: var(--color-evergreen-dark);
}
.hero__chip--top { top: 8%; left: -8%; }
.hero__chip--bot { bottom: 6%; right: -6%; background: var(--color-terracotta); }
.hero__chip .dot { width: 8px; height: 8px; border-radius: 50%; background: var(--color-evergreen); display: inline-block; }

.hero__decor { position: absolute; inset: 0; z-index: 0; }
.hero__c-evergreen { width: 540px; height: 540px; right: -180px; top: -200px; background: var(--color-sage-soft); }
.hero__c-sage { width: 220px; height: 220px; left: -90px; bottom: 8%; background: var(--color-cream-deep); }
.hero__c-terracotta { width: 110px; height: 110px; left: 42%; top: 6%; background: var(--color-terracotta); opacity: 0.7; }
.hero__pill { width: 120%; height: 380px; left: -10%; bottom: -180px; background: var(--color-sky); opacity: 0.55; }
.hero__ring { width: 360px; height: 360px; right: 8%; bottom: -120px; }
</style>
