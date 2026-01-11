import { Section } from "@/components/ui/Section";

export default function TermsPage() {
    return (
        <Section className="max-w-4xl mx-auto py-20">
            <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
            <div className="prose prose-invert prose-lg text-gray-400">
                <p>Last updated: {new Date().toLocaleDateString()}</p>
                <p>
                    Please read these terms and conditions carefully before using Our Service.
                </p>

                <h2 className="text-white mt-8 mb-4">1. Interpretation and Definitions</h2>
                <p>The words of which the initial letter is capitalized have meanings defined under the following conditions.</p>

                <h2 className="text-white mt-8 mb-4">2. Acknowledgement</h2>
                <p>These are the Terms and Conditions governing the use of this Service and the agreement that operates between You and the Company.</p>

                {/* ... More sections ... */}

                <h2 className="text-white mt-8 mb-4">3. Contact Us</h2>
                <p>If you have any questions about these Terms and Conditions, You can contact us at hello@valiuntech.com</p>
            </div>
        </Section>
    );
}
