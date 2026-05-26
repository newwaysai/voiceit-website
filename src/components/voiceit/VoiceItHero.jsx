'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';
import { ArrowRight, Download, Lock, Mic, Wand2, Bot } from 'lucide-react';
import VoiceItModesDemo from './VoiceItModesDemo';

const COPY = {
  de: {
    pill: 'Voice Agent für macOS',
    headingA: 'Du sprichst.',
    headingB: 'Text erscheint.',
    headingC: '5× schneller.',
    body: (
      <>
        Lokales Voice-Modell, optimiert für Apple Silicon. Kein Cloud-Roundtrip.
        Bis zu <span style={{ color: '#FFFFFF', fontWeight: 600 }}>5× schneller</span> als Cloud-basierte Tools.
        Diktat lokal. KI-Features in EU (Deutschland). Kein KI-Training mit deinen Daten. 100% Safe.
      </>
    ),
    badge: 'Kostenlos testen · DSGVO',
    cta: 'Download for Mac',
    secondary: 'So funktionierts',
    chip1: '100% lokal',
    chip2: 'macOS 13+ · Apple Silicon',
    chip3: 'Diktat lokal, gratis',
    thinkingDictation: 'KI schreibt',
    thinkingAgent: 'Agent denkt',
    markedLabel: 'Markiert',
    recording: 'Recording',
    modes: [
      {
        key: 'diktat',
        label: 'Diktat',
        hotkey: '⌘ links',
        spoken: 'Hey Lukas, das Meeting um zehn passt nicht. Verschieben wir auf elf?',
        output: 'Hey Lukas, das Meeting um zehn passt nicht. Verschieben wir auf elf?',
        statusLabel: 'Diktat · lokal',
        appLabel: 'Mail · Antwort',
        caption: 'Sprich → Text erscheint, 1:1 in deiner App',
      },
      {
        key: 'prompt',
        label: 'Prompt',
        hotkey: '⌘ rechts',
        profile: 'Prompt-Architekt',
        spoken:
          'Generier mir ein hyperrealistisches Editorial-Foto. Ein Topmodel sitzt seitlich in einem 66er Mustang, Vintage-Look, goldene Stunde, sehr dramatisch.',
        output:
          '## Rolle\nEditorial-Fotograf, Schwerpunkt Vintage-Americana und Automotive.\n## Aufgabe\nHyperrealistisches Editorial-Foto: Topmodel seitlich in 1966er Ford Mustang Convertible.\n## Stil\nVintage-Americana, dramatisches Rim-Light der goldenen Stunde, 35mm Film-Grain, geringe Tiefenschärfe.\n## Format\n4:5 Hochformat, photorealistic, --style raw',
        outputType: 'structured',
        statusLabel: 'Prompt · Prompt-Architekt',
        appLabel: 'ChatGPT · neuer Chat',
        caption: 'Profile aktiv → Sprachnachricht wird zu Prompt mit Rolle, Aufgabe, Stil',
      },
      {
        key: 'agent',
        label: 'Agent',
        hotkey: '⌥ rechts',
        spoken: 'hey agent, mach mir Bullet Points daraus',
        selected:
          'Wir haben besprochen, dass Lukas am Mittwoch den Investor-Pitch übernimmt — er hat den finalen Slide-Stand. Sarah liefert bis Dienstagabend die überarbeiteten Slides inklusive der neuen Umsatz-Projektion. Ich kümmere mich um Catering, Logistik und das Briefing der Empfangs-Crew. Falls Lukas kurzfristig ausfällt, springe ich ein.',
        output:
          '• Lukas — Investor-Pitch Mittwoch, hat finalen Slide-Stand\n• Sarah — Slides bis Dienstagabend, inkl. Umsatz-Projektion\n• Marcel — Catering, Logistik, Empfangs-Crew-Briefing\n• Backup — Marcel übernimmt Pitch falls Lukas ausfällt',
        statusLabel: 'Agent · arbeitet',
        appLabel: 'Notes · Meeting',
        caption: 'Markiert + Sprich → Agent transformiert Fließtext zu Struktur',
      },
    ],
    dsgvoBadgeAlt: '100% DSGVO konform',
  },
  en: {
    pill: 'Voice agent for macOS',
    headingA: 'You speak.',
    headingB: 'Text appears.',
    headingC: '5× faster.',
    body: (
      <>
        Local voice model, tuned for Apple Silicon. No cloud round-trip.
        Up to <span style={{ color: '#FFFFFF', fontWeight: 600 }}>5× faster</span> than cloud-based tools.
        Dictation 100% local. AI features in EU (Germany). No AI training with your data. 100% Safe.
      </>
    ),
    badge: 'Test for free · GDPR',
    cta: 'Download for Mac',
    secondary: 'How it works',
    chip1: '100% local',
    chip2: 'macOS 13+ · Apple Silicon',
    chip3: 'Dictation local, free',
    thinkingDictation: 'AI writes',
    thinkingAgent: 'Agent thinks',
    markedLabel: 'Selected',
    recording: 'Recording',
    modes: [
      {
        key: 'diktat',
        label: 'Dictation',
        hotkey: '⌘ left',
        spoken: 'Hey Luke, the meeting at ten doesn’t work. Can we move it to eleven?',
        output: 'Hey Luke, the meeting at ten doesn’t work. Can we move it to eleven?',
        statusLabel: 'Dictation · local',
        appLabel: 'Mail · Reply',
        caption: 'Speak → text appears, 1:1 inside your app',
      },
      {
        key: 'prompt',
        label: 'Prompt',
        hotkey: '⌘ right',
        profile: 'Prompt Architect',
        spoken:
          'Generate me a hyperrealistic editorial photo. A top model sits sideways in a ’66 Mustang, vintage look, golden hour, very dramatic.',
        output:
          '## Role\nEditorial photographer, focus on vintage Americana and automotive.\n## Task\nHyperrealistic editorial photo: top model sideways in a 1966 Ford Mustang Convertible.\n## Style\nVintage Americana, dramatic golden-hour rim light, 35mm film grain, shallow depth of field.\n## Format\n4:5 portrait, photorealistic, --style raw',
        outputType: 'structured',
        statusLabel: 'Prompt · Prompt Architect',
        appLabel: 'ChatGPT · new chat',
        caption: 'Profile active → voice note becomes a prompt with role, task, style',
      },
      {
        key: 'agent',
        label: 'Agent',
        hotkey: '⌥ right',
        spoken: 'hey agent, turn this into bullet points',
        selected:
          'We agreed Luke takes the investor pitch on Wednesday — he has the final slide deck. Sarah delivers the revised slides including the new revenue projection by Tuesday evening. I’m handling catering, logistics and the reception briefing. If Luke is out, I step in.',
        output:
          '• Luke — investor pitch Wednesday, has final slides\n• Sarah — slides by Tuesday evening, incl. revenue projection\n• Marcel — catering, logistics, reception briefing\n• Backup — Marcel takes the pitch if Luke is out',
        statusLabel: 'Agent · working',
        appLabel: 'Notes · Meeting',
        caption: 'Select + speak → Agent turns prose into structure',
      },
    ],
    dsgvoBadgeAlt: 'GDPR compliant',
  },
};

const MODE_META = [
  { icon: Mic, accent: '#CCFF00', typeMs: 22, holdMs: 1600 },
  { icon: Wand2, accent: '#6FA0FF', typeMs: 11, holdMs: 3200 },
  { icon: Bot, accent: '#CCFF00', typeMs: 14, holdMs: 3200 },
];

export default function VoiceItHero({ lang = 'de', downloadUrl = 'https://github.com/newwaysai/voiceit-releases/releases/latest', downloadFilename = 'Voiceit.dmg' }) {
  const compRef = useRef(null);
  const [modeIdx, setModeIdx] = useState(0);
  const [phase, setPhase] = useState('listen');
  const [typed, setTyped] = useState('');
  const [pinned, setPinned] = useState(false);
  const phaseTimer = useRef(null);

  const c = COPY[lang] || COPY.de;
  const MODES = c.modes.map((m, i) => ({ ...m, ...MODE_META[i] }));
  const mode = MODES[modeIdx];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-elem', {
        y: 30,
        opacity: 0,
        duration: 0.85,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.1,
      });
    }, compRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    clearTimeout(phaseTimer.current);
    setTyped('');
    setPhase('listen');

    phaseTimer.current = setTimeout(() => {
      setPhase('think');
      phaseTimer.current = setTimeout(() => {
        setPhase('type');
      }, mode.key === 'diktat' ? 180 : 750);
    }, 1300);

    return () => clearTimeout(phaseTimer.current);
  }, [modeIdx, lang]);

  useEffect(() => {
    if (phase !== 'type') return;
    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(mode.output.slice(0, i));
      if (i >= mode.output.length) {
        clearInterval(interval);
        if (!pinned) {
          phaseTimer.current = setTimeout(() => {
            setModeIdx((idx) => (idx + 1) % MODES.length);
          }, mode.holdMs);
        }
      }
    }, mode.typeMs);
    return () => clearInterval(interval);
  }, [phase, modeIdx, pinned]);

  const handleTab = (i) => {
    setPinned(true);
    setModeIdx(i);
    setTimeout(() => setPinned(false), 9000);
  };

  return (
    <section
      ref={compRef}
      aria-label="Voiceit Hero"
      className="relative w-full pt-10 pb-14 md:pt-16 md:pb-20 px-4 sm:px-6 md:px-8"
      style={{ background: 'var(--fv-bg)' }}
    >
      <div className="flair-hero-card relative w-full max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-14 md:py-18 overflow-hidden">
        <div className="flair-hero-glow-blue" style={{ top: '-220px', right: '-120px' }} />
        <div className="flair-hero-glow-violet" style={{ bottom: '-180px', left: '-80px' }} />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-12 items-center">
          <div className="flex flex-col">
            <div className="hero-elem flair-pill-light w-fit mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" style={{ boxShadow: '0 0 8px rgba(204,255,0,0.6)' }} />
              <span className="font-data uppercase tracking-[0.2em] text-[11px]">
                {c.pill}
              </span>
            </div>

            <h1
              className="hero-elem font-heading font-extrabold tracking-tight leading-[1.02]"
              style={{
                fontSize: 'clamp(2.3rem, 5.8vw, 4.3rem)',
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
            </h1>

            <p
              className="hero-elem font-sans text-[16px] md:text-[17px] mt-5 leading-relaxed max-w-[52ch]"
              style={{ color: 'rgba(255,255,255,0.72)' }}
            >
              {c.body}
            </p>

            <div
              className="hero-elem mt-5 inline-flex items-center gap-2 w-fit"
              style={{
                background: 'rgba(204,255,0,0.08)',
                border: '1px solid rgba(204,255,0,0.28)',
                padding: '0.55rem 0.95rem',
                borderRadius: '9999px',
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#CCFF00', boxShadow: '0 0 8px rgba(204,255,0,0.7)' }}
              />
              <span className="font-data uppercase tracking-[0.14em] text-[11px]" style={{ color: '#CCFF00' }}>
                {c.badge}
              </span>
            </div>

            <div className="hero-elem flex flex-wrap items-center gap-3 mt-7">
              <a
                href={downloadUrl}
                download={downloadFilename}
                target="_blank"
                rel="noopener noreferrer"
                className="flair-btn-primary"
              >
                <Download size={16} />
                {c.cta}
                <ArrowRight size={16} />
              </a>
              <a href="#modi" className="flair-btn-secondary-dark">
                {c.secondary}
              </a>
            </div>

            <div
              className="hero-elem flex flex-wrap items-center gap-x-5 gap-y-2 mt-6"
              style={{ color: 'rgba(255,255,255,0.45)' }}
            >
              <span className="flex items-center gap-1.5 font-data text-[11px] uppercase tracking-[0.16em]">
                <Lock size={12} /> {c.chip1}
              </span>
              <span className="font-data text-[11px] uppercase tracking-[0.16em]">
                {c.chip2}
              </span>
              <span className="font-data text-[11px] uppercase tracking-[0.16em]">
                {c.chip3}
              </span>
              <Image
                src="/badges/dsgvo.png"
                alt={c.dsgvoBadgeAlt}
                width={48}
                height={48}
                className="h-12 w-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          <div className="hero-elem relative max-w-[600px] w-full mx-auto lg:ml-auto">
            <VoiceItModesDemo />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes voiceit-caret {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        @keyframes voiceit-bar {
          0% { transform: scaleY(0.35); }
          100% { transform: scaleY(1); }
        }
        @keyframes voiceit-dot {
          0%, 80%, 100% { opacity: 0.3; transform: scale(1); }
          40% { opacity: 1; transform: scale(1.4); }
        }
      `}</style>
    </section>
  );
}
