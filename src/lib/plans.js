// Single source of truth for VoiceIt plan data.
// Import this in VoiceItPricing.jsx and anywhere else that lists plan features.
// When app limits change, update this file only.

export const PLANS = {
  de: [
    {
      name: 'Free',
      price: '0',
      suffix: '€ / immer',
      tagline: 'Diktat gratis & lokal. KI-Features (EU, kein Training).',
      features: [
        'Diktat-Modus lokal (4.000 Wörter/Woche)',
        'Diktat 100% lokal, Audio bleibt auf deinem Mac',
        '20 KI-Aufrufe / Monat (EU-Server, Frankfurt)',
        'Bis zu 2 Min Aufnahme',
      ],
      cta: 'Download for Mac',
    },
    {
      name: 'Pro',
      price: '15',
      suffix: '€ / 4 Wochen',
      tagline: 'Für tägliche Voice-Nutzer: Mails, Slack, Notizen, Prompts.',
      features: [
        '~16 KI-Calls/Tag (500/Monat) — ein Pitch, ein Meeting-Recap, ein paar Mails',
        'Alles aus Free',
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
      tagline: 'Für alle, die jedes Meeting diktieren und jeden Workflow prompten.',
      features: [
        '~100 KI-Calls/Tag (3.000/Monat) — jedes Meeting transkribiert + transformiert',
        'Alles aus Pro',
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
      tagline: 'Dictation free & local. AI features (EU, no training).',
      features: [
        'Dictation mode local (4,000 words/week)',
        'Dictation 100% local, audio stays on your Mac',
        '20 AI calls / month (EU servers, Frankfurt)',
        'Up to 2 min recording',
      ],
      cta: 'Download for Mac',
    },
    {
      name: 'Pro',
      price: '15',
      suffix: '€ / 4 weeks',
      tagline: 'For daily voice users — emails, Slack, notes, prompts.',
      features: [
        '~16 AI calls/day (500/month) — a pitch, a meeting recap, a few emails',
        'Everything in Free',
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
      tagline: 'For people who dictate every meeting and prompt every workflow.',
      features: [
        '~100 AI calls/day (3,000/month) — every meeting transcribed + transformed',
        'Everything in Pro',
        'Up to 20 min recording',
        'EU-hosted AI (GDPR-compliant)',
        'Early access to new models',
      ],
      cta: 'Download for Mac',
    },
  ],
};
