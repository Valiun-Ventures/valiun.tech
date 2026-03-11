import { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
    title: "Technologies",
};
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Button } from "@/components/ui/Button";
import {
    Cloud,
    Code2,
    Layout,
    Cpu,
    BarChart,
    Layers,
    Terminal,
    Dna,
    Search
} from "lucide-react";
import { CallToAction } from "@/components/sections/CallToAction";
import { RndSection } from "@/components/sections/RndSection";

const techStack = {
    cloud: ["AWS", "Azure", "Google Cloud", "DigitalOcean", "Cloudflare", "Kubernetes"],
    languages: ["Python", "TypeScript", "Go", "Java", "C++", "Rust"],
    frameworks: ["React", "Next.js", "Django", "Spring Boot", "FastAPI", "NestJS"]
};

const capabilities = [
    {
        icon: <Cpu className="w-8 h-8 text-blue-400" />,
        title: "Agentic AI Orchestration",
        description: "Building autonomous systems that utilize LLMs and custom tools to perform complex, multi-step business operations without manual intervention."
    },
    {
        icon: <Cloud className="w-8 h-8 text-purple-400" />,
        title: "Cloud-Native Architecture",
        description: "Designing resilient, auto-scaling infrastructures optimized for high availability, security, and global performance across major cloud providers."
    },
    {
        icon: <Layout className="w-8 h-8 text-blue-500" />,
        title: "Advanced UI/UX Systems",
        description: "Implementing sophisticated design systems and reactive interfaces that prioritize performance, accessibility, and premium aesthetic experience."
    },
    {
        icon: <BarChart className="w-8 h-8 text-purple-500" />,
        title: "Data Intelligence Hubs",
        description: "Constructing robust data pipelines and real-time analytical engines that translate vast raw data into actionable strategic insights."
    }
];

export default function TechnologiesPage() {
    return (
        <div className="pb-24">
            {/* Hero Section */}
            <Section className="!mb-0 !pb-20 text-center max-w-4xl mx-auto pt-24">
                <Reveal width="fit-content" className="mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                        <Terminal className="w-4 h-4" />
                        OUR TECH STACK
                    </div>
                </Reveal>
                <Reveal width="100%">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
                        Powering Innovation with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Modern Stacks</span>.
                    </h1>
                </Reveal>
                <Reveal width="100%" delay={0.2}>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto font-light">
                        We leverage the best of breed technologies to build software that is
                        robust, secure, and ready for tomorrow&apos;s challenges.
                    </p>
                </Reveal>
            </Section>

            {/* Technical Ecosystem */}
            <Section className="py-20 px-4 md:px-20 lg:px-40 bg-white/[0.01] border-y border-white/5">
                <div className="text-center mb-16">
                    <Reveal className="mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Ecosystem</span></h2>
                        <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                            A curated selection of world-class technologies that form the backbone of our solutions.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <Reveal y={20}>
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-8">
                                <Cloud className="w-6 h-6 text-blue-500" />
                                <h3 className="text-xl font-bold text-white uppercase tracking-widest text-sm text-blue-400">Cloud & Devops</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {techStack.cloud.map((item, i) => (
                                    <span key={i} className="px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-slate-300 text-sm font-medium hover:border-blue-500/30 transition-colors">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                    <Reveal y={20} delay={0.1}>
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-8">
                                <Code2 className="w-6 h-6 text-purple-500" />
                                <h3 className="text-xl font-bold text-white uppercase tracking-widest text-sm text-purple-400">Languages</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {techStack.languages.map((item, i) => (
                                    <span key={i} className="px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-slate-300 text-sm font-medium hover:border-purple-500/30 transition-colors">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                    <Reveal y={20} delay={0.2}>
                        <div className="space-y-6">
                            <div className="flex items-center gap-3 mb-8">
                                <Layout className="w-6 h-6 text-blue-400" />
                                <h3 className="text-xl font-bold text-white uppercase tracking-widest text-sm text-blue-300">Frameworks</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {techStack.frameworks.map((item, i) => (
                                    <span key={i} className="px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/10 text-slate-300 text-sm font-medium hover:border-blue-400/30 transition-colors">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Section>

            {/* Core Capabilities */}
            <Section className="py-20 px-4 md:px-20 lg:px-40">
                <div className="text-center mb-16">
                    <Reveal className="mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Capabilities</span></h2>
                        <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Deep technical domains where our engineers excel and deliver disproportionate value.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {capabilities.map((cap, i) => (
                        <Reveal key={i} delay={i * 0.1} y={20}>
                            <div className="p-10 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 transition-all duration-300 h-full group">
                                <div className="mb-8 group-hover:scale-110 transition-transform duration-500">
                                    {cap.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{cap.title}</h3>
                                <p className="text-slate-400 leading-relaxed font-light">{cap.description}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* R&D Section */}
            <RndSection />

            {/* Final CTA Section */}
            <CallToAction
                title="Ready to leverage world-class technology?"
                description="Whether you need AI orchestration, cloud architecture, or advanced UI/UX, we have the specialized talent to deliver."
                primaryButtonText="Consult an Architect"
                secondaryButtonText="View Services"
                secondaryButtonHref="/services"
            />
        </div>
    );
}
