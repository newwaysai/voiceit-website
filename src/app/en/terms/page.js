import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service',
};

const LAST_UPDATED = '17 May 2026';
const VERSION = 'v1.2';

export default function TermsEN() {
  return (
    <div className="bg-background min-h-screen text-primary">
      <main className="pt-16 pb-20 px-6 md:px-16 max-w-4xl mx-auto">
        <div className="mb-12 flex justify-between items-center">
          <Link href="/en" className="flex items-center gap-2 text-primary/50 hover:text-primary transition-colors font-sans text-sm">
            <ArrowLeft size={16} /> Back
          </Link>
          <div className="text-xl font-heading font-bold tracking-tight text-primary">
            Voiceit<span className="text-accent">.</span> <span className="text-primary/30 font-light text-sm">/ Terms</span>
          </div>
        </div>
        <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="font-sans text-xs text-primary/40 mb-4">
          As of: {LAST_UPDATED} · Version {VERSION}
        </p>
        <p className="font-sans text-xs text-primary/40 mb-12">
          English translation for convenience. The German version at{' '}
          <Link href="/agb" className="text-accent underline">/agb</Link>{' '}
          is the legally binding text.
        </p>
        <div className="font-sans text-primary/70 space-y-8 leading-relaxed text-sm">

          <section>
            <p>
              These Terms govern your use of the macOS application Voiceit (the „App") and any
              related services. By installing or using Voiceit, you agree to these Terms. If you
              don't agree, please don't use the App.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Operator:</strong><br />
              Marcel Porcher · Newways<br />
              Schlesische Str. 14 · 10997 Berlin · Germany<br />
              VAT ID: DE344920245<br />
              Email:{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">marcel@newways.ai</a><br />
              Imprint:{' '}
              <Link href="/en/imprint" className="text-accent underline">voiceitai.app/en/imprint</Link>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">1. What Voiceit is</h2>
            <p>Voiceit is a macOS desktop application that:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>Transcribes your microphone audio to text <strong className="text-primary">on your device</strong>, using a bundled speech recognition model</li>
              <li>Optionally restructures or transforms the transcribed text using third-party AI services (Prompt Mode, Agent Mode)</li>
              <li>Injects the resulting text into the application you are currently using</li>
            </ul>
            <p className="mt-3">Voiceit is offered as software-as-a-service with tiered subscriptions.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">2. Scope, consumers and businesses</h2>
            <p>
              These Terms apply to both <strong className="text-primary">consumers</strong> (§ 13
              BGB) and <strong className="text-primary">business users</strong> (§ 14 BGB).
              Deviating or supplementary terms of the customer do not apply unless we have expressly
              agreed in writing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">3. Formation of contract</h2>
            <p>
              The contract for free use is concluded upon installation and activation of the App.
              The contract for a paid subscription is concluded upon completion of checkout via
              Stripe. You receive a confirmation email with the contract details.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">4. Licence</h2>
            <p>
              We grant you a non-exclusive, non-transferable, revocable licence to install and use
              Voiceit on Macs you own or control, for your personal or internal business use,
              subject to these Terms and your active subscription tier.
            </p>
            <p className="mt-3">You may not:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>redistribute, resell, sublicense, or rent the App</li>
              <li>reverse-engineer, decompile, or attempt to extract the source code (except where mandatory law expressly permits)</li>
              <li>remove or alter any copyright, trademark, or signature notices</li>
              <li>use the App to build a competing product</li>
              <li>use the App to violate any law or third-party rights</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">5. Subscription tiers</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong className="text-primary">Free:</strong> unlimited on-device dictation, limited monthly AI calls, audio length cap.</li>
              <li><strong className="text-primary">Pro:</strong> higher monthly AI quota, longer audio cap, priority model access, custom prompts.</li>
              <li><strong className="text-primary">Unlimited:</strong> no monthly call limits, longest audio cap.</li>
            </ul>
            <p className="mt-3">
              Exact quotas, prices, and features are shown in the App and on voiceitai.app and may
              change with notice. Changes do not retroactively reduce any quotas you have already
              paid for in the current billing period.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">6. Payment, billing and taxes</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Subscriptions are billed monthly in advance through <strong className="text-primary">Stripe</strong>.</li>
              <li>Prices include German VAT (currently 19%) where applicable and are shown on the checkout page.</li>
              <li>Your subscription auto-renews monthly until you cancel.</li>
              <li>Invoices are sent by email and are available in the Stripe customer portal.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">7. Cancellation</h2>
            <p>
              You can cancel any subscription at any time in the App or via the Stripe customer
              portal. Cancellation takes effect at the end of the current billing period — you keep
              full access until then.
            </p>
            <p className="mt-3">
              We may terminate access to paid features if you materially breach these Terms or are
              more than 30 days behind on payment. On termination, the licence in Section 4 ends and
              you must uninstall the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">8. Right of withdrawal for consumers (B2C)</h2>
            <p>
              Consumers generally have a 14-day right of withdrawal under § 312g BGB.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Early expiry for digital content:</strong> For
              contracts on the supply of digital content not delivered on a tangible medium, the
              right of withdrawal expires under § 356(5) BGB if you expressly consent at the time of
              contract formation that we begin performance before the end of the withdrawal period
              — and you simultaneously acknowledge that you thereby lose your right of withdrawal.
            </p>
            <p className="mt-3">
              When starting a paid subscription, you must actively confirm this consent at checkout.
              Until then, the 14 days apply without restriction.
            </p>
            <h3 className="font-bold text-primary mt-6 mb-2">Withdrawal notice</h3>
            <p>
              You have the right to withdraw from this contract within fourteen days without giving
              any reason. The withdrawal period is fourteen days from the day of contract
              conclusion. To exercise your right of withdrawal, you must inform us ({' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">marcel@newways.ai</a>)
              {' '}by means of a clear statement (e.g. email) of your decision. To meet the
              withdrawal deadline, it is sufficient for you to send your communication concerning
              your exercise of the right of withdrawal before the period has expired. In case of an
              effective withdrawal, we will refund any payments made without undue delay and no
              later than fourteen days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">9. AI features and acceptable use</h2>
            <p>
              Prompt Mode and Agent Mode forward your transcribed text to AI providers (default:
              Supabase Edge Function → OpenRouter → Google Gemini; additional models selectable in
              the app settings via OpenRouter as routing partner; see{' '}
              <Link href="/en/privacy" className="text-accent underline">Privacy Policy</Link>).
              You are responsible for the content you submit. You agree{' '}
              <strong className="text-primary">not</strong> to use the AI features to:
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>generate or distribute illegal, harmful, defamatory, harassing, or hateful content</li>
              <li>generate malware, phishing material, or instructions for committing crimes</li>
              <li>generate sexual content involving minors</li>
              <li>process other people's personal data in violation of GDPR or applicable laws</li>
              <li>impersonate other persons or organisations</li>
              <li>attempt to bypass safety mechanisms of the underlying AI models</li>
            </ul>
            <p className="mt-3">
              We reserve the right to suspend or terminate accounts that violate this section, after
              hearing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">10. AI output disclaimer</h2>
            <p>
              AI output is generated by machine-learning models. It can be inaccurate, biased, or
              inappropriate. We do not guarantee correctness, fitness for any specific purpose, or
              absence of bias.{' '}
              <strong className="text-primary">Always review AI output before relying on it for
              decisions, communications, or anything that matters.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">11. macOS permissions</h2>
            <p>Voiceit requires the following macOS permissions to work:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li><strong className="text-primary">Microphone</strong> — to capture audio for transcription</li>
              <li><strong className="text-primary">Accessibility</strong> — to inject the resulting text into the focused application</li>
            </ul>
            <p className="mt-3">
              You grant these voluntarily through macOS System Settings. You can revoke them at any
              time. Revoking will disable the corresponding features but will not affect your
              subscription.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">12. Updates</h2>
            <p>
              Voiceit automatically checks for updates and will prompt you to install them. Updates
              may include bug fixes, new features, changes to AI prompts, or security patches.
            </p>
            <p className="mt-3">
              <strong className="text-primary">Material feature changes</strong> are announced with
              reasonable advance notice (at least 30 days) in the App or by email. If you do not
              agree with a change, you may terminate your subscription with extraordinary notice
              effective on the change date (pro-rata refund may apply).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">13. Service availability</h2>
            <p>
              We aim for high availability of the Supabase- and OpenRouter-backed features but make
              no guarantee of uninterrupted service. Local features (Dictation, history, settings)
              work without any internet connection. If a third-party AI provider has an outage, AI
              modes will be temporarily unavailable. Pro-rata refunds apply only for sustained
              outages (more than 24 consecutive hours in a calendar month).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">14. Liability</h2>
            <p>To the extent permitted by German law:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>we are liable without limitation for intent (Vorsatz) and gross negligence (grobe Fahrlässigkeit), for personal injury, and where mandatory product liability laws apply</li>
              <li>for ordinary negligence affecting essential contractual obligations („Kardinalpflichten"), our liability is limited to typical, foreseeable damages</li>
              <li>we are not liable for ordinary negligence affecting non-essential obligations, for loss of profit, lost data, or indirect/consequential damages</li>
              <li>aggregate liability for any twelve-month period is limited to the fees you paid us during that period</li>
            </ul>
            <p className="mt-3">
              For consumers, mandatory statutory rights (in particular warranty rights under §§ 327
              ff. BGB for digital products) remain unaffected.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">15. Warranty and update obligation</h2>
            <p>
              The supply of digital products is subject to §§ 327 ff. BGB. We provide security- and
              functionality-relevant updates during the minimum provision period. In case of defects
              you can demand cure, contract termination, or price reduction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">16. Changes to these Terms</h2>
            <p>
              We may update these Terms from time to time. Material changes are announced at least
              30 days before they take effect in the App or by email. If you do not object in
              writing or by email within this period, the changes are deemed accepted. We will
              point out this consequence explicitly in the change notice. If you object, you may
              terminate with extraordinary notice effective on the change date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">17. Governing law and venue</h2>
            <p>
              These Terms are governed by the laws of the Federal Republic of Germany, excluding
              the conflict-of-laws rules and the UN Convention on Contracts for the International
              Sale of Goods. For consumers, mandatory consumer-protection laws of their country of
              residence still apply.
            </p>
            <p className="mt-3">
              Place of jurisdiction for disputes with merchants, legal entities under public law,
              or special public-law funds is Berlin, Germany.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">18. EU Online Dispute Resolution</h2>
            <p>
              The European Commission provides an online dispute resolution platform:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-accent underline">
                ec.europa.eu/consumers/odr/
              </a>
              . We are not obligated and not willing to participate in consumer arbitration
              proceedings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">19. Severability</h2>
            <p>
              Should individual provisions of these Terms be or become wholly or partially invalid,
              the validity of the remaining provisions remains unaffected. The invalid provision is
              replaced by the statutory regulation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">20. Contact</h2>
            <p>
              Questions about these Terms:{' '}
              <a href="mailto:marcel@newways.ai" className="text-accent underline">marcel@newways.ai</a>
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
