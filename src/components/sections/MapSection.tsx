"use client";

import { WorldMap } from "@/components/ui/WorldMap";
import { Reveal } from "@/components/ui/Reveal";

export function MapSection() {
    return (
        <div className="py-24 md:py-40 bg-black w-full border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 mb-16">
                <Reveal width="100%">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                        <span className="text-xs font-semibold tracking-wider uppercase text-blue-400">Global Presence</span>
                    </div>
                </Reveal>
                <Reveal delay={0.1} width="100%">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        Our Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Network</span>
                    </h2>
                </Reveal>
                <Reveal delay={0.2} width="100%">
                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                        Connect with teams and clients worldwide. Our platform enables seamless
                        collaboration across continents, bringing the world to your workspace.
                    </p>
                </Reveal>
            </div>

            <Reveal delay={0.4} width="100%">
                <div className="max-w-7xl mx-auto px-6">
                    <WorldMap
                        dots={[
                            {
                                start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" },
                                end: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
                            },
                            {
                                start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" },
                                end: { lat: 51.5074, lng: -0.1278, label: "London" },
                            },
                            {
                                start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" },
                                end: { lat: 40.7128, lng: -74.0060, label: "New York" },
                            },
                            {
                                start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" },
                                end: { lat: 30.2672, lng: -97.7431, label: "Texas" },
                            },
                            {
                                start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" },
                                end: { lat: 37.7749, lng: -122.4194, label: "California" },
                            },
                            {
                                start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" },
                                end: { lat: -23.5505, lng: -46.6333, label: "Brazil" },
                            },
                            {
                                start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" },
                                end: { lat: -26.0000, lng: 115.8613, label: "Perth" },
                            },
                            {
                                start: { lat: 19.0760, lng: 72.8777, label: "Mumbai" },
                                end: { lat: -28.0167, lng: 153.4000, label: "Gold Coast" },
                            }
                        ]}
                    />
                </div>
            </Reveal>
        </div>
    );
}
