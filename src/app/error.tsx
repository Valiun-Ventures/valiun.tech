"use client";

import { useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { RefreshCcw, Home, AlertCircle } from "lucide-react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden">
            {/* Background Decorative Gradients */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-500/5 blur-[120px] rounded-full" />

            <Section className="relative z-10 text-center">
                <Reveal width="100%">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-8">
                        RUNTIME ERROR DETECTED
                    </div>
                </Reveal>

                <Reveal width="100%" delay={0.2}>
                    <div className="flex justify-center mb-6">
                        <AlertCircle className="w-20 h-20 text-red-500/50" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-white">
                        Something went wrong
                    </h1>
                </Reveal>

                <Reveal width="100%" delay={0.3}>
                    <p className="text-gray-400 max-w-md mx-auto mb-10 text-lg font-light leading-relaxed">
                        An unexpected error occurred while processing this request. Our systems have been notified.
                    </p>
                </Reveal>

                <Reveal width="100%" delay={0.4}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Button
                            onClick={() => reset()}
                            className="group flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold transition-all shadow-lg shadow-blue-600/20"
                        >
                            <RefreshCcw size={18} className="group-hover:rotate-180 transition-transform duration-500" />
                            Try Again
                        </Button>
                        <Button
                            variant="outline"
                            href="/"
                            className="group flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 hover:border-white/20 text-white rounded-full font-bold transition-all"
                        >
                            <Home size={18} />
                            Go Home
                        </Button>
                    </div>
                </Reveal>
            </Section>
        </div>
    );
}
