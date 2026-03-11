export default async function handler(req, res) {
  const { url } = req.query

  if (!url) {
    return res.status(400).json({ error: 'URL parameter required' })
  }

  try {
    const postIdMatch = url.match(/\/p\/([A-Za-z0-9_-]+)|\/reel\/([A-Za-z0-9_-]+)/)
    if (!postIdMatch) {
      return res.status(400).json({ error: 'Invalid Instagram URL' })
    }

    const postId = postIdMatch[1] || postIdMatch[2]
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.5',
    }

    const decodeUrl = (value) => {
      if (!value) return null
      const decoded = value
        .replace(/\\u0026/g, '&')
        .replace(/\\\//g, '/')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#x27;/g, "'")
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')

      try {
        const parsed = new URL(decoded)
        parsed.searchParams.delete('stp')
        return parsed.toString()
      } catch {
        return decoded
      }
    }

    const normalizedUrl = (Array.isArray(url) ? url[0] : url).split('?')[0]
    const response = await fetch(normalizedUrl, { headers })
    if (!response.ok) {
      throw new Error('Failed to fetch Instagram page')
    }

    const html = await response.text()

    const displayUrlMatch = html.match(/"display_url":"(.*?)"/)
    const thumbnailSrcMatch = html.match(/"thumbnail_src":"(.*?)"/)
    const ogImageMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]+)/)

    let thumbnailUrl =
      decodeUrl(displayUrlMatch?.[1]) || decodeUrl(thumbnailSrcMatch?.[1]) || decodeUrl(ogImageMatch?.[1])

    if (thumbnailUrl) {
      thumbnailUrl = thumbnailUrl
        .replace(/([?&])stp=[^&]*&?/g, '$1')
        .replace(/[?&]$/, '')
        .replace('?&', '?')
    }

    if (!thumbnailUrl) {
      return res.status(502).json({
        error: 'Failed to extract Instagram image URL',
        postId,
      })
    }

    return res.status(200).json({
      thumbnail_url: thumbnailUrl,
      url: normalizedUrl,
      postId,
    })
  } catch (error) {
    console.error('Instagram embed error:', error)
    return res.status(500).json({
      error: 'Failed to fetch Instagram thumbnail',
      message: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}
