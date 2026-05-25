import { reactive, readonly } from 'vue'

export type ToastType = 'success' | 'error' | 'warning' | 'info'

export interface Toast {
  id: string
  type: ToastType
  message: string
  duration: number
}

const state = reactive<{ toasts: Toast[] }>({ toasts: [] })

export function useToast() {
  function add(message: string, type: ToastType = 'info', duration = 3500): string {
    const id = Math.random().toString(36).slice(2)
    state.toasts.push({ id, type, message, duration })
    if (duration > 0) setTimeout(() => remove(id), duration)
    return id
  }

  function remove(id: string): void {
    const idx = state.toasts.findIndex((t) => t.id === id)
    if (idx !== -1) state.toasts.splice(idx, 1)
  }

  const success = (msg: string, duration?: number) => add(msg, 'success', duration)
  const error = (msg: string, duration?: number) => add(msg, 'error', duration)
  const warning = (msg: string, duration?: number) => add(msg, 'warning', duration)
  const info = (msg: string, duration?: number) => add(msg, 'info', duration)

  return {
    toasts: readonly(state.toasts),
    add,
    remove,
    success,
    error,
    warning,
    info,
  }
}
