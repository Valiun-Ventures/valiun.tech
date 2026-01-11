import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

export default function AboutPage() {
    return (
        <div className="pt-10">
            <Section className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold mb-6">We Are Valiun Tech</h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    A team of visionaries, engineers, and strategists dedicated to redefining possibilities.
                </p>
            </Section>

            <Section className="grid md:grid-cols-2 gap-12 items-center">
                <div className="bg-white/5 border border-white/10 h-[400px] rounded-3xl flex items-center justify-center">
                    [Team Image / Office Shot]
                </div>
                <div>
                    <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                    <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                        At Valiun Tech, our mission is to empower businesses with the technology they need to lead in their industries. We believe in the power of Agentic AI and cloud-native architectures to solve complex problems.
                    </p>
                    <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                        Founded in 2024, utilizing the cutting edge of technological advancement, we have rapidly grown into a trusted partner for enterprises looking to innovate.
                    </p>
                    <Button href="/contact">Join Our Journey</Button>
                </div>
            </Section>
        </div>
    );
}
