<script setup lang="ts">
interface Props {
  tone?: 'primary' | 'neutral'
}

withDefaults(defineProps<Props>(), {
  tone: 'neutral'
})
</script>

<template>
  <span
    class="inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium"
    :class="
      tone === 'primary'
        ? 'border-primary/40 bg-primary/15 text-primary'
        : 'border-border bg-card text-muted'
    "
  >
    <slot />
  </span>
</template>
