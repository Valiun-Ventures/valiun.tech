import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CallToAction } from "@/components/sections/CallToAction";
import { VelocityScroll } from "@/components/ui/VelocityScroll";
import { IconWave } from "@/components/ui/IconWave";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <VelocityScroll />
      <ServicesOverview />
      <IconWave />
      <IndustriesSection />
      <TestimonialsSection />
      <FAQSection />
      <CallToAction />
    </div>
  );
}
