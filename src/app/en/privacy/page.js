import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy',
};

export default function PrivacyEN() {
  return (
    <div className="bg-background min-h-screen text-primary">
      <main className="pt-16 pb-20 px-6 md:px-16 max-w-4xl mx-auto">
        <div className="mb-12 flex justify-between items-center">
          <Link href="/en" className="flex items-center gap-2 text-primary/50 hover:text-primary transition-colors font-sans text-sm">
            <ArrowLeft size={16} /> Back
          </Link>
          <div className="text-xl font-heading font-bold tracking-tight text-primary">
            Voiceit<span className="text-accent">.</span> <span className="text-primary/30 font-light text-sm">/ Privacy</span>
          </div>
        </div>
        <h1 className="font-heading text-3xl md:text-5xl font-bold mb-12">Privacy Policy</h1>
        <p className="font-sans text-xs text-primary/40 mb-8">
          English translation for convenience. The German version at{' '}
          <Link href="/datenschutz" className="text-accent underline">/datenschutz</Link>{' '}
          is the legally binding text.
        </p>
        <div className="font-sans text-primary/70 space-y-8 leading-relaxed text-sm">

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">1. Overview</h2>
            <p>
              The following information gives a simple overview of what happens to your personal
              data when you visit this website. Personal data is any data that can be used to
              identify you personally.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">2. Controller under GDPR</h2>
            <p>
              The controller under the General Data Protection Regulation (GDPR) and other data
              protection laws is:
            </p>
            <p className="mt-3">
              Marcel Porcher<br />
              Newways<br />
              Schlesische Str. 14<br />
              10997 Berlin, Germany<br />
              Email:{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">
                marcel@newways.ai
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">3. General data processing</h2>
            <h3 className="font-bold text-primary mb-2">Legal basis</h3>
            <p>
              In line with Art. 13 GDPR we inform you of the legal basis for our data processing.
              Unless explicitly stated otherwise in this policy, the following applies: legal basis
              for obtaining consent is Art. 6(1)(a) in conjunction with Art. 7 GDPR. Legal basis for
              processing to fulfill our services and respond to inquiries is Art. 6(1)(b) GDPR.
              Legal basis for processing to fulfill legal obligations is Art. 6(1)(c) GDPR. Where
              legitimate interests require processing and your interests do not override them,
              Art. 6(1)(f) GDPR is the legal basis.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">4. Data deletion and storage duration</h2>
            <p>
              We follow the principles of data minimization (Art. 5(1)(c) GDPR) and storage
              limitation (Art. 5(1)(e) GDPR). We store your personal data only as long as needed for
              the purposes stated here or as required by statutory retention periods. Once the
              purpose no longer applies or the retention periods expire, the corresponding data is
              deleted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">5. Your rights</h2>
            <p>
              As a data subject you have the right at any time to:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>access (Art. 15 GDPR)</li>
              <li>rectification (Art. 16 GDPR)</li>
              <li>erasure (Art. 17 GDPR)</li>
              <li>restriction of processing (Art. 18 GDPR)</li>
              <li>data portability (Art. 20 GDPR)</li>
              <li>objection to processing (Art. 21 GDPR)</li>
              <li>withdrawal of consent (Art. 7(3) GDPR)</li>
              <li>complaint to a supervisory authority</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, a simple message to{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">
                marcel@newways.ai
              </a>{' '}
              is enough.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">6. Website hosting</h2>
            <p>
              We host the contents of our website with the following provider:
            </p>
            <p className="mt-3">
              Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA
            </p>
            <p className="mt-3">
              On access, Vercel automatically collects and stores information in server log files
              (IP address, browser type, operating system, referrer URL, time of access). This data
              serves the technically error-free delivery of the website. Legal basis is Art. 6(1)(f)
              GDPR. The transfer to the USA is safeguarded by EU standard contractual clauses and
              the EU-U.S. Data Privacy Framework. A data processing agreement exists with Vercel.
              Details:{' '}
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
            <h2 className="text-xl font-bold text-primary mb-4">7. Local Storage and Cookies</h2>
            <p>
              This website uses only technically necessary local storage entries (e.g. to store
              your theme preference under the key{' '}
              <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">voiceit-theme</code>).
              No tracking cookies and no analytics tools that collect data without your consent are
              used. Legal basis for necessary entries is Art. 6(1)(f) GDPR (legitimate interest in
              technically error-free delivery).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">8. External services</h2>
            <p>
              Our website includes links and embeds of external services. Using these services
              transfers personal data to the respective providers. Where we have no legitimate
              interest in the use, we obtain your consent first (Art. 6(1)(a) GDPR).
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">WhatsApp (Meta Platforms Ireland Ltd.)</h3>
            <p>
              We offer contact via WhatsApp. Provider is WhatsApp Ireland Ltd., Merrion Road,
              Dublin 4, Ireland (parent: Meta Platforms, Inc., USA). When you click a WhatsApp link
              the request is transmitted to WhatsApp. WhatsApp’s privacy policy applies:{' '}
              <a
                href="https://www.whatsapp.com/legal/privacy-policy-eea"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                whatsapp.com/legal/privacy-policy-eea
              </a>
              . Legal basis: Art. 6(1)(a) and (b) GDPR.
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">Skool (Skool LLC)</h3>
            <p>
              We link to our AI community on the Skool platform. Provider is Skool Inc., USA. Data
              is only transferred once you click the link. Details in the{' '}
              <a
                href="https://www.skool.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                Skool privacy policy
              </a>
              . Legal basis: Art. 6(1)(f) GDPR.
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">Trustpilot (Trustpilot A/S)</h3>
            <p>
              We embed Trustpilot reviews via widgets. Provider is Trustpilot A/S, Pilestraede 58,
              5. sal, 1112 Copenhagen, Denmark. Loading the widgets transmits technical connection
              data (incl. IP address) to Trustpilot. Details:{' '}
              <a
                href="https://legal.trustpilot.com/end-user-privacy-terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                legal.trustpilot.com
              </a>
              . Legal basis: Art. 6(1)(f) GDPR.
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">Brevo (Sendinblue GmbH) — email delivery</h3>
            <p>
              When you sign up for a lead magnet or newsletter, we process your email address via
              Brevo (Sendinblue GmbH, Köpenicker Straße 126, 10179 Berlin). Brevo stores the data on
              EU servers. Signups use double opt-in. Legal basis: Art. 6(1)(a) GDPR. You can
              withdraw at any time. Details:{' '}
              <a
                href="https://www.brevo.com/legal/privacypolicy/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline"
              >
                brevo.com/legal/privacypolicy
              </a>
              .
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">ManyChat (ManyChat Inc.)</h3>
            <p>
              For delivering free lead magnets via Instagram DM we use ManyChat (ManyChat Inc., 535
              Mission Street, San Francisco, CA 94105, USA). When you comment a keyword on one of
              our posts or write us on Instagram, ManyChat processes your Instagram handle and the
              message content. The transfer to the USA is safeguarded by EU standard contractual
              clauses and the EU-U.S. Data Privacy Framework. Legal basis: Art. 6(1)(a) GDPR.
              Details:{' '}
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
            <h2 className="text-xl font-bold text-primary mb-4">9. Lead form on the website</h2>
            <p>
              On some pages we offer forms to sign up for free content (lead magnets). We collect:
              first name and email address. Purpose: delivery of the requested content and follow-up
              emails on the topic where relevant. Legal basis: Art. 6(1)(a) GDPR. You can withdraw
              consent at any time — via the unsubscribe link in every email or by message to{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">
                marcel@newways.ai
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">10. Email contact</h2>
            <p>
              If you contact us by email, your message including the personal data contained in it
              is stored to handle your request. We do not share this data without your consent.
              Legal basis is Art. 6(1)(b) GDPR for contract-related communication, otherwise
              Art. 6(1)(f) GDPR (legitimate interest).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">11. External links</h2>
            <p>
              This website includes links to third-party websites. When you click an external link,
              your IP address, the time, and the previously visited page are in particular
              transferred to the provider. We are not liable for these third-party contents or their
              privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">12. GDPR-compliant AI implementations</h2>
            <p>
              Newways offers consulting and 1:1 implementation of bespoke AI projects for our
              clients. In client projects we rely on privacy-friendly architectures: local
              processing where possible, EU-hosted infrastructure where available, and transparent
              data processing agreements with all sub-processors. Sensitive business data stays in
              our clients’ ecosystem. This privacy policy concerns only the processing of your data
              when visiting this website — individual client engagements are governed by separate
              contracts.
            </p>
          </section>

          <p className="text-xs text-primary/40 mt-12">
            As of: {new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </main>
      <Footer lang="en" />
    </div>
  );
}
