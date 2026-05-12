<script setup lang="ts">
type Variant = 'primary' | 'ghost' | 'outline' | 'cream'
type Size = 'md' | 'lg'

interface Props {
  to?: string
  href?: string
  variant?: Variant
  size?: Size
  iconRight?: boolean
  external?: boolean
  type?: 'button' | 'submit'
  ariaLabel?: string
}

withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  iconRight: true,
  type: 'button',
})
</script>

<template>
  <component
    :is="to ? 'router-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
    :type="!to && !href ? type : undefined"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :aria-label="ariaLabel"
    class="btn"
    :class="[`btn--${variant}`, `btn--${size}`]"
  >
    <span class="btn__label"><slot /></span>
    <span v-if="iconRight" class="btn__icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </span>
  </component>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85em 1.6em;
  border-radius: var(--radius-pill);
  font-family: var(--font-sans);
  font-weight: 600;
  font-size: 0.95rem;
  letter-spacing: 0.01em;
  line-height: 1;
  cursor: pointer;
  transition:
    transform var(--t-fast) var(--ease-out),
    background var(--t-base) var(--ease-out),
    color var(--t-base) var(--ease-out),
    box-shadow var(--t-base) var(--ease-out);
  white-space: nowrap;
  text-decoration: none;
}

.btn--lg { padding: 1em 1.9em; font-size: 1rem; }

.btn:hover { transform: translateY(-2px); }
.btn:active { transform: translateY(0); }

.btn--primary {
  background: var(--color-evergreen);
  color: var(--color-cream);
  box-shadow: var(--shadow-md);
}
.btn--primary:hover { background: var(--color-evergreen-dark); color: var(--color-cream); }

.btn--cream {
  background: var(--color-cream);
  color: var(--color-evergreen-dark);
  box-shadow: var(--shadow-md);
}
.btn--cream:hover { background: var(--color-white); }

.btn--outline {
  background: transparent;
  color: var(--color-evergreen-dark);
  box-shadow: inset 0 0 0 1.5px var(--color-evergreen);
}
.btn--outline:hover { background: var(--color-evergreen); color: var(--color-cream); }

.btn--ghost {
  background: transparent;
  color: var(--color-evergreen-dark);
  padding-inline: 0.4em;
}
.btn--ghost:hover { color: var(--color-evergreen); }

.btn__icon {
  display: inline-flex;
  transition: transform var(--t-base) var(--ease-out);
}
.btn:hover .btn__icon { transform: translateX(4px); }
</style>
