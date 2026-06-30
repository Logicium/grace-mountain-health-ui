<script setup lang="ts">
interface Insurer { name: string; logo?: string }
defineProps<{ insurers: Insurer[] }>()
</script>

<template>
  <ul class="ig" role="list">
    <li v-for="i in insurers" :key="i.name" class="ig__item">
      <img v-if="i.logo" :src="i.logo" :alt="i.name" loading="lazy" />
      <span v-else>{{ i.name }}</span>
    </li>
  </ul>
</template>

<style scoped>
.ig {
  list-style: none;
  margin: 0; padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: var(--space-4);
}
.ig__item {
  background: var(--color-white);
  border-radius: var(--radius-pill);
  padding: 1.1rem var(--space-5);
  display: grid;
  place-items: center;
  min-height: 70px;
  font-weight: 600;
  color: var(--color-evergreen-dark);
  box-shadow: var(--shadow-sm);
}
.ig__item img { max-height: 40px; max-width: 100%; width: auto; }
</style>
