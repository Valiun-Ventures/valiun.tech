import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { navigation } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export async function generateStaticParams() {
    const solutions = navigation.find(n => n.label === "Solutions")?.children || [];
    return solutions.map(s => ({ slug: s.href.split('/').pop() }));
}

export default async function SolutionDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const solutionsNode = navigation.find(n => n.label === "Solutions");
    const solutionData = solutionsNode?.children?.find(c => c.href.endsWith(`/${slug}`));

    if (!solutionData) {
        return notFound();
    }

    return (
        <div className="pt-10">
            <Section className="flex flex-col items-center text-center">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-orange-500/30 bg-orange-500/10">
                    <span className="text-sm font-medium text-orange-400">Business Solution</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
                    {solutionData.label}
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                    Comprehensive framework to deliver {solutionData.label} effectively and efficiently.
                </p>
                <Button size="lg" href="/contact">Get Started</Button>
            </Section>

            <Section className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-[300px] flex items-center justify-center">
                    <span className="text-gray-600 font-mono text-center">
                        [Process Diagram for {solutionData.label}]
                    </span>
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
                    <ul className="space-y-4">
                        {[
                            "Faster Time to Market",
                            "Reduced Operational Costs",
                            "Enhanced User Experience",
                            "Scalable Architecture"
                        ].map((item) => (
                            <li key={item} className="flex items-center text-gray-300">
                                <CheckCircle2 className="w-5 h-5 text-blue-500 mr-3" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </Section>
        </div>
    );
}
