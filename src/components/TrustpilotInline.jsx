'use client';

// Inline Trustpilot bar — embed between sections on landing page
export default function TrustpilotInline() {
    return (
        <div className="w-full px-6 md:px-16 max-w-7xl mx-auto py-6">
            <div className="flex items-center justify-center gap-4 py-4 border-t border-b border-border">
                <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => (
                        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#00b67a" stroke="none">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                    ))}
                </div>
                <span className="font-sans text-sm text-primary/50">Bewertet mit</span>
                <span className="font-heading font-bold text-primary text-sm">5.0</span>
                <span className="font-sans text-sm text-primary/50">auf</span>
                <a
                    href="https://www.trustpilot.com/review/newways.ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-primary/70 hover:text-primary transition-colors font-heading font-medium text-sm min-h-[44px]"
                >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#00b67a" stroke="none">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    Trustpilot
                </a>
            </div>
        </div>
    );
}
