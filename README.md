<div align="center">

# 🎨 vue-ui-kit

**A lightweight, accessible Vue 3 component library built with TypeScript**

![Vue](https://img.shields.io/badge/Vue-3.4+-42b883?style=flat-square&logo=vue.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=flat-square&logo=vite&logoColor=white)
![Storybook](https://img.shields.io/badge/Storybook-8.x-FF4785?style=flat-square&logo=storybook&logoColor=white)
![Vitest](https://img.shields.io/badge/Tested_with-Vitest-6E9F18?style=flat-square&logo=vitest&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![CI](https://github.com/damhieu2808/vue-ui-kit/actions/workflows/ci.yml/badge.svg)

[📖 Live Storybook →](https://damhieu2808.github.io/vue-ui-kit)

</div>

---

## ✨ Features

- **Vue 3** Composition API with `<script setup lang="ts">`
- **Full TypeScript** — typed props, emits, and composables
- **Tree-shakeable** — import only what you need
- **CSS custom properties** — effortless theming via CSS variables
- **Accessible** — ARIA attributes, keyboard navigation, focus management
- **Storybook** — interactive component documentation
- **Vitest** — unit tested components

## 📦 Components

| Component | Description |
|-----------|-------------|
| `VButton` | Button with 5 variants, 3 sizes, loading state, prefix/suffix slots |
| `VInput` | Text input with label, error/hint messages, clearable, prefix/suffix slots |
| `VBadge` | Status badge with 6 variants, dot mode, pill shape |
| `VModal` | Dialog with Teleport, backdrop/ESC dismiss, enter/leave transitions |
| `VToast` | Toast notifications via `useToast()` composable, auto-dismiss |

## 🚀 Installation

```bash
npm install vue-ui-kit
```

## 🔧 Usage

```ts
// main.ts
import { createApp } from 'vue'
import 'vue-ui-kit/dist/style.css'
import App from './App.vue'

createApp(App).mount('#app')
```

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { VButton, VInput, VBadge, VModal, useToast } from 'vue-ui-kit'

const open = ref(false)
const name = ref('')
const toast = useToast()
</script>

<template>
  <VBadge variant="success">Active</VBadge>

  <VInput v-model="name" label="Name" placeholder="Enter your name" clearable />

  <VButton @click="open = true">Open Modal</VButton>
  <VButton variant="outline" :loading="saving" @click="save">Save</VButton>

  <VModal v-model="open" title="Confirm">
    <p>Are you sure?</p>
    <template #footer>
      <VButton variant="ghost" @click="open = false">Cancel</VButton>
      <VButton variant="danger" @click="open = false">Delete</VButton>
    </template>
  </VModal>

  <!-- Mount once at app root -->
  <VToast />
</template>
```

## 🎨 Theming

Override CSS variables to match your design system:

```css
:root {
  --v-color-primary: #your-brand-color;
  --v-color-primary-dark: #your-brand-color-dark;
  --v-radius-md: 8px;
}
```

## 📖 Component API

### VButton

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `primary \| secondary \| outline \| ghost \| danger` | `primary` | Visual style |
| `size` | `sm \| md \| lg` | `md` | Button size |
| `loading` | `boolean` | `false` | Shows spinner, disables interaction |
| `disabled` | `boolean` | `false` | Disabled state |
| `block` | `boolean` | `false` | Full-width button |
| `type` | `button \| submit \| reset` | `button` | Native button type |

### VInput

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `string` | `''` | v-model value |
| `label` | `string` | — | Input label |
| `placeholder` | `string` | — | Placeholder text |
| `error` | `string` | — | Error message (shown below input) |
| `hint` | `string` | — | Helper text |
| `size` | `sm \| md \| lg` | `md` | Input size |
| `clearable` | `boolean` | `false` | Shows clear button when has value |
| `disabled` | `boolean` | `false` | Disabled state |

### useToast

```ts
const { success, error, warning, info, remove } = useToast()

success('Profile saved!')
error('Something went wrong', 5000) // custom duration in ms
warning('Low storage space')
info('New update available')
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start Storybook
npm run dev

# Run tests
npm test

# Build library
npm run build
```

## 📄 License

MIT © [Hieu Dam Xuan](https://github.com/damhieu2808)
