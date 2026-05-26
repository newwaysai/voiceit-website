'use client';
import { Download } from 'lucide-react';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';

const LINKS_DE = [
  { href: '#modi', label: 'Modes' },
  { href: '#features', label: 'Features' },
  { href: '#preise', label: 'Preise' },
  { href: '#faq', label: 'FAQ' },
];

const LINKS_EN = [
  { href: '#modi', label: 'Modes' },
  { href: '#features', label: 'Features' },
  { href: '#preise', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
];

export default function VoiceItNavbar({ lang = 'de', downloadUrl = 'https://github.com/newwaysai/voiceit-releases/releases/latest', downloadFilename = 'Voiceit.dmg' }) {
  const links = lang === 'en' ? LINKS_EN : LINKS_DE;

  return (
    <nav
      aria-label="Voiceit Navigation"
      className="sticky top-0 z-40 w-full backdrop-blur-xl"
      style={{
        background: 'var(--fv-nav-bg)',
        borderBottom: '1px solid var(--fv-border)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-3 sm:px-6 md:px-8 h-14 md:h-16 flex items-center gap-2 sm:gap-3 md:gap-4 overflow-x-auto no-scrollbar">
        <a
          href="#top"
          className="text-lg sm:text-xl md:text-2xl font-heading font-bold tracking-tight shrink-0"
          style={{ color: 'var(--fv-text)' }}
        >
          Voiceit<span style={{ color: 'var(--fv-blue)' }}>.</span>
        </a>

        <div className="flex items-center gap-0.5 sm:gap-1 shrink-0">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-[12px] sm:text-sm px-2 sm:px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
              style={{ color: 'var(--fv-text-muted)' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--fv-text)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--fv-text-muted)')}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2 md:gap-3 shrink-0">
          <div
            className="inline-flex items-center rounded-full text-[10px] sm:text-xs font-heading font-semibold overflow-hidden"
            style={{ border: '1px solid var(--fv-border)' }}
            role="group"
            aria-label={lang === 'en' ? 'Switch language' : 'Sprache wechseln'}
          >
            <Link
              href="/"
              prefetch={false}
              aria-current={lang === 'de' ? 'page' : undefined}
              className="px-1.5 sm:px-2.5 py-1 transition-colors"
              style={{
                background: lang === 'de' ? 'var(--fv-text)' : 'transparent',
                color: lang === 'de' ? 'var(--fv-bg)' : 'var(--fv-text-muted)',
              }}
            >
              DE
            </Link>
            <Link
              href="/en"
              prefetch={false}
              aria-current={lang === 'en' ? 'page' : undefined}
              className="px-1.5 sm:px-2.5 py-1 transition-colors"
              style={{
                background: lang === 'en' ? 'var(--fv-text)' : 'transparent',
                color: lang === 'en' ? 'var(--fv-bg)' : 'var(--fv-text-muted)',
              }}
            >
              EN
            </Link>
          </div>

          <ThemeToggle />

          <a
            href={downloadUrl}
            download={downloadFilename}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download for Mac"
            className="inline-flex items-center gap-1.5 font-heading font-semibold text-[11px] sm:text-xs md:text-sm px-2.5 sm:px-3 md:px-4 py-1.5 sm:py-2 rounded-full transition-all whitespace-nowrap"
            style={{
              background: 'var(--fv-blue)',
              color: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(37,99,235,0.3)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--fv-blue-dark)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--fv-blue)')}
          >
            <Download size={14} />
            <span className="hidden md:inline">Download for Mac</span>
            <span className="md:hidden">Download</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
