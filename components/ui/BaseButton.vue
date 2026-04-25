<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  variant?: 'primary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  type?: 'button' | 'submit' | 'reset'
  to?: string
  href?: string
  target?: '_self' | '_blank'
  disabled?: boolean
  loading?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  type: 'button',
  to: undefined,
  href: undefined,
  target: undefined,
  disabled: false,
  loading: false
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const uiByVariant = computed(() => {
  if (props.variant === 'ghost') {
    return {
      base: 'rounded-2xl border border-transparent text-muted hover:bg-card hover:text-text',
      color: 'neutral',
      variant: 'ghost'
    }
  }

  if (props.variant === 'outline') {
    return {
      base: 'rounded-2xl border border-border text-text hover:border-primary/50 hover:bg-card/90',
      color: 'neutral',
      variant: 'outline'
    }
  }

  return {
    base: 'rounded-2xl border border-primary/60 bg-primary/90 text-white hover:bg-primary',
    color: 'primary',
    variant: 'solid'
  }
})
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium transition"
    :class="uiByVariant.base"
  >
    <slot />
  </NuxtLink>

  <a
    v-else-if="href"
    :href="href"
    :target="target"
    rel="noopener noreferrer"
    class="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium transition"
    :class="uiByVariant.base"
  >
    <slot />
  </a>

  <button
    v-else
    :type="type"
    :disabled="disabled || loading"
    class="inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-60"
    :class="uiByVariant.base"
    @click="emit('click', $event)"
  >
    <span
      v-if="loading"
      class="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"
      aria-hidden="true"
    />
    <slot />
  </button>
</template>
