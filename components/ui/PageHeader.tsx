'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const DecodeText = ({ text, className }: { text: string, className?: string }) => {
    const [display, setDisplay] = useState("");
    const ref = useRef(null);

    useEffect(() => {
        let iteration = 0;
        const interval = setInterval(() => {
            setDisplay(
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return letters[Math.floor(Math.random() * 26)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(interval);
            }

            iteration += 1 / 3;
        }, 30);

        return () => clearInterval(interval);
    }, [text]);

    return <span ref={ref} className={className}>{display}</span>;
};

interface PageHeaderProps {
    title: string;
    subtitle: string;
    enTitle: string;
}

export default function PageHeader({ title, subtitle, enTitle }: PageHeaderProps) {
    return (
        <section className="relative h-[40vh] md:h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-cyan-50 via-blue-50 to-white text-[#1e3a5f]">

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-1/4 left-10 w-1.5 h-1.5 bg-[#2563eb] animate-pulse" />
                <div className="absolute bottom-1/4 right-10 w-1.5 h-1.5 bg-[#2563eb] animate-pulse delay-700" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-gray-200 rounded-full opacity-30 animate-[spin_60s_linear_infinite]" />
            </div>

            <div className="relative z-10 text-center px-6 w-full max-w-4xl pt-12 md:pt-0">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="flex items-center justify-center gap-2 mb-4 md:mb-6">
                        <span className="h-[1px] w-6 md:w-8 bg-[#2563eb]" />
                        <p className="text-[#2563eb] font-bold tracking-[0.3em] uppercase text-[9px] md:text-xs font-mono">
                            {subtitle}
                        </p>
                        <span className="h-[1px] w-6 md:w-8 bg-[#2563eb]" />
                    </div>

                    <h1 className="text-4xl md:text-7xl font-bold tracking-tighter mb-4 leading-none font-sans uppercase">
                        <DecodeText text={enTitle} />
                    </h1>
                    
                    <p className="text-base md:text-lg font-bold text-gray-500 tracking-widest font-mono">
                        {title}
                    </p>
                </motion.div>

                {/* Tech Breadcrumb - Hidden on small mobile */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute bottom-4 md:bottom-8 left-0 w-full px-6 flex justify-between items-center text-[9px] font-mono text-gray-400 border-t border-gray-200 pt-4"
                >
                    <div className="flex gap-2">
                        <Link href="/" className="hover:text-[#2563eb] transition-colors">HOME</Link>
                        <span>/</span>
                        <span className="text-[#1e3a5f] truncate max-w-[150px]">{enTitle}</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}