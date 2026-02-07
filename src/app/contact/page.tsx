import { ContactHero } from "@/components/sections/ContactHero";
import { MapSection } from "@/components/sections/MapSection";

export default function ContactPage() {
    return (
        <div className="bg-black min-h-screen">
            <ContactHero />
            <MapSection />
        </div>
    );
}
