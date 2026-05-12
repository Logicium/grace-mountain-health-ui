<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteNav from '@/components/SiteNav.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <a class="skip" href="#main">Skip to main content</a>
  <SiteNav />
  <main id="main">
    <RouterView v-slot="{ Component, route }">
      <transition name="page" mode="out-in">
        <div :key="route.path" class="route-wrap">
          <component :is="Component" />
        </div>
      </transition>
    </RouterView>
  </main>
  <SiteFooter />
</template>

<style scoped>
.skip {
  position: absolute;
  left: 1rem;
  top: 1rem;
  background: var(--color-evergreen);
  color: var(--color-cream);
  padding: 0.5rem 1rem;
  border-radius: var(--radius-pill);
  z-index: 100;
  transform: translateY(-200%);
  transition: transform var(--t-base);
}
.skip:focus { transform: translateY(0); }

.route-fallback { min-height: 60vh; }

.page-enter-active,
.page-leave-active { transition: opacity var(--t-base) var(--ease-out), transform var(--t-base) var(--ease-out); }
.page-enter-from { opacity: 0; transform: translateY(8px); }
.page-leave-to { opacity: 0; transform: translateY(-4px); }
</style>
