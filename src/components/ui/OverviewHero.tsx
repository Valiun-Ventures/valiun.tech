"use client";

import { useRef, useEffect } from "react";
import { m, useMotionValue, useSpring } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";

interface OverviewHeroProps {
    title: string;
    description: string;
    badge: string;
    gradientFrom?: string;
    gradientTo?: string;
}

export function OverviewHero({
    title,
    description,
    badge,
    gradientFrom = "#3ca2fa",
    gradientTo = "#bc13fe"
}: OverviewHeroProps) {
    const containerRef = useRef<HTMLElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            // Calculate mouse relative to center of container
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section ref={containerRef} className="relative min-h-[60vh] flex flex-col items-center justify-center text-center overflow-hidden pt-32 pb-20">
            {/* Interactive Mouse Glow */}
            <m.div
                className="absolute w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-20 mix-blend-screen"
                style={{
                    x: springX,
                    y: springY,
                    backgroundColor: gradientTo,
                    left: '50%',
                    top: '50%',
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Ambient Background Glows */}
            <m.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.15, 0.25, 0.15]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] pointer-events-none"
                style={{ backgroundColor: gradientFrom }}
            />
            <m.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.05, 0.15, 0.05],
                    rotate: [0, 90, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="container relative z-10 max-w-4xl mx-auto px-4">
                <Reveal width="fit-content" className="mx-auto mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-mono uppercase tracking-[0.2em]" style={{ color: gradientFrom }}>
                        <span className="relative flex h-2 w-2">
                            <span
                                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                                style={{ backgroundColor: gradientFrom }}
                            />
                            <span
                                className="relative inline-flex rounded-full h-2 w-2"
                                style={{ backgroundColor: gradientFrom }}
                            />
                        </span>
                        {badge}
                    </div>
                </Reveal>

                <Reveal width="100%" delay={0.1}>
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1] mb-8 text-white">
                        <span className="text-transparent bg-clip-text bg-[length:200%_auto] animate-gradient" style={{ backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientTo}, ${gradientFrom})` }}>
                            {title.split(' ')[0]}
                        </span>
                        <br />
                        {title.split(' ').slice(1).join(' ')}
                    </h1>
                </Reveal>

                <Reveal width="100%" delay={0.2}>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-medium">
                        {description}
                    </p>
                </Reveal>
            </div>

            {/* Grid Background Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        </section>
    );
}
