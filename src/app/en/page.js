import Footer from '@/components/Footer';
import VoiceItNavbar from '@/components/voiceit/VoiceItNavbar';
import VoiceItHero from '@/components/voiceit/VoiceItHero';
import VoiceItFeatureStrip from '@/components/voiceit/VoiceItFeatureStrip';
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
  title: 'Voiceit — Text appears. Done.',
  description:
    'Voice agent for Mac. More than dictation: Prompt mode polishes, Agent mode works. Audio stays on your Mac. Dictation is free. Agent cheaper than Wispr.',
  openGraph: {
    title: 'Voiceit — Text appears. Done.',
    description:
      'Voice agent for Mac. Audio stays local. Dictation free. Agent mode cheaper than Wispr Flow.',
    url: 'https://voiceitai.app/en',
    type: 'website',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://voiceitai.app/en',
    languages: {
      'de-DE': 'https://voiceitai.app/',
      'en-US': 'https://voiceitai.app/en',
    },
  },
};

export default function VoiceItPageEN() {
  return (
    <div id="top" className="bg-background min-h-screen text-primary overflow-x-hidden selection:bg-accent/20 selection:text-primary">
      <VoiceItNavbar lang="en" />
      <main role="main">
        <VoiceItHero lang="en" />

        <VoiceItFeatureStrip />

        <VoiceItPain lang="en" />

        <VoiceItDownloadStrip
          headline="Stop typing."
          sub="Dictation mode is free. Two-minute install. Learn one key."
          cta="Download for Mac"
        />

        <VoiceItModes lang="en" />

        <VoiceItPromptCompare lang="en" />

        <VoiceItFeatures lang="en" />

        <VoiceItProof lang="en" />

        <VoiceItProofOfUse lang="en" />

        <VoiceItDownloadStrip
          variant="lime"
          headline="Dictation free. Agent on top."
          sub="Audio stays on your Mac. Wispr-price gets you the AI agent included."
          cta="Download for Mac"
        />

        <VoiceItVsWispr lang="en" />

        <VoiceItBonusStack lang="en" />

        <VoiceItPricing lang="en" />

        <VoiceItDownloadStrip
          headline="Voiceit. Done."
          sub="macOS 13+ · Apple Silicon · no credit card for dictation."
          cta="Download for Mac"
        />

        <VoiceItFAQ lang="en" />

        <VoiceItFinalCTA lang="en" />
      </main>
      <Footer lang="en" />
    </div>
  );
}
