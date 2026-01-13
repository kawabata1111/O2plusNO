'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const DecodeText = ({ text, className }: { text: string, className?: string }) => {
    const [display, setDisplay] = useState("");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let iteration = 0;
        const interval = setInterval(() => {
            setDisplay(
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [isInView, text]);

    return <span ref={ref} className={className}>{display}</span>;
};

export default function Philosophy() {
    return (
        <section id="philosophy" className="relative py-40 overflow-hidden bg-white text-[#1e1e1e]">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                style={{ 
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' 
                }} 
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20">
                    
                    {/* Left: Decoding Heading */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#d4a853] animate-pulse" />
                            <p className="font-mono text-xs tracking-widest text-gray-400">
                                SYSTEM_CORE: <span className="text-[#1e1e1e]">企業理念</span>
                            </p>
                        </div>
                        
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight mb-4">
                            <DecodeText text="DEFINE" className="block text-[#1e1e1e]" />
                            <DecodeText text="YOUR TRUE" className="block text-[#1e1e1e]" />
                            <span className="text-[#d4a853]">
                                <DecodeText text="EXISTENCE" />
                            </span>
                        </h2>
                        
                        <p className="text-lg font-sans font-bold text-gray-500 mb-8 tracking-wide">
                            本当の自分を、定義する。
                        </p>

                        <div className="h-[1px] w-full bg-gray-200 mb-8 relative overflow-hidden">
                            <motion.div 
                                initial={{ x: '-100%' }}
                                whileInView={{ x: '100%' }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 left-0 w-1/3 h-full bg-[#d4a853]"
                            />
                        </div>
                    </div>

                    {/* Right: Technical Description */}
                    <div className="flex flex-col justify-center space-y-12">
                        <div>
                            <h3 className="font-mono text-sm text-gray-400 mb-4 border-l-2 border-[#d4a853] pl-4">
                                MISSION_STATEMENT / <span className="text-[#1e1e1e]">ミッション</span>
                            </h3>
                            <p className="text-xl font-bold font-sans leading-relaxed text-[#1e1e1e]">
                                自分の力で生き抜ける人を増やし、<br/>
                                その力を利他に向けることができる<br/>
                                社会の創造。
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 border border-gray-100 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 opacity-20">
                                <svg width="40" height="40" viewBox="0 0 40 40">
                                    <path d="M0 0 H40 V40" fill="none" stroke="black" strokeWidth="1" />
                                </svg>
                            </div>
                            
                            <p className="text-sm text-gray-600 leading-loose font-sans">
                                私たちは、一人ひとりが持つ可能性を信じています。<br/>
                                現代社会において「自立」とは単に経済的な成功だけを指すのではありません。<br/>
                                自分の意志で選択し、その選択に責任を持ち、そして得た力を他者のために使うこと。<br/>
                                <br/>
                                <span className="text-xs text-gray-400 font-mono block mt-2">
                                    {`> We believe in individual potential.`}<br/>
                                    {`> Independence is not just economic success.`}
                                </span>
                            </p>
                            
                            <div className="mt-6 flex gap-2">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-1 h-4 bg-gray-300" />
                                ))}
                                <div className="w-1 h-4 bg-[#d4a853]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
