import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { navigation } from "@/lib/navigation";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

export default async function ServiceDetailPage({ params }: { params: Promise<{ category: string, slug: string }> }) {
    const { category, slug } = await params;
    const servicesNode = navigation.find(n => n.label === "Services");
    const categoryData = servicesNode?.children?.find(c => c.href.endsWith(`/${category}`));
    const serviceData = categoryData?.children?.find(s => s.href.endsWith(`/${slug}`));

    if (!serviceData) {
        return notFound();
    }

    return (
        <div className="pt-10">
            <Section className="flex flex-col items-center text-center">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10">
                    <span className="text-sm font-medium text-blue-400">Service</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
                    {serviceData.label}
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                    Industry-leading {serviceData.label} designed to deliver measurable business impact.
                </p>
                <div className="flex gap-4">
                    <Button size="lg" href="/contact">Book a Consultation</Button>
                </div>
            </Section>

            <Section className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold mb-6">Why Choose Our {serviceData.label}?</h2>
                    <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                        At Valiun Tech, we don't just write code; we engineer solutions. Our approach to {serviceData.label} integrates advanced methodologies with a deep understanding of your business goals.
                    </p>
                    <ul className="space-y-4">
                        {[
                            "Enterprise-grade Security & Scalability",
                            "Agile Development Methodology",
                            "24/7 Support & Maintenance",
                            "Performance Optimization",
                            "Seamless Integration Capabilities"
                        ].map((item) => (
                            <li key={item} className="flex items-start text-gray-300">
                                <CheckCircle2 className="w-6 h-6 text-blue-500 mr-3 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="bg-gradient-to-br from-blue-900/20 to-black border border-white/10 rounded-3xl p-8 h-[400px] flex items-center justify-center">
                    <span className="text-gray-600 font-mono text-center">
                        [Detailed Graphic for {serviceData.label}]
                    </span>
                </div>
            </Section>

            {/* SEO Content Placeholder */}
            <Section>
                <div className="prose prose-invert max-w-none">
                    <h3>Comprehensive {serviceData.label} Solutions</h3>
                    <p>
                        Our team provides end-to-end support for {serviceData.label}, ensuring that every aspect of your project is handled with precision. From initial consultation to final deployment, we work closely with you.
                    </p>
                </div>
            </Section>
        </div>
    );
}
