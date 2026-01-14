'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll() {
  useEffect(() => {
    // Disable Lenis on mobile devices
    if (window.innerWidth < 768) return;

    // Add lenis class to html for CSS targeting
    document.documentElement.classList.add('lenis');

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      autoResize: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Initial resize after fonts and images load
    const handleLoad = () => {
      setTimeout(() => lenis.resize(), 100);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    // ResizeObserver for dynamic content changes
    let resizeTimeout: NodeJS.Timeout;
    const resizeObserver = new ResizeObserver(() => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        lenis.resize();
      }, 100);
    });
    resizeObserver.observe(document.body);

    // Also observe the main content wrapper
    const main = document.querySelector('main');
    if (main) {
      resizeObserver.observe(main);
    }

    return () => {
      document.documentElement.classList.remove('lenis');
      lenis.destroy();
      resizeObserver.disconnect();
      clearTimeout(resizeTimeout);
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return null;
}
