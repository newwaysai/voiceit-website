'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { Sliders, MessageSquare, Command, MailQuestion, Lock } from 'lucide-react';

const COPY = {
  de: {
    pill: 'Im Pro-Plan',
    headingA: 'Was du für 15 € pro Monat bekommst —',
    headingB: 'gestapelt.',
    sub: 'Kein Aufpreis. Kein Add-on-Store. Alles im Pro-Plan drin.',
    worthLabel: 'Wert',
    footer: 'Alle Funktionen aktiv im Pro-Plan · keine Add-Ons · kein Hidden-Pricing',
    stack: [
      { title: 'Custom Profiles', desc: 'Eigene System-Prompts pro Modus. Mail-Antwort, Code-Refactor, Image-Prompt — separat triggerbar.', worth: '€19 / Monat' },
      { title: 'Phrases · Sprach-Snippets', desc: '200 eigene Trigger. „meine sig" → Mail-Signatur. „pitch-intro" → Standard-Opener.', worth: '€9 / Monat' },
      { title: 'Frei wählbare Hotkeys', desc: 'Default ⌘ links/rechts, ⌥ rechts. Pass es an deine Hand an. Fn, Ctrl, beliebige Kombi.', worth: '€5 / Monat' },
      { title: 'Direct-Builder-Access', desc: 'Bug? Mail an Marcel. Feature-Wunsch? Wird beim nächsten Sprint diskutiert. Kein Ticket-System.', worth: 'unbezahlbar' },
      { title: 'EU-DSGVO · Lokales Voice-Modell', desc: 'Audio bleibt auf deinem Mac. Lokal transkribiert, nichts in die Cloud. EU-Backend für Auth und Billing.', worth: 'Keine Audio-Cloud-Kosten — by design' },
    ],
  },
  en: {
    pill: 'In the Pro plan',
    headingA: 'What you get for €15 a month —',
    headingB: 'stacked.',
    sub: 'No upsell. No add-on store. All in the Pro plan.',
    worthLabel: 'Worth',
    footer: 'All features active in the Pro plan · no add-ons · no hidden pricing',
    stack: [
      { title: 'Custom profiles', desc: 'Your own system prompts per mode. Email reply, code refactor, image prompt — triggered separately.', worth: '€19 / month' },
      { title: 'Phrases · voice snippets', desc: '200 custom triggers. "my sig" → email signature. "pitch intro" → standard opener.', worth: '€9 / month' },
      { title: 'Custom hotkeys', desc: 'Default ⌘ left/right, ⌥ right. Bend it to your hand. Fn, Ctrl, any combo.', worth: '€5 / month' },
      { title: 'Direct builder access', desc: 'Bug? Email Marcel. Feature wish? Discussed in the next sprint. No ticket system.', worth: 'priceless' },
      { title: 'EU GDPR · local voice model', desc: 'Audio stays on your Mac. Local transcription, nothing to the cloud. EU backend for auth and billing.', worth: 'no audio cloud cost — by design' },
    ],
  },
};

const ICONS = [Sliders, MessageSquare, Command, MailQuestion, Lock];

export default function VoiceItBonusStack({ lang = 'de' }) {
  const compRef = useRef(null);
  const c = COPY[lang] || COPY.de;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.bs-elem', {
        scrollTrigger: { trigger: compRef.current, start: 'top 92%' },
        y: 28,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'power3.out',
        immediateRender: false,
      });
    }, compRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={compRef}
      aria-label="Pro plan stack"
      className="relative w-full py-12 md:py-16 px-4 sm:px-6 md:px-8"
      style={{ background: 'var(--fv-bg)' }}
    >
      <div className="flair-orb-blue" style={{ top: '20%', left: '-150px', width: 480, height: 480 }} />

      <div className="relative z-10 max-w-[1000px] mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <div className="bs-elem flair-pill-blue w-fit mx-auto mb-5">
            <span className="font-data uppercase tracking-[0.2em] text-[10px]">{c.pill}</span>
          </div>
          <h2
            className="bs-elem flair-heading"
            style={{ fontSize: 'clamp(1.85rem, 4.5vw, 2.75rem)' }}
          >
            {c.headingA}{' '}
            <span style={{ color: 'var(--fv-blue)' }}>{c.headingB}</span>
          </h2>
          <p
            className="bs-elem font-sans text-base md:text-lg mt-5 max-w-[58ch] mx-auto"
            style={{ color: 'var(--fv-text-muted)' }}
          >
            {c.sub}
          </p>
        </div>

        <div
          className="bs-elem flair-card overflow-hidden"
          style={{
            borderColor: 'rgba(37,99,235,0.25)',
          }}
        >
          {c.stack.map((item, i) => {
            const Icon = ICONS[i];
            const isLast = i === c.stack.length - 1;
            return (
              <div
                key={i}
                className="flex items-start gap-4 md:gap-5 px-5 md:px-7 py-5 md:py-6"
                style={{
                  borderBottom: isLast ? 'none' : '1px solid var(--fv-divider)',
                  background: isLast ? 'rgba(204,255,0,0.05)' : 'transparent',
                }}
              >
                <div
                  className="shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: isLast ? 'rgba(204,255,0,0.15)' : 'var(--fv-blue-soft)',
                    border: isLast
                      ? '1px solid rgba(204,255,0,0.4)'
                      : '1px solid rgba(37,99,235,0.2)',
                  }}
                >
                  <Icon
                    size={17}
                    style={{ color: isLast ? '#7AA000' : 'var(--fv-blue)' }}
                    strokeWidth={2.2}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-3 mb-1.5">
                    <h3
                      className="font-heading font-bold text-[15px] md:text-[16px]"
                      style={{ color: 'var(--fv-text)' }}
                    >
                      {item.title}
                    </h3>
                    <span
                      className="font-data uppercase tracking-[0.14em] text-[10px] md:text-[11px] shrink-0"
                      style={{ color: 'var(--fv-text-muted)' }}
                    >
                      {c.worthLabel} · {item.worth}
                    </span>
                  </div>
                  <p
                    className="font-sans text-[13px] md:text-[14px] leading-relaxed"
                    style={{ color: 'var(--fv-text-muted)' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p
          className="bs-elem mt-6 text-center font-data text-[10.5px] uppercase tracking-[0.18em]"
          style={{ color: 'var(--fv-text-light)' }}
        >
          {c.footer}
        </p>
      </div>
    </section>
  );
}
