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

    // メニュー展開時にスクロールをロック
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-[10000] transition-all duration-300 border-b",
                scrolled || isOpen || pathname !== '/'
                    ? "bg-white/90 backdrop-blur-md py-4 border-slate-200" 
                    : "bg-transparent py-6 border-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                
                {/* Logo */}
                <Link href="/" className="relative z-50 group" onClick={() => isOpen && setIsOpen(false)}>
                    <span className={cn(
                        "text-xl md:text-2xl font-bold tracking-widest transition-colors text-slate-900",
                        // Always dark text for white background theme
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
                                "text-sm font-medium tracking-widest transition-colors font-mono",
                                pathname === item.path ? "text-cyan-600" : "text-slate-600 hover:text-cyan-600"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact#form-start"
                        className={cn(
                            "px-6 py-2 text-xs font-bold tracking-widest rounded-sm transition-colors border font-mono",
                            "bg-slate-900 text-white border-slate-900 hover:bg-cyan-600 hover:border-cyan-600"
                        )}
                    >
                        CONTACT / 相談
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "md:hidden relative z-50 p-2 transition-colors text-slate-900"
                    )}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="fixed inset-0 bg-white z-[10001] flex flex-col justify-center px-8 md:hidden"
                    >
                        
                        {/* Close Button (Absolute position for easy access) */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 p-2 text-slate-900 hover:text-cyan-600 transition-colors z-50"
                        >
                            <X size={32} />
                        </button>

                        <div className="space-y-8 relative z-10">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.path}
                                    initial={{ opacity: 0, x: -50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                                >
                                    <Link
                                        href={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className="group flex items-end gap-4"
                                    >
                                        <span className="text-xs font-mono text-cyan-600 mb-2 tracking-widest">
                                            0{index + 1}
                                        </span>
                                        <span className={cn(
                                            "text-4xl font-serif font-bold tracking-tighter transition-all duration-300 group-hover:text-cyan-600 group-hover:pl-4",
                                            pathname === item.path ? "text-cyan-600" : "text-slate-900"
                                        )}>
                                            {item.name}
                                        </span>
                                    </Link>
                                    <div className="h-[1px] w-full bg-slate-100 mt-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                </motion.div>
                            ))}
                            
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="pt-8 border-t border-slate-100"
                            >
                        
                        <Link
                            href="/contact#form-start"
                            className="text-xl font-mono font-bold tracking-widest text-white bg-slate-900 px-8 py-3 mt-4 hover:bg-cyan-600 transition-colors block text-center"
                        >
                            CONTACT / 相談
                        </Link>
                            </motion.div>
                        </div>

                        {/* Background Deco */}
                        <div className="absolute bottom-[-10%] right-[-10%] text-[30vh] font-cinzel font-bold text-slate-50 pointer-events-none select-none leading-none">
                            O2
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
