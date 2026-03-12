"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { Rocket, Lightbulb, Settings, RefreshCw, Cpu, ArrowRight, Zap, Box } from "lucide-react";

import dynamic from "next/dynamic";
const CallToAction = dynamic(() => import("@/components/sections/CallToAction").then(mod => mod.CallToAction));
const ClientSuccessStories = dynamic(() => import("@/components/sections/client-success-stories").then(mod => mod.ClientSuccessStories));
const FeaturedProjects = dynamic(() => import("@/components/sections/FeaturedProjects").then(mod => mod.FeaturedProjects));
const EngagementModels = dynamic(() => import("@/components/sections/EngagementModels").then(mod => mod.EngagementModels));
const RndSection = dynamic(() => import("@/components/sections/RndSection").then(mod => mod.RndSection));
const BlogsPreview = dynamic(() => import("@/components/sections/BlogsPreview").then(mod => mod.BlogsPreview));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection").then(mod => mod.FAQSection));

export function SolutionsPageClient() {
    return (
        <div className="">
            {/* Hero Section */}
            <Section className="!mb-0 !pb-10 text-center max-w-4xl mx-auto pt-24">
                <Reveal width="fit-content" className="mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                        OUR SOLUTIONS
                    </div>
                </Reveal>
                <Reveal width="100%">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
                        Strategic engineering for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Business Impact</span>.
                    </h1>
                </Reveal>
                <Reveal width="100%" delay={0.2}>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto font-light">
                        From rapid MVP launches to complex enterprise transformations, Valiun 
                        delivers the technical maturity required to turn strategic visions 
                        into market-leading products.
                    </p>
                </Reveal>
            </Section>

            {/* Bento Solutions Grid */}
            <Section className="!pt-8 !mt-0 mb-12 border-t border-white/5">
                <div className="text-center mb-16 pt-16">
                    <Reveal className="mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Execution <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Frameworks</span></h2>
                        <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Proven methodologies and engineering excellence to accelerate your digital journey.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-6">
                    {/* Digital Transformation (Featured - 2x2) */}
                    <div className="md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between group relative overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div>
                            <div className="size-14 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">Digital Transformation</h3>
                            <p className="text-gray-400 mb-6 max-w-md">
                                Re-engineering businesses for a digital-first world. We modernize operations, integrate AI, and build resilient cloud-native ecosystems.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {["Legacy-to-Cloud", "AI Integration", "Process Automation"].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Link href="/solutions/enterprise-digital-transformation" className="inline-flex text-xs uppercase tracking-wider items-center text-blue-400 font-bold group/link z-10">
                            LEARN MORE <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                        <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-all duration-700 pointer-events-none">
                            <Zap className="w-48 h-48" />
                        </div>
                    </div>

                    {/* Startup MVP (Wide - 2x1) */}
                    <div className="md:col-span-2 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center gap-8 relative overflow-hidden group hover:border-orange-500/50 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="flex-1 z-10">
                            <div className="size-12 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
                                <Rocket className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Startup MVP</h3>
                            <p className="text-gray-400 text-sm mb-6">
                                Launch high-quality products in weeks, not months. We prioritize speed-to-market without compromising engineering integrity.
                            </p>
                            <Link href="/solutions/startup-mvp" className="inline-flex text-xs uppercase tracking-wider items-center text-orange-400 font-bold group/link z-10">
                                LEARN MORE <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                        </div>
                        <div className="w-32 h-32 rounded-lg bg-center bg-cover border border-white/10 hidden sm:block opacity-50 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=200&auto=format&fit=crop')]" />
                    </div>

                    {/* SaaS Development (Square - 1x1) */}
                    <div className="md:col-span-1 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-6 group hover:border-yellow-500/50 hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)] transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="size-10 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 mb-4">
                            <Box className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">SaaS Development</h3>
                        <p className="text-gray-400 text-xs mb-4">
                            Multitenant architectures designed for global scale.
                        </p>
                        <Link href="/solutions/saas-product" className="text-yellow-400 text-xs font-bold uppercase tracking-wider flex items-center group-hover:underline">
                            Learn More <ArrowRight className="ml-1 w-3 h-3" />
                        </Link>
                    </div>

                    {/* Legacy Modernization (Square - 1x1) */}
                    <div className="md:col-span-1 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-6 group hover:border-teal-500/50 hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.3)] transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="size-10 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 mb-4">
                            <RefreshCw className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Modernization</h3>
                        <p className="text-gray-400 text-xs mb-4">
                            Safely upgrading technical debt with zero downtime.
                        </p>
                        <Link href="/solutions/legacy-modernization" className="text-teal-400 text-xs font-bold uppercase tracking-wider flex items-center group-hover:underline">
                            Learn More <ArrowRight className="ml-1 w-3 h-3" />
                        </Link>
                    </div>

                    {/* AI-Driven Automation (Wide - 2x1) */}
                    <div className="md:col-span-2 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-between group hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="z-10">
                            <div className="size-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                                <Cpu className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">AI-Driven Automation</h3>
                            <p className="text-gray-400 text-sm max-w-sm">
                                Injecting intelligence into every business process to drive efficiency.
                            </p>
                            <Link href="/solutions/ai-automation" className="text-purple-400 text-xs font-bold uppercase tracking-wider flex items-center mt-4 group-hover:underline">
                                Learn More <ArrowRight className="ml-1 w-3 h-3" />
                            </Link>
                        </div>
                        <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 bg-gradient-to-l from-purple-500/40 to-transparent flex items-center justify-end pr-8 pointer-events-none">
                            <Cpu className="w-24 h-24 text-purple-500" />
                        </div>
                    </div>
                </div>
            </Section>

            <div className="flex flex-col [&>section]:!py-10 lg:[&>section]:!py-12 [&>div]:!py-10 lg:[&>div]:!py-12">
                <FeaturedProjects />
                <EngagementModels />
                <RndSection />
                <BlogsPreview />
                <ClientSuccessStories />
                <FAQSection />
            </div>

            <CallToAction />
        </div>
    );
}
