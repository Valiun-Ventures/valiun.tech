"use client";

import { useScroll, useTransform, m } from "framer-motion";
import { useEffect, useRef, useState, useMemo } from "react";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

const FRAME_COUNT = 240;

function pad(num: number, size: number) {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
}

export function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [imagesLoaded, setImagesLoaded] = useState(0);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // We map 0-1 scroll progress to frame 1-240
    const frameIndex = useTransform(scrollYProgress, [0, 1], [1, FRAME_COUNT]);

    // Preload images
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            // Path structure established from earlier list_dir
            img.src = `/images/hero-sequence/ezgif-frame-${pad(i, 3)}.jpg`;
            img.onload = () => {
                loadedCount++;
                setImagesLoaded(loadedCount);
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    // Draw frame to canvas attached to scroll
    useEffect(() => {
        if (imagesLoaded < FRAME_COUNT || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d", { alpha: false }); // alpha false optimizes performance
        if (!ctx) return;

        let animationFrameId: number;

        // Dynamic resize for maximum sharpness (Retina/High-DPI support)
        const setCanvasSize = () => {
            const dpr = window.devicePixelRatio || 1;
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            ctx.scale(dpr, dpr);

            // Force redraw of current frame on resize
            drawFrame(Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(frameIndex.get()) - 1)));
        };

        const drawFrame = (frameNo: number) => {
            const img = images[frameNo];
            if (img && img.complete) {
                // Clear to match the exact black background #050505
                ctx.fillStyle = "#050505";
                ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

                // Draw image preserving aspect ratio and centering
                const hRatio = window.innerWidth / img.width;
                const vRatio = window.innerHeight / img.height;
                // Use Math.max if we want to cover (Apple style), Math.min to contain
                const ratio = Math.max(hRatio, vRatio);

                const cw = img.width * ratio;
                const ch = img.height * ratio;
                const cx = (window.innerWidth - cw) / 2;
                const cy = (window.innerHeight - ch) / 2;

                // Push quality up slightly
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = "high";

                // Enhance image quality slightly via Canvas API filters
                ctx.filter = "contrast(1.2) saturate(1.25) brightness(1.08) drop-shadow(0px 0px 20px rgba(255,255,255,0.05))";
                ctx.drawImage(img, 0, 0, img.width, img.height, cx, cy, cw, ch);
                ctx.filter = "none"; // Reset filter
            }
        };

        const unsubscribe = frameIndex.on("change", (latest) => {
            const frame = Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(latest) - 1));
            cancelAnimationFrame(animationFrameId);
            animationFrameId = requestAnimationFrame(() => drawFrame(frame));
        });

        // Setup size and initial frame
        window.addEventListener("resize", setCanvasSize);
        setCanvasSize();

        return () => {
            window.removeEventListener("resize", setCanvasSize);
            unsubscribe();
            cancelAnimationFrame(animationFrameId);
        };
    }, [frameIndex, images, imagesLoaded]);


    // --- Storytelling Narrative Opacities mapped to Scroll % --- //
    // Intro (0 - 15%)
    const introOpacity = useTransform(scrollYProgress, [0, 0.05, 0.12, 0.15], [1, 1, 0, 0]);

    // Engineering Reveal (20% - 40%)
    const engOpacity = useTransform(scrollYProgress, [0.15, 0.20, 0.35, 0.40], [0, 1, 1, 0]);
    const engY = useTransform(scrollYProgress, [0.15, 0.20], [50, 0]);

    // Noise Cancelling (45% - 65%)
    const ancOpacity = useTransform(scrollYProgress, [0.40, 0.45, 0.60, 0.65], [0, 1, 1, 0]);
    const ancY = useTransform(scrollYProgress, [0.40, 0.45], [50, 0]);

    // Sound & Upscaling (70% - 85%)
    const soundOpacity = useTransform(scrollYProgress, [0.65, 0.70, 0.80, 0.85], [0, 1, 1, 0]);
    const soundY = useTransform(scrollYProgress, [0.65, 0.70], [50, 0]);

    // Reassembly & Outro (90% - 100%)
    const outroOpacity = useTransform(scrollYProgress, [0.85, 0.90, 1, 1], [0, 1, 1, 1]);
    const outroY = useTransform(scrollYProgress, [0.85, 0.90], [50, 0]);


    return (
        <section ref={containerRef} className="relative w-full h-[400vh] bg-[#050505] font-sans">

            {/* Sticky Canvas Container */}
            <div className="sticky top-0 w-full h-screen overflow-hidden bg-[#050505]">

                {/* Loader showing exact 0% -> 100% until 240 frames are buffered */}
                {imagesLoaded < FRAME_COUNT && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center bg-[#050505]">
                        <div className="flex flex-col items-center">
                            <span className="text-white/60 tracking-widest text-sm uppercase mb-4">Loading Sequence</span>
                            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-blue-600 transition-all duration-300"
                                    style={{ width: `${(imagesLoaded / FRAME_COUNT) * 100}%` }}
                                />
                            </div>
                        </div>
                    </div>
                )}

                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover select-none pointer-events-none"
                    style={{ background: "#050505" }}
                />

                {/* --- Text Overlays (Floating above canvas) --- */}

                {/* Intro Section */}
                <m.div
                    style={{ opacity: introOpacity }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 w-full pointer-events-none"
                >
                    <m.div
                        className="inline-block px-4 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-xl"
                    >
                        <span className="text-sm font-medium text-purple-400 tracking-wide uppercase">Engineering the Future</span>
                    </m.div>
                    <h1 className="text-5xl sm:text-7xl lg:text-[7rem] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 mb-4 tracking-tight drop-shadow-2xl">
                        Valiun Tech
                    </h1>
                    <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-medium mb-3">
                        The Future of Tech is Valiun.
                    </p>
                    <p className="text-sm sm:text-base text-white/60 max-w-lg font-light">
                        We empower enterprises with Agentic AI, <br className="hidden sm:block" /> Scalable Architectures, and premium digital experiences.
                    </p>
                </m.div>

                {/* Engineering Reveal Section */}
                <m.div
                    style={{ opacity: engOpacity, y: engY }}
                    className="absolute inset-y-0 left-0 w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-24 pointer-events-none"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 mb-6 tracking-tight drop-shadow-2xl">
                        Agentic AI <br /> capabilities.
                    </h2>
                    <p className="text-lg text-white/60 max-w-md leading-relaxed font-light drop-shadow-lg mb-4">
                        Empowering enterprises with intelligent automation and advanced machine learning models.
                    </p>
                    <p className="text-lg text-white/60 max-w-md leading-relaxed font-light drop-shadow-lg">
                        Custom AI agents designed to optimize workflows and drive exponential growth.
                    </p>
                </m.div>

                {/* Noise Cancelling Section */}
                <m.div
                    style={{ opacity: ancOpacity, y: ancY }}
                    className="absolute inset-y-0 right-0 w-full lg:w-[45%] flex flex-col justify-center text-left lg:text-right items-start lg:items-end px-6 sm:px-12 lg:px-24 pointer-events-none"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 mb-8 tracking-tight drop-shadow-2xl">
                        Scalable <br /> architectures.
                    </h2>
                    <ul className="space-y-4 text-left lg:text-right">
                        <li className="text-lg text-white/80 font-medium tracking-wide">Robust infrastructure designed for high availability.</li>
                        <li className="text-lg text-white/80 font-medium tracking-wide">Microservices and serverless architectures tailored to your needs.</li>
                        <li className="text-lg text-white/80 font-medium tracking-wide">Future-proof engineering that scales with your business.</li>
                    </ul>
                </m.div>

                {/* Sound Quality Section */}
                <m.div
                    style={{ opacity: soundOpacity, y: soundY }}
                    className="absolute inset-y-0 left-0 w-full lg:w-1/2 flex flex-col justify-center px-6 sm:px-12 lg:px-24 pointer-events-none"
                >
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 mb-6 tracking-tight drop-shadow-2xl">
                        Premium, <br /> digital experiences.
                    </h2>
                    <p className="text-lg text-white/60 max-w-md leading-relaxed font-light drop-shadow-lg mb-4">
                        Awwwards-level design and flawless user interfaces.
                    </p>
                    <p className="text-lg text-white/60 max-w-md leading-relaxed font-light drop-shadow-lg">
                        We craft experiences that captivate users and elevate enterprise brands.
                    </p>
                </m.div>

                {/* Outro / Final State */}
                <m.div
                    style={{ opacity: outroOpacity, y: outroY }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 w-full pointer-events-auto"
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80 pointer-events-none" />

                    <div className="relative z-10 mt-[30vh]"> {/* Push content down so it doesn't block the reassembled headphones entirely */}
                        <m.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="mb-8 border-b border-white/10 w-full flex items-center justify-center gap-8 pb-8"
                        >
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-bold text-white mb-1">99<span className="text-purple-500">%</span></span>
                                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Client Retention</span>
                            </div>
                            <div className="w-px h-10 bg-white/10" />
                            <div className="flex flex-col items-center">
                                <span className="text-3xl font-bold text-white mb-1">24<span className="text-blue-500">/7</span></span>
                                <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Enterprise Support</span>
                            </div>
                        </m.div>

                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-orange-400 mb-4 drop-shadow-2xl">
                            Start Transformation. <br className="hidden sm:block" /> Scale Infinitely.
                        </h2>
                        <p className="text-xl text-white/60 mb-10 font-light max-w-2xl mx-auto">
                            Partner with Valiun to build the next generation of digital products.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            <Button
                                href="/contact"
                                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white rounded-full px-10 py-6 text-lg font-medium tracking-wide border-none shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all"
                            >
                                Start Transformation
                            </Button>

                            <Button
                                variant="link"
                                href="/services"
                                className="text-white hover:text-white/80 text-lg group"
                            >
                                Explore Capabilities
                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </div>
                    </div>
                </m.div>

            </div>
        </section>
    );
}
