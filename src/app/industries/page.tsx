import { Section } from "@/components/ui/Section";
import { navigation } from "@/lib/navigation";
import Link from "next/link";
import { Building2, Stethoscope, GraduationCap, Users, Home, Plane, ShoppingBag, Briefcase, ArrowRight } from "lucide-react";

const industryIcons: Record<string, React.ReactNode> = {
    "FinTech": <Building2 className="w-12 h-12 text-blue-500" />,
    "Healthcare IT": <Stethoscope className="w-12 h-12 text-teal-500" />,
    "EdTech": <GraduationCap className="w-12 h-12 text-yellow-500" />,
    "HRTech": <Users className="w-12 h-12 text-pink-500" />,
    "Real Estate": <Home className="w-12 h-12 text-orange-500" />,
    "Travel & Hospitality": <Plane className="w-12 h-12 text-sky-500" />,
    "E-Commerce": <ShoppingBag className="w-12 h-12 text-purple-500" />,
    "Enterprise": <Briefcase className="w-12 h-12 text-gray-200" />,
};

export default function IndustriesPage() {
    const industries = navigation.find(n => n.label === "Industries")?.children || [];

    return (
        <div className="pt-10">
            <Section className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Industries We Transform</h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Tailored technology solutions that address specific challenges across diverse sectors.
                </p>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((ind) => (
                        <Link key={ind.label} href={ind.href} className="group">
                            <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all flex flex-col items-start relative overflow-hidden">
                                <div className="mb-6 p-4 rounded-xl bg-black border border-white/5 group-hover:scale-110 transition-transform">
                                    {industryIcons[ind.label] || <Briefcase className="w-12 h-12 text-gray-500" />}
                                </div>
                                <h3 className="text-2xl font-bold mb-3">{ind.label}</h3>
                                <p className="text-gray-400 mb-6 flex-grow">
                                    Innovative {ind.label} solutions to drive efficiency and user engagement.
                                </p>
                                <span className="inline-flex items-center text-blue-400 font-medium group-hover:underline">
                                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>
        </div>
    );
}
