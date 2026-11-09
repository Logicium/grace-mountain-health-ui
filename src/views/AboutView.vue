<script setup lang="ts">
import PillSection from '@/components/PillSection.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import EhrCta from '@/components/EhrCta.vue'
import { aboutClosing as closing, aboutValues as values, founderBios } from '@/data/about'
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
        <h3>{{ v.t }}</h3>
        <p>{{ v.d }}</p>
      </div>
    </div>
  </PillSection>

  <!-- Founder bios -->
  <section class="section">
    <div class="container">
      <SectionHeading
        eyebrow="Meet the founders"
        title="A husband-and-wife team rooted in the community."
        subtitle="Jeff and Dena Lewis founded Grace Mountain Health & Wellness with a shared vision for accessible, relationship-centered care."
        tag="h2"
      />

      <article v-for="b in founderBios" :key="b.name" class="bio">
        <header class="bio__head">
          <h3 class="bio__name">{{ b.name }}</h3>
          <p class="bio__role">{{ b.role }}</p>
        </header>
        <p v-for="(para, i) in b.paragraphs" :key="i">{{ para }}</p>
      </article>

      <div class="closing">
        <div class="closing__text">
          <span class="eyebrow">{{ closing.eyebrow }}</span>
          <h3 class="closing__title">{{ closing.title }}</h3>
          <p>{{ closing.body }}</p>
        </div>
        <aside class="closing__quote" aria-label="Pull quote">
          <svg class="closing__mark" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9 8c-3.5 1.6-6 5-6 9v7h9V15H7c0-2.5 1.5-4.5 4-5.6L9 8zm14 0c-3.5 1.6-6 5-6 9v7h9V15h-5c0-2.5 1.5-4.5 4-5.6L23 8z" fill="currentColor"/>
          </svg>
          <p>{{ closing.quote }}</p>
        </aside>
      </div>
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
  padding: clamp(1.5rem, 4vw, 2.5rem);
  background: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}
.bio p { margin: 0; }
.bio__head { display: flex; flex-direction: column; gap: var(--space-1); margin-bottom: var(--space-2); }
.bio__name { margin: 0; font-family: var(--font-serif); font-size: clamp(1.3rem, 2vw, 1.6rem); color: var(--color-evergreen-dark); }
.bio__role { margin: 0; color: var(--color-mute); font-weight: 600; letter-spacing: 0.04em; font-size: 0.9rem; }
.bio__closing {
  margin: var(--space-6) auto 0;
  max-width: 72ch;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.05rem;
  color: var(--color-ink-soft);
  text-align: center;
}

.closing {
  margin-top: var(--space-7);
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: clamp(1.5rem, 4vw, 3rem);
  align-items: center;
}
@media (max-width: 900px) { .closing { grid-template-columns: 1fr; } }

.closing__title {
  font-family: var(--font-serif);
  font-size: clamp(1.6rem, 2.6vw, 2.1rem);
  margin: var(--space-3) 0 var(--space-3);
  color: var(--color-evergreen-dark);
}
.closing__text p {
  margin: 0;
  max-width: 50ch;
  font-size: 1.05rem;
  color: var(--color-ink-soft);
}

.closing__quote {
  position: relative;
  background: var(--color-sage-soft);
  border-radius: var(--radius-xl);
  padding: clamp(2rem, 4vw, 3rem);
}
.closing__quote p {
  margin: 0;
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 500;
  font-size: clamp(1.7rem, 3.2vw, 2.4rem);
  line-height: 1.18;
  color: var(--color-evergreen-dark);
}
.closing__mark {
  width: clamp(40px, 5vw, 64px);
  height: clamp(40px, 5vw, 64px);
  color: var(--color-terracotta);
  margin-bottom: var(--space-3);
  display: block;
}
</style>
