interface ImageToneRequest {
  subject?: string
  mood?: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ImageToneRequest>(event)
  const subject = body?.subject?.trim() || 'editorial portrait'
  const mood = body?.mood?.trim() || 'clean cinematic'

  return {
    prompt: `Create a ${mood} visual of ${subject}. Use high-contrast lighting, subtle film grain, and a premium SaaS-style composition with negative space for headline overlays.`
  }
})
