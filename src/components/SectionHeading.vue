<script setup lang="ts">
interface Props {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  light?: boolean
  tag?: 'h1' | 'h2' | 'h3'
}

withDefaults(defineProps<Props>(), { align: 'left', tag: 'h2', light: false })
</script>

<template>
  <header class="sh" :class="[`sh--${align}`, { 'sh--light': light }]">
    <span v-if="eyebrow" class="eyebrow">{{ eyebrow }}</span>
    <component :is="tag" class="sh__title">{{ title }}</component>
    <p v-if="subtitle" class="sh__sub">{{ subtitle }}</p>
  </header>
</template>

<style scoped>
.sh {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  max-width: 60ch;
  margin-bottom: var(--space-7);
}
.sh--center { align-items: center; text-align: center; margin-inline: auto; }
.sh__title { margin: 0; }
.sh__sub {
  font-size: 1.05rem;
  color: var(--color-ink-soft);
  margin: 0;
}
.sh--light .sh__sub { color: rgba(250, 246, 239, 0.78); }
.sh--light .sh__title { color: var(--color-cream); }
.sh--light .eyebrow { color: var(--color-sage); }
</style>
