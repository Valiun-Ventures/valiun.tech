import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { navigation } from "@/lib/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// This generates params for static export if needed, or just type definition
export async function generateStaticParams() {
    const services = navigation.find(n => n.label === "Services")?.children || [];
    return services.map(s => ({ category: s.href.split('/').pop() }));
}

export default async function ServiceCategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const servicesNode = navigation.find(n => n.label === "Services");

    // Find category by matching href end part
    const categoryData = servicesNode?.children?.find(c => c.href.endsWith(`/${category}`));

    if (!categoryData) {
        return notFound();
    }

    return (
        <div className="pt-10">
            <Section className="text-center flex flex-col items-center">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10">
                    <span className="text-sm font-medium text-blue-400">Hub</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">{categoryData.label}</h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Explore our specialized capabilities in {categoryData.label}.
                </p>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryData.children?.map(service => (
                        <Link key={service.label} href={service.href} className="group">
                            <div className="h-full p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex flex-col">
                                <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{service.label}</h3>
                                <p className="text-gray-400 flex-grow mb-6">
                                    Premium {service.label} solutions optimized for enterprise scale and performance.
                                </p>
                                <div className="flex items-center text-sm font-semibold text-blue-500">
                                    Explore Service <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </Section>
        </div>
    );
}
