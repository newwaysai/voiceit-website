const RELEASES_API = 'https://api.github.com/repos/newwaysai/voiceit-releases/releases/latest'
const LATEST_DOWNLOAD_BASE = 'https://github.com/newwaysai/voiceit-releases/releases/latest/download'
const FALLBACK_URL = 'https://github.com/newwaysai/voiceit-releases/releases/latest'
const FALLBACK_FILENAME = 'Voiceit.dmg'

// Returns { url, filename } for the DMG asset in the latest release.
//
// The URL is built against the version-agnostic `/releases/latest/download/<file>`
// path — NOT the asset's pinned `browser_download_url` (which embeds the version,
// e.g. .../v0.7.124/...). GitHub resolves `/latest/download/` to the current
// release server-side, so even if this page's ISR cache outlives a new release,
// the link still serves the newest DMG instead of a stale one. We only read the
// API to learn the current filename (which carries the version, e.g.
// Voiceit_0.7.129_aarch64.dmg) so the Save-As name is right.
//
// revalidate is 300s (was 3600s): after Marcel publishes a release the page
// self-heals within 5 min instead of up to an hour. Falls back to the
// /releases/latest page if the API is unreachable or no DMG is found.
export async function getDownloadInfo() {
  try {
    const res = await fetch(RELEASES_API, {
      next: { revalidate: 300 },
      headers: { Accept: 'application/vnd.github+json' },
    })
    if (!res.ok) return { url: FALLBACK_URL, filename: FALLBACK_FILENAME }
    const data = await res.json()
    const dmg = Array.isArray(data?.assets)
      ? data.assets.find((a) => typeof a?.name === 'string' && a.name.endsWith('.dmg') && a.name !== 'Voiceit.dmg')
      : null
    if (!dmg?.name) return { url: FALLBACK_URL, filename: FALLBACK_FILENAME }
    return { url: `${LATEST_DOWNLOAD_BASE}/${dmg.name}`, filename: dmg.name }
  } catch {
    return { url: FALLBACK_URL, filename: FALLBACK_FILENAME }
  }
}
