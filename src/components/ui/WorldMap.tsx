"use client";

import { useRef, useState, useMemo, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import DottedMap from "dotted-map";
import Image from "next/image";
import { useTheme } from "next-themes";

interface MapProps {
    dots?: Array<{
        start: { lat: number; lng: number; label?: string };
        end: { lat: number; lng: number; label?: string };
    }>;
    lineColor?: string;
    showLabels?: boolean;
    labelClassName?: string;
    animationDuration?: number;
    loop?: boolean;
}

export function WorldMap({
    dots = [],
    lineColor = "#3b82f6",
    showLabels = true,
    labelClassName = "text-sm",
    animationDuration = 2,
    loop = true
}: MapProps) {
    const svgRef = useRef<SVGSVGElement>(null);
    const [mounted, setMounted] = useState(false);
    const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
    const { theme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const map = useMemo(
        () => new DottedMap({ height: 100, grid: "diagonal" }),
        []
    );

    const svgMap = useMemo(() => {
        // As requested: "I need the map in black colour"
        // We hardcode the black aesthetic for consistency and to avoid hydration errors
        return map.getSVG({
            radius: 0.22,
            color: "rgba(255, 255, 255, 0.2)",
            shape: "circle",
            backgroundColor: "#000000",
        });
    }, [map]);

    if (!mounted) {
        return <div className="w-full aspect-[2/1] md:aspect-[2.5/1] lg:aspect-[2/1] bg-black rounded-lg" />;
    }

    const projectPoint = (lat: number, lng: number) => {
        const x = (lng + 180) * (800 / 360);
        const y = (90 - lat) * (400 / 180);
        return { x, y };
    };

    const createCurvedPath = (
        start: { x: number; y: number },
        end: { x: number; y: number }
    ) => {
        const midX = (start.x + end.x) / 2;
        const midY = Math.min(start.y, end.y) - 50;
        return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
    };

    // Calculate animation timing
    const staggerDelay = 0.3;
    const totalAnimationTime = dots.length * staggerDelay + animationDuration;
    const pauseTime = 2; // Pause for 2 seconds when all paths are drawn
    const fullCycleDuration = totalAnimationTime + pauseTime;

    return (
        <div className="w-full aspect-[1.2/1] sm:aspect-[2/1] bg-black rounded-lg relative font-sans sm:overflow-visible overflow-hidden">
            <Image
                src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
                className="h-full w-full pointer-events-none select-none"
                alt="world map"
                draggable={false}
                priority
                layout="fill"
            />
            <svg
                ref={svgRef}
                viewBox="0 0 800 400"
                className="w-full h-full absolute inset-0 pointer-events-auto select-none"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="white" stopOpacity="0" />
                        <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
                        <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>

                    <filter id="glow">
                        <feMorphology operator="dilate" radius="0.5" />
                        <feGaussianBlur stdDeviation="1" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {dots.map((dot, i) => {
                    const startPoint = projectPoint(dot.start.lat, dot.start.lng);
                    const endPoint = projectPoint(dot.end.lat, dot.end.lng);

                    const startTime = (i * staggerDelay) / fullCycleDuration;
                    const endTime = (i * staggerDelay + animationDuration) / fullCycleDuration;
                    const resetTime = totalAnimationTime / fullCycleDuration;

                    return (
                        <g key={`path-group-${i}`}>
                            <m.path
                                d={createCurvedPath(startPoint, endPoint)}
                                fill="none"
                                stroke="url(#path-gradient)"
                                strokeWidth="1.5"
                                initial={{ pathLength: 0 }}
                                animate={loop ? {
                                    pathLength: [0, 0, 1, 1, 0],
                                } : {
                                    pathLength: 1
                                }}
                                transition={loop ? {
                                    duration: fullCycleDuration,
                                    times: [0, startTime, endTime, resetTime, 1],
                                    ease: "easeInOut",
                                    repeat: Infinity,
                                    repeatDelay: 0,
                                } : {
                                    duration: animationDuration,
                                    delay: i * staggerDelay,
                                    ease: "easeInOut",
                                }}
                            />

                            {loop && (
                                <m.circle
                                    r="2.5"
                                    fill={lineColor}
                                    initial={{ offsetDistance: "0%", opacity: 0 }}
                                    animate={{
                                        offsetDistance: ["0%", "0%", "100%", "100%", "100%"],
                                        opacity: [0, 0, 1, 0, 0],
                                    }}
                                    transition={{
                                        duration: fullCycleDuration,
                                        times: [0, startTime, endTime, resetTime, 1],
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatDelay: 0,
                                    }}
                                    style={{
                                        offsetPath: `path('${createCurvedPath(startPoint, endPoint)}')`,
                                    }}
                                />
                            )}
                        </g>
                    );
                })}

                {/* Render Hub (Mumbai) separately once */}
                {(() => {
                    const hub = dots[0]?.start;
                    if (!hub) return null;
                    const hubPoint = projectPoint(hub.lat, hub.lng);
                    return (
                        <g key="hub-group">
                            <m.g className="cursor-pointer" whileHover={{ scale: 1.2 }}>
                                <circle cx={hubPoint.x} cy={hubPoint.y} r="3.5" fill={lineColor} filter="url(#glow)" />
                                <circle cx={hubPoint.x} cy={hubPoint.y} r="3.5" fill={lineColor} opacity="0.5">
                                    <animate attributeName="r" from="3.5" to="15" dur="3s" repeatCount="indefinite" />
                                    <animate attributeName="opacity" from="0.6" to="0" dur="3s" repeatCount="indefinite" />
                                </circle>
                            </m.g>
                            {showLabels && hub.label && (
                                <m.g
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="pointer-events-none"
                                >
                                    <foreignObject x={hubPoint.x - 50} y={hubPoint.y - 35} width="100" height="30">
                                        <div className="flex items-center justify-center">
                                            <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-blue-500 text-white shadow-lg whitespace-nowrap">
                                                {hub.label}
                                            </span>
                                        </div>
                                    </foreignObject>
                                </m.g>
                            )}
                        </g>
                    );
                })()}

                {/* Render Destination Spokes */}
                {dots.map((dot, i) => {
                    const endPoint = projectPoint(dot.end.lat, dot.end.lng);
                    const endTime = (i * staggerDelay + animationDuration) / fullCycleDuration;
                    const resetTime = totalAnimationTime / fullCycleDuration;

                    return (
                        <g key={`destination-${i}`}>
                            <m.g className="cursor-pointer" whileHover={{ scale: 1.2 }}>
                                <circle cx={endPoint.x} cy={endPoint.y} r="3" fill={lineColor} filter="url(#glow)" />
                                <circle cx={endPoint.x} cy={endPoint.y} r="3" fill={lineColor} opacity="0.3">
                                    <animate attributeName="r" from="3" to="10" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                                    <animate attributeName="opacity" from="0.4" to="0" dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
                                </circle>
                            </m.g>
                            {showLabels && dot.end.label && (
                                <m.g
                                    initial={{ opacity: 0, y: 5 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                    className="pointer-events-none"
                                >
                                    <foreignObject x={endPoint.x - 50} y={endPoint.y - 35} width="100" height="30">
                                        <div className="flex items-center justify-center">
                                            <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-blue-500/10 backdrop-blur-md text-white border border-blue-500/20 shadow-sm whitespace-nowrap">
                                                {dot.end.label}
                                            </span>
                                        </div>
                                    </foreignObject>
                                </m.g>
                            )}
                        </g>
                    );
                })}
            </svg>

            {/* Mobile Tooltip */}
            <AnimatePresence>
                {hoveredLocation && (
                    <m.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute bottom-4 left-4 bg-white/90 dark:bg-black/90 text-black dark:text-white px-3 py-2 rounded-lg text-sm font-medium backdrop-blur-sm sm:hidden border border-gray-200 dark:border-gray-700"
                    >
                        {hoveredLocation}
                    </m.div>
                )}
            </AnimatePresence>
        </div>
    );
}
