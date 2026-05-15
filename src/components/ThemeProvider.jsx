'use client';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export default function ThemeProvider({ children }) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            storageKey="nw-theme"
        >
            {children}
        </NextThemesProvider>
    );
}
