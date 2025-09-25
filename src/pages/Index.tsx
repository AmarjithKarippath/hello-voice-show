import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { CTASection } from '@/components/cta-section';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
};

export default Index;