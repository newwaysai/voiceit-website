'use client';
import Script from 'next/script';

// Fixed sidebar widget above ProvenExpert
export default function TrustpilotWidget() {
    return (
        <>
            <Script
                src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
                strategy="lazyOnload"
            />
            <div
                className="hidden lg:block"
                style={{
                    position: 'fixed',
                    right: 0,
                    bottom: 120,
                    zIndex: 9999,
                    width: 180,
                }}
            >
                <div
                    className="trustpilot-widget"
                    data-locale="en-US"
                    data-template-id="56278e9abfbbba0bdcd568bc"
                    data-businessunit-id="69a5fb1b9c2aa2494485843e"
                    data-style-height="52px"
                    data-style-width="180px"
                    data-token="ddeb64c9-66a6-4ef1-839e-af5f66ec573b"
                    data-theme="dark"
                >
                    <a href="https://www.trustpilot.com/review/newways.ai" target="_blank" rel="noopener noreferrer">
                        Trustpilot
                    </a>
                </div>
            </div>
        </>
    );
}
