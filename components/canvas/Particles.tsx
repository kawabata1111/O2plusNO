'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Particles() {
  const count = 3000;
  const mesh = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const temp = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360); 
      const phi = THREE.MathUtils.randFloatSpread(360); 

      temp[i * 3] = (Math.random() - 0.5) * 20;     // x
      temp[i * 3 + 1] = (Math.random() - 0.5) * 20; // y
      temp[i * 3 + 2] = (Math.random() - 0.5) * 10; // z
    }
    return temp;
  }, [count]);

  useFrame((state) => {
    if (mesh.current) {
      const time = state.clock.getElapsedTime();
      mesh.current.rotation.y = time * 0.05;
      mesh.current.rotation.x = time * 0.02;

      // Wave effect
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      for(let i = 0; i < count; i++) {
          const x = positions[i*3];
          // Simple wave on Y axis based on X and Time
          positions[i*3 + 1] += Math.sin(time + x) * 0.002; 
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#d4a853"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
