<script setup lang="ts">
  export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  export type ButtonSize = 'sm' | 'md' | 'lg'

  interface Props {
    variant?: ButtonVariant
    size?: ButtonSize
    loading?: boolean
    disabled?: boolean
    block?: boolean
    type?: 'button' | 'submit' | 'reset'
  }

  const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    size: 'md',
    loading: false,
    disabled: false,
    block: false,
    type: 'button',
  })

  const emit = defineEmits<{
    click: [event: MouseEvent]
  }>()

  function handleClick(event: MouseEvent) {
    if (!props.loading && !props.disabled) emit('click', event)
  }
</script>

<template>
  <button
    :type="type"
    :class="[
      'v-btn',
      `v-btn--${variant}`,
      `v-btn--${size}`,
      { 'v-btn--loading': loading, 'v-btn--block': block },
    ]"
    :disabled="disabled || loading"
    :aria-busy="loading"
    @click="handleClick"
  >
    <span v-if="loading" class="v-btn__spinner" aria-hidden="true" />
    <span class="v-btn__content">
      <slot name="prefix" />
      <slot />
      <slot name="suffix" />
    </span>
  </button>
</template>

<style scoped>
  .v-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 1.125rem;
    border: 1px solid transparent;
    border-radius: var(--v-radius-md);
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5;
    white-space: nowrap;
    cursor: pointer;
    user-select: none;
    transition:
      background var(--v-duration) var(--v-easing),
      border-color var(--v-duration) var(--v-easing),
      opacity var(--v-duration) var(--v-easing),
      transform 0.1s var(--v-easing);
  }

  .v-btn:focus-visible {
    outline: 2px solid var(--v-color-primary);
    outline-offset: 2px;
  }

  .v-btn:active:not(:disabled) {
    transform: scale(0.97);
  }

  .v-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Variants */
  .v-btn--primary {
    background: var(--v-color-primary);
    color: var(--v-text-inverse);
  }
  .v-btn--primary:hover:not(:disabled) {
    background: var(--v-color-primary-dark);
  }

  .v-btn--secondary {
    background: var(--v-color-secondary);
    color: var(--v-text-inverse);
  }
  .v-btn--secondary:hover:not(:disabled) {
    background: var(--v-color-secondary-dark);
  }

  .v-btn--outline {
    background: transparent;
    border-color: var(--v-color-primary);
    color: var(--v-color-primary);
  }
  .v-btn--outline:hover:not(:disabled) {
    background: var(--v-color-primary-light);
  }

  .v-btn--ghost {
    background: transparent;
    color: var(--v-color-primary);
  }
  .v-btn--ghost:hover:not(:disabled) {
    background: var(--v-color-primary-light);
  }

  .v-btn--danger {
    background: var(--v-color-danger);
    color: var(--v-text-inverse);
  }
  .v-btn--danger:hover:not(:disabled) {
    background: var(--v-color-danger-dark);
  }

  /* Sizes */
  .v-btn--sm {
    padding: 0.25rem 0.75rem;
    font-size: 0.8125rem;
  }
  .v-btn--lg {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  .v-btn--block {
    width: 100%;
  }

  /* Loading */
  .v-btn--loading .v-btn__content {
    opacity: 0;
  }

  .v-btn__content {
    display: inline-flex;
    align-items: center;
    gap: 0.375rem;
  }

  .v-btn__spinner {
    position: absolute;
    width: 1em;
    height: 1em;
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-radius: 50%;
    animation: v-spin 0.6s linear infinite;
  }

  @keyframes v-spin {
    to {
      transform: rotate(360deg);
    }
  }
</style>
