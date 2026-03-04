import { Section } from "@/components/ui/Section";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

interface CallToActionProps {
    title?: string;
    description?: string;
    primaryButtonText?: string;
    primaryButtonHref?: string;
    secondaryButtonText?: string;
    secondaryButtonHref?: string;
}

export function CallToAction({
    title = "Flawless Performance, Guaranteed.",
    description = "Our Quality Assurance team ensures every line of code meets the highest enterprise standards. From automated regression testing to manual penetration testing, we leave no stone unturned.",
    primaryButtonText = "Get Started",
    primaryButtonHref = "/contact",
    secondaryButtonText = "View Case Studies",
    secondaryButtonHref = "/case-studies"
}: CallToActionProps) {
    return (
        <Section className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 mt-20 mb-24 backdrop-blur-sm">
            <div className="flex-1 text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
                    <CheckCircle2 className="text-blue-500 w-8 h-8 flex-shrink-0" />
                    {title}
                </h2>
                <p className="text-gray-400">
                    {description}
                </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Link
                    href={secondaryButtonHref}
                    className="bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-3 rounded-lg text-sm font-bold transition-all text-center"
                >
                    {secondaryButtonText}
                </Link>
                <Link
                    href={primaryButtonHref}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-sm font-bold shadow-lg shadow-blue-500/20 transition-all text-center"
                >
                    {primaryButtonText}
                </Link>
            </div>
        </Section>
    );
}
