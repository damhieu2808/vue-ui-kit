import type { Meta, StoryObj } from '@storybook/vue3'
import VBadge from './VBadge.vue'

const meta: Meta<typeof VBadge> = {
  title: 'Components/VBadge',
  component: VBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info'],
    },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const AllVariants: Story = {
  render: () => ({
    components: { VBadge },
    template: `
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
        <VBadge variant="primary">Primary</VBadge>
        <VBadge variant="secondary">Secondary</VBadge>
        <VBadge variant="success">Success</VBadge>
        <VBadge variant="warning">Warning</VBadge>
        <VBadge variant="danger">Danger</VBadge>
        <VBadge variant="info">Info</VBadge>
      </div>
    `,
  }),
}

export const Dots: Story = {
  render: () => ({
    components: { VBadge },
    template: `
      <div style="display:flex;gap:12px;align-items:center">
        <VBadge variant="success" dot />
        <VBadge variant="warning" dot />
        <VBadge variant="danger" dot />
        <VBadge variant="info" dot />
      </div>
    `,
  }),
}

export const Rounded: Story = {
  render: () => ({
    components: { VBadge },
    template: `
      <div style="display:flex;gap:8px">
        <VBadge variant="primary" rounded>New</VBadge>
        <VBadge variant="danger" rounded>99+</VBadge>
        <VBadge variant="success" rounded>Active</VBadge>
      </div>
    `,
  }),
}
