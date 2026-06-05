<script setup lang="ts">
import { onMounted, ref } from 'vue'
import HeroHome from '@/components/HeroHome.vue'
import PillSection from '@/components/PillSection.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import VlogCard from '@/components/VlogCard.vue'
import EhrCta from '@/components/EhrCta.vue'
import BaseButton from '@/components/BaseButton.vue'
import { fetchVlogPosts, type VlogPost } from '@/services/strapi'

const services = [
  { title: 'Primary care for the whole family', description: 'New patient visits, follow-ups, annual exams, lab review, and care coordination — delivered with continuity and time.', tone: 'cream' as const },
  { title: 'Walk-in & same-day sick visits', description: 'Coughs, colds, fever, sore throat, ear pain, UTIs, and more — seen quickly, in clinic or by telehealth when appropriate.', tone: 'sage' as const },
  { title: 'Chronic disease management', description: 'Diabetes, hypertension, asthma, thyroid, and more — managed with steady follow-up and shared care plans.', tone: 'sky' as const },
  { title: 'Weight & wellness', description: 'Medically guided weight management, IV hydration, and wellness injections — with GLP-1 options when appropriate.', tone: 'terracotta' as const },
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
      title="Compassionate care, close to home."
      subtitle="Born from 24+ years in fire, EMS, and rural emergency medicine — Grace Mountain is built on the idea that rural families deserve high-quality healthcare without the runaround."
      tag="h2"
    />
    <div class="approach">
      <div v-for="(item, i) in [
        { n: '01', t: 'Listen first', d: 'Every visit starts with what matters most to you today.' },
        { n: '02', t: 'Plain language', d: 'No jargon. Clear answers and shared decisions.' },
        { n: '03', t: 'Stay close', d: 'Continuity, trust, and a team that knows your story.' },
      ]" :key="item.n" class="approach__step">
        <span class="approach__num">{{ item.n }}</span>
        <h3>{{ item.t }}</h3>
        <p>{{ item.d }}</p>
        <span v-if="i < 2" class="approach__dot" aria-hidden="true" />
      </div>
    </div>
  </PillSection>

  <!-- Founder spotlight -->
  <section class="section" aria-labelledby="founder-title">
    <div class="container founder">
      <div>
        <span class="eyebrow">Meet the founder</span>
        <h2 id="founder-title" class="founder__title">Jeff Lewis, BSN, RN, NRP</h2>
        <p class="founder__role">Co-Founder</p>
        <p>
          With more than 24 years of Fire and EMS experience across urban, critical care,
          and rural emergency medicine, Jeff founded Grace Mountain Health &amp; Wellness
          to bring accessible, relationship-centered primary care to the families of
          Southern Colorado and Northern New Mexico.
        </p>
        <BaseButton to="/about" variant="outline">Read his story</BaseButton>
      </div>
      <aside class="founder__card">
        <p class="founder__pull">
          “Rural families deserve high-quality healthcare close to home,
          delivered by providers who understand the people, values, and challenges of the region.”
        </p>
      </aside>
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

.founder {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: clamp(2rem, 5vw, 4rem);
  align-items: center;
}
@media (max-width: 900px) { .founder { grid-template-columns: 1fr; } }
.founder__title { font-size: clamp(1.8rem, 3vw, 2.4rem); margin: var(--space-3) 0 var(--space-2); }
.founder__role { color: var(--color-mute); margin: 0 0 var(--space-4); font-weight: 600; letter-spacing: 0.04em; }
.founder p { max-width: 56ch; margin: 0 0 var(--space-5); }
.founder__card {
  background: var(--color-sage-soft);
  border-radius: var(--radius-xl);
  padding: clamp(1.5rem, 4vw, 2.5rem);
  position: relative;
}
.founder__pull {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: clamp(1.05rem, 1.5vw, 1.25rem);
  color: var(--color-evergreen-dark);
  margin: 0;
}
</style>
