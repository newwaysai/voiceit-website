import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Imprint',
};

export default function ImprintEN() {
  return (
    <div className="bg-background min-h-screen text-primary">
      <main className="pt-16 pb-20 px-6 md:px-16 max-w-4xl mx-auto">
        <div className="mb-12 flex justify-between items-center">
          <Link href="/en" className="flex items-center gap-2 text-primary/50 hover:text-primary transition-colors font-sans text-sm">
            <ArrowLeft size={16} /> Back
          </Link>
          <div className="text-xl font-heading font-bold tracking-tight text-primary">
            Voiceit<span className="text-accent">.</span> <span className="text-primary/30 font-light text-sm">/ Imprint</span>
          </div>
        </div>
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">Imprint</h1>
        <p className="font-sans text-xs text-primary/40 mb-12">
          English translation for convenience. The German version at{' '}
          <Link href="/impressum" className="text-accent underline">/impressum</Link>{' '}
          is the legally binding text.
        </p>
        <div className="font-sans text-primary/70 space-y-8 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Information pursuant to § 5 TMG</h2>
            <p>
              Marcel Porcher<br />
              Newways<br />
              Rabestraße 6<br />
              10405 Berlin<br />
              Germany
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Contact</h2>
            <p>
              Email:{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">
                marcel@newways.ai
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Tax information</h2>
            <p>
              VAT ID pursuant to § 27a UStG: DE344920245
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Responsible under § 18(2) MStV</h2>
            <p>
              Marcel Porcher<br />
              Rabestraße 6<br />
              10405 Berlin<br />
              Germany
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Supervisory authority</h2>
            <p>
              Competent supervisory authority for audiovisual media services:<br />
              Medienanstalt Berlin-Brandenburg (mabb)<br />
              Kleine Präsidentenstraße 1<br />
              10178 Berlin, Germany
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Dispute resolution</h2>
            <p>
              The European Commission provides a platform for online dispute resolution (ODR):{' '}
              <a
                href="https://ec.europa.eu/odr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                https://ec.europa.eu/odr
              </a>
              . Our email address can be found above in the imprint.
            </p>
            <p className="mt-4">
              We are neither obligated nor willing to participate in dispute resolution proceedings
              before a consumer arbitration board.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Liability for content</h2>
            <p>
              As a service provider, we are responsible for our own content on these pages in
              accordance with general law under § 7(1) TMG. Under §§ 8 to 10 TMG, however, we are
              not obligated as a service provider to monitor transmitted or stored third-party
              information or to investigate circumstances indicating unlawful activity.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Liability for links</h2>
            <p>
              Our website contains links to external third-party websites whose content we have no
              influence over. We therefore cannot assume any liability for these external contents.
              The respective provider or operator of the linked pages is always responsible for the
              content of those pages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Copyright</h2>
            <p>
              The contents and works on these pages created by the site operators are subject to
              German copyright law. Duplication, processing, distribution, or any kind of
              exploitation outside the limits of copyright law require the written consent of the
              respective author or creator.
            </p>
          </section>
        </div>
      </main>
      <Footer lang="en" />
    </div>
  );
}
