<script setup lang="ts">
import { useTools } from '../../composables/useTools'

const { tools } = useTools()
</script>

<template>
  <section class="space-y-6 fade-up">
    <header class="space-y-2">
      <h1 class="text-2xl font-semibold sm:text-3xl">Tools</h1>
      <p class="text-sm text-muted sm:text-base">AI-powered and utility tools designed for speed and clarity.</p>
    </header>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink v-for="tool in tools" :key="tool.path" :to="tool.path" class="group">
        <BaseCard hover class="h-full space-y-3">
          <div class="flex items-center justify-between">
            <h2 class="text-base font-semibold">{{ tool.name }}</h2>
            <BaseBadge tone="primary">{{ tool.badge }}</BaseBadge>
          </div>
          <p class="text-sm text-muted">{{ tool.description }}</p>
          <p class="text-xs text-primary/90 transition group-hover:text-primary">Open tool</p>
        </BaseCard>
      </NuxtLink>
    </div>
  </section>
</template>
