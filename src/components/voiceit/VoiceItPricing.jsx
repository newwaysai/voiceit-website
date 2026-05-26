'use client';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Check, Download } from 'lucide-react';
import { PLANS } from '@/lib/plans';

const COPY = {
  de: {
    pill: 'Preise',
    headingA: 'Diktat ist',
    headingB: 'gratis.',
    headingC: 'Agent ist günstiger als Wispr.',
    sub: 'Keine Demo-Frist. Keine Kreditkarte fürs Laden. Sprich los, entscheide später ob du Agent willst.',
    roi: {
      hourLabel: 'Deine Stunde',
      hourValue: '50 €',
      hourSub: 'Annahme · selbständig',
      saveLabel: 'Du sparst',
      saveValue: '20 h',
      saveSub: 'pro Monat · 1 h pro Tag',
      worthLabel: 'Wert',
      worthValue: '1.000 €',
      worthSub: 'pro Monat · zurück',
      payLabel: 'Du zahlst',
      payValue: '15 €',
      paySub: '= 67× ROI',
      footer: 'Konservative Rechnung · skaliert mit deinem Stundensatz',
    },
    popularBadge: 'Beliebteste Wahl',
    freeBadge: 'Gratis',
    footer: 'Abrechnung alle 4 Wochen · Stripe Checkout · jederzeit kündbar',
    plans: PLANS.de,
    dsgvoBadgeAlt: '100% DSGVO konform',
    dsgvoText: 'DSGVO-konform · Audio bleibt on-device',
  },
  en: {
    pill: 'Pricing',
    headingA: 'Dictation is',
    headingB: 'free.',
    headingC: 'Agent is cheaper than Wispr.',
    sub: 'No demo limit. No credit card to download. Start speaking, decide later if you want Agent.',
    roi: {
      hourLabel: 'Your hour',
      hourValue: '€50',
      hourSub: 'Assumption · self-employed',
      saveLabel: 'You save',
      saveValue: '20 h',
      saveSub: 'per month · 1 h a day',
      worthLabel: 'Worth',
      worthValue: '€1,000',
      worthSub: 'per month · returned',
      payLabel: 'You pay',
      payValue: '€15',
      paySub: '= 67× ROI',
      footer: 'Conservative math · scales with your hourly rate',
    },
    popularBadge: 'Most popular',
    freeBadge: 'Free',
    footer: 'Billed every 4 weeks · Stripe checkout · cancel any time',
    plans: PLANS.en,
    dsgvoBadgeAlt: 'GDPR compliant',
    dsgvoText: 'GDPR-compliant · Audio stays on-device',
  },
};

export default function VoiceItPricing({ lang = 'de', downloadUrl = 'https://github.com/newwaysai/voiceit-releases/releases/latest', downloadFilename = 'Voiceit.dmg' }) {
  const compRef = useRef(null);
  const c = COPY[lang] || COPY.de;

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
      aria-label={lang === 'en' ? 'Pricing' : 'Preise'}
      className="relative w-full py-14 md:py-20 px-4 sm:px-6 md:px-8"
      style={{ background: 'var(--fv-bg)' }}
    >
      <div className="flair-orb-blue" style={{ top: '30%', right: '-150px', width: 500, height: 500 }} />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-14">
          <div className="price-elem flair-pill-blue w-fit mx-auto mb-5">
            <span className="font-data uppercase tracking-[0.2em] text-[10px]">{c.pill}</span>
          </div>
          <h2
            className="price-elem flair-heading"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            {c.headingA}{' '}
            <span style={{ color: 'var(--fv-blue)' }}>{c.headingB}</span>{' '}
            {c.headingC}
          </h2>
          <p
            className="price-elem font-sans text-base md:text-lg mt-5 max-w-[58ch] mx-auto"
            style={{ color: 'var(--fv-text-muted)' }}
          >
            {c.sub}
          </p>
        </div>

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
                {c.roi.hourLabel}
              </div>
              <div className="font-heading font-extrabold text-[26px] md:text-[32px] leading-none" style={{ color: 'var(--fv-text)' }}>
                {c.roi.hourValue}
              </div>
              <div className="font-sans text-[11px] mt-1.5" style={{ color: 'var(--fv-text-muted)' }}>
                {c.roi.hourSub}
              </div>
            </div>

            <div className="px-4 py-5 md:py-6 text-center" style={{ borderColor: 'var(--fv-divider)' }}>
              <div className="font-data uppercase tracking-[0.16em] text-[9.5px] mb-1.5" style={{ color: 'var(--fv-text-muted)' }}>
                {c.roi.saveLabel}
              </div>
              <div className="font-heading font-extrabold text-[26px] md:text-[32px] leading-none" style={{ color: 'var(--fv-text)' }}>
                {c.roi.saveValue}
              </div>
              <div className="font-sans text-[11px] mt-1.5" style={{ color: 'var(--fv-text-muted)' }}>
                {c.roi.saveSub}
              </div>
            </div>

            <div className="px-4 py-5 md:py-6 text-center" style={{ borderColor: 'var(--fv-divider)' }}>
              <div className="font-data uppercase tracking-[0.16em] text-[9.5px] mb-1.5" style={{ color: 'var(--fv-text-muted)' }}>
                {c.roi.worthLabel}
              </div>
              <div className="font-heading font-extrabold text-[26px] md:text-[32px] leading-none" style={{ color: 'var(--fv-blue)' }}>
                {c.roi.worthValue}
              </div>
              <div className="font-sans text-[11px] mt-1.5" style={{ color: 'var(--fv-text-muted)' }}>
                {c.roi.worthSub}
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
                  {c.roi.payLabel}
                </div>
                <div className="font-heading font-extrabold text-[26px] md:text-[32px] leading-none" style={{ color: 'var(--fv-text)' }}>
                  {c.roi.payValue}
                </div>
                <div className="font-sans text-[11px] mt-1.5 font-semibold" style={{ color: 'var(--fv-text-strong)' }}>
                  {c.roi.paySub}
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
            {c.roi.footer}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {c.plans.map((p, i) => {
            const accent = i === 1;
            const free = i === 0;
            return (
              <div
                key={i}
                className={`price-elem flair-card p-7 md:p-8 flex flex-col relative ${accent ? 'lg:scale-[1.03]' : ''}`}
                style={
                  accent
                    ? {
                        borderColor: 'rgba(37,99,235,0.4)',
                        boxShadow: '0 4px 14px rgba(37,99,235,0.18), 0 24px 60px rgba(15,23,42,0.08)',
                      }
                    : undefined
                }
              >
                {accent && (
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
                    {c.popularBadge}
                  </span>
                )}

                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-heading font-extrabold text-2xl" style={{ color: 'var(--fv-text)' }}>
                    {p.name}
                  </h3>
                  {free && (
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
                      {c.freeBadge}
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
                        style={{ color: accent ? 'var(--fv-blue)' : '#16A34A', flexShrink: 0, marginTop: 2 }}
                        strokeWidth={2.5}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href={downloadUrl}
                  download={downloadFilename}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={accent ? 'flair-btn-primary' : 'flair-btn-secondary-light'}
                  style={{ justifyContent: 'center' }}
                >
                  <Download size={16} />
                  {p.cta}
                </a>
              </div>
            );
          })}
        </div>

        <p
          className="price-elem mt-10 text-center font-data text-[11px] uppercase tracking-[0.18em]"
          style={{ color: 'var(--fv-text-light)' }}
        >
          {c.footer}
        </p>

        <div className="price-elem flex items-center justify-center gap-3 mt-8">
          <Image
            src="/badges/dsgvo.png"
            alt={c.dsgvoBadgeAlt}
            width={56}
            height={56}
            className="h-14 w-14 object-contain"
          />
          <span className="font-sans text-xs" style={{ color: 'var(--fv-text-muted)' }}>
            {c.dsgvoText}
          </span>
        </div>
      </div>
    </section>
  );
}
