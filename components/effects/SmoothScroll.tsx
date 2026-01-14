'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    // Disable Lenis on mobile devices
    if (window.innerWidth < 768) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Resize after content load to fix scroll height
    const resizeTimer = setTimeout(() => {
        lenis.resize();
    }, 1000);

    return () => {
      lenis.destroy();
      clearTimeout(resizeTimer);
    };
  }, []);

  return null;
}
