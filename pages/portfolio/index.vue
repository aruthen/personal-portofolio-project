<script setup lang="ts">
import { usePortfolio } from '../../composables/usePortfolio'

const { getAll } = usePortfolio()
const projects = getAll()
</script>

<template>
  <section class="space-y-6 fade-up">
    <header class="space-y-2">
      <h1 class="text-2xl font-semibold sm:text-3xl">Portfolio</h1>
      <p class="text-sm text-muted sm:text-base">Selected product and frontend engineering work.</p>
    </header>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink v-for="project in projects" :key="project.slug" :to="`/portfolio/${project.slug}`">
        <BaseCard hover class="h-full space-y-4">
          <div class="space-y-1">
            <p class="text-xs uppercase tracking-wide text-muted">{{ project.year }}</p>
            <h2 class="text-base font-semibold">{{ project.title }}</h2>
          </div>

          <p class="text-sm text-muted">{{ project.summary }}</p>

          <div class="flex flex-wrap gap-2">
            <BaseBadge
              v-for="tag in project.tags"
              :key="tag"
              class="text-xs"
            >
              {{ tag }}
            </BaseBadge>
          </div>
        </BaseCard>
      </NuxtLink>
    </div>
  </section>
</template>
