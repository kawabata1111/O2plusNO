'use client';

import { useEffect } from 'react';
import Scene from '@/components/canvas/Scene';
import Hero from '@/components/ui/Hero';
import Philosophy from '@/components/ui/Philosophy';
import Business from '@/components/ui/Business';
import Achievements from '@/components/ui/Achievements';
import Message from '@/components/ui/Message';
import Contact from '@/components/ui/Contact';

export default function Home() {

  return (
    <main className="relative w-full">
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
