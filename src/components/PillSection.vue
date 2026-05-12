<script setup lang="ts">
type Tone = 'sage' | 'cream' | 'sky' | 'evergreen' | 'plain'

interface Props {
  tone?: Tone
  decor?: boolean
  contained?: boolean
  tag?: string
}

withDefaults(defineProps<Props>(), { tone: 'plain', decor: true, contained: true, tag: 'section' })

function decorAccent(tone: string) {
  return tone === 'evergreen' ? 'sage' : tone === 'sky' ? 'cream' : 'terracotta'
}
function decorAccent2(tone: string) {
  return tone === 'evergreen' ? 'terracotta' : tone === 'cream' ? 'sage' : 'sky'
}
</script>

<template>
  <component :is="tag" class="ps-wrap section">
    <div class="container">
      <div
        class="ps"
        :class="[`ps--${tone}`, { 'ps--plain': tone === 'plain' }]"
      >
        <div v-if="decor" class="bg-decor" aria-hidden="true">
          <span class="shape-circle ps-c1" :class="`shape-circle--${decorAccent(tone)}`" />
          <span class="shape-circle ps-c2" :class="`shape-circle--${decorAccent2(tone)}`" />
          <span class="shape-ring ps-r1" />
        </div>
        <div class="ps__inner" :class="{ 'container-tight': contained }">
          <slot />
        </div>
      </div>
    </div>
  </component>
</template>

<style scoped>
.ps-wrap { padding-block: clamp(2rem, 5vw, 4rem); }

.ps {
  position: relative;
  border-radius: clamp(40px, 8vw, 120px);
  padding: clamp(3rem, 8vw, 6.5rem) clamp(1.5rem, 6vw, 4.5rem);
  isolation: isolate;
  overflow: hidden;
}

.ps--plain { background: transparent; padding-inline: 0; border-radius: 0; }
.ps--sage { background: var(--color-sage-soft); }
.ps--cream { background: var(--color-cream-deep); }
.ps--sky { background: var(--color-sky); }
.ps--evergreen {
  background: var(--color-evergreen);
  color: var(--color-cream);
}
.ps--evergreen :slotted(h1),
.ps--evergreen :slotted(h2),
.ps--evergreen :slotted(h3) { color: var(--color-cream); }
.ps--evergreen :slotted(p) { color: rgba(250, 246, 239, 0.82); }

.ps__inner { position: relative; z-index: 1; }

.ps-c1 {
  width: clamp(220px, 26vw, 380px);
  aspect-ratio: 1;
  top: -12%;
  right: -8%;
  opacity: 0.55;
}
.ps-c2 {
  width: clamp(140px, 16vw, 220px);
  aspect-ratio: 1;
  bottom: -10%;
  left: -6%;
  opacity: 0.5;
}
.ps-r1 {
  width: clamp(180px, 22vw, 320px);
  aspect-ratio: 1;
  bottom: 12%;
  right: 18%;
  opacity: 0.55;
}
</style>
