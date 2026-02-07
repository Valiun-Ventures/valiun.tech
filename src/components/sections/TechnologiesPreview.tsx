"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { m } from "framer-motion";
import { cn } from "@/lib/utils";
import {
    ArrowRight, Sparkles, Brain, Cloud,
    Monitor, Server, Smartphone, Cpu,
    Globe, Shield, Rocket
} from "lucide-react";

const techStack = [
    {
        id: "ai",
        category: "AI & Machine Learning",
        color: "emerald",
        icon: Brain,
        description: "Pioneering the future with generative AI, neural networks, and automated intelligence systems.",
        techs: ["OpenAI", "Claude", "LangChain", "TensorFlow", "PyTorch"],
        className: "lg:col-span-2 lg:row-span-2",
        gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent"
    },
    {
        id: "cloud",
        category: "Cloud & DevSecOps",
        color: "blue",
        icon: Cloud,
        description: "Architecting secure, high-availability cloud environments with modern CI/CD practices.",
        techs: ["AWS", "Kubernetes", "Docker", "Terraform"],
        className: "lg:col-span-1 lg:row-span-1",
        gradient: "from-blue-500/20 via-blue-500/5 to-transparent"
    },
    {
        id: "connect",
        category: "Ready to Scale?",
        color: "blue",
        icon: Rocket,
        description: "Let's turn your vision into reality. Our expert team is ready to build your next big thing.",
        techs: ["Consultation", "Strategy", "Execution"],
        className: "lg:col-span-1 lg:row-span-1",
        gradient: "from-blue-600/40 via-purple-600/30 to-transparent",
        href: "/contact",
        isCTA: true
    },
    {
        id: "frontend",
        category: "Web Engineering",
        color: "cyan",
        icon: Monitor,
        description: "Crafting blazing-fast, responsive web interfaces using the latest industry standards.",
        techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        className: "lg:col-span-1 lg:row-span-1",
        gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent"
    },
    {
        id: "backend",
        category: "Backend Systems",
        color: "purple",
        icon: Server,
        description: "Building the engine of your application with robust APIs and real-time data architectures.",
        techs: ["Node.js", "Go", "Python", "PostgreSQL", "Redis"],
        className: "lg:col-span-2 lg:row-span-1",
        gradient: "from-purple-500/20 via-purple-500/5 to-transparent"
    },
    {
        id: "mobile",
        category: "Mobile Development",
        color: "pink",
        icon: Smartphone,
        description: "Superior mobile experiences delivered through native and cross-platform engineering.",
        techs: ["React Native", "Flutter", "Swift", "Kotlin"],
        className: "lg:col-span-1 lg:row-span-1",
        gradient: "from-pink-500/20 via-pink-500/5 to-transparent"
    }
];

const colorStyles: Record<string, { text: string; border: string; iconBg: string }> = {
    emerald: { text: "text-emerald-400", border: "border-emerald-500/20", iconBg: "bg-emerald-500/10" },
    blue: { text: "text-blue-400", border: "border-blue-500/20", iconBg: "bg-blue-500/10" },
    cyan: { text: "text-cyan-400", border: "border-cyan-500/20", iconBg: "bg-cyan-500/10" },
    purple: { text: "text-purple-400", border: "border-purple-500/20", iconBg: "bg-purple-500/10" },
    pink: { text: "text-pink-400", border: "border-pink-500/20", iconBg: "bg-pink-500/10" }
};

export function TechnologiesPreview() {
    return (
        <Section className="relative bg-[#030303]">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
            </div>

            <div className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="w-full">
                        <Reveal>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
                                <Cpu className="w-4 h-4 text-blue-400" />
                                <span className="text-xs font-semibold tracking-wider uppercase text-blue-400">Our Tech Stack</span>
                            </div>
                        </Reveal>
                        <Reveal delay={0.1}>
                            <h2 className="text-3xl md:text-6xl font-bold tracking-tight mb-6">
                                Built with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Cutting-Edge Tech</span>
                            </h2>
                        </Reveal>
                        <Reveal delay={0.2}>
                            <p className="text-gray-400 text-lg">
                                We leverage the world's most powerful frameworks and cloud architectures to build
                                future-proof digital products.
                            </p>
                        </Reveal>
                    </div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {techStack.map((stack, index) => {
                        const style = colorStyles[stack.color];
                        const cardContent = (
                            <m.div
                                whileHover={{ y: -5 }}
                                className={cn(
                                    "group relative p-8 rounded-[2rem] border overflow-hidden h-full flex flex-col justify-between transition-all duration-500",
                                    "bg-neutral-900/40 backdrop-blur-sm hover:border-white/10",
                                    stack.isCTA ? "border-blue-500/50 bg-blue-500/5 shadow-[0_0_30px_-10px_rgba(59,130,246,0.3)]" : "border-white/5",
                                    stack.href && "cursor-pointer hover:bg-neutral-900/60",
                                    stack.className
                                )}
                            >
                                {/* Corner Gradient */}
                                <div className={cn(
                                    "absolute inset-0 bg-gradient-to-br transition-opacity duration-700",
                                    stack.isCTA ? "opacity-40" : "opacity-0 group-hover:opacity-100",
                                    stack.gradient
                                )} />

                                {stack.isCTA && (
                                    <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
                                )}

                                <div className="relative z-10">
                                    <div className={cn(
                                        "w-12 h-12 rounded-xl flex items-center justify-center mb-6 border transition-transform duration-500 group-hover:scale-110",
                                        style.iconBg,
                                        style.border,
                                        stack.isCTA && "bg-blue-500/30 border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
                                    )}>
                                        <stack.icon className={cn("w-6 h-6", stack.isCTA ? "text-blue-300" : style.text)} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                                        {stack.category}
                                    </h3>

                                    {stack.description && (
                                        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2 md:line-clamp-none">
                                            {stack.description}
                                        </p>
                                    )}
                                </div>

                                <div className="relative z-10">
                                    <div className="flex flex-wrap gap-2">
                                        {stack.techs.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-medium text-gray-400 group-hover:text-white group-hover:border-white/10 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {stack.isCTA ? (
                                            <div className="ml-auto opacity-100 transition-opacity duration-300">
                                                <ArrowRight className="w-5 h-5 text-blue-400 animate-pulse" />
                                            </div>
                                        ) : (
                                            <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <Sparkles className={cn("w-4 h-4", style.text)} />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </m.div>
                        );

                        return (
                            <Reveal key={stack.id} delay={index * 0.1} width="100%">
                                {stack.href ? (
                                    <Link href={stack.href} className="block h-full">
                                        {cardContent}
                                    </Link>
                                ) : cardContent}
                            </Reveal>
                        );
                    })}
                </div>

                <Reveal delay={0.6}>
                    <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap justify-between items-center gap-8">
                        <div className="flex gap-12">
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-white">50+</span>
                                <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">Frameworks</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-white">99.9%</span>
                                <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">Uptime</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-2xl font-bold text-white">Active</span>
                                <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">CI/CD Pipeline</span>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:bg-neutral-200 transition-colors"
                        >
                            Get Started <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}
