"use client";

import { cn } from "@/lib/utils";
import { m } from "framer-motion";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export function Card({ children, className, onClick }: CardProps) {
    return (
        <m.div
            onClick={onClick}
            className={cn(
                "relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-sm transition-colors hover:bg-white/10 group",
                className
            )}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
        >
            {children}
        </m.div>
    );
}

export function CardTitle({ children, className }: { children: React.ReactNode, className?: string }) {
    return <h3 className={cn("text-xl font-bold text-white mb-2", className)}>{children}</h3>;
}

export function CardDescription({ children, className }: { children: React.ReactNode, className?: string }) {
    return <p className={cn("text-gray-400 text-sm leading-relaxed", className)}>{children}</p>;
}
