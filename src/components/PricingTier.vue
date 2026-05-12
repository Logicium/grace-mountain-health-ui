<script setup lang="ts">
import BaseButton from './BaseButton.vue'

interface Tier {
  name: string
  price: string
  cadence: string
  description: string
  features: string[]
  featured?: boolean
  cta?: string
}

defineProps<{ tier: Tier }>()
const ehr = import.meta.env.VITE_EHR_URL
</script>

<template>
  <article class="tier" :class="{ 'tier--featured': tier.featured }">
    <header class="tier__head">
      <span v-if="tier.featured" class="tier__badge">Most chosen</span>
      <h3 class="tier__name">{{ tier.name }}</h3>
      <p class="tier__desc">{{ tier.description }}</p>
    </header>

    <div class="tier__price">
      <span class="tier__amount">{{ tier.price }}</span>
      <span class="tier__cadence">{{ tier.cadence }}</span>
    </div>

    <ul class="tier__features">
      <li v-for="f in tier.features" :key="f">
        <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
          <path d="M4 11l4 4 8-9" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>{{ f }}</span>
      </li>
    </ul>

    <BaseButton :href="ehr" external :variant="tier.featured ? 'cream' : 'primary'" size="lg">
      {{ tier.cta || 'Get started' }}
    </BaseButton>
  </article>
</template>

<style scoped>
.tier {
  position: relative;
  background: var(--color-white);
  border-radius: var(--radius-xl);
  padding: var(--space-7) var(--space-6);
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
  box-shadow: var(--shadow-sm);
  transition: transform var(--t-base), box-shadow var(--t-base);
}
.tier:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }

.tier--featured {
  background: var(--color-evergreen);
  color: var(--color-cream);
}
.tier--featured .tier__name,
.tier--featured .tier__amount { color: var(--color-cream); }
.tier--featured .tier__desc,
.tier--featured .tier__cadence { color: rgba(250,246,239,0.78); }
.tier--featured .tier__features li { color: rgba(250,246,239,0.92); }
.tier--featured .tier__features svg { color: var(--color-terracotta); }

.tier__head { display: flex; flex-direction: column; gap: var(--space-2); }
.tier__badge {
  align-self: flex-start;
  background: var(--color-terracotta);
  color: var(--color-evergreen-dark);
  padding: 0.3rem 0.8rem;
  border-radius: var(--radius-pill);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}
.tier__name { font-family: var(--font-serif); font-size: 1.6rem; margin: 0; color: var(--color-evergreen-dark); }
.tier__desc { margin: 0; }

.tier__price { display: flex; align-items: baseline; gap: 0.5rem; }
.tier__amount { font-family: var(--font-serif); font-size: 2.6rem; font-weight: 600; color: var(--color-evergreen-dark); }
.tier__cadence { color: var(--color-mute); font-size: 0.95rem; }

.tier__features { list-style: none; margin: 0; padding: 0; display: grid; gap: 0.7rem; }
.tier__features li { display: flex; gap: 0.6rem; align-items: flex-start; color: var(--color-ink-soft); }
.tier__features svg { color: var(--color-evergreen); margin-top: 2px; flex-shrink: 0; }
</style>
