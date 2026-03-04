import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import {
    Zap,
    Shield,
    Rocket,
    Star
} from "lucide-react";
import { CallToAction } from "@/components/sections/CallToAction";

const benefits = [
    { icon: <Zap className="w-6 h-6 text-blue-400" />, title: "Innovation", description: "Cutting-edge solutions that keep you ahead of the curve. We constantly research and integrate the latest technologies like Agentic AI." },
    { icon: <Shield className="w-6 h-6 text-purple-400" />, title: "Reliability", description: "Robust infrastructure ensuring 99.99% uptime. Your operations are safe, secure, and always accessible." },
    { icon: <Rocket className="w-6 h-6 text-blue-500" />, title: "Scalability", description: "Flexible systems designed to grow seamlessly with your business. Add capacity or new features instantly as you scale." }
];

const stats = [
    { label: "Active Clients", value: "50+" },
    { label: "Projects Delivered", value: "120+" },
    { label: "Cloud Uptime", value: "99.9%" },
    { label: "Agentic Runs", value: "1M+" }
];

const testimonials = [
    {
        name: "Michael Chen",
        role: "CTO, GlobalLogistics",
        content: "Valiun Tech completely transformed our legacy systems. Their innovative approach and flawless execution saved us thousands of hours of manual overhead.",
        image: "https://i.pravatar.cc/100?img=12"
    },
    {
        name: "Sarah Jenkins",
        role: "VP Operations, FinScale",
        content: "The scalability of their solutions allowed us to expand into three new markets without any technical hiccups. They are true strategic partners.",
        image: "https://i.pravatar.cc/100?img=32"
    }
];

export default function WhyChooseUsPage() {
    return (
        <div className="relative pb-24 overflow-hidden bg-[#050505]">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-5%] right-[-5%] w-[45%] h-[45%] bg-purple-600/10 blur-[130px] rounded-full" />
                <div className="absolute bottom-[5%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-[0.03]" />
            </div>

            {/* Hero Section */}
            <Section className="relative !mb-0 !pb-20 text-center max-w-4xl mx-auto pt-32">
                <Reveal width="fit-content" className="mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        CORE ADVANTAGES
                    </div>
                </Reveal>
                <Reveal width="100%">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
                        Why Partners <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Trust</span> Valiun.
                    </h1>
                </Reveal>
                <Reveal width="100%" delay={0.2}>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto font-light">
                        We combine precision engineering with a vision for the future,
                        delivering impact that scales with your ambition.
                    </p>
                </Reveal>
            </Section>

            {/* Impact Stats */}
            <Section className="py-12">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <Reveal key={i} delay={i * 0.1} y={20}>
                            <div className="text-center p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 group hover:bg-white/[0.04] transition-all">
                                <h4 className="text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-blue-400 transition-colors">{stat.value}</h4>
                                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{stat.label}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* Core Benefits */}
            <Section className="py-20 px-4 md:px-20 lg:px-40">
                <div className="text-center mb-16">
                    <Reveal className="mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Values</span></h2>
                        <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Discover the principles that drive our engineering and client success.
                        </p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, i) => (
                        <Reveal key={i} delay={i * 0.1} y={20}>
                            <SpotlightCard className="p-10 h-full">
                                <div className="size-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-500 mb-8 border border-blue-500/10">
                                    {benefit.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight">{benefit.title}</h3>
                                <p className="text-slate-400 text-lg leading-relaxed font-light">{benefit.description}</p>
                            </SpotlightCard>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* Testimonials */}
            <Section className="py-20 px-4 md:px-20 lg:px-40 bg-white/[0.01] border-y border-white/5">
                <div className="text-center mb-16">
                    <Reveal className="mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Partners</span> Say</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Real-world impact delivered to industry leaders.
                        </p>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {testimonials.map((t, i) => (
                        <Reveal key={i} delay={i * 0.2}>
                            <SpotlightCard className="p-10 flex flex-col h-full bg-white/[0.02]">
                                <div className="flex gap-1 text-blue-500 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="size-4 fill-current" />
                                    ))}
                                </div>
                                <p className="text-slate-400 text-lg leading-relaxed font-light italic mb-8 grow">
                                    &quot;{t.content}&quot;
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-full overflow-hidden border border-white/10">
                                        <img src={t.image} alt={t.name} className="size-full object-cover grayscale opacity-70" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">{t.name}</p>
                                        <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{t.role}</p>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* Final CTA Section */}
            <CallToAction
                title="Ready to experience the Valiun difference?"
                description="Our team of experts is ready to help you navigate the complexities of digital transformation with confidence."
                primaryButtonText="Start Your Project"
                secondaryButtonText="Explore Our Work"
                secondaryButtonHref="/services"
            />
        </div>
    );
}
