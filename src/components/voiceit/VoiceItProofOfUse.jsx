'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';
import { Activity, Type, Mic, Timer } from 'lucide-react';

const COPY = {
  de: {
    pill: 'Beweis · Live-Daten',
    headingA: 'Ich nutze es selbst.',
    headingB: 'Jeden Tag.',
    sub: 'Echte Stats aus meiner eigenen Voiceit-Installation. Direkt aus der lokalen History-DB. Heute, 14.05.2026.',
    source: 'Quelle · ~/Library/Application Support/com.newways.voiceit/history.db · Marcel Porcher · 14.05.2026',
    stats: [
      { value: '10.842', unit: 'Wörter', label: 'in 24 Stunden diktiert.', sub: 'Heute. Auf meinem eigenen Mac.' },
      { value: '271', unit: 'Sessions', label: 'in einem Tag.', sub: 'Mail, Slack, Code, Notes.' },
      { value: '63', unit: 'Minuten', label: 'gesprochen statt getippt.', sub: 'Bei 172 Wörter pro Minute.' },
      { value: '3h 28min', unit: '', label: 'Tippzeit gespart.', sub: 'Bei 40 Wörter pro Minute Tipp-Tempo.', highlight: true },
    ],
  },
  en: {
    pill: 'Proof · live data',
    headingA: 'I use it myself.',
    headingB: 'Every day.',
    sub: 'Real stats from my own Voiceit install. Straight out of the local history DB. Today, 2026-05-14.',
    source: 'Source · ~/Library/Application Support/com.newways.voiceit/history.db · Marcel Porcher · 2026-05-14',
    stats: [
      { value: '10,842', unit: 'words', label: 'dictated in 24 hours.', sub: 'Today. On my own Mac.' },
      { value: '271', unit: 'sessions', label: 'in a single day.', sub: 'Mail, Slack, code, notes.' },
      { value: '63', unit: 'minutes', label: 'spoken instead of typed.', sub: 'At 172 words per minute.' },
      { value: '3h 28min', unit: '', label: 'of typing saved.', sub: 'At a 40 wpm typing pace.', highlight: true },
    ],
  },
};

const ICONS = [Type, Mic, Activity, Timer];

export default function VoiceItProofOfUse({ lang = 'de' }) {
  const compRef = useRef(null);
  const c = COPY[lang] || COPY.de;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pou-elem', {
        scrollTrigger: { trigger: compRef.current, start: 'top 92%' },
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: 'power3.out',
        immediateRender: false,
      });
    }, compRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={compRef}
      aria-label="Proof of Use"
      className="relative w-full py-14 md:py-20 px-4 sm:px-6 md:px-8"
      style={{ background: 'var(--fv-bg)' }}
    >
      <div className="flair-orb-blue" style={{ top: '15%', left: '-150px', width: 500, height: 500 }} />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <div className="text-center mb-12 md:mb-14">
          <div className="pou-elem flair-pill-blue w-fit mx-auto mb-5">
            <span className="font-data uppercase tracking-[0.2em] text-[10px]">{c.pill}</span>
          </div>
          <h2
            className="pou-elem flair-heading"
            style={{ fontSize: 'clamp(1.9rem, 4.8vw, 3rem)' }}
          >
            {c.headingA}{' '}
            <span style={{ color: 'var(--fv-blue)' }}>{c.headingB}</span>
          </h2>
          <p
            className="pou-elem font-sans text-base md:text-lg mt-5 max-w-[60ch] mx-auto"
            style={{ color: 'var(--fv-text-muted)' }}
          >
            {c.sub}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {c.stats.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                className="pou-elem flair-card p-5 md:p-6 flex flex-col"
                style={
                  s.highlight
                    ? {
                        background: 'rgba(204,255,0,0.07)',
                        borderColor: 'rgba(204,255,0,0.4)',
                      }
                    : undefined
                }
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: s.highlight ? 'rgba(204,255,0,0.18)' : 'var(--fv-blue-soft)',
                    border: s.highlight
                      ? '1px solid rgba(204,255,0,0.45)'
                      : '1px solid rgba(37,99,235,0.2)',
                  }}
                >
                  <Icon
                    size={16}
                    style={{ color: s.highlight ? '#7AA000' : 'var(--fv-blue)' }}
                    strokeWidth={2.2}
                  />
                </div>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span
                    className="font-heading font-extrabold tracking-tight leading-none"
                    style={{
                      fontSize: 'clamp(1.5rem, 2.6vw, 2rem)',
                      color: 'var(--fv-text)',
                    }}
                  >
                    {s.value}
                  </span>
                  {s.unit && (
                    <span
                      className="font-data uppercase tracking-[0.14em] text-[10px] md:text-[11px]"
                      style={{ color: 'var(--fv-text-muted)' }}
                    >
                      {s.unit}
                    </span>
                  )}
                </div>
                <div
                  className="font-heading font-bold text-[13px] md:text-[14px] mb-1.5 leading-tight"
                  style={{ color: 'var(--fv-text-strong)' }}
                >
                  {s.label}
                </div>
                <p
                  className="font-sans text-[12px] leading-relaxed"
                  style={{ color: 'var(--fv-text-muted)' }}
                >
                  {s.sub}
                </p>
              </div>
            );
          })}
        </div>

        <p
          className="pou-elem mt-8 text-center font-data text-[10px] uppercase tracking-[0.18em]"
          style={{ color: 'var(--fv-text-light)' }}
        >
          {c.source}
        </p>
      </div>
    </section>
  );
}
