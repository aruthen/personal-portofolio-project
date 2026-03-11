export default async function handler(req, res) {
  const { url } = req.query

  if (!url) {
    return res.status(400).json({ error: 'URL parameter required' })
  }

  try {
    // Extract post ID from Instagram URL
    const postIdMatch = url.match(/\/p\/([A-Za-z0-9_-]+)|\/reel\/([A-Za-z0-9_-]+)/)
    if (!postIdMatch) {
      return res.status(400).json({ error: 'Invalid Instagram URL' })
    }

    const postId = postIdMatch[1] || postIdMatch[2]

    // Fetch Instagram page with User-Agent to get og:image
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
      },
    })

    if (!response.ok) {
      throw new Error('Failed to fetch Instagram page')
    }

    const html = await response.text()

    // Extract og:image from HTML meta tags
    const ogImageMatch = html.match(/<meta property="og:image" content="([^"]+["']?)/)
    const thumbnailUrl = ogImageMatch ? ogImageMatch[1].replace(/["']$/, '') : null

    return res.status(200).json({
      thumbnail_url: thumbnailUrl,
      url: url,
      postId: postId,
    })
  } catch (error) {
    console.error('Instagram embed error:', error)
    return res.status(500).json({
      error: 'Failed to fetch Instagram thumbnail',
      message: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}
