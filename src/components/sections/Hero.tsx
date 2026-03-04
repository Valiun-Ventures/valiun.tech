"use client";

import { Button } from "@/components/ui/Button";
import { m, useMotionTemplate, useMotionValue, animate, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Bot, Cloud, Zap, Sparkles, Binary } from "lucide-react";
import { MouseEvent, useEffect, useState } from "react";

export function Hero() {
    const [isMounted, setIsMounted] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smoothed mouse values for parallax effects
    const springConfig = { damping: 25, stiffness: 150 };
    const smoothX = useSpring(mouseX, springConfig);
    const smoothY = useSpring(mouseY, springConfig);

    useEffect(() => {
        setIsMounted(true);
        if (typeof window !== "undefined") {
            mouseX.set(window.innerWidth / 2);
            mouseY.set(window.innerHeight / 2);
        }
    }, [mouseX, mouseY]);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // Parallax transforms for floating elements
    const rotateX = useTransform(smoothY, [0, 1000], [5, -5]);
    const rotateY = useTransform(smoothX, [0, 1500], [-5, 5]);

    const spotlightBackground = useMotionTemplate`
        radial-gradient(
            900px circle at ${mouseX}px ${mouseY}px,
            rgba(59, 130, 246, 0.12),
            transparent 80%
        )
    `;

    const card1X = useTransform(smoothX, [0, 1500], [20, -20]);
    const card1Y = useTransform(smoothY, [0, 1000], [20, -20]);
    const card2X = useTransform(smoothX, [0, 1500], [-30, 30]);
    const card2Y = useTransform(smoothY, [0, 1000], [-30, 30]);
    const badgeY = useTransform(smoothY, [0, 1000], [40, -40]);

    if (!isMounted) return <div className="min-h-screen bg-black" />;

    return (
        <section
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#030303] py-20 lg:py-0"
            onMouseMove={handleMouseMove}
        >
            {/* --- Background Layers --- */}

            {/* Dynamic Cursor Spotlight */}
            <m.div
                className="pointer-events-none absolute -inset-px opacity-100 transition duration-300 z-0"
                style={{
                    background: spotlightBackground,
                }}
            />

            {/* Mesh Gradient Bloom */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />

            {/* Grid Pattern */}
            <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Grain/Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            {/* --- Floating Elements (Desktop Only) --- */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none z-10">
                {/* Top Left Card */}
                <m.div
                    style={{ x: card1X, y: card1Y, rotateX, rotateY }}
                    className="absolute top-[20%] left-[10%] p-4 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md"
                >
                    <div className="flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                            <Bot className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-semibold text-white/70 uppercase tracking-widest">Agentic AI</span>
                    </div>
                </m.div>

                {/* Bottom Right Card */}
                <m.div
                    style={{ x: card2X, y: card2Y, rotateX, rotateY }}
                    className="absolute bottom-[25%] right-[12%] p-5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md"
                >
                    <div className="flex items-center gap-3">
                        <div className="size-10 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                            <Cloud className="w-6 h-6" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold text-purple-400 uppercase tracking-tighter">Infrastructure</span>
                            <span className="text-sm font-bold text-white tracking-tight">Cloud Native</span>
                        </div>
                    </div>
                </m.div>

                {/* Center Top Badge */}
                <m.div
                    style={{ y: badgeY }}
                    className="absolute top-[15%] right-[25%] p-3 rounded-xl bg-white/[0.01] border border-white/5 backdrop-blur-sm"
                >
                    <Binary className="w-4 h-4 text-blue-500/40" />
                </m.div>
            </div>

            {/* --- Main Content --- */}
            <div className="relative z-20 w-full max-w-7xl px-6 lg:px-12 mx-auto">
                <div className="flex flex-col items-center text-center">

                    {/* Top Pill */}
                    <m.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="group relative inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-xl hover:bg-white/[0.06] transition-all cursor-default"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-400/80">
                            Enterprise Intelligence Systems
                        </span>
                        <Sparkles className="w-3.5 h-3.5 text-blue-400/50 group-hover:rotate-12 transition-transform" />
                    </m.div>

                    {/* Heading */}
                    <m.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-8xl lg:text-9xl font-black tracking-tighter text-white mb-8 leading-[0.9] md:leading-[0.85]"
                    >
                        Engineering <br className="hidden md:block" />
                        the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 animate-gradient-x">Future.</span>
                    </m.h1>

                    {/* Subheading */}
                    <m.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto mb-12 leading-relaxed font-light"
                    >
                        Valiun Tech delivers <span className="text-white font-medium">Agentic AI</span> and
                        <span className="text-white font-medium"> Cloud Architectures</span> that transform
                        enterprise complexity into competitive advantage.
                    </m.p>

                    {/* Actions */}
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-5 items-center justify-center w-full"
                    >
                        <Button
                            size="lg"
                            href="/contact"
                            className="w-full sm:w-auto px-10 py-7 text-lg rounded-2xl bg-blue-600 hover:bg-blue-50 shadow-[0_20px_50px_rgba(59,130,246,0.25)] hover:shadow-[0_20px_50px_rgba(59,130,246,0.4)] transition-all group overflow-hidden relative"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start Your Transformation
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            href="/services"
                            className="w-full sm:w-auto px-10 py-7 text-lg rounded-2xl border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all font-medium"
                        >
                            Explore Our Stack
                        </Button>
                    </m.div>

                    {/* Trust Indicators (Subtle) */}
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 2 }}
                        className="mt-20 pt-10 border-t border-white/5 w-full flex flex-col items-center"
                    >
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.4em] mb-8">
                            Trusted in Enterprise Environments
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:opacity-50 transition-all duration-700">
                            <div className="flex items-center gap-2 text-white font-bold tracking-tighter text-xl">
                                <Zap className="w-6 h-6 fill-current text-blue-500" /> VALIUN CLOUD
                            </div>
                            <div className="flex items-center gap-2 text-white font-bold tracking-tighter text-xl">
                                <Cloud className="w-6 h-6 fill-current text-purple-500" /> AZURE PARTNER
                            </div>
                            <div className="flex items-center gap-2 text-white font-bold tracking-tighter text-xl">
                                <Bot className="w-6 h-6 fill-current text-blue-400" /> AI CORE
                            </div>
                        </div>
                    </m.div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#030303] to-transparent z-10" />
        </section>
    );
}
