'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import Scene from '@/components/canvas/Scene';
import Hero from '@/components/ui/Hero';
import Philosophy from '@/components/ui/Philosophy';
import Business from '@/components/ui/Business';
import Achievements from '@/components/ui/Achievements';
import Message from '@/components/ui/Message';
import Contact from '@/components/ui/Contact';

export default function Home() {

  useEffect(() => {
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

    return () => {
      lenis.destroy();
    };
  }, []);


  return (
    <main className="relative w-full min-h-screen overflow-hidden">
      {/* Background Ambience */}
      <Scene />

      {/* Content Flow */}
      <div className="relative z-10">
        <Hero />
        <Philosophy />
        <Business />
        <Achievements />
        <Message />
        <Contact />
      </div>
    </main>
  );
}
