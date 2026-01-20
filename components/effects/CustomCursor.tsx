'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    
    // Adjusted for snappier response (less lag)
    const springConfig = { damping: 30, stiffness: 2000, mass: 0.5 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => {
            window.removeEventListener('mousemove', moveCursor);
        };
    }, [cursorX, cursorY, isVisible]);

    return (
        <motion.div
            className="pointer-events-none fixed left-0 top-0 z-[99999] hidden md:block"
            style={{
                x: cursorXSpring,
                y: cursorYSpring,
                opacity: isVisible ? 1 : 0,
            }}
        >
            <div className="relative h-8 w-8">
                {/* Center Dot */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#2563eb] rounded-full shadow-lg shadow-blue-500/50" />

                {/* Outer Ring */}
                <div className="absolute top-0 left-0 w-full h-full border-2 border-[#2563eb]/60 rounded-full" />
            </div>
        </motion.div>
    );
}
