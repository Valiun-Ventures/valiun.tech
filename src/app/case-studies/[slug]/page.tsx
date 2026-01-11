import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, TrendingUp } from "lucide-react";

export default function CaseStudyDetail() {
    return (
        <div className="pt-10">
            <Section className="text-center">
                <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10">
                    <span className="text-sm font-medium text-blue-400">FinTech</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
                    FinTech Cloud Migration
                </h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    How we helped Global Finance Corp reduce operational costs by 40% through cloud-native modernization.
                </p>
            </Section>

            <Section className="grid md:grid-cols-3 gap-12">
                <div className="col-span-2 space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                        <p className="text-gray-400 leading-relaxed">
                            The client was struggling with a legacy monolithic architecture that was expensive to maintain and difficult to scale. Feature deployments took weeks, and downtime during peak hours was becoming a liability.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                        <p className="text-gray-400 leading-relaxed">
                            Valiun Tech implemented a strangler fig pattern to gradually decompose the monolith into microservices deployed on AWS EKS. We implemented a robust CI/CD pipeline using GitHub Actions and ArgoCD.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">The Results</h2>
                        <ul className="space-y-4">
                            {[
                                "40% Reduction in Infrastructure Costs",
                                "99.99% Uptime Achieved",
                                "Deployment frequency increased from Monthly to Daily",
                                "Enhanced Security Posture"
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
                            <span className="text-gray-500 text-sm block">Client</span>
                            <span className="text-white font-medium">Global Finance Corp</span>
                        </div>
                        <div>
                            <span className="text-gray-500 text-sm block">Industry</span>
                            <span className="text-white font-medium">FinTech</span>
                        </div>
                        <div>
                            <span className="text-gray-500 text-sm block">Services</span>
                            <span className="text-white font-medium">Cloud Migration, DevOps</span>
                        </div>
                        <div>
                            <span className="text-gray-500 text-sm block">Duration</span>
                            <span className="text-white font-medium">6 Months</span>
                        </div>
                    </div>
                    <Button className="w-full" href="/contact">Start Your Project</Button>
                </div>
            </Section>
        </div>
    )
}
