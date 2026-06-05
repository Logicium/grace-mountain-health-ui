<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import BaseButton from './BaseButton.vue'

const route = useRoute()
const open = ref(false)
const scrolled = ref(false)
const ehrUrl = import.meta.env.VITE_EHR_URL

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/pricing', label: 'Pricing & Insurance' },
  { to: '/vlog', label: 'Vlog' },
  { to: '/contact', label: 'Contact' },
]

function onScroll() { scrolled.value = window.scrollY > 12 }
onMounted(() => { window.addEventListener('scroll', onScroll, { passive: true }); onScroll() })
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="nav" :class="{ 'nav--scrolled': scrolled, 'nav--open': open }">
    <div class="container nav__bar">
      <RouterLink to="/" class="nav__brand" @click="open = false" aria-label="Grace Mountain Health & Wellness — home">
        <img class="nav__logo" src="/logo.svg" alt="" aria-hidden="true" />
        <span class="nav__brand-text">
          <span class="nav__brand-line">Grace Mountain</span>
          <span class="nav__brand-sub">Health &amp; Wellness</span>
        </span>
      </RouterLink>

      <nav class="nav__links" :aria-expanded="open" aria-label="Primary">
        <RouterLink
          v-for="l in links"
          :key="l.to"
          :to="l.to"
          class="nav__link"
          :class="{ 'is-active': route.path === l.to }"
          @click="open = false"
        >{{ l.label }}</RouterLink>
        <BaseButton :href="ehrUrl" external variant="primary" size="md">
          Book Appointment
        </BaseButton>
      </nav>

      <button
        class="nav__toggle"
        :aria-expanded="open"
        aria-controls="primary-nav"
        aria-label="Toggle menu"
        @click="open = !open"
      >
        <span /><span /><span />
      </button>
    </div>
  </header>
</template>

<style scoped>
.nav {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: saturate(140%) blur(10px);
  background: rgba(250, 246, 239, 0.7);
  transition: background var(--t-base), box-shadow var(--t-base);
}
.nav--scrolled {
  background: rgba(250, 246, 239, 0.92);
  box-shadow: 0 1px 0 var(--color-line);
}
.nav__bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-5);
  padding-block: var(--space-4);
}
.nav__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-evergreen-dark);
}
.nav__brand-text { display: flex; flex-direction: column; line-height: 1.05; }
.nav__brand-line { font-family: var(--font-serif); font-size: 1.15rem; font-weight: 600; }
.nav__brand-sub { font-size: 0.72rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--color-mute); }
.nav__logo { height: 44px; width: auto; display: block; }

.nav__links {
  display: flex;
  align-items: center;
  gap: clamp(1rem, 2vw, 2rem);
}
.nav__link {
  position: relative;
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--color-ink);
  padding-block: 0.4rem;
}
.nav__link.is-active::after,
.nav__link:hover::after {
  content: '';
  position: absolute;
  left: 0; right: 0; bottom: -2px;
  height: 2px;
  background: var(--color-terracotta);
  border-radius: 2px;
}

.nav__toggle {
  display: none;
  width: 44px; height: 44px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
}
.nav__toggle span {
  width: 22px; height: 2px;
  background: var(--color-evergreen-dark);
  border-radius: 2px;
  transition: transform var(--t-base);
}

@media (max-width: 900px) {
  .nav__toggle { display: inline-flex; }
  .nav__links {
    position: absolute;
    top: 100%; left: 0; right: 0;
    flex-direction: column;
    align-items: stretch;
    background: var(--color-cream);
    padding: var(--space-5) var(--gutter) var(--space-7);
    gap: var(--space-4);
    box-shadow: var(--shadow-md);
    transform: translateY(-12px);
    opacity: 0;
    pointer-events: none;
    transition: opacity var(--t-base), transform var(--t-base);
  }
  .nav--open .nav__links { transform: translateY(0); opacity: 1; pointer-events: auto; }
}
</style>
