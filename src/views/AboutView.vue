<script setup lang="ts">
import PillSection from '@/components/PillSection.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import EhrCta from '@/components/EhrCta.vue'

const values = [
  { t: 'Listen first', d: 'Every visit starts with the question — what matters most to you today?' },
  { t: 'Plain language', d: 'No jargon, no patronizing. Just clear answers and shared decisions.' },
  { t: 'Local roots', d: 'Care designed for the families of Southern Colorado and Northern New Mexico.' },
  { t: 'Trust &amp; dignity', d: 'Every patient deserves to feel heard, valued, and treated with respect.' },
]
</script>

<template>
  <!-- Header -->
  <section class="section">
    <div class="container about-head">
      <div>
        <span class="eyebrow">About us</span>
        <h1 class="about-title">
          Guided by <em>Grace</em>.<br />Committed to wellness.
        </h1>
        <p class="about-lede">
          Grace Mountain Health &amp; Wellness was founded on a simple belief:
          rural families deserve high-quality healthcare close to home — delivered
          by providers who understand the people, values, and challenges of the region.
        </p>
        <p class="about-lede">
          We&rsquo;re a small, locally-owned primary care practice rooted in
          Trinidad, Colorado, serving communities across Southern Colorado and
          Northern New Mexico.
        </p>
      </div>
      <figure class="about-photo">
        <img src="/logo.svg" alt="Grace Mountain Health & Wellness logo" loading="lazy" />
      </figure>
    </div>
  </section>

  <!-- Values pill -->
  <PillSection tone="sage">
    <SectionHeading
      eyebrow="What we believe"
      title="Four ideas that shape every visit."
      align="center"
      tag="h2"
    />
    <div class="values">
      <div v-for="(v, i) in values" :key="v.t" class="values__item">
        <span class="values__num">{{ String(i + 1).padStart(2, '0') }}</span>
        <h3 v-html="v.t" />
        <p>{{ v.d }}</p>
      </div>
    </div>
  </PillSection>

  <!-- Founder bio -->
  <section class="section">
    <div class="container">
      <SectionHeading
        eyebrow="Meet the founder"
        title="Jeff Lewis, BSN, RN, NRP"
        subtitle="Co-Founder"
        tag="h2"
      />
      <article class="bio">
        <p>
          Jeff Lewis brings more than 24 years of Fire and EMS experience to
          Grace Mountain Health &amp; Wellness, serving communities in urban,
          critical care, and rural emergency medicine settings. Throughout his
          career as a paramedic, Jeff cared for patients during some of life&rsquo;s
          most difficult and urgent moments — experiences that shaped his
          commitment to compassionate, dependable healthcare.
        </p>
        <p>
          As a Registered Nurse and healthcare leader, Jeff understands the unique
          challenges facing rural communities across Southern Colorado and Northern
          New Mexico. His vision for Grace Mountain Health &amp; Wellness is rooted
          in restoring trust in healthcare by providing accessible,
          relationship-centered care focused on the needs of local families.
          Jeff&rsquo;s leadership style is built on integrity, preparedness,
          teamwork, and treating every patient with respect and dignity. He is
          passionate about building a clinic where patients feel heard, valued, and
          genuinely cared for close to home.
        </p>
        <p>
          As local residents themselves, Jeff and Dena are deeply invested in the
          health and future of the communities they serve. Grace Mountain Health
          &amp; Wellness was founded from a shared belief that rural families
          deserve high-quality healthcare close to home, delivered by providers
          who understand the people, values, and challenges of the region. Their
          commitment extends beyond the clinic walls — they are dedicated to
          strengthening the community they proudly call home through compassionate
          care, trust, and long-term relationships.
        </p>
      </article>
    </div>
  </section>

  <div class="container section"><EhrCta /></div>
</template>

<style scoped>
.about-head {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: clamp(2rem, 6vw, 5rem);
  align-items: center;
}
@media (max-width: 960px) { .about-head { grid-template-columns: 1fr; } }

.about-title { font-size: clamp(2.4rem, 5vw, 4rem); margin: var(--space-3) 0 var(--space-5); }
.about-title em { font-style: italic; color: var(--color-terracotta); }
.about-lede { font-size: 1.1rem; max-width: 56ch; margin: 0 0 var(--space-4); }

.about-photo {
  position: relative;
  margin: 0;
  aspect-ratio: 4/5;
  border-radius: clamp(120px, 24vw, 280px) clamp(40px, 8vw, 80px) clamp(120px, 24vw, 280px) clamp(40px, 8vw, 80px);
  overflow: hidden;
  background: var(--color-cream);
  box-shadow: var(--shadow-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(2rem, 5vw, 3rem);
}
.about-photo img { width: 85%; height: auto; object-fit: contain; }

.values {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-6);
  margin-top: var(--space-6);
}
@media (max-width: 900px) { .values { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 560px) { .values { grid-template-columns: 1fr; } }
.values__num { font-family: var(--font-serif); font-size: 1.6rem; color: var(--color-evergreen); }
.values__item h3 { margin: var(--space-2) 0; font-size: 1.2rem; }
.values__item p { margin: 0; }

.bio {
  margin-top: var(--space-6);
  max-width: 72ch;
  display: grid;
  gap: var(--space-4);
  font-size: 1.05rem;
  color: var(--color-ink);
}
.bio p { margin: 0; }
</style>
