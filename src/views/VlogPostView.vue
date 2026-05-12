<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { fetchVlogPost, type VlogPost } from '@/services/strapi'
import EhrCta from '@/components/EhrCta.vue'

const route = useRoute()
const post = ref<VlogPost | null>(null)
const loading = ref(true)

async function load(slug: string) {
  loading.value = true
  post.value = await fetchVlogPost(slug)
  loading.value = false
}

onMounted(() => load(route.params.slug as string))
watch(() => route.params.slug, (s) => s && load(s as string))

function formatDate(d?: string) {
  return d ? new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) : ''
}
</script>

<template>
  <article class="post section">
    <div class="container container-tight">
      <RouterLink to="/vlog" class="post__back">← All posts</RouterLink>

      <p v-if="loading" class="post__state">Loading…</p>

      <template v-else-if="post">
        <header class="post__head">
          <span class="eyebrow">{{ post.category || 'Vlog' }}</span>
          <h1>{{ post.title }}</h1>
          <p class="post__meta">{{ formatDate(post.publishedAt) }} · {{ post.readMinutes || 4 }} min read</p>
        </header>

        <figure v-if="post.cover" class="post__cover">
          <img :src="post.cover" :alt="post.title" />
        </figure>

        <div class="post__body">
          <p class="post__lede">{{ post.excerpt }}</p>
          <div v-if="post.body" v-html="post.body" />
          <p v-else>
            This post is being prepared in our CMS and will appear here as soon as it’s published.
            In the meantime, browse our other posts or reach out with a question — we’d love to hear from you.
          </p>
        </div>
      </template>

      <p v-else class="post__state">We couldn’t find that post. <RouterLink to="/vlog">Back to the vlog →</RouterLink></p>
    </div>
  </article>

  <div class="container section"><EhrCta compact /></div>
</template>

<style scoped>
.post__back { display: inline-block; margin-bottom: var(--space-5); color: var(--color-evergreen); font-weight: 600; }
.post__head { margin-bottom: var(--space-7); }
.post__head h1 { font-size: clamp(2rem, 4vw, 3.2rem); margin: var(--space-3) 0; }
.post__meta { color: var(--color-mute); margin: 0; }
.post__cover { margin: 0 0 var(--space-7); border-radius: var(--radius-xl); overflow: hidden; }
.post__cover img { width: 100%; height: auto; display: block; }
.post__body { font-size: 1.1rem; line-height: 1.7; }
.post__lede { font-family: var(--font-serif); font-size: 1.4rem; color: var(--color-evergreen-dark); }
.post__state { padding: var(--space-8) 0; color: var(--color-mute); }
</style>
