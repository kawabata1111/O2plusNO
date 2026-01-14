'use client';

import { motion } from 'framer-motion';
import DecodeText from './DecodeText';

export default function Philosophy() {
    return (
        <section id="philosophy" className="relative section-padding overflow-hidden bg-white text-[#1e1e1e]">
            {/* Tech Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                style={{ 
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' 
                }} 
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    
                    {/* Left: Decoding Heading */}
                    <div className="flex flex-col justify-center order-2 lg:order-1">
                        <div className="mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-[#d4a853] animate-pulse" />
                            <p className="font-mono text-[10px] tracking-widest text-gray-400">
                                SYSTEM_CORE: <span className="text-[#1e1e1e]">企業理念</span>
                            </p>
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-4">
                            <DecodeText text="TRIGGER" className="block text-[#1e1e1e]" />
                            <DecodeText text="TO FIND" className="block text-[#1e1e1e]" />
                            <span className="text-[#d4a853]">
                                <DecodeText text="YOUR TRUE SELF" />
                            </span>
                        </h2>
                        
                        <p className="text-base md:text-lg font-sans font-bold text-gray-500 mb-8 tracking-wide">
                            本当になりたい自分に出会えるキッカケを。
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
                    <div className="flex flex-col justify-center space-y-8 md:space-y-12 order-1 lg:order-2 mb-8 lg:mb-0">
                        <div>
                            <h3 className="font-mono text-[10px] text-gray-400 mb-4 border-l-2 border-[#d4a853] pl-4 uppercase tracking-widest">
                                MISSION_STATEMENT / ミッション
                            </h3>
                            <p className="text-lg md:text-xl font-bold font-sans leading-relaxed text-[#1e1e1e]">
                                自分の力で生き抜ける人を増やし、<br/>
                                その力を利他に向けることができる<br/>
                                社会の創造。
                            </p>
                        </div>

                        <div className="bg-gray-50 p-6 md:p-8 border border-gray-100 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 p-2 opacity-20">
                                <svg width="30" height="30" viewBox="0 0 40 40">
                                    <path d="M0 0 H40 V40" fill="none" stroke="black" strokeWidth="1" />
                                </svg>
                            </div>
                            
                            <p className="text-xs md:text-sm text-gray-600 leading-loose font-sans text-justify">
                                私たちは、一人ひとりが持つ可能性を信じています。<br/>
                                現代社会において「自立」とは単に経済的な成功だけを指すのではありません。<br/>
                                自分の意志で選択し、その選択に責任を持ち、そして得た力を他者のために使うこと。<br/>
                                <br/>
                                <span className="text-[10px] text-gray-400 font-mono block mt-2">
                                    {`> We believe in individual potential.`}<br/>
                                    {`> Independence is not just economic success.`}
                                </span>
                            </p>
                            
                            <div className="mt-6 flex gap-1">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-1 h-3 bg-gray-200" />
                                ))}
                                <div className="w-1 h-3 bg-[#d4a853]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}