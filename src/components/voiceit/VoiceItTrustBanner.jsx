import Image from 'next/image';

const COPY = {
  de: {
    alt: '100% DSGVO konform',
    chips: [
      'Diktat 100% lokal',
      'KI-Features in EU (Deutschland)',
      'Kein KI-Training mit deinen Daten',
      '100% Safe',
    ],
  },
  en: {
    alt: 'GDPR compliant',
    chips: [
      'Dictation 100% local',
      'AI features in EU (Germany)',
      'No AI training with your data',
      '100% Safe',
    ],
  },
};

export default function VoiceItTrustBanner({ lang = 'de' }) {
  const c = COPY[lang] || COPY.de;

  return (
    <div className="w-full bg-background/80 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 flex items-center justify-center md:justify-start gap-4 md:gap-6 text-xs text-primary/60">
        <Image
          src="/badges/dsgvo.png"
          alt={c.alt}
          width={32}
          height={32}
          className="h-8 w-8 object-contain flex-shrink-0"
        />
        <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 md:gap-x-6 font-sans">
          {c.chips.map((chip) => (
            <li key={chip} className="flex items-center gap-1.5">
              <span className="w-1 h-1 rounded-full bg-accent/80 flex-shrink-0" aria-hidden="true" />
              <span>{chip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
