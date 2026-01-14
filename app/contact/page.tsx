'use client';

import PageHeader from '@/components/ui/PageHeader';
import { motion } from 'framer-motion';
import { Mail, Phone, Send, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
    return (
        <main>
            <PageHeader 
                title="お問い合わせ" 
                enTitle="CONTACT" 
                subtitle="04_CONTACT" 
            />
            
            <section className="py-40 bg-white text-[#1e1e1e] relative overflow-hidden">
                {/* Tech Grid Background */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                    style={{ 
                        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
                        backgroundSize: '40px 40px' 
                    }} 
                />

                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-20">
                        
                        {/* Left: Contact Info (Data Panel) */}
                        <motion.div
                            id="form-start"
                            className="scroll-mt-32 flex flex-col justify-center"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="mb-12">
                                <h2 className="text-[#d4a853] font-bold tracking-[0.4em] uppercase mb-6 text-xs font-mono">
                                    // INITIATE_COMMUNICATION
                                </h2>
                                <p className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-none">
                                    READY TO<br/>COLLABORATE?
                                </p>
                                <p className="text-gray-500 leading-loose font-sans text-sm border-l-2 border-gray-200 pl-6">
                                    O2plusNOのサービスに関するご質問やご相談は、<br/>
                                    お電話またはお問い合わせフォームより承っております。<br/>
                                    <span className="text-xs font-mono mt-2 block text-gray-400">
                                        {`> Protocol: Open`}<br/>
                                        {`> Response time: < 24h`}
                                    </span>
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div className="group border border-gray-200 p-6 hover:border-[#d4a853] transition-colors bg-gray-50">
                                    <div className="flex items-center gap-4 mb-2 text-gray-400 group-hover:text-[#d4a853] transition-colors">
                                        <Phone size={18} />
                                        <span className="text-[10px] font-mono tracking-widest">VOICE_CHANNEL / お電話</span>
                                    </div>
                                    <p className="text-2xl font-bold tracking-wider font-mono">050-5527-6238</p>
                                    <p className="text-[10px] text-gray-400 mt-2 font-mono">AVAILABILITY: MON-FRI 10:00-18:00</p>
                                </div>

                                 <div className="group border border-gray-200 p-6 hover:border-[#d4a853] transition-colors bg-gray-50">
                                    <div className="flex items-center gap-4 mb-2 text-gray-400 group-hover:text-[#d4a853] transition-colors">
                                        <Mail size={18} />
                                        <span className="text-[10px] font-mono tracking-widest">DATA_PACKET / メール</span>
                                    </div>
                                    <p className="text-xl font-bold tracking-wider font-mono">o2plusno20171011@gmail.com</p>
                                    <p className="text-[10px] text-gray-400 mt-2 font-mono">AVAILABILITY: 24/7 AUTO_RECEIVE</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right: Contact Form (Input Console - White Version) */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white border border-gray-200 p-10 md:p-12 relative overflow-hidden shadow-xl"
                        >
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-gray-400 text-right">
                                SECURE_FORM<br/>VER: 2.0.4
                            </div>
                            
                            {/* Corner Markers */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#1e1e1e]" />
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#1e1e1e]" />

                            <form 
                                action="https://formsubmit.co/o2plusno20171011@gmail.com" 
                                method="POST"
                                className="space-y-8 relative z-10"
                            >
                                {/* FormSubmit Configuration */}
                                <input type="hidden" name="_next" value="https://o2plusno-site.netlify.app/thanks" />
                                <input type="hidden" name="_captcha" value="false" />
                                <input type="text" name="_honey" style={{display: 'none'}} />
                                <input type="hidden" name="_subject" value="【O2plusNO】お問い合わせがありました" />

                                <div className="space-y-2 group">
                                    <label className="text-xs font-mono text-[#d4a853] tracking-widest block mb-1">
                                        // INPUT: YOUR_NAME <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="text" 
                                        name="name"
                                        required
                                        className="w-full bg-gray-50 border border-gray-300 px-4 py-3 text-sm font-mono focus:border-[#d4a853] focus:bg-white outline-none transition-all text-[#1e1e1e] placeholder-gray-400" 
                                        placeholder="_" 
                                    />
                                </div>

                                 <div className="space-y-2 group">
                                    <label className="text-xs font-mono text-[#d4a853] tracking-widest block mb-1">
                                        // INPUT: EMAIL_ADDRESS <span className="text-red-500">*</span>
                                    </label>
                                    <input 
                                        type="email" 
                                        name="email"
                                        required
                                        className="w-full bg-gray-50 border border-gray-300 px-4 py-3 text-sm font-mono focus:border-[#d4a853] focus:bg-white outline-none transition-all text-[#1e1e1e] placeholder-gray-400" 
                                        placeholder="_" 
                                    />
                                </div>

                                 <div className="space-y-2 group">
                                    <label className="text-xs font-mono text-[#d4a853] tracking-widest block mb-1">
                                        // INPUT: MESSAGE_BODY <span className="text-red-500">*</span>
                                    </label>
                                    <textarea 
                                        rows={5} 
                                        name="message"
                                        required
                                        className="w-full bg-gray-50 border border-gray-300 px-4 py-3 text-sm font-mono focus:border-[#d4a853] focus:bg-white outline-none transition-all resize-none text-[#1e1e1e] placeholder-gray-400" 
                                        placeholder="_"
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-[#1e1e1e] text-white font-bold py-4 font-mono text-xs md:text-sm tracking-widest hover:bg-[#d4a853] transition-colors flex items-center justify-center gap-2 shadow-lg whitespace-nowrap"
                                    type="submit"
                                >
                                    [ TRANSMIT_DATA ] <Send size={16} />
                                </motion.button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    );
}
