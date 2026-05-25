import type { Meta, StoryObj } from '@storybook/vue3'
import VButton from './VButton.vue'

const meta: Meta<typeof VButton> = {
  title: 'Components/VButton',
  component: VButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { variant: 'primary' },
  render: (args) => ({
    components: { VButton },
    setup: () => ({ args }),
    template: '<VButton v-bind="args">Click me</VButton>',
  }),
}

export const AllVariants: Story = {
  render: () => ({
    components: { VButton },
    template: `
      <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center">
        <VButton variant="primary">Primary</VButton>
        <VButton variant="secondary">Secondary</VButton>
        <VButton variant="outline">Outline</VButton>
        <VButton variant="ghost">Ghost</VButton>
        <VButton variant="danger">Danger</VButton>
      </div>
    `,
  }),
}

export const AllSizes: Story = {
  render: () => ({
    components: { VButton },
    template: `
      <div style="display:flex;gap:12px;align-items:center">
        <VButton size="sm">Small</VButton>
        <VButton size="md">Medium</VButton>
        <VButton size="lg">Large</VButton>
      </div>
    `,
  }),
}

export const Loading: Story = {
  args: { loading: true },
  render: (args) => ({
    components: { VButton },
    setup: () => ({ args }),
    template: '<VButton v-bind="args">Saving...</VButton>',
  }),
}

export const Disabled: Story = {
  args: { disabled: true },
  render: (args) => ({
    components: { VButton },
    setup: () => ({ args }),
    template: '<VButton v-bind="args">Disabled</VButton>',
  }),
}
