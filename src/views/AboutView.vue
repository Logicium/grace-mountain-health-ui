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

  <!-- Founder bios -->
  <section class="section">
    <div class="container">
      <SectionHeading
        eyebrow="Meet the founders"
        title="A husband-and-wife team rooted in the community."
        subtitle="Jeff and Dena Lewis founded Grace Mountain Health & Wellness with a shared vision for accessible, relationship-centered care."
        tag="h2"
      />

      <article class="bio">
        <header class="bio__head">
          <h3 class="bio__name">Jeff Lewis, BSN, RN, NRP</h3>
          <p class="bio__role">Co-Founder</p>
        </header>
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
      </article>

      <article class="bio">
        <header class="bio__head">
          <h3 class="bio__name">Dena Lewis, DNP, AGACNP-BC, RN</h3>
          <p class="bio__role">Co-Founder &amp; Provider</p>
        </header>
        <p>
          Dr. Dena Lewis is a doctoral-prepared Nurse Practitioner with more than 25
          years of healthcare experience serving patients across Colorado, New Mexico,
          West Virginia, and Northern Virginia. Her journey began in the Eastern
          Panhandle of West Virginia and the greater Washington D.C. and Baltimore
          metropolitan area, where she gained experience in larger hospital systems
          and higher-acuity environments — beginning in emergency room registration
          and advancing through roles as an ER technician, cardiology technician,
          registered nurse, and ultimately a Doctorally prepared Nurse Practitioner.
        </p>
        <p>
          After relocating to Southern Colorado in 2020, Dr. Lewis transitioned into
          rural healthcare and has since dedicated herself to serving patients
          throughout Southern Colorado and Northern New Mexico. Her diverse
          background across both large metropolitan systems and rural communities
          gives her a unique perspective on accessibility, continuity of care, and
          the importance of strong patient-provider relationships.
        </p>
        <p>
          For more than 11 years as a Nurse Practitioner, Dr. Lewis has cared for
          patients in cardiology, critical care, hospital medicine, emergency
          medicine, hospice, correctional healthcare, and underserved rural
          communities. Her clinical experience ranges from managing critically ill
          ICU patients and performing acute care procedures to treating chronic
          disease and providing preventative, wellness-focused, and
          relationship-centered care for individuals and families.
        </p>
        <p>
          Dr. Lewis earned her Bachelor of Science in Biology and later in Nursing
          before completing her Doctor of Nursing Practice degree in
          Adult-Gerontology Acute Care. She later completed post-doctoral Family
          Nurse Practitioner training through Maryville University, further
          expanding her background in comprehensive primary and family-centered
          care. She is also a member of Sigma Theta Tau International Honor Society
          of Nursing in recognition of her academic achievement, leadership, and
          commitment to excellence in nursing practice.
        </p>
        <p>
          Dr. Lewis believes healthcare should be collaborative, individualized, and
          grounded in trust. She works closely with each patient to develop
          realistic, well-rounded care plans that consider physical, emotional,
          spiritual, and financial well-being — empowering patients through
          education and identifying practical, cost-effective treatment options
          that align with their personal goals, values, and circumstances. Her
          professional interests include primary care, chronic disease management,
          metabolic health, weight management, lifestyle medicine, preventative
          care, and whole-person wellness. Guided by her Christian faith, she
          believes true healing involves caring for the body, mind, and spirit.
        </p>
      </article>

      <div class="closing">
        <div class="closing__text">
          <span class="eyebrow">Rooted in the community</span>
          <h3 class="closing__title">Local residents. Long-term commitment.</h3>
          <p>
            Jeff and Dena are deeply invested in the health and future of the
            communities they serve. Their commitment extends beyond the clinic
            walls — through compassionate care, trust, and long-term relationships.
          </p>
        </div>
        <aside class="closing__quote" aria-label="Pull quote">
          <svg class="closing__mark" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9 8c-3.5 1.6-6 5-6 9v7h9V15H7c0-2.5 1.5-4.5 4-5.6L9 8zm14 0c-3.5 1.6-6 5-6 9v7h9V15h-5c0-2.5 1.5-4.5 4-5.6L23 8z" fill="currentColor"/>
          </svg>
          <p>Rural families deserve care close to home.</p>
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
