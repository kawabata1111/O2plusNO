'use client';

import { useInView } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function DecodeText({ text, className }: { text: string, className?: string }) {
    const [display, setDisplay] = useState("");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

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
    }, [isInView, text]);

    return <span ref={ref} className={className}>{display}</span>;
}
