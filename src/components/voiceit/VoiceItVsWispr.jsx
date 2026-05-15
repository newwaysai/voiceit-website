'use client';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Check, X } from 'lucide-react';

const ROWS = [
  {
    label: 'Audio bleibt auf deinem Mac',
    voiceit: { ok: true, note: 'Lokales Voice-Modell' },
    wispr: { ok: false, note: 'Streamt in die Cloud' },
  },
  {
    label: 'Kostenloser Modus',
    voiceit: { ok: true, note: 'Diktat unbegrenzt gratis' },
    wispr: { ok: false, note: 'Subscription ab Tag 1' },
  },
  {
    label: 'Latenz beim Diktat',
    voiceit: { ok: true, note: 'Sofort, offline-fähig' },
    wispr: { ok: false, note: 'Netzwerk-Round-Trip' },
  },
  {
    label: 'Pro-Preis pro Monat',
    voiceit: { ok: true, note: '14,95 €' },
    wispr: { ok: false, note: 'ab 15 $ + Cloud-Kosten' },
  },
  {
    label: 'DSGVO-Position',
    voiceit: { ok: true, note: 'EU-Backend (Supabase, Stripe)' },
    wispr: { ok: false, note: 'US-Cloud Default' },
  },
  {
    label: 'Funktioniert ohne Internet',
    voiceit: { ok: true, note: 'Diktat-Modus, 7 Tage Grace' },
    wispr: { ok: false, note: 'Cloud-STT zwingend' },
  },
];

export default function VoiceItVsWispr() {
  const compRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.cmp-elem', {
        scrollTrigger: { trigger: compRef.current, start: 'top 95%' },
        y: 24,
        opacity: 0,
        duration: 0.7,
        stagger: 0.07,
        ease: 'power3.out',
        immediateRender: false,
      });
    }, compRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={compRef}
      aria-label="Voiceit vs Wispr Flow"
      className="relative w-full py-14 md:py-20 px-4 sm:px-6 md:px-8"
      style={{ background: 'var(--fv-bg)' }}
    >
      <div className="flair-orb-blue-strong" style={{ top: '10%', left: '-150px', width: 500, height: 500 }} />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <div className="text-center mb-14">
          <div className="cmp-elem flair-pill-blue w-fit mx-auto mb-5">
            <span className="font-data uppercase tracking-[0.2em] text-[10px]">Vergleich</span>
          </div>
          <h2
            className="cmp-elem flair-heading"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            Wispr diktiert.{' '}
            <span style={{ color: 'var(--fv-blue)' }}>Voiceit arbeitet.</span>
          </h2>
          <p
            className="cmp-elem font-sans text-base md:text-lg mt-5 max-w-[56ch] mx-auto"
            style={{ color: 'var(--fv-text-muted)' }}
          >
            Gleicher Preis. Mehr Funktion. Audio bleibt auf deinem Mac. Punkt.
          </p>
        </div>

        <div className="cmp-elem flair-card overflow-hidden">
          {/* Header row */}
          <div
            className="grid grid-cols-[1.4fr_1fr_1fr] md:grid-cols-[1.6fr_1fr_1fr]"
            style={{
              background: 'var(--fv-blue-soft)',
              borderBottom: '1px solid var(--fv-divider)',
            }}
          >
            <div className="px-4 md:px-6 py-4 md:py-5">
              <span className="font-data uppercase tracking-[0.18em] text-[10px] md:text-[11px]" style={{ color: 'var(--fv-text-muted)' }}>
                Feature
              </span>
            </div>
            <div className="px-3 md:px-6 py-4 md:py-5 flex items-center gap-2" style={{ borderLeft: '1px solid var(--fv-divider)' }}>
              <img src="/voiceit/logo.svg" alt="" className="w-5 h-5 md:w-6 md:h-6 rounded" />
              <span className="font-heading font-extrabold text-sm md:text-base" style={{ color: 'var(--fv-blue)' }}>
                Voiceit
              </span>
            </div>
            <div className="px-3 md:px-6 py-4 md:py-5 flex items-center" style={{ borderLeft: '1px solid var(--fv-divider)' }}>
              <span className="font-heading font-bold text-sm md:text-base" style={{ color: 'var(--fv-text-muted)' }}>
                Wispr Flow
              </span>
            </div>
          </div>

          {/* Rows */}
          {ROWS.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-[1.4fr_1fr_1fr] md:grid-cols-[1.6fr_1fr_1fr] items-stretch"
              style={{
                borderBottom: i < ROWS.length - 1 ? '1px solid var(--fv-divider)' : 'none',
              }}
            >
              <div className="px-4 md:px-6 py-4 md:py-5">
                <div className="font-heading font-bold text-[13px] md:text-[15px]" style={{ color: 'var(--fv-text)' }}>
                  {r.label}
                </div>
              </div>
              <div
                className="px-3 md:px-6 py-4 md:py-5 flex flex-col gap-1"
                style={{
                  borderLeft: '1px solid var(--fv-divider)',
                  background: 'rgba(37,99,235,0.04)',
                }}
              >
                <div className="flex items-center gap-2">
                  <Check size={16} style={{ color: '#16A34A' }} strokeWidth={2.5} />
                  <span className="font-data uppercase tracking-[0.12em] text-[10px] md:text-[11px] font-bold" style={{ color: '#16A34A' }}>
                    Ja
                  </span>
                </div>
                <span className="font-sans text-[12px] md:text-[13px]" style={{ color: 'var(--fv-text-muted)' }}>
                  {r.voiceit.note}
                </span>
              </div>
              <div
                className="px-3 md:px-6 py-4 md:py-5 flex flex-col gap-1"
                style={{ borderLeft: '1px solid var(--fv-divider)' }}
              >
                <div className="flex items-center gap-2">
                  <X size={16} style={{ color: '#DC2626' }} strokeWidth={2.5} />
                  <span className="font-data uppercase tracking-[0.12em] text-[10px] md:text-[11px] font-bold" style={{ color: '#DC2626' }}>
                    Nein
                  </span>
                </div>
                <span className="font-sans text-[12px] md:text-[13px]" style={{ color: 'var(--fv-text-muted)' }}>
                  {r.wispr.note}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p
          className="cmp-elem mt-6 text-center font-data text-[11px] uppercase tracking-[0.18em]"
          style={{ color: 'var(--fv-text-light)' }}
        >
          Stand 05/2026 · öffentliche Angaben & eigene Tests
        </p>

        {/* Cancel Wispr push */}
        <div
          className="cmp-elem mt-10 max-w-[760px] mx-auto rounded-2xl overflow-hidden relative px-6 md:px-10 py-7 md:py-9 text-center"
          style={{
            background: '#0B0B0B',
            border: '1px solid rgba(204,255,0,0.35)',
            boxShadow: '0 24px 60px rgba(0,0,0,0.18), 0 0 0 1px rgba(204,255,0,0.12) inset',
          }}
        >
          <div
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              top: '-50%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%',
              height: '180%',
              background: 'radial-gradient(circle, rgba(204,255,0,0.14) 0%, transparent 60%)',
              filter: 'blur(60px)',
            }}
          />
          <div className="relative z-10">
            <span
              style={{
                display: 'inline-block',
                background: '#CCFF00',
                color: '#0B0B0B',
                boxShadow: '0 0 16px rgba(204,255,0,0.45)',
                padding: '0.25rem 0.625rem',
                borderRadius: '9999px',
                fontFamily: 'var(--font-data)',
                fontSize: '10px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.14em',
                marginBottom: '0.75rem',
              }}
            >
              Direkt-Vergleich
            </span>
            <h3
              className="font-heading font-extrabold leading-[1.05] mb-3"
              style={{
                fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                color: '#FFFFFF',
              }}
            >
              Bei Wispr zahlst du fürs Diktat.{' '}
              <span style={{ color: '#CCFF00', textShadow: '0 0 30px rgba(204,255,0,0.4)' }}>
                Hier ist Diktat gratis.
              </span>
            </h3>
            <p
              className="font-sans text-sm md:text-base max-w-[54ch] mx-auto"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              Und für den gleichen Preis wie deine Wispr-Subscription bekommst du obendrauf den Prompt- und Agent-Modus. Audio bleibt auf deinem Mac.
            </p>
            <a
              href="https://github.com/newwaysai/voiceit-releases/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className="flair-btn-primary mt-6"
              style={{ display: 'inline-flex' }}
            >
              Voiceit holen
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
