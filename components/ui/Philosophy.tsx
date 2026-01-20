'use client';

import { motion } from 'framer-motion';
import DecodeText from './DecodeText';

export default function Philosophy() {
    return (
        <section id="philosophy" className="relative section-padding overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-white text-slate-800">

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    
                    {/* Left: Decoding Heading */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-6 flex items-center gap-2">
                            <span className="w-2 h-2 bg-cyan-500 animate-pulse rounded-full" />
                            <p className="font-cinzel text-xs tracking-widest text-slate-400 font-bold">
                                SYSTEM_CORE: <span className="text-slate-700 font-sans">企業理念</span>
                            </p>
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight mb-4 font-serif">
                            <DecodeText text="TRIGGER" className="block text-slate-800 font-cinzel" />
                            <DecodeText text="TO FIND" className="block text-slate-800 font-cinzel" />
                            <span className="text-cyan-600 font-cinzel">
                                <DecodeText text="YOUR TRUE SELF" />
                            </span>
                        </h2>
                        
                        <p className="text-base md:text-lg font-sans font-medium text-slate-500 mb-8 tracking-wide">
                            本当になりたい自分に出会えるキッカケを。
                        </p>

                        <div className="h-[1px] w-full bg-slate-200 mb-8 relative overflow-hidden">
                            <motion.div 
                                initial={{ x: '-100%' }}
                                whileInView={{ x: '100%' }}
                                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                                className="absolute top-0 left-0 w-1/3 h-full bg-cyan-500"
                            />
                        </div>
                    </div>

                    {/* Right: Technical Description */}
                    <div className="flex flex-col justify-center space-y-8 md:space-y-12 mb-8 lg:mb-0">
                        <div>
                            <h3 className="font-cinzel text-xs text-slate-400 mb-4 border-l-2 border-cyan-500 pl-4 uppercase tracking-[0.2em] font-bold">
                                MISSION_STATEMENT
                            </h3>
                            <p className="text-lg md:text-xl font-bold font-serif leading-relaxed text-slate-800">
                                自分の力で生き抜ける人を増やし、<br/>
                                その力を利他に向けることができる<br/>
                                社会の創造。
                            </p>
                        </div>

                        <div className="bg-white/60 backdrop-blur-sm p-6 md:p-8 border border-slate-200 relative group overflow-hidden shadow-sm rounded-sm">
                            <div className="absolute top-0 right-0 p-2 opacity-10">
                                <svg width="30" height="30" viewBox="0 0 40 40">
                                    <path d="M0 0 H40 V40" fill="none" stroke="currentColor" strokeWidth="1" />
                                </svg>
                            </div>
                            
                            <p className="text-xs md:text-sm text-slate-600 leading-loose font-sans text-justify">
                                私たちは、一人ひとりが持つ可能性を信じています。<br/>
                                現代社会において「自立」とは単に経済的な成功だけを指すのではありません。<br/>
                                自分の意志で選択し、その選択に責任を持ち、そして得た力を他者のために使うこと。<br/>
                                <br/>
                                <span className="text-[10px] text-slate-400 font-cinzel block mt-2 tracking-wider">
                                    {`> We believe in individual potential.`}<br/>
                                    {`> Independence is not just economic success.`}
                                </span>
                            </p>
                            
                            <div className="mt-6 flex gap-1">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="w-1 h-3 bg-slate-200" />
                                ))}
                                <div className="w-1 h-3 bg-cyan-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}