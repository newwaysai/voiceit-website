import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy',
};

const LAST_UPDATED = '1 July 2026';
const VERSION = 'v1.6';

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
        <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="font-sans text-xs text-primary/40 mb-4">
          As of: {LAST_UPDATED} · Version {VERSION}
        </p>
        <p className="font-sans text-xs text-primary/40 mb-12">
          English translation for convenience. The German version at{' '}
          <Link href="/datenschutz" className="text-accent underline">/datenschutz</Link>{' '}
          is the legally binding text.
        </p>
        <div className="font-sans text-primary/70 space-y-8 leading-relaxed text-sm">

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">1. Short version</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong className="text-primary">Your voice never leaves your Mac.</strong> All speech-to-text runs on-device.</li>
              <li><strong className="text-primary">AI modes are opt-in.</strong> Only when you choose Prompt or Agent Mode does the resulting <em>text</em> go to an AI service. Audio is never sent.</li>
              <li><strong className="text-primary">Account data lives in Stripe and Supabase.</strong> Only what is needed to sell you a subscription and let you sign in.</li>
              <li><strong className="text-primary">History is local.</strong> Transcripts and audio recordings stay on your Mac and are auto-deleted after 30 days.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">2. Data controller under GDPR</h2>
            <p>
              The controller under the General Data Protection Regulation (GDPR) and other data
              protection laws is:
            </p>
            <p className="mt-3">
              Marcel Porcher<br />
              Newways<br />
              Rabestraße 6<br />
              10405 Berlin, Germany<br />
              VAT ID: DE344920245<br />
              Email:{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">
                marcel@newways.ai
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">3. Data Protection Officer</h2>
            <p>
              We are not required to appoint a Data Protection Officer under Art. 37 GDPR and
              § 38 BDSG (sole proprietor, no regular large-scale processing of special categories).
              Direct your privacy requests to{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">marcel@newways.ai</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">4. Legal bases and retention</h2>
            <h3 className="font-bold text-primary mb-2">Legal bases under Art. 6 GDPR</h3>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Art. 6(1)(a)</strong> (consent): newsletter, lead magnets, Instagram DM automation, marketing emails</li>
              <li><strong>Art. 6(1)(b)</strong> (contract performance): app delivery, account, Pro subscription via Stripe</li>
              <li><strong>Art. 6(1)(c)</strong> (legal obligation): retention of tax-relevant records</li>
              <li><strong>Art. 6(1)(f)</strong> (legitimate interest): hosting logs, Trustpilot widget, external links, update checks</li>
            </ul>

            <h3 className="font-bold text-primary mt-6 mb-2">Legitimate interest balancing</h3>
            <p>
              For processing based on legitimate interests, we conduct a written balancing test.
              We provide this documentation to the supervisory authority on request.
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">Retention per data category</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left mt-2 border-collapse">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="py-2 pr-3 text-primary font-semibold">Data category</th>
                    <th className="py-2 pr-3 text-primary font-semibold">Retention</th>
                    <th className="py-2 text-primary font-semibold">Legal basis</th>
                  </tr>
                </thead>
                <tbody className="text-primary/70">
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Hosting logs (IP, user agent)</td><td className="py-2 pr-3">30 days</td><td className="py-2">Art. 6(1)(f)</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Newsletter / lead-magnet emails</td><td className="py-2 pr-3">until withdrawal + 1 month</td><td className="py-2">Art. 6(1)(a)</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Supabase account data</td><td className="py-2 pr-3">as long as account exists</td><td className="py-2">Art. 6(1)(b)</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Stripe payment records</td><td className="py-2 pr-3">10 years (German GoBD / § 147 AO)</td><td className="py-2">Art. 6(1)(c)</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Local transcripts and audio</td><td className="py-2 pr-3">30 days, auto-deleted</td><td className="py-2">local, no transmission</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">AI requests at provider</td><td className="py-2 pr-3">per provider policy (e.g. Google ~24h abuse cache)</td><td className="py-2">Art. 6(1)(b)</td></tr>
                  <tr><td className="py-2 pr-3">Email correspondence</td><td className="py-2 pr-3">3 years after case closure</td><td className="py-2">Art. 6(1)(b)/(f)</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">5. Your rights</h2>
            <p>As a data subject you have the right at any time to:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>access (Art. 15 GDPR)</li>
              <li>rectification (Art. 16 GDPR)</li>
              <li>erasure / „right to be forgotten" (Art. 17 GDPR)</li>
              <li>restriction of processing (Art. 18 GDPR)</li>
              <li>data portability (Art. 20 GDPR)</li>
              <li>object to processing (Art. 21 GDPR)</li>
              <li>withdraw consent (Art. 7(3) GDPR)</li>
              <li>lodge a complaint with a supervisory authority</li>
            </ul>
            <p className="mt-3">
              To exercise these rights, a simple message to{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">marcel@newways.ai</a>{' '}
              is enough. We respond within 30 days.
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">Right to object to direct marketing (Art. 21)</h3>
            <p>
              You can object at any time to processing of your data for direct marketing — via the
              unsubscribe link in every email or by message to{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">marcel@newways.ai</a>.
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">Competent supervisory authority</h3>
            <p>
              Berliner Beauftragte für Datenschutz und Informationsfreiheit (BlnBDI)<br />
              Friedrichstr. 219, 10969 Berlin, Germany<br />
              Phone: +49 (0)30 13889-0<br />
              Email: mailbox@datenschutz-berlin.de<br />
              Web:{' '}
              <a href="https://www.datenschutz-berlin.de/" target="_blank" rel="noopener noreferrer" className="text-accent underline">
                datenschutz-berlin.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">6. Automated decision-making (Art. 22 GDPR)</h2>
            <p>
              We do not use any automated decision-making under Art. 22 GDPR. Voiceit does not make
              legally binding or similarly significant decisions about you. The AI modes assist you
              with dictation and text refinement; you see every AI output before it is inserted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">7. Website hosting</h2>
            <p>We host our website with the following provider:</p>
            <p className="mt-3">Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
            <p className="mt-3">
              On access, Vercel automatically collects and stores information in server log files
              (IP address, browser type, operating system, referrer URL, time of access). This data
              serves the technically error-free delivery. Legal basis: Art. 6(1)(f) GDPR.
            </p>
            <p className="mt-3">
              <strong className="text-primary">USA transfer:</strong> safeguarded by EU Standard
              Contractual Clauses (SCC) and the EU-U.S. Data Privacy Framework (DPF). As of May 2026
              the DPF is valid but under challenge at the CJEU.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Sub-processors:</strong> Vercel uses Amazon Web
              Services, Microsoft Azure, and Google Cloud Platform as underlying infrastructure.
            </p>
            <p className="mt-3">
              A data processing agreement (Art. 28 GDPR) exists with Vercel. Details:{' '}
              <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent underline">
                vercel.com/legal/privacy-policy
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">8. Local Storage and Cookies (TTDSG § 25)</h2>
            <p>This website uses only technically necessary local storage entries:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>
                <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">voiceit-theme</code>{' '}
                — stores your theme preference (light/dark)
              </li>
            </ul>
            <p className="mt-3">
              Legal basis: <strong className="text-primary">TTDSG § 25(2)(2)</strong> (strictly
              necessary, no consent required) in conjunction with Art. 6(1)(f) GDPR.
            </p>
            <p className="mt-3">
              No tracking cookies, analytics, or marketing cookies are used. No cookie banner.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">9. Sub-processors</h2>
            <p>
              The following table lists every sub-processor to whom personal data may be transferred.
              A data processing agreement (Art. 28 GDPR) or equivalent is in place with every
              provider that processes personal data on our behalf.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-left mt-4 border-collapse text-xs">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="py-2 pr-3 text-primary font-semibold">Provider</th>
                    <th className="py-2 pr-3 text-primary font-semibold">Location</th>
                    <th className="py-2 pr-3 text-primary font-semibold">Function</th>
                    <th className="py-2 pr-3 text-primary font-semibold">Data</th>
                    <th className="py-2 pr-3 text-primary font-semibold">Transfer mechanism</th>
                    <th className="py-2 text-primary font-semibold">Privacy</th>
                  </tr>
                </thead>
                <tbody className="text-primary/70 align-top">
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Vercel Inc.</td><td className="py-2 pr-3">USA</td><td className="py-2 pr-3">Website hosting</td><td className="py-2 pr-3">IP, logs</td><td className="py-2 pr-3">DPF + SCC</td><td className="py-2"><a href="https://vercel.com/legal/privacy-policy" className="text-accent underline" target="_blank" rel="noopener noreferrer">Link</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Supabase Pte. Ltd.</td><td className="py-2 pr-3">EU (Ireland, eu-west-1)</td><td className="py-2 pr-3">Account, license check, app backend</td><td className="py-2 pr-3">Email, device ID</td><td className="py-2 pr-3">EU hosting, US parent (Supabase Inc., Delaware) — DPF + SCC</td><td className="py-2"><a href="https://supabase.com/privacy" className="text-accent underline" target="_blank" rel="noopener noreferrer">Link</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Stripe, Inc.</td><td className="py-2 pr-3">USA + EU + UK</td><td className="py-2 pr-3">Subscription payment</td><td className="py-2 pr-3">Name, address, card/bank data, tax info</td><td className="py-2 pr-3">DPF + SCC + UK Adequacy</td><td className="py-2"><a href="https://stripe.com/privacy" className="text-accent underline" target="_blank" rel="noopener noreferrer">Link</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Google Cloud EMEA Ltd</td><td className="py-2 pr-3">Ireland / Frankfurt, DE</td><td className="py-2 pr-3">AI model Gemini via Vertex AI (Prompt/Agent Mode)</td><td className="py-2 pr-3">Transcribed text (opt-in)</td><td className="py-2 pr-3">EU-internal (europe-west3)</td><td className="py-2"><a href="https://cloud.google.com/terms/data-processing-addendum" className="text-accent underline" target="_blank" rel="noopener noreferrer">Cloud DPA</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Brevo (Sendinblue GmbH)</td><td className="py-2 pr-3">Berlin</td><td className="py-2 pr-3">Newsletter, lead-magnet emails</td><td className="py-2 pr-3">Email, name</td><td className="py-2 pr-3">EU-internal</td><td className="py-2"><a href="https://www.brevo.com/legal/privacypolicy/" className="text-accent underline" target="_blank" rel="noopener noreferrer">Link</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Newways lead-magnet service (self-hosted)</td><td className="py-2 pr-3">Frankfurt, Germany</td><td className="py-2 pr-3">Instagram comment-to-DM automation</td><td className="py-2 pr-3">IG handle, DM content (lead-magnet links)</td><td className="py-2 pr-3">EU-internal (Hostinger Frankfurt)</td><td className="py-2"><a href="https://www.hostinger.com/legal/data-processing-agreement" className="text-accent underline" target="_blank" rel="noopener noreferrer">Hostinger DPA</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">WhatsApp Ireland Ltd. (Meta)</td><td className="py-2 pr-3">Ireland / USA</td><td className="py-2 pr-3">Contact link</td><td className="py-2 pr-3">Metadata on click</td><td className="py-2 pr-3">DPF + SCC</td><td className="py-2"><a href="https://www.whatsapp.com/legal/privacy-policy-eea" className="text-accent underline" target="_blank" rel="noopener noreferrer">Link</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Skool Inc.</td><td className="py-2 pr-3">USA</td><td className="py-2 pr-3">Community link</td><td className="py-2 pr-3">Click metadata</td><td className="py-2 pr-3">DPF + SCC</td><td className="py-2"><a href="https://www.skool.com/privacy" className="text-accent underline" target="_blank" rel="noopener noreferrer">Link</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Trustpilot A/S</td><td className="py-2 pr-3">Denmark</td><td className="py-2 pr-3">Reviews widget</td><td className="py-2 pr-3">IP on widget load</td><td className="py-2 pr-3">EU-internal</td><td className="py-2"><a href="https://legal.trustpilot.com/end-user-privacy-terms" className="text-accent underline" target="_blank" rel="noopener noreferrer">Link</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">GitHub Inc. (Microsoft)</td><td className="py-2 pr-3">USA</td><td className="py-2 pr-3">Release distribution + update polling (every 30 min)</td><td className="py-2 pr-3">IP on download / polling</td><td className="py-2 pr-3">DPF + SCC + Microsoft DPA</td><td className="py-2"><a href="https://docs.github.com/en/site-policy/privacy-policies" className="text-accent underline" target="_blank" rel="noopener noreferrer">Link</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Google Workspace</td><td className="py-2 pr-3">USA</td><td className="py-2 pr-3">Business email marcel@newways.ai</td><td className="py-2 pr-3">Email content, recipient metadata</td><td className="py-2 pr-3">DPF + SCC</td><td className="py-2"><a href="https://workspace.google.com/terms/dpa_terms.html" className="text-accent underline" target="_blank" rel="noopener noreferrer">DPA</a></td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Apple Inc. (Sign-in with Apple — currently disabled)</td><td className="py-2 pr-3">USA / EU</td><td className="py-2 pr-3">Optional OAuth sign-in</td><td className="py-2 pr-3">Apple user ID, email</td><td className="py-2 pr-3">DPF + Apple standards</td><td className="py-2"><a href="https://www.apple.com/legal/privacy/" className="text-accent underline" target="_blank" rel="noopener noreferrer">Link</a></td></tr>
                  <tr><td className="py-2 pr-3">Google LLC (Sign-in with Google — currently disabled)</td><td className="py-2 pr-3">USA</td><td className="py-2 pr-3">Optional OAuth sign-in</td><td className="py-2 pr-3">Google user ID, email, name</td><td className="py-2 pr-3">DPF + SCC</td><td className="py-2"><a href="https://policies.google.com/privacy" className="text-accent underline" target="_blank" rel="noopener noreferrer">Link</a></td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-6">
              <strong className="text-primary">Note on US parent companies (CLOUD Act).</strong> Some sub-processors listed above (Google Cloud EMEA Ltd, Supabase Pte. Ltd., Stripe, Vercel, GitHub) belong to groups with a US parent. The US CLOUD Act in principle allows US authorities to request data even when it is stored physically in the EU. We actively reduce this risk: audio recordings never leave your device. Only transcribed text is sent in AI modes to Vertex AI in Frankfurt. For account and payment data we rely on EU hosting plus EU Standard Contractual Clauses and the EU-US Data Privacy Framework. The framework&apos;s status is being monitored through pending CJEU proceedings (Schrems III) — should it fall, we will inform you proactively and switch to SCCs plus a Transfer Impact Assessment.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Supabase DPA:</strong> signed on 2026-05-25 (Document Ref: WQJGP-LPPWT-HOCVQ-FZYVT, Part 2 dated August 5, 2025). Annexes EU Standard Contractual Clauses (Commission Decision 2021/914).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">10. AI processing (AI Act Art. 50)</h2>
            <p>
              Voiceit uses a <strong className="text-primary">local voice model</strong> on your Mac.{' '}
              <strong className="text-primary">Voice recordings are never transmitted to external
              providers.</strong>
            </p>
            <p className="mt-3">
              In addition, you can optionally activate Prompt Mode or Agent Mode. The locally
              transcribed <em>text</em> (not audio) is then forwarded through our Supabase Edge
              Function to an AI provider for refinement or transformation.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Routing:</strong> Supabase Edge Function →
              Google Cloud Vertex AI (europe-west3 Frankfurt, failover europe-west4 Amsterdam).<br />
              <strong className="text-primary">Model:</strong> Gemini 2.5 Flash via Vertex AI.<br />
              <strong className="text-primary">No training:</strong> Google does not use your data to train AI models
              (Google Cloud DPA guarantee).<br />
              <strong className="text-primary">No US routing:</strong> All AI requests stay in the EU.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Art. 50 AI Act transparency:</strong> This app uses
              artificial intelligence. AI outputs may contain errors. You see every AI output before
              it is inserted.
            </p>
            <p className="mt-3">
              Legal basis for optional AI use: Art. 6(1)(b) GDPR (contract performance, Pro
              subscription) or Art. 6(1)(a) GDPR (consent through active mode selection).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">11. Newsletter</h2>
            <p>
              When you sign up for our newsletter, we process your email address via Brevo
              (Sendinblue GmbH, Köpenicker Straße 126, 10179 Berlin, Germany). Brevo stores data on
              EU servers. Signup uses{' '}
              <strong className="text-primary">double opt-in</strong> — you receive a confirmation
              email you must click.
            </p>
            <p className="mt-3">
              Legal basis: Art. 6(1)(a) GDPR (consent). You can withdraw at any time — via the
              unsubscribe link in every email or by message to{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">marcel@newways.ai</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">12. Lead magnets and Instagram DM</h2>
            <p>
              When you comment a specific keyword on one of our Instagram posts, our{' '}
              <strong className="text-primary">own self-hosted lead-magnet service</strong> sends
              you the requested lead magnet via Instagram DM.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Operator:</strong> Newways (Marcel Porcher),
              Rabestraße 6, 10405 Berlin, Germany.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Server location:</strong> self-hosted on a Hostinger
              VPS in <strong className="text-primary">Frankfurt, Germany</strong> (Hostinger
              Operations Ltd., data center "fra"). No third-country transfer.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Data processed:</strong> your Instagram handle, the
              content of your comment (keyword detection) and the standardised lead-magnet DM we
              send back.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Retention:</strong> keyword + IG handle are stored in
              our own PostgreSQL database for the duration of the campaign plus a maximum of 6
              months for statistical analysis, then auto-deleted.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Sub-processor:</strong> Hostinger Operations Ltd. as
              VPS host. DPA:{' '}
              <a href="https://www.hostinger.com/legal/data-processing-agreement" target="_blank" rel="noopener noreferrer" className="text-accent underline">
                hostinger.com/legal/data-processing-agreement
              </a>.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Instagram side:</strong> The comment itself and all
              related metadata are processed by Meta/Instagram — outside our control.{' '}
              <a href="https://privacycenter.instagram.com/policy" target="_blank" rel="noopener noreferrer" className="text-accent underline">
                Instagram privacy policy
              </a>.
            </p>
            <p className="mt-3">
              Legal basis: Art. 6(1)(a) GDPR (consent through active keyword-comment action).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">13. Email contact</h2>
            <p>
              If you contact us by email at{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">marcel@newways.ai</a>,
              your message including the personal data contained in it is stored to handle your
              request.
            </p>
            <p className="mt-3">
              Legal basis: Art. 6(1)(b) GDPR for contract-related communication, otherwise
              Art. 6(1)(f) GDPR. Retention: 3 years after case closure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">14. Local Mail.app Read for OTP Auto-Detect (v0.7.23+)</h2>
            <p>
              When you sign in with email, Voiceit sends you a 6-digit one-time code. Starting with v0.7.23, the app can optionally read this code directly from your macOS Mail.app so you don't have to copy it manually.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Where:</strong> the read happens <em>entirely on your Mac</em> via a single AppleScript query against the last 5 minutes of Mail.app inbox messages from sender addresses matching <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">voiceit@</code>, <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">supabase@</code>, or <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">noreply@</code>.
            </p>
            <p className="mt-3">
              <strong className="text-primary">What is read:</strong> only the 6-digit code in the email body. Voiceit does not read other email contents, subjects, or sender details beyond the address pattern match.
            </p>
            <p className="mt-3">
              <strong className="text-primary">What is transmitted:</strong> nothing. The code stays on your device until you submit it to Supabase Auth to complete sign-in (same path as if you typed it manually).
            </p>
            <p className="mt-3">
              <strong className="text-primary">Permission:</strong> the macOS Automation → Mail permission is requested only when you first sign in. You can revoke it at any time in System Settings → Privacy & Security → Automation.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Opt-out:</strong> if you decline the permission, sign-in still works — you just copy the code manually as before.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">14a. Usage statistics (word count)</h2>
            <p>
              To enforce the Free-tier weekly word allowance and to understand how Voiceit is used overall, the app sends a small amount of usage data — a numeric word count linked to your account, never any dictation content — to our backend (Supabase, EU).
            </p>
            <p className="mt-3">
              <strong className="text-primary">What is sent:</strong> an aggregate <em>word count</em> (how many words you dictated in the current week), plus basic counters such as the number of AI tasks used this month and the calendar week. These are plain numbers.
            </p>
            <p className="mt-3">
              <strong className="text-primary">What is never sent:</strong> the <em>content</em> of your dictation. No transcript text, no audio, and no individual transcripts ever leave your Mac through this path. The number is a count, not the words themselves.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Why:</strong> the Free tier includes a weekly word limit, which can only be enforced if the count is stored server-side (otherwise it would reset every time you restart the app). Aggregated across users, these counts also tell us whether the product is useful and where to improve it.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Legal basis:</strong> Art. 6(1)(f) GDPR (legitimate interest in operating and improving the service and in enforcing fair-use limits). Balancing test: the data is a pseudonymous numeric count tied to your account id and contains no dictation content; it cannot reveal what you dictated; the impact on your privacy is minimal, while the interest in a working limit and product insight is real.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Retention:</strong> the current and previous weekly counters are kept while your account is active and deleted when you delete your account.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Opt-out:</strong> because this count is what enforces the Free-tier limit, it cannot be disabled while on the Free tier without removing the limit itself. On a paid tier the weekly word limit does not apply; the count is then used only as a display figure and an account-linked usage signal.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">15. Data security (Art. 32 GDPR)</h2>
            <p>
              We implement technical and organisational measures (TOMs) to protect your data from
              loss, manipulation, and unauthorised access — encrypted transmission (TLS), strong
              authentication, access restrictions, regular security updates. We maintain a full TOM
              catalogue internally and submit it to the supervisory authority on request.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">16. External links</h2>
            <p>
              This website includes links to third-party sites. When you click an external link,
              your IP address, the time, and the previously visited page are in particular
              transferred to the provider. We are not liable for these third-party contents or
              their privacy practices. Legal basis: Art. 6(1)(f) GDPR.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">17. Changes to this policy</h2>
            <p>
              We will update this document and bump the version number above whenever material
              changes are made. Significant changes (new sub-processors, new categories of data,
              changes affecting your rights) will be announced inside the app and, for account
              holders, by email. Current version: {VERSION}, {LAST_UPDATED}.
            </p>
          </section>

          <p className="text-xs text-primary/40 mt-12">
            As of: {LAST_UPDATED} · Version {VERSION}
          </p>
        </div>
      </main>
      <Footer lang="en" />
    </div>
  );
}
