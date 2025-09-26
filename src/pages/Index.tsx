import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { CTASection } from '@/components/cta-section';

import Player from '../components/audioPlayer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />

      <FeaturesSection />
      <CTASection />
    </div>
  );
};

export default Index;