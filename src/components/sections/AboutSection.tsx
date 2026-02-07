"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { LucideIcon, CheckCircle2, Zap, ShieldCheck, Globe2 } from "lucide-react";

export function AboutSection() {
    return (
        <Section className="relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="space-y-8">
                    <Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold">
                            Building the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                                Intelligent Future
                            </span>
                        </h2>
                    </Reveal>

                    <Reveal delay={0.2}>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            At Valiun Tech, we are more than just a software agency. We are your strategic partner in digital evolution.
                            Combining <span className="text-white font-medium">Agentic AI</span>, <span className="text-white font-medium">modern cloud architectures</span>, and <span className="text-white font-medium">elite engineering</span>,
                            we turn complex business challenges into scalable, future-proof competitive advantages.
                        </p>
                    </Reveal>

                    <Reveal delay={0.4}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <FeatureItem
                                icon={Zap}
                                title="Agentic First"
                                desc="Autonomous AI systems that do more."
                            />
                            <FeatureItem
                                icon={Globe2}
                                title="Global Scale"
                                desc="Architectures built for millions."
                            />
                            <FeatureItem
                                icon={ShieldCheck}
                                title="Enterprise Secure"
                                desc="Bank-grade security standards."
                            />
                            <FeatureItem
                                icon={CheckCircle2}
                                title="Outcome Driven"
                                desc="Focused on tangible ROI."
                            />
                        </div>
                    </Reveal>
                </div>

                {/* Visual / Image Side */}
                <div className="relative">
                    <Reveal delay={0.3} x={50}>
                        <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-2">
                            {/* Abstract Tech Visual using CSS constructs instead of image for now to save bandwidth/assets */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/10 z-0" />
                            <div className="absolute inset-2 rounded-2xl bg-black/40 border border-white/5 overflow-hidden flex items-center justify-center">
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,107,247,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shine_4s_linear_infinite]" />

                                {/* Inner Grid Representation */}
                                <div className="grid grid-cols-2 gap-4 p-8 w-full max-w-sm opacity-80">
                                    <div className="h-32 rounded-xl bg-gradient-to-br from-blue-600/20 to-blue-900/10 border border-blue-500/20 animate-pulse" />
                                    <div className="h-32 rounded-xl bg-gradient-to-br from-purple-600/20 to-purple-900/10 border border-purple-500/20 translate-y-8 animate-pulse delay-700" />
                                    <div className="h-32 rounded-xl bg-gradient-to-br from-emerald-600/20 to-emerald-900/10 border border-emerald-500/20 -translate-y-8 animate-pulse delay-300" />
                                    <div className="h-32 rounded-xl bg-gradient-to-br from-orange-600/20 to-orange-900/10 border border-orange-500/20 animate-pulse delay-500" />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </Section>
    );
}

function FeatureItem({ icon: Icon, title, desc }: { icon: LucideIcon, title: string, desc: string }) {
    return (
        <div className="flex items-start space-x-4 group">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors">
                <Icon className="w-6 h-6 text-blue-400" />
            </div>
            <div>
                <h4 className="font-bold text-white mb-1">{title}</h4>
                <p className="text-sm text-gray-500">{desc}</p>
            </div>
        </div>
    );
}
