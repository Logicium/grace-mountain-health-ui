<script setup lang="ts">
import PillSection from '@/components/PillSection.vue'
import SectionHeading from '@/components/SectionHeading.vue'
import ContactForm from '@/components/ContactForm.vue'
import EhrCta from '@/components/EhrCta.vue'

const phone = import.meta.env.VITE_PHONE
const email = import.meta.env.VITE_EMAIL

const cards = [
  {
    title: 'New patient?',
    body: 'Welcome. Booking online takes about two minutes.',
    cta: { label: 'Book a visit', href: import.meta.env.VITE_EHR_URL, external: true },
  },
  {
    title: 'Already a patient?',
    body: 'Use the patient portal for refills, results, and secure messaging.',
    cta: { label: 'Open portal', href: import.meta.env.VITE_EHR_URL, external: true },
  },
  {
    title: 'Press or partnerships?',
    body: 'Use the form below — we’ll respond within two business days.',
  },
]
</script>

<template>
  <section class="section">
    <div class="container contact-head">
      <div>
        <span class="eyebrow">Contact</span>
        <h1 class="contact-title">Let’s talk.</h1>
        <p class="contact-lede">
          Whether you’re joining the practice, a long-time patient, or just have a question —
          we’re an easy phone call or message away.
        </p>

        <ul class="contact-meta">
          <li>
            <span>Call</span>
            <a :href="`tel:${phone}`">{{ phone }}</a>
          </li>
          <li>
            <span>Email</span>
            <a :href="`mailto:${email}`">{{ email }}</a>
          </li>
          <li>
            <span>Visit</span>
            107 Moores Canyon Rd, Trinidad, CO 81082<br /><em>Suite number coming soon</em>
          </li>
          <li>
            <span>Hours</span>
            Mon–Fri 8a–5p · Sat 9a–12p
          </li>
        </ul>
      </div>

      <div class="contact-cards">
        <article v-for="c in cards" :key="c.title" class="cc">
          <h3>{{ c.title }}</h3>
          <p>{{ c.body }}</p>
          <a v-if="c.cta" :href="c.cta.href" :target="c.cta.external ? '_blank' : undefined" rel="noopener" class="cc__link">
            {{ c.cta.label }} →
          </a>
        </article>
      </div>
    </div>
  </section>

  <PillSection tone="sage">
    <SectionHeading
      eyebrow="Send a message"
      title="Tell us a little about why you’re reaching out."
      subtitle="A real person reads every message — usually within one business day."
    />
    <ContactForm />
  </PillSection>

  <section class="section">
    <div class="container">
      <div class="map">
        <iframe
          title="Grace Mountain Health & Wellness location in Trinidad, Colorado"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-104.520%2C37.159%2C-104.480%2C37.179&layer=mapnik&marker=37.169%2C-104.500"
          loading="lazy"
        />
      </div>
    </div>
  </section>

  <div class="container section"><EhrCta compact /></div>
</template>

<style scoped>
.contact-head {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: clamp(2rem, 5vw, 5rem);
  align-items: start;
}
@media (max-width: 960px) { .contact-head { grid-template-columns: 1fr; } }

.contact-title { font-size: clamp(2.4rem, 5vw, 4rem); margin: var(--space-3) 0; }
.contact-lede { font-size: 1.1rem; max-width: 50ch; }

.contact-meta { list-style: none; padding: 0; margin: var(--space-6) 0 0; display: grid; gap: var(--space-4); }
.contact-meta li { display: grid; grid-template-columns: 90px 1fr; gap: var(--space-4); align-items: baseline; }
.contact-meta span {
  font-size: 0.78rem; letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--color-evergreen); font-weight: 600;
}

.contact-cards { display: grid; gap: var(--space-4); }
.cc {
  background: var(--color-white);
  padding: var(--space-5) var(--space-6);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}
.cc h3 { margin: 0 0 var(--space-2); font-size: 1.15rem; }
.cc p { margin: 0 0 var(--space-3); }
.cc__link { color: var(--color-evergreen); font-weight: 600; }

.map {
  border-radius: var(--radius-xl);
  overflow: hidden;
  aspect-ratio: 21/9;
  box-shadow: var(--shadow-md);
}
.map iframe { width: 100%; height: 100%; border: 0; display: block; }
</style>
