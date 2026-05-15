'use client';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Zap, Cpu, Lock, Layers, Wallet } from 'lucide-react';

const STATS = [
  {
    value: '3×',
    label: 'schneller als Tippen',
    sub: '150 Wörter/Min sprechen vs. 40 tippen',
    icon: Zap,
  },
  {
    value: '0 ms',
    label: 'Netzwerk-Latenz',
    sub: 'Lokales Voice-Modell läuft on-device, kein Cloud-Stream',
    icon: Cpu,
  },
  {
    value: '0 KB',
    label: 'Audio in die Cloud',
    sub: 'Wispr streamt jedes Wort. VoiceIt kein einziges',
    icon: Lock,
  },
  {
    value: '3 Modi',
    label: 'statt nur Diktat',
    sub: 'Diktat + Prompt + Agent in einer App',
    icon: Layers,
  },
  {
    value: '0 €',
    label: 'fürs Diktat',
    sub: 'Wispr kostet ab Tag 1. Bei VoiceIt für immer gratis',
    icon: Wallet,
  },
];

export default function VoiceItProof() {
  const compRef = useRef(null);

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
            <span className="font-data uppercase tracking-[0.2em] text-[10px]">Die Zahlen</span>
          </div>
          <h2
            className="proof-elem flair-heading"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            Schneller.{' '}
            <span style={{ color: 'var(--fv-blue)' }}>Privater.</span>{' '}
            Günstiger.
          </h2>
          <p
            className="proof-elem font-sans text-base md:text-lg mt-5 max-w-[56ch] mx-auto"
            style={{ color: 'var(--fv-text-muted)' }}
          >
            Was du bekommst — in Zahlen statt in Marketing-Sprech.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-5">
          {STATS.map((s, i) => {
            const Icon = s.icon;
            const highlight = s.value === '0 €' || s.value === '3×';
            return (
              <div
                key={i}
                className="proof-elem flair-card p-5 md:p-6 flex flex-col"
                style={
                  highlight
                    ? { borderColor: 'rgba(28,100,255,0.3)' }
                    : undefined
                }
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{
                    background: 'var(--fv-blue-soft)',
                    border: '1px solid rgba(28,100,255,0.2)',
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
          Quellen · Sprech-vs-Tipp-Speed Standard-Werte · Apple Silicon Benchmarks · eigene Messungen
        </p>
      </div>
    </section>
  );
}
