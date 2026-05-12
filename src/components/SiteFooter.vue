<script setup lang="ts">
import { RouterLink } from 'vue-router'
const phone = import.meta.env.VITE_PHONE
const email = import.meta.env.VITE_EMAIL
const ehr = import.meta.env.VITE_EHR_URL
const year = new Date().getFullYear()
</script>

<template>
  <footer class="ft">
    <div class="ft__pill container">
      <div class="ft__grid">
        <div class="ft__brand">
          <h3 class="ft__title">Care that meets you on the mountain.</h3>
          <p>Compassionate, modern healthcare for the life you actually live.</p>
          <a class="ft__cta" :href="ehr" target="_blank" rel="noopener">Schedule a visit →</a>
        </div>

        <div>
          <h4>Visit</h4>
          <p>134 W Main St<br />Trinidad, CO 81082</p>
        </div>

        <div>
          <h4>Reach us</h4>
          <p>
            <a :href="`tel:${phone}`">{{ phone }}</a><br />
            <a :href="`mailto:${email}`">{{ email }}</a>
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <ul class="ft__list">
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/services">Services</RouterLink></li>
            <li><RouterLink to="/pricing">Pricing &amp; Insurance</RouterLink></li>
            <li><RouterLink to="/vlog">Vlog</RouterLink></li>
            <li><RouterLink to="/contact">Contact</RouterLink></li>
          </ul>
        </div>
      </div>

      <div class="ft__base">
        <span>© {{ year }} Grace Mountain Health &amp; Wellness</span>
        <span>HIPAA-compliant • Accessible • In-network with major insurers</span>
      </div>

      <span class="shape-circle ft__c1 shape-circle--sage" aria-hidden="true" />
      <span class="shape-circle ft__c2 shape-circle--terracotta" aria-hidden="true" />
    </div>
  </footer>
</template>

<style scoped>
.ft { padding: var(--space-8) 0 var(--space-6); }
.ft__pill {
  position: relative;
  background: var(--color-evergreen);
  color: var(--color-cream);
  border-radius: clamp(40px, 7vw, 80px);
  padding: clamp(2.5rem, 6vw, 5rem) clamp(1.5rem, 5vw, 4rem);
  overflow: hidden;
  isolation: isolate;
}
.ft__grid {
  display: grid;
  gap: var(--space-7);
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  position: relative;
  z-index: 1;
}
@media (max-width: 900px) { .ft__grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 560px) { .ft__grid { grid-template-columns: 1fr; } }

.ft__title { font-family: var(--font-serif); color: var(--color-cream); font-size: clamp(1.6rem, 2.4vw, 2.2rem); margin: 0 0 var(--space-3); }
.ft p { color: rgba(250, 246, 239, 0.78); margin: 0 0 var(--space-3); }
.ft h4 { color: var(--color-cream); font-family: var(--font-sans); font-size: 0.78rem; letter-spacing: 0.18em; text-transform: uppercase; margin: 0 0 var(--space-3); }
.ft a { color: var(--color-cream); }
.ft a:hover { color: var(--color-terracotta); }

.ft__cta { display: inline-block; margin-top: var(--space-2); font-weight: 600; }
.ft__list { list-style: none; padding: 0; margin: 0; display: grid; gap: 0.5rem; }

.ft__base {
  position: relative; z-index: 1;
  display: flex; flex-wrap: wrap; gap: var(--space-3);
  justify-content: space-between;
  margin-top: var(--space-7); padding-top: var(--space-5);
  border-top: 1px solid rgba(250, 246, 239, 0.15);
  font-size: 0.85rem; color: rgba(250, 246, 239, 0.6);
}

.ft__c1 { width: 280px; height: 280px; bottom: -120px; right: -60px; opacity: 0.18; }
.ft__c2 { width: 160px; height: 160px; top: -50px; left: 30%; opacity: 0.5; }
</style>
