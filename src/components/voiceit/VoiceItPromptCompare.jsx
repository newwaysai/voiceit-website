'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { ArrowRight, FileText, Wand2 } from 'lucide-react';

export default function VoiceItPromptCompare() {
  const compRef = useRef(null);

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
      aria-label="Prompt-Modus Vergleich"
      className="relative w-full py-14 md:py-20 px-4 sm:px-6 md:px-8"
      style={{ background: 'var(--fv-bg)' }}
    >
      <div className="flair-orb-blue" style={{ top: '20%', right: '-150px', width: 480, height: 480 }} />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="pc-elem flair-pill-blue w-fit mx-auto mb-5">
            <span className="font-data uppercase tracking-[0.2em] text-[10px]">Warum strukturiert</span>
          </div>
          <h2
            className="pc-elem flair-heading"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            Roh-Prompt rein,{' '}
            <span style={{ color: 'var(--fv-blue)' }}>
              strukturierter Prompt raus.
            </span>
          </h2>
          <p
            className="pc-elem font-sans text-base md:text-lg mt-5 max-w-[64ch] mx-auto"
            style={{ color: 'var(--fv-text-muted)' }}
          >
            Du sprichst wie ein Mensch. VoiceIts Prompt-Modus formt es in das Format, das KIs nachweislich besser verstehen — mit Rolle, Aufgabe, Kontext, Format.
          </p>
        </div>

        {/* Comparison grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-5 lg:gap-7 items-center">
          {/* Plain prompt */}
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
                  Wenn du tippst
                </div>
                <div className="font-heading font-bold text-[15px]" style={{ color: 'var(--fv-text)' }}>
                  Roh-Prompt
                </div>
              </div>
            </div>

            <div
              className="rounded-lg p-4 mb-4 font-mono text-[12.5px] leading-[1.55]"
              style={{
                background: 'rgba(0,0,0,0.03)',
                border: '1px solid rgba(0,0,0,0.06)',
                color: 'var(--fv-text-strong)',
              }}
            >
              „mach mir bitte ein bild von einer frau die auf einer wiese sitzt im sonnenuntergang vintage stil"
            </div>

            <ul className="space-y-1.5 mt-auto">
              <li className="font-sans text-[12.5px]" style={{ color: 'var(--fv-text-muted)' }}>
                · Kein Rollen-Setup
              </li>
              <li className="font-sans text-[12.5px]" style={{ color: 'var(--fv-text-muted)' }}>
                · Kein Stil-Anchor
              </li>
              <li className="font-sans text-[12.5px]" style={{ color: 'var(--fv-text-muted)' }}>
                · Kein Format
              </li>
              <li className="font-sans text-[12.5px]" style={{ color: 'var(--fv-text-muted)' }}>
                · KI rät, was du meinst
              </li>
            </ul>
          </div>

          {/* Arrow */}
          <div className="pc-elem hidden lg:flex items-center justify-center">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{
                background: 'var(--fv-blue)',
                boxShadow: '0 4px 14px rgba(28,100,255,0.35)',
              }}
            >
              <ArrowRight size={22} style={{ color: '#FFFFFF' }} strokeWidth={2.5} />
            </div>
          </div>

          {/* Mobile arrow */}
          <div className="pc-elem lg:hidden flex items-center justify-center py-2">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{
                background: 'var(--fv-blue)',
                boxShadow: '0 4px 12px rgba(28,100,255,0.3)',
                transform: 'rotate(90deg)',
              }}
            >
              <ArrowRight size={18} style={{ color: '#FFFFFF' }} strokeWidth={2.5} />
            </div>
          </div>

          {/* Structured prompt */}
          <div
            className="pc-elem flair-card p-6 md:p-7 flex flex-col h-full"
            style={{
              borderColor: 'rgba(28,100,255,0.35)',
              boxShadow: '0 4px 14px rgba(28,100,255,0.1), 0 24px 60px rgba(15,23,42,0.05)',
            }}
          >
            <div className="flex items-center gap-2.5 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background: 'var(--fv-blue-soft)',
                  border: '1px solid rgba(28,100,255,0.3)',
                }}
              >
                <Wand2 size={16} style={{ color: 'var(--fv-blue)' }} strokeWidth={2.2} />
              </div>
              <div>
                <div className="font-data uppercase tracking-[0.16em] text-[10px]" style={{ color: 'var(--fv-blue)' }}>
                  Mit VoiceIt Prompt-Modus
                </div>
                <div className="font-heading font-bold text-[15px]" style={{ color: 'var(--fv-text)' }}>
                  Strukturierter Prompt
                </div>
              </div>
            </div>

            <div
              className="rounded-lg p-4 mb-4 font-mono text-[11.5px] leading-[1.6]"
              style={{
                background: 'rgba(28,100,255,0.04)',
                border: '1px solid rgba(28,100,255,0.2)',
                color: 'var(--fv-text)',
              }}
            >
              <div className="font-data uppercase tracking-[0.16em] text-[9.5px] mb-1" style={{ color: 'var(--fv-blue)' }}>
                Rolle
              </div>
              <div className="mb-2">Editorial-Fotograf, Fine-Art-Portrait.</div>

              <div className="font-data uppercase tracking-[0.16em] text-[9.5px] mb-1" style={{ color: 'var(--fv-blue)' }}>
                Aufgabe
              </div>
              <div className="mb-2">Frau sitzt auf Wiese, Sonnenuntergang.</div>

              <div className="font-data uppercase tracking-[0.16em] text-[9.5px] mb-1" style={{ color: 'var(--fv-blue)' }}>
                Stil
              </div>
              <div className="mb-2">Vintage, 70er-Jahre Film, warmes Rim-Light, 35mm Grain.</div>

              <div className="font-data uppercase tracking-[0.16em] text-[9.5px] mb-1" style={{ color: 'var(--fv-blue)' }}>
                Format
              </div>
              <div>4:5 Hochformat, photorealistic, --style raw</div>
            </div>

            <ul className="space-y-1.5 mt-auto">
              <li className="font-sans text-[12.5px]" style={{ color: 'var(--fv-text-strong)' }}>
                ✓ Rolle setzt Ton & Expertise
              </li>
              <li className="font-sans text-[12.5px]" style={{ color: 'var(--fv-text-strong)' }}>
                ✓ Klare Aufgabe, kein Raten
              </li>
              <li className="font-sans text-[12.5px]" style={{ color: 'var(--fv-text-strong)' }}>
                ✓ Stil-Anchor → konsistentes Bild
              </li>
              <li className="font-sans text-[12.5px]" style={{ color: 'var(--fv-text-strong)' }}>
                ✓ Format = direkt verwendbar
              </li>
            </ul>
          </div>
        </div>

        {/* Anthropic quote */}
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
                Anthropic · Prompt Engineering Best Practices
              </div>
              <p
                className="font-sans text-[14px] md:text-[15px] leading-[1.65] italic"
                style={{ color: 'rgba(255,255,255,0.88)' }}
              >
                „Think of Claude as a brilliant but new employee who lacks context on your norms and workflows. The more precisely you explain what you want, the better the result."
              </p>
              <p
                className="font-sans text-[13px] md:text-[14px] leading-[1.65] mt-3"
                style={{ color: 'rgba(255,255,255,0.65)' }}
              >
                Anthropic empfiehlt: <span style={{ color: '#FFFFFF', fontWeight: 600 }}>Rolle setzen · Klare Aufgabe · Format-Anchor</span> — also exakt das, was VoiceIts Prompt-Modus aus deiner Sprachnachricht macht. Du sprichst frei. Strukturierung passiert in der App.
              </p>
              <a
                href="https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/be-clear-and-direct"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-4 font-data uppercase tracking-[0.16em] text-[10px] transition-opacity hover:opacity-70"
                style={{ color: 'rgba(255,255,255,0.55)' }}
              >
                Quelle docs.anthropic.com <ArrowRight size={11} />
              </a>
            </div>
          </div>
        </div>

        <p
          className="pc-elem mt-8 text-center font-sans text-[14px] md:text-[15px] max-w-[60ch] mx-auto"
          style={{ color: 'var(--fv-text-muted)' }}
        >
          Kein Tab-Wechsel zu ChatGPT um den Prompt zu polieren. Kein „warte, ich strukturiere das eben". Halt ⌘ rechts, sprich frei, fertig.
        </p>
      </div>
    </section>
  );
}
