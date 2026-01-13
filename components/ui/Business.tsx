'use client';

import { motion } from 'framer-motion';
import { Globe, Home, Users, ArrowRight, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const businesses = [
    {
        id: "01",
        title: "Global E-commerce",
        jpTitle: "輸出物販事業",
        subtitle: "Global E-commerce",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
        desc: [
            "eBayを活用したグローバルな物販事業。",
            "日本製品の高品質さを世界へ届け、価値を創出。"
        ],
        details: "日本製の中古カメラを中心に海外へ輸出を行うほか、eBayを活用したアメリカ国内物販も実施。",
        link: "/business#section-01"
    },
    {
        id: "02",
        title: "Consulting (Free)",
        jpTitle: "在宅ワークコンサル",
        subtitle: "Consulting (Free)",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop",
        desc: [
            "【 完全無料 】在宅ワーク特化コンサルティング。",
            "スキルゼロからでも始められるノウハウを指導。"
        ],
        details: "累計2,500名以上のサポート実績。初期費用一切なし。",
        alert: "※社名を使用したネガティブマーケティングにご注意ください。",
        link: "/business#section-02"
    },
    {
        id: "03",
        title: "Sales Agency for SE",
        jpTitle: "営業代理事業",
        subtitle: "Sales Agency for SE",
        image: "/images/business-sales.png",
        desc: [
            "SE業界専門の営業代理サービス。",
            "業界20年以上の「1次請け企業」と協業。"
        ],
        details: "未経験からの正社員SEデビューや、フリーランスSEの年収アップを無料で支援。",
        link: "/business#section-03"
    }
];

export default function Business() {
    return (
        <section className="py-40 bg-white text-[#1e1e1e] relative overflow-hidden">
            
            {/* Tech Grid Background */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                style={{ 
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' 
                }} 
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex justify-between items-end mb-32 border-b border-gray-200 pb-8"
                >
                    <div>
                        <h2 className="text-[#d4a853] text-xs font-bold tracking-[0.4em] uppercase mb-4 font-mono">
                            // 02_BUSINESS_DOMAIN
                        </h2>
                        <p className="text-4xl md:text-5xl font-bold tracking-tight leading-none mb-2">
                            CREATE VALUE<br/>
                            <span className="text-gray-300">MULTIFACETED</span>
                        </p>
                        <p className="text-sm font-bold text-gray-500 tracking-wider">
                            多角的な視点で、価値を創造する。
                        </p>
                    </div>
                    <div className="hidden md:block text-right font-mono text-xs text-gray-400">
                        <p>STATUS: ACTIVE</p>
                        <p>NODES: 03</p>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {businesses.map((item, index) => (
                        <div key={index} className="group relative">
                            {/* Prism Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="bg-gray-50 border border-gray-200 h-full p-1 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                                style={{
                                    clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)'
                                }}
                            >
                                {/* Prism Border Effect on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 z-20 pointer-events-none" />
                                
                                {/* Image */}
                                <div className="relative h-48 w-full overflow-hidden mb-6 bg-gray-200">
                                     <Image 
                                        src={item.image} 
                                        alt={item.title} 
                                        fill 
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                                    />
                                    <div className="absolute top-2 right-2 bg-black text-white text-[10px] px-2 py-1 font-mono">
                                        {item.id}
                                    </div>
                                </div>

                                <div className="px-6 pb-12">
                                    <p className="text-[10px] font-mono text-[#d4a853] mb-2 tracking-widest uppercase">
                                        {item.subtitle}
                                    </p>
                                    <h3 className="text-xl font-bold mb-1 group-hover:text-[#d4a853] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm font-bold text-gray-500 mb-6 border-b border-gray-200 pb-4 inline-block">
                                        {item.jpTitle}
                                    </p>
                                    
                                    <div className="space-y-4 mb-8 text-sm text-gray-600 font-sans leading-relaxed">
                                        {item.desc.map((line, i) => (
                                            <p key={i}>{line}</p>
                                        ))}
                                    </div>

                                    {item.alert && (
                                        <div className="flex items-start gap-2 text-red-500 text-[10px] bg-red-50 p-3 mb-6 font-sans border border-red-100">
                                            <AlertTriangle size={12} className="shrink-0 mt-0.5" />
                                            <span>{item.alert}</span>
                                        </div>
                                    )}

                                    {item.link && (
                                        <Link 
                                            href={item.link} 
                                            className="absolute bottom-0 right-0 bg-[#1e1e1e] text-white px-6 py-3 font-mono text-xs hover:bg-[#d4a853] transition-colors flex items-center gap-2"
                                            style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }}
                                        >
                                            詳細を見る / VIEW <ArrowRight size={12} />
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}