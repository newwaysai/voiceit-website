import { Inter, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: {
    default: "VoiceIt — Voice Agent für Mac",
    template: "%s | VoiceIt",
  },
  description:
    "Voice-Agent für Mac. Mehr als Diktat: Prompt-Modus poliert, Agent-Modus arbeitet. Audio bleibt auf deinem Mac. Diktat ist gratis.",
  metadataBase: new URL("https://voiceitai.app"),
  openGraph: {
    title: "VoiceIt — Voice Agent für Mac",
    description: "Voice-Agent für Mac. Audio bleibt lokal. Diktat gratis. Agent-Modus günstiger als Wispr Flow.",
    url: "https://voiceitai.app",
    siteName: "VoiceIt",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${manrope.variable} ${jetbrains.variable} antialiased bg-background text-primary font-sans selection:bg-accent/30 selection:text-primary`}
      >
        <ThemeProvider>
          <svg style={{ display: "none" }}>
            <filter id="noiseFilter">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.65"
                numOctaves="3"
                stitchTiles="stitch"
              />
            </filter>
          </svg>

          <div className="noise-overlay pointer-events-none" />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
