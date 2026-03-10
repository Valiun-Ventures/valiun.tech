import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
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
            <div className="text-center mb-20 space-y-6">
                <Reveal width="100%">
                    <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.2]">
                        Core <span className="inline-block pb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Services</span>
                    </h2>
                </Reveal>
                <Reveal width="100%" delay={0.4}>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
                        Comprehensive technology solutions tailored to drive growth and efficiency.
                    </p>
                </Reveal>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.slice(0, 6).map((service, index) => (
                    <Reveal key={service.label} delay={index * 0.1}>
                        <Link href={service.href} className="flex">
                            <SpotlightCard className="min-h-[300px] md:h-[360px] w-full group p-8 hover:shadow-2xl transition-all duration-300 bg-black/40 backdrop-blur-sm border-white/10 hover:border-blue-500/30">
                                <div className="flex flex-col h-full">
                                    <div className="mb-6 p-3 rounded-lg bg-white/5 w-fit border border-white/10 group-hover:scale-110 transition-transform duration-300">
                                        {icons[service.label] || <Code className="w-8 h-8 text-gray-500" />}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                                        {service.label}
                                    </h3>
                                    <p className="text-gray-400 mb-6 leading-relaxed flex-grow">
                                        Expert solutions in {service.label} tailored for your business needs.
                                    </p>
                                    <div className="flex items-center text-blue-400 text-sm font-semibold opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 mt-auto">
                                        Explore Solutions <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </SpotlightCard>
                        </Link>
                    </Reveal>
                ))}
            </div>

            <div className="text-center mt-16">
                <Link href="/services" className="cta-highlight">
                    View All Services
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </Section>
    );
}
