import { Section } from "@/components/ui/Section";

export default function PrivacyPage() {
    return (
        <Section className="max-w-4xl mx-auto py-20">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-invert prose-lg text-gray-400">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p>
                    At Valiun Tech, we respect your privacy and are committed to protecting your personal data.
                    This privacy policy will inform you as to how we look after your personal data when you visit our website
                    and tell you about your privacy rights and how the law protects you.
                </p>

                <h2 className="text-white mt-8 mb-4">1. Important Information</h2>
                <p>This privacy policy aims to give you information on how Valiun Tech collects and processes your personal data.</p>

                <h2 className="text-white mt-8 mb-4">2. The Data We Collect</h2>
                <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Identity Data (Name, username)</li>
                    <li>Contact Data (Email, phone number, address)</li>
                    <li>Technical Data (IP address, browser type)</li>
                </ul>

                {/* ... More sections would go here ... */}

                <h2 className="text-white mt-8 mb-4">3. Contact Us</h2>
                <p>If you have any questions about this privacy policy, please contact us at hello@valiuntech.com</p>
            </div>
        </Section>
    );
}
