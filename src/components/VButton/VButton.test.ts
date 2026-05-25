import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import VButton from './VButton.vue'

describe('VButton', () => {
  it('renders slot content', () => {
    const wrapper = mount(VButton, { slots: { default: 'Click me' } })
    expect(wrapper.text()).toContain('Click me')
  })

  it('applies variant class', () => {
    const wrapper = mount(VButton, { props: { variant: 'danger' } })
    expect(wrapper.classes()).toContain('v-btn--danger')
  })

  it('applies size class', () => {
    const wrapper = mount(VButton, { props: { size: 'lg' } })
    expect(wrapper.classes()).toContain('v-btn--lg')
  })

  it('emits click event', async () => {
    const wrapper = mount(VButton)
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('does not emit click when disabled', async () => {
    const wrapper = mount(VButton, { props: { disabled: true } })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('does not emit click when loading', async () => {
    const wrapper = mount(VButton, { props: { loading: true } })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeFalsy()
  })

  it('shows spinner when loading', () => {
    const wrapper = mount(VButton, { props: { loading: true } })
    expect(wrapper.find('.v-btn__spinner').exists()).toBe(true)
  })

  it('is disabled when loading', () => {
    const wrapper = mount(VButton, { props: { loading: true } })
    expect(wrapper.attributes('disabled')).toBeDefined()
  })

  it('sets aria-busy when loading', () => {
    const wrapper = mount(VButton, { props: { loading: true } })
    expect(wrapper.attributes('aria-busy')).toBe('true')
  })

  it('renders block class', () => {
    const wrapper = mount(VButton, { props: { block: true } })
    expect(wrapper.classes()).toContain('v-btn--block')
  })
})
