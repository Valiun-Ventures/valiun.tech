"use client";

import { Section } from "@/components/ui/Section";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import {
    Rocket,
    ArrowRight,
    Briefcase,
    Users,
    HeartPulse,
    TrendingUp,
    Globe,
    Zap,
    Banknote,
    FileText,
    Search,
    UserCheck,
    Trophy,
    Target,
    Lightbulb,
    Brain,
    MapPin,
    Clock,
    Megaphone,
    ChevronRight
} from "lucide-react";
import { jobs } from "@/data/jobs";

const stats = [
    {
        label: "Team Members",
        value: "50+",
        icon: <TrendingUp className="w-6 h-6 text-blue-500 inline-block ml-2 mb-1" />
    },
    { label: "Global Clients", value: "80+" },
    { label: "Experience", value: "10+ Yrs" },
    { label: "Glassdoor Rating", value: "4.9" }
];

const whyJoin = [
    {
        icon: <Globe className="w-10 h-10 text-blue-500" />,
        title: "Exposure to a New World",
        description: "Get exposure to a whole new world of Business Automation. An opportunity to work on FUTURE-PROOF technology!"
    },
    {
        icon: <Zap className="w-10 h-10 text-yellow-500" />,
        title: "TRUGrowth Opportunity",
        description: "Being a part of Valiun Tech gives you a chance to grow at a higher pace than any other industry/Company."
    },
    {
        icon: <Banknote className="w-10 h-10 text-green-500" />,
        title: "Compensation & Incentives",
        description: "Valiun Tech has always believed in mutual growth. We don't only provide competitive compensation but extend growth with attractive Incentives too."
    }
];

const hiringProcess = [
    {
        step: "Step 1",
        title: "Submit Application",
        description: "Fill in a quick form for us to get to know you better.",
        icon: <FileText className="w-6 h-6 text-blue-400" />
    },
    {
        step: "Step 2",
        title: "Screening",
        description: "Our HR will review your application to check your job fitness.",
        icon: <Search className="w-6 h-6 text-purple-400" />
    },
    {
        step: "Step 3",
        title: "First Round",
        description: "This is where we get to know you beyond your resume and your expectations!",
        icon: <UserCheck className="w-6 h-6 text-orange-400" />
    },
    {
        step: "Step 4",
        title: "Final Round",
        description: "In this round of Interview, you showcase your skills and competency related to the position.",
        icon: <Trophy className="w-6 h-6 text-green-400" />
    }
];

const lookingFor = [
    {
        icon: <Zap className="w-10 h-10 text-yellow-500" />,
        title: "Rapid Adapters",
        description: "The tech landscape shifts daily. We value the ability to learn, unlearn, and master new technologies at an accelerated pace."
    },
    {
        icon: <Brain className="w-10 h-10 text-purple-500" />,
        title: "System Architects",
        description: "We look for those who build for the long-term. Scaling enterprise AI requires a deep understanding of complex, interconnected systems."
    },
    {
        icon: <Rocket className="w-10 h-10 text-blue-500" />,
        title: "Visionary Leaders",
        description: "Ownership is our core. We empower you to take charge of projects, innovate fearlessly, and drive meaningful impact for our global clients."
    }
];

// Local jobs moved to @/data/jobs.ts
const categoryIcons: Record<string, React.ReactNode> = {
    users: <Users className="w-5 h-5" />,
    megaphone: <Megaphone className="w-5 h-5" />
};

export default function CareersPage() {
    return (
        <div className="pb-20">
            {/* Hero Section */}
            <Section className="!mb-0 !pb-0 text-center max-w-3xl mx-auto pt-24">
                <Reveal width="fit-content" className="mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        WE&apos;RE HIRING!
                    </div>
                </Reveal>
                <Reveal width="100%">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
                        Build the Future <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">with Us</span>.
                    </h1>
                </Reveal>
                <Reveal width="100%" delay={0.2}>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                        Join a team of driven innovators and creative problem solvers.
                        We&apos;re building the next generation of digital products and looking
                        for extraordinary talent to help us scale.
                    </p>
                </Reveal>
                <Reveal width="100%" delay={0.4}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button href="#open-roles" className="h-12 px-8 shadow-lg shadow-blue-600/20">View Open Roles</Button>
                        <Button variant="outline" href="/company/about" className="h-12 px-8 backdrop-blur-sm bg-white/5 border-white/10">Life at Valiun</Button>
                    </div>
                </Reveal>
            </Section>

            {/* Stats Section */}
            <Section className="py-6 lg:py-8 px-4 md:px-20 lg:px-40">
                <Reveal width="100%" className="text-center mb-12">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 uppercase">
                            Valiun in Numbers
                        </span>
                    </div>
                </Reveal>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center justify-center rounded-2xl bg-white/5 border border-white/10 p-8 transition-colors hover:bg-white/[0.08]">
                            <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-600 mb-2 flex items-center">
                                {stat.value}
                                {"icon" in stat && stat.icon}
                            </span>
                            <span className="text-xs font-medium text-slate-400 uppercase tracking-widest leading-none">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Why Join Valiun Section */}
            <Section className="py-6 lg:py-8 px-4 md:px-20 lg:px-40">
                <Reveal width="100%" className="text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mx-auto">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 uppercase">
                            Our Culture
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8 relative z-10">
                        Why Join <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Valiun Tech?</span>
                    </h2>
                </Reveal>
                <div className="grid md:grid-cols-3 gap-8">
                    {whyJoin.map((item, i) => (
                        <SpotlightCard key={i} className="p-8 text-center flex flex-col items-center">
                            <div className="mb-6 p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                        </SpotlightCard>
                    ))}
                </div>
            </Section>

            {/* Hiring Process Section */}
            <Section className="py-8 lg:py-12 px-4 md:px-20 lg:px-40 bg-white/[0.02]">
                <Reveal width="100%" className="text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mx-auto">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 uppercase">
                            The Journey
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-10">
                        Hiring <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Process</span>
                    </h2>
                </Reveal>
                <div className="relative max-w-6xl mx-auto px-4">
                    {/* Background Connection Line for Desktop */}
                    <div className="hidden lg:block absolute top-[48px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent z-0" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 lg:gap-12 relative z-10">
                        {hiringProcess.map((step, i) => (
                            <div key={i} className="flex flex-col items-center text-center group">
                                <div className="relative mb-10">
                                    <div className="size-24 relative flex items-center justify-center">
                                        {/* Step Circle */}
                                        <div className="absolute inset-0 bg-blue-600/5 rounded-full border border-blue-500/20 group-hover:scale-110 group-hover:bg-blue-600/10 group-hover:border-blue-500/40 transition-all duration-500 shadow-[0_0_20px_rgba(59,130,246,0.1)]" />

                                        <div className="absolute inset-2 bg-slate-900 rounded-full border border-white/5 flex items-center justify-center relative overflow-hidden">
                                            <div className="p-3 text-blue-500 group-hover:scale-110 transition-transform duration-500">
                                                {step.icon}
                                            </div>

                                            {/* Number Badge */}
                                            <div className="absolute -top-1 -right-1 size-7 bg-blue-600 rounded-full flex items-center justify-center text-[10px] font-black border-2 border-[#030303] shadow-lg">
                                                {i + 1}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Connecting Chevron - Positioned in the gap */}
                                    {i < hiringProcess.length - 1 && (
                                        <div className="hidden lg:flex absolute top-1/2 -right-8 translate-x-1/2 -translate-y-1/2 z-20">
                                            <ChevronRight className="w-5 h-5 text-blue-500/40 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                                        </div>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold text-white mb-4 uppercase tracking-tight">{step.title}</h3>
                                <p className="text-xs text-slate-400 leading-relaxed max-w-[200px] mx-auto group-hover:text-slate-300 transition-colors">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* What we&apos;re Looking For Section */}
            <Section className="py-6 lg:py-8 px-4 md:px-20 lg:px-40">
                <Reveal width="100%" className="text-center">
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mx-auto">
                        <span className="text-[10px] font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 uppercase">
                            The Ideal Candidate
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-16">
                        What we&apos;re <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Looking For</span>
                    </h2>
                </Reveal>
                <div className="grid md:grid-cols-3 gap-8">
                    {lookingFor.map((item, i) => (
                        <SpotlightCard key={i} className="p-10 text-center flex flex-col items-center justify-center min-h-[320px] group transition-all duration-500">
                            <div className="size-20 bg-white/5 rounded-full flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 group-hover:bg-blue-600/10 group-hover:border-blue-500/30 transition-all duration-500">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-tight leading-tight">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed max-w-[240px] mx-auto">{item.description}</p>
                        </SpotlightCard>
                    ))}
                </div>
            </Section>

            {/* Job Openings Section */}
            <Section id="open-roles" className="py-8 lg:py-12 px-4 md:px-20 lg:px-40">
                <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between mb-8">
                    <div>
                        <Reveal>
                            <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">
                                <span className="text-[10px] font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 uppercase">
                                    Current Opportunities
                                </span>
                            </div>
                        </Reveal>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Open <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">Roles</span></h2>
                        <p className="text-slate-400">Join our rapidly growing team in Indore.</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 rounded-full border border-white/10 text-xs font-bold text-slate-400 hover:text-white transition-colors">Engineering</button>
                        <button className="px-4 py-2 rounded-full border border-white/10 text-xs font-bold text-slate-400 hover:text-white transition-colors">Marketing</button>
                        <button className="px-4 py-2 rounded-full border border-white/10 text-xs font-bold text-slate-400 hover:text-white transition-colors">Operations</button>
                    </div>
                </div>

                <div className="grid gap-8">
                    {jobs.map((job) => (
                        <SpotlightCard key={job.id} className="p-0 overflow-hidden group">
                            <div className="flex flex-col lg:flex-row">
                                <div className="flex-1 p-8 md:p-10 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold">
                                                {categoryIcons[job.categoryIcon] || <Briefcase className="w-5 h-5" />}
                                                <span className="uppercase tracking-widest">{job.category}</span>
                                            </div>
                                            <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{job.posted}</span>
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-blue-500 transition-colors">{job.title}</h3>
                                        <div className="flex flex-wrap items-center gap-6 text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-8">
                                            <div className="flex items-center gap-1.5">
                                                <MapPin className="w-3.5 h-3.5 text-blue-500" />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock className="w-3.5 h-3.5 text-blue-500" />
                                                <span>{job.type}</span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Briefcase className="w-3.5 h-3.5 text-blue-500" />
                                                <span>{job.experience}</span>
                                            </div>
                                        </div>
                                        <p className="text-slate-400 leading-relaxed mb-8 max-w-2xl">
                                            {job.description}
                                        </p>
                                    </div>
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <Button href={`mailto:info@valiun.com?subject=Application for ${job.title}`} className="h-11 px-8">Apply Now</Button>
                                        <Button variant="outline" href={`/company/careers/${job.id}`} className="h-11 px-8">View Details</Button>
                                    </div>
                                </div>
                                <div className="lg:w-[350px] relative overflow-hidden group-hover:scale-105 transition-all duration-700">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url("${job.image}")` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/10 to-black/40 md:hidden" />
                                </div>
                            </div>
                        </SpotlightCard>
                    ))}
                </div>
            </Section>

        </div>
    );
}
