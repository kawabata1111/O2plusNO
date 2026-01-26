'use client';

import PageHeader from '@/components/ui/PageHeader';
import ContactSection from '@/components/ui/Contact';
import { motion } from 'framer-motion';

export default function CompanyPage() {
    return (
        <main>
            <PageHeader 
                title="会社概要" 
                enTitle="COMPANY PROFILE"
                subtitle="03_COMPANY" 
            />
            
            <section className="py-40 bg-gradient-to-br from-cyan-50 via-blue-50 to-white text-slate-900 relative overflow-hidden">

                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white/60 backdrop-blur-sm border border-slate-200 p-8 md:p-12 relative shadow-sm rounded-sm"
                    >
                        {/* Decorative Markers */}
                        <div className="absolute top-0 left-0 w-2 h-2 bg-cyan-500" />
                        <div className="absolute top-0 right-0 w-2 h-2 bg-cyan-500" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 bg-cyan-500" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyan-500" />


                        <dl className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-y-8">
                            {[
                                { dt: '社名', dd: '合同会社O2plusNO' },
                                { dt: '代表者', dd: '大野 研吾' },
                                { dt: '設立', dd: '2017年10月11日' },
                                { dt: '資本金', dd: '200万円 (2026年1月6日現在)' },
                                { dt: '所在地', dd: '〒351-0014 埼玉県朝霞市膝折町1-1-53' },
                                { dt: '連絡先', dd: 'TEL: 050-5527-6238 / Email: o2plusno20171011@gmail.com' },
                                { dt: '従業員数', dd: '0名 (業務委託者数 25名) ※2026年1月6日現在' },
                                { dt: '事業内容', dd: '輸出物販事業、各種コンサルティング業務、営業代行事業' },
                                { dt: '主要取引銀行', dd: 'みずほ銀行' },
                                { dt: '許認可', dd: '古物商許可番号 第431040060720号' },
                            ].map((item, index) => (
                                <div key={index} className="contents group">
                                    <dt className="text-sm font-bold text-slate-400 font-cinzel flex items-center gap-2">
                                        <span className="w-1 h-1 bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.dt}
                                    </dt>
                                    <dd className="text-base font-medium text-slate-900 border-b border-slate-100 pb-2 group-hover:border-cyan-500 transition-colors font-sans">
                                        {item.dd}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </motion.div>

                     <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-24 relative"
                    >
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
                            <h2 className="text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap font-cinzel text-slate-900">ACCESS / <span className="text-cyan-600 font-sans">アクセス</span></h2>
                        </div>
                        
                        {/* Map Container with Tech Overlay */}
                        <div className="w-full h-[400px] bg-slate-100 relative overflow-hidden group border border-slate-200">
                             <iframe
                                src="https://www.google.com/maps?q=埼玉県朝霞市膝折町1-1-53&output=embed&z=17" 
                                width="100%" 
                                height="100%" 
                                style={{border:0, filter: 'grayscale(100%) contrast(1.2) opacity(0.8)'}} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="transition-opacity duration-500"
                            />
                            
                            {/* Target UI Overlay */}
                            <div className="absolute inset-0 pointer-events-none border border-cyan-500/20">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-cyan-500 rounded-full flex items-center justify-center">
                                    <div className="w-1 h-1 bg-cyan-500 rounded-full" />
                                </div>
                                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-cyan-500/20" />
                                <div className="absolute top-0 left-1/2 h-full w-[1px] bg-cyan-500/20" />
                            </div>
                        </div>
                         <p className="mt-6 text-sm font-cinzel text-slate-500 border-l-2 border-cyan-500 pl-4">
                            〒351-0014 埼玉県朝霞市膝折町1-1-53
                        </p>
                    </motion.div>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
