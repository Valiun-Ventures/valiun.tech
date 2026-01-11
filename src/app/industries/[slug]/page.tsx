import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { navigation } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
import { Check, AreaChart, Zap, Shield } from "lucide-react";

export async function generateStaticParams() {
    const industries = navigation.find(n => n.label === "Industries")?.children || [];
    return industries.map(s => ({ slug: s.href.split('/').pop() }));
}

export default async function IndustryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const industriesNode = navigation.find(n => n.label === "Industries");
    const industryData = industriesNode?.children?.find(c => c.href.endsWith(`/${slug}`));

    if (!industryData) {
        return notFound();
    }

    return (
        <div className="pt-10">
            <Section className="flex flex-col items-center text-center">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-purple-500/30 bg-purple-500/10">
                    <span className="text-sm font-medium text-purple-400">Industry Sector</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
                    {industryData.label} Solutions
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                    Accelerate innovation in {industryData.label} with our dedicated technology expertise.
                </p>
                <Button size="lg" href="/contact">Discuss Your Project</Button>
            </Section>

            <Section className="grid md:grid-cols-3 gap-8">
                {[
                    { title: "Digital Transformation", icon: <Zap className="w-8 h-8 text-yellow-500" />, desc: "Modernize legacy systems and adopt cloud-native architectures." },
                    { title: "Data-Driven Insights", icon: <AreaChart className="w-8 h-8 text-blue-500" />, desc: "Leverage big data and AI to make informed strategic decisions." },
                    { title: "Compliance & Security", icon: <Shield className="w-8 h-8 text-green-500" />, desc: "Ensure regulatory compliance and protect sensitive data." }
                ].map((feature, i) => (
                    <div key={i} className="p-8 rounded-2xl bg-white/5 border border-white/10">
                        <div className="mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-gray-400">{feature.desc}</p>
                    </div>
                ))}
            </Section>

            <Section className="bg-white/5 my-12 rounded-3xl p-12 text-center">
                <h2 className="text-3xl font-bold mb-6">Why Partner with Valiun for {industryData.label}?</h2>
                <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
                    {[
                        "Deep domain knowledge",
                        "Proven track record of success",
                        "Agile delivery models",
                        "Cost-effective solutions"
                    ].map(item => (
                        <div key={item} className="flex items-center p-4 bg-black/40 rounded-xl">
                            <Check className="w-5 h-5 text-purple-500 mr-3" />
                            <span className="text-gray-200">{item}</span>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
