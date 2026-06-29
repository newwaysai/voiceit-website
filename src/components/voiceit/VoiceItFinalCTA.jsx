'use client';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Download, ArrowRight, Lock, Cpu, HardDrive } from 'lucide-react';
import TrustpilotBadge from '@/components/TrustpilotBadge';

const COPY = {
  de: {
    pill: 'Bereit?',
    headingA: 'Voiceit.',
    headingB: 'Fertig.',
    sub: 'Zwei Minuten Installation. Eine Taste lernen. Tippen ist Geschichte. Diktat kostet nichts und bleibt gratis.',
    download: 'Download for Mac',
    pricing: 'Preise ansehen',
    silicon: 'Apple Silicon',
    macos: 'macOS 13+',
    local: '100% lokal',
    footer: 'Beta · GitHub Releases · gebaut von newways.ai',
  },
  en: {
    pill: 'Ready?',
    headingA: 'Voiceit.',
    headingB: 'Done.',
    sub: 'Two-minute install. Learn one key. Typing is over. Dictation costs nothing and stays free.',
    download: 'Download for Mac',
    pricing: 'See pricing',
    silicon: 'Apple Silicon',
    macos: 'macOS 13+',
    local: '100% local',
    footer: 'Beta · GitHub Releases · built by newways.ai',
  },
};

export default function VoiceItFinalCTA({ lang = 'de', downloadUrl = 'https://github.com/newwaysai/voiceit-releases/releases/latest', downloadFilename = 'Voiceit.dmg' }) {
  const compRef = useRef(null);
  const c = COPY[lang] || COPY.de;

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.final-elem', {
        scrollTrigger: { trigger: compRef.current, start: 'top 95%' },
        y: 30,
        opacity: 0,
        duration: 0.8,
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
      aria-label="Voiceit Download"
      className="relative w-full py-14 md:py-20 px-4 sm:px-6 md:px-8"
      style={{ background: 'var(--fv-bg)' }}
    >
      <div className="flair-hero-card relative w-full max-w-[1200px] mx-auto px-6 md:px-14 lg:px-20 py-20 md:py-24">
        <div
          className="flair-hero-glow-blue"
          style={{ top: '-150px', left: '50%', transform: 'translateX(-50%)' }}
        />
        <div
          className="flair-hero-glow-violet"
          style={{ bottom: '-80px', left: '50%', transform: 'translateX(-50%)' }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <div className="final-elem flair-pill-light mx-auto w-fit mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" style={{ boxShadow: '0 0 8px rgba(204,255,0,0.6)' }} />
            <span className="font-data uppercase tracking-[0.15em]">{c.pill}</span>
          </div>

          <h2
            className="final-elem font-heading font-extrabold tracking-tight leading-[1.05]"
            style={{
              fontSize: 'clamp(2.25rem, 5.5vw, 3.75rem)',
              color: '#FFFFFF',
            }}
          >
            {c.headingA}{' '}
            <span
              style={{
                color: '#CCFF00',
                textShadow: '0 0 40px rgba(204,255,0,0.35)',
              }}
            >
              {c.headingB}
            </span>
          </h2>

          <p
            className="final-elem font-sans text-base md:text-lg mt-6 leading-relaxed max-w-[56ch] mx-auto"
            style={{ color: 'rgba(255,255,255,0.7)' }}
          >
            {c.sub}
          </p>

          <div className="final-elem flex flex-wrap justify-center items-center gap-4 mt-10">
            <a
              href={downloadUrl}
              download={downloadFilename}
              className="flair-btn-primary"
            >
              <Download size={16} />
              {c.download}
              <ArrowRight size={16} />
            </a>
            <a
              href="#preise"
              className="flair-btn-secondary-dark"
            >
              {c.pricing}
            </a>
          </div>

          <div
            className="final-elem mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto"
          >
            <div
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <Cpu size={14} style={{ color: '#6FA0FF' }} />
              <span className="font-data text-[11px] uppercase tracking-[0.16em]" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {c.silicon}
              </span>
            </div>
            <div
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <HardDrive size={14} style={{ color: '#6FA0FF' }} />
              <span className="font-data text-[11px] uppercase tracking-[0.16em]" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {c.macos}
              </span>
            </div>
            <div
              className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <Lock size={14} style={{ color: '#CCFF00' }} />
              <span className="font-data text-[11px] uppercase tracking-[0.16em]" style={{ color: 'rgba(255,255,255,0.7)' }}>
                {c.local}
              </span>
            </div>
          </div>

          <p
            className="final-elem font-data text-[10px] uppercase tracking-[0.2em] mt-8"
            style={{ color: 'rgba(255,255,255,0.35)' }}
          >
            {c.footer}
          </p>

          <div className="final-elem mt-8">
            <TrustpilotBadge />
          </div>
        </div>
      </div>
    </section>
  );
}
