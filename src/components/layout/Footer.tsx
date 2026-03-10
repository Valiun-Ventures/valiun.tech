"use client";
import React from "react";
import {
    Facebook,
    Instagram,
    Twitter,
    Linkedin,
    Globe,
} from "lucide-react";
import { FooterBackgroundGradient, TextHoverEffect } from "@/components/ui/hover-footer";
import { Logo } from "@/components/ui/Logo";
import Link from "next/link";
import { navigation } from "@/lib/navigation";

export function Footer() {
    // Extract navigation groups
    const services = navigation.find(n => n.label === "Services")?.children || [];
    const industries = navigation.find(n => n.label === "Industries")?.children || [];
    const company = navigation.find(n => n.label === "Company")?.children || [];

    // Footer link data expanded to be more comprehensive
    const footerLinks = [
        {
            title: "Services",
            links: services.slice(0, 5).map(s => ({ label: s.label, href: s.href })),
        },
        {
            title: "Industries",
            links: industries.slice(0, 5).map(i => ({ label: i.label, href: i.href })),
        },
        {
            title: "Company",
            links: [
                ...company.map(c => ({ label: c.label, href: c.href })),
                { label: "Technologies", href: "/technologies" },
                { label: "Case Studies", href: "/case-studies" },
            ],
        },
    ];

    // Social media icons
    const socialLinks = [
        { icon: <Facebook size={18} />, label: "Facebook", href: "#" },
        { icon: <Instagram size={18} />, label: "Instagram", href: "#" },
        { icon: <Twitter size={18} />, label: "Twitter", href: "#" },
        { icon: <Linkedin size={18} />, label: "Linkedin", href: "#" },
        { icon: <Globe size={18} />, label: "Globe", href: "#" },
    ];

    return (
        <footer className="bg-[#0F0F11]/10 relative h-fit rounded-[2.5rem] overflow-hidden m-4 md:m-8 border border-white/5">
            <div className="max-w-7xl mx-auto p-8 md:p-14 z-40 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 lg:gap-12 pb-12">
                    {/* Brand section */}
                    <div className="flex flex-col space-y-4 lg:col-span-2 text-center md:text-left">
                        <Logo className="justify-center md:justify-start" />
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                            Engineering digital dominance through Agentic AI, modern cloud architectures, and elite engineering solutions for the intelligent future.
                        </p>
                    </div>

                    {/* Footer link sections */}
                    {footerLinks.map((section) => (
                        <div key={section.title} className="text-center md:text-left">
                            <h4 className="text-white text-base font-semibold mb-6">
                                {section.title}
                            </h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-gray-400 hover:text-[#3ca2fa] transition-colors text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Footer bottom bar */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm space-y-6 md:space-y-0 relative z-50 pt-12 border-t border-white/5 mt-8">
                    {/* Copyright - Left */}
                    <p className="text-gray-500 text-xs text-center md:text-left md:flex-1">
                        &copy; {new Date().getFullYear()} Valiun Ventures. All rights reserved.
                    </p>

                    {/* Social Links - Center */}
                    <div className="flex justify-center space-x-6 md:flex-1">
                        {socialLinks.map(({ icon, label, href }) => (
                            <a
                                key={label}
                                href={href}
                                aria-label={label}
                                className="text-gray-400 hover:text-[#3ca2fa] transition-colors"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>

                    {/* Legal Links - Right */}
                    <div className="flex justify-center md:justify-end space-x-6 text-gray-500 text-xs md:flex-1">
                        <Link href="/privacy" className="hover:text-[#3ca2fa] transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-[#3ca2fa] transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Text hover effect */}
            <div className="lg:flex hidden h-[22rem] -mt-36 -mb-24 opacity-20">
                <TextHoverEffect text="Valiun" className="z-40" />
            </div>

            <FooterBackgroundGradient />
        </footer>
    );
}
