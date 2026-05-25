<script setup lang="ts">
  import { TransitionGroup } from 'vue'
  import { useToast } from '../../composables/useToast'

  const { toasts, remove } = useToast()

  const icons: Record<string, string> = {
    success: '✓',
    error: '✕',
    warning: '⚠',
    info: 'ℹ',
  }
</script>

<template>
  <Teleport to="body">
    <div class="v-toast-container" aria-live="polite" aria-atomic="false">
      <TransitionGroup name="v-toast" tag="div">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          :class="['v-toast', `v-toast--${toast.type}`]"
          role="alert"
        >
          <span class="v-toast__icon" aria-hidden="true">{{ icons[toast.type] }}</span>
          <span class="v-toast__message">{{ toast.message }}</span>
          <button class="v-toast__close" aria-label="Dismiss" @click="remove(toast.id)">✕</button>
        </div>
      </TransitionGroup>
    </div>
  </Teleport>
</template>

<style scoped>
  .v-toast-container {
    position: fixed;
    bottom: 1.5rem;
    right: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 9999;
    pointer-events: none;
  }

  .v-toast {
    display: flex;
    align-items: center;
    gap: 0.625rem;
    padding: 0.75rem 1rem;
    border-radius: var(--v-radius-md);
    box-shadow: var(--v-shadow-md);
    font-size: 0.875rem;
    font-weight: 500;
    pointer-events: all;
    min-width: 280px;
    max-width: 400px;
  }

  .v-toast--success {
    background: var(--v-color-success-light);
    color: var(--v-color-success-dark);
    border-left: 3px solid var(--v-color-success);
  }
  .v-toast--error {
    background: var(--v-color-danger-light);
    color: var(--v-color-danger-dark);
    border-left: 3px solid var(--v-color-danger);
  }
  .v-toast--warning {
    background: var(--v-color-warning-light);
    color: var(--v-color-warning-dark);
    border-left: 3px solid var(--v-color-warning);
  }
  .v-toast--info {
    background: var(--v-color-info-light);
    color: var(--v-color-info-dark);
    border-left: 3px solid var(--v-color-info);
  }

  .v-toast__icon {
    font-size: 1rem;
    flex-shrink: 0;
  }

  .v-toast__message {
    flex: 1;
    line-height: 1.4;
  }

  .v-toast__close {
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    opacity: 0.6;
    font-size: 0.75rem;
    padding: 0;
    flex-shrink: 0;
    transition: opacity var(--v-duration);
  }
  .v-toast__close:hover {
    opacity: 1;
  }

  /* Transition */
  .v-toast-enter-active,
  .v-toast-leave-active {
    transition: all 0.25s ease;
  }
  .v-toast-enter-from {
    opacity: 0;
    transform: translateX(100%);
  }
  .v-toast-leave-to {
    opacity: 0;
    transform: translateX(100%);
  }
  .v-toast-move {
    transition: transform 0.25s ease;
  }
</style>
