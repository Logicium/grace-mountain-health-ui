<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import SectionHeading from '@/components/SectionHeading.vue'
import VlogCard from '@/components/VlogCard.vue'
import PillSection from '@/components/PillSection.vue'
import { fetchVlogPosts, type VlogPost } from '@/services/strapi'

const posts = ref<VlogPost[]>([])
const loading = ref(true)
const activeCategory = ref<string>('All')

onMounted(async () => {
  posts.value = await fetchVlogPosts(20)
  loading.value = false
})

const categories = computed(() => {
  const set = new Set<string>(['All'])
  posts.value.forEach((p) => p.category && set.add(p.category))
  return Array.from(set)
})

const filtered = computed(() =>
  activeCategory.value === 'All'
    ? posts.value
    : posts.value.filter((p) => p.category === activeCategory.value)
)

const featured = computed(() => filtered.value[0])
const rest = computed(() => filtered.value.slice(1))
</script>

<template>
  <section class="section">
    <div class="container">
      <SectionHeading
        eyebrow="Vlog"
        title="Notes from the exam room."
        subtitle="Short reads and videos on the questions our patients ask most. Updated weekly by the Grace Mountain team."
        align="center"
        tag="h1"
      />

      <div class="filters" role="tablist" aria-label="Vlog categories">
        <button
          v-for="c in categories"
          :key="c"
          role="tab"
          :aria-selected="activeCategory === c"
          class="filter"
          :class="{ 'filter--active': activeCategory === c }"
          @click="activeCategory = c"
        >{{ c }}</button>
      </div>

      <p v-if="loading" class="vlog-state">Loading posts…</p>
      <p v-else-if="!filtered.length" class="vlog-state">No posts in this category yet.</p>

      <div v-else class="vlog-grid">
        <VlogCard v-if="featured" :post="featured" featured />
        <VlogCard v-for="p in rest" :key="p.id" :post="p" />
      </div>
    </div>
  </section>

  <PillSection tone="sky">
    <SectionHeading
      eyebrow="Subscribe"
      title="One short health letter, every other Friday."
      subtitle="No spam, no fearmongering — just the practical things we tell our own families."
    />
    <form class="sub" @submit.prevent>
      <label class="visually-hidden" for="sub-email">Email address</label>
      <input id="sub-email" type="email" placeholder="you@example.com" required />
      <button type="submit" class="sub__btn">Subscribe</button>
    </form>
  </PillSection>
</template>

<style scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
  margin: var(--space-5) 0 var(--space-7);
  justify-content: center;
}
.filter {
  padding: 0.55rem 1.1rem;
  border-radius: var(--radius-pill);
  background: var(--color-cream-deep);
  color: var(--color-evergreen-dark);
  font-weight: 600;
  font-size: 0.9rem;
  transition: background var(--t-base), color var(--t-base);
}
.filter--active { background: var(--color-evergreen); color: var(--color-cream); }

.vlog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
}
@media (max-width: 960px) { .vlog-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 640px) { .vlog-grid { grid-template-columns: 1fr; } }

.vlog-state { text-align: center; padding: var(--space-8) 0; color: var(--color-mute); }

.sub {
  margin-top: var(--space-5);
  display: flex;
  gap: var(--space-3);
  background: var(--color-white);
  padding: 0.5rem 0.5rem 0.5rem 1.5rem;
  border-radius: var(--radius-pill);
  max-width: 520px;
  box-shadow: var(--shadow-md);
}
.sub input {
  flex: 1;
  border: 0;
  font: inherit;
  padding: 0.6rem 0;
  background: transparent;
  color: var(--color-ink);
}
.sub input:focus { outline: none; }
.sub__btn { padding: 0.85rem 1.4rem; border-radius: var(--radius-pill); background: var(--color-evergreen); color: var(--color-cream); font-weight: 600; transition: background var(--t-base); }
.sub__btn:hover { background: var(--color-evergreen-dark); }
</style>
