"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { m } from "framer-motion";
import {
    Building2, Stethoscope, GraduationCap, Users,
    Home, Plane, ShoppingBag, Briefcase, ArrowRight,
    Cpu, Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

const industriesData = [
    {
        id: "fintech",
        label: "FinTech",
        href: "/industries/fintech",
        icon: Building2,
        description: "Future Finance",
        top: "10%",
        left: "10%",
        delay: 0,
    },
    {
        id: "healthcare",
        label: "Healthcare",
        href: "/industries/healthcare-it",
        icon: Stethoscope,
        description: "MedTech Innovations",
        top: "65%",
        left: "75%",
        delay: 1,
    },
    {
        id: "ecommerce",
        label: "E-Commerce",
        href: "/industries/ecommerce",
        icon: ShoppingBag,
        description: "Digital Retail",
        top: "15%",
        left: "75%",
        delay: 2,
    },
    {
        id: "realestate",
        label: "Real Estate",
        href: "/industries/real-estate",
        icon: Home,
        description: "PropTech",
        top: "70%",
        left: "15%",
        delay: 0.5,
    },
    {
        id: "edtech",
        label: "EdTech",
        href: "/industries/edtech",
        icon: GraduationCap,
        description: "Smart Learning",
        top: "40%",
        left: "25%",
        delay: 1.5,
    },
    {
        id: "travel",
        label: "Travel",
        href: "/industries/travel-hospitality",
        icon: Plane,
        description: "Global Mobility",
        top: "25%",
        left: "45%",
        delay: 2.5,
    },
    {
        id: "hrtech",
        label: "HRTech",
        href: "/industries/hrtech",
        icon: Users,
        description: "Workforce Future",
        top: "75%",
        left: "45%",
        delay: 3,
    },
    {
        id: "enterprise",
        label: "Enterprise",
        href: "/industries/enterprise",
        icon: Briefcase,
        description: "Corporate Scale",
        top: "50%",
        left: "85%",
        delay: 3.5,
    }
];

export function IndustriesSection() {
    return (
        <section className="relative w-full pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden min-h-[800px] bg-black" id="industries">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse delay-1000 pointer-events-none" />

            <div className="relative z-20 text-center mb-12 pointer-events-none max-w-7xl mx-auto px-6">
                <Reveal width="100%">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            Industries We Serve
                        </span>
                    </h2>
                </Reveal>
                <Reveal width="100%" delay={0.1}>
                    <p className="text-gray-400 text-lg tracking-wide max-w-2xl mx-auto">
                        Deep domain expertise across critical sectors, powered by next-gen technology.
                    </p>
                </Reveal>
            </div>

            {/* Floating Cards Container - Full Width */}
            <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
                {/* Enable pointer events only on the cards themselves */}
                {industriesData.map((industry, i) => (
                    <m.div
                        key={industry.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="absolute pointer-events-auto"
                        style={{
                            top: industry.top,
                            left: industry.left,
                            zIndex: 10,
                        }}
                    >
                        <FloatingCard industry={industry} />
                    </m.div>
                ))}
            </div>
        </section>
    );
}

function FloatingCard({ industry }: { industry: typeof industriesData[0] }) {
    // Randomize float animation slightly per card
    // Use stable random based on label char code to avoid hydration mismatch
    const seed = industry.label.charCodeAt(0) + industry.label.length;

    // Pseudo-random generator function
    const pseudoRandom = (input: number) => {
        return Math.abs(Math.sin(input)) * 10;
    };

    const randomY = 15 + pseudoRandom(seed);
    const randomRotate = 5 + pseudoRandom(seed + 1);
    const randomDuration = 4 + (pseudoRandom(seed + 2) / 5);

    return (
        <m.div
            animate={{
                y: [-randomY, randomY, -randomY],
                rotate: [-randomRotate, randomRotate, -randomRotate],
            }}
            transition={{
                duration: randomDuration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: industry.delay, // Stagger start
            }}
            whileHover={{
                scale: 1.1,
                rotate: 0,
                zIndex: 50,
                transition: { duration: 0.3 }
            }}
            className="group relative"
        >
            <Link href={industry.href}>
                <div className={cn(
                    "relative w-40 h-40 md:w-56 md:h-56 rounded-3xl",
                    "bg-white/5 backdrop-blur-md border border-white/10",
                    "shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]",
                    "flex flex-col items-center justify-center text-center p-6",
                    "transition-all duration-300",
                    "group-hover:bg-white/10 group-hover:border-blue-500/50 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
                )}>
                    <div className="mb-4 text-gray-400 group-hover:text-blue-400 transition-colors">
                        <industry.icon className="w-8 h-8 md:w-12 md:h-12" />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:scale-105 transition-transform">
                        {industry.label}
                    </h3>
                    <p className="text-[10px] md:text-xs text-blue-200/60 font-medium uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                        {industry.description}
                    </p>

                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 rounded-3xl bg-blue-500/0 group-hover:bg-blue-500/5 transition-colors duration-300" />
                </div>
            </Link>
        </m.div>
    );
}
