"use client";

import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What industries do you specialize in?",
        answer: "We specialize in FinTech, Healthcare, EdTech, and E-commerce. However, our agile methodology allows us to adapt to various domains, bringing technical excellence to any sector."
    },
    {
        question: "How does your 'Agentic AI' approach differ from traditional AI?",
        answer: "Traditional AI often requires constant human oversight. Our Agentic AI solutions are designed to be autonomous agents that can plan, execute, and iterate on complex tasks, reducing the need for manual intervention."
    },
    {
        question: "Can you help migrate legacy systems to the cloud?",
        answer: "Yes, that is one of our core strengths. We use the 'Strangler Fig' pattern to incrementally migrate monolithic legacy systems to modern, cloud-native microservices architectures with minimal downtime."
    },
    {
        question: "What is your typical engagement model?",
        answer: "We offer flexible engagement models including dedicated teams, fixed-price projects for well-defined scopes, and T&M (Time and Materials) for evolving product development."
    },
    {
        question: "Do you provide post-launch support?",
        answer: "Absolutely. We provide comprehensive SLAs, 24/7 monitoring, and ongoing maintenance packages to ensure your digital assets remain secure, performant, and up-to-date."
    }
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <Section className="py-20">
            <div className="text-center mb-16 relative z-10">
                <Reveal width="100%">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
                </Reveal>
                <Reveal width="100%" delay={0.2}>
                    <p className="text-gray-400 text-lg">Answers to common queries about our services and processes.</p>
                </Reveal>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
                {faqs.map((faq, index) => (
                    <Reveal key={index} width="100%" delay={index * 0.1}>
                        <div
                            className={cn(
                                "border border-white/10 rounded-2xl overflow-hidden transition-all duration-300",
                                openIndex === index ? "bg-white/5 border-blue-500/30" : "bg-transparent hover:border-white/20"
                            )}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex items-center justify-between w-full p-6 text-left"
                            >
                                <span className={cn("text-lg font-medium transition-colors", openIndex === index ? "text-blue-400" : "text-white")}>
                                    {faq.question}
                                </span>
                                <span className="ml-4">
                                    {openIndex === index ? <Minus className="w-5 h-5 text-blue-400" /> : <Plus className="w-5 h-5 text-gray-400" />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {openIndex === index && (
                                    <m.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </m.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </Reveal>
                ))}
            </div>
        </Section>
    )
}
