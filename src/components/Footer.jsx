import Image from 'next/image';
import Link from 'next/link';
import TrustpilotBadge from '@/components/TrustpilotBadge';
import WhatsAppButton from '@/components/WhatsAppButton';

const COPY = {
  de: {
    tagline: 'Voice-Agent für Mac. Audio bleibt lokal. Diktat gratis. Ein Produkt von Newways.',
    dsgvo: 'DSGVO-konform. Audio bleibt on-device.',
    waLabel: 'WhatsApp schreiben',
    waText: 'Hi Marcel, ich habe eine Frage zu Voiceit.',
    productHeader: 'Produkt',
    aboutHeader: 'Über',
    legalHeader: 'Rechtliches',
    download: 'Download',
    pricing: 'Preise',
    modes: 'Modes',
    contact: 'Kontakt',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    terms: 'AGB',
    copyright: 'Voiceit ist ein Produkt von Newways.',
    madeFor: 'Made for Mac.',
  },
  en: {
    tagline: 'Voice agent for Mac. Audio stays local. Dictation free. A Newways product.',
    dsgvo: 'GDPR compliant. Audio stays on-device.',
    waLabel: 'WhatsApp us',
    waText: 'Hi Marcel, I have a question about Voiceit.',
    productHeader: 'Product',
    aboutHeader: 'About',
    legalHeader: 'Legal',
    download: 'Download',
    pricing: 'Pricing',
    modes: 'Modes',
    contact: 'Contact',
    imprint: 'Imprint',
    privacy: 'Privacy',
    terms: 'Terms',
    copyright: 'Voiceit is a Newways product.',
    madeFor: 'Made for Mac.',
  },
};

export default function Footer({ lang = 'de' }) {
  const c = COPY[lang] || COPY.de;
  const isEN = lang === 'en';

  return (
    <footer role="contentinfo" className="w-full bg-background text-primary pt-24 pb-8 px-6 md:px-16 border-t border-white/[0.06] rounded-t-3xl relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 mb-24">

        <div className="flex flex-col gap-6 max-w-sm">
          <div className="text-2xl font-heading font-bold tracking-tight text-primary">
            Voiceit<span className="text-accent">.</span>
          </div>
          <p className="font-sans text-sm text-primary/30 leading-relaxed font-light">
            {c.tagline}
          </p>

          <TrustpilotBadge align="left" className="mt-2" />

          <div className="flex items-center gap-4 mt-2">
            <Image
              src="/badges/dsgvo.png"
              alt={isEN ? 'GDPR compliant' : '100% DSGVO konform'}
              width={64}
              height={64}
              className="h-16 w-16 object-contain"
            />
            <div className="font-sans text-xs text-primary/40 leading-snug max-w-[180px]">
              {c.dsgvo}
            </div>
          </div>

          <div className="mt-3">
            <WhatsAppButton
              text={c.waText}
              label={c.waLabel}
              size="sm"
              variant="ghost"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-10 md:gap-16">
          <div className="flex flex-col gap-1">
            <h5 className="font-data text-xs text-primary/40 uppercase tracking-widest mb-2">{c.productHeader}</h5>
            <a href="https://github.com/newwaysai/voiceit-releases/releases/latest/download/Voiceit.dmg" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-primary/30 hover:text-primary/60 transition-colors duration-200 flex items-center min-h-[44px] py-2">{c.download}</a>
            <a href="#preise" className="font-sans text-sm text-primary/30 hover:text-primary/60 transition-colors duration-200 flex items-center min-h-[44px] py-2">{c.pricing}</a>
            <a href="#modi" className="font-sans text-sm text-primary/30 hover:text-primary/60 transition-colors duration-200 flex items-center min-h-[44px] py-2">{c.modes}</a>
          </div>

          <div className="flex flex-col gap-1">
            <h5 className="font-data text-xs text-primary/40 uppercase tracking-widest mb-2">{c.aboutHeader}</h5>
            <a href="https://www.newways.ai" target="_blank" rel="noopener noreferrer" className="font-sans text-sm text-primary/30 hover:text-primary/60 transition-colors duration-200 flex items-center min-h-[44px] py-2">newways.ai</a>
            <a href="mailto:marcel@newways.ai" className="font-sans text-sm text-primary/30 hover:text-primary/60 transition-colors duration-200 flex items-center min-h-[44px] py-2">{c.contact}</a>
          </div>

          <div className="flex flex-col gap-1">
            <h5 className="font-data text-xs text-primary/40 uppercase tracking-widest mb-2">{c.legalHeader}</h5>
            <Link href={isEN ? '/en/imprint' : '/impressum'} className="font-sans text-sm text-primary/30 hover:text-primary/60 transition-colors duration-200 flex items-center min-h-[44px] py-2">{c.imprint}</Link>
            <Link href={isEN ? '/en/privacy' : '/datenschutz'} className="font-sans text-sm text-primary/30 hover:text-primary/60 transition-colors duration-200 flex items-center min-h-[44px] py-2">{c.privacy}</Link>
            <Link href={isEN ? '/en/terms' : '/agb'} className="font-sans text-sm text-primary/30 hover:text-primary/60 transition-colors duration-200 flex items-center min-h-[44px] py-2">{c.terms}</Link>
          </div>
        </div>

      </div>

      <div className="border-t border-white/[0.06] pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-data text-primary/20 max-w-7xl mx-auto">
        <p>&copy; {new Date().getFullYear()} Newways — {c.copyright}</p>
        <p className="mt-2 md:mt-0">{c.madeFor}</p>
      </div>
    </footer>
  );
}
