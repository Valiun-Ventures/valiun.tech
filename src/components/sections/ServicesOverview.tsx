import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TextReveal } from "@/components/ui/TextReveal";
import { navigation } from "@/lib/navigation";
import Link from "next/link";
import { ArrowRight, Bot, Code, Smartphone, Cloud, Database, Palette, Shield } from "lucide-react";

const icons: Record<string, React.ReactNode> = {
    "AI & Automation": <Bot className="w-8 h-8 text-blue-500" />,
    "Web Development": <Code className="w-8 h-8 text-purple-500" />,
    "Mobile App Development": <Smartphone className="w-8 h-8 text-pink-500" />,
    "DevOps & Cloud": <Cloud className="w-8 h-8 text-cyan-500" />,
    "Data & Analytics": <Database className="w-8 h-8 text-emerald-500" />,
    "UI/UX Design": <Palette className="w-8 h-8 text-orange-500" />,
    "Cybersecurity": <Shield className="w-8 h-8 text-red-500" />
};

export function ServicesOverview() {
    // Get services node
    const services = navigation.find(n => n.label === "Services")?.children || [];

    return (
        <Section id="services" className="relative z-10">
            <div className="text-center mb-16 space-y-4">
                <Reveal width="100%">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            Core Services
                        </span>
                    </h2>
                </Reveal>
                <Reveal width="100%" delay={0.4}>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Comprehensive technology solutions tailored to drive growth and efficiency.
                    </p>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.slice(0, 6).map((service, index) => (
                    <Reveal key={service.label} delay={index * 0.1}>
                        <Link href={service.href}>
                            <SpotlightCard className="h-full group p-6 hover:shadow-2xl transition-shadow bg-black/40 backdrop-blur-sm">
                                <div className="mb-6 p-3 rounded-lg bg-white/5 w-fit border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                    {icons[service.label] || <Code className="w-8 h-8 text-gray-500" />}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                                    {service.label}
                                </h3>
                                <p className="text-gray-400 mb-6 leading-relaxed">
                                    Expert solutions in {service.label} tailored for your business needs.
                                </p>
                                <div className="flex items-center text-blue-400 text-sm font-medium opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    Explore Solutions <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </SpotlightCard>
                        </Link>
                    </Reveal>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link href="/services" className="inline-flex items-center text-gray-400 hover:text-white transition-colors relative group">
                    View All Services
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300" />
                </Link>
            </div>
        </Section>
    );
}
