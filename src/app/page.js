import Footer from '@/components/Footer';
import VoiceItHero from '@/components/voiceit/VoiceItHero';
import VoiceItPain from '@/components/voiceit/VoiceItPain';
import VoiceItModes from '@/components/voiceit/VoiceItModes';
import VoiceItPromptCompare from '@/components/voiceit/VoiceItPromptCompare';
import VoiceItVsWispr from '@/components/voiceit/VoiceItVsWispr';
import VoiceItBonusStack from '@/components/voiceit/VoiceItBonusStack';
import VoiceItPricing from '@/components/voiceit/VoiceItPricing';
import VoiceItFAQ from '@/components/voiceit/VoiceItFAQ';
import VoiceItFinalCTA from '@/components/voiceit/VoiceItFinalCTA';
import VoiceItDownloadStrip from '@/components/voiceit/VoiceItDownloadStrip';
import VoiceItProof from '@/components/voiceit/VoiceItProof';
import VoiceItProofOfUse from '@/components/voiceit/VoiceItProofOfUse';
import VoiceItFeatures from '@/components/voiceit/VoiceItFeatures';

export const metadata = {
  title: 'VoiceIt — Text erscheint. Fertig.',
  description:
    'Voice-Agent für Mac. Mehr als Diktat: Prompt-Modus poliert, Agent-Modus arbeitet. Audio bleibt auf deinem Mac. Diktat ist gratis. Agent günstiger als Wispr.',
  openGraph: {
    title: 'VoiceIt — Text erscheint. Fertig.',
    description:
      'Voice-Agent für Mac. Audio bleibt lokal. Diktat gratis. Agent-Modus günstiger als Wispr Flow.',
    url: 'https://voiceitai.app',
    type: 'website',
  },
  alternates: {
    canonical: 'https://voiceitai.app',
  },
};

export default function VoiceItPage() {
  return (
    <div className="bg-background min-h-screen text-primary overflow-x-hidden selection:bg-accent/20 selection:text-primary">
      <main role="main">
        <VoiceItHero />

        <VoiceItPain />

        <VoiceItDownloadStrip
          headline="Schluss mit Tippen."
          sub="Diktat-Modus ist gratis. Zwei Minuten Installation. Eine Taste lernen."
          cta="Download for Mac"
        />

        <VoiceItModes />

        <VoiceItPromptCompare />

        <VoiceItFeatures />

        <VoiceItProof />

        <VoiceItProofOfUse />

        <VoiceItDownloadStrip
          variant="lime"
          headline="Diktat gratis. Agent gibts obendrauf."
          sub="Audio bleibt auf deinem Mac. Wispr-Preis bringt dir den KI-Agent dazu."
          cta="Download for Mac"
        />

        <VoiceItVsWispr />

        <VoiceItBonusStack />

        <VoiceItPricing />

        <VoiceItDownloadStrip
          headline="VoiceIt. Fertig."
          sub="macOS 13+ · Apple Silicon · keine Kreditkarte fürs Diktat."
          cta="Download for Mac"
        />

        <VoiceItFAQ />

        <VoiceItFinalCTA />
      </main>
      <Footer />
    </div>
  );
}
