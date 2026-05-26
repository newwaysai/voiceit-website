import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Datenschutzerklärung',
};

const LAST_UPDATED = '22. Mai 2026';
const VERSION = 'v1.4';

export default function Datenschutz() {
  return (
    <div className="bg-background min-h-screen text-primary">
      <main className="pt-16 pb-20 px-6 md:px-16 max-w-4xl mx-auto">
        <div className="mb-12 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-primary/50 hover:text-primary transition-colors font-sans text-sm">
            <ArrowLeft size={16} /> Zurück
          </Link>
          <div className="text-xl font-heading font-bold tracking-tight text-primary">
            Voiceit<span className="text-accent">.</span> <span className="text-primary/30 font-light text-sm">/ Datenschutz</span>
          </div>
        </div>
        <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">Datenschutzerklärung</h1>
        <p className="font-sans text-xs text-primary/40 mb-12">
          Stand: {LAST_UPDATED} · Version {VERSION} · Diese deutsche Fassung ist die rechtlich verbindliche.
        </p>
        <div className="font-sans text-primary/70 space-y-8 leading-relaxed text-sm">

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen
              personenbezogenen Daten passiert, wenn du diese Website besuchst oder unsere macOS-App
              Voiceit nutzt.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Wichtig:</strong> Voiceit verarbeitet Sprache lokal auf
              deinem Gerät. Audio-Aufnahmen verlassen dein Gerät nicht. Erst wenn du Prompt- oder
              Agent-Mode aktiv nutzt, geht der bereits transkribierte <em>Text</em> (nie Audio) an
              einen KI-Anbieter.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">2. Verantwortlicher i.S.d. DSGVO</h2>
            <p>
              Verantwortliche Stelle im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer
              datenschutzrechtlicher Bestimmungen ist:
            </p>
            <p className="mt-3">
              Marcel Porcher<br />
              Newways<br />
              Rabestraße 6<br />
              10405 Berlin<br />
              USt-IdNr: DE344920245<br />
              E-Mail:{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">
                marcel@newways.ai
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">3. Datenschutzbeauftragter</h2>
            <p>
              Es besteht keine gesetzliche Pflicht zur Bestellung eines Datenschutzbeauftragten
              nach Art. 37 DSGVO und § 38 BDSG (Solo-Selbständiger, keine regelmäßige umfangreiche
              Verarbeitung besonderer Kategorien). Datenschutzanfragen richtest du direkt an{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">
                marcel@newways.ai
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">4. Rechtsgrundlagen und Speicherdauer</h2>
            <h3 className="font-bold text-primary mb-2">Rechtsgrundlagen Art. 6 DSGVO</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Art. 6 Abs. 1 lit. a</strong> (Einwilligung): Newsletter, Lead-Magnete, Instagram-Keyword-Comment-DM, Marketing-E-Mails</li>
              <li><strong>Art. 6 Abs. 1 lit. b</strong> (Vertragserfüllung): App-Bereitstellung, Account, Pro-Subscription via Stripe</li>
              <li><strong>Art. 6 Abs. 1 lit. c</strong> (rechtliche Verpflichtung): Aufbewahrung steuerrelevanter Daten</li>
              <li><strong>Art. 6 Abs. 1 lit. f</strong> (berechtigtes Interesse): Hosting-Logs, Trustpilot-Widget, externe Verlinkungen, Update-Checks</li>
            </ul>

            <h3 className="font-bold text-primary mt-6 mb-2">Interessenabwägung bei Art. 6(1)(f)</h3>
            <p>
              Bei Verarbeitungen auf Basis berechtigter Interessen führen wir eine schriftliche
              Interessenabwägung durch. Diese Dokumentation legen wir auf Anfrage der zuständigen
              Aufsichtsbehörde vor.
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">Aufbewahrungsdauer pro Datenkategorie</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left mt-2 border-collapse">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="py-2 pr-3 text-primary font-semibold">Datenkategorie</th>
                    <th className="py-2 pr-3 text-primary font-semibold">Speicherdauer</th>
                    <th className="py-2 text-primary font-semibold">Rechtsgrundlage</th>
                  </tr>
                </thead>
                <tbody className="text-primary/70">
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Hosting-Logs Vercel (IP, User-Agent)</td><td className="py-2 pr-3">7 Tage volle Logs, danach 23 Tage aggregiert</td><td className="py-2">Art. 6(1)(f)</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Newsletter-/Lead-Magnet-E-Mails</td><td className="py-2 pr-3">bis Widerruf + 1 Monat</td><td className="py-2">Art. 6(1)(a)</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Account-Daten Supabase</td><td className="py-2 pr-3">solange Account besteht, bei Löschung sofort</td><td className="py-2">Art. 6(1)(b)</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Stripe-Zahlungsbelege</td><td className="py-2 pr-3">10 Jahre (GoBD/§ 147 AO)</td><td className="py-2">Art. 6(1)(c)</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Lokale Transkripte und Audio</td><td className="py-2 pr-3">30 Tage Auto-Löschung, jederzeit manuell löschbar</td><td className="py-2">lokal, keine Übertragung</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">KI-Anfragen Google Vertex AI</td><td className="py-2 pr-3">~24h Abuse-Cache (kein Training auf Kundendaten)</td><td className="py-2">Art. 6(1)(b)</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Lizenz-Verifikations-Logs</td><td className="py-2 pr-3">30 Tage (Supabase Edge Function Logs)</td><td className="py-2">Art. 6(1)(b)/(f)</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">In-App-Feedback</td><td className="py-2 pr-3">bis Issue geschlossen, danach 2 Jahre Archiv</td><td className="py-2">Art. 6(1)(f)</td></tr>
                  <tr><td className="py-2 pr-3">E-Mail-Korrespondenz</td><td className="py-2 pr-3">3 Jahre nach Anliegen-Abschluss</td><td className="py-2">Art. 6(1)(b)/(f)</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">5. Rechte der betroffenen Person</h2>
            <p>Als betroffene Person hast du jederzeit das Recht auf:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>Auskunft (Art. 15 DSGVO)</li>
              <li>Berichtigung (Art. 16 DSGVO)</li>
              <li>Löschung / „Recht auf Vergessenwerden" (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch (Art. 21 DSGVO)</li>
              <li>Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
              <li>Beschwerde bei einer Aufsichtsbehörde</li>
            </ul>
            <p className="mt-3">
              Zur Geltendmachung genügt eine formlose Mitteilung an{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">
                marcel@newways.ai
              </a>. Wir antworten innerhalb von 30 Tagen.
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">Widerspruchsrecht Art. 21 bei Direktwerbung</h3>
            <p>
              Du kannst jederzeit Widerspruch gegen die Verarbeitung deiner Daten zur Direktwerbung
              einlegen — per Klick auf den Abmeldelink in jeder E-Mail oder per Nachricht an{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">marcel@newways.ai</a>.
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">Zuständige Aufsichtsbehörde</h3>
            <p>
              Berliner Beauftragte für Datenschutz und Informationsfreiheit (BlnBDI)<br />
              Friedrichstr. 219, 10969 Berlin<br />
              Telefon: +49 (0)30 13889-0<br />
              E-Mail: mailbox@datenschutz-berlin.de<br />
              Web:{' '}
              <a href="https://www.datenschutz-berlin.de/" target="_blank" rel="noopener noreferrer" className="text-accent underline">
                datenschutz-berlin.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">6. Automatisierte Entscheidungen (Art. 22 DSGVO)</h2>
            <p>
              Wir setzen keine automatisierten Entscheidungsverfahren im Sinne des Art. 22 DSGVO
              ein. Voiceit trifft keine rechtlich bindenden oder vergleichbar erheblichen
              Entscheidungen über dich. Die KI-Modi unterstützen dich bei Diktat und Text-Verfeinerung;
              du siehst alle KI-Ergebnisse, bevor sie eingefügt werden.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">7. Bereitstellung der Website (Hosting)</h2>
            <p>Wir hosten die Inhalte unserer Website beim folgenden Anbieter:</p>
            <p className="mt-3">Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
            <p className="mt-3">
              Beim Aufruf erhebt und speichert Vercel automatisch Informationen in Server-Logfiles
              (IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Zugriffszeitpunkt). Diese Daten
              dienen der technisch fehlerfreien Bereitstellung. Rechtsgrundlage ist Art. 6 Abs. 1
              lit. f DSGVO.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Drittland-Übermittlung USA:</strong> Die
              Datenübertragung wird durch EU-Standardvertragsklauseln (SCC) und das EU-U.S. Data
              Privacy Framework (DPF) abgesichert. Stand Mai 2026 ist DPF gültig, aber durch
              EuGH-Verfahren angefochten.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Sub-Subprozessoren:</strong> Vercel nutzt Amazon Web
              Services, Microsoft Azure und Google Cloud Platform als technische Infrastruktur.
            </p>
            <p className="mt-3">
              Mit Vercel besteht ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO. Details:{' '}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent underline">
                vercel.com/legal/privacy-policy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">8. Local Storage und Cookies (TTDSG § 25)</h2>
            <p>Diese Website verwendet ausschließlich technisch notwendige Local-Storage-Einträge:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>
                <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">voiceit-theme</code>{' '}
                — Speicherung deiner Theme-Präferenz (hell/dunkel)
              </li>
            </ul>
            <p className="mt-3">
              Rechtsgrundlage: <strong className="text-primary">TTDSG § 25 Abs. 2 Nr. 2</strong>{' '}
              (technisch unbedingt erforderlich, keine Einwilligung nötig) i.V.m. Art. 6 Abs. 1
              lit. f DSGVO.
            </p>
            <p className="mt-3">
              Es werden keine Tracking-Cookies, Analyse-Tools oder Marketing-Cookies eingesetzt.
              Daher kein Cookie-Banner.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">9. Externe Dienste und Subprozessoren</h2>
            <p>
              Die folgende Tabelle listet alle Subprozessoren, an die personenbezogene Daten
              übermittelt werden können. Mit allen Anbietern mit Zugriff auf personenbezogene Daten
              besteht ein Auftragsverarbeitungsvertrag (Art. 28 DSGVO) oder gleichwertige
              Vereinbarung.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left mt-4 border-collapse text-xs">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="py-2 pr-3 text-primary font-semibold">Anbieter</th>
                    <th className="py-2 pr-3 text-primary font-semibold">Sitz</th>
                    <th className="py-2 pr-3 text-primary font-semibold">Funktion</th>
                    <th className="py-2 pr-3 text-primary font-semibold">Daten</th>
                    <th className="py-2 pr-3 text-primary font-semibold">Drittland-Mechanismus</th>
                    <th className="py-2 text-primary font-semibold">Datenschutz</th>
                  </tr>
                </thead>
                <tbody className="text-primary/70 align-top">
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Vercel Inc.</td><td className="py-2 pr-3">USA</td><td className="py-2 pr-3">Website-Hosting</td><td className="py-2 pr-3">IP, Logs</td><td className="py-2 pr-3">DPF + SCC</td><td className="py-2"><a href="https://vercel.com/legal/privacy-policy" className="text-accent underline" target="_blank" rel="noopener noreferrer">Link</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Supabase Pte. Ltd.</td><td className="py-2 pr-3">EU (Irland, eu-west-1)</td><td className="py-2 pr-3">Account, Lizenz-Verifikation, App-Backend</td><td className="py-2 pr-3">E-Mail, Device-ID</td><td className="py-2 pr-3">EU-Hosting, US-Mutter (Supabase Inc., Delaware) — DPF + SCC</td><td className="py-2"><a href="https://supabase.com/privacy" className="text-accent underline" target="_blank" rel="noopener noreferrer">Link</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Stripe, Inc.</td><td className="py-2 pr-3">USA + EU + UK</td><td className="py-2 pr-3">Pro-Subscription-Zahlung</td><td className="py-2 pr-3">Name, Adresse, Karten-/Bankdaten, Steuerinfo</td><td className="py-2 pr-3">DPF + SCC + UK-Adequacy</td><td className="py-2"><a href="https://stripe.com/privacy" className="text-accent underline" target="_blank" rel="noopener noreferrer">Link</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Google Cloud EMEA Ltd</td><td className="py-2 pr-3">Irland / Frankfurt, DE</td><td className="py-2 pr-3">KI-Modell Gemini via Vertex AI (Prompt/Agent-Mode)</td><td className="py-2 pr-3">transkribierter Text (opt-in)</td><td className="py-2 pr-3">EU-intern (europe-west3)</td><td className="py-2"><a href="https://cloud.google.com/terms/data-processing-addendum" className="text-accent underline" target="_blank" rel="noopener noreferrer">Cloud DPA</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Brevo (Sendinblue GmbH)</td><td className="py-2 pr-3">Berlin</td><td className="py-2 pr-3">Newsletter, Lead-Magnet-E-Mails</td><td className="py-2 pr-3">E-Mail, Name</td><td className="py-2 pr-3">EU-intern</td><td className="py-2"><a href="https://www.brevo.com/de/legal/privacypolicy/" className="text-accent underline" target="_blank" rel="noopener noreferrer">Link</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Newways Lead-Magnet-Service (self-hosted)</td><td className="py-2 pr-3">Frankfurt, DE</td><td className="py-2 pr-3">Instagram-Comment-to-DM-Automation (Lead-Magnete)</td><td className="py-2 pr-3">IG-Username, DM-Inhalt (Lead-Magnet-Links)</td><td className="py-2 pr-3">EU-intern (Hostinger Frankfurt)</td><td className="py-2"><a href="https://www.hostinger.com/legal/data-processing-agreement" className="text-accent underline" target="_blank" rel="noopener noreferrer">Hostinger AVV</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">WhatsApp Ireland Ltd. (Meta)</td><td className="py-2 pr-3">Irland / USA</td><td className="py-2 pr-3">Kontakt-Link</td><td className="py-2 pr-3">Metadaten bei Klick</td><td className="py-2 pr-3">DPF + SCC</td><td className="py-2"><a href="https://www.whatsapp.com/legal/privacy-policy-eea" className="text-accent underline" target="_blank" rel="noopener noreferrer">Link</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Skool Inc.</td><td className="py-2 pr-3">USA</td><td className="py-2 pr-3">Community-Verlinkung</td><td className="py-2 pr-3">Klick-Metadaten</td><td className="py-2 pr-3">DPF + SCC</td><td className="py-2"><a href="https://www.skool.com/privacy" className="text-accent underline" target="_blank" rel="noopener noreferrer">Link</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Trustpilot A/S</td><td className="py-2 pr-3">Dänemark</td><td className="py-2 pr-3">Reviews-Widget</td><td className="py-2 pr-3">IP bei Widget-Ladung</td><td className="py-2 pr-3">EU-intern</td><td className="py-2"><a href="https://legal.trustpilot.com/end-user-privacy-terms" className="text-accent underline" target="_blank" rel="noopener noreferrer">Link</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">GitHub Inc. (Microsoft)</td><td className="py-2 pr-3">USA</td><td className="py-2 pr-3">Release-Distribution, Update-Check (alle 30 Min)</td><td className="py-2 pr-3">IP bei Download / Polling</td><td className="py-2 pr-3">DPF + SCC + Microsoft DPA</td><td className="py-2"><a href="https://docs.github.com/en/site-policy/privacy-policies" className="text-accent underline" target="_blank" rel="noopener noreferrer">Link</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Google Workspace</td><td className="py-2 pr-3">USA</td><td className="py-2 pr-3">Geschäftsmail marcel@newways.ai</td><td className="py-2 pr-3">E-Mail-Inhalte, Empfänger-Metadaten</td><td className="py-2 pr-3">DPF + SCC</td><td className="py-2"><a href="https://workspace.google.com/terms/dpa_terms.html" className="text-accent underline" target="_blank" rel="noopener noreferrer">DPA</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Apple Inc. (Sign-in mit Apple — aktuell deaktiviert)</td><td className="py-2 pr-3">USA / EU</td><td className="py-2 pr-3">Optionale OAuth-Anmeldung</td><td className="py-2 pr-3">Apple-Nutzer-ID, E-Mail</td><td className="py-2 pr-3">DPF + Apple-Standards</td><td className="py-2"><a href="https://www.apple.com/legal/privacy/" className="text-accent underline" target="_blank" rel="noopener noreferrer">Link</a></td></tr>
                  <tr><td className="py-2 pr-3">Google LLC (Sign-in mit Google — aktuell deaktiviert)</td><td className="py-2 pr-3">USA</td><td className="py-2 pr-3">Optionale OAuth-Anmeldung</td><td className="py-2 pr-3">Google-Nutzer-ID, E-Mail, Name</td><td className="py-2 pr-3">DPF + SCC</td><td className="py-2"><a href="https://policies.google.com/privacy" className="text-accent underline" target="_blank" rel="noopener noreferrer">Link</a></td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6">
              <strong className="text-primary">Hinweis zu US-Konzernmüttern (CLOUD Act).</strong> Einige Subprozessoren in der Tabelle oben (Google Cloud EMEA Ltd, Supabase Pte. Ltd., Stripe, Vercel, GitHub) gehören zu Konzernen mit US-Mutter. Der US CLOUD Act erlaubt US-Behörden theoretisch, Daten auch dann anzufordern, wenn sie physisch in der EU gespeichert sind. Wir reduzieren dieses Risiko aktiv: Audio-Aufnahmen verlassen dein Gerät nie. Nur transkribierter Text geht in den KI-Modi an Vertex AI in Frankfurt. Für Account- und Zahlungsdaten setzen wir auf EU-Hosting plus EU-Standardvertragsklauseln und das EU-U.S. Data Privacy Framework. Der Status des Frameworks wird durch laufende EuGH-Verfahren (Schrems-III) beobachtet — sollte er kippen, informieren wir dich proaktiv und stellen auf Standardvertragsklauseln plus Transfer Impact Assessment um.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Supabase DPA:</strong> Vertrag signiert am 25.05.2026 (Document Ref: WQJGP-LPPWT-HOCVQ-FZYVT, Part 2 vom 5. August 2025). Annex: EU-Standardvertragsklauseln (Commission Decision 2021/914).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">10. KI-Verarbeitung (AI Act, Art. 50)</h2>
            <p>
              Voiceit nutzt ein <strong className="text-primary">lokales Voice-Modell</strong> auf
              deinem Mac. <strong className="text-primary">Voice-Aufnahmen werden niemals an externe
              Anbieter übertragen.</strong>
            </p>
            <p className="mt-3">
              Zusätzlich kannst du optional Prompt- oder Agent-Mode aktivieren. Dabei wird der
              bereits lokal transkribierte <em>Text</em> (nicht Audio) über unsere Supabase Edge
              Function an einen KI-Anbieter weitergeleitet, um den Text zu verfeinern oder zu
              transformieren.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Routing:</strong> Supabase Edge Function →
              Google Cloud Vertex AI (europe-west3 Frankfurt, Failover europe-west4 Amsterdam).<br />
              <strong className="text-primary">Modell:</strong> Gemini 2.5 Flash via Vertex AI.<br />
              <strong className="text-primary">Kein Training:</strong> Google nutzt deine Daten nicht zum Training von KI-Modellen
              (Google Cloud DPA-Garantie).<br />
              <strong className="text-primary">Kein US-Routing:</strong> Alle KI-Anfragen bleiben in der EU.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Hinweis nach Art. 50 AI Act:</strong> Diese App nutzt
              Künstliche Intelligenz. KI-Ergebnisse können Fehler enthalten. Du siehst alle
              KI-Outputs, bevor sie eingefügt werden.
            </p>
            <p className="mt-3">
              Rechtsgrundlage für die optionale KI-Nutzung: Art. 6 Abs. 1 lit. b DSGVO
              (Vertragserfüllung Pro-Subscription) bzw. Art. 6 Abs. 1 lit. a DSGVO (Einwilligung
              durch aktive Mode-Auswahl).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">11. Newsletter</h2>
            <p>
              Wenn du dich für unseren Newsletter einträgst, verarbeiten wir deine E-Mail-Adresse
              über Brevo (Sendinblue GmbH, Köpenicker Straße 126, 10179 Berlin). Brevo speichert
              die Daten auf Servern in der EU. Die Anmeldung erfolgt im{' '}
              <strong className="text-primary">Double-Opt-in-Verfahren</strong> — du bekommst eine
              Bestätigungsmail, die du klicken musst.
            </p>
            <p className="mt-3">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung). Du kannst den Empfang
              jederzeit widerrufen — per Klick auf den Abmeldelink in jeder Mail oder per Nachricht
              an{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">marcel@newways.ai</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">12. Lead-Magnete und Instagram-DM</h2>
            <p>
              Wenn du auf einem unserer Instagram-Posts ein bestimmtes Keyword kommentierst, sendet
              dir unser <strong className="text-primary">eigener, self-hosted Lead-Magnet-Service</strong>{' '}
              den angeforderten Lead-Magnet als Instagram-DM.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Anbieter:</strong> Newways (Marcel Porcher),
              Rabestraße 6, 10405 Berlin.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Server-Standort:</strong> Self-hosted auf einem
              Hostinger-VPS in <strong className="text-primary">Frankfurt, Deutschland</strong>{' '}
              (Hostinger Operations Ltd., Datacenter „fra"). Keine Drittland-Übermittlung.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Verarbeitete Daten:</strong> dein
              Instagram-Nutzername, der Inhalt deines Kommentars (Keyword-Erkennung) und die
              versendete DM-Antwort (standardisierte Lead-Magnet-Links/-Texte).
            </p>
            <p className="mt-3">
              <strong className="text-primary">Speicherdauer:</strong> Keyword + IG-Username werden
              in einer eigenen PostgreSQL-Datenbank für die Dauer der Kampagne und maximal 6 Monate
              danach für statistische Auswertung gespeichert; danach automatische Löschung.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Sub-Prozessor:</strong> Hostinger Operations Ltd. als
              VPS-Hoster. AVV:{' '}
              <a href="https://www.hostinger.com/legal/data-processing-agreement" target="_blank" rel="noopener noreferrer" className="text-accent underline">
                hostinger.com/legal/data-processing-agreement
              </a>.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Instagram-seitige Daten:</strong> Der Kommentar
              selbst und alle Metadaten werden von Meta/Instagram verarbeitet — darauf haben wir
              keinen Einfluss.{' '}
              <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener noreferrer" className="text-accent underline">
                Instagram-Datenschutzrichtlinie
              </a>.
            </p>
            <p className="mt-3">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch aktive
              Keyword-Kommentar-Aktion).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">13. E-Mail-Kontakt</h2>
            <p>
              Wenn du uns per E-Mail an{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">marcel@newways.ai</a>{' '}
              kontaktierst, wird deine Nachricht inklusive der personenbezogenen Daten zur Bearbeitung
              deines Anliegens gespeichert.
            </p>
            <p className="mt-3">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO bei vertragsbezogener Kommunikation, sonst
              Art. 6 Abs. 1 lit. f DSGVO. Speicherdauer: 3 Jahre nach Abschluss des Anliegens.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">14. Lokales Mail.app-Lesen für OTP-Auto-Erkennung (v0.7.23+)</h2>
            <p>
              Bei der Anmeldung per E-Mail sendet Voiceit dir einen 6-stelligen Einmal-Code. Ab v0.7.23 kann die App diesen Code optional direkt aus deiner macOS Mail.app auslesen, damit du ihn nicht manuell kopieren musst.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Wo das passiert:</strong> Das Lesen findet <em>vollständig auf deinem Mac</em> über eine einzelne AppleScript-Abfrage gegen die letzten 5 Minuten deines Mail.app-Posteingangs statt. Voiceit filtert nach Sender-Adressen, die <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">voiceit@</code>, <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">supabase@</code> oder <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">noreply@</code> enthalten.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Was wird gelesen:</strong> nur der 6-stellige Code aus der E-Mail. Voiceit liest keine anderen E-Mail-Inhalte, Betreffzeilen oder Absenderinformationen außer dem Muster der Absender-Adresse.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Was wird übertragen:</strong> nichts. Der Code bleibt auf deinem Gerät, bis du ihn an Supabase Auth übermittelst, um die Anmeldung abzuschließen (gleicher Weg wie wenn du ihn manuell eintippen würdest).
            </p>
            <p className="mt-3">
              <strong className="text-primary">Berechtigung:</strong> Die macOS Automation → Mail-Berechtigung wird nur bei der ersten Anmeldung angefordert. Du kannst sie jederzeit in Systemeinstellungen → Datenschutz & Sicherheit → Automation widerrufen.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Opt-out:</strong> Wenn du die Berechtigung ablehnst, funktioniert die Anmeldung trotzdem — du kopierst den Code einfach manuell wie gehabt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">15. Datensicherheit (TOM nach Art. 32 DSGVO)</h2>
            <p>
              Wir setzen technische und organisatorische Maßnahmen (TOMs) ein, um deine Daten vor
              Verlust, Manipulation und unberechtigtem Zugriff zu schützen — verschlüsselte
              Übertragung (TLS), starke Authentifizierung, Zugriffsbeschränkungen, regelmäßige
              Updates. Eine vollständige TOM-Dokumentation führen wir intern und legen sie bei
              Aufsichts-Anfragen vor.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">16. Externe Links</h2>
            <p>
              Diese Webseite enthält Links zu Webseiten Dritter. Beim Klick werden insbesondere
              deine IP-Adresse, der Zeitpunkt und die zuvor besuchte Seite an den Anbieter
              übertragen. Für diese fremden Inhalte und deren Datenschutzhinweise übernehmen wir
              keine Haftung. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">17. Änderungen dieser Datenschutzerklärung</h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
              aktuellen rechtlichen Anforderungen entspricht. Materielle Änderungen kündigen wir in
              der App oder per E-Mail (für Account-Inhaber) an. Aktueller Stand: {LAST_UPDATED},
              Version {VERSION}.
            </p>
          </section>

          <p className="text-xs text-primary/40 mt-12">
            Stand: {LAST_UPDATED} · Version {VERSION}
          </p>
        </div>
      </main>
      <Footer lang="de" />
    </div>
  );
}
