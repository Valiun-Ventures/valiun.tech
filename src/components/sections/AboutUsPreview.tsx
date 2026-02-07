"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { m } from "framer-motion";
import { Zap, Globe2, ShieldCheck, Users, ArrowRight } from "lucide-react";

const highlights = [
    {
        icon: Zap,
        title: "Agentic AI First",
        description: "Autonomous AI systems that work smarter"
    },
    {
        icon: Globe2,
        title: "Global Scale",
        description: "Built for millions of users worldwide"
    },
    {
        icon: ShieldCheck,
        title: "Enterprise Security",
        description: "Bank-grade security standards"
    },
    {
        icon: Users,
        title: "Expert Team",
        description: "Elite engineers and designers"
    }
];

const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "Support Available" }
];

export function AboutUsPreview() {
    return (
        <Section className="relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8">
                        <Reveal>
                            <h2 className="text-3xl md:text-5xl font-bold">
                                Your Strategic Partner in{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                                    Digital Evolution
                                </span>
                            </h2>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <p className="text-gray-400 text-lg leading-relaxed">
                                At Valiun Tech, we combine{" "}
                                <span className="text-white font-medium">Agentic AI</span>,{" "}
                                <span className="text-white font-medium">modern cloud architectures</span>, and{" "}
                                <span className="text-white font-medium">elite engineering</span> to transform complex business challenges into scalable, future-proof solutions.
                            </p>
                        </Reveal>

                        {/* Stats */}
                        <Reveal delay={0.2}>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 border-y border-white/10">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-1">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-gray-500">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={0.3}>
                            <Link
                                href="/company/about"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40"
                            >
                                Learn More About Us
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Reveal>
                    </div>

                    {/* Right: Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {highlights.map((highlight, index) => (
                            <Reveal key={highlight.title} delay={0.2 + index * 0.1}>
                                <m.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.3 }}
                                    className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all"
                                >
                                    <div className="mb-4 text-blue-400 group-hover:scale-110 transition-transform">
                                        <highlight.icon className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                                        {highlight.title}
                                    </h3>
                                    <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                                        {highlight.description}
                                    </p>
                                </m.div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
}
