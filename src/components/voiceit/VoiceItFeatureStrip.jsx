'use client';

const FEATURES = [
  'Real-time dictation',
  'Removes filler words',
  'Perfect grammar & punctuation',
  'Fastest voice-to-text on the market',
];

export default function VoiceItFeatureStrip() {
  return (
    <section
      aria-label="Voiceit feature highlights"
      className="relative w-full py-3 md:py-4 border-y"
      style={{
        background: 'rgba(255,255,255,0.02)',
        borderColor: 'rgba(255,255,255,0.06)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
        {FEATURES.map((f, i) => (
          <span
            key={f}
            className="font-data uppercase tracking-[0.18em] text-[10px] md:text-[11px] flex items-center gap-3"
            style={{ color: 'rgba(255,255,255,0.55)' }}
          >
            {i > 0 && (
              <span
                aria-hidden
                className="hidden sm:inline w-1 h-1 rounded-full"
                style={{ background: 'rgba(204,255,0,0.5)' }}
              />
            )}
            {f}
          </span>
        ))}
      </div>
    </section>
  );
}
