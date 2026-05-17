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

const COPY = {
  de: {
    pill: 'Alle Funktionen',
    headingA: 'Mehr als ein Diktat-Knopf.',
    headingB: 'Eine ganze Voice-Toolchain.',
    sub: 'Acht Dinge, die Wispr nicht kann — oder nur halb. Konkret, ohne Marketing-Sprech.',
    features: [
      { title: 'Audio bleibt lokal', body: 'Lokales Voice-Modell läuft on-device. Dein Mikrofon-Signal verlässt deinen Mac nie. Wispr und Glaido streamen es. Wir nicht.' },
      { title: '3 Modi statt 1', body: 'Diktat tippt 1:1. Prompt formt deine Sprache zum strukturierten Output. Agent transformiert markierten Text. Wispr hat nur Mode 1.' },
      { title: 'Sauberer Output', body: 'Keine „ähm", keine Versprecher, keine Wiederholungen. Der Output liest sich wie geschrieben, nicht wie gesprochen.' },
      { title: 'Custom Profiles', body: 'Eigene System-Prompts pro Modus. „Image-Prompt-Generator", „Mail-Antwort", „Code-Kommentar" — du legst sie an, du triggerst sie.' },
      { title: 'Cross-App Injection', body: 'Wo dein Cursor steht, landet der Text. Mail, Slack, Notion, VS Code, Terminal. Funktioniert in jeder Mac-App mit Textfeld.' },
      { title: 'Hotkeys frei wählbar', body: 'Default ist ⌘ links / rechts und ⌥ rechts. Pass es an deine Hand an: Fn, Ctrl, beliebige Modifier-Kombi.' },
      { title: 'Phrases · Sprach-Snippets', body: 'Trigger sprechen → Baustein landet. „meine sig" wird zur Mail-Signatur, „pitch-intro" zum Standard-Opener. Bis zu 200 eigene Phrases pro Account.' },
      { title: 'Offline + History', body: 'Funktioniert ohne Internet (Diktat). Lokale History in SQLite, 3 Tage Auto-Cleanup. 7 Tage Offline-Grace für Pro/Premium.' },
    ],
  },
  en: {
    pill: 'All features',
    headingA: 'More than a dictate button.',
    headingB: 'A full voice toolchain.',
    sub: 'Eight things Wispr cannot do — or only halfway. Concrete, no marketing speak.',
    features: [
      { title: 'Audio stays local', body: 'Local voice model runs on-device. Your microphone signal never leaves your Mac. Wispr and Glaido stream it. We don’t.' },
      { title: '3 modes instead of 1', body: 'Dictation types 1:1. Prompt shapes your speech into structured output. Agent transforms selected text. Wispr only has mode 1.' },
      { title: 'Clean output', body: 'No "uhms", no slips, no repetition. Reads like writing, not like speaking.' },
      { title: 'Custom profiles', body: 'Your own system prompts per mode. "Image prompt generator", "email reply", "code comment" — you create them, you trigger them.' },
      { title: 'Cross-app injection', body: 'Wherever your cursor is, the text lands. Mail, Slack, Notion, VS Code, Terminal. Works in any Mac app with a text field.' },
      { title: 'Custom hotkeys', body: 'Default is ⌘ left / right and ⌥ right. Bend it to your hand: Fn, Ctrl, any modifier combo.' },
      { title: 'Phrases · voice snippets', body: 'Speak a trigger → snippet lands. "my sig" becomes your email signature, "pitch intro" your standard opener. Up to 200 phrases per account.' },
      { title: 'Offline + history', body: 'Works without internet (dictation). Local history in SQLite, 3-day auto-cleanup. 7-day offline grace for Pro/Premium.' },
    ],
  },
};

const ICONS = [Lock, Layers, Sparkles, SlidersHorizontal, Globe, Keyboard, Tags, HardDrive];

export default function VoiceItFeatures({ lang = 'de' }) {
  const compRef = useRef(null);
  const c = COPY[lang] || COPY.de;

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
      aria-label={lang === 'en' ? 'All features' : 'Alle Funktionen'}
      className="relative w-full py-14 md:py-20 px-4 sm:px-6 md:px-8"
      style={{ background: 'var(--fv-bg)' }}
    >
      <div className="flair-orb-blue" style={{ top: '10%', left: '-150px', width: 500, height: 500 }} />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-12 md:mb-14">
          <div className="feat-elem flair-pill-blue w-fit mx-auto mb-5">
            <span className="font-data uppercase tracking-[0.2em] text-[10px]">{c.pill}</span>
          </div>
          <h2
            className="feat-elem flair-heading"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            {c.headingA}{' '}
            <span style={{ color: 'var(--fv-blue)' }}>{c.headingB}</span>
          </h2>
          <p
            className="feat-elem font-sans text-base md:text-lg mt-5 max-w-[58ch] mx-auto"
            style={{ color: 'var(--fv-text-muted)' }}
          >
            {c.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {c.features.map((f, i) => {
            const Icon = ICONS[i];
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
