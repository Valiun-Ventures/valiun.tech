"use client";

import { Button } from "@/components/ui/Button";
import { m, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MouseEvent, useEffect } from "react";

export function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth mouse movement
    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        animate(mouseX, clientX - left, { duration: 0.1, ease: "linear" }); // Add slight smoothing
        animate(mouseY, clientY - top, { duration: 0.1, ease: "linear" });
    }

    // Auto-animate gradient if mouse isn't moving (optional, or just init)
    useEffect(() => {
        // Initial position center
        if (typeof window !== "undefined") {
            mouseX.set(window.innerWidth / 2);
            mouseY.set(window.innerHeight / 2);
        }
    }, []);

    return (
        <section
            className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black"
            onMouseMove={handleMouseMove}
        >
            {/* Dynamic Cursor Spotlight - Full coverage */}
            <m.div
                className="pointer-events-none absolute -inset-px opacity-100 transition duration-300"
                style={{
                    background: useMotionTemplate`
                    radial-gradient(
                        800px circle at ${mouseX}px ${mouseY}px,
                        rgba(29, 78, 216, 0.15),
                        transparent 80%
                    )
                `,
                }}
            />

            {/* Secondary Color Follower (Lagging slightly for depth) - Optional premium feel */}
            <m.div
                className="pointer-events-none absolute -inset-px opacity-50"
                style={{
                    background: useMotionTemplate`
                    radial-gradient(
                        600px circle at ${mouseX}px ${mouseY}px,
                        rgba(147, 51, 234, 0.1),
                        transparent 80%
                    )
                `,
                }}
            />

            {/* Base Grid Pattern (Optional Texture) */}
            <div className="absolute inset-0 -z-30 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Ambient Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[128px]" />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-10 xl:px-16 mx-auto text-center">
                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                >
                    <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-xl shadow-[0_0_15px_rgba(59,130,246,0.3)]">
                        <span className="text-sm font-medium text-blue-400 tracking-wide">PIONEERING THE FUTURE</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mb-8">
                        Future of Tech <br className="hidden sm:inline" />
                        is <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 animate-gradient-x">Valiun.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                        We empower enterprises with <span className="text-gray-200">Agentic AI</span>, <span className="text-gray-200">Scalable Cloud Architectures</span>, and premium digital experiences.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button size="lg" href="/contact" className="h-14 px-10 text-lg rounded-full shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_50px_rgba(37,99,235,0.6)] transition-shadow">
                            Start Transformation
                            <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                        <Button size="lg" variant="outline" href="/services" className="h-14 px-10 text-lg rounded-full bg-black/20 backdrop-blur-sm border-white/10 hover:bg-white/5">
                            Explore Capabilities
                        </Button>
                    </div>
                </m.div>
            </div>
        </section>
    );
}
