"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { m } from "framer-motion";
import { Bot, Code, Smartphone, Cloud, Database, Palette, Shield, Terminal, ArrowRight } from "lucide-react";
import { CallToAction } from "@/components/sections/CallToAction";
import { OverviewHero } from "@/components/ui/OverviewHero";

export default function ServicesPage() {
    return (
        <div className="">
            {/* Hero Section */}
            <OverviewHero
                badge="Intelligence at Scale"
                title="Elite Capabilities."
                description="We architect high-performance digital ecosystems. From Agentic AI to mission-critical cloud infrastructure, we build the foundations of market dominance."
                gradientFrom="#3ca2fa"
                gradientTo="#bc13fe"
            />


            {/* Bento Services Grid */}
            <Section className="!pt-8 !mt-0 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-6">
                    {/* AI & Automation (Featured - 2x2) */}
                    <div className="md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between group relative overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div>
                            <div className="size-14 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                                <Bot className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">AI & Automation</h3>
                            <p className="text-gray-400 mb-6 max-w-md">
                                Harness the power of custom LLMs and intelligent agentic workflows. We automate the mundane to let your team focus on high-impact creativity.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {["Custom GPTs", "NLP", "Predictive Ops"].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Link href="/services/ai-automation" className="inline-flex items-center text-blue-400 font-bold group/link z-10">
                            Explore AI Solutions <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                        {/* Decorative Icon Background */}
                        <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-all duration-700 pointer-events-none">
                            <Bot className="w-48 h-48" />
                        </div>
                    </div>

                    {/* Web Development (Wide - 2x1) */}
                    <div className="md:col-span-2 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center gap-8 relative overflow-hidden group hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="flex-1 z-10">
                            <div className="size-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                                <Code className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Web Architectures</h3>
                            <p className="text-gray-400 text-sm">
                                High-performance, scalable web apps built with Next.js, React, and cloud-native infrastructure.
                            </p>
                        </div>
                        <div className="w-32 h-32 rounded-lg bg-center bg-cover border border-white/10 hidden sm:block opacity-50 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=200&auto=format&fit=crop')]" />
                    </div>

                    {/* UI/UX Design (Square - 1x1) */}
                    <div className="md:col-span-1 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-6 group hover:border-orange-500/50 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)] transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="size-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
                            <Palette className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">UI/UX Design</h3>
                        <p className="text-gray-400 text-xs mb-4">
                            Intuitive interfaces that convert users into advocates.
                        </p>
                        <Link href="/services/ui-ux-design" className="text-orange-400 text-xs font-bold uppercase tracking-wider flex items-center group-hover:underline">
                            Learn More <ArrowRight className="ml-1 w-3 h-3" />
                        </Link>
                    </div>

                    {/* Mobile Apps (Square - 1x1) */}
                    <div className="md:col-span-1 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-6 group hover:border-pink-500/50 hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)] transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="size-10 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 mb-4">
                            <Smartphone className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Mobile Apps</h3>
                        <p className="text-gray-400 text-xs mb-4">
                            Native iOS and Android experiences tailored for impact.
                        </p>
                        <Link href="/services/mobile-app-development" className="text-pink-400 text-xs font-bold uppercase tracking-wider flex items-center group-hover:underline">
                            Learn More <ArrowRight className="ml-1 w-3 h-3" />
                        </Link>
                    </div>

                    {/* DevOps (Square - 1x1) */}
                    <div className="md:col-span-1 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-6 group hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.3)] transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="size-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                            <Terminal className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Cloud & DevOps</h3>
                        <p className="text-gray-400 text-xs mb-4">
                            Seamless CI/CD pipelines and robust infrastructure.
                        </p>
                        <Link href="/services/devops-cloud" className="text-cyan-400 text-xs font-bold uppercase tracking-wider flex items-center group-hover:underline">
                            Learn More <ArrowRight className="ml-1 w-3 h-3" />
                        </Link>
                    </div>

                    {/* Cybersecurity (Square - 1x1) */}
                    <div className="md:col-span-1 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-6 group hover:border-red-500/50 hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.3)] transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="size-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-500 mb-4">
                            <Shield className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Cybersecurity</h3>
                        <p className="text-gray-400 text-xs mb-4">
                            Hardening your digital assets against evolving threats.
                        </p>
                        <Link href="/services/cybersecurity" className="text-red-500 text-xs font-bold uppercase tracking-wider flex items-center group-hover:underline">
                            Learn More <ArrowRight className="ml-1 w-3 h-3" />
                        </Link>
                    </div>

                    {/* Data Analytics (Wide - 2x1) */}
                    <div className="md:col-span-2 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-between group hover:border-emerald-500/50 hover:shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="z-10">
                            <div className="size-12 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4">
                                <Database className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Data Intelligence</h3>
                            <p className="text-gray-400 text-sm max-w-sm">
                                Turning raw data into actionable insights through custom visualization and modeling.
                            </p>
                            <Link href="/services/data-analytics" className="text-emerald-400 text-xs font-bold uppercase tracking-wider flex items-center mt-4 group-hover:underline">
                                Learn More <ArrowRight className="ml-1 w-3 h-3" />
                            </Link>
                        </div>
                        <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 bg-gradient-to-l from-emerald-500/40 to-transparent flex items-center justify-end pr-8 pointer-events-none">
                            <Database className="w-24 h-24 text-emerald-500" />
                        </div>
                    </div>
                </div>
            </Section>

            {/* Quality Assurance Section */}
            <CallToAction />
        </div>
    );
}
