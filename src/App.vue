<template>
  <div class="min-h-screen bg-zinc-900 text-zinc-100">
    <section class="grid grid-cols-1 overflow-hidden md:grid-cols-3">
      <article
        v-for="(photo, index) in instagramPhotos"
        :key="index"
        class="group relative aspect-[4/5] overflow-hidden bg-zinc-950"
      >
        <a :href="photo.postUrl" target="_blank" rel="noopener noreferrer">
          <div v-if="photo.isLoading" class="flex h-full w-full items-center justify-center bg-zinc-800">
            <svg class="h-8 w-8 animate-spin text-zinc-500" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
          <img
            v-else
            :src="photo.thumbnailUrl"
            :alt="`Instagram post ${index + 1}`"
            :class="[
              'h-full w-full object-center',
              index === 2 ? 'object-cover' : 'bg-black object-contain',
            ]"
            loading="lazy"
          />
        </a>
      </article>
    </section>

    <main class="mx-auto w-full max-w-4xl px-6 py-10 md:px-6 md:py-14">
      <section class="w-full rounded-2xl border border-zinc-800 bg-zinc-900/70 p-8 md:p-10">
        <img
          src="/profile.svg"
          alt="Foto profil Marutha Wira Yuda"
          class="mx-auto h-28 w-28 rounded-full border border-zinc-700 object-cover"
        />

        <h1 class="mt-5 text-center text-3xl font-semibold text-zinc-50">Marutha Wira Yuda</h1>

        <div class="mt-5 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://instagram.com/maruthamwy"
                target="_blank"
                rel="noopener noreferrer"
                class="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-black text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
                aria-label="Instagram"
              >
                <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.8A3.95 3.95 0 0 0 3.8 7.75v8.5a3.95 3.95 0 0 0 3.95 3.95h8.5a3.95 3.95 0 0 0 3.95-3.95v-8.5a3.95 3.95 0 0 0-3.95-3.95h-8.5Zm8.95 1.35a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1ZM12 7.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 1.8a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/in/marutha-wira-yuda-41704a112"
                target="_blank"
                rel="noopener noreferrer"
                class="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-black text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M6.2 8.1a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM4.3 9.7h3.8V20H4.3V9.7Zm6.2 0h3.6v1.4h.1c.5-1 1.8-1.8 3.6-1.8 3.9 0 4.6 2.4 4.6 5.6V20h-3.8v-4.5c0-1.1 0-2.4-1.6-2.4s-1.8 1.1-1.8 2.3V20h-3.8V9.7Z" />
                </svg>
              </a>
              <a
                href="https://github.com/aruthen"
                target="_blank"
                rel="noopener noreferrer"
                class="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-black text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.72c-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.51-1.11-1.51-.91-.64.07-.62.07-.62 1 .08 1.53 1.06 1.53 1.06.89 1.57 2.34 1.12 2.91.86.09-.66.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.08 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.28 2.75 1.05A9.26 9.26 0 0 1 12 6.84a9.2 9.2 0 0 1 2.5.35c1.9-1.33 2.74-1.05 2.74-1.05.56 1.42.21 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.95-2.34 4.81-4.57 5.07.36.32.68.95.68 1.91v2.83c0 .27.18.6.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
                </svg>
              </a>
              <a
                href="https://www.strava.com/athletes/63049362"
                target="_blank"
                rel="noopener noreferrer"
                class="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-700 bg-black text-zinc-100 transition hover:border-zinc-500 hover:bg-zinc-900"
                aria-label="Strava"
              >
                <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d="m10.46 2.4 4.44 8.73h-2.78L10.46 7.9l-1.66 3.23H6.02l4.44-8.73Zm3.08 8.73L18 20h-3.18l-1.28-2.46h-3.17L9.1 20H6l4.46-8.87h3.08Zm-1.58 3.17-1.03 2.04h2.09l-1.06-2.04Z" />
                </svg>
              </a>
        </div>

        <section class="mt-10 rounded-xl border border-zinc-800 bg-zinc-800/30 p-5">
          <h2 class="text-lg font-semibold text-zinc-100">Bahasa yang dikuasai di GitHub</h2>

          <p v-if="isLoadingLanguages" class="mt-4 text-sm text-zinc-300">Memuat data bahasa dari GitHub...</p>
          <p v-else-if="languageError" class="mt-4 text-sm text-red-300">{{ languageError }}</p>

          <div v-else class="mt-4 rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
            <div class="flex min-h-40 flex-wrap items-center justify-center gap-3">
              <span
                v-for="word in githubWordCloud"
                :key="word.name"
                class="font-semibold text-emerald-300"
                :style="{
                  fontSize: `${word.fontSize}px`,
                  opacity: word.opacity,
                  transform: `rotate(${word.rotate}deg)`,
                }"
              >
                {{ word.name }}
              </span>
            </div>
          </div>
        </section>

        <section class="mt-8 rounded-xl border border-zinc-800 bg-zinc-800/30 p-5">
          <h2 class="text-lg font-semibold text-zinc-100">Grafik Lari Mingguan (Strava)</h2>

          <p v-if="isLoadingStrava" class="mt-4 text-sm text-zinc-300">Memuat data lari dari Strava...</p>
          <p v-else-if="stravaError" class="mt-4 text-sm text-red-300">{{ stravaError }}</p>

          <div v-else class="mt-4 space-y-4">
            <div class="grid grid-cols-2 gap-3 text-xs text-zinc-300 sm:grid-cols-4">
              <div class="rounded-md bg-zinc-800 px-3 py-2">
                <p class="text-zinc-400">Total Jarak</p>
                <p class="mt-1 text-sm font-semibold text-zinc-100">{{ stravaSummary.totalDistanceKm }} km</p>
              </div>
              <div class="rounded-md bg-zinc-800 px-3 py-2">
                <p class="text-zinc-400">Total Lari</p>
                <p class="mt-1 text-sm font-semibold text-zinc-100">{{ stravaSummary.totalRuns }} sesi</p>
              </div>
            </div>

            <div class="rounded-lg border border-zinc-800 bg-zinc-900/50 p-3">
              <svg viewBox="0 0 100 42" class="h-44 w-full" preserveAspectRatio="none" role="img" aria-label="Grafik garis jarak lari mingguan">
                <line x1="6" y1="36" x2="96" y2="36" stroke="#3f3f46" stroke-width="0.8" />
                <polyline
                  :points="stravaLinePoints"
                  fill="none"
                  stroke="#fb923c"
                  stroke-width="1.4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  v-for="point in stravaLineNodes"
                  :key="point.key"
                  :cx="point.x"
                  :cy="point.y"
                  :r="selectedWeekKey === point.key ? 1.8 : 1.2"
                  :fill="selectedWeekKey === point.key ? '#f97316' : '#fdba74'"
                  class="cursor-pointer transition-all"
                  @click="selectedWeekKey = point.key"
                />
              </svg>

              <div class="mt-2 grid grid-cols-4 gap-2 text-[10px] text-zinc-400 sm:grid-cols-8">
                <div v-for="week in stravaWeeks" :key="`label-${week.weekKey}`" class="truncate text-center">
                  {{ week.weekLabel }}
                </div>
              </div>
            </div>

            <div v-if="selectedWeekData" class="rounded-lg border border-orange-700/50 bg-orange-900/20 p-4">
              <h3 class="text-lg font-semibold text-orange-200">{{ selectedWeekData.relativeLabel }}</h3>
              <p class="text-xs text-orange-300">{{ selectedWeekData.weekLabel }}</p>
              
              <div class="mt-3 grid grid-cols-3 gap-3">
                <div class="rounded-md bg-orange-900/40 px-2 py-2">
                  <p class="text-[10px] text-orange-400">Jarak</p>
                  <p class="mt-1 font-semibold text-orange-100">{{ selectedWeekData.distanceKm }} km</p>
                </div>
                <div class="rounded-md bg-orange-900/40 px-2 py-2">
                  <p class="text-[10px] text-orange-400">Durasi</p>
                  <p class="mt-1 font-semibold text-orange-100">{{ selectedWeekData.movingTimeMinutes }} min</p>
                </div>
                <div class="rounded-md bg-orange-900/40 px-2 py-2">
                  <p class="text-[10px] text-orange-400">Sesi</p>
                  <p class="mt-1 font-semibold text-orange-100">{{ selectedWeekData.runCount }}x</p>
                </div>
              </div>
              <div v-if="selectedWeekData.elevGainMeters > 0" class="mt-2 rounded-md bg-orange-900/40 px-2 py-2">
                <p class="text-[10px] text-orange-400">Elevasi</p>
                <p class="mt-1 font-semibold text-orange-100">{{ selectedWeekData.elevGainMeters }} m</p>
              </div>
            </div>
          </div>
        </section>

      </section>
    </main>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'

const githubUsername = 'aruthen'
const languageStats = ref([])
const isLoadingLanguages = ref(true)
const languageError = ref('')
const instagramPhotos = ref([
  {
    postUrl: 'https://www.instagram.com/p/DS-IxdyCer9/',
    caption: 'Morning run 🏃',
    thumbnailUrl: null,
    isLoading: true,
  },
  {
    postUrl: 'https://www.instagram.com/p/DU79Xn_CfSY/',
    caption: 'Adventure time ✨',
    thumbnailUrl: null,
    isLoading: true,
  },
  {
    postUrl: 'https://www.instagram.com/reel/DVgThIxiXvh/',
    caption: 'Cycling journey 🚴',
    thumbnailUrl: null,
    isLoading: true,
  },
])
const stravaWeeks = ref([])
const isLoadingStrava = ref(true)
const stravaError = ref('')
const selectedWeekKey = ref(null)
const stravaSummary = ref({
  totalDistanceKm: 0,
  totalRuns: 0,
})

const githubWordCloud = computed(() =>
  languageStats.value.map((language, index) => ({
    name: language.name,
    fontSize: Math.max(14, Math.min(42, 12 + language.percentage * 0.8)),
    opacity: 0.6 + Math.min(0.4, language.percentage / 100),
    rotate: index % 2 === 0 ? -4 : 4,
  })),
)

const stravaLineNodes = computed(() => {
  if (!stravaWeeks.value.length) {
    return []
  }

  const maxDistance = Math.max(...stravaWeeks.value.map((week) => week.distanceKm), 1)
  const minX = 8
  const maxX = 94
  const minY = 6
  const maxY = 34
  const stepX = stravaWeeks.value.length > 1 ? (maxX - minX) / (stravaWeeks.value.length - 1) : 0

  return stravaWeeks.value.map((week, index) => {
    const ratio = week.distanceKm / maxDistance
    const x = minX + index * stepX
    const y = maxY - ratio * (maxY - minY)
    return {
      key: week.weekKey,
      x: Number(x.toFixed(2)),
      y: Number(y.toFixed(2)),
    }
  })
})

const stravaLinePoints = computed(() => stravaLineNodes.value.map((node) => `${node.x},${node.y}`).join(' '))

const selectedWeekData = computed(() => {
  if (!selectedWeekKey.value) return null
  return stravaWeeks.value.find((week) => week.weekKey === selectedWeekKey.value)
})


async function fetchGithubLanguages() {
  isLoadingLanguages.value = true
  languageError.value = ''

  try {
    const reposResponse = await fetch(`https://api.github.com/users/${githubUsername}/repos?per_page=100`)

    if (!reposResponse.ok) {
      throw new Error('Gagal mengambil daftar repository dari GitHub.')
    }

    const repositories = await reposResponse.json()
    const languageUrls = repositories.map((repository) => repository.languages_url).filter(Boolean)

    const languageResponses = await Promise.all(
      languageUrls.map(async (url) => {
        const response = await fetch(url)
        if (!response.ok) {
          return null
        }
        return response.json()
      }),
    )

    const languageMap = {}

    languageResponses.forEach((languageData) => {
      if (!languageData) return

      Object.entries(languageData).forEach(([language, bytes]) => {
        languageMap[language] = (languageMap[language] || 0) + bytes
      })
    })

    const sortedLanguages = Object.entries(languageMap)
      .map(([name, bytes]) => ({ name, bytes }))
      .sort((first, second) => second.bytes - first.bytes)
      .slice(0, 6)

    const total = sortedLanguages.reduce((sum, language) => sum + language.bytes, 0)

    languageStats.value = sortedLanguages.map((language) => ({
      ...language,
      percentage: total > 0 ? Math.round((language.bytes / total) * 100) : 0,
    }))

    if (!languageStats.value.length) {
      languageError.value = 'Belum ada data bahasa yang bisa ditampilkan dari repository publik.'
    }
  } catch {
    languageError.value = 'Gagal memuat data bahasa GitHub. Coba refresh lagi.'
  } finally {
    isLoadingLanguages.value = false
  }
}

async function fetchStravaWeekly() {
  isLoadingStrava.value = true
  stravaError.value = ''

  try {
    const response = await fetch('/api/strava-weekly')
    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || 'Gagal memuat data mingguan Strava.')
    }

    stravaWeeks.value = data.weeks || []

    stravaSummary.value = data.summary || {
      totalDistanceKm: 0,
      totalRuns: 0,
    }
  } catch (error) {
    stravaError.value =
      error instanceof Error ? error.message : 'Gagal memuat data Strava. Coba refresh lagi.'
  } finally {
    isLoadingStrava.value = false
  }
}

async function fetchInstagramThumbnails() {
  for (const photo of instagramPhotos.value) {
    try {
      const fetchUrl = `/api/instagram-embed?url=${encodeURIComponent(photo.postUrl)}`
      console.log('Fetching Instagram thumbnail:', fetchUrl)
      
      const response = await fetch(fetchUrl)
      const data = await response.json()
      
      console.log('Instagram API response:', { status: response.ok, data })
      
      if (response.ok && data.thumbnail_url) {
        photo.thumbnailUrl = data.thumbnail_url
        console.log('Thumbnail loaded:', photo.thumbnailUrl.substring(0, 50) + '...')
      } else {
        console.warn('No thumbnail in response or API error:', data)
        photo.thumbnailUrl = '/instagram-fallback.svg'
      }
    } catch (error) {
      console.error('Failed to fetch Instagram thumbnail:', error)
      photo.thumbnailUrl = '/instagram-fallback.svg'
    } finally {
      photo.isLoading = false
    }
  }
}

onMounted(() => {
  fetchGithubLanguages()
  fetchStravaWeekly()
  fetchInstagramThumbnails()
})
</script>
