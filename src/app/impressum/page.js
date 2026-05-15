import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Impressum',
};

export default function Impressum() {
  return (
    <div className="bg-background min-h-screen text-primary">
      <main className="pt-16 pb-20 px-6 md:px-16 max-w-4xl mx-auto">
        <div className="mb-12 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 text-primary/50 hover:text-primary transition-colors font-sans text-sm">
            <ArrowLeft size={16} /> Zurück
          </Link>
          <div className="text-xl font-heading font-bold tracking-tight text-primary">
            VoiceIt<span className="text-accent">.</span> <span className="text-primary/30 font-light text-sm">/ Impressum</span>
          </div>
        </div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-12">Impressum</h1>
        <div className="font-sans text-primary/70 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Angaben gemäß § 5 TMG</h2>
            <p>
              Marcel Porcher<br />
              Newways Consulting<br />
              Schlesische Str. 14<br />
              10997 Berlin
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Kontakt</h2>
            <p>
              E-Mail:{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">
                marcel@newways.ai
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Steuerangaben</h2>
            <p>
              Steuernummer: 14/476/04692 (Finanzamt Berlin)<br />
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE344920245
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Verantwortlich i.S.d. § 18 Abs. 2 MStV</h2>
            <p>
              Marcel Porcher<br />
              Schlesische Str. 14<br />
              10997 Berlin
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Aufsichtsbehörde</h2>
            <p>
              Zuständige Aufsichtsbehörde für audiovisuelle Mediendienste:<br />
              Medienanstalt Berlin-Brandenburg (mabb)<br />
              Kleine Präsidentenstraße 1<br />
              10178 Berlin
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                https://ec.europa.eu/odr
              </a>
              . Unsere E-Mail-Adresse findest du oben im Impressum.
            </p>
            <p className="mt-4">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir
              keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine
              Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten
              unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes
              bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
