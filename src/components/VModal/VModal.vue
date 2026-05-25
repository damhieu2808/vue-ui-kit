<script setup lang="ts">
  import { watch, onUnmounted } from 'vue'

  interface Props {
    modelValue: boolean
    title?: string
    width?: string
    closeOnBackdrop?: boolean
    closeOnEsc?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    width: '480px',
    closeOnBackdrop: true,
    closeOnEsc: true,
  })

  const emit = defineEmits<{
    'update:modelValue': [value: boolean]
    close: []
  }>()

  function close() {
    emit('update:modelValue', false)
    emit('close')
  }

  function handleBackdrop() {
    if (props.closeOnBackdrop) close()
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape' && props.closeOnEsc) close()
  }

  watch(
    () => props.modelValue,
    (open) => {
      if (open) {
        document.addEventListener('keydown', handleKeydown)
        document.body.style.overflow = 'hidden'
      } else {
        document.removeEventListener('keydown', handleKeydown)
        document.body.style.overflow = ''
      }
    },
  )

  onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown)
    document.body.style.overflow = ''
  })
</script>

<template>
  <Teleport to="body">
    <Transition name="v-modal">
      <div
        v-if="modelValue"
        class="v-modal-overlay"
        role="dialog"
        aria-modal="true"
        :aria-label="title"
        @click.self="handleBackdrop"
      >
        <div class="v-modal" :style="{ width, maxWidth: '90vw' }">
          <div v-if="title || $slots.header" class="v-modal__header">
            <slot name="header">
              <h2 class="v-modal__title">{{ title }}</h2>
            </slot>
            <button class="v-modal__close" aria-label="Close modal" @click="close">✕</button>
          </div>

          <div class="v-modal__body">
            <slot />
          </div>

          <div v-if="$slots.footer" class="v-modal__footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
  .v-modal-overlay {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.45);
    backdrop-filter: blur(2px);
    z-index: 1000;
    padding: 1rem;
  }

  .v-modal {
    background: var(--v-surface-base);
    border-radius: var(--v-radius-lg);
    box-shadow: var(--v-shadow-overlay);
    display: flex;
    flex-direction: column;
    max-height: 90vh;
    overflow: hidden;
  }

  .v-modal__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid var(--v-border-color);
    gap: 1rem;
  }

  .v-modal__title {
    margin: 0;
    font-size: 1.125rem;
    font-weight: 600;
    color: var(--v-text-primary);
  }

  .v-modal__close {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: var(--v-radius-sm);
    background: transparent;
    color: var(--v-text-secondary);
    cursor: pointer;
    font-size: 0.875rem;
    transition: background var(--v-duration), color var(--v-duration);
  }

  .v-modal__close:hover {
    background: var(--v-surface-raised);
    color: var(--v-text-primary);
  }

  .v-modal__body {
    padding: 1.5rem;
    overflow-y: auto;
    color: var(--v-text-primary);
    line-height: 1.6;
  }

  .v-modal__footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 0.75rem;
    padding: 1rem 1.5rem;
    border-top: 1px solid var(--v-border-color);
  }

  /* Transition */
  .v-modal-enter-active,
  .v-modal-leave-active {
    transition: opacity 0.2s ease;
  }

  .v-modal-enter-active .v-modal,
  .v-modal-leave-active .v-modal {
    transition: transform 0.2s ease, opacity 0.2s ease;
  }

  .v-modal-enter-from,
  .v-modal-leave-to {
    opacity: 0;
  }

  .v-modal-enter-from .v-modal,
  .v-modal-leave-to .v-modal {
    transform: scale(0.95) translateY(-8px);
    opacity: 0;
  }
</style>
