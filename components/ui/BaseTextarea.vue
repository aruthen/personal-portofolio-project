<script setup lang="ts">
interface Props {
  modelValue: string
  placeholder?: string
  rows?: number
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  placeholder: '',
  rows: 8,
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <textarea
    :value="modelValue"
    :placeholder="placeholder"
    :rows="rows"
    :disabled="disabled"
    class="w-full rounded-2xl border border-border bg-card px-4 py-3 text-text placeholder:text-muted outline-none transition focus-visible:ring-2 focus-visible:ring-primary/60"
    @input="emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
  />
</template>
