'use client';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Check, Download, Sparkles } from 'lucide-react';

const PLANS = [
  {
    name: 'Free',
    price: '0',
    suffix: '€ / immer',
    tagline: 'Reines Diktat. Für immer kostenlos.',
    features: [
      'Diktat-Modus unbegrenzt',
      '100% lokal, Audio bleibt auf deinem Mac',
      '50 KI-Aufrufe / Monat (Prompt-Modus)',
      'Bis zu 2 Min Aufnahme',
    ],
    cta: 'Download for Mac',
    free: true,
    accent: false,
  },
  {
    name: 'Pro',
    price: '14,95',
    suffix: '€ / Monat · Founding-Lock',
    tagline: 'Diktat + Prompt + Agent. Founding-Preis bleibt lifetime gelockt. Public Launch: €29,95.',
    features: [
      'Alles aus Free',
      '1.000 KI-Aufrufe / Monat',
      'Agent-Modus (eigene Prompts)',
      'Bis zu 5 Min Aufnahme',
      'Priorität auf neue Features',
    ],
    cta: 'Download for Mac',
    free: false,
    accent: true,
  },
  {
    name: 'Unlimited',
    price: '30',
    suffix: '€ / Monat',
    tagline: 'Für Power-Nutzer ohne Limits.',
    features: [
      'Alles aus Pro',
      'Unbegrenzte KI-Aufrufe',
      'Bis zu 10 Min Aufnahme',
      'Frühen Zugang zu neuen Modellen',
    ],
    cta: 'Download for Mac',
    free: false,
    accent: false,
  },
];

export default function VoiceItPricing() {
  const compRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.price-elem', {
        scrollTrigger: { trigger: compRef.current, start: 'top 95%' },
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
      id="preise"
      ref={compRef}
      aria-label="Preise"
      className="relative w-full py-14 md:py-20 px-4 sm:px-6 md:px-8"
      style={{ background: 'var(--fv-bg)' }}
    >
      <div className="flair-orb-blue" style={{ top: '30%', right: '-150px', width: 500, height: 500 }} />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <div className="price-elem flair-pill-blue w-fit mx-auto mb-5">
            <span className="font-data uppercase tracking-[0.2em] text-[10px]">Preise</span>
          </div>
          <h2
            className="price-elem flair-heading"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            Diktat ist{' '}
            <span style={{ color: 'var(--fv-blue)' }}>gratis.</span>{' '}
            Agent ist günstiger als Wispr.
          </h2>
          <p
            className="price-elem font-sans text-base md:text-lg mt-5 max-w-[58ch] mx-auto"
            style={{ color: 'var(--fv-text-muted)' }}
          >
            Keine Demo-Frist. Keine Kreditkarte fürs Laden. Sprich los, entscheide später ob du Agent willst.
          </p>
        </div>

        {/* ROI-Rechnung über den Plans */}
        <div
          className="price-elem max-w-[920px] mx-auto mb-10 md:mb-14 rounded-2xl overflow-hidden relative"
          style={{
            background: 'var(--fv-card-bg)',
            border: '1px solid rgba(37,99,235,0.28)',
            boxShadow: '0 4px 14px rgba(37,99,235,0.18), 0 24px 60px rgba(0,0,0,0.35)',
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: 'var(--fv-divider)' }}>
            <div className="px-4 py-5 md:py-6 text-center" style={{ borderColor: 'var(--fv-divider)' }}>
              <div className="font-data uppercase tracking-[0.16em] text-[9.5px] mb-1.5" style={{ color: 'var(--fv-text-muted)' }}>
                Deine Stunde
              </div>
              <div className="font-heading font-extrabold text-[26px] md:text-[32px] leading-none" style={{ color: 'var(--fv-text)' }}>
                50&nbsp;€
              </div>
              <div className="font-sans text-[11px] mt-1.5" style={{ color: 'var(--fv-text-muted)' }}>
                Annahme · selbständig
              </div>
            </div>

            <div className="px-4 py-5 md:py-6 text-center" style={{ borderColor: 'var(--fv-divider)' }}>
              <div className="font-data uppercase tracking-[0.16em] text-[9.5px] mb-1.5" style={{ color: 'var(--fv-text-muted)' }}>
                Du sparst
              </div>
              <div className="font-heading font-extrabold text-[26px] md:text-[32px] leading-none" style={{ color: 'var(--fv-text)' }}>
                20&nbsp;h
              </div>
              <div className="font-sans text-[11px] mt-1.5" style={{ color: 'var(--fv-text-muted)' }}>
                pro Monat · 1 h pro Tag
              </div>
            </div>

            <div className="px-4 py-5 md:py-6 text-center" style={{ borderColor: 'var(--fv-divider)' }}>
              <div className="font-data uppercase tracking-[0.16em] text-[9.5px] mb-1.5" style={{ color: 'var(--fv-text-muted)' }}>
                Wert
              </div>
              <div className="font-heading font-extrabold text-[26px] md:text-[32px] leading-none" style={{ color: 'var(--fv-blue)' }}>
                1.000&nbsp;€
              </div>
              <div className="font-sans text-[11px] mt-1.5" style={{ color: 'var(--fv-text-muted)' }}>
                pro Monat · zurück
              </div>
            </div>

            <div className="px-4 py-5 md:py-6 text-center relative overflow-hidden" style={{ background: 'rgba(204,255,0,0.08)' }}>
              <div
                aria-hidden
                className="absolute pointer-events-none"
                style={{
                  top: '-30%',
                  right: '-30%',
                  width: '160%',
                  height: '160%',
                  background: 'radial-gradient(circle, rgba(204,255,0,0.18) 0%, transparent 60%)',
                  filter: 'blur(40px)',
                }}
              />
              <div className="relative z-10">
                <div className="font-data uppercase tracking-[0.16em] text-[9.5px] mb-1.5" style={{ color: 'var(--fv-text-muted)' }}>
                  Du zahlst
                </div>
                <div className="font-heading font-extrabold text-[26px] md:text-[32px] leading-none" style={{ color: 'var(--fv-text)' }}>
                  14,95&nbsp;€
                </div>
                <div className="font-sans text-[11px] mt-1.5 font-semibold" style={{ color: 'var(--fv-text-strong)' }}>
                  = 67× ROI
                </div>
              </div>
            </div>
          </div>
          <div
            className="px-5 py-3 text-center font-data text-[10px] uppercase tracking-[0.18em]"
            style={{
              borderTop: '1px solid var(--fv-divider)',
              background: 'rgba(255,255,255,0.03)',
              color: 'var(--fv-text-muted)',
            }}
          >
            Konservative Rechnung · skaliert mit deinem Stundensatz
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {PLANS.map((p, i) => (
            <div
              key={i}
              className={`price-elem flair-card p-7 md:p-8 flex flex-col relative ${p.accent ? 'lg:scale-[1.03]' : ''}`}
              style={
                p.accent
                  ? {
                      borderColor: 'rgba(37,99,235,0.4)',
                      boxShadow: '0 4px 14px rgba(37,99,235,0.18), 0 24px 60px rgba(15,23,42,0.08)',
                    }
                  : undefined
              }
            >
              {p.accent && (
                <span
                  className="absolute -top-3 left-1/2 -translate-x-1/2"
                  style={{
                    background: 'var(--fv-blue)',
                    color: '#FFFFFF',
                    padding: '0.3rem 0.75rem',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-data)',
                    fontSize: '10px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    boxShadow: '0 4px 12px rgba(37,99,235,0.35)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Beliebteste Wahl
                </span>
              )}

              <div className="flex items-center justify-between mb-5">
                <h3 className="font-heading font-extrabold text-2xl" style={{ color: 'var(--fv-text)' }}>
                  {p.name}
                </h3>
                {p.free && (
                  <span
                    style={{
                      background: '#CCFF00',
                      color: '#2563EB',
                      boxShadow: '0 0 16px rgba(204,255,0,0.45)',
                      border: '1px solid rgba(37,99,235,0.25)',
                      padding: '0.25rem 0.625rem',
                      borderRadius: '9999px',
                      fontFamily: 'var(--font-data)',
                      fontSize: '10px',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                    }}
                  >
                    Gratis
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-heading font-extrabold text-5xl tracking-tight" style={{ color: 'var(--fv-text)' }}>
                  {p.price}
                </span>
                <span className="font-sans text-sm" style={{ color: 'var(--fv-text-muted)' }}>
                  {p.suffix}
                </span>
              </div>
              <p className="font-sans text-[14px] mb-6" style={{ color: 'var(--fv-text-muted)' }}>
                {p.tagline}
              </p>

              <ul className="space-y-3 mb-8 flex-1">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 font-sans text-[14px]" style={{ color: 'var(--fv-text-strong)' }}>
                    <Check
                      size={16}
                      style={{ color: p.accent ? 'var(--fv-blue)' : '#16A34A', flexShrink: 0, marginTop: 2 }}
                      strokeWidth={2.5}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="https://github.com/newwaysai/voiceit-releases/releases/latest"
                target="_blank"
                rel="noopener noreferrer"
                className={p.accent ? 'flair-btn-primary' : 'flair-btn-secondary-light'}
                style={{ justifyContent: 'center' }}
              >
                <Download size={16} />
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        <p
          className="price-elem mt-10 text-center font-data text-[11px] uppercase tracking-[0.18em]"
          style={{ color: 'var(--fv-text-light)' }}
        >
          Preise inkl. 19% MwSt · Stripe Checkout · jederzeit kündbar
        </p>
      </div>
    </section>
  );
}
