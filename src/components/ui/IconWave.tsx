"use client";

import { useMemo, useState, useEffect } from "react";
import { m, useAnimate } from "framer-motion";
import {
    Code, Terminal, Cpu, Globe, Zap, Activity, Command,
    GitBranch, Database, Cloud, Server, Smartphone, Laptop,
    Monitor, Layers, Box, Hash, Braces, Link as LinkIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons = [
    Code, Terminal, Cpu, Globe, Zap, Activity, Command,
    GitBranch, Database, Cloud, Server, Smartphone, Laptop,
    Monitor, Layers, Box, Hash, Braces, LinkIcon
];

export function IconWave() {
    const [scope, animate] = useAnimate();
    // Duplicate icons to ensure seamless loop
    const allIcons = useMemo(() => [...icons, ...icons, ...icons], []);

    useEffect(() => {
        const enterAnimation = async () => {
            // 1. Start VERY fast (simulated by a quick translation)
            await animate(scope.current, { x: "-50%" }, { duration: 10, ease: "linear" });

            // 2. Reset instantly to 0 (seamless loop trick)
            await animate(scope.current, { x: "0%" }, { duration: 0 });

            // 3. Continue slowly forever
            animate(scope.current, { x: "-50%" }, {
                duration: 60, // Very slow
                repeat: Infinity,
                ease: "linear"
            });
        };
        enterAnimation();
    }, [animate, scope]);

    return (
        <div className="relative w-full overflow-hidden py-28 bg-black/20 border-y border-white/5 px-4 sm:px-6 lg:px-10 xl:px-16">
            {/* Gradient Masks for smooth fade in/out */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-black via-black/80 to-transparent z-10" />

            {/* Scrolling Wave Container */}
            <div ref={scope} className="flex w-max max-w-7xl mx-auto">
                {allIcons.map((Icon, i) => {
                    // Generate random parameters for "uneven" feel
                    // Using index-based pseudo-random to keep hydration consistent
                    const seed = (i * 1337) % 100;
                    const randomY = 20 + (seed % 30); // Random amplitude 20-50px
                    const randomDuration = 4 + (seed % 4); // Random duration 4-8s
                    const randomDelay = (seed % 10) * 0.1; // Random delay
                    const randomRotate = 10 + (seed % 20); // Random rotation amplitude 10-30deg

                    return (
                        <div
                            key={i}
                            className="w-40 md:w-56 flex-shrink-0 flex items-center justify-center transform translate-y-4"
                        >
                            <m.div
                                className={cn(
                                    "p-8 md:p-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm text-gray-400",
                                    "hover:scale-110 hover:bg-white/10 hover:text-white hover:border-blue-500/50 transition-all duration-300 cursor-pointer shadow-2xl"
                                )}
                                animate={{
                                    y: [-randomY, randomY, -randomY],
                                    rotate: [-randomRotate, randomRotate, -randomRotate], // Swaying rotation
                                }}
                                transition={{
                                    duration: randomDuration,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: randomDelay,
                                }}
                            >
                                <Icon className="w-10 h-10 md:w-14 md:h-14" />
                            </m.div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
