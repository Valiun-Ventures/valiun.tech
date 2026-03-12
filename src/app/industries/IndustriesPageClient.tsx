"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import Link from "next/link";
import { Building2, Stethoscope, GraduationCap, Users, ShoppingBag, Briefcase, ArrowRight, Shield, Plane, Home } from "lucide-react";

import dynamic from "next/dynamic";
const CallToAction = dynamic(() => import("@/components/sections/CallToAction").then(mod => mod.CallToAction));
const ClientSuccessStories = dynamic(() => import("@/components/sections/client-success-stories").then(mod => mod.ClientSuccessStories));
const FeaturedProjects = dynamic(() => import("@/components/sections/FeaturedProjects").then(mod => mod.FeaturedProjects));
const EngagementModels = dynamic(() => import("@/components/sections/EngagementModels").then(mod => mod.EngagementModels));
const RndSection = dynamic(() => import("@/components/sections/RndSection").then(mod => mod.RndSection));
const BlogsPreview = dynamic(() => import("@/components/sections/BlogsPreview").then(mod => mod.BlogsPreview));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection").then(mod => mod.FAQSection));

export function IndustriesPageClient() {
    return (
        <div className="">
            {/* Hero Section */}
            <Section className="!mb-0 !pb-10 text-center max-w-4xl mx-auto pt-24">
                <Reveal width="fit-content" className="mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                        OUR SECTORS
                    </div>
                </Reveal>
                <Reveal width="100%">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
                        Transforming industries with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Digital Innovation</span>.
                    </h1>
                </Reveal>
                <Reveal width="100%" delay={0.2}>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto font-light">
                        Valiun builds mission-critical solutions across diverse sectors. From FinTech 
                        resilience to Healthcare precision, we empower market leaders with 
                        next-generation engineering.
                    </p>
                </Reveal>
            </Section>

            {/* Bento Industries Grid */}
            <Section className="!pt-8 !mt-0 mb-12 border-t border-white/5">
                <div className="text-center mb-16 pt-16">
                    <Reveal className="mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Market <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Expertise</span></h2>
                        <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Deep domain knowledge combined with technical excellence to solve industry-specific challenges.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[minmax(180px,auto)] gap-6">
                    {/* FinTech (Featured - 2x2) */}
                    <div className="md:col-span-2 md:row-span-2 bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col justify-between group relative overflow-hidden hover:border-blue-500/50 hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.4)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div>
                            <div className="size-14 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-6">
                                <Building2 className="w-8 h-8" />
                            </div>
                            <h3 className="text-2xl font-bold mb-3">FinTech</h3>
                            <p className="text-gray-400 mb-6 max-w-md">
                                Secure, scalable, and compliant financial ecosystems. We build the future of banking, payments, and wealth management.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {["Neo-Banking", "Trading UX", "Blockchain"].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <Link href="/industries/fintech" className="inline-flex text-xs uppercase tracking-wider items-center text-blue-400 font-bold group/link z-10">
                            LEARN MORE <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                        <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-all duration-700 pointer-events-none">
                            <Building2 className="w-48 h-48" />
                        </div>
                    </div>

                    {/* Healthcare IT (Wide - 2x1) */}
                    <div className="md:col-span-2 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center gap-8 relative overflow-hidden group hover:border-teal-500/50 hover:shadow-[0_0_30px_-5px_rgba(20,184,166,0.3)] transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="flex-1 z-10">
                            <div className="size-12 rounded-lg bg-teal-500/20 flex items-center justify-center text-teal-400 mb-4">
                                <Stethoscope className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Healthcare IT</h3>
                            <p className="text-gray-400 text-sm mb-6">
                                HIPAA-compliant digital health platforms that prioritize patient outcomes and data security.
                            </p>
                            <Link href="/industries/healthcare" className="inline-flex text-xs uppercase tracking-wider items-center text-teal-400 font-bold group/link z-10">
                                LEARN MORE <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                            </Link>
                        </div>
                        <div className="w-32 h-32 rounded-lg bg-center bg-cover border border-white/10 hidden sm:block opacity-50 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=200&auto=format&fit=crop')]" />
                    </div>

                    {/* EdTech (Square - 1x1) */}
                    <div className="md:col-span-1 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-6 group hover:border-yellow-500/50 hover:shadow-[0_0_30px_-5px_rgba(234,179,8,0.3)] transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="size-10 rounded-lg bg-yellow-500/20 flex items-center justify-center text-yellow-400 mb-4">
                            <GraduationCap className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">EdTech</h3>
                        <p className="text-gray-400 text-xs mb-4">
                            Modernizing learning with AI-driven educational tools.
                        </p>
                        <Link href="/industries/edtech" className="text-yellow-400 text-xs font-bold uppercase tracking-wider flex items-center group-hover:underline">
                            Learn More <ArrowRight className="ml-1 w-3 h-3" />
                        </Link>
                    </div>

                    {/* HRTech (Square - 1x1) */}
                    <div className="md:col-span-1 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-6 group hover:border-pink-500/50 hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.3)] transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="size-10 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 mb-4">
                            <Users className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">HRTech</h3>
                        <p className="text-gray-400 text-xs mb-4">
                            Optimizing talent management and workforce efficiency.
                        </p>
                        <Link href="/industries/hrtech" className="text-pink-400 text-xs font-bold uppercase tracking-wider flex items-center group-hover:underline">
                            Learn More <ArrowRight className="ml-1 w-3 h-3" />
                        </Link>
                    </div>

                    {/* Real Estate (Square - 1x1) */}
                    <div className="md:col-span-1 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-6 group hover:border-orange-500/50 hover:shadow-[0_0_30px_-5px_rgba(249,115,22,0.3)] transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="size-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400 mb-4">
                            <Home className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Real Estate</h3>
                        <p className="text-gray-400 text-xs mb-4">
                            PropTech solutions for modern property management.
                        </p>
                        <Link href="/industries/real-estate" className="text-orange-400 text-xs font-bold uppercase tracking-wider flex items-center group-hover:underline">
                            Learn More <ArrowRight className="ml-1 w-3 h-3" />
                        </Link>
                    </div>

                    {/* Travel (Square - 1x1) */}
                    <div className="md:col-span-1 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-6 group hover:border-sky-500/50 hover:shadow-[0_0_30px_-5px_rgba(14,165,233,0.3)] transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="size-10 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 mb-4">
                            <Plane className="w-5 h-5" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">Travel</h3>
                        <p className="text-gray-400 text-xs mb-4">
                            Seamless booking and itinerary management platforms.
                        </p>
                        <Link href="/industries/travel-hospitality" className="text-sky-400 text-xs font-bold uppercase tracking-wider flex items-center group-hover:underline">
                            Learn More <ArrowRight className="ml-1 w-3 h-3" />
                        </Link>
                    </div>

                    {/* E-Commerce (Wide - 2x1) */}
                    <div className="md:col-span-2 md:row-span-1 bg-white/5 border border-white/10 rounded-2xl p-8 flex items-center justify-between group hover:border-purple-500/50 hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.3)] transition-all duration-500 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        <div className="z-10">
                            <div className="size-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                                <ShoppingBag className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">E-Commerce</h3>
                            <p className="text-gray-400 text-sm max-w-sm">
                                High-scale retail platforms optimized for conversion and global distribution.
                            </p>
                            <Link href="/industries/e-commerce" className="text-purple-400 text-xs font-bold uppercase tracking-wider flex items-center mt-4 group-hover:underline">
                                Learn More <ArrowRight className="ml-1 w-3 h-3" />
                            </Link>
                        </div>
                        <div className="absolute right-0 top-0 h-full w-1/3 opacity-10 bg-gradient-to-l from-purple-500/40 to-transparent flex items-center justify-end pr-8 pointer-events-none">
                            <ShoppingBag className="w-24 h-24 text-purple-500" />
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
