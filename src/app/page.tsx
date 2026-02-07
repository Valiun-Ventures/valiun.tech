import { Hero } from "@/components/sections/Hero";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CallToAction } from "@/components/sections/CallToAction";
import { VelocityScroll } from "@/components/ui/VelocityScroll";
import { IconWave } from "@/components/ui/IconWave";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { BentoFeatures } from "@/components/sections/BentoFeatures";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { IndustriesPreview } from "@/components/sections/IndustriesPreview";
import { TechnologiesPreview } from "@/components/sections/TechnologiesPreview";
import { AboutUsPreview } from "@/components/sections/AboutUsPreview";
import { BlogsPreview } from "@/components/sections/BlogsPreview";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <VelocityScroll />
      <StatsSection />
      <ServicesOverview />
      <ProcessSection />
      <BentoFeatures />
      <IconWave />
      <IndustriesPreview />
      <TechnologiesPreview />
      <AboutUsPreview />
      <FeaturedProjects />
      <EngagementModels />
      <BlogsPreview />
      <TestimonialsSection />
      <FAQSection />
      <CallToAction />
    </div>
  );
}

