<script setup lang="ts">
  export type InputSize = 'sm' | 'md' | 'lg'

  interface Props {
    label?: string
    placeholder?: string
    error?: string
    hint?: string
    size?: InputSize
    disabled?: boolean
    readonly?: boolean
    clearable?: boolean
    type?: string
    id?: string
  }

  const props = withDefaults(defineProps<Props>(), {
    size: 'md',
    disabled: false,
    readonly: false,
    clearable: false,
    type: 'text',
  })

  const model = defineModel<string>({ default: '' })

  const inputId = props.id ?? `v-input-${Math.random().toString(36).slice(2, 7)}`
</script>

<template>
  <div :class="['v-input-wrapper', `v-input-wrapper--${size}`, { 'v-input-wrapper--error': error }]">
    <label v-if="label" :for="inputId" class="v-input__label">{{ label }}</label>

    <div class="v-input__field">
      <span v-if="$slots.prefix" class="v-input__prefix">
        <slot name="prefix" />
      </span>

      <input
        :id="inputId"
        v-model="model"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :aria-invalid="!!error"
        :aria-describedby="error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined"
        class="v-input"
      />

      <button
        v-if="clearable && model"
        type="button"
        class="v-input__clear"
        aria-label="Clear input"
        @click="model = ''"
      >
        ✕
      </button>

      <span v-if="$slots.suffix" class="v-input__suffix">
        <slot name="suffix" />
      </span>
    </div>

    <p v-if="error" :id="`${inputId}-error`" class="v-input__error" role="alert">{{ error }}</p>
    <p v-else-if="hint" :id="`${inputId}-hint`" class="v-input__hint">{{ hint }}</p>
  </div>
</template>

<style scoped>
  .v-input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.375rem;
    width: 100%;
  }

  .v-input__label {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--v-text-primary);
  }

  .v-input__field {
    display: flex;
    align-items: center;
    border: 1px solid var(--v-border-color);
    border-radius: var(--v-radius-md);
    background: var(--v-surface-base);
    transition:
      border-color var(--v-duration) var(--v-easing),
      box-shadow var(--v-duration) var(--v-easing);
  }

  .v-input__field:focus-within {
    border-color: var(--v-border-color-focus);
    box-shadow: 0 0 0 3px rgba(66, 184, 131, 0.15);
  }

  .v-input-wrapper--error .v-input__field {
    border-color: var(--v-border-color-error);
  }

  .v-input-wrapper--error .v-input__field:focus-within {
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
  }

  .v-input {
    flex: 1;
    min-width: 0;
    padding: 0.5rem 0.75rem;
    border: none;
    background: transparent;
    font-size: 0.875rem;
    color: var(--v-text-primary);
    outline: none;
  }

  .v-input::placeholder {
    color: var(--v-text-placeholder);
  }

  .v-input:disabled {
    color: var(--v-text-disabled);
    cursor: not-allowed;
  }

  /* Sizes */
  .v-input-wrapper--sm .v-input {
    padding: 0.25rem 0.625rem;
    font-size: 0.8125rem;
  }
  .v-input-wrapper--lg .v-input {
    padding: 0.75rem 1rem;
    font-size: 1rem;
  }

  /* Prefix / Suffix */
  .v-input__prefix,
  .v-input__suffix {
    display: flex;
    align-items: center;
    padding: 0 0.625rem;
    color: var(--v-text-secondary);
    font-size: 0.875rem;
  }

  /* Clear button */
  .v-input__clear {
    padding: 0 0.5rem;
    background: none;
    border: none;
    color: var(--v-text-secondary);
    cursor: pointer;
    font-size: 0.75rem;
    line-height: 1;
    transition: color var(--v-duration);
  }
  .v-input__clear:hover {
    color: var(--v-text-primary);
  }

  /* Messages */
  .v-input__error {
    font-size: 0.8125rem;
    color: var(--v-color-danger);
    margin: 0;
  }

  .v-input__hint {
    font-size: 0.8125rem;
    color: var(--v-text-secondary);
    margin: 0;
  }
</style>
