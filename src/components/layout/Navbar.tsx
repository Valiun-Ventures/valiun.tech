"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";


import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { navigation } from "@/lib/navigation";
import { cn } from "@/lib/utils"; // We need to create this util

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredItem, setHoveredItem] = useState<string | null>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Logo variant="white" />

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navigation.map((item) => (
                        <div
                            key={item.label}
                            className="relative group"
                            onMouseEnter={() => setHoveredItem(item.label)}
                            onMouseLeave={() => setHoveredItem(null)}
                        >
                            <Link
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors flex items-center gap-1",
                                    pathname === item.href
                                        ? "text-blue-500"
                                        : "text-gray-300 hover:text-white"
                                )}
                            >
                                {item.label}
                                {item.children && <ChevronDown className="w-4 h-4" />}
                            </Link>

                            {/* Mega Menu / Dropdown */}
                            <AnimatePresence>
                                {hoveredItem === item.label && item.children && (
                                    <m.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-0 w-64 bg-black/90 border border-white/10 rounded-lg shadow-2xl overflow-hidden mt-2 p-2"
                                    >
                                        <div className="flex flex-col space-y-1">
                                            {item.children.map((child) => (
                                                <Link
                                                    key={child.label}
                                                    href={child.href}
                                                    className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-md transition-colors"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </m.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden lg:block">
                    <Link
                        href="/contact"
                        className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-all"
                    >
                        Get a Quote
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <m.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-black border-t border-white/10"
                    >
                        <div className="flex flex-col p-6 space-y-4">
                            {navigation.map((item) => (
                                <div key={item.label} className="flex flex-col">
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-medium text-gray-200 hover:text-white mb-2"
                                    >
                                        {item.label}
                                    </Link>
                                    {item.children && (
                                        <div className="pl-4 border-l border-white/10 flex flex-col space-y-2 mt-2">
                                            {item.children.map(child => (
                                                <Link
                                                    key={child.label}
                                                    href={child.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="text-sm text-gray-400 hover:text-white"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsOpen(false)}
                                className="mt-4 px-6 py-3 bg-blue-600 text-white text-center rounded-lg font-semibold"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
