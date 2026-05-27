import Footer from '@/components/Footer';
import FloatingDSGVOBadge from '@/components/FloatingDSGVOBadge';
import { getDownloadInfo } from '@/lib/version';
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
  title: 'Voiceit — Text erscheint. Fertig.',
  description:
    'Voice-Agent für Mac. Mehr als Diktat: Prompt-Modus poliert, Agent-Modus arbeitet. Audio bleibt auf deinem Mac. Diktat ist gratis. Agent günstiger als Wispr.',
  openGraph: {
    title: 'Voiceit — Text erscheint. Fertig.',
    description:
      'Voice-Agent für Mac. Audio bleibt lokal. Diktat gratis. Agent-Modus günstiger als Wispr Flow.',
    url: 'https://voiceitai.app',
    type: 'website',
  },
  alternates: {
    canonical: 'https://voiceitai.app',
    languages: {
      'de-DE': 'https://voiceitai.app/',
      'en-US': 'https://voiceitai.app/en',
    },
  },
};

export default async function VoiceItPage() {
  const { url: downloadUrl, filename: downloadFilename } = await getDownloadInfo();
  return (
    <div id="top" className="bg-background min-h-screen text-primary overflow-x-clip selection:bg-accent/20 selection:text-primary">
      <VoiceItNavbar lang="de" downloadUrl={downloadUrl} downloadFilename={downloadFilename} />
      <main role="main">
        <VoiceItHero lang="de" downloadUrl={downloadUrl} downloadFilename={downloadFilename} />

        <VoiceItFeatureStrip />

        <VoiceItPain lang="de" />

        <VoiceItDownloadStrip
          headline="Schluss mit Tippen."
          sub="Diktat-Modus ist gratis. Zwei Minuten Installation. Eine Taste lernen."
          cta="Download for Mac"
          downloadUrl={downloadUrl}
          downloadFilename={downloadFilename}
        />

        <VoiceItModes lang="de" />

        <VoiceItPromptCompare lang="de" />

        <VoiceItFeatures lang="de" />

        <VoiceItProof lang="de" />

        <VoiceItProofOfUse lang="de" />

        <VoiceItDownloadStrip
          variant="lime"
          headline="Free für Diktat. €15 wenn KI ins Spiel kommt."
          sub="20 KI-Calls gratis zum Testen. Dann €15/4 Wochen = 500 Calls = €0,03 pro Call. Audio bleibt lokal."
          cta="Download for Mac"
          downloadUrl={downloadUrl}
          downloadFilename={downloadFilename}
        />

        <VoiceItBonusStack lang="de" />

        <VoiceItVsWispr lang="de" downloadUrl={downloadUrl} downloadFilename={downloadFilename} />

        <VoiceItPricing lang="de" downloadUrl={downloadUrl} downloadFilename={downloadFilename} />

        <VoiceItDownloadStrip
          headline="Voiceit. Fertig."
          sub="macOS 13+ · Apple Silicon · keine Kreditkarte fürs Diktat."
          cta="Download for Mac"
          downloadUrl={downloadUrl}
          downloadFilename={downloadFilename}
        />

        <VoiceItFAQ lang="de" />

        <VoiceItFinalCTA lang="de" downloadUrl={downloadUrl} downloadFilename={downloadFilename} />
      </main>
      <Footer lang="de" downloadUrl={downloadUrl} downloadFilename={downloadFilename} />
      <FloatingDSGVOBadge lang="de" />
    </div>
  );
}
