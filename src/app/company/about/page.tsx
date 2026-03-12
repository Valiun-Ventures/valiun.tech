import { Metadata } from "next";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
    title: "About Us",
    alternates: {
        canonical: "/company/about",
    },
};
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Target, Eye } from "lucide-react";
import { CallToAction } from "@/components/sections/CallToAction";

const founders = [
    {
        name: "Founder 1",
        role: "Chief Executive Officer",
        bio: "Visionary leader with a decade of experience in digital transformation and AI strategy. Driven by the mission to make enterprise-grade technology accessible to high-growth businesses. Expert in aligning technical roadmaps with business objectives."
    },
    {
        name: "Founder 2",
        role: "Chief Technology Officer",
        bio: "Technical architect specializing in scalable cloud infrastructures and agentic workflows. Focused on building the robust foundations that power our innovative digital solutions. Leading our research into next-gen LLM orchestration."
    }
];

const stats = [
    { label: "Active Clients", value: "50+" },
    { label: "Projects Delivered", value: "120+" },
    { label: "Cloud Uptime", value: "99.9%" },
    { label: "Agentic Runs", value: "1M+" }
];

const timeline = [
    { year: "2015", title: "The Inception", description: "Founded by two software engineers with a shared vision of making enterprise software intuitive and accessible. Our first AI-powered prototype gained immediate traction." },
    { year: "2018", title: "Scale-Up & Global Expansion", description: "Secured significant growth funding and expanded operations to serve European and Asian markets, growing our specialized team rapidly." },
    { year: "2021", title: "Pivoting to Cloud-Native", description: "Transformed our main offering into a comprehensive cloud-native infrastructure suite, migrating hundreds of enterprise clients to modern stacks." },
    { year: "2024", title: "Agentic AI Integration", description: "At the forefront of the AI agent revolution, integrating advanced autonomous workflows into our core B2B solutions." }
];

export default function AboutPage() {
    return (
        <div className="relative pb-24 overflow-hidden bg-[#050505]">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
                <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-purple-500/5 blur-[100px] rounded-full" />
                <div className="absolute bottom-[10%] left-[5%] w-[35%] h-[35%] bg-blue-600/5 blur-[120px] rounded-full" />
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
                        THE VALIUN STORY
                    </div>
                </Reveal>
                <Reveal width="100%">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8 leading-tight">
                        Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Future</span> Together.
                    </h1>
                </Reveal>
                <Reveal width="100%" delay={0.2}>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto font-light">
                        We aren&apos;t just a development partner. We are visionaries, engineers,
                        and designers dedicated to pushing the boundaries of what&apos;s possible.
                    </p>
                </Reveal>
            </Section>

            {/* Mission & Vision Section */}
            <Section className="py-12 lg:py-16 px-4 md:px-20 lg:px-40">
                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    <Reveal x={-30}>
                        <SpotlightCard className="p-10 h-full">
                            <div className="size-14 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400 mb-8 border border-blue-500/20">
                                <Target className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Our Mission</h2>
                            <p className="text-slate-400 text-lg leading-relaxed font-light">
                                To empower businesses with the technology they need to lead in their industries.
                                We focus on building futuristic, scalable, and human-centric solutions.
                            </p>
                        </SpotlightCard>
                    </Reveal>
                    <Reveal x={30} delay={0.2}>
                        <SpotlightCard className="p-10 h-full">
                            <div className="size-14 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-8 border border-purple-500/20">
                                <Eye className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-6 uppercase tracking-tight">Our Vision</h2>
                            <p className="text-slate-400 text-lg leading-relaxed font-light">
                                To become the world&apos;s leading architect of Enterprise AI systems,
                                known for our obsession with quality and innovation.
                            </p>
                        </SpotlightCard>
                    </Reveal>
                </div>
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

            {/* Our Story Timeline */}
            <Section className="py-20 px-4 md:px-20 lg:px-40">
                <div className="text-center mb-16">
                    <Reveal className="mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Story</span></h2>
                        <p className="text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                            From a bold idea to a global force in enterprise technology.
                        </p>
                    </Reveal>
                </div>

                <div className="max-w-4xl mx-auto relative border-l border-white/10 pl-10 md:pl-20 py-4">
                    {timeline.map((item, i) => (
                        <Reveal key={i} delay={i * 0.1} x={20}>
                            <div className="mb-16 relative">
                                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[48.5px] md:-left-[88.5px] top-1.5 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                                <h3 className="text-xl font-bold text-blue-500 mb-2 uppercase tracking-[0.2em] text-sm">{item.year}</h3>
                                <h4 className="text-2xl font-bold text-white mb-4 tracking-tight">{item.title}</h4>
                                <p className="text-slate-400 leading-relaxed font-light text-lg">
                                    {item.description}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* Founders - Text Focus */}
            <Section className="py-20 px-4 md:px-20 lg:px-40 bg-white/[0.01] border-y border-white/5">
                <div className="text-center mb-16">
                    <Reveal className="mx-auto">
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
                            <span className="text-[10px] font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 uppercase">
                                Leadership
                            </span>
                        </div>
                    </Reveal>
                    <Reveal delay={0.2}>
                        <h2 className="text-4xl md:text-5xl font-bold">The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Founders</span></h2>
                    </Reveal>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    {founders.map((founder, i) => (
                        <Reveal key={i} delay={i * 0.2}>
                            <div className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
                                <p className="text-blue-500 font-bold tracking-widest text-[10px] uppercase mb-4">{founder.role}</p>
                                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">{founder.name}</h3>
                                <p className="text-slate-400 text-lg leading-relaxed font-light italic">
                                    &quot;{founder.bio}&quot;
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Section>

            {/* Final CTA Section */}
            <CallToAction
                title="Ready to build something extraordinary?"
                description="We combine precision engineering with a vision for the future, delivering impact that scales with your ambition."
                primaryButtonText="Start Your Project"
                secondaryButtonText="Explore Our Work"
                secondaryButtonHref="/services"
            />
        </div>
    );
}
