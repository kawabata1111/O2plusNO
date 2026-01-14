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
            
            <section className="py-40 bg-white text-[#1e1e1e] relative overflow-hidden">
                {/* Tech Grid Background */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                    style={{ 
                        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
                        backgroundSize: '40px 40px' 
                    }} 
                />

                <div className="max-w-4xl mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-gray-50 border border-gray-200 p-8 md:p-12 relative"
                    >
                        {/* Decorative Markers */}
                        <div className="absolute top-0 left-0 w-2 h-2 bg-[#d4a853]" />
                        <div className="absolute top-0 right-0 w-2 h-2 bg-[#d4a853]" />
                        <div className="absolute bottom-0 left-0 w-2 h-2 bg-[#d4a853]" />
                        <div className="absolute bottom-0 right-0 w-2 h-2 bg-[#d4a853]" />

                        <div className="flex items-center gap-2 mb-12">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <h2 className="text-xs font-mono tracking-widest text-gray-500 uppercase">
                                DATA_FILE: CORPORATE_INFO
                            </h2>
                        </div>

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
                                    <dt className="text-sm font-bold text-gray-400 font-mono flex items-center gap-2">
                                        <span className="w-1 h-1 bg-[#d4a853] opacity-0 group-hover:opacity-100 transition-opacity" />
                                        {item.dt}
                                    </dt>
                                    <dd className="text-base font-medium text-[#1e1e1e] border-b border-gray-200 pb-2 group-hover:border-[#d4a853] transition-colors">
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
                            <h2 className="text-xl md:text-2xl font-bold tracking-tight whitespace-nowrap">ACCESS / <span className="text-[#d4a853]">アクセス</span></h2>
                            <div className="font-mono text-xs text-gray-400">COORDINATES: 35.788, 139.578</div>
                        </div>
                        
                        {/* Map Container with Tech Overlay */}
                        <div className="w-full h-[400px] bg-gray-100 relative overflow-hidden group">
                             <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.4728562725345!2d139.57861137635293!3d35.78873757255276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018ee46e6a6a625%3A0x6a6a6a6a6a6a6a6a!2zMzUxLTAwMTQg5Z-c546J55yM5pyd6Zye5biC6Iid5oqY55S677yR4oiS77yR4oiS77yV77yT!5e0!3m2!1sja!2sjp!4v1700000000000!5m2!1sja!2sjp" 
                                width="100%" 
                                height="100%" 
                                style={{border:0, filter: 'grayscale(100%) contrast(1.2)'}} 
                                allowFullScreen 
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                            />
                            
                            {/* Target UI Overlay */}
                            <div className="absolute inset-0 pointer-events-none border border-[#d4a853]/20">
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-[#d4a853] rounded-full flex items-center justify-center">
                                    <div className="w-1 h-1 bg-[#d4a853] rounded-full" />
                                </div>
                                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-[#d4a853]/20" />
                                <div className="absolute top-0 left-1/2 h-full w-[1px] bg-[#d4a853]/20" />
                            </div>
                        </div>
                         <p className="mt-6 text-sm font-mono text-gray-500 border-l-2 border-[#d4a853] pl-4">
                            〒351-0014 埼玉県朝霞市膝折町1-1-53
                        </p>
                    </motion.div>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
