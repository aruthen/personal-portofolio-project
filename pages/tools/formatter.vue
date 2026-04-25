<script setup lang="ts">
import { computed, ref } from 'vue'

const inputText = ref('')
const resultText = ref('')
const state = ref<'idle' | 'processing' | 'result'>('idle')
const copied = ref(false)
const errorMessage = ref('')

const canSubmit = computed(() => inputText.value.trim().length > 0)

const runFormatter = async () => {
  if (!canSubmit.value || state.value === 'processing') {
    return
  }

  copied.value = false
  errorMessage.value = ''
  state.value = 'processing'

  try {
    const response = await fetch('/api/formatter', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({ text: inputText.value })
    })

    if (!response.ok) {
      throw new Error('Formatter request failed')
    }

    const data = (await response.json()) as { result: string }

    resultText.value = data.result
    state.value = 'result'
  } catch (error) {
    state.value = 'idle'
    errorMessage.value = 'Unable to format text right now. Please try again.'
    console.error(error)
  }
}

const clearAll = () => {
  inputText.value = ''
  resultText.value = ''
  copied.value = false
  errorMessage.value = ''
  state.value = 'idle'
}

const copyOutput = async () => {
  if (!resultText.value) {
    return
  }

  await navigator.clipboard.writeText(resultText.value)
  copied.value = true
}

const exportOutput = () => {
  if (!resultText.value) {
    return
  }

  const blob = new Blob([resultText.value], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'formatted-text.txt'
  link.click()
  URL.revokeObjectURL(url)
}
</script>

<template>
  <ToolLayout
    title="Formatter"
    description="Clean and normalize text with a single action."
    :state="state"
  >
    <template #input>
      <div class="space-y-4">
        <BaseTextarea
          v-model="inputText"
          :rows="12"
          placeholder="Paste text here..."
        />

        <p v-if="errorMessage" class="text-sm text-primary/90">{{ errorMessage }}</p>

        <div class="flex flex-wrap gap-3">
          <BaseButton :disabled="!canSubmit" @click="runFormatter">Format Text</BaseButton>
          <BaseButton variant="ghost" @click="clearAll">Clear</BaseButton>
        </div>
      </div>
    </template>

    <template #processing>
      <div class="space-y-4">
        <div class="flex items-center gap-3 rounded-2xl border border-border bg-bg/60 p-4">
          <span class="h-5 w-5 animate-spin rounded-full border-2 border-primary border-r-transparent" />
          <span class="text-sm text-muted">Formatting content...</span>
        </div>
        <p class="text-xs text-muted">Please wait while we process your text.</p>
      </div>
    </template>

    <template #result>
      <div class="space-y-4">
        <BaseTextarea :model-value="resultText" :rows="12" disabled />

        <div class="flex flex-wrap gap-3">
          <BaseButton @click="copyOutput">{{ copied ? 'Copied' : 'Copy' }}</BaseButton>
          <BaseButton variant="outline" @click="exportOutput">Export .txt</BaseButton>
          <BaseButton variant="ghost" @click="clearAll">New Input</BaseButton>
        </div>
      </div>
    </template>
  </ToolLayout>
</template>
