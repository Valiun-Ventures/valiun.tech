import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { BentoFeatures } from "@/components/sections/BentoFeatures";

// Dynamically import below-the-fold sections
const IntegrationsSection = dynamic(() => import("@/components/sections/integrations-section").then(mod => mod.IntegrationsSection));
const ServicesOverview = dynamic(() => import("@/components/sections/ServicesOverview").then(mod => mod.ServicesOverview));
const IndustriesPreview = dynamic(() => import("@/components/sections/IndustriesPreview").then(mod => mod.IndustriesPreview));
const TechnologiesPreview = dynamic(() => import("@/components/sections/TechnologiesPreview").then(mod => mod.TechnologiesPreview));
const AboutUsPreview = dynamic(() => import("@/components/sections/AboutUsPreview").then(mod => mod.AboutUsPreview));
const FeaturedProjects = dynamic(() => import("@/components/sections/FeaturedProjects").then(mod => mod.FeaturedProjects));
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection").then(mod => mod.ProcessSection));
const EngagementModels = dynamic(() => import("@/components/sections/EngagementModels").then(mod => mod.EngagementModels));
const BlogsPreview = dynamic(() => import("@/components/sections/BlogsPreview").then(mod => mod.BlogsPreview));
const ClientSuccessStories = dynamic(() => import("@/components/sections/client-success-stories").then(mod => mod.ClientSuccessStories));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection").then(mod => mod.FAQSection));
const CallToAction = dynamic(() => import("@/components/sections/CallToAction").then(mod => mod.CallToAction));

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

