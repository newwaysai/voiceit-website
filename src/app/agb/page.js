import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Allgemeine Geschäftsbedingungen',
};

const LAST_UPDATED = '27. Mai 2026';
const VERSION = 'v1.5';

export default function AGB() {
  return (
    <div className="bg-background min-h-screen text-primary">
      <main className="pt-16 pb-20 px-6 md:px-16 max-w-4xl mx-auto">
        <div className="mb-12 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-primary/50 hover:text-primary transition-colors font-sans text-sm">
            <ArrowLeft size={16} /> Zurück
          </Link>
          <div className="text-xl font-heading font-bold tracking-tight text-primary">
            Voiceit<span className="text-accent">.</span> <span className="text-primary/30 font-light text-sm">/ AGB</span>
          </div>
        </div>
        <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">Allgemeine Geschäftsbedingungen</h1>
        <p className="font-sans text-xs text-primary/40 mb-12">
          Stand: {LAST_UPDATED} · Version {VERSION} · Diese deutsche Fassung ist die rechtlich verbindliche.
        </p>
        <div className="font-sans text-primary/70 space-y-8 leading-relaxed text-sm">

          <section>
            <p>
              Diese Allgemeinen Geschäftsbedingungen („AGB") regeln die Nutzung der macOS-App Voiceit
              („App") sowie der zugehörigen Dienste. Mit Installation oder Nutzung von Voiceit
              stimmst du diesen AGB zu. Wenn du nicht zustimmst, nutze die App bitte nicht.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Anbieter:</strong><br />
              Marcel Porcher · Newways<br />
              Rabestraße 6 · 10405 Berlin<br />
              USt-IdNr: DE344920245<br />
              E-Mail:{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">marcel@newways.ai</a><br />
              Impressum:{' '}
              <Link href="/impressum" className="text-accent underline">voiceitai.app/impressum</Link>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">1. Was Voiceit ist</h2>
            <p>
              Voiceit ist eine macOS-Desktop-App, die:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>Mikrofon-Audio <strong className="text-primary">lokal auf deinem Gerät</strong> mit einem mitgelieferten Spracherkennungs-Modell in Text wandelt</li>
              <li>Den transkribierten Text optional über KI-Modi (Prompt Mode, Agent Mode) verfeinert oder transformiert</li>
              <li>Den resultierenden Text in die gerade aktive Anwendung einfügt</li>
            </ul>
            <p className="mt-3">
              Voiceit wird als Software-as-a-Service mit gestaffelten Abonnements angeboten.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">2. Geltungsbereich, Verbraucher und Unternehmer</h2>
            <p>
              Diese AGB gelten gegenüber <strong className="text-primary">Verbrauchern</strong>{' '}
              (§ 13 BGB) und <strong className="text-primary">Unternehmern</strong> (§ 14 BGB).
              Abweichende oder ergänzende Bedingungen des Kunden gelten nicht, es sei denn, wir
              haben ihnen ausdrücklich schriftlich zugestimmt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">3. Vertragsschluss</h2>
            <p>
              Der Vertrag über die kostenlose Nutzung kommt mit der Installation und Aktivierung der
              App zustande. Der Vertrag über eine kostenpflichtige Subscription kommt mit Abschluss
              des Checkouts über Stripe zustande. Du erhältst per E-Mail eine Bestätigung mit den
              Vertragsdaten.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">4. Nutzungslizenz</h2>
            <p>
              Wir gewähren dir eine nicht-ausschließliche, nicht übertragbare, widerrufliche Lizenz,
              Voiceit auf Macs zu installieren und zu nutzen, die du besitzt oder kontrollierst,
              für deine persönliche oder geschäftliche Nutzung, vorbehaltlich dieser AGB und deiner
              aktiven Subscription-Stufe.
            </p>
            <p className="mt-3">Du darfst nicht:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>die App weitergeben, weiterverkaufen, unterlizenzieren oder vermieten</li>
              <li>die App zurückentwickeln, dekompilieren oder den Quellcode extrahieren (außer soweit zwingendes Recht dies erlaubt)</li>
              <li>Copyright-, Marken- oder Signatur-Hinweise entfernen oder verändern</li>
              <li>die App zur Entwicklung eines konkurrierenden Produkts nutzen</li>
              <li>die App zur Verletzung von Gesetzen oder Rechten Dritter nutzen</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">5. Subscription-Stufen</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong className="text-primary">Free:</strong> unbegrenztes lokales Diktat (4.000 Wörter/Woche), 15 monatliche KI-Aufrufe, 2-Minuten-Audio-Cap pro Aufnahme.</li>
              <li><strong className="text-primary">Pro (15 €/4-Wochen-Zyklus):</strong> unbegrenzte Wörter, 500 monatliche KI-Aufrufe, 8-Minuten-Audio-Cap, alle Custom-Format-Templates.</li>
              <li><strong className="text-primary">Unlimited (30 €/4-Wochen-Zyklus):</strong> unbegrenzte Wörter, 3.000 monatliche KI-Aufrufe, 20-Minuten-Audio-Cap.</li>
            </ul>
            <p className="mt-3">
              Alle Tarife nutzen Google Vertex AI in der EU (Frankfurt) mit dem Modell Gemini 2.5 Flash — die Tarif-Differenzierung erfolgt ausschließlich über Aufruf-Quoten und Audio-Länge, nicht über die Modell-Qualität. Konkrete Quoten, Preise und Features werden in der App und auf voiceitai.app gezeigt und können mit Vorankündigung geändert werden. Änderungen reduzieren keine Quoten, die du in der laufenden Abrechnungsperiode bereits bezahlt hast.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">6. Zahlung, Abrechnung und Steuern</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Subscriptions werden in <strong className="text-primary">4-Wochen-Zyklen</strong> im Voraus über <strong className="text-primary">Stripe</strong> abgerechnet.</li>
              <li>Preise enthalten die deutsche Umsatzsteuer (aktuell 19 %) soweit anwendbar und werden auf der Checkout-Seite ausgewiesen.</li>
              <li>Deine Subscription verlängert sich automatisch alle 4 Wochen bis zur Kündigung.</li>
              <li>Rechnungen erhältst du per E-Mail und über das Stripe Customer Portal.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">7. Kündigung</h2>
            <p>
              Du kannst die Subscription jederzeit in der App oder über das Stripe Customer Portal
              kündigen. Die Kündigung wird zum Ende der laufenden Abrechnungsperiode wirksam — bis
              dahin behältst du den vollen Zugriff.
            </p>
            <p className="mt-3">
              Wir können den Zugang zu kostenpflichtigen Funktionen bei wesentlicher Verletzung
              dieser AGB oder Zahlungsverzug von mehr als 30 Tagen kündigen. Bei Kündigung endet
              die Lizenz nach Ziffer 4; du musst die App deinstallieren.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">8. Widerrufsrecht für Verbraucher (B2C)</h2>
            <p>
              Verbraucher haben grundsätzlich ein 14-tägiges Widerrufsrecht nach § 312g BGB.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Vorzeitiges Erlöschen bei digitalen Inhalten:</strong>{' '}
              Bei Verträgen über die Lieferung digitaler Inhalte, die nicht auf einem körperlichen
              Datenträger geliefert werden, erlischt das Widerrufsrecht nach § 356 Abs. 5 BGB, wenn
              du beim Vertragsschluss ausdrücklich zustimmst, dass wir mit der Vertragserfüllung vor
              Ablauf der Widerrufsfrist beginnen — und du gleichzeitig zur Kenntnis nimmst, dass du
              dadurch dein Widerrufsrecht verlierst.
            </p>
            <p className="mt-3">
              Beim Start einer kostenpflichtigen Subscription musst du diese Zustimmung aktiv im
              Checkout bestätigen. Bis dahin gelten die 14 Tage uneingeschränkt.
            </p>
            <h3 className="font-bold text-primary mt-6 mb-2">Widerrufsbelehrung</h3>
            <p>
              Du hast das Recht, binnen vierzehn Tagen ohne Angabe von Gründen diesen Vertrag zu
              widerrufen. Die Widerrufsfrist beträgt vierzehn Tage ab dem Tag des Vertragsschlusses.
              Um dein Widerrufsrecht auszuüben, musst du uns ({' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">marcel@newways.ai</a>)
              {' '}mittels einer eindeutigen Erklärung (z. B. E-Mail) über deinen Entschluss
              informieren. Zur Wahrung der Widerrufsfrist genügt die rechtzeitige Absendung der
              Mitteilung. Im Falle eines wirksamen Widerrufs erstatten wir gezahlte Beträge
              unverzüglich, spätestens binnen vierzehn Tagen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">9. KI-Funktionen und akzeptable Nutzung</h2>
            <p>
              Prompt Mode und Agent Mode leiten den transkribierten Text an KI-Anbieter weiter
              (Routing: Supabase Edge Function → Google Cloud Vertex AI, Frankfurt EU; siehe{' '}
              <Link href="/datenschutz" className="text-accent underline">Datenschutzerklärung</Link>).
              Du bist für die Inhalte verantwortlich, die du übermittelst. Du verpflichtest dich,
              die KI-Funktionen <strong className="text-primary">nicht</strong> zu nutzen, um:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>rechtswidrige, schädigende, verleumderische, belästigende oder hasserfüllte Inhalte zu erzeugen oder zu verbreiten</li>
              <li>Malware, Phishing-Material oder Anleitungen zur Begehung von Straftaten zu erstellen</li>
              <li>sexuelle Inhalte mit Minderjährigen zu generieren</li>
              <li>personenbezogene Daten Dritter unter Verstoß gegen DSGVO oder geltendes Recht zu verarbeiten</li>
              <li>andere Personen oder Organisationen zu imitieren</li>
              <li>Sicherheitsmechanismen der zugrundeliegenden KI-Modelle zu umgehen</li>
            </ul>
            <p className="mt-3">
              Bei Verstößen können wir Accounts nach Anhörung sperren oder kündigen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">10. Datenschutz und Auftragsverarbeitung (B2B)</h2>
            <p>
              Die Verarbeitung personenbezogener Daten durch Voiceit ist in der{' '}
              <a href="/datenschutz" className="text-accent underline">Datenschutzerklärung</a> beschrieben.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Unternehmenskunden (B2B):</strong> Wenn du Voiceit im
              unternehmerischen Kontext nutzt und dabei personenbezogene Daten von Mitarbeitern oder
              Dritten verarbeitest, bist du nach Art. 28 DSGVO verpflichtet, einen
              Auftragsverarbeitungsvertrag (AVV) mit uns abzuschließen. Auf Anfrage stellen wir dir
              einen AVV zur Verfügung. Kontakt:{' '}
              <a href="mailto:hello@voiceitai.app" className="text-accent underline">hello@voiceitai.app</a>
            </p>
            <p className="mt-3">
              Die reine Diktierfunktion (lokale Transkription ohne KI-Funktionen) unterliegt keiner
              Datenübertragung an unsere Server und erfordert keinen AVV.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">11. KI-Output-Hinweis</h2>
            <p>
              KI-Outputs werden von Machine-Learning-Modellen erzeugt. Sie können fehlerhaft,
              verzerrt oder unangemessen sein. Wir garantieren keine Korrektheit, Eignung für einen
              bestimmten Zweck oder Verzerrungsfreiheit.{' '}
              <strong className="text-primary">Prüfe jeden KI-Output, bevor du dich darauf verlässt
              — für Entscheidungen, Kommunikation oder alles, was relevant ist.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">11. macOS-Berechtigungen</h2>
            <p>Voiceit benötigt folgende macOS-Berechtigungen:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li><strong className="text-primary">Mikrofon</strong> — zur Aufnahme des Audios für die Transkription</li>
              <li><strong className="text-primary">Bedienungshilfen (Accessibility)</strong> — zum Einfügen des Texts in die aktive Anwendung</li>
              <li><strong className="text-primary">Automation</strong> — zum Einfügen von Text in bestimmte Apps (z. B. Electron-Apps) und optional zum Lesen von OTP-Codes aus Apple Mail beim Anmelden</li>
              <li><strong className="text-primary">Mitteilungen (optional, ab v0.7.24)</strong> — zur Benachrichtigung bei neuen App-Versionen</li>
            </ul>
            <p className="mt-3">
              Du erteilst diese Berechtigungen freiwillig in den macOS-Systemeinstellungen und kannst
              sie jederzeit widerrufen. Ein Widerruf deaktiviert die entsprechenden Funktionen,
              berührt aber nicht deine Subscription.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">13. Updates</h2>
            <p>
              Voiceit prüft alle 30 Minuten automatisch auf Updates gegen{' '}
              <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">github.com/newwaysai/voiceit-releases</code> und schlägt deren Installation vor. Updates
              können Fehlerbehebungen, neue Funktionen, Änderungen an KI-Prompts oder
              Sicherheits-Patches enthalten.
            </p>
            <p className="mt-3">
              Wenn du die optionale macOS-Mitteilungs-Berechtigung erteilst (ab v0.7.24), benachrichtigt dich die App auch per System-Notification, wenn eine neue Version verfügbar ist.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Wesentliche Funktionsänderungen</strong> kündigen wir
              mit angemessener Vorlaufzeit (mindestens 30 Tage) in der App oder per E-Mail an. Bist
              du mit der Änderung nicht einverstanden, kannst du die Subscription bis zum
              Wirksamwerden außerordentlich kündigen (anteilige Rückerstattung möglich).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">13. Verfügbarkeit</h2>
            <p>
              Wir streben eine hohe Verfügbarkeit der Supabase- und Google-Vertex-AI-basierten Funktionen
              an, garantieren aber keine ununterbrochene Verfügbarkeit. Lokale Funktionen (Diktat,
              Historie, Einstellungen) funktionieren ohne Internetverbindung. Bei einem Ausfall
              eines KI-Anbieters sind die KI-Modi vorübergehend nicht verfügbar. Eine
              anteilige Rückerstattung erfolgt nur bei länger andauernden Ausfällen (mehr als 24
              Stunden zusammenhängend im Kalendermonat).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">15. Haftung</h2>
            <p>
              Wir haften nach Maßgabe des deutschen Rechts:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>uneingeschränkt für Vorsatz und grobe Fahrlässigkeit, für Personenschäden sowie nach zwingendem Produkthaftungsrecht</li>
              <li>für einfache Fahrlässigkeit nur bei Verletzung wesentlicher Vertragspflichten (Kardinalpflichten), begrenzt auf den typischen, vorhersehbaren Schaden</li>
              <li>nicht für einfache Fahrlässigkeit bei Verletzung unwesentlicher Pflichten, nicht für entgangenen Gewinn, Datenverlust oder mittelbare/Folgeschäden</li>
              <li>die kumulierte Haftung für einen Zwölf-Monats-Zeitraum ist auf die in dieser Zeit von dir gezahlten Entgelte begrenzt</li>
            </ul>
            <p className="mt-3">
              Bei Verbrauchern bleiben zwingende gesetzliche Rechte (insbesondere Mängelrechte nach
              §§ 327 ff. BGB für digitale Produkte) unberührt.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">15. Mängelrechte und Aktualisierungspflicht</h2>
            <p>
              Für die Bereitstellung digitaler Produkte gelten die §§ 327 ff. BGB. Wir stellen
              sicherheits- und funktionsrelevante Aktualisierungen während der Mindestbereitstellungs-
              dauer zur Verfügung. Bei Mängeln kannst du Nacherfüllung, Vertragsbeendigung oder
              Minderung verlangen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">17. Änderungen dieser AGB</h2>
            <p>
              Wir können diese AGB zukünftig anpassen. Materielle Änderungen kündigen wir mindestens
              30 Tage vor Inkrafttreten in der App oder per E-Mail an. Widersprichst du nicht
              schriftlich oder per E-Mail innerhalb dieser Frist, gelten die Änderungen als
              angenommen. Auf diese Folge weisen wir in der Änderungsankündigung gesondert hin. Bei
              Widerspruch hast du das Recht zur außerordentlichen Kündigung zum Wirksamkeitszeitpunkt
              der Änderung.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">18. Anwendbares Recht und Gerichtsstand</h2>
            <p>
              Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Für Verbraucher bleiben
              die zwingenden Verbraucherschutzbestimmungen ihres Wohnsitzstaates anwendbar.
            </p>
            <p className="mt-3">
              Gerichtsstand für Streitigkeiten mit Kaufleuten, juristischen Personen des
              öffentlichen Rechts oder öffentlich-rechtlichen Sondervermögen ist Berlin.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">18. Online-Streitbeilegung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS)
              bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-accent underline">
                ec.europa.eu/consumers/odr/
              </a>
              . Wir sind nicht verpflichtet und nicht bereit, an Verbraucherschlichtungsverfahren
              teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">20. Salvatorische Klausel</h2>
            <p>
              Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise unwirksam sein oder
              werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle der
              unwirksamen Bestimmung tritt die gesetzliche Regelung.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">21. Kontakt</h2>
            <p>
              Fragen zu diesen AGB:{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">marcel@newways.ai</a>
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
