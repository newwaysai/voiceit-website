'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import { Plus, Minus } from 'lucide-react';

const COPY = {
  de: {
    pill: 'FAQ',
    headingA: 'Häufige',
    headingB: 'Fragen.',
    sub: 'Acht Dinge, die ich gefragt werde, bevor jemand installiert.',
    contact: 'Noch eine Frage? Schreib direkt an',
    faqs: [
      { q: 'Funktioniert das auf M1, M2, M3?', a: 'Ja. Voiceit läuft nativ auf Apple Silicon — M1, M2, M3, M4. macOS 13 oder neuer. Intel-Macs werden nicht unterstützt, weil das lokale Voice-Modell auf Apple-Silicon-Leistung optimiert ist.' },
      { q: 'Was passiert, wenn ich Pro kündige?', a: 'Der Diktat-Modus bleibt für immer kostenlos — er ist eh lokal und braucht keinen Server. Prompt- und Agent-Modus werden gesperrt. Kündigung im Stripe-Kundenportal mit einem Klick.' },
      { q: 'Wie wechsle ich von Wispr Flow?', a: 'Wispr deinstallieren, Voiceit aus GitHub Releases laden, Onboarding folgen, Hotkey lernen. Dauert 5 Minuten. Deine Wispr-Custom-Commands kannst du als Voiceit-Profiles wieder anlegen.' },
      { q: 'Welche Sprachen werden unterstützt?', a: 'Deutsch und Englisch nativ — das lokale Voice-Modell ist multilingual. Im Prompt- und Agent-Modus kommt zusätzlich ein KI-Modell deiner Wahl dazu, das praktisch jede Sprache beherrscht.' },
      { q: 'Was sieht die KI von meinem Audio?', a: 'Nichts. Das Audio wird komplett auf deinem Mac transkribiert — lokales Voice-Modell, on-device. Nur der fertige Text wird an die KI im Prompt-/Agent-Modus geschickt — und auch nur dann, wenn du diese Modi aktiv nutzt. Im Diktat-Modus geht gar nichts ins Netz.' },
      { q: 'Gibt es eine Windows- oder Linux-Version?', a: 'Nein. Voiceit ist macOS-only, weil tiefe System-Integration nötig ist (Hotkeys, Text-Injection in jede App, Accessibility-APIs). Apple Silicon liefert außerdem die Performance fürs lokale Modell.' },
      { q: 'Was kostet Voiceit konkret?', a: 'Diktat unbegrenzt: 0 €, immer. Pro mit 500 KI-Aufrufen: 15 € / Monat. Premium mit 3.000 KI-Aufrufen: 30 € / Monat. Abrechnung alle 4 Wochen via Stripe-Checkout, jederzeit kündbar, kein Vertrag.' },
      { q: 'Wie bekomme ich Support?', a: 'Direct DM an Marcel auf X/LinkedIn oder Mail an marcel@newways.ai. Kein Ticket-System, kein Bot. Antwort meist unter 24 Stunden, bei Bug-Reports oft am gleichen Tag.' },
      { q: 'Wie lösche ich mein Konto?', a: 'In der App unter Settings → Konto → „Delete account". Dein Konto, dein Abo und alle gespeicherten Daten werden sofort und unwiderruflich gelöscht. DSGVO-konform (Art. 17). Diktat funktioniert danach weiter lokal — anonym, ohne Account.' },
    ],
  },
  en: {
    pill: 'FAQ',
    headingA: 'Frequently asked',
    headingB: 'questions.',
    sub: 'Eight things people ask before they install.',
    contact: 'Another question? Write directly to',
    faqs: [
      { q: 'Does it work on M1, M2, M3?', a: 'Yes. Voiceit runs natively on Apple Silicon — M1, M2, M3, M4. macOS 13 or newer. Intel Macs are not supported because the local voice model is tuned for Apple Silicon.' },
      { q: 'What happens if I cancel Pro?', a: 'Dictation mode stays free forever — it’s local and needs no server. Prompt and Agent modes lock. Cancel inside the Stripe customer portal in one click.' },
      { q: 'How do I switch from Wispr Flow?', a: 'Uninstall Wispr, grab Voiceit from GitHub Releases, run onboarding, learn the hotkey. Takes 5 minutes. Your Wispr custom commands can be recreated as Voiceit profiles.' },
      { q: 'Which languages are supported?', a: 'English and German natively — the local voice model is multilingual. In Prompt and Agent mode you can plug in an AI model of your choice that handles virtually any language.' },
      { q: 'What does the AI see of my audio?', a: 'Nothing. Audio is transcribed fully on your Mac — local voice model, on-device. Only the finished text is sent to the AI in Prompt/Agent mode — and only when you actively use those modes. Dictation mode never touches the network.' },
      { q: 'Is there a Windows or Linux version?', a: 'No. Voiceit is macOS-only because it needs deep system integration (hotkeys, text injection into any app, accessibility APIs). Apple Silicon also delivers the performance for the local model.' },
      { q: 'How much does Voiceit cost exactly?', a: 'Unlimited dictation: €0, always. Pro with 500 AI calls: €15 / month. Premium with 3,000 AI calls: €30 / month. Billed every 4 weeks via Stripe checkout, cancel any time, no contract.' },
      { q: 'How do I get support?', a: 'Direct DM Marcel on X/LinkedIn or email marcel@newways.ai. No ticket system, no bot. Reply usually within 24 hours, often same day for bug reports.' },
      { q: 'How do I delete my account?', a: 'In the app under Settings → Account → "Delete account". Your account, subscription and stored data are deleted immediately and irreversibly. GDPR compliant (Art. 17). Dictation keeps working locally afterwards — anonymously, no account.' },
    ],
  },
};

export default function VoiceItFAQ({ lang = 'de' }) {
  const compRef = useRef(null);
  const [openIdx, setOpenIdx] = useState(0);
  const c = COPY[lang] || COPY.de;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.faq-elem', {
        scrollTrigger: { trigger: compRef.current, start: 'top 92%' },
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.06,
        ease: 'power3.out',
        immediateRender: false,
      });
    }, compRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="faq"
      ref={compRef}
      aria-label={lang === 'en' ? 'Frequently asked questions' : 'Häufige Fragen'}
      className="relative w-full py-14 md:py-20 px-4 sm:px-6 md:px-8"
      style={{ background: 'var(--fv-bg)' }}
    >
      <div className="flair-orb-blue" style={{ top: '15%', right: '-150px', width: 480, height: 480 }} />

      <div className="relative z-10 max-w-[860px] mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="faq-elem flair-pill-blue w-fit mx-auto mb-5">
            <span className="font-data uppercase tracking-[0.2em] text-[10px]">{c.pill}</span>
          </div>
          <h2
            className="faq-elem flair-heading"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            {c.headingA}{' '}
            <span style={{ color: 'var(--fv-blue)' }}>{c.headingB}</span>
          </h2>
          <p
            className="faq-elem font-sans text-base md:text-lg mt-5 max-w-[58ch] mx-auto"
            style={{ color: 'var(--fv-text-muted)' }}
          >
            {c.sub}
          </p>
        </div>

        <div className="space-y-3">
          {c.faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <div
                key={i}
                className="faq-elem flair-card overflow-hidden"
                style={open ? { borderColor: 'rgba(37,99,235,0.3)' } : undefined}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  aria-expanded={open}
                  className="w-full flex items-start gap-4 px-5 md:px-7 py-5 md:py-6 text-left"
                  style={{ cursor: 'pointer' }}
                >
                  <span
                    className="shrink-0 mt-0.5 w-7 h-7 rounded-md flex items-center justify-center transition-all"
                    style={{
                      background: open ? 'var(--fv-blue)' : 'var(--fv-blue-soft)',
                      border: '1px solid rgba(37,99,235,0.25)',
                    }}
                  >
                    {open ? (
                      <Minus size={14} style={{ color: '#FFFFFF' }} strokeWidth={2.5} />
                    ) : (
                      <Plus size={14} style={{ color: 'var(--fv-blue)' }} strokeWidth={2.5} />
                    )}
                  </span>
                  <span
                    className="flex-1 font-heading font-bold text-[15px] md:text-[16px] leading-snug"
                    style={{ color: 'var(--fv-text)' }}
                  >
                    {f.q}
                  </span>
                </button>
                {open && (
                  <div className="px-5 md:px-7 pb-6 pl-[3.6rem] md:pl-[4.2rem]">
                    <p
                      className="font-sans text-[14px] md:text-[15px] leading-[1.65]"
                      style={{ color: 'var(--fv-text-muted)' }}
                    >
                      {f.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p
          className="faq-elem mt-8 text-center font-sans text-[14px]"
          style={{ color: 'var(--fv-text-muted)' }}
        >
          {c.contact}{' '}
          <a
            href="mailto:marcel@newways.ai"
            className="font-semibold transition-colors"
            style={{ color: 'var(--fv-blue)' }}
          >
            marcel@newways.ai
          </a>
          .
        </p>
      </div>
    </section>
  );
}
