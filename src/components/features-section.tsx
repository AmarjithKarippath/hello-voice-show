import React from 'react';
import { Card } from '@/components/ui/card';
import { 
  Brain, 
  Clock, 
  Globe, 
  Shield, 
  TrendingUp, 
  Users,
  Headphones,
  MessageCircle,
  BarChart3
} from 'lucide-react';
import supportAgent from '@/assets/support-agent.jpg';

const features = [
  {
    icon: Brain,
    title: 'Natural Language Processing',
    description: 'Advanced AI that understands context, emotions, and complex customer queries with human-like comprehension.'
  },
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Never miss a customer call. Our voice agent works around the clock to provide instant support.'
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Communicate with customers in 50+ languages with native-level fluency and cultural understanding.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-level encryption and compliance with GDPR, HIPAA, and SOX regulations for complete data protection.'
  },
  {
    icon: TrendingUp,
    title: 'Analytics & Insights',
    description: 'Deep analytics on customer interactions, sentiment analysis, and performance metrics to optimize your service.'
  },
  {
    icon: Users,
    title: 'Seamless Integration',
    description: 'Easy integration with your existing CRM, helpdesk, and communication tools. Setup in minutes, not months.'
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Our
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> Voice Agent</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Powered by cutting-edge AI technology, our voice agent delivers exceptional customer experiences 
            that drive satisfaction and business growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="p-6 bg-card-gradient border-border/50 hover:shadow-card transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-feature-gradient rounded-xl">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Customer Support Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={supportAgent}
              alt="Professional customer support with AI voice technology"
              className="rounded-2xl shadow-hero w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Transform Your Customer Experience
            </h3>
            <p className="text-muted-foreground mb-8">
              Our AI voice agent doesn't just answer calls—it creates meaningful conversations 
              that build customer relationships and drive business success.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground">Instant response times under 2 seconds</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground">Handle unlimited concurrent conversations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground">Learn and improve with every interaction</span>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-feature-gradient rounded-xl">
                <Headphones className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">10K+</div>
                <div className="text-sm text-muted-foreground">Calls Handled</div>
              </div>
              <div className="text-center p-4 bg-feature-gradient rounded-xl">
                <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center p-4 bg-feature-gradient rounded-xl">
                <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">65%</div>
                <div className="text-sm text-muted-foreground">Faster Resolution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};