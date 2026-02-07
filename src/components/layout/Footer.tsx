import Link from "next/link";
import { navigation } from "@/lib/navigation";
import { Logo } from "@/components/ui/Logo";
import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Logo variant="white" className="mb-6" />
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Valiun Tech delivers distinct, premium technology solutions.
                            From AI-driven automation to enterprise cloud architectures,
                            we build the future of digital business.
                        </p>
                        <div className="flex space-x-4">
                            <SocialLink href="#" icon={<Linkedin />} />
                            <SocialLink href="#" icon={<Twitter />} />
                            <SocialLink href="#" icon={<Instagram />} />
                            <SocialLink href="#" icon={<Github />} />
                        </div>
                    </div>

                    {/* Links Columns */}
                    {/* We will manually group some links or just map top level */}
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-white font-semibold mb-2">Services</h3>
                        <ul className="space-y-2">
                            {navigation.find(n => n.label === "Services")?.children?.slice(0, 5).map(service => (
                                <li key={service.label}>
                                    <Link href={service.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                                        {service.label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/services" className="text-blue-400 hover:text-blue-300 text-sm transition-colors pt-2 block">
                                    View All Services &rarr;
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h3 className="text-white font-semibold mb-2">Company</h3>
                        <ul className="space-y-2">
                            {navigation.find(n => n.label === "Company")?.children?.map(item => (
                                <li key={item.label}>
                                    <Link href={item.href} className="text-gray-400 hover:text-white text-sm transition-colors">
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex flex-col space-y-4">
                        <h3 className="text-white font-semibold mb-2">Connect</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Contact Support
                                </Link>
                            </li>
                            <li>
                                <Link href="/case-studies" className="text-gray-400 hover:text-white text-sm transition-colors">
                                    Case Studies
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center bg-black">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Valiun Tech. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="/privacy" className="text-gray-500 hover:text-white text-sm">Privacy Policy</Link>
                        <Link href="/terms" className="text-gray-500 hover:text-white text-sm">Terms & Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1"
        >
            {icon}
        </a>
    );
}
