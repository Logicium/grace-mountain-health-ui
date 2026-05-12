<script setup lang="ts">
import { onMounted, ref } from 'vue'
import HeroHome from '@/components/HeroHome.vue'
import PillSection from '@/components/PillSection.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import TestimonialCard from '@/components/TestimonialCard.vue'
import VlogCard from '@/components/VlogCard.vue'
import EhrCta from '@/components/EhrCta.vue'
import BaseButton from '@/components/BaseButton.vue'
import { fetchVlogPosts, type VlogPost } from '@/services/strapi'

const services = [
  { title: 'Primary care, reimagined', description: 'Long visits, same-day messaging, and a care plan you understand. We treat you, not your chart.', tone: 'cream' as const },
  { title: 'Whole-person wellness', description: 'Nutrition, sleep, movement, and mental health woven into every visit — not bolted on as an add-on.', tone: 'sage' as const },
  { title: 'Women’s & family health', description: 'Annual exams, contraception, perimenopause, and pediatrics from infancy through adolescence.', tone: 'sky' as const },
  { title: 'Chronic condition coaching', description: 'Diabetes, blood pressure, autoimmune support — guided by data and the realities of your day.', tone: 'terracotta' as const },
]

const testimonials = [
  { quote: 'I’ve never had a doctor who actually remembered the small stuff between visits. It changes the whole experience.', name: 'Marisa O.', role: 'Patient since 2024' },
  { quote: 'Booking, refills, and lab results all in one place. The portal is the first one I’ve actually wanted to log into.', name: 'David W.', role: 'Patient' },
  { quote: 'Grace Mountain treats wellness as part of medicine, not separate from it. That’s rare.', name: 'Jenna R.', role: 'Patient since 2023' },
]

const posts = ref<VlogPost[]>([])
onMounted(async () => { posts.value = (await fetchVlogPosts(3)) })
</script>

<template>
  <HeroHome />

  <!-- Services -->
  <section class="section" aria-labelledby="services-title">
    <div class="container">
      <SectionHeading
        eyebrow="What we do"
        :title="'Care for the whole life — not just the visit.'"
        subtitle="A focused set of services delivered with depth, so you get attention instead of a hand-off."
        align="center"
        tag="h2"
      />
      <div class="grid grid-4">
        <ServiceCard v-for="s in services" :key="s.title" v-bind="s" />
      </div>
    </div>
  </section>

  <!-- Approach pill -->
  <PillSection tone="evergreen">
    <SectionHeading
      light
      eyebrow="Our approach"
      title="Modern medicine. Mountain pace."
      subtitle="We design every visit so the conversation comes first. The result is a relationship — and outcomes — that get better over time."
      tag="h2"
    />
    <div class="approach">
      <div v-for="(item, i) in [
        { n: '01', t: 'Listen deeply', d: 'Visits are 45–60 minutes because real care needs real time.' },
        { n: '02', t: 'Plan together', d: 'Your goals shape the plan — never the other way around.' },
        { n: '03', t: 'Stay close', d: 'Secure messaging, proactive check-ins, and easy follow-through.' },
      ]" :key="item.n" class="approach__step">
        <span class="approach__num">{{ item.n }}</span>
        <h3>{{ item.t }}</h3>
        <p>{{ item.d }}</p>
        <span v-if="i < 2" class="approach__dot" aria-hidden="true" />
      </div>
    </div>
  </PillSection>

  <!-- Testimonials -->
  <section class="section" aria-labelledby="t-title">
    <div class="container">
      <SectionHeading
        eyebrow="Patients say"
        title="Care that earns repeat visits — for the right reasons."
        align="center"
        tag="h2"
      />
      <div class="grid grid-3">
        <TestimonialCard v-for="t in testimonials" :key="t.name" v-bind="t" />
      </div>
    </div>
  </section>

  <!-- Vlog preview -->
  <section class="section" aria-labelledby="vlog-title">
    <div class="container">
      <div class="vlog-head">
        <SectionHeading eyebrow="From the vlog" title="Honest health, in plain language." tag="h2" />
        <BaseButton to="/vlog" variant="outline">All posts</BaseButton>
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
</style>
