'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
    { name: 'TOP', label: 'トップ', path: '/' },
    { name: 'PHILOSOPHY', label: '理念', path: '/#philosophy' },
    { name: 'BUSINESS', label: '事業', path: '/business' },
    { name: 'COMPANY', label: '会社', path: '/company' },
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

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Lock body scroll when menu is open
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
                "fixed top-0 left-0 right-0 z-[10000] transition-all duration-500 ease-in-out",
                isOpen 
                    ? "bg-transparent border-transparent" // When menu open, transparent to show dark overlay
                    : (scrolled || pathname !== '/' 
                        ? "bg-white/80 backdrop-blur-md py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-white/20" 
                        : "bg-transparent py-8 border-b border-transparent")
            )}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                
                {/* Logo */}
                <Link href="/" className="relative z-50 group" onClick={() => isOpen && setIsOpen(false)}>
                    <div className="flex flex-col leading-none">
                        <span className={cn(
                            "text-xl md:text-2xl font-serif font-bold tracking-[0.1em] transition-colors duration-300",
                            isOpen ? "text-white" : "text-slate-900" // White when menu open
                        )}>
                            O2plusNO
                        </span>
                        <span className={cn(
                            "text-[9px] tracking-[0.3em] font-sans uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 -mt-1",
                            "text-slate-500"
                        )}>
                            Beyond Limits
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className="relative group py-2"
                        >
                            <span className={cn(
                                "text-xs font-cinzel font-semibold tracking-widest transition-colors duration-300",
                                pathname === item.path ? "text-cyan-600" : "text-slate-600 group-hover:text-cyan-600"
                            )}>
                                {item.name}
                            </span>
                            {/* Hover Underline */}
                            <span className={cn(
                                "absolute bottom-0 left-0 w-full h-[1px] bg-cyan-400 transform scale-x-0 transition-transform duration-300 origin-right group-hover:origin-left group-hover:scale-x-100",
                                pathname === item.path && "scale-x-100 bg-cyan-600"
                            )} />
                        </Link>
                    ))}
                    
                    {/* Contact Button */}
                    <Link
                        href="/contact#form-start"
                        className="group relative px-6 py-2 overflow-hidden rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                    >
                        <div className="absolute inset-0 border border-slate-200 rounded-full group-hover:border-cyan-400 transition-colors duration-300" />
                        <div className="absolute inset-0 bg-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        <div className="relative flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                            <span className="text-[10px] font-bold tracking-widest text-slate-800 font-cinzel group-hover:text-cyan-700 transition-colors">
                                CONTACT
                            </span>
                        </div>
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={cn(
                        "md:hidden relative z-50 p-2 transition-colors",
                        "text-slate-900 hover:text-cyan-600" // Always dark text
                    )}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="fixed inset-0 bg-white z-[9999] flex flex-col justify-center px-8 md:hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 p-2 text-slate-900 hover:text-cyan-600 transition-colors z-50"
                        >
                            <X size={32} />
                        </button>

                        <div className="flex flex-col space-y-8">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                >
                                    <Link
                                        href={item.path}
                                        onClick={() => setIsOpen(false)}
                                        className="group flex items-baseline justify-between border-b border-slate-100 pb-4"
                                    >
                                        <span className={cn(
                                            "text-3xl font-cinzel font-bold tracking-wider transition-colors",
                                            pathname === item.path ? "text-cyan-600" : "text-slate-900 group-hover:text-cyan-600"
                                        )}>
                                            {item.name}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                            
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="pt-8"
                            >
                                <Link
                                    href="/contact#form-start"
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full text-center py-4 border border-cyan-600 text-cyan-600 font-cinzel tracking-[0.2em] text-sm hover:bg-cyan-600 hover:text-white transition-all rounded-sm"
                                >
                                    CONTACT
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
