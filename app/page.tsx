import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { PricingSection } from "@/components/sections/pricing";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <CTASection />
    </div>
  );
}