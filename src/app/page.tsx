import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";

export const metadata: Metadata = {
  title: "Home",
};
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ClientSuccessStories } from "@/components/sections/client-success-stories";
import { FAQSection } from "@/components/sections/FAQSection";
import { CallToAction } from "@/components/sections/CallToAction";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { BentoFeatures } from "@/components/sections/BentoFeatures";
import { EngagementModels } from "@/components/sections/EngagementModels";
import { IndustriesPreview } from "@/components/sections/IndustriesPreview";
import { TechnologiesPreview } from "@/components/sections/TechnologiesPreview";
import { AboutUsPreview } from "@/components/sections/AboutUsPreview";
import { BlogsPreview } from "@/components/sections/BlogsPreview";
import { IntegrationsSection } from "@/components/sections/integrations-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <BentoFeatures />
      <IntegrationsSection />
      <ServicesOverview />
      <IndustriesPreview />
      <TechnologiesPreview />
      <AboutUsPreview />
      <FeaturedProjects />
      <ProcessSection />
      <EngagementModels />
      <BlogsPreview />
      <ClientSuccessStories />
      <FAQSection />
      <CallToAction />
    </div>
  );
}

