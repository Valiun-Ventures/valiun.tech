import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { JobApplicationForm } from "@/components/forms/JobApplicationForm";
import { jobs } from "@/data/jobs";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Briefcase, MapPin } from "lucide-react";

export default async function ApplyPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const job = jobs.find((j) => j.id === id);

    if (!job) {
        notFound();
    }

    return (
        <div className="bg-black pb-20">
            {/* Banner Header Style */}
            <div className="relative pt-16 pb-6 border-b border-white/5 overflow-hidden mb-4">
                {/* Background Image Overlay */}
                <div
                    className="absolute inset-0 z-0 opacity-[0.1] grayscale pointer-events-none scale-105"
                    style={{
                        backgroundImage: `url(${job.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <div className="absolute inset-0 bg-black/60 z-0 pointer-events-none" />

                <Section className="py-0 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <Reveal>
                            <Link
                                href={`/company/careers/${job.id}`}
                                className="inline-flex items-center gap-2 text-slate-500 hover:text-white transition-colors mb-8 group"
                            >
                                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                                <span className="text-sm font-medium uppercase tracking-widest">Back to Job Details</span>
                            </Link>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                                Apply for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{job.title}</span>
                            </h1>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <div className="flex flex-wrap items-center gap-6">
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 backdrop-blur-md">
                                    <Briefcase className="w-3.5 h-3.5 text-blue-400" />
                                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{job.category}</span>
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 backdrop-blur-md">
                                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                                    <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{job.location}</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </Section>
            </div>

            {/* Background Decorations */}
            <div className="fixed inset-0 pointer-events-none z-0 mt-16">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px]" />
            </div>

            <Section className="relative z-10">
                <div className="max-w-4xl mx-auto">
                    <Reveal delay={0.3}>
                        <JobApplicationForm jobTitle={job.title} jobId={job.id} />
                    </Reveal>
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
