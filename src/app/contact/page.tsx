import { Metadata } from "next";
import { ContactHero } from "@/components/sections/ContactHero";

export const metadata: Metadata = {
    title: "Contact",
};
import { MapSection } from "@/components/sections/MapSection";

export default function ContactPage() {
    return (
        <div className="bg-black min-h-screen">
            <ContactHero />
            <MapSection />
        </div>
    );
}
