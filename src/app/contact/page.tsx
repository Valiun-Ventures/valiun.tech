import { Section } from "@/components/ui/Section";
import { ContactForm } from "@/components/ui/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-10">
            <Section className="grid lg:grid-cols-2 gap-16 items-start">
                <div>
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10">
                        <span className="text-sm font-medium text-blue-400">Contact Us</span>
                    </div>
                    <h1 className="text-5xl font-bold mb-6">Let's Start a Conversation</h1>
                    <p className="text-xl text-gray-400 mb-10 leading-relaxed">
                        Ready to transform your business? Our team of experts is here to guide you through every step of your digital journey.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mr-4 border border-white/10">
                                <Mail className="text-blue-500" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Email Us</h3>
                                <p className="text-gray-400">hello@valiuntech.com</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mr-4 border border-white/10">
                                <Phone className="text-blue-500" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Call Us</h3>
                                <p className="text-gray-400">+1 (555) 123-4567</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mr-4 border border-white/10">
                                <MapPin className="text-blue-500" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg">Visit Us</h3>
                                <p className="text-gray-400">
                                    123 Tech Park Avenue,<br />
                                    Innovation District, NY 10001
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    {/* Decorative blob */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] -z-10" />
                    <ContactForm />
                </div>
            </Section>
        </div>
    );
}
