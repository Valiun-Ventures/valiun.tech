import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, TrendingUp } from "lucide-react";
import { notFound } from "next/navigation";

// Mock data for static params - in a real app this would come from a CMS or DB
const caseStudiesData = [
    { slug: "fintech-cloud-migration", title: "FinTech Cloud Migration", industry: "FinTech" },
    { slug: "healthcare-ai-bot", title: "AI Customer Support Bot", industry: "Healthcare" },
    { slug: "ecommerce-platform", title: "E-Commerce Platform Re-engineering", industry: "E-Commerce" }
];

export async function generateStaticParams() {
    return caseStudiesData.map(cs => ({ slug: cs.slug }));
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const study = caseStudiesData.find(cs => cs.slug === slug);

    if (!study) return notFound();

    return (
        <div className="pt-10">
            <Section className="text-center">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10">
                    <span className="text-sm font-medium text-blue-400">{study.industry}</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
                    {study.title}
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Case study details for {study.title}. Harnessing technology to drive measurable business impact.
                </p>
            </Section>

            <Section className="grid md:grid-cols-3 gap-12">
                <div className="col-span-2 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                        <p className="text-gray-400 leading-relaxed">
                            A complex infrastructure challenge that required specialized domain expertise and advanced technical implementation to overcome legacy barriers.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Valiun Tech implemented a custom-engineered solution focused on scalability, performance, and long-term maintainability.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">The Results</h2>
                        <ul className="space-y-4">
                            {[
                                "Significant Performance Gains",
                                "99.99% Reliability",
                                "Reduced Operational Overhead",
                                "Future-ready Architecture"
                            ].map((item) => (
                                <li key={item} className="flex items-center text-gray-300">
                                    <TrendingUp className="w-5 h-5 text-green-500 mr-3" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-3xl p-8 h-fit sticky top-24">
                    <h3 className="text-xl font-bold mb-4">Project Overview</h3>
                    <div className="space-y-4 mb-8">
                        <div>
                            <span className="text-gray-500 text-sm block">Industry</span>
                            <span className="text-white font-medium">{study.industry}</span>
                        </div>
                        <div>
                            <span className="text-gray-500 text-sm block">Services</span>
                            <span className="text-white font-medium">Digital Transformation</span>
                        </div>
                    </div>
                    <Button className="w-full" href="/contact">Start Your Project</Button>
                </div>
            </Section>
        </div>
    )
}
