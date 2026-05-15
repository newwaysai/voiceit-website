'use client';
import { Download } from 'lucide-react';
import ThemeToggle from '@/components/ThemeToggle';

const LINKS = [
  { href: '#modi', label: 'Modi' },
  { href: '#preise', label: 'Preise' },
  { href: '#faq', label: 'FAQ' },
];

export default function VoiceItNavbar() {
  return (
    <nav
      aria-label="Voiceit Navigation"
      className="sticky top-0 z-40 w-full backdrop-blur-xl"
      style={{
        background: 'color-mix(in oklab, var(--color-background) 75%, transparent)',
        borderBottom: '1px solid var(--fv-border)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 h-14 md:h-16 flex items-center justify-between gap-4">
        <a href="#top" className="text-xl md:text-2xl font-heading font-bold tracking-tight" style={{ color: 'var(--fv-text)' }}>
          Voiceit<span style={{ color: 'var(--fv-blue)' }}>.</span>
        </a>

        <div className="hidden sm:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-sm px-3 py-1.5 rounded-full transition-colors"
              style={{ color: 'var(--fv-text-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fv-text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fv-text-muted)')}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="https://github.com/newwaysai/voiceit-releases/releases/latest"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 font-heading font-semibold text-xs md:text-sm px-3.5 md:px-4 py-2 rounded-full transition-all"
            style={{
              background: 'var(--fv-blue)',
              color: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(37,99,235,0.3)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--fv-blue-dark)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--fv-blue)')}
          >
            <Download size={14} />
            Download for Mac
          </a>
        </div>
      </div>
    </nav>
  );
}
