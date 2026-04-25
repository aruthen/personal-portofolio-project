<script setup lang="ts">
import { ref } from 'vue'

const subject = ref('')
const mood = ref('')
const state = ref<'idle' | 'processing' | 'result'>('idle')
const output = ref('')

const generate = async () => {
  if (!subject.value.trim() || !mood.value.trim()) {
    return
  }

  state.value = 'processing'

  try {
    const response = await fetch('/api/image-tone', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        subject: subject.value,
        mood: mood.value
      })
    })

    if (!response.ok) {
      throw new Error('Image tone request failed')
    }

    const data = (await response.json()) as { prompt: string }

    output.value = data.prompt
    state.value = 'result'
  } catch (error) {
    state.value = 'idle'
    console.error(error)
  }
}

const reset = () => {
  subject.value = ''
  mood.value = ''
  output.value = ''
  state.value = 'idle'
}
</script>

<template>
  <ToolLayout
    title="Image Tone"
    description="Create structured visual direction prompts for image generation workflows."
    :state="state"
  >
    <template #input>
      <div class="space-y-4">
        <BaseInput v-model="subject" placeholder="Subject: e.g. streetwear portrait" />
        <BaseInput v-model="mood" placeholder="Mood: e.g. cinematic, moody" />
        <div class="flex gap-3">
          <BaseButton @click="generate">Generate Prompt</BaseButton>
          <BaseButton variant="ghost" @click="reset">Clear</BaseButton>
        </div>
      </div>
    </template>

    <template #result>
      <div class="space-y-4">
        <BaseTextarea :model-value="output" :rows="10" disabled />
        <BaseButton variant="outline" @click="reset">New Prompt</BaseButton>
      </div>
    </template>
  </ToolLayout>
</template>
