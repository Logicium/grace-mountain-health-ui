<script setup lang="ts">
interface Props { value: string; label: string; tone?: 'sage' | 'terracotta' | 'sky' | 'cream' }
withDefaults(defineProps<Props>(), { tone: 'sage' })
</script>

<template>
  <div class="stat" :class="`stat--${tone}`">
    <span class="stat__value">{{ value }}</span>
    <span class="stat__label">{{ label }}</span>
  </div>
</template>

<style scoped>
.stat {
  display: inline-flex;
  align-items: baseline;
  gap: 0.6rem;
  padding: 0.85rem 1.4rem;
  border-radius: var(--radius-pill);
  background: var(--color-cream-deep);
  color: var(--color-evergreen-dark);
}
.stat--sage { background: var(--color-sage-soft); }
.stat--terracotta { background: var(--color-terracotta); }
.stat--sky { background: var(--color-sky); }
.stat--cream { background: var(--color-cream-deep); }
.stat__value { font-family: var(--font-serif); font-size: 1.5rem; font-weight: 600; }
.stat__label { font-size: 0.85rem; color: var(--color-ink-soft); }
</style>
