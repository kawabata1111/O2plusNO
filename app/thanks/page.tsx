'use client';

import PageHeader from '@/components/ui/PageHeader';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function ThanksPage() {
    return (
        <main>
            <PageHeader 
                title="送信完了" 
                enTitle="THANK YOU" 
                subtitle="00_SUCCESS" 
            />
            
            <section className="py-40 bg-gradient-to-br from-cyan-50 via-blue-50 to-white text-[#1e3a5f] relative overflow-hidden">

                <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        
                        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                            お問い合わせ<br/>ありがとうございました。
                        </h2>
                        
                        <p className="text-gray-600 mb-16 font-sans text-sm md:text-base max-w-lg mx-auto leading-loose">
                            ご入力いただいた内容は正常に送信されました。<br/>
                            担当者より折り返しご連絡させていただきますので、<br/>
                            今しばらくお待ちください。<br/>
                            <span className="text-xs text-gray-400 font-mono block mt-4">
                                {`> Auto-reply mail has been sent.`}<br/>
                                {`> We will contact you shortly.`}
                            </span>
                        </p>

                        <Link href="/" className="inline-flex items-center gap-3 bg-[#1e3a5f] text-white px-10 py-4 font-mono text-sm tracking-widest hover:bg-[#2563eb] transition-colors shadow-lg">
                            <ArrowLeft size={16} /> [ RETURN_HOME ]
                        </Link>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
