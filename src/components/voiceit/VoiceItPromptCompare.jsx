'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { ArrowRight, FileText, Wand2 } from 'lucide-react';

const COPY = {
  de: {
    pill: 'Warum strukturiert',
    headingA: 'Roh-Prompt rein,',
    headingB: 'strukturierter Prompt raus.',
    sub: 'Du sprichst wie ein Mensch. Voiceits Prompt-Modus formt es in das Format, das KIs nachweislich besser verstehen — mit Rolle, Aufgabe, Kontext, Format.',
    plainTagline: 'Wenn du tippst',
    plainTitle: 'Roh-Prompt',
    plainText: '„mach mir bitte ein bild von einer frau die auf einer wiese sitzt im sonnenuntergang vintage stil"',
    plainBullets: ['Kein Rollen-Setup', 'Kein Stil-Anchor', 'Kein Format', 'KI rät, was du meinst'],
    structuredTagline: 'Mit Voiceit Prompt-Modus',
    structuredTitle: 'Strukturierter Prompt',
    structuredFields: [
      { label: 'Rolle', value: 'Editorial-Fotograf, Fine-Art-Portrait.' },
      { label: 'Aufgabe', value: 'Frau sitzt auf Wiese, Sonnenuntergang.' },
      { label: 'Stil', value: 'Vintage, 70er-Jahre Film, warmes Rim-Light, 35mm Grain.' },
      { label: 'Format', value: '4:5 Hochformat, photorealistic, --style raw' },
    ],
    structuredBullets: [
      'Rolle setzt Ton & Expertise',
      'Klare Aufgabe, kein Raten',
      'Stil-Anchor → konsistentes Bild',
      'Format = direkt verwendbar',
    ],
    anthropicEyebrow: 'Anthropic · Prompt Engineering Best Practices',
    anthropicQuote:
      '„Think of Claude as a brilliant but new employee who lacks context on your norms and workflows. The more precisely you explain what you want, the better the result."',
    anthropicSubA: 'Anthropic empfiehlt:',
    anthropicSubB: 'Rolle setzen · Klare Aufgabe · Format-Anchor',
    anthropicSubC:
      ' — also exakt das, was Voiceits Prompt-Modus aus deiner Sprachnachricht macht. Du sprichst frei. Strukturierung passiert in der App.',
    anthropicSource: 'Quelle docs.anthropic.com',
    closer:
      'Kein Tab-Wechsel zu ChatGPT um den Prompt zu polieren. Kein „warte, ich strukturiere das eben". Halt ⌘ rechts, sprich frei, fertig.',
  },
  en: {
    pill: 'Why structured',
    headingA: 'Raw prompt in,',
    headingB: 'structured prompt out.',
    sub: 'You speak like a human. Voiceit’s Prompt mode reshapes it into the format AIs demonstrably understand better — with role, task, context, format.',
    plainTagline: 'When you type',
    plainTitle: 'Raw prompt',
    plainText: '"please make me an image of a woman sitting in a meadow at sunset vintage style"',
    plainBullets: ['No role setup', 'No style anchor', 'No format', 'AI guesses what you mean'],
    structuredTagline: 'With Voiceit Prompt mode',
    structuredTitle: 'Structured prompt',
    structuredFields: [
      { label: 'Role', value: 'Editorial photographer, fine-art portrait.' },
      { label: 'Task', value: 'Woman sitting in a meadow, sunset.' },
      { label: 'Style', value: 'Vintage, 70s film, warm rim light, 35mm grain.' },
      { label: 'Format', value: '4:5 portrait, photorealistic, --style raw' },
    ],
    structuredBullets: [
      'Role sets tone & expertise',
      'Clear task, no guessing',
      'Style anchor → consistent image',
      'Format = ready to use',
    ],
    anthropicEyebrow: 'Anthropic · Prompt Engineering Best Practices',
    anthropicQuote:
      '"Think of Claude as a brilliant but new employee who lacks context on your norms and workflows. The more precisely you explain what you want, the better the result."',
    anthropicSubA: 'Anthropic recommends:',
    anthropicSubB: 'set a role · clear task · format anchor',
    anthropicSubC:
      ' — which is exactly what Voiceit’s Prompt mode does to your voice note. You speak freely. Structuring happens inside the app.',
    anthropicSource: 'Source docs.anthropic.com',
    closer:
      'No tab-switch to ChatGPT to polish the prompt. No "wait, let me structure that." Hold ⌘ right, speak freely, done.',
  },
};

export default function VoiceItPromptCompare({ lang = 'de' }) {
  const compRef = useRef(null);
  const c = COPY[lang] || COPY.de;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pc-elem', {
        scrollTrigger: { trigger: compRef.current, start: 'top 92%' },
        y: 30,
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
      aria-label={lang === 'en' ? 'Prompt mode comparison' : 'Prompt-Modus Vergleich'}
      className="relative w-full py-14 md:py-20 px-4 sm:px-6 md:px-8"
      style={{ background: 'var(--fv-bg)' }}
    >
      <div className="flair-orb-blue" style={{ top: '20%', right: '-150px', width: 480, height: 480 }} />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="pc-elem flair-pill-blue w-fit mx-auto mb-5">
            <span className="font-data uppercase tracking-[0.2em] text-[10px]">{c.pill}</span>
          </div>
          <h2
            className="pc-elem flair-heading"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            {c.headingA}{' '}
            <span style={{ color: 'var(--fv-blue)' }}>{c.headingB}</span>
          </h2>
          <p
            className="pc-elem font-sans text-base md:text-lg mt-5 max-w-[64ch] mx-auto"
            style={{ color: 'var(--fv-text-muted)' }}
          >
            {c.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-5 lg:gap-7 items-center">
          <div className="pc-elem flair-card p-6 md:p-7 flex flex-col h-full">
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background: '#FEE2E2',
                  border: '1px solid rgba(220,38,38,0.25)',
                }}
              >
                <FileText size={16} style={{ color: '#DC2626' }} strokeWidth={2.2} />
              </div>
              <div>
                <div className="font-data uppercase tracking-[0.16em] text-[10px]" style={{ color: '#DC2626' }}>
                  {c.plainTagline}
                </div>
                <div className="font-heading font-bold text-[15px]" style={{ color: 'var(--fv-text)' }}>
                  {c.plainTitle}
                </div>
              </div>
            </div>

            <div
              className="rounded-lg p-4 mb-4 font-mono text-[12.5px] leading-[1.55]"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--fv-divider)',
                color: 'var(--fv-text-strong)',
              }}
            >
              {c.plainText}
            </div>

            <ul className="space-y-1.5 mt-auto">
              {c.plainBullets.map((b, i) => (
                <li key={i} className="font-sans text-[12.5px]" style={{ color: 'var(--fv-text-muted)' }}>
                  · {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="pc-elem hidden lg:flex items-center justify-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{
                background: 'var(--fv-blue)',
                boxShadow: '0 4px 14px rgba(37,99,235,0.35)',
              }}
            >
              <ArrowRight size={22} style={{ color: '#FFFFFF' }} strokeWidth={2.5} />
            </div>
          </div>

          <div className="pc-elem lg:hidden flex items-center justify-center py-2">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: 'var(--fv-blue)',
                boxShadow: '0 4px 12px rgba(37,99,235,0.3)',
                transform: 'rotate(90deg)',
              }}
            >
              <ArrowRight size={18} style={{ color: '#FFFFFF' }} strokeWidth={2.5} />
            </div>
          </div>

          <div
            className="pc-elem flair-card p-6 md:p-7 flex flex-col h-full"
            style={{
              borderColor: 'rgba(37,99,235,0.35)',
              boxShadow: '0 4px 14px rgba(37,99,235,0.1), 0 24px 60px rgba(15,23,42,0.05)',
            }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background: 'var(--fv-blue-soft)',
                  border: '1px solid rgba(37,99,235,0.3)',
                }}
              >
                <Wand2 size={16} style={{ color: 'var(--fv-blue)' }} strokeWidth={2.2} />
              </div>
              <div>
                <div className="font-data uppercase tracking-[0.16em] text-[10px]" style={{ color: 'var(--fv-blue)' }}>
                  {c.structuredTagline}
                </div>
                <div className="font-heading font-bold text-[15px]" style={{ color: 'var(--fv-text)' }}>
                  {c.structuredTitle}
                </div>
              </div>
            </div>

            <div
              className="rounded-lg p-4 mb-4 font-mono text-[11.5px] leading-[1.6]"
              style={{
                background: 'rgba(37,99,235,0.04)',
                border: '1px solid rgba(37,99,235,0.2)',
                color: 'var(--fv-text)',
              }}
            >
              {c.structuredFields.map((f, i) => (
                <div key={i} className={i < c.structuredFields.length - 1 ? 'mb-2' : ''}>
                  <div
                    className="font-data uppercase tracking-[0.16em] text-[9.5px] mb-1"
                    style={{ color: 'var(--fv-blue)' }}
                  >
                    {f.label}
                  </div>
                  <div>{f.value}</div>
                </div>
              ))}
            </div>

            <ul className="space-y-1.5 mt-auto">
              {c.structuredBullets.map((b, i) => (
                <li key={i} className="font-sans text-[12.5px]" style={{ color: 'var(--fv-text-strong)' }}>
                  ✓ {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pc-elem mt-12 max-w-[880px] mx-auto p-6 md:p-8 rounded-2xl"
          style={{
            background: '#0B0B0B',
            border: '1px solid rgba(204,255,0,0.28)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.18)',
          }}
        >
          <div className="flex items-start gap-3">
            <div
              className="shrink-0 mt-1 w-7 h-7 rounded-md flex items-center justify-center"
              style={{
                background: 'rgba(204,255,0,0.12)',
                border: '1px solid rgba(204,255,0,0.35)',
              }}
            >
              <span className="font-heading font-extrabold text-[14px]" style={{ color: '#CCFF00' }}>
                A
              </span>
            </div>
            <div>
              <div
                className="font-data uppercase tracking-[0.16em] text-[10px] mb-3"
                style={{ color: '#CCFF00' }}
              >
                {c.anthropicEyebrow}
              </div>
              <p
                className="font-sans text-[14px] md:text-[15px] leading-[1.65] italic"
                style={{ color: 'rgba(255,255,255,0.88)' }}
              >
                {c.anthropicQuote}
              </p>
              <p
                className="font-sans text-[13px] md:text-[14px] leading-[1.65] mt-3"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                {c.anthropicSubA}{' '}
                <span style={{ color: '#FFFFFF', fontWeight: 600 }}>{c.anthropicSubB}</span>
                {c.anthropicSubC}
              </p>
              <a
                href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/be-clear-and-direct"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 font-data uppercase tracking-[0.16em] text-[10px] transition-opacity hover:opacity-70"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                {c.anthropicSource} <ArrowRight size={11} />
              </a>
            </div>
          </div>
        </div>

        <p
          className="pc-elem mt-8 text-center font-sans text-[14px] md:text-[15px] max-w-[60ch] mx-auto"
          style={{ color: 'var(--fv-text-muted)' }}
        >
          {c.closer}
        </p>
      </div>
    </section>
  );
}
