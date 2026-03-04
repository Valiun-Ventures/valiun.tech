import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import {
    MapPin,
    Clock,
    Briefcase,
    CheckCircle2,
    Info,
    ShieldCheck,
    Gift,
    Rocket
} from "lucide-react";
import Link from "next/link";
import { jobs } from "@/data/jobs";
import { notFound } from "next/navigation";
import { ShareButton } from "@/components/ui/ShareButton";

export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const job = jobs.find((j) => j.id === id);

    if (!job) {
        notFound();
    }

    return (
        <div className="pb-20">
            {/* Header / Hero Section - Vibrant Style */}
            <div className="relative pt-24 pb-12 overflow-hidden border-b border-white/5">
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
                    <div className="absolute inset-0 bg-blue-500 blur-[120px] -translate-y-1/2 translate-x-1/2" />
                </div>

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent z-10" />

                <Section className="py-0 relative z-10">
                    <Reveal>
                        <nav className="flex items-center gap-2 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-8">
                            <Link href="/company/careers" className="hover:text-blue-500 transition-colors">Careers</Link>
                            <span className="text-slate-700">/</span>
                            <span className="text-blue-500/80">{job.category}</span>
                        </nav>
                    </Reveal>

                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="flex-1 max-w-3xl">
                            <Reveal delay={0.2} y={20}>
                                <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                                    {job.title}
                                </h1>
                            </Reveal>

                            <Reveal delay={0.4} y={10}>
                                <div className="flex flex-wrap items-center gap-4">
                                    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                                        <MapPin className="w-4 h-4 text-blue-500" />
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{job.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                                        <Clock className="w-4 h-4 text-purple-500" />
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{job.type}</span>
                                    </div>
                                    <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                                        <Briefcase className="w-4 h-4 text-blue-500" />
                                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{job.experience}</span>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        <Reveal delay={0.6} className="w-full lg:w-[450px]">
                            <div className="relative group rounded-3xl overflow-hidden border border-white/10 aspect-[4/3] lg:aspect-square shadow-2xl shadow-blue-500/5">
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url("${job.image}")` }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent opacity-60" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 backdrop-blur-md text-blue-400 text-[10px] font-black uppercase tracking-widest">
                                        <span className="size-1.5 rounded-full bg-blue-500 animate-pulse" />
                                        Active Role
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </Section>
            </div>

            <Section className="py-8 lg:py-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Main Content Areas */}
                    <div className="lg:col-span-8 space-y-6">
                        {/* About Section - Using Glassmorphic Card */}
                        <Reveal>
                            <div className="group p-8 md:p-10 rounded-[2rem] bg-white/[0.01] border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-500">
                                        <Info className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-xl font-bold text-white uppercase tracking-wider">About the Role</h2>
                                </div>
                                <div className="text-slate-400 leading-relaxed text-lg whitespace-pre-wrap font-light">
                                    {job.content.about}
                                </div>
                            </div>
                        </Reveal>

                        {/* Two column grid for details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <Reveal delay={0.2}>
                                <div className="h-full p-8 rounded-[2rem] bg-white/[0.01] border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-2.5 bg-purple-500/10 rounded-xl text-purple-500">
                                            <Rocket className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-lg font-bold text-white uppercase tracking-wider">Core Impact</h2>
                                    </div>
                                    <ul className="space-y-5">
                                        {job.content.responsibilities.map((item, i) => (
                                            <li key={i} className="flex items-start gap-4 text-slate-400 text-sm font-light leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 mt-1.5 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>

                            <Reveal delay={0.3}>
                                <div className="h-full p-8 rounded-[2rem] bg-white/[0.01] border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="p-2.5 bg-blue-500/10 rounded-xl text-blue-500">
                                            <ShieldCheck className="w-5 h-5" />
                                        </div>
                                        <h2 className="text-lg font-bold text-white uppercase tracking-wider">What You Bring</h2>
                                    </div>
                                    <ul className="space-y-5">
                                        {job.content.requirements.map((item, i) => (
                                            <li key={i} className="flex items-start gap-4 text-slate-400 text-sm font-light leading-relaxed">
                                                <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50 mt-1.5 shrink-0" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        </div>

                        {/* Benefits - Full width card */}
                        <Reveal delay={0.4}>
                            <div className="p-8 md:p-10 rounded-[2rem] bg-white/[0.01] border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-sm">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="p-2.5 bg-green-500/10 rounded-xl text-green-500">
                                        <Gift className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-xl font-bold text-white uppercase tracking-wider">Benefits & Perks</h2>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {job.content.benefits.map((benefit, i) => (
                                        <div key={i} className="group/item flex gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-300">
                                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-400 group-hover/item:text-blue-400 transition-colors">
                                                <CheckCircle2 className="w-5 h-5" />
                                            </div>
                                            <div>
                                                <h4 className="text-sm font-bold text-white mb-1 tracking-tight">{benefit.title}</h4>
                                                <p className="text-[12px] text-slate-500 leading-normal font-light">{benefit.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4">
                        <div className="sticky top-24 space-y-6">
                            <div className="p-8 rounded-[2.5rem] bg-[#0A0A0A] border border-white/10 shadow-[0_32px_64_px-16px_rgba(0,0,0,0.5)] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-blue-600/10 blur-[100px] -mr-24 -mt-24 pointer-events-none" />

                                <div className="relative z-10 space-y-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">Apply to {job.title}</h3>
                                        <p className="text-slate-500 text-sm font-light leading-relaxed">Join our mission to build the future of Enterprise AI.</p>
                                    </div>

                                    <Button
                                        href={`/company/careers/${job.id}/apply`}
                                        className="w-full py-5 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm tracking-widest uppercase transition-all duration-300 shadow-xl shadow-blue-900/10"
                                    >
                                        Send Application
                                    </Button>

                                    <div className="space-y-4 pt-8 border-t border-white/5">
                                        <div className="flex justify-between items-baseline text-[10px] font-bold uppercase tracking-[0.2em]">
                                            <span className="text-slate-600">Department</span>
                                            <span className="text-slate-300">{job.category}</span>
                                        </div>
                                        <div className="flex justify-between items-baseline text-[10px] font-bold uppercase tracking-[0.2em]">
                                            <span className="text-slate-600">Commitment</span>
                                            <span className="text-slate-300">{job.type}</span>
                                        </div>
                                        <div className="flex justify-between items-baseline text-[10px] font-bold uppercase tracking-[0.2em]">
                                            <span className="text-slate-600">Location</span>
                                            <span className="text-slate-300">{job.location.split(' ')[0]}</span>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-4">
                                        <div className="flex -space-x-3">
                                            {[22, 28, 35].map(i => (
                                                <div key={i} className="size-8 rounded-full border-2 border-[#0A0A0A] bg-slate-800 overflow-hidden ring-1 ring-white/10">
                                                    <img
                                                        src={`https://i.pravatar.cc/100?img=${i}`}
                                                        alt="Team"
                                                        className="w-full h-full object-cover grayscale opacity-80"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Team is waiting for you</p>
                                    </div>
                                </div>
                            </div>

                            <ShareButton />
                        </div>
                    </aside>
                </div>
            </Section>
        </div>
    );
}


export async function generateStaticParams() {
    return jobs.map((job) => ({
        id: job.id,
    }));
}
