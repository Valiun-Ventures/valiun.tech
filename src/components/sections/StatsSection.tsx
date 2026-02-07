"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

const stats = [
    { label: "Successful Projects", value: 50, suffix: "+" },
    { label: "Client Retention", value: 98, suffix: "%" },
    { label: "Countries Served", value: 12, suffix: "+" },
    { label: "Global Experts", value: 25, suffix: "+" },
];

function Counter({ value, suffix }: { value: number, suffix: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        damping: 30,
        stiffness: 100,
    });
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current) {
                ref.current.textContent = Math.floor(latest).toString() + suffix;
            }
        });
    }, [springValue, suffix]);

    return <span ref={ref} />;
}

export function StatsSection() {
    return (
        <Section className="py-20 border-y border-white/5 bg-white/[0.02]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/5">
                {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col items-center justify-center p-8 group">
                        <h3 className={cn(
                            "text-5xl md:text-7xl font-bold mb-2 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 group-hover:to-blue-400 transition-colors duration-500",
                            // Add monospaced font if strictly needed for alignment, but Inter works well usually
                        )}>
                            <Counter value={stat.value} suffix={stat.suffix} />
                        </h3>
                        <p className="text-sm text-gray-500 font-medium uppercase tracking-[0.2em] group-hover:text-blue-400/80 transition-colors">
                            {stat.label}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
}
