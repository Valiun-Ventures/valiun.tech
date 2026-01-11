"use client";

import { useRef } from "react";
import {
    m,
    useScroll,


    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
    children: string;
    baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false,
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax overflow-hidden whitespace-nowrap flex flex-nowrap m-0">
            <m.div className="scroller font-bold uppercase text-6xl md:text-9xl flex whitespace-nowrap flex-nowrap" style={{ x }}>
                <span className="block mr-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-500/20 to-gray-500/40">{children} </span>
                <span className="block mr-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-500/20 to-gray-500/40">{children} </span>
                <span className="block mr-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-500/20 to-gray-500/40">{children} </span>
                <span className="block mr-12 text-transparent bg-clip-text bg-gradient-to-r from-gray-500/20 to-gray-500/40">{children} </span>
            </m.div>
        </div>
    );
}

export function VelocityScroll() {
    return (
        <section className="py-24 overflow-hidden border-y border-white/5 bg-black/50">
            <ParallaxText baseVelocity={5}>Innovate • Transform • Scale •</ParallaxText>
            <ParallaxText baseVelocity={-5}>Agentic AI • Cloud Native • Enterprise •</ParallaxText>
        </section>
    );
}
