'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { Sliders, MessageSquare, Command, MailQuestion, Lock } from 'lucide-react';

const STACK = [
  {
    icon: Sliders,
    title: 'Custom Profiles',
    desc: 'Eigene System-Prompts pro Modus. Mail-Antwort, Code-Refactor, Image-Prompt — separat triggerbar.',
    worth: '€19 / Monat',
  },
  {
    icon: MessageSquare,
    title: 'Phrases · Sprach-Snippets',
    desc: '200 eigene Trigger. „meine sig" → Mail-Signatur. „pitch-intro" → Standard-Opener.',
    worth: '€9 / Monat',
  },
  {
    icon: Command,
    title: 'Frei wählbare Hotkeys',
    desc: 'Default ⌘ links/rechts, ⌥ rechts. Pass es an deine Hand an. Fn, Ctrl, beliebige Kombi.',
    worth: '€5 / Monat',
  },
  {
    icon: MailQuestion,
    title: 'Direct-Builder-Access',
    desc: 'Bug? Mail an Marcel. Feature-Wunsch? Wird beim nächsten Sprint diskutiert. Kein Ticket-System.',
    worth: 'unbezahlbar',
  },
  {
    icon: Lock,
    title: 'EU-DSGVO · Lokales Voice-Modell',
    desc: 'Audio bleibt auf deinem Mac. Lokal transkribiert, nichts in die Cloud. EU-Backend für Auth und Billing.',
    worth: 'Keine Audio-Cloud-Kosten — by design',
  },
];

export default function VoiceItBonusStack() {
  const compRef = useRef(null);

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
      aria-label="Pro-Plan Bonus-Stack"
      className="relative w-full py-12 md:py-16 px-4 sm:px-6 md:px-8"
      style={{ background: 'var(--fv-bg)' }}
    >
      <div className="flair-orb-blue" style={{ top: '20%', left: '-150px', width: 480, height: 480 }} />

      <div className="relative z-10 max-w-[1000px] mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <div className="bs-elem flair-pill-blue w-fit mx-auto mb-5">
            <span className="font-data uppercase tracking-[0.2em] text-[10px]">Im Pro-Plan</span>
          </div>
          <h2
            className="bs-elem flair-heading"
            style={{ fontSize: 'clamp(1.85rem, 4.5vw, 2.75rem)' }}
          >
            Was du für 15 € pro Monat bekommst —{' '}
            <span style={{ color: 'var(--fv-blue)' }}>gestapelt.</span>
          </h2>
          <p
            className="bs-elem font-sans text-base md:text-lg mt-5 max-w-[58ch] mx-auto"
            style={{ color: 'var(--fv-text-muted)' }}
          >
            Kein Aufpreis. Kein Add-on-Store. Alles im Pro-Plan drin.
          </p>
        </div>

        <div
          className="bs-elem flair-card overflow-hidden"
          style={{
            borderColor: 'rgba(37,99,235,0.25)',
          }}
        >
          {STACK.map((item, i) => {
            const Icon = item.icon;
            const isLast = i === STACK.length - 1;
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
                      Wert · {item.worth}
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
          Alle Funktionen aktiv im Pro-Plan · keine Add-Ons · kein Hidden-Pricing
        </p>
      </div>
    </section>
  );
}
