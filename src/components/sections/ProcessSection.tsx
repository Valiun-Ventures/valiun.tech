"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const steps = [
    {
        id: "01",
        title: "Discovery",
        description: "We dive deep into your business ecosystem to understand challenges and identify high-impact opportunities.",
        icon: Search
    },
    {
        id: "02",
        title: "Strategy",
        description: "Our architects design a robust, scalable roadmap tailored to your specific growth objectives.",
        icon: Lightbulb
    },
    {
        id: "03",
        title: "Engineering",
        description: "Agile sprints and elite code standards ensure rapid delivery of secure, high-performance solutions.",
        icon: Code2
    },
    {
        id: "04",
        title: "Evolution",
        description: "We don't just launch; we iterate, optimize, and scale your product to keep you ahead of the curve.",
        icon: Rocket
    }
];

export function ProcessSection() {
    return (
        <Section id="process" className="relative">
            <div className="text-center mb-20 space-y-6">
                <Reveal width="100%">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                        How We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Work</span>
                    </h2>
                </Reveal>
                <Reveal width="100%" delay={0.2}>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                        From concept to scale, our proven methodology ensures predictable success.
                    </p>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {/* Connecting Line (Desktop Only) */}
                <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -z-10" />

                {steps.map((step, index) => (
                    <Reveal key={step.id} delay={index * 0.2}>
                        <div className="relative group">
                            {/* Step Number Background */}
                            <span className="absolute -top-10 -left-6 text-9xl font-bold text-white/[0.03] select-none group-hover:text-white/[0.06] transition-colors">
                                {step.id}
                            </span>

                            <div className="bg-black/40 backdrop-blur-sm border border-white/10 p-8 rounded-2xl hover:border-blue-500/30 transition-colors h-full">
                                <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
                                    <step.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    );
}
