'use client';

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Particles() {
  // Grid settings
  const rows = 100;
  const cols = 100;
  const count = rows * cols;
  
  const mesh = useRef<THREE.Points>(null);

  // Generate initial grid positions
  const { positions, originalPositions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const origPos = new Float32Array(count * 3);
    
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        const index = i * cols + j;
        
        // Create a centered grid
        // Spread 100 points over approx 20 units -> 0.2 spacing
        const x = (j - cols / 2) * 0.25;
        const z = (i - rows / 2) * 0.25;
        const y = 0;

        pos[index * 3] = x;
        pos[index * 3 + 1] = y;
        pos[index * 3 + 2] = z;

        origPos[index * 3] = x;
        origPos[index * 3 + 1] = y;
        origPos[index * 3 + 2] = z;
      }
    }
    return { positions: pos, originalPositions: origPos };
  }, [rows, cols]);

  useFrame((state) => {
    if (mesh.current) {
      const time = state.clock.getElapsedTime();
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const ix = i * 3;
        const ox = originalPositions[ix]; // original x
        const oz = originalPositions[ix + 2]; // original z

        // Calculate wave height based on position and time
        // Combine multiple sine waves for a more organic "liquid" feel
        const y = 
          Math.sin(ox * 0.5 + time * 0.5) * 1.5 + 
          Math.sin(oz * 0.3 + time * 0.3) * 1.5 + 
          Math.sin((ox + oz) * 0.2 + time * 0.2) * 0.5;

        positions[ix + 1] = y * 0.4; // Scale down the height
      }
      
      mesh.current.geometry.attributes.position.needsUpdate = true;
      
      // Slowly rotate the entire system
      mesh.current.rotation.y = time * 0.05;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          itemSize={3}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#0ea5e9" // Sky Blue / Cyan
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
