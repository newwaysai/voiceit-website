'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export { gsap, ScrollTrigger };

export function scrollStart(desktopValue = 'top 80%') {
    if (typeof window !== 'undefined' && window.innerHeight < 700) {
        return 'top 90%';
    }
    return desktopValue;
}
