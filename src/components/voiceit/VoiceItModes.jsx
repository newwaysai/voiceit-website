'use client';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Mic, Wand2, Bot } from 'lucide-react';
import VoiceItModesDemo from './VoiceItModesDemo';

const COPY = {
  de: {
    pill: 'Die Lösung',
    headingA: 'Drei Modi.',
    headingB: 'Eine Taste.',
    headingC: 'Null Tippen.',
    sub: 'Du musst nichts umlernen. Eine Taste halten, sprechen, loslassen.',
    free: 'Gratis',
    modes: [
      {
        label: 'Mode 1',
        hotkey: '⌘ links halten',
        title: 'Diktat',
        tagline: 'Sprich. Text erscheint.',
        body: 'Die Basis. 100% lokal. Lokales Voice-Modell läuft direkt auf deinem Mac. Audio verlässt dein Gerät nie. Unbegrenzt. Kostenlos. Für immer.',
        bullets: ['Offline-fähig', 'Echtzeit, keine Latenz', 'Deutsch + Englisch'],
        free: true,
      },
      {
        label: 'Mode 2',
        hotkey: '⌘ rechts halten',
        title: 'Prompt',
        tagline: 'Markier Text. Sag was. KI poliert.',
        body: 'Schlampige Notiz? Markier sie, halt ⌘ rechts, sprich „kürzer und höflicher", und der saubere Text steht da. Nur Text geht in die KI, nie dein Audio.',
        bullets: ['Audio bleibt lokal', 'Funktioniert in jeder App', 'KI-Modell deiner Wahl'],
        free: false,
      },
      {
        label: 'Mode 3',
        hotkey: '⌥ rechts halten',
        title: 'Agent',
        tagline: 'Sag was du willst. KI macht es.',
        body: 'Halt ⌥ rechts und sag „antworte freundlich auf diese Mail" oder „mach mir 3 Tweet-Hooks daraus". Die KI schreibt direkt in deine App. Kein Tab-Wechsel.',
        bullets: ['Direkte Text-Injection', 'Eigene Prompts pro Mode', 'Im Pro & Premium Plan'],
        free: false,
      },
    ],
  },
  en: {
    pill: 'The solution',
    headingA: 'Three modes.',
    headingB: 'One key.',
    headingC: 'Zero typing.',
    sub: 'Nothing to relearn. Hold a key, speak, let go.',
    free: 'Free',
    modes: [
      {
        label: 'Mode 1',
        hotkey: 'Hold ⌘ left',
        title: 'Dictation',
        tagline: 'Speak. Text appears.',
        body: 'The basics. 100% local. Local voice model runs right on your Mac. Audio never leaves the device. Unlimited. Free. Forever.',
        bullets: ['Works offline', 'Real-time, zero latency', 'English + German'],
        free: true,
      },
      {
        label: 'Mode 2',
        hotkey: 'Hold ⌘ right',
        title: 'Prompt',
        tagline: 'Select text. Say something. AI polishes.',
        body: 'Messy note? Highlight it, hold ⌘ right, say "shorter and politer," and clean text appears. Only text goes to the AI, never your audio.',
        bullets: ['Audio stays local', 'Works in any app', 'AI model of your choice'],
        free: false,
      },
      {
        label: 'Mode 3',
        hotkey: 'Hold ⌥ right',
        title: 'Agent',
        tagline: 'Say what you want. AI does it.',
        body: 'Hold ⌥ right and say "reply kindly to this email" or "give me 3 tweet hooks from this." The AI writes directly into your app. No tab switching.',
        bullets: ['Direct text injection', 'Custom prompts per mode', 'Pro & Premium plans'],
        free: false,
      },
    ],
  },
};

const ICONS = [Mic, Wand2, Bot];

export default function VoiceItModes({ lang = 'de' }) {
  const compRef = useRef(null);
  const c = COPY[lang] || COPY.de;

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.mode-elem', {
        scrollTrigger: { trigger: compRef.current, start: 'top 95%' },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        immediateRender: false,
      });
    }, compRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="modi"
      ref={compRef}
      aria-label={lang === 'en' ? 'Three Modes' : 'Drei Modi'}
      className="relative w-full py-12 md:py-16 px-4 sm:px-6 md:px-8"
      style={{ background: 'var(--fv-bg)' }}
    >
      <div className="flair-hero-card relative w-full max-w-[1280px] mx-auto px-5 md:px-10 lg:px-12 py-10 md:py-14 overflow-hidden">
        <div className="flair-hero-glow-blue" style={{ top: '-150px', left: '50%', transform: 'translateX(-50%)' }} />

        <div className="relative z-10">
          <div className="text-center mb-9 md:mb-11">
            <div className="mode-elem flair-pill-light w-fit mx-auto mb-4">
              <span className="font-data uppercase tracking-[0.2em] text-[10px]">{c.pill}</span>
            </div>
            <h2
              className="mode-elem font-heading font-extrabold tracking-tight leading-[1.05]"
              style={{
                fontSize: 'clamp(1.75rem, 4.5vw, 2.75rem)',
                color: '#FFFFFF',
              }}
            >
              {c.headingA}{' '}
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>{c.headingB}</span>{' '}
              <span
                style={{
                  color: '#CCFF00',
                  textShadow: '0 0 40px rgba(204,255,0,0.35)',
                }}
              >
                {c.headingC}
              </span>
            </h2>
            <p
              className="mode-elem font-sans text-[15px] md:text-base mt-4 max-w-[56ch] mx-auto"
              style={{ color: 'rgba(255,255,255,0.65)' }}
            >
              {c.sub}
            </p>
          </div>

          <div className="mode-elem">
            <VoiceItModesDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
