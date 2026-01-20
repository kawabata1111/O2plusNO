'use client';

import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import Link from 'next/link';
import DecodeText from './DecodeText';

export default function Contact() {
    // Static heights for barcode to prevent hydration mismatch
    const barcodeHeights = [15, 28, 12, 24, 18, 10, 22, 14, 26, 16];

    return (
        <section className="py-40 bg-white text-slate-900 relative overflow-hidden">
            
            {/* Tech Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.05]" 
                style={{ 
                    backgroundImage: 'linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(90deg, #0f172a 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' 
                }} 
            />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="border-2 border-slate-900 p-1 relative"
                >
                    {/* Decorative Corner Brackets */}
                    <div className="absolute -top-2 -left-2 w-6 h-6 border-t-4 border-l-4 border-cyan-500" />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-cyan-500" />

                    <div className="bg-slate-50 p-12 md:p-20 text-center relative overflow-hidden">
                        
                        {/* Background Data */}
                        <div className="absolute top-4 right-4 text-[10px] font-mono text-slate-300 text-right leading-tight">
                            SECURE_CHANNEL: ACTIVE<br/>
                            ENCRYPTION: AES-256<br/>
                            SESSION_ID: O2-CONN-X9
                        </div>

                        <h2 className="text-cyan-600 font-bold tracking-[0.4em] uppercase mb-6 text-xs font-mono">
                            // 04_CONTACT_NODE
                        </h2>
                        
                        <p className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-none text-slate-900">
                            <DecodeText text="INITIATE" className="block" />
                            <DecodeText text="CONNECTION" />
                        </p>
                        
                        <p className="text-slate-600 mb-16 font-sans text-sm max-w-md mx-auto leading-loose tracking-wide">
                            あなたの「なりたい自分」について、お話を聞かせてください。<br/>
                            無理な勧誘は一切いたしません。<br/>
                            <span className="text-xs text-slate-400 font-mono block mt-4">
                                {`> Waiting for user input...`}<br/>
                                {`> Please establish a connection for consultation.`}
                            </span>
                        </p>

                        <Link href="/contact" passHref>
                             <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative inline-flex items-center justify-center gap-2 md:gap-4 bg-slate-900 text-white px-8 md:px-16 py-5 mb-16 font-mono text-xs md:text-sm tracking-widest hover:bg-cyan-600 transition-colors duration-300 whitespace-nowrap"
                            >
                                <span className="relative z-10">[ 送信する / EXECUTE ]</span>
                                <div className="absolute inset-0 border border-white opacity-20 group-hover:opacity-0 transition-opacity" />
                            </motion.button>
                        </Link>

                        <div className="grid md:grid-cols-2 gap-8 border-t border-slate-200 pt-12 text-left">
                            <div className="group cursor-pointer">
                                <div className="flex items-center gap-3 mb-2 text-slate-400 group-hover:text-cyan-600 transition-colors">
                                    <Phone size={16} />
                                    <span className="text-[10px] font-mono tracking-widest">VOICE_COMM / お電話</span>
                                </div>
                                <p className="text-xl font-bold tracking-wider font-mono text-slate-800">050-5527-6238</p>
                            </div>
                            
                            <div className="group cursor-pointer">
                                <div className="flex items-center gap-3 mb-2 text-slate-400 group-hover:text-cyan-600 transition-colors">
                                    <Mail size={16} />
                                    <span className="text-[10px] font-mono tracking-widest">DATA_PACKET / メール</span>
                                </div>
                                <p className="text-lg font-bold tracking-wider font-mono text-slate-800">o2plusno20171011@gmail.com</p>
                            </div>
                        </div>

                        {/* Barcode Decoration */}
                        <div className="absolute bottom-4 right-4 flex gap-1 opacity-20">
                            {barcodeHeights.map((h, i) => (
                                <div key={i} className="bg-slate-900 w-1" style={{ height: h }} />
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
