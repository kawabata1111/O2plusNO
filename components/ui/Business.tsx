'use client';

import { motion } from 'framer-motion';
import { ArrowRight, AlertTriangle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import DecodeText from './DecodeText';

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
        <section className="section-padding bg-gradient-to-br from-cyan-50 via-blue-50 to-white text-slate-800 relative overflow-hidden">
            

            <div className="max-w-7xl mx-auto relative z-10">
                
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 border-b border-slate-200 pb-8 gap-6"
                >
                    <div>
                        <h2 className="text-cyan-600 text-[10px] font-bold tracking-[0.4em] uppercase mb-4 font-cinzel">
                            // <DecodeText text="OUR BUSINESS" />
                        </h2>
                        <p className="text-3xl md:text-5xl font-bold tracking-tight leading-tight font-serif text-slate-900">
                            <DecodeText text="CREATE VALUE" className="block font-cinzel" />
                            <span className="text-slate-300">
                                <DecodeText text="MULTIFACETED" className="font-cinzel" />
                            </span>
                        </p>
                        <p className="text-xs md:text-sm font-bold text-slate-500 tracking-wider mt-4 font-sans">
                            多角的な視点で、価値を創造する。
                        </p>
                    </div>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
                    {businesses.map((item, index) => (
                        <div key={index} className="group relative">
                            {/* Prism Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                className="bg-white border border-slate-200 h-full p-1 relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-cyan-200"
                                style={{
                                    clipPath: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)'
                                }}
                            >
                                {/* Image */}
                                <div className="relative h-48 md:h-56 w-full overflow-hidden mb-6 bg-slate-100">
                                     <Image 
                                        src={item.image} 
                                        alt={item.title} 
                                        fill 
                                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                                    />
                                    <div className="absolute top-2 right-2 bg-slate-900 text-white text-[10px] px-2 py-1 font-cinzel">
                                        {item.id}
                                    </div>
                                </div>

                                <div className="px-6 pb-16 md:pb-20">
                                    <p className="text-[10px] font-cinzel text-cyan-600 mb-2 tracking-widest uppercase font-bold">
                                        {item.subtitle}
                                    </p>
                                    <h3 className="text-xl font-bold mb-1 group-hover:text-cyan-700 transition-colors font-cinzel text-slate-900">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs font-bold text-slate-500 mb-6 border-b border-slate-100 pb-4 inline-block font-sans">
                                        {item.jpTitle}
                                    </p>
                                    
                                    <div className="space-y-4 mb-8 text-xs md:text-sm text-slate-600 font-sans leading-relaxed">
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

                                    <Link 
                                        href={item.link} 
                                        className="absolute bottom-0 right-0 bg-slate-900 text-white px-6 py-3 font-cinzel text-[10px] md:text-xs hover:bg-cyan-600 transition-colors flex items-center gap-2"
                                        style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }}
                                    >
                                        VIEW DETAILS <ArrowRight size={12} />
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
