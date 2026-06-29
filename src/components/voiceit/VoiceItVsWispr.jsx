'use client';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Check, X } from 'lucide-react';

const COPY = {
  de: {
    pill: 'Vergleich',
    headingA: 'Wispr diktiert.',
    headingB: 'Voiceit arbeitet.',
    sub: 'Gleicher Preis. Mehr Funktion. Audio bleibt auf deinem Mac. Punkt.',
    featureHeader: 'Feature',
    yes: 'Ja',
    no: 'Nein',
    asOf: 'Stand 05/2026 · öffentliche Angaben & eigene Tests',
    ctaPill: 'Direkt-Vergleich',
    ctaHeadingA: 'Bei Wispr zahlst du fürs Diktat.',
    ctaHeadingB: 'Hier ist Diktat gratis.',
    ctaBody:
      'Und für den gleichen Preis wie deine Wispr-Subscription bekommst du obendrauf den Prompt- und Agent-Modus. Audio bleibt auf deinem Mac.',
    ctaButton: 'Voiceit holen',
    rows: [
      { label: 'Audio bleibt auf deinem Mac', voiceit: 'Lokales Voice-Modell', wispr: 'Streamt in die Cloud' },
      { label: 'Transkriptions-Speed', voiceit: 'Bis 5× schneller als Cloud-Tools', wispr: 'Netzwerk-Round-Trip pro Satz' },
      { label: 'Kostenloser Modus', voiceit: 'Diktat lokal, gratis', wispr: 'Subscription ab Tag 1' },
      { label: 'Latenz beim Diktat', voiceit: 'Sofort, offline-fähig', wispr: 'Netzwerk-Round-Trip' },
      { label: 'Pro-Preis pro Monat', voiceit: '15 €', wispr: 'ab 15 $ + Cloud-Kosten' },
      { label: 'DSGVO-Position', voiceit: 'EU-Backend (Supabase, Stripe)', wispr: 'US-Cloud Default' },
      { label: 'Funktioniert ohne Internet', voiceit: 'Diktat-Modus, 7 Tage Grace', wispr: 'Cloud-STT zwingend' },
    ],
  },
  en: {
    pill: 'Comparison',
    headingA: 'Wispr dictates.',
    headingB: 'Voiceit works.',
    sub: 'Same price. More function. Audio stays on your Mac. Period.',
    featureHeader: 'Feature',
    yes: 'Yes',
    no: 'No',
    asOf: 'As of 05/2026 · public info & in-house testing',
    ctaPill: 'Head to head',
    ctaHeadingA: 'With Wispr you pay for dictation.',
    ctaHeadingB: 'Here, dictation is free.',
    ctaBody:
      'And for the same price as your Wispr subscription you get Prompt and Agent mode on top. Audio stays on your Mac.',
    ctaButton: 'Get Voiceit',
    rows: [
      { label: 'Audio stays on your Mac', voiceit: 'Local voice model', wispr: 'Streams to the cloud' },
      { label: 'Transcription speed', voiceit: 'Up to 5× faster than cloud tools', wispr: 'Network round-trip per sentence' },
      { label: 'Free tier', voiceit: 'Dictation local, free', wispr: 'Subscription from day 1' },
      { label: 'Dictation latency', voiceit: 'Instant, works offline', wispr: 'Network round-trip' },
      { label: 'Pro price per month', voiceit: '€15', wispr: '$15+ and cloud costs' },
      { label: 'GDPR posture', voiceit: 'EU backend (Supabase, Stripe)', wispr: 'US cloud by default' },
      { label: 'Works without internet', voiceit: 'Dictation mode, 7-day grace', wispr: 'Cloud STT required' },
    ],
  },
};

export default function VoiceItVsWispr({ lang = 'de', downloadUrl = 'https://github.com/newwaysai/voiceit-releases/releases/latest', downloadFilename = 'Voiceit.dmg' }) {
  const compRef = useRef(null);
  const c = COPY[lang] || COPY.de;

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
            <span className="font-data uppercase tracking-[0.2em] text-[10px]">{c.pill}</span>
          </div>
          <h2
            className="cmp-elem flair-heading"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            {c.headingA}{' '}
            <span style={{ color: 'var(--fv-blue)' }}>{c.headingB}</span>
          </h2>
          <p
            className="cmp-elem font-sans text-base md:text-lg mt-5 max-w-[56ch] mx-auto"
            style={{ color: 'var(--fv-text-muted)' }}
          >
            {c.sub}
          </p>
        </div>

        <div className="cmp-elem flair-card overflow-hidden">
          <div
            className="grid grid-cols-[1.4fr_1fr_1fr] md:grid-cols-[1.6fr_1fr_1fr]"
            style={{
              background: 'var(--fv-blue-soft)',
              borderBottom: '1px solid var(--fv-divider)',
            }}
          >
            <div className="px-4 md:px-6 py-4 md:py-5">
              <span className="font-data uppercase tracking-[0.18em] text-[10px] md:text-[11px]" style={{ color: 'var(--fv-text-muted)' }}>
                {c.featureHeader}
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

          {c.rows.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-[1.4fr_1fr_1fr] md:grid-cols-[1.6fr_1fr_1fr] items-stretch"
              style={{
                borderBottom: i < c.rows.length - 1 ? '1px solid var(--fv-divider)' : 'none',
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
                    {c.yes}
                  </span>
                </div>
                <span className="font-sans text-[12px] md:text-[13px]" style={{ color: 'var(--fv-text-muted)' }}>
                  {r.voiceit}
                </span>
              </div>
              <div
                className="px-3 md:px-6 py-4 md:py-5 flex flex-col gap-1"
                style={{ borderLeft: '1px solid var(--fv-divider)' }}
              >
                <div className="flex items-center gap-2">
                  <X size={16} style={{ color: '#DC2626' }} strokeWidth={2.5} />
                  <span className="font-data uppercase tracking-[0.12em] text-[10px] md:text-[11px] font-bold" style={{ color: '#DC2626' }}>
                    {c.no}
                  </span>
                </div>
                <span className="font-sans text-[12px] md:text-[13px]" style={{ color: 'var(--fv-text-muted)' }}>
                  {r.wispr}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p
          className="cmp-elem mt-6 text-center font-data text-[11px] uppercase tracking-[0.18em]"
          style={{ color: 'var(--fv-text-light)' }}
        >
          {c.asOf}
        </p>

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
              {c.ctaPill}
            </span>
            <h3
              className="font-heading font-extrabold leading-[1.05] mb-3"
              style={{
                fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)',
                color: '#FFFFFF',
              }}
            >
              {c.ctaHeadingA}{' '}
              <span style={{ color: '#CCFF00', textShadow: '0 0 30px rgba(204,255,0,0.4)' }}>
                {c.ctaHeadingB}
              </span>
            </h3>
            <p
              className="font-sans text-sm md:text-base max-w-[54ch] mx-auto"
              style={{ color: 'rgba(255,255,255,0.7)' }}
            >
              {c.ctaBody}
            </p>
            <a
              href={downloadUrl}
              download={downloadFilename}
              className="flair-btn-primary mt-6"
              style={{ display: 'inline-flex' }}
            >
              {c.ctaButton}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
