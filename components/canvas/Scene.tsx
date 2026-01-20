'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Particles from './Particles';

export default function Scene() {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none opacity-100">
            <Canvas 
                camera={{ position: [0, 6, 12], fov: 45 }} 
                gl={{ antialias: true, alpha: true }} 
                dpr={[1, 2]}
            >
                {/* Fog for depth fading - White to match the bg-white theme */}
                <fog attach="fog" args={['#ffffff', 5, 25]} />
                
                <ambientLight intensity={0.8} />
                <Suspense fallback={null}>
                    <Particles />
                </Suspense>
            </Canvas>
        </div>
    );
}
