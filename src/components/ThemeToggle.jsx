'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <div className="w-8 h-8 rounded-full bg-primary/5 border border-border" />;
    }

    const cycle = () => {
        if (theme === 'dark') setTheme('light');
        else if (theme === 'light') setTheme('system');
        else setTheme('dark');
    };

    const Icon = theme === 'light' ? Sun : theme === 'dark' ? Moon : Monitor;
    const label = theme === 'light' ? 'Light' : theme === 'dark' ? 'Dark' : 'System';

    return (
        <button
            onClick={cycle}
            className="w-8 h-8 rounded-full bg-primary/5 border border-border flex items-center justify-center hover:bg-primary/10 transition-colors"
            aria-label={`Theme: ${label}`}
            title={label}
        >
            <Icon size={14} className="text-primary/70" />
        </button>
    );
}
