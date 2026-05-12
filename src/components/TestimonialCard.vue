<script setup lang="ts">
interface Props { quote: string; name: string; role?: string; image?: string }
defineProps<Props>()
</script>

<template>
  <figure class="t">
    <svg class="t__mark" viewBox="0 0 40 40" aria-hidden="true">
      <text x="0" y="34" font-family="Georgia, serif" font-size="48" fill="currentColor">"</text>
    </svg>
    <blockquote class="t__quote">{{ quote }}</blockquote>
    <figcaption class="t__by">
      <span v-if="image" class="t__avatar"><img :src="image" :alt="name" loading="lazy" /></span>
      <span v-else class="t__avatar t__avatar--blank" aria-hidden="true" />
      <span>
        <span class="t__name">{{ name }}</span>
        <span v-if="role" class="t__role">{{ role }}</span>
      </span>
    </figcaption>
  </figure>
</template>

<style scoped>
.t {
  position: relative;
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
  height: 100%;
}
.t__mark { width: 36px; height: 36px; color: var(--color-terracotta); margin: 0; }
.t__quote { margin: 0; font-family: var(--font-serif); font-size: 1.2rem; line-height: 1.4; color: var(--color-evergreen-dark); }
.t__by { display: flex; align-items: center; gap: var(--space-3); margin-top: auto; }
.t__avatar { width: 44px; height: 44px; border-radius: 50%; overflow: hidden; background: var(--color-sage-soft); flex-shrink: 0; }
.t__avatar img { width: 100%; height: 100%; object-fit: cover; }
.t__name { display: block; font-weight: 600; color: var(--color-evergreen-dark); font-size: 0.95rem; }
.t__role { display: block; font-size: 0.82rem; color: var(--color-mute); }
</style>
