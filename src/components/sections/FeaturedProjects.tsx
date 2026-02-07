"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

// Data duplicated from case-studies page for now to keep it simple, 
// in a real app this might come from a shared CMS or data file.
const featuredStudies = [
    {
        title: "FinTech Migration to Cloud Native",
        category: "FinTech",
        metric: "40% Cost Reduction",
        href: "/case-studies/fintech-cloud-migration",
        description: "Migrating a legacy banking monolith to microservices on AWS.",
        imageGradient: "from-blue-600/20 to-cyan-500/20"
    },
    {
        title: "AI Customer Support Bot",
        category: "Healthcare",
        metric: "70% Faster Resolution",
        href: "/case-studies/healthcare-ai-bot",
        description: "Generative AI chatbot handling patient inquiries & triage.",
        imageGradient: "from-emerald-500/20 to-green-500/20"
    },
    {
        title: "E-Commerce Platform Re-engineering",
        category: "E-Commerce",
        metric: "2x Conversion Rate",
        href: "/case-studies/ecommerce-platform",
        description: "Revamping UX/UI and backend for high-traffic retail.",
        imageGradient: "from-purple-500/20 to-pink-500/20"
    }
];

export function FeaturedProjects() {
    return (
        <Section className="relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 lg:mb-20 gap-8">
                <div className="max-w-5xl space-y-6">
                    <Reveal width="100%">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Success Stories</span>
                        </h2>
                    </Reveal>
                    <Reveal width="100%" delay={0.2}>
                        <p className="text-gray-400 text-lg md:text-xl font-light">
                            Real results from our partnership with forward-thinking enterprises.
                        </p>
                    </Reveal>
                </div>

                <Reveal delay={0.3}>
                    <Link href="/case-studies" className="hidden md:flex items-center text-white hover:text-blue-400 transition-colors font-medium group">
                        View All Projects <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredStudies.map((study, index) => (
                    <Reveal key={study.title} delay={index * 0.2}>
                        <Link href={study.href} className="group block h-full">
                            <Card className="h-full flex flex-col p-0 overflow-hidden border-white/10 bg-white/5 hover:border-blue-500/30 transition-colors">
                                {/* Abstract Thumbnail Area */}
                                <div className={`h-48 w-full bg-gradient-to-br ${study.imageGradient} flex items-center justify-center relative overflow-hidden`}>
                                    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] group-hover:animate-[shine_3s_linear_infinite]" />
                                    <span className="px-3 py-1 bg-black/40 backdrop-blur-md rounded-full text-xs font-semibold text-white border border-white/10">
                                        {study.category}
                                    </span>
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                                        {study.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3">
                                        {study.description}
                                    </p>

                                    <div className="flex items-center text-green-400 font-bold text-sm pt-4 border-t border-white/10">
                                        <TrendingUp className="w-4 h-4 mr-2" /> {study.metric}
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    </Reveal>
                ))}
            </div>

            <div className="mt-8 text-center md:hidden">
                <Link href="/case-studies" className="inline-flex items-center text-white hover:text-blue-400 transition-colors font-medium">
                    View All Projects <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
            </div>
        </Section>
    );
}
