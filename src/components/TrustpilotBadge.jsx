// Compact inline Trustpilot trust signal — use near CTAs, forms, and cards
// Use TrustpilotInline for section-divider role, TrustpilotWidget for sidebar
// No 'use client' needed — static, works in Server Components

const Star = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#00b67a" stroke="none" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
);

export default function TrustpilotBadge({ align = 'center', className = '' }) {
    return (
        <a
            href="https://www.trustpilot.com/review/newways.ai"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity ${align === 'center' ? 'justify-center' : 'justify-start'} ${className}`}
            aria-label="5.0 Sterne auf Trustpilot"
        >
            <span className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} />)}
            </span>
            <span className="font-heading font-semibold text-xs text-primary/70">5.0</span>
            <span className="font-sans text-xs text-primary/40">auf</span>
            <span className="font-heading font-semibold text-xs" style={{ color: '#00b67a' }}>Trustpilot</span>
        </a>
    );
}
