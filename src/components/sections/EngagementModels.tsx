"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { LucideIcon, Check, Users, Briefcase, Clock } from "lucide-react";

export function EngagementModels() {
    return (
        <Section className="relative bg-white/[0.02] border-y border-white/5 overflow-hidden">
            <div className="text-center mb-16 lg:mb-20 space-y-6 max-w-5xl mx-auto">
                <Reveal width="100%">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                        Flexible <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Engagement Models</span>
                    </h2>
                </Reveal>
                <Reveal width="100%" delay={0.2}>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                        Tailored cooperation frameworks to match your timeline, budget, and project scale.
                    </p>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">

                {/* Model 1: Project Based */}
                <ModelCard
                    title="Project Based"
                    subtitle="Fixed Scope & Price"
                    icon={Briefcase}
                    description="Ideal for defined MVPs with clear requirements."
                    features={[
                        "Clear deliverables",
                        "Fixed timeline & budget",
                        "Risk-free execution",
                        "Waterfall or Agile mix"
                    ]}
                    delay={0.1}
                />

                {/* Model 2: Dedicated Team (Highlighted) */}
                <ModelCard
                    title="Dedicated Team"
                    subtitle="Your Extended Squad"
                    icon={Users}
                    description="Best for long-term product development and scaling."
                    features={[
                        "Full-time senior engineers",
                        "Direct management control",
                        "Scalable team size",
                        "Deep domain knowledge"
                    ]}
                    badgeLabel="Most Popular"
                    delay={0.2}
                />

                {/* Model 3: Staff Augmentation */}
                <ModelCard
                    title="Staff Augmentation"
                    subtitle="Speed & Expertise"
                    icon={Clock}
                    description="Plug rapid expertise into your existing team."
                    features={[
                        "Immediate start",
                        "Specific skill injection",
                        "Hourly / Monthly billing",
                        "Seamless integration"
                    ]}
                    delay={0.3}
                />
            </div>
        </Section>
    );
}

type ModelCardProps = {
    title: string;
    subtitle: string;
    icon: LucideIcon;
    description: string;
    features: string[];
    delay?: number;
    badgeLabel?: string;
};

function ModelCard({ title, subtitle, icon: Icon, description, features, delay, badgeLabel }: ModelCardProps) {
    return (
        <Reveal delay={delay} className="h-full" width="100%">
            <div
                className="relative h-full p-8 rounded-2xl flex flex-col border transition-all duration-300 overflow-hidden bg-white/10 border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.2)]"
                style={{ minHeight: '400px' }}
            >
                {badgeLabel && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 rounded-full text-xs font-bold uppercase tracking-wide text-white shadow-lg z-10">
                        {badgeLabel}
                    </div>
                )}

                <div className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-blue-500 text-white">
                    <Icon className="w-7 h-7" />
                </div>

                <div className="relative z-10 mb-6">
                    <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
                    <p className="text-sm font-medium text-blue-300">{subtitle}</p>
                </div>

                <p className="relative z-10 text-gray-400 mb-8 leading-relaxed text-sm">
                    {description}
                </p>

                <div className="relative z-10 space-y-4 mb-8 flex-grow">
                    {features.map((feature: string, i: number) => (
                        <div key={i} className="flex items-center text-gray-300 text-sm">
                            <Check className="w-4 h-4 mr-3 flex-shrink-0 text-blue-400" />
                            {feature}
                        </div>
                    ))}
                </div>

                <Button variant="default" className="relative z-10 w-full" href="/contact">
                    Get Started
                </Button>
            </div>
        </Reveal>
    );
}
