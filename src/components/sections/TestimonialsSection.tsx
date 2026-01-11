import { Section } from "@/components/ui/Section";
import { InfiniteMovingCards } from "@/components/ui/InfiniteCards";
import { Reveal } from "@/components/ui/Reveal";

const testimonials = [
    {
        quote:
            "Valiun Tech transformed our legacy infrastructure into a state-of-the-art cloud native system. The speed and scalability we now have is a game changer.",
        name: "Sarah Chen",
        title: "CTO at FinGlobe",
    },
    {
        quote:
            "Their Agentic AI integration helped us automate 70% of our customer support queries. The ROI was immediate and substantial.",
        name: "Michael Ross",
        title: "Director of Ops at HealthPlus",
    },
    {
        quote:
            "A true partner in innovation. They didn't just build what we asked for; they guided us to a better solution that we hadn't even imagined.",
        name: "Elena Rodriguez",
        title: "Founder, EcoSmart",
    },
    {
        quote:
            "The premium design and user experience of our new platform has doubled our conversion rates. Valiun Tech understands modern digital needs.",
        name: "David Kim",
        title: "VP of Marketing, StyleLink",
    },
    {
        quote:
            "Exceptional engineering talent and project management. Delivery was on time, on budget, and exceeded quality expectations.",
        name: "James Wilson",
        title: "CEO, TechFlow",
    },
];

export function TestimonialsSection() {
    return (
        <Section className="relative overflow-hidden py-20 bg-black">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="text-center mb-16 relative z-10">
                <Reveal width="100%">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Trusted by Industry Leaders</h2>
                </Reveal>
                <Reveal width="100%" delay={0.2}>
                    <p className="text-gray-400 text-lg">See what our partners say about their transformation journey.</p>
                </Reveal>
            </div>

            <div className="h-[30rem] flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="slow"
                    className="mt-12"
                />
            </div>
        </Section>
    );
}
