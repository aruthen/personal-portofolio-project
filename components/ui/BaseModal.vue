<script setup lang="ts">
interface Props {
  open: boolean
  title?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Notice'
})

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <UModal :open="open" @update:open="emit('close')">
    <template #content>
      <div class="surface m-4 p-6">
        <h3 class="text-lg font-semibold text-text">{{ title }}</h3>
        <div class="mt-3 text-sm text-muted">
          <slot />
        </div>
        <div class="mt-6 flex justify-end">
          <BaseButton variant="outline" @click="emit('close')">Close</BaseButton>
        </div>
      </div>
    </template>
  </UModal>
</template>
