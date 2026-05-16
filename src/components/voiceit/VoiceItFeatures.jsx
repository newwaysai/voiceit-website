'use client';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import {
  Lock,
  Layers,
  Sparkles,
  SlidersHorizontal,
  Globe,
  Keyboard,
  Tags,
  HardDrive,
} from 'lucide-react';

const FEATURES = [
  {
    icon: Lock,
    title: 'Audio bleibt lokal',
    body: 'Lokales Voice-Modell läuft on-device. Dein Mikrofon-Signal verlässt deinen Mac nie. Wispr und Glaido streamen es. Wir nicht.',
  },
  {
    icon: Layers,
    title: '3 Modi statt 1',
    body: 'Diktat tippt 1:1. Prompt formt deine Sprache zum strukturierten Output. Agent transformiert markierten Text. Wispr hat nur Mode 1.',
  },
  {
    icon: Sparkles,
    title: 'Sauberer Output',
    body: 'Keine „ähm", keine Versprecher, keine Wiederholungen. Der Output liest sich wie geschrieben, nicht wie gesprochen.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Custom Profiles',
    body: 'Eigene System-Prompts pro Modus. „Image-Prompt-Generator", „Mail-Antwort", „Code-Kommentar" — du legst sie an, du triggerst sie.',
  },
  {
    icon: Globe,
    title: 'Cross-App Injection',
    body: 'Wo dein Cursor steht, landet der Text. Mail, Slack, Notion, VS Code, Terminal. Funktioniert in jeder Mac-App mit Textfeld.',
  },
  {
    icon: Keyboard,
    title: 'Hotkeys frei wählbar',
    body: 'Default ist ⌘ links / rechts und ⌥ rechts. Pass es an deine Hand an: Fn, Ctrl, beliebige Modifier-Kombi.',
  },
  {
    icon: Tags,
    title: 'Phrases · Sprach-Snippets',
    body: 'Trigger sprechen → Baustein landet. „meine sig" wird zur Mail-Signatur, „pitch-intro" zum Standard-Opener. Bis zu 200 eigene Phrases pro Account.',
  },
  {
    icon: HardDrive,
    title: 'Offline + History',
    body: 'Funktioniert ohne Internet (Diktat). Lokale History in SQLite, 3 Tage Auto-Cleanup. 7 Tage Offline-Grace für Pro/Premium.',
  },
];

export default function VoiceItFeatures() {
  const compRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feat-elem', {
        scrollTrigger: { trigger: compRef.current, start: 'top 95%' },
        y: 24,
        opacity: 0,
        duration: 0.65,
        stagger: 0.06,
        ease: 'power3.out',
        immediateRender: false,
      });
    }, compRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="features"
      ref={compRef}
      aria-label="Alle Funktionen"
      className="relative w-full py-14 md:py-20 px-4 sm:px-6 md:px-8"
      style={{ background: 'var(--fv-bg)' }}
    >
      <div className="flair-orb-blue" style={{ top: '10%', left: '-150px', width: 500, height: 500 }} />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-12 md:mb-14">
          <div className="feat-elem flair-pill-blue w-fit mx-auto mb-5">
            <span className="font-data uppercase tracking-[0.2em] text-[10px]">Alle Funktionen</span>
          </div>
          <h2
            className="feat-elem flair-heading"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            Mehr als ein Diktat-Knopf.{' '}
            <span style={{ color: 'var(--fv-blue)' }}>Eine ganze Voice-Toolchain.</span>
          </h2>
          <p
            className="feat-elem font-sans text-base md:text-lg mt-5 max-w-[58ch] mx-auto"
            style={{ color: 'var(--fv-text-muted)' }}
          >
            Acht Dinge, die Wispr nicht kann — oder nur halb. Konkret, ohne Marketing-Sprech.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="feat-elem flair-card p-5 md:p-6 flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{
                      background: 'var(--fv-blue-soft)',
                      border: '1px solid rgba(37,99,235,0.2)',
                    }}
                  >
                    <Icon size={18} style={{ color: 'var(--fv-blue)' }} strokeWidth={2.2} />
                  </div>
                  {f.comingSoon && (
                    <span
                      style={{
                        background: 'rgba(37,99,235,0.1)',
                        border: '1px solid rgba(37,99,235,0.25)',
                        color: 'var(--fv-blue)',
                        padding: '0.2rem 0.55rem',
                        borderRadius: '9999px',
                        fontFamily: 'var(--font-data)',
                        fontSize: '9px',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.14em',
                      }}
                    >
                      Coming
                    </span>
                  )}
                </div>
                <h3
                  className="font-heading font-extrabold text-[15px] md:text-base mb-2"
                  style={{ color: 'var(--fv-text)' }}
                >
                  {f.title}
                </h3>
                <p
                  className="font-sans text-[13px] leading-relaxed"
                  style={{ color: 'var(--fv-text-muted)' }}
                >
                  {f.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
