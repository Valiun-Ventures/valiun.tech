"use client";

import * as React from "react";
import { m, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type MegaMenuItem = {
    id: number;
    label: string;
    subMenus?: {
        title: string;
        items: {
            label: string;
            description: string;
            icon: React.ElementType;
            href: string;
            color?: string;
        }[];
    }[];
    href?: string;
};

export interface MegaMenuProps extends React.HTMLAttributes<HTMLUListElement> {
    items: MegaMenuItem[];
    className?: string;
}

const MegaMenu = React.forwardRef<HTMLUListElement, MegaMenuProps>(
    ({ items, className, ...props }, ref) => {
        const [openMenu, setOpenMenu] = React.useState<string | null>(null);
        const [isHover, setIsHover] = React.useState<number | null>(null);

        const handleHover = (menuLabel: string | null) => {
            setOpenMenu(menuLabel);
        };

        return (
            <ul
                ref={ref}
                className={cn("relative flex items-center space-x-4", className)}
                {...props}
            >
                {items.map((navItem, index) => (
                    <li
                        key={navItem.label}
                        className="relative"
                        onMouseEnter={() => handleHover(navItem.label)}
                        onMouseLeave={() => handleHover(null)}
                    >
                        {navItem.subMenus ? (
                            <Link
                                href={navItem.href || "#"}
                                className="relative flex cursor-pointer items-center justify-center gap-1 py-1.5 px-4 text-sm text-white/50 transition-colors duration-300 hover:text-white group z-10 whitespace-nowrap"
                                onMouseEnter={() => setIsHover(navItem.id)}
                                onMouseLeave={() => setIsHover(null)}
                            >
                                <span>{navItem.label}</span>
                                <ChevronDown
                                    className={cn(
                                        "h-4 w-4 transition-transform duration-300 group-hover:rotate-180",
                                        openMenu === navItem.label ? "rotate-180" : ""
                                    )}
                                />
                                {(isHover === navItem.id || openMenu === navItem.label) && (
                                    <m.div
                                        layoutId="hover-bg"
                                        className="absolute inset-0 size-full bg-white/10"
                                        style={{
                                            borderRadius: 99,
                                        }}
                                    />
                                )}
                            </Link>
                        ) : (
                            <Link
                                href={navItem.href || "#"}
                                className="relative flex cursor-pointer items-center justify-center gap-1 py-1.5 px-4 text-sm text-white/50 transition-colors duration-300 hover:text-white group z-10 whitespace-nowrap"
                                onMouseEnter={() => setIsHover(navItem.id)}
                                onMouseLeave={() => setIsHover(null)}
                            >
                                <span>{navItem.label}</span>
                                {(isHover === navItem.id || openMenu === navItem.label) && (
                                    <m.div
                                        layoutId="hover-bg"
                                        className="absolute inset-0 size-full bg-white/10"
                                        style={{
                                            borderRadius: 99,
                                        }}
                                    />
                                )}
                            </Link>
                        )}

                        <AnimatePresence>
                            {openMenu === navItem.label && navItem.subMenus && (
                                <div className={cn(
                                    "absolute top-full w-auto pt-6 z-50",
                                    index > items.length - 2 ? "right-0" : "left-0"
                                )}>
                                    {/* Invisible bridge to maintain hover state */}
                                    <div className="absolute top-0 left-0 w-full h-6 bg-transparent" />
                                    <m.div
                                        className="w-max border border-white/10 bg-[#0A0A0A] p-6 shadow-2xl backdrop-blur-xl"
                                        style={{
                                            borderRadius: 24,
                                        }}
                                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                        transition={{ duration: 0.2, ease: "easeOut" }}
                                    >
                                        <div className="flex w-fit shrink-0 space-x-12 overflow-hidden">
                                            {navItem.subMenus.map((sub) => (
                                                <div className="w-full min-w-[200px]" key={sub.title}>
                                                    <h3 className="mb-6 text-[11px] font-mono tracking-[0.2em] uppercase text-white/30 border-b border-white/5 pb-2">
                                                        {sub.title}
                                                    </h3>
                                                    <ul className="space-y-6">
                                                        {sub.items.map((item) => {
                                                            const Icon = item.icon;
                                                            const neonColor = item.color || "#3ca2fa";
                                                            return (
                                                                <li key={item.label}>
                                                                    <Link
                                                                        href={item.href}
                                                                        className="flex items-start space-x-4 group"
                                                                        onClick={() => setOpenMenu(null)}
                                                                        style={{
                                                                            "--neon": neonColor,
                                                                            "--neon-border": `${neonColor}40`,
                                                                            "--neon-bg": `${neonColor}10`,
                                                                            "--neon-shadow": `${neonColor}40`,
                                                                        } as React.CSSProperties}
                                                                    >
                                                                        <div
                                                                            className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/40 transition-all duration-300 group-hover:scale-110 group-hover:[border-color:var(--neon-border)] group-hover:[background-color:var(--neon-bg)] group-hover:[color:var(--neon)] group-hover:[box-shadow:0_0_20px_var(--neon-shadow)]"
                                                                        >
                                                                            <Icon
                                                                                className="h-5 w-5 flex-none transition-all duration-300 group-hover:[filter:drop-shadow(0_0_8px_var(--neon))]"
                                                                            />
                                                                        </div>
                                                                        <div className="w-max leading-5 pt-0.5">
                                                                            <p className="shrink-0 text-[13px] font-semibold text-white group-hover:text-white transition-colors">
                                                                                <span
                                                                                    className="transition-colors duration-300 group-hover:text-white"
                                                                                    style={{
                                                                                        color: "white"
                                                                                    }}
                                                                                >
                                                                                    {item.label}
                                                                                </span>
                                                                            </p>
                                                                            <p className="shrink-0 text-[11px] text-white/40 transition-colors duration-300 group-hover:text-white/70 mt-1 max-w-[180px]">
                                                                                {item.description}
                                                                            </p>
                                                                        </div>
                                                                    </Link>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </m.div>
                                </div>
                            )}
                        </AnimatePresence>
                    </li>
                ))}
            </ul>
        );
    }
);

MegaMenu.displayName = "MegaMenu";

export default MegaMenu;
