const RELEASES_API = 'https://api.github.com/repos/newwaysai/voiceit-releases/releases/latest'
const FALLBACK_URL = 'https://github.com/newwaysai/voiceit-releases/releases/latest'
const FALLBACK_FILENAME = 'Voiceit.dmg'

// Returns { url, filename } for the DMG asset in the latest release.
// Falls back to the /releases/latest page if the API is unreachable or no DMG found.
export async function getDownloadInfo() {
  try {
    const res = await fetch(RELEASES_API, {
      next: { revalidate: 3600 },
      headers: { Accept: 'application/vnd.github+json' },
    })
    if (!res.ok) return { url: FALLBACK_URL, filename: FALLBACK_FILENAME }
    const data = await res.json()
    const dmg = Array.isArray(data?.assets)
      ? data.assets.find((a) => typeof a?.name === 'string' && a.name.endsWith('.dmg') && a.name !== 'Voiceit.dmg')
      : null
    if (!dmg?.browser_download_url) return { url: FALLBACK_URL, filename: FALLBACK_FILENAME }
    return { url: dmg.browser_download_url, filename: dmg.name }
  } catch {
    return { url: FALLBACK_URL, filename: FALLBACK_FILENAME }
  }
}
