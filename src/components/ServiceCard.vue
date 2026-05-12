<script setup lang="ts">
interface Props {
  title: string
  description: string
  icon?: string
  tone?: 'cream' | 'sage' | 'sky' | 'terracotta'
}
withDefaults(defineProps<Props>(), { tone: 'cream' })
</script>

<template>
  <article class="card" :class="`card--${tone}`">
    <div class="card__icon" aria-hidden="true">
      <span v-if="icon">{{ icon }}</span>
      <svg v-else viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 21s-7-4.5-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.5-7 10-7 10" /><path d="M3 11h6l1-3 2 6 1-3h8" />
      </svg>
    </div>
    <h3 class="card__title">{{ title }}</h3>
    <p class="card__desc">{{ description }}</p>
    <slot />
  </article>
</template>

<style scoped>
.card {
  position: relative;
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  background: var(--color-white);
  box-shadow: var(--shadow-sm);
  transition: transform var(--t-base), box-shadow var(--t-base);
  height: 100%;
  display: flex;
  flex-direction: column;
}
.card:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); }

.card--cream { background: var(--color-cream-deep); }
.card--sage { background: var(--color-sage-soft); }
.card--sky { background: var(--color-sky); }
.card--terracotta { background: var(--color-terracotta); color: var(--color-evergreen-dark); }

.card__icon {
  width: 56px; height: 56px;
  border-radius: var(--radius-pill);
  background: var(--color-white);
  color: var(--color-evergreen);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--space-5);
  font-size: 1.25rem;
  box-shadow: var(--shadow-sm);
}
.card__title { font-size: 1.35rem; margin: 0 0 var(--space-3); }
.card__desc { margin: 0; }
</style>
