interface FormatterRequest {
  text?: string
}

const normalizeLine = (line: string) => line.replace(/\s+/g, ' ').trim()

export default defineEventHandler(async (event) => {
  const body = await readBody<FormatterRequest>(event)
  const source = body?.text ?? ''

  if (!source.trim()) {
    throw createError({ statusCode: 400, statusMessage: 'Text is required.' })
  }

  const paragraphs = source
    .split(/\n{2,}/)
    .map((paragraph) => paragraph.split('\n').map(normalizeLine).filter(Boolean).join(' '))
    .filter(Boolean)

  const result = paragraphs.join('\n\n')

  return { result }
})
