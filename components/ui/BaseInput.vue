<script setup lang="ts">
interface Props {
  modelValue: string
  placeholder?: string
  type?: string
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  placeholder: '',
  type: 'text',
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <input
    :value="modelValue"
    :placeholder="placeholder"
    :type="type"
    :disabled="disabled"
    class="w-full rounded-2xl border border-border bg-card px-4 py-2.5 text-text placeholder:text-muted outline-none transition focus-visible:ring-2 focus-visible:ring-primary/60"
    @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
  />
</template>
