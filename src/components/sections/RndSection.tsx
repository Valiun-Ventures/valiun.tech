"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Cpu, Dna, Layers, Search } from "lucide-react";

export function RndSection() {
    return (
        <Section className="py-20 px-4 md:px-20 lg:px-40 bg-gradient-to-b from-transparent to-blue-900/10 border-y border-white/5">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <Reveal>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6">
                            <Dna className="w-3 h-3" />
                            CONTINUOUS INNOVATION
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Staying ahead of the <span className="text-blue-500">Curve</span>.
                        </h2>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <p className="text-slate-400 text-lg leading-relaxed font-light mb-10">
                            We dedicate 20% of our engineering cycles to R&D. Our lab is currently
                            developing autonomous cross-cloud migration agents and zero-knowledge
                            proof systems for enterprise data privacy.
                        </p>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 text-white font-medium">
                                <Layers className="size-5 text-blue-500" />
                                Next-Gen LLM Fine-tuning
                            </div>
                            <div className="flex items-center gap-4 text-white font-medium">
                                <Search className="size-5 text-blue-500" />
                                Distributed Compute Optimization
                            </div>
                        </div>
                    </Reveal>
                </div>

                <Reveal x={50}>
                    <div className="relative aspect-square rounded-[3rem] bg-white/[0.02] border border-white/10 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent" />
                        <Cpu className="size-32 text-blue-500/30 animate-pulse" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-64 bg-blue-500/10 blur-[80px] rounded-full" />
                    </div>
                </Reveal>
            </div>
        </Section>
    );
}
