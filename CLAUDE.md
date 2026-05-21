# VoiceIt Website

Standalone-Marketing-Site für die VoiceIt macOS-App. Standalone-Repo `voiceitai/website` auf GitHub, Domain `voiceitai.app`, auto-deploy via Vercel. Forked von `websites/newways-website/` am 2026-05-15.

## Tech Stack

Identisch zu `websites/newways-website/` (siehe dortige CLAUDE.md für Design-System-Details):

- Next.js 16 (App Router, ESM, Turbopack)
- React 19, Tailwind CSS 4, GSAP 3.14 (ScrollTrigger)
- Lucide React, next-themes
- Vercel-Hosting, GitHub-CI

## Source der App

Die VoiceIt-App selbst liegt unter [`apps/Voiceit/`](../../apps/Voiceit/) — separates Tauri-Projekt, eigene CLAUDE.md dort. Download-CTAs auf der Website zeigen immer auf das Public-Mirror-Repo `newwaysai/voiceit-releases`:

```
https://github.com/newwaysai/voiceit-releases/releases/latest
```

`/releases/latest` redirected automatisch zur neuesten Version — nichts hardcoden, kein Versions-String.

## Page-Architektur

`src/app/page.js` rendert in dieser Reihenfolge (15 Sections):

1. VoiceItHero — 3-Mode-Demo
2. VoiceItPain
3. DownloadStrip — „Schluss mit Tippen."
4. VoiceItModes
5. VoiceItPromptCompare — Roh→Strukturiert + Anthropic-Quote
6. VoiceItFeatures
7. VoiceItProof — USP-Stats
8. VoiceItProofOfUse — Founder-Live-Stats
9. DownloadStrip (lime) — „Diktat gratis. Agent gibts obendrauf."
10. VoiceItVsWispr
11. VoiceItBonusStack — Wert-Stack vor Pricing
12. VoiceItPricing
13. DownloadStrip — „VoiceIt. Fertig."
14. VoiceItFAQ
15. VoiceItFinalCTA

Legal: `/datenschutz` + `/impressum` (Mini-Nav-Back-Link, kein Navbar).

Keine shared `<Navbar />` auf der Hauptseite — der dunkle Hero-Card ist self-contained.

## Branding-Regeln

- **Logo/Brand:** „VoiceIt." (Punkt im Accent-Blau) — überall sichtbar
- **Anbieter (legal):** Newways Consulting / Marcel Porcher — nur in Footer-Copyright + Impressum + Datenschutz
- **Voice:** kurz, direkt, ehrlich. Immer ä/ö/ü/ß. Keine em-dashes als Aufzählung.
- **Modell-Names secret:** auf der Page NIEMALS konkrete Tools/Modelle nennen (Parakeet, ONNX, TDT, OpenRouter etc.) — immer „lokales Voice-Modell" / „KI-Modell deiner Wahl"

## Deployment

```bash
npm run dev    # localhost:3000
npm run build  # Production-Build prüfen
git push       # → Vercel auto-deploy auf voiceitai.app
```

## DNS

- A Record `voiceitai.app` → `76.76.21.21` (Vercel Apex)
- CNAME `www.voiceitai.app` → `cname.vercel-dns.com` (308-Redirect zu Apex)

Setzbar via Namecheap-API (siehe Memory `reference_namecheap_api.md`) oder Dashboard.

## Future Ideas (nicht jetzt)

- **Englische Version** — separater Page-Tree unter `/en` oder eigene Domain `voiceit.app`
- **Stripe-Checkout integriert** — aktuell geht Download über GitHub-Release, falls Pricing direkt auf der Page kassieren soll: `src/app/api/stripe/*` aus newways-website mitkopieren + Env-Vars
- **Sister-Site newways.ai/voiceit-de** — bleibt aktuell parallel; später optional 308-Redirect auf voiceitai.app
