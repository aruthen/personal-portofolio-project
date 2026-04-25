<script setup lang="ts">
import { ref } from 'vue'

const fileName = ref('')
const progress = ref(0)
const state = ref<'idle' | 'processing' | 'result'>('idle')
const transcript = ref('')

const onFileSelect = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (!file) {
    return
  }

  fileName.value = file.name
  state.value = 'processing'
  progress.value = 0

  const timer = setInterval(() => {
    progress.value += 20

    if (progress.value >= 100) {
      clearInterval(timer)
      state.value = 'result'
      transcript.value = `Transcript preview for ${file.name}.\n\nThis route is prepared for real audio transcription via /api/transcriber.`
    }
  }, 350)
}

const reset = () => {
  state.value = 'idle'
  progress.value = 0
  fileName.value = ''
  transcript.value = ''
}
</script>

<template>
  <ToolLayout
    title="Transcriber"
    description="Upload an audio file and convert speech to text with clear progress states."
    :state="state"
  >
    <template #input>
      <div class="space-y-4">
        <label class="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border p-8 text-center transition hover:border-primary/50">
          <span class="text-xl leading-none text-primary">↑</span>
          <span class="text-sm text-muted">Upload audio file</span>
          <input class="hidden" type="file" accept="audio/*" @change="onFileSelect" />
        </label>
      </div>
    </template>

    <template #processing>
      <div class="space-y-4">
        <p class="text-sm text-muted">Transcribing {{ fileName }}...</p>
        <div class="h-2 overflow-hidden rounded-full bg-card">
          <div
            class="h-full rounded-full bg-primary transition-all duration-300"
            :style="{ width: `${progress}%` }"
          />
        </div>
      </div>
    </template>

    <template #result>
      <div class="space-y-4">
        <BaseTextarea :model-value="transcript" :rows="10" disabled />
        <BaseButton variant="ghost" @click="reset">Transcribe Another File</BaseButton>
      </div>
    </template>
  </ToolLayout>
</template>
