'use client';

import PageHeader from '@/components/ui/PageHeader';
import ContactSection from '@/components/ui/Contact';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

const businesses = [
    {
        id: "01",
        enTitle: "Global E-commerce",
        jpTitle: "輸出物販事業",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        description: (
            <>
                <p className="mb-8 font-light leading-relaxed">
                    eBayを活用したグローバルな物販事業を展開しています。<br/>
                    「日本の価値を世界へ」をテーマに、主に以下の2つの軸で事業を行っています。
                </p>
                <ul className="space-y-6 mb-8">
                    <li className="group">
                        <div className="flex items-start gap-4">
                            <span className="w-1 h-12 bg-[#d4a853] flex-shrink-0 transition-transform group-hover:scale-y-110" />
                            <div>
                                <strong className="block text-[#1e1e1e] text-lg font-bold mb-1 tracking-tight">日本製中古品の輸出</strong>
                                <span className="text-sm text-gray-500 font-light">主に中古カメラなどの精密機器を中心に、品質の高い日本製品を海外市場へ届けています。</span>
                            </div>
                        </div>
                    </li>
                    <li className="group">
                        <div className="flex items-start gap-4">
                            <span className="w-1 h-12 bg-[#d4a853] flex-shrink-0 transition-transform group-hover:scale-y-110" />
                            <div>
                                <strong className="block text-[#1e1e1e] text-lg font-bold mb-1 tracking-tight">アメリカ国内物販</strong>
                                <span className="text-sm text-gray-500 font-light">eBayのプラットフォームを最大限に活用し、米国国内での流通・販売も実施しています。</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </>
        )
    },
    {
        id: "02",
        enTitle: "Consulting (Free)",
        jpTitle: "在宅ワークコンサル事業",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop",
        link: "https://o2plusno.com/product/",
        description: (
            <>
                <p className="mb-8 font-light leading-relaxed">
                    在宅ワークに特化したコンサルティングを<strong className="text-[#d4a853]">【 完全無料 】</strong>で提供しています。<br/>
                    eBay物販やアフィリエイトを応用したポイ活など、スキルゼロからでも自立できるノウハウを指導。<br/>
                    これまでに<strong className="border-b-2 border-[#d4a853] pb-1">累計2,500名以上</strong>の方をサポートしてきました。
                </p>
                <div className="bg-gray-50 p-8 border-l-4 border-[#1e1e1e] mb-8 relative">
                    <p className="font-bold text-[#1e1e1e] mb-2 font-mono text-xs tracking-widest">// FREE_CONSULTATION</p>
                    <p className="text-gray-600 mb-6 text-sm">
                        初期費用などは一切かかりません。まずはお気軽にご相談ください。
                    </p>
                    <div className="pt-6 border-t border-gray-200">
                        <p className="text-red-600 text-xs font-bold leading-relaxed">
                            <span className="inline-block px-2 py-0.5 bg-red-600 text-white mr-2">ATTENTION</span><br/>
                            最近、弊社の社名を使用したネガティブマーケティングが発生しております。悪質なサービスや詐欺などに誘導される可能性があるため、不審な記事にはご注意ください。
                        </p>
                    </div>
                </div>
            </>
        )
    },
    {
        id: "03",
        enTitle: "Sales Agency for SE",
        jpTitle: "営業代理事業 (SE業界専門)",
        image: "/images/business-sales.png",
        description: (
            <>
                <p className="mb-8 font-light leading-relaxed">
                    代表自身の<strong className="text-[#1e1e1e] font-bold">元SEとしての経験</strong>を活かし、SE業界専門の営業代理を行っています。<br/>
                    業界20年以上の「1次請け企業」と協業し、以下のサービスを展開中です。
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 shadow-sm border border-gray-100 group hover:border-[#d4a853] transition-colors">
                        <p className="text-[#d4a853] font-mono text-[10px] mb-2 tracking-widest">TYPE_A</p>
                        <h4 className="font-bold text-[#1e1e1e] text-lg mb-2">未経験SEサービス</h4>
                        <p className="text-xs text-gray-500 leading-relaxed font-light">
                            SE業界未経験の方でも、全くスキルのない状態から正社員SEを目指せるキャリアパスを提供します。
                        </p>
                    </div>
                    <div className="bg-white p-6 shadow-sm border border-gray-100 group hover:border-[#d4a853] transition-colors">
                        <p className="text-[#d4a853] font-mono text-[10px] mb-2 tracking-widest">TYPE_B</p>
                        <h4 className="font-bold text-[#1e1e1e] text-lg mb-2">フリーランスSES</h4>
                        <p className="text-xs text-gray-500 leading-relaxed font-light">
                            現役SEの方に「1次請け」と直接契約できるルートをご案内。仲介手数料を省き、年収向上を支援します。
                        </p>
                    </div>
                </div>
            </>
        )
    }
];

export default function BusinessPage() {
    return (
        <main>
            <PageHeader 
                title="事業内容" 
                enTitle="OUR BUSINESS"
                subtitle="02_BUSINESS" 
            />
            
            <section className="bg-white text-[#1e1e1e] relative overflow-hidden">

                <div className="max-w-7xl mx-auto px-6 py-20 md:py-40 relative z-10">
                    <div className="space-y-32">
                        {businesses.map((item, index) => (
                            <motion.div 
                                key={index}
                                id={`section-${item.id}`}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center scroll-mt-32`}
                            >
                                {/* Image Side */}
                                <div className="w-full lg:w-1/2 relative group">
                                    <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden shadow-2xl border-4 border-white">
                                        <Image
                                            src={item.image}
                                            alt={item.jpTitle}
                                            fill
                                            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                        />
                                        
                                        {/* Tech Overlay */}
                                        <div className="absolute inset-0 border border-white/20 pointer-events-none">
                                            <div className="absolute top-4 left-4 w-2 h-2 bg-[#d4a853]" />
                                            <div className="absolute bottom-4 right-4 w-2 h-2 bg-[#d4a853]" />
                                        </div>
                                    </div>
                                    
                                    {/* Background Decor */}
                                    <div className={`absolute top-10 ${index % 2 === 1 ? '-left-10' : '-right-10'} w-full h-full border border-gray-200 -z-10 hidden md:block`} />
                                </div>

                                {/* Text Side */}
                                <div className="w-full lg:w-1/2">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-[#d4a853] font-mono text-sm tracking-widest">{item.id}</span>
                                        <div className="h-[1px] flex-grow bg-gray-200" />
                                        <span className="text-gray-400 font-mono text-xs tracking-widest uppercase">Business_Domain</span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-2">{item.enTitle}</h2>
                                    <p className="text-lg font-bold text-gray-500 mb-8 pb-4 border-b border-gray-100 inline-block">
                                        {item.jpTitle}
                                    </p>

                                    <div className="text-gray-600 leading-loose font-sans">
                                        {item.description}
                                    </div>

                                    {item.link && (
                                        <div className="mt-8">
                                            <a 
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 bg-[#1e1e1e] text-white px-8 py-4 text-sm font-mono tracking-widest hover:bg-[#d4a853] transition-colors"
                                            >
                                                詳細LPを見る <ArrowRight size={16} />
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <ContactSection />
        </main>
    );
}
