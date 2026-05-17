'use client';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { Clock, CloudOff, Zap } from 'lucide-react';

const COPY = {
  de: {
    pill: 'Das Problem',
    headingA: 'Tastatur frisst',
    headingB: 'deine Zeit.',
    headingC: 'Cloud-Diktate fressen',
    headingD: 'deine Daten.',
    sub: 'Du sprichst 3× schneller als du tippst. Und trotzdem klopfst du jeden Tag Stunden auf eine Tastatur ein. Warum?',
    points: [
      {
        stat: '30+ Std',
        title: 'pro Monat fürs Tippen.',
        body: 'E-Mails, Slack, Notizen, Code-Kommentare. Stundenlang Buchstaben einklopfen, statt zu denken oder zu bauen.',
      },
      {
        stat: 'Cloud-Audio',
        title: 'bei jedem Wort.',
        body: 'Wispr Flow und Co. streamen jede Sprachnotiz an fremde Server. Vertrauliche Gespräche. Kunden­namen. Alles raus.',
      },
      {
        stat: 'Latenz',
        title: 'die dich rausreißt.',
        body: 'Cloud-Diktate hängen. Lokale Lösungen sind klobig. Bis das Tool reagiert, hast du den Satz schon getippt.',
      },
    ],
  },
  en: {
    pill: 'The problem',
    headingA: 'Your keyboard eats',
    headingB: 'your time.',
    headingC: 'Cloud dictation eats',
    headingD: 'your data.',
    sub: 'You speak 3× faster than you type. Yet you still pound keys for hours every day. Why?',
    points: [
      {
        stat: '30+ hrs',
        title: 'a month just typing.',
        body: 'Email, Slack, notes, code comments. Hours of hammering keys instead of thinking or building.',
      },
      {
        stat: 'Cloud audio',
        title: 'on every word.',
        body: 'Wispr Flow and friends stream every voice note to someone elses servers. Private conversations. Client names. All gone.',
      },
      {
        stat: 'Latency',
        title: 'that breaks your flow.',
        body: 'Cloud dictation lags. Local tools are clunky. By the time it reacts, you typed the sentence yourself.',
      },
    ],
  },
};

const ICONS = [Clock, CloudOff, Zap];

export default function VoiceItPain({ lang = 'de' }) {
  const compRef = useRef(null);
  const c = COPY[lang] || COPY.de;

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.pain-elem', {
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
      ref={compRef}
      aria-label="Pain Points"
      className="relative w-full py-14 md:py-20 px-4 sm:px-6 md:px-8"
      style={{ background: 'var(--fv-bg)' }}
    >
      <div className="flair-orb-blue" style={{ top: '20%', right: '-150px', width: 500, height: 500 }} />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="text-center mb-14 md:mb-20">
          <div className="pain-elem flair-pill-blue w-fit mx-auto mb-5">
            <span className="font-data uppercase tracking-[0.2em] text-[10px]">{c.pill}</span>
          </div>
          <h2
            className="pain-elem flair-heading"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)' }}
          >
            {c.headingA}{' '}
            <span style={{ color: 'var(--fv-blue)' }}>{c.headingB}</span>{' '}
            {c.headingC}{' '}
            <span style={{ color: 'var(--fv-blue)' }}>{c.headingD}</span>
          </h2>
          <p
            className="pain-elem font-sans text-base md:text-lg mt-5 max-w-[60ch] mx-auto"
            style={{ color: 'var(--fv-text-muted)' }}
          >
            {c.sub}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {c.points.map((p, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={i}
                className="pain-elem flair-card p-7 md:p-8 flex flex-col"
                style={{
                  borderTop: '3px solid #DC2626',
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: '#FEE2E2' }}
                >
                  <Icon size={20} style={{ color: '#DC2626' }} strokeWidth={2} />
                </div>
                <div
                  className="font-heading font-extrabold text-[28px] md:text-[32px] leading-none mb-2"
                  style={{ color: 'var(--fv-text)' }}
                >
                  {p.stat}
                </div>
                <div
                  className="font-heading font-bold text-base md:text-lg mb-3"
                  style={{ color: 'var(--fv-text-strong)' }}
                >
                  {p.title}
                </div>
                <p
                  className="font-sans text-sm md:text-[15px] leading-relaxed"
                  style={{ color: 'var(--fv-text-muted)' }}
                >
                  {p.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
