"use client";

import { m, Variants } from "framer-motion";

interface TextRevealProps {
    text: string;
    className?: string;
}

const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.04 },
    },
};

const child: Variants = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
    hidden: {
        opacity: 0,
        y: 20,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
};

export const TextReveal = ({ text, className }: TextRevealProps) => {
    const words = text.split(" ");

    return (
        <m.div
            style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
            variants={container}
            initial="hidden"
            animate="visible"
            className={className}
        >
            {words.map((word, index) => (
                <m.span variants={child} key={index} style={{ marginRight: "0.25em" }}>
                    {word}
                </m.span>
            ))}
        </m.div>
    );
};
