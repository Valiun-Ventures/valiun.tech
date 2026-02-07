"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { navigation } from "@/lib/navigation";
import Link from "next/link";
import {
    Building2, Stethoscope, GraduationCap, ShoppingBag,
    Home, Plane, ArrowRight, Briefcase, Users
} from "lucide-react";

const icons: Record<string, React.ReactNode> = {
    "FinTech": <Building2 className="w-8 h-8 text-blue-500" />,
    "Healthcare IT": <Stethoscope className="w-8 h-8 text-emerald-500" />,
    "EdTech": <GraduationCap className="w-8 h-8 text-orange-500" />,
    "HRTech": <Users className="w-8 h-8 text-pink-500" />,
    "Real Estate": <Home className="w-8 h-8 text-indigo-500" />,
    "Travel & Hospitality": <Plane className="w-8 h-8 text-cyan-500" />,
    "E-Commerce": <ShoppingBag className="w-8 h-8 text-purple-500" />,
    "Enterprise": <Briefcase className="w-8 h-8 text-gray-400" />
};

export function IndustriesPreview() {
    // Get industries node
    const industries = navigation.find(n => n.label === "Industries")?.children || [];

    return (
        <Section id="industries" className="relative z-10">
            <div className="text-center mb-20 space-y-6">
                <Reveal width="100%">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Industries We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Transform</span>
                    </h2>
                </Reveal>
                <Reveal width="100%" delay={0.4}>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                        Deep domain expertise meets cutting-edge technology to deliver transformative solutions.
                    </p>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {industries.slice(0, 6).map((industry, index) => (
                    <Reveal key={industry.label} delay={index * 0.1}>
                        <Link href={industry.href} className="flex">
                            <SpotlightCard className="h-[360px] w-full group p-8 hover:shadow-2xl transition-all duration-300 bg-black/40 backdrop-blur-sm border-white/10 hover:border-blue-500/30">
                                <div className="flex flex-col h-full">
                                    <div className="mb-6 p-3 rounded-lg bg-white/5 w-fit border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                        {icons[industry.label] || <Briefcase className="w-8 h-8 text-gray-500" />}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                                        {industry.label}
                                    </h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                        Innovative {industry.label} solutions tailored for your business needs.
                                    </p>
                                    <div className="flex items-center text-blue-400 text-sm font-semibold opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 mt-auto">
                                        Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </SpotlightCard>
                        </Link>
                    </Reveal>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link href="/industries" className="inline-flex items-center text-gray-400 hover:text-white transition-colors relative group">
                    View All Industries
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
                </Link>
            </div>
        </Section>
    );
}
