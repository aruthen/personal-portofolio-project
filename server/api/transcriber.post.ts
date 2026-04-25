interface TranscriberRequest {
  fileName?: string
}

export default defineEventHandler(async (event) => {
  const body = await readBody<TranscriberRequest>(event)

  return {
    status: 'queued',
    message: 'Transcriber endpoint is ready for provider integration.',
    fileName: body?.fileName ?? null
  }
})
