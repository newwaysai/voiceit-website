'use client';
import { useRef, useState } from 'react';
import { Play } from 'lucide-react';

/**
 * Hero explainer video. Shows a poster + big play button. Browsers forbid
 * autoplay WITH sound, so the video starts muted-less only after a user click —
 * that click counts as the gesture that unlocks audio, so the voiceover plays.
 * After play, native controls appear (pause, scrub, fullscreen).
 */
export default function VoiceItHeroVideo({
  src = '/voiceit/explainer.mp4',
  poster = '/voiceit/explainer-poster.jpg',
  label = 'Erklärvideo ansehen',
}) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.volume = 1;
    v.play();
    setPlaying(true);
  };

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl"
      style={{
        aspectRatio: '16 / 9',
        background: 'var(--fv-card-bg)',
        border: '1px solid var(--fv-border)',
        boxShadow:
          '0 30px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(37,99,235,0.12)',
      }}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        controls={playing}
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-cover"
        onEnded={() => setPlaying(false)}
      />

      {/* Play overlay — hidden once playing */}
      {!playing && (
        <button
          type="button"
          onClick={start}
          aria-label={label}
          className="group absolute inset-0 flex flex-col items-center justify-center gap-4 transition-colors"
          style={{ background: 'rgba(5,5,10,0.18)' }}
        >
          <span
            className="flex items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-105"
            style={{
              width: 92,
              height: 92,
              background: 'linear-gradient(135deg, var(--fv-blue), #1D4ED8)',
              boxShadow: '0 0 50px rgba(37,99,235,0.55)',
            }}
          >
            <Play size={40} color="#fff" fill="#fff" style={{ marginLeft: 5 }} />
          </span>
          <span
            className="font-sans font-semibold"
            style={{
              fontSize: 15,
              color: '#fff',
              background: 'rgba(0,0,0,0.45)',
              padding: '7px 16px',
              borderRadius: 999,
              backdropFilter: 'blur(6px)',
            }}
          >
            {label} · mit Ton
          </span>
        </button>
      )}
    </div>
  );
}
