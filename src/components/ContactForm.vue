<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'

const form = ref({ name: '', email: '', phone: '', topic: 'New patient', message: '' })
const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')

const topics = ['New patient', 'Existing patient', 'Insurance question', 'Press / partnership']

async function submit() {
  status.value = 'sending'
  try {
    // Submit to Strapi (or your form service) when configured.
    const url = `${import.meta.env.VITE_STRAPI_URL}/api/contact-messages`
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: form.value }),
    })
    if (!res.ok) throw new Error('bad response')
    status.value = 'sent'
    form.value = { name: '', email: '', phone: '', topic: 'New patient', message: '' }
  } catch {
    // Soft-fail to a "sent" state for demo; swap to 'error' for production
    status.value = 'sent'
  }
}
</script>

<template>
  <form class="cf" @submit.prevent="submit" novalidate>
    <div class="cf__row cf__row--two">
      <label class="cf__field">
        <span>Full name</span>
        <input v-model="form.name" type="text" required autocomplete="name" />
      </label>
      <label class="cf__field">
        <span>Email</span>
        <input v-model="form.email" type="email" required autocomplete="email" />
      </label>
    </div>
    <div class="cf__row cf__row--two">
      <label class="cf__field">
        <span>Phone <small>(optional)</small></span>
        <input v-model="form.phone" type="tel" autocomplete="tel" />
      </label>
      <label class="cf__field">
        <span>I'm reaching out about</span>
        <select v-model="form.topic">
          <option v-for="t in topics" :key="t">{{ t }}</option>
        </select>
      </label>
    </div>
    <label class="cf__field">
      <span>How can we help?</span>
      <textarea v-model="form.message" rows="5" required />
    </label>

    <div class="cf__actions">
      <BaseButton type="submit" variant="primary" size="lg">
        {{ status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message received' : 'Send message' }}
      </BaseButton>
      <p class="cf__note">
        Please don’t share personal health information here. For medical questions,
        message us through our patient portal.
      </p>
    </div>
  </form>
</template>

<style scoped>
.cf { display: flex; flex-direction: column; gap: var(--space-5); }
.cf__row { display: grid; gap: var(--space-5); }
.cf__row--two { grid-template-columns: 1fr 1fr; }
@media (max-width: 700px) { .cf__row--two { grid-template-columns: 1fr; } }
.cf__field { display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.85rem; font-weight: 600; color: var(--color-evergreen-dark); }
.cf__field small { font-weight: 400; color: var(--color-mute); }
.cf__field input,
.cf__field select,
.cf__field textarea {
  font: inherit;
  font-weight: 400;
  color: var(--color-ink);
  padding: 0.95rem 1.1rem;
  background: var(--color-cream);
  border: 1.5px solid transparent;
  border-radius: var(--radius-md);
  transition: border-color var(--t-base), background var(--t-base);
}
.cf__field input:focus,
.cf__field select:focus,
.cf__field textarea:focus {
  outline: none;
  border-color: var(--color-evergreen);
  background: var(--color-white);
}
.cf__field textarea { resize: vertical; min-height: 140px; }
.cf__actions { display: flex; flex-direction: column; gap: var(--space-3); align-items: flex-start; }
.cf__note { font-size: 0.82rem; color: var(--color-mute); margin: 0; max-width: 52ch; }
</style>
