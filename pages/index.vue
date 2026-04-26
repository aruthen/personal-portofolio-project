<script setup lang="ts">
const profilePhoto = '/images/potrait-utha.png'

const identitySections = [
  {
    title: 'Fitness',
    description: 'Melihat perjalanan olahraga dan aktivitas saya.',
    link: 'https://www.strava.com/athletes/63049362',
    badge: 'Active',
    icon: 'strava',
    iconFile: 'strava.webp',
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Coding',
    description: 'Tempat saya belajar dan membangun project.',
    link: 'https://github.com/aruthen',
    badge: 'Builds',
    icon: 'github',
    image:
      'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Daily Life',
    description: 'Cerita keseharian di luar layar.',
    link: 'https://www.instagram.com/maruthamwy/',
    badge: 'Moments',
    icon: 'instagram',
    image:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=900&q=80'
  },
  {
    title: 'Digital Products',
    description: 'Template dan produk yang saya buat.',
    link: 'https://gumroad.com',
    badge: 'Products',
    icon: 'gumroad',
    iconFile: 'gumroad.webp',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80'
  }
]
</script>

<template>
  <div class="space-y-8 sm:space-y-10">
    <BaseCard class="fade-up">
      <div class="flex flex-col gap-6 sm:flex-row sm:items-stretch">
        <div class="relative overflow-hidden rounded-2xl border border-primary/30 sm:w-44 sm:shrink-0">
          <img
            :src="profilePhoto"
            alt="Foto profil Marutha Wira Yuda"
            class="h-56 w-full object-top object-cover sm:absolute sm:inset-0 sm:h-full"
            loading="lazy"
          >
        </div>

        <div class="flex-1 space-y-3">
          <p class="text-xs tracking-wide text-primary/90 sm:text-sm">Building, Learning, and Sharing - from Code to Daily Life</p>
          <h1 class="text-3xl font-semibold tracking-tight sm:text-5xl">Marutha Wira Yuda</h1>
          <p class="max-w-2xl text-sm text-muted sm:text-base">
            Saya mendokumentasikan apa yang saya bangun, pelajari, dan jalani-mulai dari coding, olahraga, hingga membuat produk digital yang bermanfaat.
          </p>
          <p class="text-xs uppercase tracking-[0.2em] text-muted">Documenting Growth. Building Consistently.</p>

          <div class="pt-3 flex flex-wrap gap-3">
            <BaseButton to="/about">Explore My World</BaseButton>
            <BaseButton variant="outline" href="https://www.linkedin.com/in/marutha-wira-yuda-41704a112/" target="_blank">Connect With Me</BaseButton>
          </div>
        </div>
      </div>
    </BaseCard>

    <BaseCard class="space-y-6 fade-up" style="animation-delay: 0.08s">
      <div class="space-y-2 text-center">
        <p class="text-xs uppercase tracking-[0.22em] text-muted">Identity Hub</p>
        <h2 class="text-2xl font-semibold tracking-wide sm:text-3xl">Discover My Core Sections</h2>
      </div>

      <div class="-mx-1 flex snap-x gap-4 overflow-x-auto px-1 pb-1">
        <a
          v-for="section in identitySections"
          :key="section.title"
          :href="section.link"
          target="_blank"
          rel="noopener noreferrer"
          class="group relative h-[320px] w-[220px] shrink-0 snap-start overflow-hidden rounded-[2.2rem] border border-white/20 bg-card"
        >
          <img
            :src="section.image"
            :alt="section.title"
            class="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            loading="lazy"
          >

          <div class="absolute inset-0 bg-gradient-to-t from-bg via-bg/45 to-transparent" />

          <div class="absolute inset-x-0 bottom-0 flex flex-col p-4 h-full">
            <div class="mt-auto space-y-2">
              <BaseBadge tone="primary">{{ section.badge }}</BaseBadge>
              <div class="flex items-center gap-2">
                <img :src="`/icons/${section.iconFile || section.icon + '.svg'}`" :alt="`${section.title} icon`" :style="section.iconFile ? 'filter: brightness(0) saturate(100%) invert(1)' : ''" class="h-6 w-6 flex-shrink-0"/>
                <h3 class="text-lg font-semibold leading-tight">{{ section.title }}</h3>
              </div>
            </div>
            <p class="text-xs text-text/85 mt-1 min-h-[2.5rem] line-clamp-2">{{ section.description }}</p>
          </div>
        </a>
      </div>
    </BaseCard>
  </div>
</template>
