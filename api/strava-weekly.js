const STRAVA_TOKEN_URL = 'https://www.strava.com/oauth/token'
const STRAVA_ACTIVITIES_URL = 'https://www.strava.com/api/v3/athlete/activities'

function getWeekStart(dateInput) {
  const date = new Date(dateInput)
  const day = date.getUTCDay()
  const diffToMonday = (day + 6) % 7
  date.setUTCDate(date.getUTCDate() - diffToMonday)
  date.setUTCHours(0, 0, 0, 0)
  return date
}

function formatWeekLabel(weekStartDate) {
  return weekStartDate.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
    timeZone: 'UTC',
  })
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const clientId = process.env.STRAVA_CLIENT_ID
  const clientSecret = process.env.STRAVA_CLIENT_SECRET
  const refreshToken = process.env.STRAVA_REFRESH_TOKEN

  if (!clientId || !clientSecret || !refreshToken) {
    return res.status(503).json({
      message:
        'Strava belum dikonfigurasi. Set STRAVA_CLIENT_ID, STRAVA_CLIENT_SECRET, dan STRAVA_REFRESH_TOKEN di Vercel Environment Variables.',
    })
  }

  try {
    const tokenResponse = await fetch(STRAVA_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'refresh_token',
        refresh_token: refreshToken,
      }),
    })

    if (!tokenResponse.ok) {
      const tokenError = await tokenResponse.text()
      return res.status(502).json({ message: 'Gagal refresh token Strava.', detail: tokenError })
    }

    const tokenData = await tokenResponse.json()
    const accessToken = tokenData.access_token

    const now = Date.now()
    const weeksToShow = 8
    const afterUnix = Math.floor(now / 1000) - weeksToShow * 7 * 24 * 60 * 60

    const activitiesResponse = await fetch(
      `${STRAVA_ACTIVITIES_URL}?per_page=100&page=1&after=${afterUnix}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    )

    if (!activitiesResponse.ok) {
      const activityError = await activitiesResponse.text()
      return res.status(502).json({ message: 'Gagal mengambil aktivitas Strava.', detail: activityError })
    }

    const activities = await activitiesResponse.json()
    const runs = activities.filter((activity) => activity.type === 'Run')

    const weekMap = new Map()

    runs.forEach((run) => {
      const weekStart = getWeekStart(run.start_date)
      const weekKey = weekStart.toISOString().slice(0, 10)
      const current = weekMap.get(weekKey) || {
        weekKey,
        weekLabel: formatWeekLabel(weekStart),
        distanceKm: 0,
        movingTimeMinutes: 0,
        runCount: 0,
      }

      current.distanceKm += (run.distance || 0) / 1000
      current.movingTimeMinutes += Math.round((run.moving_time || 0) / 60)
      current.runCount += 1

      weekMap.set(weekKey, current)
    })

    const allWeeks = []
    const currentWeekStart = getWeekStart(new Date())

    for (let i = weeksToShow - 1; i >= 0; i -= 1) {
      const weekStart = new Date(currentWeekStart)
      weekStart.setUTCDate(weekStart.getUTCDate() - i * 7)
      const weekKey = weekStart.toISOString().slice(0, 10)
      const existingWeek = weekMap.get(weekKey)

      allWeeks.push(
        existingWeek || {
          weekKey,
          weekLabel: formatWeekLabel(weekStart),
          distanceKm: 0,
          movingTimeMinutes: 0,
          runCount: 0,
        },
      )
    }

    const normalizedWeeks = allWeeks.map((week) => ({
      ...week,
      distanceKm: Number(week.distanceKm.toFixed(2)),
    }))

    return res.status(200).json({
      weeks: normalizedWeeks,
      summary: {
        totalDistanceKm: Number(
          normalizedWeeks.reduce((sum, week) => sum + week.distanceKm, 0).toFixed(2),
        ),
        totalRuns: normalizedWeeks.reduce((sum, week) => sum + week.runCount, 0),
      },
    })
  } catch (error) {
    return res.status(500).json({
      message: 'Terjadi error saat memproses data Strava.',
      detail: error instanceof Error ? error.message : 'Unknown error',
    })
  }
}
