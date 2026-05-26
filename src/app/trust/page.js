import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Trust bei VoiceIt',
};

const LAST_UPDATED = '22. Mai 2026';
const VERSION = 'v1.0';

export default function TrustDE() {
  return (
    <div className="bg-background min-h-screen text-primary">
      <main className="pt-16 pb-20 px-6 md:px-16 max-w-4xl mx-auto">
        <div className="mb-12 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-primary/50 hover:text-primary transition-colors font-sans text-sm">
            <ArrowLeft size={16} /> Zurück
          </Link>
          <div className="text-xl font-heading font-bold tracking-tight text-primary">
            Voiceit<span className="text-accent">.</span> <span className="text-primary/30 font-light text-sm">/ Trust</span>
          </div>
        </div>
        <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">Trust bei VoiceIt</h1>
        <p className="font-sans text-xs text-primary/40 mb-12">
          Stand: {LAST_UPDATED} · Version {VERSION}
        </p>
        <div className="font-sans text-primary/70 space-y-8 leading-relaxed text-sm">

          <p className="font-bold text-primary text-base">
            Diktat bleibt lokal. KI nur wenn du sie brauchst. Daten bleiben in Europa.
          </p>
          <p>
            VoiceIt verbindet die Geschwindigkeit von Cloud-Diktat mit der Privatsphäre lokaler Verarbeitung. Hier siehst du in klaren Worten, was mit deinen Daten passiert.
          </p>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Die Kurzfassung</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong className="text-primary">Deine Stimme verlässt deinen Mac nie.</strong> Speech-to-Text läuft komplett on-device, ausnahmslos.</li>
              <li><strong className="text-primary">KI ist opt-in.</strong> Normales Diktat ruft niemals einen KI-Dienst auf. Nur Prompt-Modus und Agent-Modus tun das — und nur nachdem du den Hotkey drückst.</li>
              <li><strong className="text-primary">KI-Verarbeitung bleibt in Europa.</strong> Wenn du KI nutzt, wird dein Transkript von Google Vertex AI in <strong>Frankfurt</strong> verarbeitet — niemals in den USA.</li>
              <li><strong className="text-primary">Kein Training mit deinen Daten.</strong> Deine Transkripte werden nicht zum Training von KI-Modellen verwendet.</li>
              <li><strong className="text-primary">Kein Tracking, keine Werbung, keine Analytics.</strong> Wir wissen nicht, was du diktierst. Wir wollen es auch nicht wissen.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Was auf deinem Gerät bleibt</h2>
            <p>
              Alles unten Aufgeführte wird ausschließlich auf deinem Mac verarbeitet. Wir sehen es nie. Kein Server, kein Log, kein Backup.
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>Die Audio-Aufnahme deines Mikrofons während du den Hotkey hältst</li>
              <li>Der transkribierte Text vom on-device Sprachmodell</li>
              <li>Deine Transkriptionshistorie (bis zu 30 Tage, danach automatisch gelöscht)</li>
              <li>Dein individuelles Wörterbuch, Voice-Filler und Prompt-Templates</li>
              <li>Deine App-Einstellungen (Hotkeys, Sprache, Theme, Mikrofon-Auswahl)</li>
              <li>Das 30-Tage-Audio-Archiv (rolling-basis-Auto-Löschung)</li>
            </ul>
            <p className="mt-3">
              Wenn du VoiceIt deinstallierst und <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">~/Library/Application Support/com.newways.voiceit/</code> löschst, ist alles weg.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Was wir übertragen — und nur wenn du es willst</h2>

            <h3 className="font-bold text-primary mt-4 mb-2">Prompt-Modus und Agent-Modus (KI-Text-Verarbeitung)</h3>
            <p>
              Wenn du Prompt-Modus oder Agent-Modus auslöst, wird der <strong>bereits transkribierte Text</strong> (und im Agent-Modus dein in einer anderen App markierter Text) an ein großes Sprachmodell zur Umstrukturierung oder Transformation gesendet.
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li><strong>Audio wird NIE gesendet.</strong> Nur der transkribierte Text.</li>
              <li><strong>Routing:</strong> Request geht an unsere Supabase Edge Function (<code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">voiceit-proxy-vertex</code>), die Google Vertex AI in <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">europe-west3</code> (Frankfurt) aufruft. Falls Frankfurt nicht verfügbar ist, Failover zu <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">europe-west4</code> (Amsterdam). Beide sind EU-Regionen.</li>
              <li><strong>Modell:</strong> Google Gemini 2.5 Flash auf Vertex AI.</li>
              <li><strong>Gesendete Daten:</strong> das Transkript, dein markierter Text (nur Agent-Modus), der System-Prompt, deine anonyme Device-ID zum Rate-Limiting, dein Tarif.</li>
              <li><strong>Aufbewahrung bei uns:</strong> Keine. Google behält einen kurzlebigen Abuse-Cache (~24 Stunden), Standard für Vertex AI.</li>
              <li><strong>Training:</strong> Vertex AI trainiert <strong>nicht</strong> mit Kundendaten — Standard im Google Cloud DPA.</li>
              <li><strong>Opt-out:</strong> Nutze einfach nur normalen Diktat-Modus. Plain Dictation ruft keinen KI-Dienst auf.</li>
            </ul>

            <h3 className="font-bold text-primary mt-6 mb-2">Update-Checks</h3>
            <p>
              VoiceIt prüft <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">latest.json</code> von <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">github.com/newwaysai/voiceit-releases</code> bei App-Start und periodisch (alle 30 Min). Standard-HTTPS-Request, übermittelt nur was GitHub standardmäßig loggt (IP, User-Agent).
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">Lizenz-Verifikation</h3>
            <p>
              Wenn du ein bezahltes Abo hast, kontaktiert die App Supabase bei App-Start und alle 30 Minuten zur Bestätigung deines Abos. Gesendete Daten: anonyme Device-ID.
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">Crash- und Fehlerberichte</h3>
            <p>
              Fehler werden nur lokal auf deinem Mac geloggt (<code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">~/Library/Logs/com.newways.voiceit/</code>). Keine automatischen Crash-Reports.
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">In-App-Feedback</h3>
            <p>
              Wenn du Feedback über das In-App-Formular sendest, geht der Text plus deine E-Mail (falls angegeben), Device-ID, Tarif, App-Version und OS-Familie an unser Supabase-Projekt (EU, Dublin/Irland). Sonst nichts.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Wo KI-Verarbeitung passiert</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left mt-2 border-collapse">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="py-2 pr-3 text-primary font-semibold">Komponente</th>
                    <th className="py-2 pr-3 text-primary font-semibold">Region</th>
                    <th className="py-2 pr-3 text-primary font-semibold">Anbieter</th>
                    <th className="py-2 text-primary font-semibold">Hinweise</th>
                  </tr>
                </thead>
                <tbody className="text-primary/70">
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Voice-to-Text (Parakeet)</td><td className="py-2 pr-3"><strong>Auf deinem Mac</strong></td><td className="py-2 pr-3">NVIDIA Parakeet TDT v3 ONNX (gebundelt)</td><td className="py-2">Audio verlässt das Gerät nie</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Text-Verfeinerung (LLM)</td><td className="py-2 pr-3"><strong>Frankfurt</strong></td><td className="py-2 pr-3">Google Vertex AI</td><td className="py-2">Gemini 2.5 Flash, kein Training</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">LLM-Failover-Region</td><td className="py-2 pr-3">Amsterdam, Niederlande</td><td className="py-2 pr-3">Google Vertex AI</td><td className="py-2">Nur wenn Frankfurt nicht verfügbar</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Konto + Lizenz</td><td className="py-2 pr-3"><strong>Dublin, Irland</strong></td><td className="py-2 pr-3">Supabase</td><td className="py-2">EU-gehostet</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Zahlungen</td><td className="py-2 pr-3">EU + USA</td><td className="py-2 pr-3">Stripe</td><td className="py-2">DPF + SCC für US-Operationen</td></tr>
                  <tr><td className="py-2 pr-3">Updates</td><td className="py-2 pr-3">USA</td><td className="py-2 pr-3">GitHub</td><td className="py-2">Nur Static-File-Download</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              Alle KI-Verarbeitung passiert in der EU. Die einzigen US-Subprozessoren in VoiceIt sind Stripe (Zahlungen) und GitHub (Static-File-Hosting für App-Updates) — keiner von beiden sieht jemals dein Diktat.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Was wir nie tun</h2>
            <ul className="list-none space-y-1">
              <li>❌ Wir senden NIE deine Audio-Aufnahmen irgendwohin</li>
              <li>❌ Wir trainieren NIE KI-Modelle mit deinen Daten</li>
              <li>❌ Wir führen KEINE Analytics oder Telemetrie in der App</li>
              <li>❌ Wir verkaufen NIE deine Daten an Werbetreibende</li>
              <li>❌ Wir verwenden KEINE Tracking-Scripts in der App</li>
              <li>❌ Wir lesen NIE deine Transkriptionshistorie — sie bleibt auf deinem Mac</li>
              <li>❌ Wir routen NIE KI-Traffic durch die USA</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Subprozessoren auf einen Blick</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left mt-2 border-collapse text-xs">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="py-2 pr-3 text-primary font-semibold">Subprozessor</th>
                    <th className="py-2 pr-3 text-primary font-semibold">Standort</th>
                    <th className="py-2 pr-3 text-primary font-semibold">Funktion</th>
                    <th className="py-2 text-primary font-semibold">Sieht was</th>
                  </tr>
                </thead>
                <tbody className="text-primary/70 align-top">
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Supabase (EU, Dublin/Irland)</td><td className="py-2 pr-3">Deutschland</td><td className="py-2 pr-3">Konto, Lizenz, KI-Proxy</td><td className="py-2">E-Mail, Device-ID, Transkript (nur während KI-Calls, keine Speicherung)</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Google Cloud EMEA Ltd (Vertex AI)</td><td className="py-2 pr-3">Irland / Frankfurt</td><td className="py-2 pr-3">LLM-Provider (Gemini 2.5 Flash)</td><td className="py-2">Transkribierter Text, ~24h Abuse-Cache, kein Training</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Stripe Payments Europe</td><td className="py-2 pr-3">Irland + USA (DPF)</td><td className="py-2 pr-3">Zahlungsabwicklung</td><td className="py-2">Name, Rechnungsadresse, Kartendaten (wir sehen keine Kartendaten)</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">GitHub Inc. (Microsoft)</td><td className="py-2 pr-3">USA (DPF)</td><td className="py-2 pr-3">Static-File-Hosting für Updates</td><td className="py-2">IP zum Download-Zeitpunkt</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Brevo (Sendinblue)</td><td className="py-2 pr-3">Berlin, Deutschland</td><td className="py-2 pr-3">Marketing-E-Mails (nur wenn opt-in)</td><td className="py-2">E-Mail + Name</td></tr>
                  <tr><td className="py-2 pr-3">Vercel Inc.</td><td className="py-2 pr-3">USA (DPF)</td><td className="py-2 pr-3">Marketing-Website-Hosting</td><td className="py-2">IP, Request-Logs</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              Vollständige Datenschutz-Vereinbarungen (AVV) mit allen Subprozessoren die personenbezogene Daten verarbeiten. Einzeln aufgeführt in unserer <Link href="/datenschutz" className="text-accent underline">Datenschutzerklärung</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Deine Rechte unter DSGVO</h2>
            <p>Du hast das Recht auf:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li><strong>Auskunft</strong> über die personenbezogenen Daten, die wir über dich gespeichert haben (Art. 15)</li>
              <li><strong>Berichtigung</strong> falscher Daten (Art. 16)</li>
              <li><strong>Löschung</strong> deiner Daten — Recht auf Vergessenwerden (Art. 17)</li>
              <li><strong>Einschränkung</strong> der Verarbeitung (Art. 18)</li>
              <li><strong>Datenübertragbarkeit</strong> zu einem anderen Dienst (Art. 20)</li>
              <li><strong>Widerspruch</strong> gegen Verarbeitung auf Basis berechtigter Interessen (Art. 21)</li>
              <li><strong>Widerruf der Einwilligung</strong> jederzeit (Art. 7(3))</li>
              <li><strong>Beschwerde</strong> bei der Berliner Beauftragten für Datenschutz und Informationsfreiheit (<a href="https://www.datenschutz-berlin.de" target="_blank" rel="noopener noreferrer" className="text-accent underline">datenschutz-berlin.de</a>)</li>
            </ul>
            <p className="mt-3">
              Um deine Rechte auszuüben, schreibe an <strong>marcel@newways.ai</strong>. Wir antworten binnen 30 Tagen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Wie VoiceIt im Vergleich steht</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left mt-2 border-collapse text-xs">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="py-2 pr-3 text-primary font-semibold"></th>
                    <th className="py-2 pr-3 text-primary font-semibold">VoiceIt</th>
                    <th className="py-2 pr-3 text-primary font-semibold">WisprFlow</th>
                    <th className="py-2 pr-3 text-primary font-semibold">SuperWhisper</th>
                    <th className="py-2 text-primary font-semibold">Voicely</th>
                  </tr>
                </thead>
                <tbody className="text-primary/70">
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3 font-semibold">Sprachverarbeitung on-device</td><td className="py-2 pr-3">✅</td><td className="py-2 pr-3">✅</td><td className="py-2 pr-3">✅</td><td className="py-2">⚠️</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3 font-semibold">KI-Verarbeitung in der EU</td><td className="py-2 pr-3">✅ Frankfurt</td><td className="py-2 pr-3">❌ USA</td><td className="py-2 pr-3">❌ USA</td><td className="py-2">❌ USA</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3 font-semibold">Audio wird nie in die Cloud gesendet</td><td className="py-2 pr-3">✅</td><td className="py-2 pr-3">✅</td><td className="py-2 pr-3">✅</td><td className="py-2">⚠️</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3 font-semibold">Kein Training mit Nutzerdaten</td><td className="py-2 pr-3">✅</td><td className="py-2 pr-3">✅ vertraglich</td><td className="py-2 pr-3">✅ vertraglich</td><td className="py-2">❓</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3 font-semibold">DSGVO-native (deutsches Unternehmen)</td><td className="py-2 pr-3">✅</td><td className="py-2 pr-3">❌</td><td className="py-2 pr-3">❌</td><td className="py-2">❌</td></tr>
                  <tr><td className="py-2 pr-3 font-semibold">Offene Subprozessoren-Liste</td><td className="py-2 pr-3">✅ öffentlich</td><td className="py-2 pr-3">❓</td><td className="py-2 pr-3">❓</td><td className="py-2">❓</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs">
              Zuletzt geprüft: 2026-05-22. Wir prüfen Konkurrenz-Claims quartalsweise.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Weiterführend</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li><Link href="/datenschutz" className="text-accent underline">Datenschutzerklärung (Deutsch)</Link> — vollständige DSGVO-Dokumentation, rechtsverbindlich</li>
              <li><Link href="/en/privacy" className="text-accent underline">Privacy Policy (English)</Link> — Original English Version</li>
              <li><Link href="/agb" className="text-accent underline">Allgemeine Geschäftsbedingungen</Link></li>
              <li><Link href="/en/terms" className="text-accent underline">Terms of Service</Link></li>
              <li><Link href="/impressum" className="text-accent underline">Impressum</Link></li>
            </ul>
            <p className="mt-3">
              Für tiefergehende Fragen zum Umgang mit Daten schreibe an <strong>marcel@newways.ai</strong>.
            </p>
          </section>

          <p className="text-xs text-primary/40 mt-12 border-t border-primary/10 pt-8">
            Verantwortlicher: Marcel Porcher · Newways · Rabestraße 6 · 10405 Berlin · Deutschland<br />
            USt-IdNr.: DE344920245 · E-Mail: marcel@newways.ai
          </p>
        </div>
      </main>
      <Footer lang="de" />
    </div>
  );
}
