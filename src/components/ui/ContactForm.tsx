"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Loader2, Globe, Briefcase, MessageSquare, ChevronDown } from "lucide-react";
import { countryCodes } from "@/lib/countries";

const industries = [
    "Technology",
    "Finance & Banking",
    "Healthcare & Life Sciences",
    "E-commerce & Retail",
    "Education & EdTech",
    "Manufacturing & Logistics",
    "Real Estate",
    "Other"
];

const services = [
    "Agentic AI & Automation",
    "Cloud Architecture & DevSecOps",
    "Web & App Development",
    "Digital Transformation",
    "Cyber Security",
    "UI/UX Design",
    "Consultation"
];

export function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        countryCode: "+91",
        phone: "",
        service: "",
        industry: "",
        otherIndustry: "",
        message: ""
    });

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        try {
            // LeadConnector CRM Webhook
            const WEBHOOK_URL = process.env.NEXT_PUBLIC_CRM_WEBHOOK_URL || "https://services.leadconnectorhq.com/hooks/JrGSBIfGkLLDAxpyR3AV/webhook-trigger/e758453d-05ae-43a7-bbc5-25ce1cfb0ea6";

            console.log("Submitting to Webhook:", WEBHOOK_URL);
            console.log("Payload:", formData);

            const response = await fetch(WEBHOOK_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    submittedAt: new Date().toISOString(),
                    source: "Valiun Tech Contact Form"
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            console.log("Webhook Response:", response);

            // If mode is 'no-cors', the response status will be 0 (opaque)
            // We assume success if no error is thrown in that case
            setIsLoading(false);
            alert("Thank you! Your inquiry has been sent successfully.");

            // Clear form
            setFormData({
                firstName: "",
                lastName: "",
                email: "",
                countryCode: "+91",
                phone: "",
                service: "",
                industry: "",
                otherIndustry: "",
                message: ""
            });
        } catch (error) {
            console.error("Webhook Error:", error);
            setIsLoading(false);
            alert("Something went wrong. Please try again or email us directly at contact@valiun.com");
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value,
            ...(id === "industry" && value !== "Other" ? { otherIndustry: "" } : {})
        }));
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8 bg-white/[0.02] p-8 md:p-10 rounded-[2.5rem] border border-white/[0.08] backdrop-blur-xl shadow-2xl relative overflow-hidden group">
            {/* Subtle inner glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* First and Last Name in same line */}
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-400 ml-1">First Name</label>
                    <input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-gray-600 hover:bg-white/[0.05]"
                        placeholder="John"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-400 ml-1">Last Name</label>
                    <input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-gray-600 hover:bg-white/[0.05]"
                        placeholder="Doe"
                    />
                </div>
            </div>

            {/* Rest on new line for each field */}
            <div className="space-y-2 relative z-10">
                <label htmlFor="email" className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
                <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-gray-600 hover:bg-white/[0.05]"
                    placeholder="john@company.com"
                />
            </div>

            <div className="space-y-2 relative z-10">
                <label htmlFor="phone" className="text-sm font-medium text-gray-400 ml-1">Phone Number</label>
                <div className="flex gap-0 rounded-2xl border border-white/10 overflow-hidden bg-white/[0.03] focus-within:ring-2 focus-within:ring-blue-500/50 focus-within:border-blue-500/50 transition-all group/phone hover:bg-white/[0.05]">
                    <div className="relative flex items-center group/country border-r border-white/10">
                        <select
                            id="countryCode"
                            value={formData.countryCode}
                            onChange={handleChange}
                            className="appearance-none bg-transparent pl-4 pr-8 py-4 text-white focus:outline-none cursor-pointer text-sm font-medium z-10"
                        >
                            {countryCodes.map(c => (
                                <option key={`${c.code}-${c.dial_code}`} value={c.dial_code} className="bg-neutral-900">
                                    {c.flag} {c.code} {c.dial_code}
                                </option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-2.5 w-3.5 h-3.5 text-gray-500 pointer-events-none group-focus-within/country:text-blue-400 transition-colors" />
                    </div>
                    <input
                        id="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="flex-grow bg-transparent px-5 py-4 text-white focus:outline-none placeholder:text-gray-600"
                        placeholder="123 456 7890"
                    />
                </div>
            </div>

            <div className="space-y-2 relative z-10">
                <label htmlFor="service" className="text-sm font-medium text-gray-400 ml-1">Service Interest</label>
                <div className="relative group/select">
                    <select
                        id="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all appearance-none cursor-pointer group-hover/select:bg-white/[0.05]"
                    >
                        <option value="" disabled className="text-gray-600">Select a service...</option>
                        {services.map(s => (
                            <option key={s} value={s} className="bg-neutral-900">{s}</option>
                        ))}
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 group-focus-within/select:text-blue-400 transition-colors">
                        <ChevronDown className="w-4 h-4" />
                    </div>
                </div>
            </div>

            <div className="space-y-2 relative z-10">
                <label htmlFor="industry" className="text-sm font-medium text-gray-400 ml-1">Your Industry</label>
                <div className="relative group/select">
                    <select
                        id="industry"
                        required
                        value={formData.industry}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all appearance-none cursor-pointer group-hover/select:bg-white/[0.05]"
                    >
                        <option value="" disabled>Select an industry...</option>
                        {industries.map(i => (
                            <option key={i} value={i} className="bg-neutral-900">{i}</option>
                        ))}
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 group-focus-within/select:text-blue-400 transition-colors">
                        <ChevronDown className="w-4 h-4" />
                    </div>
                </div>
            </div>

            <AnimatePresence mode="wait">
                {formData.industry === "Other" && (
                    <m.div
                        key="other-industry-field"
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        className="overflow-hidden relative z-10 pb-4"
                    >
                        <div className="space-y-2">
                            <label htmlFor="otherIndustry" className="text-sm font-medium text-blue-400 ml-1 flex items-center gap-2">
                                <Briefcase className="w-3 h-3" />
                                Please Specify Your Industry
                            </label>
                            <input
                                id="otherIndustry"
                                required
                                value={formData.otherIndustry}
                                onChange={handleChange}
                                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all placeholder:text-gray-600 hover:bg-white/[0.05]"
                                placeholder="Enter your industry name..."
                            />
                        </div>
                    </m.div>
                )}
            </AnimatePresence>

            <div className="space-y-2 relative z-10">
                <label htmlFor="message" className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <div className="relative">
                    <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all resize-none placeholder:text-gray-600 hover:bg-white/[0.05]"
                        placeholder="Tell us about your project or inquiry..."
                    />
                </div>
            </div>

            <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold rounded-2xl relative z-10 shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all" isLoading={isLoading}>
                Submit Inquiry
            </Button>
        </form>
    );
}
