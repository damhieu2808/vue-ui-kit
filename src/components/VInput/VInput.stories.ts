import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import VInput from './VInput.vue'

const meta: Meta<typeof VInput> = {
  title: 'Components/VInput',
  component: VInput,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: 'Email', placeholder: 'you@example.com' },
  render: (args) => ({
    components: { VInput },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<VInput v-bind="args" v-model="value" />',
  }),
}

export const WithError: Story = {
  args: { label: 'Password', error: 'Password must be at least 8 characters' },
  render: (args) => ({
    components: { VInput },
    setup: () => ({ args, value: ref('abc') }),
    template: '<VInput v-bind="args" v-model="value" type="password" />',
  }),
}

export const WithHint: Story = {
  args: { label: 'Username', hint: 'Only letters, numbers and underscores.' },
  render: (args) => ({
    components: { VInput },
    setup: () => ({ args, value: ref('') }),
    template: '<VInput v-bind="args" v-model="value" />',
  }),
}

export const Clearable: Story = {
  args: { label: 'Search', placeholder: 'Type to search...', clearable: true },
  render: (args) => ({
    components: { VInput },
    setup: () => ({ args, value: ref('Vue component library') }),
    template: '<VInput v-bind="args" v-model="value" />',
  }),
}

export const WithPrefixSlot: Story = {
  render: () => ({
    components: { VInput },
    setup: () => ({ value: ref('') }),
    template: `
      <VInput v-model="value" label="Website" placeholder="yoursite.com">
        <template #prefix>🌐</template>
      </VInput>
    `,
  }),
}
