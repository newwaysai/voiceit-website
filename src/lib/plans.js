// Single source of truth for VoiceIt plan data.
// Import this in VoiceItPricing.jsx and anywhere else that lists plan features.
// When app limits change, update this file only.

export const PLANS = {
  de: [
    {
      name: 'Free',
      price: '0',
      suffix: '€ / immer',
      tagline: 'Diktat gratis & lokal. KI-Features zum Testen.',
      features: [
        'Diktat-Modus unbegrenzt (lokal, kein Server)',
        '100% lokal, Audio bleibt auf deinem Mac',
        '20 KI-Aufrufe / Monat zum Testen',
        'Bis zu 2 Min Aufnahme',
      ],
      cta: 'Download for Mac',
    },
    {
      name: 'Pro',
      price: '15',
      suffix: '€ / 4 Wochen',
      tagline: 'Diktat + Prompt + Agent. Für aktive Anwender, die Voice produktiv nutzen.',
      features: [
        'Alles aus Free',
        '500 KI-Aufrufe / Monat',
        'Agent-Modus (eigene Prompts)',
        'Bis zu 8 Min Aufnahme',
        'Priorität auf neue Features',
      ],
      cta: 'Download for Mac',
    },
    {
      name: 'Premium',
      price: '30',
      suffix: '€ / 4 Wochen',
      tagline: 'Für Power-Nutzer mit maximalem KI-Volumen.',
      features: [
        'Alles aus Pro',
        '3.000 KI-Aufrufe / Monat',
        'Bis zu 20 Min Aufnahme',
        'EU-gehostete KI (DSGVO-konform)',
        'Frühen Zugang zu neuen Modellen',
      ],
      cta: 'Download for Mac',
    },
  ],
  en: [
    {
      name: 'Free',
      price: '0',
      suffix: '€ / forever',
      tagline: 'Dictation free & local. AI features to try.',
      features: [
        'Unlimited dictation mode (local, no server)',
        '100% local, audio stays on your Mac',
        '20 AI calls / month to try',
        'Up to 2 min recording',
      ],
      cta: 'Download for Mac',
    },
    {
      name: 'Pro',
      price: '15',
      suffix: '€ / 4 weeks',
      tagline: 'Dictation + Prompt + Agent. For people who actually use voice productively.',
      features: [
        'Everything in Free',
        '500 AI calls / month',
        'Agent mode (custom prompts)',
        'Up to 8 min recording',
        'Priority on new features',
      ],
      cta: 'Download for Mac',
    },
    {
      name: 'Premium',
      price: '30',
      suffix: '€ / 4 weeks',
      tagline: 'For power users who want maximum AI volume.',
      features: [
        'Everything in Pro',
        '3,000 AI calls / month',
        'Up to 20 min recording',
        'EU-hosted AI (GDPR-compliant)',
        'Early access to new models',
      ],
      cta: 'Download for Mac',
    },
  ],
};
