<script setup lang="ts">
import BaseButton from './BaseButton.vue'
const ehr = import.meta.env.VITE_EHR_URL
const phone = import.meta.env.VITE_PHONE
defineProps<{ compact?: boolean }>()
</script>

<template>
  <section class="ehr" :class="{ 'ehr--compact': compact }" aria-label="Book an appointment">
    <div class="ehr__inner">
      <span class="eyebrow" style="color: var(--color-sage)">Patient Portal · EHR</span>
      <h2 class="ehr__title">Schedule, message, and view records — all in one place.</h2>
      <p class="ehr__sub">
        Our portal connects directly to your medical record. Book a visit in minutes,
        request refills, or chat securely with your care team.
      </p>
      <div class="ehr__actions">
        <BaseButton :href="ehr" external variant="cream" size="lg">Book an appointment</BaseButton>
        <BaseButton :href="`tel:${phone}`" variant="ghost" :iconRight="false">
          or call {{ phone }}
        </BaseButton>
      </div>
    </div>
    <span class="shape-circle ehr__c1 shape-circle--sage" aria-hidden="true" />
    <span class="shape-circle ehr__c2 shape-circle--terracotta" aria-hidden="true" />
    <span class="shape-ring ehr__r1" aria-hidden="true" />
  </section>
</template>

<style scoped>
.ehr {
  position: relative;
  background: var(--color-evergreen);
  color: var(--color-cream);
  border-radius: clamp(40px, 8vw, 100px);
  padding: clamp(3rem, 7vw, 6rem) clamp(1.5rem, 5vw, 4rem);
  overflow: hidden;
  isolation: isolate;
}
.ehr__inner { position: relative; z-index: 1; max-width: 56ch; }
.ehr__title { font-family: var(--font-serif); color: var(--color-cream); font-size: clamp(1.8rem, 3.5vw, 2.8rem); margin: var(--space-3) 0; }
.ehr__sub { color: rgba(250, 246, 239, 0.82); margin: 0 0 var(--space-6); }
.ehr__actions { display: flex; flex-wrap: wrap; gap: var(--space-3); align-items: center; }
.ehr__actions :deep(.btn--ghost) { color: var(--color-cream); }
.ehr__actions :deep(.btn--ghost:hover) { color: var(--color-terracotta); }

.ehr--compact { padding: clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 4vw, 3rem); }
.ehr--compact .ehr__title { font-size: clamp(1.4rem, 2.4vw, 2rem); }

.ehr__c1 { width: 360px; height: 360px; right: -100px; bottom: -140px; opacity: 0.18; }
.ehr__c2 { width: 140px; height: 140px; right: 18%; top: -40px; opacity: 0.7; }
.ehr__r1 { width: 220px; height: 220px; right: 22%; bottom: 8%; border-color: rgba(250,246,239,0.18); }
</style>
