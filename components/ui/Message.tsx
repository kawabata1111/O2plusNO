'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import DecodeText from './DecodeText';

const GlitchImage = () => {
    const [isGlitching, setIsGlitching] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 200);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-full overflow-hidden bg-black group">
            <Image
                src="/images/founder.png"
                alt="Founder"
                fill
                className="object-cover opacity-80 transition-opacity duration-500 group-hover:opacity-100"
            />
            {/* Glitch Layers */}
            <div className={`absolute inset-0 bg-[#2563eb] mix-blend-overlay opacity-0 ${isGlitching ? 'opacity-20 translate-x-2' : ''} transition-all duration-75`}></div>
            <div className={`absolute inset-0 bg-cyan-500 mix-blend-overlay opacity-0 ${isGlitching ? 'opacity-20 -translate-x-2' : ''} transition-all duration-75`}></div>
            {/* Scanline */}
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
        </div>
    );
};

export default function Message() {
    return (
        <section className="relative section-padding overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-white text-[#1e3a5f]">
            

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    
                    {/* Photo Area */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative aspect-[3/4] lg:aspect-[4/5] border border-gray-900 p-1 md:p-2"
                    >
                        <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#2563eb]" />
                        <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#2563eb]" />
                        
                        <GlitchImage />
                        
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="flex items-center gap-2 mb-8">
                            <span className="w-2 h-2 bg-[#2563eb] rounded-full animate-pulse" />
                            <p className="font-mono text-[10px] tracking-widest text-gray-500 uppercase">
                                [ SYSTEM_MSG: <DecodeText text="MESSAGE" className="inline-block" /> / 代表メッセージ ]
                            </p>
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-4 leading-none uppercase">
                            <DecodeText text="CHANGE" className="block" />
                            <DecodeText text="THE" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-yellow-600">
                                <DecodeText text="FUTURE" />
                            </span>
                        </h2>
                        <p className="text-base md:text-lg font-bold text-[#1e3a5f] mb-10 md:mb-12 tracking-wider">
                            未来を変える、勇気を。
                        </p>
                        
                        <div className="space-y-6 md:space-y-8 text-gray-600 leading-loose font-sans text-sm md:text-base border-l-2 border-gray-200 pl-6 md:pl-8 text-justify">
                            <p>
                                変化の激しい現代において、「自分らしく生きる」ことは決して簡単ではありません。
                                しかし、正しい知識と少しの勇気があれば、誰もが理想のライフスタイルを実現できると私は信じています。
                            </p>
                            <p>
                                O2plusNOは、単なるビジネススキルの提供にとどまらず、あなたが「本当になりたい自分」に出会うためのパートナーとして、全力でサポートします。
                            </p>
                        </div>

                        <div className="mt-12 md:mt-16 pt-8 border-t border-gray-200 flex items-center justify-between">
                            <div>
                                <p className="font-mono text-[10px] text-gray-400 mb-1 uppercase tracking-widest">AUTH_SIGNATURE / 代表</p>
                                <p className="text-xl md:text-2xl font-bold tracking-widest">Kengo Oono</p>
                            </div>
                            
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}