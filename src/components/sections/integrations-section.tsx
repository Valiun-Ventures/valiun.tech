"use client";

import { Button } from "@/components/ui/Button";
import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const ICONS_ROW1 = [
    "https://cdn-icons-png.flaticon.com/128/5968/5968854.png", // Figma
    "https://cdn-icons-png.flaticon.com/128/732/732221.png", // Microsoft
    "https://cdn-icons-png.flaticon.com/128/733/733609.png", // GitHub
    "https://cdn-icons-png.flaticon.com/128/732/732084.png", // AWS
    "https://cdn-icons-png.flaticon.com/128/733/733585.png", // Web
    "https://cdn-icons-png.flaticon.com/128/281/281763.png", // Display
    "https://cdn-icons-png.flaticon.com/128/888/888879.png", // Code
];

const ICONS_ROW2 = [
    "https://cdn-icons-png.flaticon.com/128/174/174857.png", // LinkedIn
    "https://cdn-icons-png.flaticon.com/128/906/906324.png", // API
    "https://cdn-icons-png.flaticon.com/128/888/888841.png", // Mobile
    "https://cdn-icons-png.flaticon.com/128/5968/5968875.png", // Notion
    "https://cdn-icons-png.flaticon.com/128/906/906361.png", // Server
    "https://cdn-icons-png.flaticon.com/128/732/732190.png", // Docker
    "https://cdn-icons-png.flaticon.com/128/888/888847.png", // Database
];

// Utility to repeat icons enough times
const repeatedIcons = (icons: string[], repeat = 4) => Array.from({ length: repeat }).flatMap(() => icons);

export function IntegrationsSection() {
    return (
        <section className="relative py-12 lg:py-20 overflow-hidden bg-[#050505]">
            {/* Dark grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />

            {/* Content */}
            <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white max-w-full sm:whitespace-nowrap mx-auto">
                    Automate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3ca2fa] to-[#bc13fe]">Favourite Tools</span>
                </h2>

                <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    Over 5000+ top applications are available to connect seamlessly with your system, creating an unstoppable, interconnected workflow.
                </p>



                {/* Carousel */}
                <div className="mt-12 overflow-hidden relative pb-2 -mx-6 sm:mx-0">
                    {/* Row 1 */}
                    <div className="flex gap-8 sm:gap-10 whitespace-nowrap animate-scroll-left">
                        {repeatedIcons(ICONS_ROW1, 4).map((src, i) => (
                            <div key={i} className="h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 rounded-full bg-gray-300 shadow-md flex items-center justify-center">
                                <img src={src} alt="Integration icon" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" loading="lazy" decoding="async" />
                            </div>
                        ))}
                    </div>

                    {/* Row 2 */}
                    <div className="flex gap-8 sm:gap-10 whitespace-nowrap mt-6 sm:mt-8 animate-scroll-right">
                        {repeatedIcons(ICONS_ROW2, 4).map((src, i) => (
                            <div key={i} className="h-16 w-16 sm:h-20 sm:w-20 flex-shrink-0 rounded-full bg-gray-300 shadow-md flex items-center justify-center">
                                <img src={src} alt="Integration icon" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" loading="lazy" decoding="async" />
                            </div>
                        ))}
                    </div>

                    {/* Fade overlays */}
                    <div className="absolute left-0 top-0 h-full w-20 sm:w-40 bg-gradient-to-r from-[#0A0A0B] to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 h-full w-20 sm:w-40 bg-gradient-to-l from-[#0A0A0B] to-transparent pointer-events-none" />
                </div>
            </div>
        </section>
    );
}
