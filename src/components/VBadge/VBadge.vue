<script setup lang="ts">
  export type BadgeVariant = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info'
  export type BadgeSize = 'sm' | 'md' | 'lg'

  interface Props {
    variant?: BadgeVariant
    size?: BadgeSize
    dot?: boolean
    rounded?: boolean
  }

  withDefaults(defineProps<Props>(), {
    variant: 'primary',
    size: 'md',
    dot: false,
    rounded: false,
  })
</script>

<template>
  <span
    :class="[
      'v-badge',
      `v-badge--${variant}`,
      `v-badge--${size}`,
      { 'v-badge--dot': dot, 'v-badge--rounded': rounded },
    ]"
  >
    <slot v-if="!dot" />
  </span>
</template>

<style scoped>
  .v-badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.2em 0.6em;
    border-radius: var(--v-radius-sm);
    font-size: 0.75rem;
    font-weight: 600;
    line-height: 1;
    white-space: nowrap;
  }

  /* Variants */
  .v-badge--primary {
    background: var(--v-color-primary-light);
    color: var(--v-color-primary-dark);
  }
  .v-badge--secondary {
    background: #f1f5f9;
    color: var(--v-color-secondary);
  }
  .v-badge--success {
    background: var(--v-color-success-light);
    color: var(--v-color-success-dark);
  }
  .v-badge--warning {
    background: var(--v-color-warning-light);
    color: var(--v-color-warning-dark);
  }
  .v-badge--danger {
    background: var(--v-color-danger-light);
    color: var(--v-color-danger-dark);
  }
  .v-badge--info {
    background: var(--v-color-info-light);
    color: var(--v-color-info-dark);
  }

  /* Sizes */
  .v-badge--sm {
    font-size: 0.6875rem;
    padding: 0.15em 0.45em;
  }
  .v-badge--lg {
    font-size: 0.875rem;
    padding: 0.3em 0.8em;
  }

  /* Dot */
  .v-badge--dot {
    width: 8px;
    height: 8px;
    padding: 0;
    border-radius: 50%;
  }
  .v-badge--dot.v-badge--sm {
    width: 6px;
    height: 6px;
  }
  .v-badge--dot.v-badge--lg {
    width: 10px;
    height: 10px;
  }

  /* Rounded pill */
  .v-badge--rounded {
    border-radius: var(--v-radius-full);
  }
</style>
