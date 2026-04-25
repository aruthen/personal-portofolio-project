<script setup lang="ts">
interface Props {
  title: string
  description: string
  state: 'idle' | 'processing' | 'result'
}

defineProps<Props>()
</script>

<template>
  <section class="mx-auto w-full max-w-3xl space-y-6 fade-up">
    <header class="space-y-2">
      <h1 class="text-2xl font-semibold sm:text-3xl">{{ title }}</h1>
      <p class="text-sm text-muted sm:text-base">{{ description }}</p>
    </header>

    <BaseCard class="space-y-6">
      <Transition name="fade" mode="out-in">
        <div v-if="state === 'processing'" key="processing" class="space-y-4">
          <slot name="processing">
            <div class="flex items-center gap-3 rounded-2xl border border-border bg-bg/60 p-4">
              <span class="h-5 w-5 animate-spin rounded-full border-2 border-primary border-r-transparent" />
              <span class="text-sm text-muted">Processing...</span>
            </div>
          </slot>
        </div>

        <div v-else-if="state === 'result'" key="result" class="space-y-4">
          <slot name="result" />
        </div>

        <div v-else key="input" class="space-y-4">
          <slot name="input" />
        </div>
      </Transition>
    </BaseCard>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>
