"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { m, AnimatePresence } from "framer-motion";

import {
    Menu, X, Cpu, Globe, Eye, Shield, Rocket, Box, Search,
    Palette, BookOpen, FileText, Newspaper, Zap, Database,
    Layout, Smartphone, Cloud, ShieldCheck, Microscope,
    Users, Briefcase
} from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import MegaMenu, { MegaMenuItem } from "@/components/ui/mega-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const NAV_ITEMS: MegaMenuItem[] = [
        {
            id: 1,
            label: "Services",
            href: "/services",
            subMenus: [
                {
                    title: "Intelligence & Data",
                    items: [
                        {
                            label: "AI & Automation",
                            description: "Agentic AI & Generative solutions",
                            icon: Cpu,
                            href: "/services/ai-automation",
                            color: "#00f2ff",
                        },
                        {
                            label: "Data & Analytics",
                            description: "BI & Data Engineering expertice",
                            icon: Database,
                            href: "/services/data-analytics",
                            color: "#bc13fe",
                        },
                    ],
                },
                {
                    title: "Core Engineering",
                    items: [
                        {
                            label: "Web Development",
                            description: "SaaS & High-performance web apps",
                            icon: Layout,
                            href: "/services/web-development",
                            color: "#39ff14",
                        },
                        {
                            label: "Mobile Development",
                            description: "Native iOS & Android experiences",
                            icon: Smartphone,
                            href: "/services/mobile-app-development",
                            color: "#ff00ff",
                        },
                        {
                            label: "UI/UX Design",
                            description: "Elite digital product design",
                            icon: Palette,
                            href: "/services/ui-ux-design",
                            color: "#ffcf00",
                        },
                    ],
                },
                {
                    title: "Scale & Security",
                    items: [
                        {
                            label: "DevOps & Cloud",
                            description: "AWS, Azure & GCD Infrastructure",
                            icon: Cloud,
                            href: "/services/devops-cloud",
                            color: "#00f2ff",
                        },
                        {
                            label: "Cybersecurity",
                            description: "Enterprise-grade protection",
                            icon: ShieldCheck,
                            href: "/services/cybersecurity",
                            color: "#bc13fe",
                        },
                        {
                            label: "QA & Testing",
                            description: "Manual & Automated validation",
                            icon: Microscope,
                            href: "/services/qa-testing",
                            color: "#39ff14",
                        },
                    ],
                },
            ],
        },
        {
            id: 2,
            label: "Industries",
            href: "/industries",
            subMenus: [
                {
                    title: "FinTech & Healthcare",
                    items: [
                        {
                            label: "FinTech",
                            description: "Future-ready banking solutions",
                            icon: Globe,
                            href: "/industries/fintech",
                            color: "#00f2ff",
                        },
                        {
                            label: "Healthcare IT",
                            description: "Digital health transformations",
                            icon: Eye,
                            href: "/industries/healthcare",
                            color: "#bc13fe",
                        },
                    ],
                },
                {
                    title: "Commerce & Scale",
                    items: [
                        {
                            label: "E-Commerce",
                            description: "High-conversion retail platforms",
                            icon: Box,
                            href: "/industries/e-commerce",
                            color: "#39ff14",
                        },
                        {
                            label: "Enterprise",
                            description: "Systems for global operations",
                            icon: Shield,
                            href: "/industries/enterprise",
                            color: "#ff00ff",
                        },
                    ],
                },
                {
                    title: "Tech Sectors",
                    items: [
                        {
                            label: "EdTech",
                            description: "The future of smart learning",
                            icon: BookOpen,
                            href: "/industries/edtech",
                            color: "#ffcf00",
                        },
                        {
                            label: "HRTech",
                            description: "Workforce optimization tools",
                            icon: Newspaper,
                            href: "/industries/hrtech",
                            color: "#00f2ff",
                        },
                    ],
                },
            ],
        },
        {
            id: 3,
            label: "Solutions",
            href: "/solutions",
            subMenus: [
                {
                    title: "Enterprise",
                    items: [
                        {
                            label: "Digital Transformation",
                            description: "Modernize your operations",
                            icon: Zap,
                            href: "/solutions/enterprise-digital-transformation",
                            color: "#bc13fe",
                        },
                        {
                            label: "Legacy Modernization",
                            description: "Upgrade technical debt safely",
                            icon: Box,
                            href: "/solutions/legacy-modernization",
                            color: "#39ff14",
                        },
                    ],
                },
                {
                    title: "Products",
                    items: [
                        {
                            label: "Startup MVP",
                            description: "Launch in weeks, not months",
                            icon: Rocket,
                            href: "/solutions/startup-mvp",
                            color: "#ff00ff",
                        },
                        {
                            label: "SaaS Development",
                            description: "Scalable product engineering",
                            icon: Box,
                            href: "/solutions/saas-product",
                            color: "#ffcf00",
                        },
                    ],
                },
            ],
        },
        { id: 4, label: "Technologies", href: "/technologies" },
        { id: 5, label: "Case Studies", href: "/case-studies" },
        { id: 6, label: "Blog", href: "/blog" },
        {
            id: 7,
            label: "Company",
            href: "/company/about",
            subMenus: [
                {
                    title: "About Valiun",
                    items: [
                        {
                            label: "About Us",
                            description: "Our story, vision, and mission",
                            icon: Users,
                            href: "/company/about",
                            color: "#00f2ff",
                        },
                        {
                            label: "Why Choose Us",
                            description: "What sets us apart from others",
                            icon: Shield,
                            href: "/company/why-choose-us",
                            color: "#bc13fe",
                        },
                    ],
                },
                {
                    title: "Join & Connect",
                    items: [
                        {
                            label: "Careers",
                            description: "Build the future with us",
                            icon: Briefcase,
                            href: "/company/careers",
                            color: "#39ff14",
                        },
                        {
                            label: "Contact",
                            description: "Get in touch with our team",
                            icon: Newspaper,
                            href: "/contact",
                            color: "#ff00ff",
                        },
                    ],
                },
            ],
        },
    ];

    const FinalNavItems = NAV_ITEMS.map(item => {
        if (item.subMenus) {
            return {
                ...item,
                subMenus: item.subMenus.map(sub => ({
                    ...sub,
                    items: sub.items.map(subItem => ({
                        ...subItem,
                        icon: subItem.icon || Search
                    }))
                }))
            }
        }
        return item;
    });

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/0",
                scrolled ? "bg-black/80 backdrop-blur-md border-white/10 py-2" : "bg-transparent py-4"
            )}
        >
            <div className="max-w-[1400px] mx-auto px-6 md:px-10 flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center">
                    <Logo variant="white" className="!text-2xl" />
                </div>

                {/* Desktop Mega Menu - Centered */}
                <div className="hidden lg:block absolute left-1/2 -translate-x-1/2">
                    <MegaMenu items={FinalNavItems} />
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-6">
                    <div className="hidden lg:block">
                        <Link
                            href="/contact"
                            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-full transition-all shadow-lg shadow-blue-500/20"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <m.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="lg:hidden fixed inset-0 top-0 bg-black/95 backdrop-blur-xl z-[999] overflow-y-auto"
                    >
                        <div className="flex flex-col h-full">
                            <div className="flex items-center justify-between p-6 border-b border-white/10">
                                <Logo variant="white" className="!text-2xl" />
                                <button onClick={() => setIsOpen(false)} className="text-white p-2">
                                    <X size={32} />
                                </button>
                            </div>

                            <div className="flex-1 p-6 space-y-8 pb-32">
                                {NAV_ITEMS.map((item) => (
                                    <div key={item.label} className="space-y-4">
                                        {item.subMenus ? (
                                            <>
                                                <Link
                                                    href={item.href || "#"}
                                                    onClick={() => setIsOpen(false)}
                                                    className="text-2xl font-bold text-white/50 hover:text-white block tracking-tight transition-colors"
                                                >
                                                    {item.label}
                                                </Link>
                                                <div className="grid grid-cols-1 gap-6 pl-4 border-l border-white/10">
                                                    {item.subMenus.map(sub => (
                                                        <div key={sub.title} className="space-y-3">
                                                            <h4 className="text-[10px] uppercase tracking-[0.2em] text-blue-500 font-bold">{sub.title}</h4>
                                                            <div className="space-y-4">
                                                                {sub.items.map(si => (
                                                                    <Link
                                                                        key={si.label}
                                                                        href={si.href}
                                                                        onClick={() => setIsOpen(false)}
                                                                        className="flex items-center gap-3 text-lg text-white group"
                                                                    >
                                                                        <div className="size-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-blue-600 transition-colors">
                                                                            <si.icon size={16} />
                                                                        </div>
                                                                        {si.label}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        ) : (
                                            <Link
                                                href={item.href || "#"}
                                                onClick={() => setIsOpen(false)}
                                                className="text-2xl font-bold text-white hover:text-blue-500 block"
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="p-6 mt-auto border-t border-white/10 bg-black/50 backdrop-blur-md">
                                <Link
                                    href="/contact"
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-4 bg-blue-600 text-white text-center rounded-xl font-bold text-lg block"
                                >
                                    Start a Project
                                </Link>
                            </div>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
