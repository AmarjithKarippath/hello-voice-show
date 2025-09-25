import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, CheckCircle } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 bg-hero-gradient relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <Phone className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your
            <span className="block text-accent">Customer Support?</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Join thousands of businesses already using our AI voice agent to deliver 
            exceptional customer experiences and drive growth.
          </p>
        </div>

        {/* Benefits List */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span>Setup in 5 minutes</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span>14-day free trial</span>
          </div>
          <div className="flex items-center justify-center gap-3 text-primary-foreground/90">
            <CheckCircle className="w-5 h-5 text-accent" />
            <span>No credit card required</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow px-8">
            Start Free Trial
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20 px-8">
            Book a Demo
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-primary-foreground/70 text-sm">
          <p>Trusted by 500+ companies worldwide</p>
          <div className="flex justify-center items-center gap-8 mt-4">
            <div className="w-12 h-8 bg-white/20 rounded"></div>
            <div className="w-12 h-8 bg-white/20 rounded"></div>
            <div className="w-12 h-8 bg-white/20 rounded"></div>
            <div className="w-12 h-8 bg-white/20 rounded"></div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-foreground/10 rounded-full blur-3xl" />
    </section>
  );
};