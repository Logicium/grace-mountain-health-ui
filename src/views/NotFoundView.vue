<script setup lang="ts">
import { RouterLink } from 'vue-router'
import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <section class="nf section">
    <div class="container nf__inner">
      <span class="shape-circle nf__c1 shape-circle--sage" aria-hidden="true" />
      <span class="shape-circle nf__c2 shape-circle--terracotta" aria-hidden="true" />
      <p class="nf__code">404</p>
      <h1>This page took a hike.</h1>
      <p>We couldn’t find what you were looking for. Let’s get you back on the trail.</p>
      <div class="nf__cta">
        <BaseButton to="/" variant="primary">Back to home</BaseButton>
        <RouterLink to="/contact" class="nf__link">or contact us →</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.nf { min-height: 70vh; display: grid; place-items: center; }
.nf__inner { position: relative; text-align: center; max-width: 560px; padding: var(--space-8) var(--gutter); }
.nf__code { font-family: var(--font-serif); font-size: clamp(5rem, 14vw, 9rem); margin: 0; color: var(--color-evergreen); line-height: 1; }
.nf__cta { display: flex; gap: var(--space-4); align-items: center; justify-content: center; margin-top: var(--space-5); }
.nf__link { color: var(--color-evergreen); font-weight: 600; }
.nf__c1 { width: 220px; height: 220px; left: -60px; top: 0; opacity: 0.4; }
.nf__c2 { width: 140px; height: 140px; right: -40px; bottom: 0; opacity: 0.6; }
</style>
