// WhatsApp contact button — reusable across all pages
// Pass raw German text; component handles encoding + phone number
// No 'use client' needed — pure <a> tag, works in Server Components

const PHONE = '4917623581117';

const WHATSAPP_ICON = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.116.554 4.103 1.523 5.824L.057 23.428a.5.5 0 0 0 .515.572l5.828-1.528A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.9a9.893 9.893 0 0 1-5.031-1.375l-.361-.214-3.733.979.999-3.645-.235-.374A9.862 9.862 0 0 1 2.1 12C2.1 6.533 6.533 2.1 12 2.1c5.467 0 9.9 4.433 9.9 9.9 0 5.467-4.433 9.9-9.9 9.9z"/>
    </svg>
);

const SIZE_CLASSES = {
    sm: 'px-5 py-2.5 text-sm gap-2',
    md: 'px-8 py-4 text-base gap-3',
    lg: 'px-10 py-5 text-lg gap-3',
};

export default function WhatsAppButton({
    text,
    label = 'Auf WhatsApp schreiben',
    size = 'md',
    variant = 'solid',
    className = '',
}) {
    const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
    const sizeClass = SIZE_CLASSES[size] ?? SIZE_CLASSES.md;

    if (variant === 'ghost') {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 text-primary/60 hover:text-primary transition-colors font-sans ${size === 'sm' ? 'text-sm' : 'text-base'} ${className}`}
            >
                {WHATSAPP_ICON}
                {label}
            </a>
        );
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`magnetic-btn active-press inline-flex items-center justify-center bg-green-600 hover:bg-green-500 text-white font-heading font-semibold rounded-full transition-colors ${sizeClass} ${className}`}
        >
            {WHATSAPP_ICON}
            {label}
        </a>
    );
}
