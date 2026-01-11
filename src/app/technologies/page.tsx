import { Section } from "@/components/ui/Section";
import { navigation } from "@/lib/navigation";
import { Check, Code2, Server, Smartphone, Cloud, Database } from "lucide-react";

export default function TechnologiesPage() {
    // Manually defining tech categories for visual layout
    const categories = [
        { name: "Frontend", icon: <Code2 className="w-8 h-8 text-blue-500" />, items: ["React.js", "Angular", "Vue.js", "Next.js", "Tailwind CSS"] },
        { name: "Backend", icon: <Server className="w-8 h-8 text-purple-500" />, items: ["Node.js", "Python", "Java", "Go", "NestJS"] },
        { name: "Mobile", icon: <Smartphone className="w-8 h-8 text-pink-500" />, items: ["Flutter", "React Native", "Swift", "Kotlin"] },
        { name: "Cloud", icon: <Cloud className="w-8 h-8 text-cyan-500" />, items: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"] },
        { name: "Data & AI", icon: <Database className="w-8 h-8 text-emerald-500" />, items: ["Power BI", "TensorFlow", "PyTorch", "OpenAI API", "Hadoop"] }
    ];

    return (
        <div className="pt-10">
            <Section className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Technological Excellence</h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    We harness the power of modern technology stacks to build robust, scalable, and future-proof solutions.
                </p>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((cat) => (
                        <div key={cat.name} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors">
                            <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
                                {cat.icon}
                                <h2 className="text-2xl font-bold">{cat.name}</h2>
                            </div>
                            <div className="space-y-3">
                                {cat.items.map(item => (
                                    <div key={item} className="flex items-center text-gray-300">
                                        <div className="w-2 h-2 rounded-full bg-blue-500 mr-3" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
