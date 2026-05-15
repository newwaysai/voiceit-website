'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
  {
    q: 'Funktioniert das auf M1, M2, M3?',
    a: 'Ja. VoiceIt läuft nativ auf Apple Silicon — M1, M2, M3, M4. macOS 13 oder neuer. Intel-Macs werden nicht unterstützt, weil das lokale Voice-Modell auf Apple-Silicon-Leistung optimiert ist.',
  },
  {
    q: 'Was passiert, wenn ich Pro kündige?',
    a: 'Der Diktat-Modus bleibt für immer kostenlos — er ist eh lokal und braucht keinen Server. Prompt- und Agent-Modus werden gesperrt. Kündigung im Stripe-Kundenportal mit einem Klick.',
  },
  {
    q: 'Wie wechsle ich von Wispr Flow?',
    a: 'Wispr deinstallieren, VoiceIt aus GitHub Releases laden, Onboarding folgen, Hotkey lernen. Dauert 5 Minuten. Deine Wispr-Custom-Commands kannst du als VoiceIt-Profiles wieder anlegen.',
  },
  {
    q: 'Welche Sprachen werden unterstützt?',
    a: 'Deutsch und Englisch nativ — das lokale Voice-Modell ist multilingual. Im Prompt- und Agent-Modus kommt zusätzlich ein KI-Modell deiner Wahl dazu, das praktisch jede Sprache beherrscht.',
  },
  {
    q: 'Was sieht die KI von meinem Audio?',
    a: 'Nichts. Das Audio wird komplett auf deinem Mac transkribiert — lokales Voice-Modell, on-device. Nur der fertige Text wird an die KI im Prompt-/Agent-Modus geschickt — und auch nur dann, wenn du diese Modi aktiv nutzt. Im Diktat-Modus geht gar nichts ins Netz.',
  },
  {
    q: 'Gibt es eine Windows- oder Linux-Version?',
    a: 'Nein. VoiceIt ist macOS-only, weil tiefe System-Integration nötig ist (Hotkeys, Text-Injection in jede App, Accessibility-APIs). Apple Silicon liefert außerdem die Performance fürs lokale Modell.',
  },
  {
    q: 'Ist der Founding-Preis wirklich Lifetime?',
    a: 'Ja. Wenn du dich jetzt einschreibst, bleibst du auf €14,95/Monat — auch wenn der Preis zum Public Launch auf €29,95 steigt. Voraussetzung: dein Abo läuft durchgehend. Kündigen + später wieder rein = neuer Preis.',
  },
  {
    q: 'Wie bekomme ich Support?',
    a: 'Direct DM an Marcel auf X/LinkedIn oder Mail an marcel@newways.ai. Kein Ticket-System, kein Bot. Antwort meist unter 24 Stunden, bei Bug-Reports oft am gleichen Tag.',
  },
];

export default function VoiceItFAQ() {
  const compRef = useRef(null);
  const [openIdx, setOpenIdx] = useState(0);

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
      ref={compRef}
      aria-label="Häufige Fragen"
      className="relative w-full py-14 md:py-20 px-4 sm:px-6 md:px-8"
      style={{ background: 'var(--fv-bg)' }}
    >
      <div className="flair-orb-blue" style={{ top: '15%', right: '-150px', width: 480, height: 480 }} />

      <div className="relative z-10 max-w-[860px] mx-auto">
        <div className="text-center mb-10 md:mb-14">
          <div className="faq-elem flair-pill-blue w-fit mx-auto mb-5">
            <span className="font-data uppercase tracking-[0.2em] text-[10px]">FAQ</span>
          </div>
          <h2
            className="faq-elem flair-heading"
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
          >
            Häufige{' '}
            <span style={{ color: 'var(--fv-blue)' }}>Fragen.</span>
          </h2>
          <p
            className="faq-elem font-sans text-base md:text-lg mt-5 max-w-[58ch] mx-auto"
            style={{ color: 'var(--fv-text-muted)' }}
          >
            Acht Dinge, die ich gefragt werde, bevor jemand installiert.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((f, i) => {
            const open = openIdx === i;
            return (
              <div
                key={i}
                className="faq-elem flair-card overflow-hidden"
                style={open ? { borderColor: 'rgba(28,100,255,0.3)' } : undefined}
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
                      border: '1px solid rgba(28,100,255,0.25)',
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
          Noch eine Frage? Schreib direkt an{' '}
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
