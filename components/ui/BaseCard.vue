<script setup lang="ts">
interface Props {
  as?: string
  hover?: boolean
}

withDefaults(defineProps<Props>(), {
  as: 'div',
  hover: false
})
</script>

<template>
  <component
    :is="as"
    class="surface p-4 sm:p-6"
    :class="hover ? 'soft-hover' : 'transition duration-200'"
  >
    <slot />
  </component>
</template>
