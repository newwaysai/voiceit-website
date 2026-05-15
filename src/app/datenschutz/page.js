import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Datenschutzerklärung',
};

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
        <h1 className="font-heading text-3xl md:text-5xl font-bold mb-12">Datenschutzerklärung</h1>
        <div className="font-sans text-primary/70 space-y-8 leading-relaxed text-sm">

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit deinen
              personenbezogenen Daten passiert, wenn du diese Website besuchst. Personenbezogene
              Daten sind alle Daten, mit denen du persönlich identifiziert werden kannst.
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
              Newways Consulting<br />
              Schlesische Str. 14<br />
              10997 Berlin<br />
              E-Mail:{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">
                marcel@newways.ai
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">3. Allgemeines zur Datenverarbeitung</h2>
            <h3 className="font-bold text-primary mb-2">Rechtsgrundlagen</h3>
            <p>
              Nach Maßgabe des Art. 13 DSGVO teilen wir dir die Rechtsgrundlagen unserer
              Datenverarbeitungen mit. Sofern die Rechtsgrundlage in dieser Erklärung nicht
              ausdrücklich genannt wird, gilt Folgendes: Rechtsgrundlage für die Einholung von
              Einwilligungen ist Art. 6 Abs. 1 lit. a i.V.m. Art. 7 DSGVO. Rechtsgrundlage für die
              Verarbeitung zur Erfüllung unserer Leistungen und zur Beantwortung von Anfragen ist
              Art. 6 Abs. 1 lit. b DSGVO. Rechtsgrundlage für die Verarbeitung zur Erfüllung
              rechtlicher Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO. Soweit berechtigte
              Interessen die Verarbeitung erfordern und deine Interessen nicht überwiegen, dient
              Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">4. Datenlöschung und Speicherdauer</h2>
            <p>
              Wir halten uns an die Grundsätze der Datenminimierung (Art. 5 Abs. 1 lit. c DSGVO)
              und Speicherbegrenzung (Art. 5 Abs. 1 lit. e DSGVO). Wir speichern deine
              personenbezogenen Daten nur so lange, wie dies zur Erreichung der hier genannten
              Zwecke erforderlich ist oder wie es gesetzliche Aufbewahrungsfristen vorsehen. Nach
              Wegfall des Zwecks bzw. nach Ablauf der Fristen werden die entsprechenden Daten
              gelöscht.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">5. Rechte der betroffenen Person</h2>
            <p>
              Als Betroffene Person hast du jederzeit das Recht auf:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>Auskunft (Art. 15 DSGVO)</li>
              <li>Berichtigung (Art. 16 DSGVO)</li>
              <li>Löschung (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
              <li>Beschwerde bei einer Aufsichtsbehörde</li>
            </ul>
            <p className="mt-3">
              Zur Geltendmachung dieser Rechte genügt eine formlose Mitteilung an{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">
                marcel@newways.ai
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">6. Bereitstellung der Webseite (Hosting)</h2>
            <p>
              Wir hosten die Inhalte unserer Website beim folgenden Anbieter:
            </p>
            <p className="mt-3">
              Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA
            </p>
            <p className="mt-3">
              Beim Aufruf erhebt und speichert Vercel automatisch Informationen in Server-Logfiles
              (IP-Adresse, Browsertyp, Betriebssystem, Referrer-URL, Zugriffszeitpunkt). Diese
              Daten dienen der technisch fehlerfreien Bereitstellung der Website. Rechtsgrundlage
              ist Art. 6 Abs. 1 lit. f DSGVO. Die Datenübertragung in die USA wird durch
              EU-Standardvertragsklauseln und das EU-U.S. Data Privacy Framework abgesichert. Mit
              Vercel besteht ein Auftragsverarbeitungsvertrag. Details:{' '}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                vercel.com/legal/privacy-policy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">7. Local Storage und Cookies</h2>
            <p>
              Diese Website verwendet ausschließlich technisch notwendige Local-Storage-Einträge
              (z.&nbsp;B. zur Speicherung deiner Theme-Präferenz unter dem Schlüssel{' '}
              <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">voiceit-theme</code>). Es
              werden keine Tracking-Cookies und keine Analyse-Tools eingesetzt, die ohne deine
              Einwilligung Daten erheben. Rechtsgrundlage für notwendige Einträge ist Art. 6
              Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technisch fehlerfreien
              Bereitstellung).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">8. Externe Dienste</h2>
            <p>
              Auf unserer Webseite sind Verlinkungen und Einbindungen externer Dienste im Einsatz.
              Bei der Nutzung dieser Dienste werden personenbezogene Daten an die jeweiligen
              Anbieter weitergegeben. Wenn wir kein berechtigtes Interesse am Einsatz haben, holen
              wir vorher deine Einwilligung ein (Art. 6 Abs. 1 lit. a DSGVO).
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">WhatsApp (Meta Platforms Ireland Ltd.)</h3>
            <p>
              Wir bieten Kontaktaufnahme über WhatsApp an. Anbieter ist WhatsApp Ireland Ltd.,
              Merrion Road, Dublin 4, Irland (Mutterkonzern: Meta Platforms, Inc., USA). Wenn du
              auf einen WhatsApp-Link klickst, wird die Anfrage an WhatsApp übermittelt. Es gelten
              die Datenschutzbestimmungen von WhatsApp:{' '}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy-eea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                whatsapp.com/legal/privacy-policy-eea
              </a>
              . Rechtsgrundlage ist Art. 6 Abs. 1 lit. a und lit. b DSGVO.
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">Skool (Skool LLC)</h3>
            <p>
              Wir verlinken auf unsere KI-Community auf der Plattform Skool. Anbieter ist Skool
              Inc., USA. Erst wenn du den Link klickst, werden Daten an Skool übertragen. Details
              findest du in der{' '}
              <a
                href="https://www.skool.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                Datenschutzerklärung von Skool
              </a>
              . Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">Trustpilot (Trustpilot A/S)</h3>
            <p>
              Wir binden Trustpilot-Bewertungen über Widgets ein. Anbieter ist Trustpilot A/S,
              Pilestraede 58, 5. sal, 1112 Kopenhagen, Dänemark. Beim Laden der Widgets werden
              technische Verbindungsdaten (u.&nbsp;a. IP-Adresse) an Trustpilot übermittelt.
              Details:{' '}
              <a
                href="https://legal.trustpilot.com/end-user-privacy-terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                legal.trustpilot.com
              </a>
              . Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">Brevo (Sendinblue GmbH) — E-Mail-Versand</h3>
            <p>
              Wenn du dich für einen Lead-Magneten oder Newsletter einträgst, verarbeiten wir deine
              E-Mail-Adresse über Brevo (Sendinblue GmbH, Köpenicker Straße 126, 10179 Berlin).
              Brevo speichert die Daten auf Servern in der EU. Die Anmeldung erfolgt im
              Double-Opt-in-Verfahren. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO. Du kannst
              den Empfang jederzeit widerrufen. Details:{' '}
              <a
                href="https://www.brevo.com/de/legal/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                brevo.com/de/legal/privacypolicy
              </a>
              .
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">ManyChat (ManyChat Inc.)</h3>
            <p>
              Für die Auslieferung kostenloser Lead-Magnete via Instagram-DM nutzen wir ManyChat
              (ManyChat Inc., 535 Mission Street, San Francisco, CA 94105, USA). Wenn du das
              entsprechende Keyword auf einen unserer Posts kommentierst oder uns auf Instagram
              schreibst, verarbeitet ManyChat deinen Instagram-Nutzernamen und den
              Nachrichteninhalt. Die Datenübertragung in die USA wird durch
              EU-Standardvertragsklauseln und EU-U.S. Data Privacy Framework abgesichert.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO. Details:{' '}
              <a
                href="https://manychat.com/privacy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                manychat.com/privacy
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">9. Lead-Formular auf der Website</h2>
            <p>
              Auf einigen Seiten bieten wir Formulare zum Eintragen für kostenlose Inhalte
              (Lead-Magnete) an. Wir erheben dabei: Vorname und E-Mail-Adresse. Zweck der
              Verarbeitung: Versand des angeforderten Inhalts und ggf. weiterführende E-Mails zum
              Thema. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO. Du kannst die Einwilligung
              jederzeit widerrufen — über den Abmelde-Link in jeder Mail oder per Nachricht an{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">
                marcel@newways.ai
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">10. E-Mail-Kontakt</h2>
            <p>
              Wenn du uns per E-Mail kontaktierst, wird deine Nachricht inklusive der daraus
              ersichtlichen personenbezogenen Daten zum Zweck der Bearbeitung deines Anliegens
              gespeichert. Diese Daten geben wir nicht ohne deine Einwilligung weiter.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei vertragsbezogener Kommunikation,
              ansonsten Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">11. Externe Links</h2>
            <p>
              Diese Webseite enthält Links zu Webseiten Dritter. Beim Klick auf einen externen
              Link werden insbesondere deine IP-Adresse, der Zeitpunkt sowie die zuvor besuchte
              Seite an den Anbieter übertragen. Für diese fremden Inhalte und deren
              Datenschutzhinweise übernehmen wir keine Haftung.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">12. DSGVO-konforme KI-Implementierungen</h2>
            <p>
              Newways bietet Beratung und 1:1 Umsetzung für eigene KI-Projekte unserer Kunden an.
              In Kundenprojekten setzen wir auf datenschutzfreundliche Architekturen: lokale
              Verarbeitung wo möglich, EU-gehostete Infrastruktur wo verfügbar, und transparente
              Auftragsverarbeitungsverträge mit allen Subdienstleistern. Sensible Geschäftsdaten
              bleiben im Ökosystem unserer Kundinnen und Kunden. Diese Datenschutzerklärung
              betrifft ausschließlich die Verarbeitung deiner Daten beim Besuch dieser Website —
              individuelle Auftragsverhältnisse regeln wir gesondert per Vertrag.
            </p>
          </section>

          <p className="text-xs text-primary/40 mt-12">
            Stand: {new Date().toLocaleDateString('de-DE', { day: '2-digit', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
