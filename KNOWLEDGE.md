---
type: knowledge-base
status: active
source: voiceit-website
tags: [voiceit, deployment, vercel, github, i18n]
created: 2026-05-17
updated: 2026-05-17
scanned-by-kb: true
---

# VoiceIt Website — Knowledge Base

Marketing site für VoiceIt-App. Live unter **voiceitai.app**. Hosting via Vercel (Hobby-Plan, Team `marcel-3840s-projects`), Auto-Deploy aus dem GitHub-Repo `newwaysai/voiceit-website` (Branch `main`).

Forked am 2026-05-15 aus `projects/newways-website/`. Brand-Voice + Design-System siehe dortige CLAUDE.md.

## i18n / Sprachen

Seit 2026-05-17 zweisprachig — DE primär, EN als Spiegel.

- **DE-Routes:** `/`, `/datenschutz`, `/impressum`
- **EN-Routes:** `/en`, `/en/privacy` (Imprint bleibt rechtlich nur DE per § 5 TMG)

Wie es technisch funktioniert: jede Section-Komponente in `src/components/voiceit/` akzeptiert ein `lang`-Prop (`'de' | 'en'`). Oben in der Datei steht ein `COPY = { de: {...}, en: {...} }`-Dictionary. Die Komponente zieht alle User-facing Strings aus `COPY[lang]`. `src/app/page.js` rendert mit `lang="de"`, `src/app/en/page.js` mit `lang="en"`. Section-IDs (`#modi`, `#features`, `#preise`, `#faq`) bleiben gleich auf beiden Routes — der Scroll-To-Nav funktioniert dadurch in beiden Sprachen.

Sprach-Switcher sitzt in `VoiceItNavbar.jsx` als DE/EN-Pill, linkt direkt zur jeweils anderen Route. Footer (`src/components/Footer.jsx`) ist genauso locale-aware.

Wenn du Copy änderst: in **beiden** `COPY`-Blöcken (de + en) der entsprechenden Komponente — sonst läuft eine Sprache aus dem Synch.

## Deployment

Push auf `main` → Vercel baut automatisch → in ~15 Sekunden live auf `voiceitai.app`. Kein manueller Trigger nötig.

GitHub Pages Workflow als Fallback im Repo: `.github/workflows/deploy.yml`. Deployt parallel nach `newwaysai.github.io/voiceit-website/` bei jedem Push. Nur als Backup gedacht falls Vercel mal wieder ausfällt — DNS-Switch dafür: 4 A-Records bei Namecheap auf `185.199.108-111.153`.

`next.config.mjs` ist auf `output: 'export'` gesetzt — funktioniert sowohl auf Vercel als auch auf statischen Hosts. Site ist vollständig statisch, keine SSR-Routes.

## Incident-Log

### 2026-05-17 — Vercel Auto-Deploy silent broken

**Symptom:** Pushes auf `main` triggerten keinen Vercel-Build mehr. `vercel ls` zeigte 14+ Deploys in Folge mit Status `UNKNOWN` (Build wurde nie gestartet). voiceitai.app blieb auf alter Version hängen, neue Commits gingen ins Leere.

**Falsche Hypothesen die wir ausgeschlossen haben:**
- 2000-CLI-Deploys/Woche-Limit gerissen — falsch, Usage war bei <1% (`vercel.com/marcel-3840s-projects/~/usage`)
- Free-Plan-Restriktion — falsch, Hobby-Plan ist generös
- Billing-Adresse Pflicht — falsch, neuer Account-Setup hatte keinen Einfluss auf Auto-Deploy

**Echte Ursache:** Vercel-Platform-Glitch — die GitHub-App-Verbindung wurde silent invalidiert. Vercel zeigt das nirgends als Fehler an, deshalb so schwer zu finden. `vercel project inspect voiceit-website` zeigte keine Git-Connection mehr, `vercel git connect` gab "Failed to connect" zurück.

**Fix (2 Schritte):**
1. Vercel GitHub-App neu installiert: `github.com/apps/vercel/installations/new` → Repo `voiceit-website` selektiert → Save
2. Im Vercel-Dashboard unter Project Settings → Git: Repo neu verbunden
3. Empty-Commit getriggert (`git commit --allow-empty -m "..."` + push) → Vercel baute in 14s, Status Ready

**Verifikation:** Zwei aufeinanderfolgende Pushes deployten beide in <16s als Ready → Pipeline stabil. Cleanup der alten UNKNOWN-Deploys mit `vercel rm voiceit-website --safe --yes` (`--safe` schützt aktive Aliase, sonst wäre voiceitai.app down gegangen).

**Memory:** Diagnose-Pfad ist in `~/.claude/projects/.../memory/reference_vercel_github_disconnect_fix.md` festgehalten — falls das nochmal passiert, sofort GitHub-App reauthen, nicht erst Quotas debuggen.
