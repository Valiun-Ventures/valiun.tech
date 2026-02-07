"use client";

import { Reveal } from "@/components/ui/Reveal";
import { Mail, MapPin, Phone, Calendar, ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/ui/ContactForm";

const contactInfo = [
    {
        icon: Mail,
        title: "Email Us",
        value: "contact@valiun.com",
        href: "mailto:contact@valiun.com",
        color: "text-blue-400",
        bg: "bg-blue-500/10",
        border: "border-blue-500/20"
    },
    {
        icon: Phone,
        title: "Call Us",
        value: "+91 88158 75671",
        href: "tel:+918815875671",
        color: "text-purple-400",
        bg: "bg-purple-500/10",
        border: "border-purple-500/20"
    },
    {
        icon: Calendar,
        title: "Book a Call",
        value: "Schedule a Discovery Meeting",
        href: "https://api.leadconnectorhq.com/widget/booking/fdgTWK1TQvh4s4cS3Cwq",
        color: "text-emerald-400",
        bg: "bg-emerald-500/10",
        border: "border-emerald-500/20"
    },
    {
        icon: MapPin,
        title: "Headquarters",
        value: "Mumbai, India, 400060",
        href: "https://maps.google.com/?q=Mumbai,India,400060",
        color: "text-pink-400",
        bg: "bg-pink-500/10",
        border: "border-pink-500/20"
    }
];

export function ContactHero() {
    return (
        <section className="relative pt-20 pb-16 overflow-hidden bg-black">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Side: Content */}
                    <div className="relative z-10">
                        <Reveal>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                                <span className="text-xs font-semibold tracking-wider uppercase text-blue-400">Get in Touch</span>
                            </div>
                        </Reveal>

                        <Reveal delay={0.1}>
                            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                                Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Extraordinary</span>
                            </h1>
                        </Reveal>

                        <Reveal delay={0.2}>
                            <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-xl">
                                Ready to transform your vision into a digital masterpiece? Our expert team is here to guide you through every step of your journey.
                            </p>
                        </Reveal>

                        {/* Linear arrangement of cards */}
                        <div className="grid gap-4 max-w-xl">
                            {contactInfo.map((item, index) => (
                                <Reveal key={item.title} delay={0.3 + index * 0.1} width="100%">
                                    <a
                                        href={item.href}
                                        target={item.href.startsWith('mailto:') || item.href.startsWith('tel:') ? "_self" : "_blank"}
                                        rel="noopener noreferrer"
                                        className="group flex items-center p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300 hover:bg-white/[0.08] w-full min-h-[100px]"
                                    >
                                        <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mr-5 border ${item.border} transition-transform group-hover:scale-110`}>
                                            <item.icon className={`w-6 h-6 ${item.color}`} />
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">{item.title}</h3>
                                            <p className="text-white font-semibold text-lg">{item.value}</p>
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                                            <ArrowUpRight className="w-5 h-5 text-white" />
                                        </div>
                                    </a>
                                </Reveal>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="relative z-10 lg:mt-0">
                        <Reveal delay={0.4} width="100%">
                            <div className="relative">
                                {/* Background design element */}
                                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 rounded-[2.5rem] blur-2xl -z-10" />
                                <ContactForm />
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}
