import Image from 'next/image';
import Link from 'next/link';

export default function FloatingDSGVOBadge({ lang = 'de' }) {
  const alt = lang === 'en' ? 'GDPR compliant' : '100% DSGVO konform';
  const href = lang === 'en' ? '/en/trust' : '/trust';

  return (
    <Link
      href={href}
      aria-label={alt}
      title={alt}
      className="hidden md:inline-flex fixed bottom-6 right-6 z-30 items-center justify-center rounded-full transition-opacity hover:opacity-100"
      style={{
        opacity: 0.92,
        filter: 'drop-shadow(0 6px 16px rgba(0,0,0,0.35))',
      }}
    >
      <Image
        src="/badges/dsgvo.png"
        alt={alt}
        width={56}
        height={56}
        className="h-14 w-14 object-contain"
      />
    </Link>
  );
}
