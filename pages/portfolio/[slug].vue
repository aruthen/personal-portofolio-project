<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { usePortfolio } from '../../composables/usePortfolio'

const route = useRoute()
const { getBySlug } = usePortfolio()

const project = computed(() => getBySlug(String(route.params.slug)))
</script>

<template>
  <article v-if="project" class="mx-auto max-w-3xl space-y-6 fade-up">
    <NuxtLink to="/portfolio" class="text-sm text-primary/90 transition hover:text-primary">Back to portfolio</NuxtLink>

    <BaseCard class="space-y-5">
      <header class="space-y-2">
        <p class="text-xs uppercase tracking-wide text-muted">{{ project.year }}</p>
        <h1 class="text-2xl font-semibold sm:text-3xl">{{ project.title }}</h1>
        <p class="text-sm text-muted">{{ project.summary }}</p>
      </header>

      <div class="flex flex-wrap gap-2">
        <BaseBadge v-for="tag in project.tags" :key="tag">{{ tag }}</BaseBadge>
      </div>

      <p class="text-sm leading-7 text-text/95">{{ project.content }}</p>

      <div class="flex flex-wrap gap-3">
        <a
          v-if="project.links.live"
          :href="project.links.live"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-2xl border border-border px-4 py-2 text-sm text-muted transition hover:border-primary/50 hover:text-text"
        >
          Live Demo
        </a>
        <a
          v-if="project.links.repo"
          :href="project.links.repo"
          target="_blank"
          rel="noopener noreferrer"
          class="rounded-2xl border border-border px-4 py-2 text-sm text-muted transition hover:border-primary/50 hover:text-text"
        >
          Repository
        </a>
      </div>
    </BaseCard>
  </article>

  <section v-else class="mx-auto max-w-3xl fade-up">
    <BaseCard class="space-y-3 text-center">
      <h1 class="text-xl font-semibold">Project not found</h1>
      <p class="text-sm text-muted">The requested portfolio item does not exist.</p>
      <div class="pt-2">
        <BaseButton to="/portfolio" variant="outline">Back to portfolio</BaseButton>
      </div>
    </BaseCard>
  </section>
</template>
