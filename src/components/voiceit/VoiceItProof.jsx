'use client';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Zap, Cpu, Lock, Layers, Wallet } from 'lucide-react';

const COPY = {
  de: {
    pill: 'Die Zahlen',
    headingA: 'Schneller.',
    headingB: 'Privater.',
    headingC: 'Günstiger.',
    sub: 'Was du bekommst — in Zahlen statt in Marketing-Sprech.',
    sourceNote: 'Quellen · Sprech-vs-Tipp-Speed Standard-Werte · Apple Silicon Benchmarks · eigene Messungen',
    stats: [
      { value: '3×', label: 'schneller als Tippen', sub: '150 Wörter/Min sprechen vs. 40 tippen' },
      { value: '0 ms', label: 'Netzwerk-Latenz', sub: 'Lokales Voice-Modell läuft on-device, kein Cloud-Stream' },
      { value: '0 KB', label: 'Audio in die Cloud', sub: 'Wispr streamt jedes Wort. Voiceit kein einziges' },
      { value: '3 Modi', label: 'statt nur Diktat', sub: 'Diktat + Prompt + Agent in einer App' },
      { value: '0 €', label: 'fürs Diktat', sub: 'Wispr kostet ab Tag 1. Bei Voiceit für immer gratis' },
    ],
  },
  en: {
    pill: 'The numbers',
    headingA: 'Faster.',
    headingB: 'More private.',
    headingC: 'Cheaper.',
    sub: 'What you get — in numbers, not marketing speak.',
    sourceNote: 'Sources · standard speak-vs-type speed · Apple Silicon benchmarks · in-house measurements',
    stats: [
      { value: '3×', label: 'faster than typing', sub: '150 words/min spoken vs. 40 typed' },
      { value: '0 ms', label: 'network latency', sub: 'Local voice model runs on-device, no cloud round-trip' },
      { value: '0 KB', label: 'audio to the cloud', sub: 'Wispr streams every word. Voiceit, not one' },
      { value: '3 modes', label: 'instead of just dictation', sub: 'Dictation + Prompt + Agent in one app' },
      { value: '€0', label: 'for dictation', sub: 'Wispr charges from day 1. Voiceit, free forever' },
    ],
  },
};

const ICONS = [Zap, Cpu, Lock, Layers, Wallet];

export default function VoiceItProof({ lang = 'de' }) {
  const compRef = useRef(null);
  const c = COPY[lang] || COPY.de;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.proof-elem', {
        scrollTrigger: { trigger: compRef.current, start: 'top 95%' },
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
      aria-label="Proof — Stats"
      className="relative w-full py-14 md:py-20 px-4 sm:px-6 md:px-8"
      style={{ background: 'var(--fv-bg)' }}
    >
      <div className="flair-orb-blue" style={{ top: '20%', right: '-150px', width: 500, height: 500 }} />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-12">
          <div className="proof-elem flair-pill-blue w-fit mx-auto mb-5">
            <span className="font-data uppercase tracking-[0.2em] text-[10px]">{c.pill}</span>
          </div>
          <h2
            className="proof-elem flair-heading"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            {c.headingA}{' '}
            <span style={{ color: 'var(--fv-blue)' }}>{c.headingB}</span>{' '}
            {c.headingC}
          </h2>
          <p
            className="proof-elem font-sans text-base md:text-lg mt-5 max-w-[56ch] mx-auto"
            style={{ color: 'var(--fv-text-muted)' }}
          >
            {c.sub}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
          {c.stats.map((s, i) => {
            const Icon = ICONS[i];
            const highlight = i === 0 || i === 4;
            return (
              <div
                key={i}
                className="proof-elem flair-card p-5 md:p-6 flex flex-col"
                style={highlight ? { borderColor: 'rgba(37,99,235,0.3)' } : undefined}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: 'var(--fv-blue-soft)',
                    border: '1px solid rgba(37,99,235,0.2)',
                  }}
                >
                  <Icon size={16} style={{ color: 'var(--fv-blue)' }} strokeWidth={2.2} />
                </div>
                <div
                  className="font-heading font-extrabold tracking-tight leading-none mb-2"
                  style={{
                    fontSize: 'clamp(1.6rem, 3vw, 2.25rem)',
                    color: 'var(--fv-text)',
                  }}
                >
                  {s.value}
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
          className="proof-elem mt-8 text-center font-data text-[10px] uppercase tracking-[0.18em]"
          style={{ color: 'var(--fv-text-light)' }}
        >
          {c.sourceNote}
        </p>
      </div>
    </section>
  );
}
