'use client';

import { motion, useSpring, useTransform, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

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
        <section className="py-40 bg-white text-[#1e1e1e] relative overflow-hidden">
            
            {/* Tech Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                style={{ 
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' 
                }} 
            />

            {/* Rotating HUD Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-[600px] h-[600px] border border-dashed border-gray-300 rounded-full opacity-50"
                />
                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute top-10 left-10 right-10 bottom-10 border border-gray-200 rounded-full opacity-50"
                />
            </div>

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 mb-16 border border-gray-300 px-4 py-1 rounded-full bg-white">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <p className="font-mono text-xs tracking-widest text-gray-500">
                            SYSTEM STATUS: OPTIMAL / 稼働中
                        </p>
                    </div>
                    
                    <h2 className="text-sm font-mono tracking-widest mb-12 text-gray-400">
                        // TOTAL_ACHIEVEMENTS_DATA / <span className="text-[#1e1e1e] font-bold">実績データ</span>
                    </h2>
                    
                    <div className="relative inline-block py-10 px-20 border-y border-gray-200 bg-white/80 backdrop-blur-sm">
                        {/* Corner Markers */}
                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#d4a853]" />
                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#d4a853]" />
                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#d4a853]" />
                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#d4a853]" />

                        <div className="text-8xl md:text-9xl font-mono font-bold text-[#1e1e1e] tracking-tighter">
                            <Counter from={0} to={2500} />
                            <span className="text-4xl text-[#d4a853] align-top ml-2">+</span>
                        </div>
                        <p className="text-xs font-mono text-gray-400 mt-2">
                            USERS_SUPPORTED / <span className="text-[#1e1e1e] font-bold">累計サポート人数</span>
                        </p>
                    </div>

                    <div className="mt-12 flex justify-center gap-1">
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{ height: 4 }}
                                animate={{ height: [4, 16, 4] }}
                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.05 }}
                                className="w-1 bg-[#d4a853]"
                            />
                        ))}
                    </div>

                    <p className="font-mono text-xs text-gray-500 mt-8 tracking-wider">
                        EXECUTING SCRIPT... SUPPORT_SUCCESS_RATE: 98.9%
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
