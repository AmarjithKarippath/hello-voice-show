import React from 'react';
import { Button } from '@/components/ui/button';
import { AudioPlayer } from '@/components/ui/audio-player';
import { ArrowRight, Mic, MessageSquare, Zap } from 'lucide-react';
import heroImage from '@/assets/hero-image.jpg';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="AI Voice Agent Technology"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-primary-foreground/90 text-sm font-medium">
                  AI-Powered Customer Support
                </span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Revolutionary
              <span className="block text-transparent bg-gradient-to-r from-accent to-primary-foreground bg-clip-text">
                Voice Agent
              </span>
              for Your Business
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              Transform your customer support with our AI voice agent that understands, 
              responds, and resolves issues 24/7 with human-like conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-primary-foreground hover:bg-white/20">
                <MessageSquare className="w-5 h-5 mr-2" />
                Schedule Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">99%</div>
                <div className="text-sm text-primary-foreground/70">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-primary-foreground/70">Availability</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50%</div>
                <div className="text-sm text-primary-foreground/70">Cost Reduction</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Audio Player */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <AudioPlayer 
                title="Experience Our Voice Agent"
                className="mb-6"
              />
              
              <div className="flex items-center justify-center gap-2 text-primary-foreground/70">
                <Mic className="w-4 h-4" />
                <span className="text-sm">Click to hear our AI in action</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-2xl animate-pulse" />
    </section>
  );
};