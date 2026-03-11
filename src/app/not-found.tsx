import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
            {/* Background Decorative Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/10 blur-[100px] rounded-full delay-1000" />

            <Section className="relative z-10 text-center">
                <Reveal width="100%">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-8">
                        ERROR CODE: NOT FOUND
                    </div>
                </Reveal>

                <Reveal width="100%" delay={0.2}>
                    <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">
                        404
                    </h1>
                </Reveal>

                <Reveal width="100%" delay={0.3}>
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
                        Lost in the Architecture?
                    </h2>
                    <p className="text-gray-400 max-w-md mx-auto mb-10 text-lg font-light leading-relaxed">
                        The page you are looking for doesn&apos;t exist or has been moved to a new environment.
                    </p>
                </Reveal>

                <Reveal width="100%" delay={0.4}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="group flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-600/20"
                        >
                            <Home size={18} />
                            Return Home
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="group flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 hover:border-white/20 text-white rounded-full font-bold transition-all"
                        >
                            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                            Go Back
                        </button>
                    </div>
                </Reveal>
            </Section>
        </div>
    );
}
