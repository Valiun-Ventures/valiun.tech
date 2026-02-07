import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CallToAction() {
    return (
        <Section className="text-center py-24 relative overflow-hidden">
            {/* Gradient Orb */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -z-10" />

            <Reveal width="100%">
                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-md p-12 rounded-3xl border border-white/10 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Let&apos;s build something extraordinary together. Schedule a free consultation with our experts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <Button size="lg" href="/contact">
                            Get a Quote
                        </Button>
                        <Button size="lg" variant="outline" href="/company/about">
                            Learn More About Us
                        </Button>
                    </div>
                </div>
            </Reveal>
        </Section>
    );
}
