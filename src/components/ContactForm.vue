<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from './BaseButton.vue'
import { createApotomeForm } from '@/kit/forms'

/*
 * Contact runs through the Apotome Labs forms add-on rather than the retired
 * Strapi CMS: the submission lands in the practice's portal inbox and is
 * emailed to the front desk, with reply-to set to the person who wrote in.
 * The field keys match the "contact" form definition in the portal.
 */
const contact = createApotomeForm({ form: 'contact' })

const emptyForm = () => ({ name: '', email: '', phone: '', topic: 'New patient', message: '' })
const form = ref(emptyForm())
/* the decoy field; a real visitor never sees it, so it must stay empty */
const honeypot = ref('')
const status = ref<'idle' | 'sending' | 'sent' | 'error'>('idle')
const errorText = ref('')

const topics = ['New patient', 'Existing patient', 'Insurance question', 'Press / partnership']

async function submit() {
  if (status.value === 'sending') return
  status.value = 'sending'
  errorText.value = ''
  const result = await contact.submit({
    ...form.value,
    [contact.honeypotField]: honeypot.value,
  })
  if (result.ok) {
    status.value = 'sent'
    form.value = emptyForm()
  } else {
    status.value = 'error'
    errorText.value = result.error
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

    <!--
      Honeypot. Positioned off-screen rather than type="hidden": a hidden input
      is trivially skipped by a bot, a text input moved out of the viewport is
      not. Kept out of the tab order and the a11y tree.
    -->
    <div class="cf__hp" aria-hidden="true">
      <label :for="contact.honeypotField">Do not fill this in</label>
      <input :id="contact.honeypotField" v-model="honeypot" type="text" tabindex="-1" autocomplete="off" />
    </div>

    <div class="cf__actions">
      <BaseButton type="submit" variant="primary" size="lg">
        {{ status === 'sending' ? 'Sending…' : status === 'sent' ? 'Message received' : 'Send message' }}
      </BaseButton>
      <p v-if="status === 'error'" class="cf__error" role="alert">{{ errorText }}</p>
      <p v-else-if="status === 'sent'" class="cf__sent" role="status">
        Thanks, your message is on its way. We will be in touch soon.
      </p>
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
.cf__error { margin: 0; font-size: 0.9rem; color: #b4432f; }
.cf__sent { margin: 0; font-size: 0.9rem; color: var(--color-evergreen-dark); }

/* honeypot: out of sight and out of the tab order, but a real input */
.cf__hp {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
</style>
