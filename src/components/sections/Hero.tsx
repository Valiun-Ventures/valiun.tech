"use client";

import { m, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// ── Subtle cursor spotlight ──────────────────────────────────────────────────
function CursorSpotlight() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const springX = useSpring(mouseX, { stiffness: 80, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 80, damping: 20 });

    useEffect(() => {
        const move = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, [mouseX, mouseY]);

    const left = useTransform(springX, (v) => `${v - 300}px`);
    const top = useTransform(springY, (v) => `${v - 300}px`);

    return (
        <m.div
            className="pointer-events-none fixed z-[5] hidden lg:block"
            style={{ left, top, width: 600, height: 600 }}
        >
            <div className="w-full h-full rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.09)_0%,transparent_70%)]" />
        </m.div>
    );
}

// ── Animated count-up ────────────────────────────────────────────────────────
function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!inView) return;
        let start = 0;
        const step = target / 50;
        const timer = setInterval(() => {
            start += step;
            if (start >= target) { setCount(target); clearInterval(timer); }
            else setCount(Math.floor(start));
        }, 22);
        return () => clearInterval(timer);
    }, [inView, target]);

    return <span ref={ref}>{count}{suffix}</span>;
}

// ── Word-by-word slide-up reveal ─────────────────────────────────────────────
function WordReveal({ text, className = "", delay = 0, as: Tag = "span" }: {
    text: string; className?: string; delay?: number; as?: "span" | "h1" | "h2";
}) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-5% 0px" });
    return (
        <Tag>
            <div ref={ref} className={`inline-flex flex-wrap items-baseline ${className}`} aria-label={text}>
                {text.split(" ").map((word, i) => (
                    <span key={i} className="overflow-hidden inline-block mr-[0.2em] last:mr-0">
                        <m.span
                            className="inline-block"
                            initial={{ y: "108%", opacity: 0 }}
                            animate={inView ? { y: "0%", opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: delay + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {word}
                        </m.span>
                    </span>
                ))}
            </div>
        </Tag>
    );
}

// ── Horizontal rule that draws in from left ───────────────────────────────────
function DrawLine({ delay = 0, className = "" }: { delay?: number; className?: string }) {
    return (
        <m.div
            className={`h-px bg-white/12 ${className}`}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
    );
}

// ── Infinite horizontal marquee ───────────────────────────────────────────────
const TICKER_ITEMS = [
    "Agentic AI", "Cloud Architecture", "Mobile Apps", "DevSecOps",
    "Web Engineering", "Data Pipelines", "UI/UX Design", "Backend Systems",
];

function Ticker() {
    const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
    return (
        <div className="w-full overflow-hidden flex items-center py-4 border-y border-white/[0.05]">
            <m.div
                className="flex gap-12 whitespace-nowrap"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, duration: 28, ease: "linear" }}
            >
                {items.map((item, i) => (
                    <span key={i} className="flex items-center gap-4 text-white/40 text-xs font-semibold tracking-[0.15em] uppercase">
                        <span className="w-1 h-1 rounded-full bg-purple-500/80 inline-block" />
                        {item}
                    </span>
                ))}
            </m.div>
        </div>
    );
}

const stats = [
    { target: 50, suffix: "+", label: "Projects" },
    { target: 6, suffix: "+", label: "Years" },
    { target: 99, suffix: "%", label: "Retention" },
];

export function Hero() {
    return (
        <>
            <CursorSpotlight />

            <section className="relative w-full min-h-screen bg-[#050505] overflow-hidden flex flex-col">

                {/* ── Film grain ── */}
                <div
                    className="pointer-events-none absolute inset-0 z-10 opacity-[0.032]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                        backgroundRepeat: "repeat",
                        backgroundSize: "128px 128px",
                    }}
                />

                {/* ── Ambient light smears ── */}
                <div className="absolute inset-0 pointer-events-none z-0">
                    <div className="absolute" style={{ top: "-8%", right: "8%", width: 600, height: 600, background: "radial-gradient(circle, rgba(37,99,235,0.11) 0%, transparent 65%)", filter: "blur(50px)" }} />
                    <div className="absolute" style={{ top: "35%", left: "-8%", width: 450, height: 450, background: "radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 65%)", filter: "blur(50px)" }} />
                    <div className="absolute" style={{ bottom: "5%", right: "12%", width: 350, height: 350, background: "radial-gradient(circle, rgba(109,40,217,0.08) 0%, transparent 65%)", filter: "blur(50px)" }} />
                </div>

                {/* ── Top meta bar ── */}
                <div className="relative z-20 px-6 sm:px-10 lg:px-16 pt-10 sm:pt-12">
                    <DrawLine delay={0.2} />
                    <div className="flex items-center justify-between mt-3 mb-6">
                        <m.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.45 }}
                            className="flex items-center gap-3"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                            <span className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/30">
                                Available for Projects
                            </span>
                        </m.div>
                        <m.span
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.45 }}
                            className="text-[11px] font-mono tracking-[0.22em] uppercase text-white/25 hidden sm:block"
                        >
                            Mumbai, India — Est. 2018
                        </m.span>
                    </div>
                </div>

                {/* ── Headline ── */}
                <div className="relative z-20 flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-16">

                    <div className="mb-6">
                        {/* Line 1 */}
                        <div className="overflow-hidden mb-1">
                            <m.p
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.55 }}
                                className="text-[11px] font-mono tracking-[0.25em] uppercase text-purple-400/80 mb-4"
                            >
                                ✦ Enterprise Technology Partner
                            </m.p>
                        </div>

                        <h1 className="font-bold leading-[0.9] tracking-[-0.04em] text-white uppercase text-[clamp(60px,11.5vw,165px)]">
                            <WordReveal text="We Build" delay={0.5} className="block" />
                            <span className="block">
                                <span className="overflow-hidden inline-block mr-[0.15em]">
                                    <m.span
                                        className="inline-block pb-4 text-white"
                                        initial={{ y: "108%", opacity: 0 }}
                                        animate={{ y: "0%", opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.66, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        What&apos;s
                                    </m.span>
                                </span>
                                <span className="overflow-hidden inline-block">
                                    <m.span
                                        className="inline-block pb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-violet-400"
                                        initial={{ y: "108%", opacity: 0 }}
                                        animate={{ y: "0%", opacity: 1 }}
                                        transition={{ duration: 0.8, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        Next.
                                    </m.span>
                                </span>
                            </span>
                        </h1>
                    </div>

                    {/* ── Marquee ── */}
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.6 }}
                        className="mb-10"
                    >
                        <Ticker />
                    </m.div>

                    {/* ── Bottom grid ── */}
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_auto] gap-8 items-end">

                        {/* Body copy */}
                        <m.p
                            className="text-white/40 text-base sm:text-lg font-light leading-[1.75] max-w-sm"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.15 }}
                        >
                            Enterprise-grade AI systems, cloud architectures,
                            and digital products — built to perform at scale,
                            and designed to last.
                        </m.p>

                        {/* Stats */}
                        <m.div
                            className="flex gap-10 lg:gap-14"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.25 }}
                        >
                            {stats.map(({ target, suffix, label }) => (
                                <div key={label} className="flex flex-col">
                                    <span className="text-3xl sm:text-4xl font-bold text-white leading-none tracking-tight mb-1 tabular-nums">
                                        <CountUp target={target} suffix={suffix} />
                                    </span>
                                    <span className="text-[10px] tracking-[0.15em] uppercase text-white/25 font-medium">{label}</span>
                                </div>
                            ))}
                        </m.div>

                        {/* CTAs */}
                        <m.div
                            className="flex flex-col sm:flex-row lg:flex-row gap-4 lg:items-center"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 1.35 }}
                        >
                            <Link
                                href="/contact"
                                className="cta-highlight"
                            >
                                Start a Project
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                            <Link
                                href="/services"
                                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-white/10 hover:border-purple-500/40 text-white/50 hover:text-white font-medium text-sm transition-all duration-300 whitespace-nowrap hover:bg-purple-500/5 h-[52px]"
                            >
                                Explore Capabilities
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                        </m.div>
                    </div>
                </div>

                {/* ── Bottom rule + footer line ── */}
                <div className="relative z-20 px-6 sm:px-10 lg:px-16 pb-8 mt-10">
                    <DrawLine delay={1.1} />
                    <div className="flex items-center justify-between mt-3">
                        <m.span
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            transition={{ delay: 1.4, duration: 0.5 }}
                            className="text-[11px] font-mono tracking-[0.18em] uppercase text-white/40"
                        >
                            © 2026 Valiun Ventures
                        </m.span>
                        <m.span
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            transition={{ delay: 1.4, duration: 0.5 }}
                            className="text-[11px] font-mono tracking-[0.18em] uppercase text-white/40"
                        >
                            Scroll to explore ↓
                        </m.span>
                    </div>
                </div>

            </section>
        </>
    );
}
