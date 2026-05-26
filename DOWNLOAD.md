# VoiceIt Download — How It Works

## Architecture (since v0.7.60)

The website fetches the **direct asset URL** from the GitHub API at render time.
No stable alias filename needed — no `Voiceit.dmg` uploaded by CI.

```
git tag v0.X.Y
  → CI builds DMG → uploads Voiceit_0.X.Y_aarch64.dmg to voiceit-releases
  → Vercel (next request after 1h cache) → GitHub API → gets browser_download_url
  → User clicks button → browser saves Voiceit_0.X.Y_aarch64.dmg to ~/Downloads
```

## How `src/lib/version.js` works

Calls `https://api.github.com/repos/newwaysai/voiceit-releases/releases/latest`,
finds the first `.dmg` asset, returns `{ url, filename }`.

- `url` → direct `browser_download_url` from GitHub (e.g. `.../releases/download/v0.7.60/Voiceit_0.7.60_aarch64.dmg`)
- `filename` → asset name (e.g. `Voiceit_0.7.60_aarch64.dmg`)
- Fallback if API unreachable: `{ url: /releases/latest, filename: 'Voiceit.dmg' }`
- Cache: `next: { revalidate: 3600 }` — Vercel re-fetches at most once per hour

## Why `download` attribute is required

All `<a>` tags must include `download={downloadFilename}`.
Without it, Chrome follows GitHub's 302 redirect chain and navigates to GitHub
instead of saving the file. The attribute forces a file-save dialog.

## Props flow

`page.js` and `en/page.js` call `getDownloadInfo()` once and pass
`downloadUrl` + `downloadFilename` as props to all 7 download components:

- `src/components/voiceit/VoiceItNavbar.jsx`
- `src/components/voiceit/VoiceItHero.jsx`
- `src/components/voiceit/VoiceItDownloadStrip.jsx` (used 3× per page)
- `src/components/voiceit/VoiceItFinalCTA.jsx`
- `src/components/voiceit/VoiceItVsWispr.jsx`
- `src/components/voiceit/VoiceItPricing.jsx`
- `src/components/Footer.jsx`

## CI side — nothing special needed

CI only uploads `Voiceit_X.Y.Z_aarch64.dmg` (the normal Tauri output).
No alias step. The website picks up the new version automatically within 1 hour.
