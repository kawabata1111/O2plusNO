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
                <p className="mb-6">
                    eBayを活用したグローバルな物販事業を展開しています。<br/>
                    「日本の価値を世界へ」をテーマに、主に以下の2つの軸で事業を行っています。
                </p>
                <ul className="space-y-4 mb-6">
                    <li className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-[#d4a853] mt-1 flex-shrink-0" />
                        <span>
                            <strong className="block text-[#1e1e1e]">日本製中古品の輸出</strong>
                            <span className="text-sm text-gray-500">主に中古カメラなどの精密機器を中心に、品質の高い日本製品を海外市場へ届けています。</span>
                        </span>
                    </li>
                    <li className="flex items-start gap-3">
                        <CheckCircle size={18} className="text-[#d4a853] mt-1 flex-shrink-0" />
                        <span>
                            <strong className="block text-[#1e1e1e]">アメリカ国内物販</strong>
                            <span className="text-sm text-gray-500">eBayのプラットフォームを最大限に活用し、米国国内での流通・販売も実施しています。</span>
                        </span>
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
                <p className="mb-6">
                    在宅ワークに特化したコンサルティングを<strong className="text-[#d4a853]">【 完全無料 】</strong>で提供しています。<br/>
                    eBay物販やアフィリエイトを応用したポイ活など、スキルゼロからでも自立できるノウハウを指導。<br/>
                    これまでに<strong className="border-b border-[#d4a853]">累計2,500名以上</strong>の方をサポートしてきました。
                </p>
                <div className="bg-gray-50 p-6 border border-gray-200 mb-6 text-sm">
                    <p className="font-bold mb-2">無料相談実施中</p>
                    <p className="text-gray-600 mb-4">
                        初期費用などは一切かかりません。まずはお気軽にご相談ください。
                    </p>
                    <div className="flex items-start gap-2 text-red-500 text-xs bg-red-50 p-3 border border-red-100">
                        <AlertTriangle size={14} className="mt-0.5 flex-shrink-0" />
                        <p>
                            <strong>注意喚起：</strong><br/>
                            最近、弊社の社名を使用したネガティブマーケティングが発生しております。<br/>
                            悪質なサービスや詐欺に誘導される可能性があるため、不審な記事にはご注意ください。
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
                <p className="mb-6">
                    代表自身の<strong className="text-[#1e1e1e]">元SEとしての経験</strong>を活かし、SE業界専門の営業代理を行っています。<br/>
                    業界20年以上の「1次請け企業」と協業し、以下のサービスを展開中です。
                </p>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-4 shadow-sm border border-gray-100">
                        <h4 className="font-bold text-[#1e1e1e] mb-2 border-l-2 border-[#d4a853] pl-3">未経験SEサービス</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            SE業界未経験の方でも、全くスキルのない状態から<strong className="text-[#d4a853]">正社員SE</strong>を目指せるキャリアパスを提供します。
                        </p>
                    </div>
                    <div className="bg-white p-4 shadow-sm border border-gray-100">
                        <h4 className="font-bold text-[#1e1e1e] mb-2 border-l-2 border-[#d4a853] pl-3">フリーランスSES</h4>
                        <p className="text-xs text-gray-500 leading-relaxed">
                            現役SEの方に<strong className="text-[#d4a853]">「1次請け」と直接契約</strong>できるルートをご案内。<br/>
                            無駄な仲介手数料を省き、年収の飛躍的な向上を支援します。
                        </p>
                    </div>
                </div>
                <p className="text-sm text-gray-500">
                    どちらも無料でご相談いただけます。キャリアアップを目指す方はぜひお問い合わせください。
                </p>
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
                {/* Tech Grid Background */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                    style={{ 
                        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
                        backgroundSize: '40px 40px' 
                    }} 
                />

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
