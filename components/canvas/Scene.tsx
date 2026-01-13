'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Particles from './Particles';

export default function Scene() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none opacity-40">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ antialias: true, alpha: true }} dpr={[1, 2]}>
                <ambientLight intensity={0.5} />
                <Suspense fallback={null}>
                    <Particles />
                </Suspense>
            </Canvas>
        </div>
    );
}
