'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'TOP', path: '/' },
    { name: 'PHILOSOPHY', path: '/#philosophy' },
    { name: 'BUSINESS', path: '/business' },
    { name: 'COMPANY', path: '/company' },
];

export default function Header() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // ページ遷移時にメニューを閉じる
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-[10000] transition-all duration-300 border-b border-transparent",
                scrolled || pathname !== '/' 
                    ? "bg-white/90 backdrop-blur-md py-4 border-gray-200" 
                    : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                
                {/* Logo */}
                <Link href="/" className="relative z-50 group">
                    <span className={cn(
                        "text-xl md:text-2xl font-cinzel font-bold tracking-widest transition-colors",
                        scrolled || pathname !== '/' ? "text-[#1e1e1e]" : "text-white"
                    )}>
                        O2plusNO INC.
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={cn(
                                "text-sm font-medium tracking-widest transition-colors hover:text-[#d4a853] font-mono",
                                pathname === item.path ? "text-[#d4a853]" : (scrolled || pathname !== '/' ? "text-[#1e1e1e]" : "text-white/80")
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={cn(
                            "px-6 py-2 text-xs font-bold tracking-widest rounded-sm transition-colors border font-mono",
                            scrolled || pathname !== '/' 
                                ? "bg-[#1e1e1e] text-white border-[#1e1e1e] hover:bg-[#d4a853] hover:border-[#d4a853]" 
                                : "bg-white text-[#1e1e1e] border-white hover:bg-[#d4a853] hover:text-white hover:border-[#d4a853]"
                        )}
                    >
                        CONTACT / 相談
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "md:hidden relative z-50 p-2 transition-colors",
                        isOpen ? "text-[#1e1e1e]" : (scrolled || pathname !== '/' ? "text-[#1e1e1e]" : "text-white")
                    )}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        {/* Tech Grid Background for Mobile Menu */}
                        <div className="absolute inset-0 pointer-events-none opacity-[0.05]" 
                            style={{ 
                                backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
                                backgroundSize: '40px 40px' 
                            }} 
                        />

                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={cn(
                                    "text-2xl font-serif font-bold tracking-widest transition-colors hover:text-[#d4a853]",
                                    pathname === item.path ? "text-[#d4a853]" : "text-[#1e1e1e]"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        
                        <Link
                            href="/contact"
                            className="text-xl font-mono font-bold tracking-widest text-white bg-[#1e1e1e] px-8 py-3 mt-4 hover:bg-[#d4a853] transition-colors"
                        >
                            CONTACT / 相談
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
