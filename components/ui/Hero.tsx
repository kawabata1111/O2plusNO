'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-white">
            {/* Removed Background Image and Blobs for clear view of Particles */}

            {/* 2. Giant Typography Background */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.03, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="text-[18vw] md:text-[13vw] font-cinzel font-bold text-slate-900 leading-none tracking-tighter whitespace-nowrap"
                >
                    O2plusNO
                </motion.div>
            </div>

            {/* 3. Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
                
                {/* Left Side: Vertical Text */}
                <div className="hidden lg:flex lg:col-span-2 h-full flex-col justify-center items-center relative">
                    <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: "40%" }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                        className="w-[1px] bg-gradient-to-b from-transparent via-slate-300 to-transparent absolute top-0"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="writing-vertical-rl text-[10px] tracking-[0.5em] text-slate-500 py-8 border-l border-white/0 font-cinzel uppercase"
                        style={{ writingMode: 'vertical-rl' }}
                    >
                        Independence × Creation × Altruism
                    </motion.p>
                     <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: "40%" }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                        className="w-[1px] bg-gradient-to-b from-transparent via-slate-300 to-transparent absolute bottom-0"
                    />
                </div>

                {/* Center: Main Message */}
                <div className="lg:col-span-8 text-center lg:text-left flex flex-col items-center lg:items-start justify-center h-full pt-0 lg:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-6 lg:mb-8 inline-block"
                    >
                        <span className="px-5 py-1.5 rounded-full border border-blue-200 bg-blue-50/50 text-blue-600 text-[10px] md:text-[11px] tracking-[0.3em] uppercase backdrop-blur-sm font-cinzel font-semibold shadow-sm">
                            Be Your True Self
                        </span>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-medium leading-[1.2] lg:leading-tight text-slate-800 mb-8 tracking-wide">
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="block font-cormorant italic text-slate-600"
                        >
                            Prove Your
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-400 font-cinzel drop-shadow-sm"
                        >
                            POTENTIAL
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="block mt-6 text-2xl md:text-3xl lg:text-4xl font-sans font-bold tracking-widest text-slate-700"
                        >
                            可能性を、証明する。
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="text-slate-900 text-xs md:text-sm lg:text-base max-w-xs md:max-w-lg mx-auto lg:mx-0 leading-loose font-medium tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                    >
                        自立した個人が互いに支え合い、<br className="hidden md:block"/>
                        その力を社会への貢献へと繋げていく。<br className="hidden md:block"/>
                        私たちは、あなたの挑戦を全力で支援します。
                    </motion.p>
                </div>

                {/* Right Side: Scroll Indicator */}
                <div className="hidden lg:flex lg:col-span-2 h-full flex-col justify-end items-center pb-12">
                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="flex flex-col items-center gap-4 backdrop-blur-[2px] py-4 rounded-full"
                    >
                        <span className="text-[10px] text-slate-700 font-bold tracking-[0.3em] uppercase writing-vertical-rl font-cinzel drop-shadow-sm">Scroll</span>
                        <div className="w-[1.5px] h-24 bg-gradient-to-b from-slate-400/0 via-slate-600 to-slate-400/0" />
                    </motion.div>
                </div>
            </div>
            
             {/* Mobile Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="lg:hidden absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 backdrop-blur-[2px] p-2 rounded-full"
            >
                 <span className="text-[10px] text-slate-700 font-bold tracking-[0.2em] uppercase font-cinzel drop-shadow-sm mb-1">Scroll</span>
                <div className="w-[1.5px] h-12 bg-gradient-to-b from-slate-600 to-transparent" />
            </motion.div>
        </section>
    );
}
