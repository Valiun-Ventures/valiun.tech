import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Clock } from "lucide-react";

const caseStudies = [
    {
        title: "FinTech Migration to Cloud Native",
        client: "Global Finance Corp",
        category: "FinTech",
        metric: "40% Cost Reduction",
        href: "/case-studies/fintech-cloud-migration",
        description: "Migrating a legacy banking monolith to microservices on AWS, resulting in improved scalability and reduced operational costs."
    },
    {
        title: "AI Customer Support Bot",
        client: "HealthPlus",
        category: "Healthcare",
        metric: "70% Faster Resolution",
        href: "/case-studies/healthcare-ai-bot",
        description: "Implementing a Generative AI chatbot to handle patient inquiries, scheduling, and triage, significantly reducing wait times."
    },
    {
        title: "E-Commerce Platform Re-engineering",
        client: "FashionRetailer",
        category: "E-Commerce",
        metric: "2x Conversion Rate",
        href: "/case-studies/ecommerce-platform",
        description: "Revamping the UX/UI and backend order processing for a high-traffic fashion retailer."
    }
];

export default function CaseStudiesPage() {
    return (
        <div className="pt-10">
            <Section className="text-center">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-green-500/30 bg-green-500/10">
                    <span className="text-sm font-medium text-green-400">Success Stories</span>
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6">Proven Results</h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    See how we&apos;ve helped leading enterprises transform their business with technology.
                </p>
            </Section>

            <Section>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {caseStudies.map((study) => (
                        <Link key={study.title} href={study.href}>
                            <Card className="h-full flex flex-col group">
                                <div className="mb-4 flex items-center justify-between">
                                    <span className="text-xs font-semibold px-2 py-1 bg-white/10 rounded uppercase text-gray-300">{study.category}</span>
                                    <span className="text-xs text-gray-500">{study.client}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{study.title}</h3>
                                <p className="text-gray-400 mb-6 flex-grow">{study.description}</p>

                                <div className="border-t border-white/10 pt-4 mt-auto">
                                    <div className="flex items-center text-green-400 font-bold mb-4">
                                        <TrendingUp className="w-4 h-4 mr-2" /> {study.metric}
                                    </div>
                                    <div className="flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
                                        Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                                    </div>
                                </div>
                            </Card>
                        </Link>
                    ))}
                </div>
            </Section>
        </div>
    );
}
