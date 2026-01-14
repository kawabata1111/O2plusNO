'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050505]">
            {/* 0. Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                    alt="Background"
                    fill
                    className="object-cover opacity-30"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/90 via-[#050505]/60 to-[#050505]" />
            </div>

            {/* 1. Aurora Background Effect */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/40 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-blue-900/30 rounded-full blur-[150px] mix-blend-screen" />
            </div>

            {/* 2. Giant Typography Background */}
            <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none select-none z-0">
                <motion.div
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.05, scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="text-[30vw] lg:text-[20vw] font-cinzel font-bold text-white leading-none tracking-tighter whitespace-nowrap"
                >
                    O2
                </motion.div>
            </div>

            {/* 3. Main Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 h-full items-center">
                
                {/* Left Side: Vertical Text (Japanese Aesthetics) */}
                <div className="hidden lg:flex lg:col-span-2 h-full flex-col justify-center items-center relative">
                    <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: "40%" }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                        className="w-[1px] bg-white/20 absolute top-0"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="writing-vertical-rl text-[10px] tracking-[0.5em] text-white/40 py-8 border-l border-white/0 font-cinzel uppercase"
                        style={{ writingMode: 'vertical-rl' }}
                    >
                        Independence × Creation × Altruism
                    </motion.p>
                     <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: "40%" }}
                        transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                        className="w-[1px] bg-white/20 absolute bottom-0"
                    />
                </div>

                {/* Center: Main Message */}
                <div className="lg:col-span-8 text-center lg:text-left flex flex-col items-center lg:items-start justify-center h-full pt-20 lg:pt-0">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-6 lg:mb-8 inline-block"
                    >
                        <span className="px-4 py-1 rounded-full border border-[#d4a853]/30 text-[#d4a853] text-[9px] md:text-[10px] tracking-[0.3em] uppercase bg-[#d4a853]/5 backdrop-blur-sm font-cinzel">
                            Be Your True Self
                        </span>
                    </motion.div>

                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-serif font-medium leading-[1.2] lg:leading-tight text-white mb-8 tracking-wide">
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="block font-cormorant italic"
                        >
                            Prove Your
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="block mt-2 text-[#d4a853] font-cinzel"
                        >
                            POTENTIAL
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8 }}
                            className="block mt-6 text-2xl md:text-3xl lg:text-4xl font-sans font-bold tracking-widest text-white/90"
                        >
                            可能性を、証明する。
                        </motion.span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="text-white/70 text-xs md:text-sm lg:text-base max-w-xs md:max-w-lg mx-auto lg:mx-0 leading-loose font-light tracking-wide"
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
                        className="flex flex-col items-center gap-4"
                    >
                        <span className="text-[10px] text-white/50 tracking-[0.3em] uppercase writing-vertical-rl font-cinzel">Scroll</span>
                        <div className="w-[1px] h-24 bg-gradient-to-b from-white/0 via-white/40 to-white/0" />
                    </motion.div>
                </div>
            </div>
            
             {/* Mobile Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="lg:hidden absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-white/60 to-transparent" />
            </motion.div>
        </section>
    );
}
