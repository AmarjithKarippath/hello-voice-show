import React from 'react';
import { Button } from '@/components/ui/button';
import { Waves, Menu, X } from 'lucide-react';
import { useState } from 'react';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 p-2 bg-hero-gradient rounded-xl shadow-glow">
              <Waves className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-foreground">
              Wave<span className="text-accent">ify</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-accent transition-colors font-medium">
              Features
            </a>
            <a href="#demo" className="text-foreground hover:text-accent transition-colors font-medium">
              Demo
            </a>
            <a href="#pricing" className="text-foreground hover:text-accent transition-colors font-medium">
              Pricing
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className="text-foreground hover:text-accent">
              Sign In
            </Button>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
              Start Free Trial
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              <a 
                href="#features" 
                className="text-foreground hover:text-accent transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a 
                href="#demo" 
                className="text-foreground hover:text-accent transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo
              </a>
              <a 
                href="#pricing" 
                className="text-foreground hover:text-accent transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#contact" 
                className="text-foreground hover:text-accent transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex flex-col gap-3 pt-4 border-t border-border/50">
                <Button variant="ghost" className="text-foreground hover:text-accent justify-start">
                  Sign In
                </Button>
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow">
                  Start Free Trial
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};