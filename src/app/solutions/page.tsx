import { Section } from "@/components/ui/Section";
import { Card, CardTitle, CardDescription } from "@/components/ui/Card";
import { navigation } from "@/lib/navigation";
import Link from "next/link";
import { ArrowRight, Lightbulb, Rocket, Settings, RefreshCw, Cpu } from "lucide-react";

const solutionIcons: Record<string, React.ReactNode> = {
    "Startup MVP Development": <Rocket className="w-8 h-8 text-orange-500" />,
    "Enterprise Digital Transformation": <Settings className="w-8 h-8 text-blue-500" />,
    "SaaS Product Development": <Lightbulb className="w-8 h-8 text-yellow-500" />,
    "Legacy System Modernization": <RefreshCw className="w-8 h-8 text-teal-500" />,
    "AI-Driven Automation": <Cpu className="w-8 h-8 text-purple-500" />,
};

export default function SolutionsPage() {
    const solutions = navigation.find(n => n.label === "Solutions")?.children || [];

    return (
        <div className="pt-10">
            <Section className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Strategic Solutions</h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Turn key challenges into growth opportunities with our targeted business solutions.
                </p>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {solutions.map((sol) => (
                        <Link key={sol.label} href={sol.href}>
                            <Card className="h-full flex flex-col items-start p-8 group">
                                <div className="p-4 rounded-xl bg-black border border-white/5 mb-6 group-hover:scale-110 transition-transform">
                                    {solutionIcons[sol.label] || <Lightbulb className="w-8 h-8" />}
                                </div>
                                <h3 className="text-2xl font-bold mb-4">{sol.label}</h3>
                                <p className="text-gray-400 text-lg mb-6 flex-grow">
                                    Accelerate your journey with our proven frameworks for {sol.label}.
                                    We deliver speed, quality, and innovation.
                                </p>
                                <div className="flex items-center text-blue-400 font-medium group-hover:underline">
                                    Learn more <ArrowRight className="ml-2 w-4 h-4" />
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Section>
        </div>
    );
}
