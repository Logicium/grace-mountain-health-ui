<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { content } from '@/data/site'
import HeroHome from '@/components/HeroHome.vue'
import PillSection from '@/components/PillSection.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import VlogCard from '@/components/VlogCard.vue'
import EhrCta from '@/components/EhrCta.vue'
import BaseButton from '@/components/BaseButton.vue'
import { fetchVlogPosts, type VlogPost } from '@/services/strapi'


const posts = ref<VlogPost[]>([])
onMounted(async () => { posts.value = (await fetchVlogPosts(3)) })
</script>

<template>
  <HeroHome />

  <!-- Services -->
  <section class="section" aria-labelledby="services-title">
    <div class="container">
      <SectionHeading
        :eyebrow="content.services.eyebrow"
        :title="content.services.title"
        :subtitle="content.services.subtitle"
        align="center"
        tag="h2"
      />
      <div class="grid grid-4">
        <ServiceCard
          v-for="s in content.services.items"
          :key="s.title"
          :title="s.title"
          :description="s.description"
          :tone="s.tone as 'cream' | 'sage' | 'sky' | 'terracotta'"
        />
      </div>
    </div>
  </section>

  <!-- Approach pill -->
  <PillSection tone="evergreen">
    <SectionHeading
      light
      :eyebrow="content.approach.eyebrow"
      :title="content.approach.title"
      :subtitle="content.approach.subtitle"
      tag="h2"
    />
    <div class="approach">
      <div v-for="(item, i) in content.approach.steps" :key="item.n" class="approach__step">
        <span class="approach__num">{{ item.n }}</span>
        <h3>{{ item.t }}</h3>
        <p>{{ item.d }}</p>
        <span v-if="i < 2" class="approach__dot" aria-hidden="true" />
      </div>
    </div>
  </PillSection>

  <!-- Founder spotlight -->
  <section class="section" aria-labelledby="founders-title">
    <div class="container">
      <SectionHeading
        :eyebrow="content.founders.eyebrow"
        :title="content.founders.title"
        :subtitle="content.founders.subtitle"
        tag="h2"
      />
      <div class="founders">
        <article v-for="p in content.founders.people" :key="p.name" class="founder">
          <h3 class="founder__name">{{ p.name }}</h3>
          <p class="founder__role">{{ p.role }}</p>
          <p>{{ p.bio }}</p>
        </article>
      </div>

      <div class="founders__cta">
        <BaseButton to="/about" variant="outline">{{ content.founders.ctaLabel }}</BaseButton>
      </div>
    </div>
  </section>

  <!-- Vlog preview -->
  <section class="section" aria-labelledby="vlog-title">
    <div class="container">
      <div class="vlog-head">
        <SectionHeading :eyebrow="content.vlog.eyebrow" :title="content.vlog.title" tag="h2" />
        <BaseButton to="/vlog" variant="outline">{{ content.vlog.allLabel }}</BaseButton>
      </div>
      <div class="grid grid-3">
        <VlogCard v-for="p in posts" :key="p.id" :post="p" />
      </div>
    </div>
  </section>

  <!-- EHR CTA -->
  <div class="container section">
    <EhrCta />
  </div>
</template>

<style scoped>
.approach {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-6);
}
@media (max-width: 800px) { .approach { grid-template-columns: 1fr; } }
.approach__step { position: relative; padding-right: var(--space-5); }
.approach__num {
  font-family: var(--font-serif);
  font-size: 2rem;
  color: var(--color-terracotta);
}
.approach__step h3 { color: var(--color-cream); margin: var(--space-3) 0 var(--space-2); }
.approach__step p { color: rgba(250,246,239,0.78); margin: 0; }
.approach__dot {
  display: none;
}

.vlog-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: var(--space-5);
  margin-bottom: var(--space-7);
}
@media (max-width: 700px) { .vlog-head { flex-direction: column; align-items: flex-start; } }

.founders {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  margin-top: var(--space-6);
}
@media (max-width: 800px) { .founders { grid-template-columns: 1fr; } }

.founder {
  background: var(--color-white);
  border-radius: var(--radius-lg);
  padding: clamp(1.5rem, 3vw, 2.25rem);
  box-shadow: var(--shadow-sm);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}
.founder__name {
  font-family: var(--font-serif);
  font-size: clamp(1.3rem, 2vw, 1.6rem);
  margin: 0;
  color: var(--color-evergreen-dark);
}
.founder__role { color: var(--color-mute); margin: 0 0 var(--space-3); font-weight: 600; letter-spacing: 0.04em; font-size: 0.9rem; }
.founder p:last-of-type { margin: 0; }

.founders__cta { margin-top: var(--space-6); display: flex; justify-content: center; }
</style>
