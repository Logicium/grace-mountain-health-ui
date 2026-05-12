<script setup lang="ts">
import type { VlogPost } from '@/services/strapi'
defineProps<{ post: VlogPost; featured?: boolean }>()

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<template>
  <router-link :to="`/vlog/${post.slug}`" class="v" :class="{ 'v--featured': featured }">
    <div class="v__media">
      <img v-if="post.cover" :src="post.cover" :alt="post.title" loading="lazy" />
      <div v-else class="v__placeholder" aria-hidden="true">
        <svg viewBox="0 0 60 60" width="44" height="44"><circle cx="30" cy="30" r="28" fill="var(--color-sage)"/><polygon points="24,20 44,30 24,40" fill="var(--color-cream)"/></svg>
      </div>
      <span class="v__pill">{{ post.category || 'Wellness' }}</span>
    </div>
    <div class="v__body">
      <span class="v__date">{{ formatDate(post.publishedAt) }} · {{ post.readMinutes || 4 }} min</span>
      <h3 class="v__title">{{ post.title }}</h3>
      <p class="v__excerpt">{{ post.excerpt }}</p>
      <span class="v__more">Watch &amp; read →</span>
    </div>
  </router-link>
</template>

<style scoped>
.v {
  display: flex;
  flex-direction: column;
  background: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: transform var(--t-base), box-shadow var(--t-base);
  color: inherit;
  height: 100%;
}
.v:hover { transform: translateY(-4px); box-shadow: var(--shadow-md); color: inherit; }
.v__media { position: relative; aspect-ratio: 4/3; background: var(--color-sage-soft); }
.v__media img { width: 100%; height: 100%; object-fit: cover; }
.v__placeholder { width: 100%; height: 100%; display: grid; place-items: center; }
.v__pill {
  position: absolute; top: var(--space-4); left: var(--space-4);
  background: var(--color-cream);
  padding: 0.4rem 0.9rem;
  border-radius: var(--radius-pill);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-evergreen-dark);
}
.v__body { padding: var(--space-5) var(--space-6) var(--space-6); display: flex; flex-direction: column; gap: var(--space-3); }
.v__date { font-size: 0.82rem; color: var(--color-mute); letter-spacing: 0.05em; }
.v__title { margin: 0; font-size: 1.4rem; }
.v__excerpt { margin: 0; }
.v__more { color: var(--color-evergreen); font-weight: 600; margin-top: var(--space-2); }

.v--featured { grid-column: span 2; }
.v--featured .v__media { aspect-ratio: 16/9; }
.v--featured .v__title { font-size: 1.8rem; }
@media (max-width: 900px) { .v--featured { grid-column: span 1; } }
</style>
