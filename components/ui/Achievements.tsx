'use client';

import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import DecodeText from './DecodeText';

function Counter({ from, to }: { from: number; to: number }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });
    const spring = useSpring(from, { mass: 1, stiffness: 50, damping: 20 });
    const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

    useEffect(() => {
        if (inView) {
            spring.set(to);
        }
    }, [inView, spring, to]);

    return <motion.span ref={ref}>{display}</motion.span>;
}

export default function Achievements() {
    return (
        <section className="relative section-padding overflow-hidden bg-white text-[#1e1e1e]">
            
            {/* Tech Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                style={{ 
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' 
                }} 
            />

            {/* Rotating HUD Circle - Responsive sizing */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-20 lg:opacity-50">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-dashed border-gray-300 rounded-full"
                />
            </div>

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 mb-12 md:mb-16 border border-gray-200 px-4 py-1 rounded-full bg-white shadow-sm">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <p className="font-mono text-[10px] tracking-widest text-gray-500 uppercase">
                            SYSTEM_STATUS: OPTIMAL
                        </p>
                    </div>
                    
                    <h2 className="text-[10px] font-mono tracking-[0.3em] mb-8 md:mb-12 text-gray-400 uppercase">
                        // <DecodeText text="TOTAL_ACHIEVEMENTS_DATA" /> / <span className="text-[#1e1e1e] font-bold">実績データ</span>
                    </h2>
                    
                    <div className="relative inline-block py-8 px-10 md:py-10 md:px-20 border-y border-gray-100 bg-white/80 backdrop-blur-sm">
                        {/* Corner Markers */}
                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#d4a853]" />
                        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#d4a853]" />
                        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#d4a853]" />
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#d4a853]" />

                        <div className="text-6xl md:text-8xl lg:text-9xl font-mono font-bold text-[#1e1e1e] tracking-tighter flex items-center justify-center">
                            <Counter from={0} to={2500} />
                            <span className="text-3xl md:text-5xl lg:text-6xl text-[#d4a853] ml-2">+</span>
                        </div>
                        <p className="text-[10px] font-mono text-gray-400 mt-2 uppercase tracking-widest">
                            <DecodeText text="USERS_SUPPORTED" /> / <span className="text-[#1e1e1e] font-bold">累計サポート人数</span>
                        </p>
                    </div>

                    <div className="mt-12 flex justify-center gap-1">
                        {[...Array(15)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 4 }}
                                animate={{ height: [4, 16, 4] }}
                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.05 }}
                                className="w-1 bg-[#d4a853] opacity-50"
                            />
                        ))}
                    </div>

                    <p className="font-mono text-[9px] text-gray-400 mt-12 tracking-wider">
                        EXECUTING_ANALYSIS... SUCCESS_RATE: 98.9%
                    </p>
                </motion.div>
            </div>
        </section>
    );
}