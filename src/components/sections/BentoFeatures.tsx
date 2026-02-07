"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { m } from "framer-motion";
import {
    Globe2,
    Palette,
    Zap,
    Layout,
    Lock,
    TrendingUp,
    Server
} from "lucide-react";

export function BentoFeatures() {
    return (
        <Section className="py-32 relative">
            {/* Background Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />

            <div className="text-center mb-20 space-y-6 relative z-10">
                <Reveal width="100%">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Valiun Advantage</span>
                    </h2>
                </Reveal>
                <Reveal width="100%" delay={0.2}>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                        We don&apos;t just write code. We engineer digital dominance.
                    </p>
                </Reveal>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-6 max-w-7xl mx-auto">

                {/* Enterprise-Grade Solutions (Featured - 2x2) */}
                <m.div
                    className="md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between group hover:border-purple-500/30 transition-colors relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div>
                        <m.div
                            className="size-14 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-6"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                            <Server className="w-8 h-8" />
                        </m.div>
                        <h3 className="text-2xl font-bold mb-3">Enterprise-Grade Solutions</h3>
                        <p className="text-gray-400 mb-6 max-w-md">
                            Battle-tested architectures built for scale, reliability, and performance. We deliver production-ready systems that enterprises trust.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-8">
                        {["Cloud Native", "Microservices", "High Availability"].map((tag, i) => (
                            <m.span
                                key={tag}
                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                {tag}
                            </m.span>
                        ))}
                    </div>
                    {/* Animated Background Icon */}
                    <m.div
                        className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <Server className="w-48 h-48" />
                    </m.div>
                </m.div>

                {/* Global Scale (Wide - 2x1) */}
                <m.div
                    className="md:col-span-2 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center gap-8 relative overflow-hidden group hover:border-blue-500/30 transition-colors"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="flex-1 z-10">
                        <m.div
                            className="size-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 mb-4"
                            whileHover={{ scale: 1.1 }}
                        >
                            <Globe2 className="w-6 h-6" />
                        </m.div>
                        <h3 className="text-xl font-bold mb-2">Global Scale</h3>
                        <p className="text-gray-400 text-sm">
                            Edge-cached delivery ensures <span className="text-blue-400 font-bold">&lt;50ms</span> latency worldwide.
                        </p>
                    </div>
                    <m.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                        <Globe2 className="w-24 h-24 sm:w-32 sm:h-32 text-blue-500/20" />
                    </m.div>
                </m.div>

                {/* Design Excellence (Square - 1x1) */}
                <m.div
                    className="md:col-span-1 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-6 group hover:border-pink-500/30 transition-colors relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <m.div
                        className="size-10 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 mb-4"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                    >
                        <Palette className="w-5 h-5" />
                    </m.div>
                    <h3 className="text-lg font-bold mb-2">Design Excellence</h3>
                    <p className="text-gray-400 text-xs mb-4">
                        Radical usability meets stunning aesthetics.
                    </p>
                    {/* Floating design element */}
                    <m.div
                        className="absolute right-[-20px] top-[50%] -translate-y-1/2 opacity-20"
                        animate={{
                            rotate: [-5, 5, -5],
                            y: [-5, 5, -5]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    >
                        <div className="w-24 h-32 bg-pink-500/20 border border-pink-500/30 rounded-lg" />
                    </m.div>
                </m.div>

                {/* Lightning Fast (Square - 1x1) */}
                <m.div
                    className="md:col-span-1 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-6 group hover:border-yellow-500/30 transition-colors relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="flex justify-between items-start mb-4">
                        <m.div
                            className="size-10 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400"
                            whileHover={{ scale: 1.1 }}
                            animate={{
                                boxShadow: [
                                    "0 0 0px rgba(234, 179, 8, 0)",
                                    "0 0 20px rgba(234, 179, 8, 0.3)",
                                    "0 0 0px rgba(234, 179, 8, 0)"
                                ]
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Zap className="w-5 h-5" />
                        </m.div>
                        <m.span
                            className="text-2xl font-black text-white"
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            100
                        </m.span>
                    </div>
                    <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden mb-2">
                        <m.div
                            className="h-full bg-yellow-500"
                            initial={{ width: "0%" }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    </div>
                    <h3 className="text-lg font-bold mb-1">Lightning Fast</h3>
                    <p className="text-gray-400 text-xs">Sub-second Web Vitals.</p>
                </m.div>

                {/* Clean Architecture (Square - 1x1) */}
                <m.div
                    className="md:col-span-1 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-6 group hover:border-orange-500/30 transition-colors relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <m.div
                        className="size-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 mb-4"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                        <Layout className="w-5 h-5" />
                    </m.div>
                    {/* Animated Blocks */}
                    <div className="flex justify-center gap-2 my-4">
                        {[0, 1, 2].map((i) => (
                            <m.div
                                key={i}
                                className="w-6 h-6 bg-orange-500/20 border border-orange-500/30 rounded-sm"
                                animate={{
                                    y: [0, -5, 0],
                                    opacity: [0.5, 1, 0.5]
                                }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    delay: i * 0.2
                                }}
                            />
                        ))}
                    </div>
                    <h3 className="text-lg font-bold mb-2">Modular Code</h3>
                    <p className="text-gray-400 text-xs">Scalable architecture.</p>
                </m.div>

                {/* Enterprise Security (Square - 1x1) */}
                <m.div
                    className="md:col-span-1 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-6 group hover:border-emerald-500/30 transition-colors relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <m.div
                        className="size-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4"
                        whileHover={{ scale: 1.1 }}
                        animate={{
                            boxShadow: [
                                "0 0 0px rgba(16, 185, 129, 0)",
                                "0 0 15px rgba(16, 185, 129, 0.3)",
                                "0 0 0px rgba(16, 185, 129, 0)"
                            ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <Lock className="w-5 h-5" />
                    </m.div>
                    {/* Matrix Effect */}
                    <m.div
                        className="absolute right-2 top-2 opacity-20 text-[8px] font-mono text-emerald-500"
                        animate={{ opacity: [0.2, 0.4, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        0101<br />1010<br />1100
                    </m.div>
                    <h3 className="text-lg font-bold mb-2">Secure</h3>
                    <p className="text-gray-400 text-xs">SOC2 Ready.</p>
                </m.div>

                {/* Infinite Scaling (Wide - 2x1) */}
                <m.div
                    className="md:col-span-2 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-between group hover:border-cyan-500/30 transition-colors relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    <div className="z-10">
                        <m.div
                            className="size-12 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4"
                            whileHover={{ scale: 1.1 }}
                        >
                            <TrendingUp className="w-6 h-6" />
                        </m.div>
                        <h3 className="text-xl font-bold mb-2">Growth Ready</h3>
                        <p className="text-gray-400 text-sm max-w-sm">
                            Built to grow with your business, from startup to enterprise.
                        </p>
                    </div>
                    {/* Animated Chart */}
                    <div className="hidden sm:flex items-end gap-1 h-20">
                        {[40, 60, 45, 80, 55, 90, 70, 100].map((height, i) => (
                            <m.div
                                key={i}
                                className="w-6 bg-cyan-500/30 rounded-t"
                                initial={{ height: 0 }}
                                whileInView={{ height: `${height}%` }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.1,
                                    ease: "easeOut"
                                }}
                                whileHover={{
                                    backgroundColor: "rgba(6, 182, 212, 0.5)",
                                    scale: 1.1
                                }}
                            />
                        ))}
                    </div>
                </m.div>
            </div>
        </Section>
    );
}
