import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Trust at VoiceIt',
};

const LAST_UPDATED = '22 May 2026';
const VERSION = 'v1.0';

export default function TrustEN() {
  return (
    <div className="bg-background min-h-screen text-primary">
      <main className="pt-16 pb-20 px-6 md:px-16 max-w-4xl mx-auto">
        <div className="mb-12 flex justify-between items-center">
          <Link href="/en" className="flex items-center gap-2 text-primary/50 hover:text-primary transition-colors font-sans text-sm">
            <ArrowLeft size={16} /> Back
          </Link>
          <div className="text-xl font-heading font-bold tracking-tight text-primary">
            Voiceit<span className="text-accent">.</span> <span className="text-primary/30 font-light text-sm">/ Trust</span>
          </div>
        </div>
        <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">Trust at VoiceIt</h1>
        <p className="font-sans text-xs text-primary/40 mb-12">
          As of: {LAST_UPDATED} · Version {VERSION}
        </p>
        <div className="font-sans text-primary/70 space-y-8 leading-relaxed text-sm">

          <p className="font-bold text-primary text-base">
            Dictation stays local. AI when needed. Data stays in Europe.
          </p>
          <p>
            We built VoiceIt to give you the speed of cloud dictation without the surveillance. Here's exactly what happens with your data, in plain language.
          </p>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">The short version</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li><strong className="text-primary">Your voice never leaves your Mac.</strong> Speech-to-text runs on-device, every time, no exceptions.</li>
              <li><strong className="text-primary">AI is opt-in.</strong> Plain dictation never calls any AI service. Only Prompt Mode and Agent Mode do, and only after you press the hotkey.</li>
              <li><strong className="text-primary">AI processing stays in Europe.</strong> When you do use AI, your transcript is processed by Google Vertex AI in <strong>Frankfurt, Germany</strong> — never the US.</li>
              <li><strong className="text-primary">No training on your data.</strong> Your transcripts are not used to train any AI model.</li>
              <li><strong className="text-primary">No tracking, no ads, no analytics.</strong> We have no idea what you dictate. We don't want to.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">What stays on your device</h2>
            <p>
              Everything below is processed entirely on your Mac. We never see it. No server, no log, no backup.
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li>The audio captured from your microphone while you hold a hotkey</li>
              <li>The transcribed text produced by the on-device speech recognition model</li>
              <li>Your transcription history (kept for up to 30 days, then auto-deleted)</li>
              <li>Your custom dictionary, voice fillers, and personal prompt templates</li>
              <li>Your app settings (hotkeys, language, theme, microphone selection)</li>
              <li>The 30-day audio archive (auto-purged on a rolling basis)</li>
            </ul>
            <p className="mt-3">
              If you uninstall VoiceIt and remove <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">~/Library/Application Support/com.newways.voiceit/</code>, all of it is gone.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">What we transmit, and only when you opt in</h2>

            <h3 className="font-bold text-primary mt-4 mb-2">Prompt Mode and Agent Mode (AI text processing)</h3>
            <p>
              When you trigger Prompt Mode or Agent Mode, the <strong>already-transcribed text</strong> (and in Agent Mode, the text you had selected in another app) is sent to a large language model for restructuring or transformation.
            </p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li><strong>Audio is never sent.</strong> Only the transcribed text.</li>
              <li><strong>Routing:</strong> request goes to our Supabase Edge Function (<code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">voiceit-proxy-vertex</code>), which calls Google Vertex AI in <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">europe-west3</code> (Frankfurt). If Frankfurt is unavailable, traffic fails over to <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">europe-west4</code> (Amsterdam). Both are EU regions.</li>
              <li><strong>Model:</strong> Google Gemini 2.5 Flash on Vertex AI.</li>
              <li><strong>Data sent:</strong> the transcript, your selected text (Agent Mode only), the system prompt, your anonymous device ID for rate-limiting, your subscription tier.</li>
              <li><strong>Data retained:</strong> none on our side. Google retains a short-lived abuse cache (~24 hours) as standard practice for Vertex AI.</li>
              <li><strong>Training:</strong> Vertex AI does <strong>not</strong> train on customer data. This is the default under the Google Cloud Data Processing Addendum.</li>
              <li><strong>Opt-out:</strong> simply don't use Prompt Mode or Agent Mode. Plain Dictation never calls any AI service.</li>
            </ul>

            <h3 className="font-bold text-primary mt-6 mb-2">Update checks</h3>
            <p>
              VoiceIt fetches <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">latest.json</code> from <code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">github.com/newwaysai/voiceit-releases</code> at startup and periodically. Standard HTTPS request, includes only what GitHub logs by default (IP, User-Agent).
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">License verification</h3>
            <p>
              If you have a paid subscription, the app contacts Supabase at startup and every 30 minutes to confirm your subscription is active. Data sent: anonymous device ID.
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">Crash and error reports</h3>
            <p>
              Errors are logged only to your local machine (<code className="bg-primary/10 px-1.5 py-0.5 rounded text-xs">~/Library/Logs/com.newways.voiceit/</code>). No automatic crash reports are sent anywhere.
            </p>

            <h3 className="font-bold text-primary mt-6 mb-2">In-app feedback</h3>
            <p>
              If you choose to send feedback via the in-app form, that text plus your email (if you provide one), device ID, tier, app version, and OS family go to our Supabase project (EU Frankfurt). Nothing else.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Where AI processes happen</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left mt-2 border-collapse">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="py-2 pr-3 text-primary font-semibold">Component</th>
                    <th className="py-2 pr-3 text-primary font-semibold">Region</th>
                    <th className="py-2 pr-3 text-primary font-semibold">Provider</th>
                    <th className="py-2 text-primary font-semibold">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-primary/70">
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Voice-to-text (Parakeet)</td><td className="py-2 pr-3"><strong>On your Mac</strong></td><td className="py-2 pr-3">NVIDIA Parakeet TDT v3 ONNX (bundled)</td><td className="py-2">Audio never leaves the device</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Text refinement (LLM)</td><td className="py-2 pr-3"><strong>Frankfurt, Germany</strong></td><td className="py-2 pr-3">Google Vertex AI</td><td className="py-2">Gemini 2.5 Flash, no training</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">LLM fallback region</td><td className="py-2 pr-3">Amsterdam, Netherlands</td><td className="py-2 pr-3">Google Vertex AI</td><td className="py-2">Only used if Frankfurt is unavailable</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Account + license</td><td className="py-2 pr-3"><strong>Frankfurt, Germany</strong></td><td className="py-2 pr-3">Supabase</td><td className="py-2">EU-hosted</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Payments</td><td className="py-2 pr-3">EU + US</td><td className="py-2 pr-3">Stripe</td><td className="py-2">DPF + SCC for US operations</td></tr>
                  <tr><td className="py-2 pr-3">Updates</td><td className="py-2 pr-3">US</td><td className="py-2 pr-3">GitHub</td><td className="py-2">Static file download only</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              All AI processing happens in the EU. The only US sub-processors involved in VoiceIt are Stripe (payments) and GitHub (static file hosting for app updates) — neither of them ever sees your dictation content.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">What we never do</h2>
            <ul className="list-none space-y-1">
              <li>❌ We never send your audio recordings anywhere</li>
              <li>❌ We never train any AI model on your data</li>
              <li>❌ We never run analytics or telemetry inside the app</li>
              <li>❌ We never sell or share your data with advertisers</li>
              <li>❌ We never embed third-party tracking scripts in the app</li>
              <li>❌ We never read your transcription history — it stays on your Mac</li>
              <li>❌ We never route AI traffic through the US</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Sub-processors at a glance</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left mt-2 border-collapse text-xs">
                <thead>
                  <tr className="border-b border-primary/20">
                    <th className="py-2 pr-3 text-primary font-semibold">Sub-processor</th>
                    <th className="py-2 pr-3 text-primary font-semibold">Located</th>
                    <th className="py-2 pr-3 text-primary font-semibold">Role</th>
                    <th className="py-2 text-primary font-semibold">What they see</th>
                  </tr>
                </thead>
                <tbody className="text-primary/70 align-top">
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Supabase (EU Frankfurt)</td><td className="py-2 pr-3">Germany</td><td className="py-2 pr-3">Account, license, AI proxy</td><td className="py-2">Email, device ID, transcript (only during AI calls, no retention)</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Google Cloud EMEA Ltd (Vertex AI)</td><td className="py-2 pr-3">Ireland / Frankfurt</td><td className="py-2 pr-3">LLM provider (Gemini 2.5 Flash)</td><td className="py-2">Transcribed text, ~24h abuse cache, no training</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Stripe Payments Europe</td><td className="py-2 pr-3">Ireland + US (DPF)</td><td className="py-2 pr-3">Payment processing</td><td className="py-2">Name, billing address, card details (we never see card data)</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">GitHub Inc. (Microsoft)</td><td className="py-2 pr-3">US (DPF)</td><td className="py-2 pr-3">Static file hosting for updates</td><td className="py-2">IP at download time</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3">Brevo (Sendinblue)</td><td className="py-2 pr-3">Berlin, Germany</td><td className="py-2 pr-3">Marketing email (only if opted in)</td><td className="py-2">Email + name</td></tr>
                  <tr><td className="py-2 pr-3">Vercel Inc.</td><td className="py-2 pr-3">US (DPF)</td><td className="py-2 pr-3">Marketing website hosting</td><td className="py-2">IP, request logs</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              Full Data Processing Agreements with all sub-processors that handle personal data. Listed individually in our <Link href="/en/privacy" className="text-accent underline">Privacy Policy</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Your rights under GDPR</h2>
            <p>You have the right to:</p>
            <ul className="list-disc ml-6 mt-3 space-y-1">
              <li><strong>Access</strong> the personal data we hold about you (Art. 15)</li>
              <li><strong>Correct</strong> inaccurate data (Art. 16)</li>
              <li><strong>Delete</strong> your data — right to be forgotten (Art. 17)</li>
              <li><strong>Restrict</strong> processing (Art. 18)</li>
              <li><strong>Port</strong> your data to another service (Art. 20)</li>
              <li><strong>Object</strong> to processing based on legitimate interests (Art. 21)</li>
              <li><strong>Withdraw consent</strong> at any time (Art. 7(3))</li>
              <li><strong>Complain</strong> to the Berliner Beauftragte für Datenschutz und Informationsfreiheit (<a href="https://www.datenschutz-berlin.de" target="_blank" rel="noopener noreferrer" className="text-accent underline">datenschutz-berlin.de</a>)</li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, email <strong>marcel@newways.ai</strong>. We respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">How VoiceIt compares</h2>
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
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3 font-semibold">Voice processing on-device</td><td className="py-2 pr-3">✅</td><td className="py-2 pr-3">✅</td><td className="py-2 pr-3">✅</td><td className="py-2">⚠️</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3 font-semibold">AI processing in EU</td><td className="py-2 pr-3">✅ Frankfurt</td><td className="py-2 pr-3">❌ US</td><td className="py-2 pr-3">❌ US</td><td className="py-2">❌ US</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3 font-semibold">Audio never sent to cloud</td><td className="py-2 pr-3">✅</td><td className="py-2 pr-3">✅</td><td className="py-2 pr-3">✅</td><td className="py-2">⚠️</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3 font-semibold">No training on user data</td><td className="py-2 pr-3">✅</td><td className="py-2 pr-3">✅ contract</td><td className="py-2 pr-3">✅ contract</td><td className="py-2">❓</td></tr>
                  <tr className="border-b border-primary/10"><td className="py-2 pr-3 font-semibold">GDPR-native (German company)</td><td className="py-2 pr-3">✅</td><td className="py-2 pr-3">❌</td><td className="py-2 pr-3">❌</td><td className="py-2">❌</td></tr>
                  <tr><td className="py-2 pr-3 font-semibold">Open about subprocessors</td><td className="py-2 pr-3">✅ public list</td><td className="py-2 pr-3">❓</td><td className="py-2 pr-3">❓</td><td className="py-2">❓</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs">
              Last verified: 2026-05-22. We re-check competitor claims quarterly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-primary mb-4">Read more</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li><Link href="/en/privacy" className="text-accent underline">Privacy Policy (English)</Link> — full GDPR documentation</li>
              <li><Link href="/datenschutz" className="text-accent underline">Datenschutzerklärung (Deutsch)</Link> — Original German version, legally binding</li>
              <li><Link href="/en/terms" className="text-accent underline">Terms of Service</Link></li>
              <li><Link href="/agb" className="text-accent underline">AGB</Link></li>
              <li><Link href="/en/imprint" className="text-accent underline">Imprint / Impressum</Link></li>
            </ul>
            <p className="mt-3">
              For deeper questions about how we handle data, write to <strong>marcel@newways.ai</strong>.
            </p>
          </section>

          <p className="text-xs text-primary/40 mt-12 border-t border-primary/10 pt-8">
            Data Controller: Marcel Porcher · Newways · Schlesische Str. 14 · 10997 Berlin · Germany<br />
            VAT ID: DE344920245 · Email: marcel@newways.ai
          </p>
        </div>
      </main>
      <Footer lang="en" />
    </div>
  );
}
