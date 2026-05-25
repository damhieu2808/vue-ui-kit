import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import VModal from './VModal.vue'
import VButton from '../VButton/VButton.vue'

const meta: Meta<typeof VModal> = {
  title: 'Components/VModal',
  component: VModal,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { VModal, VButton },
    setup() {
      const open = ref(false)
      return { open }
    },
    template: `
      <div>
        <VButton @click="open = true">Open Modal</VButton>
        <VModal v-model="open" title="Confirm Action">
          <p>Are you sure you want to proceed? This action cannot be undone.</p>
          <template #footer>
            <VButton variant="ghost" @click="open = false">Cancel</VButton>
            <VButton variant="danger" @click="open = false">Delete</VButton>
          </template>
        </VModal>
      </div>
    `,
  }),
}

export const CustomWidth: Story = {
  render: () => ({
    components: { VModal, VButton },
    setup: () => ({ open: ref(false) }),
    template: `
      <div>
        <VButton @click="open = true">Open Wide Modal</VButton>
        <VModal v-model="open" title="User Details" width="640px">
          <p>This modal has a custom width of 640px.</p>
          <template #footer>
            <VButton @click="open = false">Close</VButton>
          </template>
        </VModal>
      </div>
    `,
  }),
}
