'use client';
import { Download, ArrowRight } from 'lucide-react';

/**
 * Compact strip between sections. Variant "lime" or "blue".
 * Default: blue (light bg). Use "lime" sparingly (one max per page).
 */
export default function VoiceItDownloadStrip({ headline, sub, cta = 'Jetzt laden', variant = 'blue' }) {
  const isLime = variant === 'lime';
  return (
    <section
      aria-label="Download CTA"
      className="relative w-full px-4 sm:px-6 md:px-8 py-6 md:py-8"
      style={{ background: 'var(--fv-bg)' }}
    >
      <div
        className="relative max-w-[1100px] mx-auto rounded-2xl overflow-hidden flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 px-6 md:px-8 py-5 md:py-6"
        style={{
          background: isLime ? '#0B0B0B' : 'var(--fv-card-bg)',
          border: isLime ? '1px solid rgba(204,255,0,0.35)' : '1px solid rgba(37,99,235,0.28)',
          boxShadow: isLime
            ? '0 20px 50px rgba(0,0,0,0.25), 0 0 0 1px rgba(204,255,0,0.15) inset'
            : '0 4px 14px rgba(37,99,235,0.15), 0 24px 60px rgba(0,0,0,0.35)',
        }}
      >
        {isLime && (
          <span
            aria-hidden
            className="absolute pointer-events-none"
            style={{
              top: '-40%',
              right: '-10%',
              width: '60%',
              height: '180%',
              background: 'radial-gradient(circle, rgba(204,255,0,0.18) 0%, transparent 60%)',
              filter: 'blur(40px)',
            }}
          />
        )}

        <div className="relative z-10 flex-1">
          <div
            className="font-heading font-extrabold text-lg md:text-2xl leading-tight"
            style={{ color: isLime ? '#FFFFFF' : 'var(--fv-text)' }}
          >
            {headline}
          </div>
          {sub && (
            <div
              className="font-sans text-[13px] md:text-sm mt-1"
              style={{ color: isLime ? 'rgba(255,255,255,0.65)' : 'var(--fv-text-muted)' }}
            >
              {sub}
            </div>
          )}
        </div>

        <a
          href="https://github.com/newwaysai/voiceit-releases/releases/latest"
          target="_blank"
          rel="noopener noreferrer"
          className={isLime ? 'flair-btn-primary' : 'flair-btn-primary'}
          style={{ flexShrink: 0, whiteSpace: 'nowrap' }}
        >
          <Download size={16} />
          {cta}
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}
