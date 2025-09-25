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
import supportAgent from '@/assets/ecommerce-support.jpg';

const features = [
  {
    icon: Brain,
    title: 'Shopify Order Management',
    description: 'Automatically handle order inquiries, track shipments, process returns, and update customers on their Shopify orders in real-time.'
  },
  {
    icon: Clock,
    title: '24/7 Sales Assistant',
    description: 'Never lose a sale. Our AI answers product questions, handles checkouts, and recovers abandoned carts around the clock.'
  },
  {
    icon: Globe,
    title: 'Multi-Store Integration',
    description: 'Connect multiple Shopify stores, WooCommerce, Magento, and other ecommerce platforms with unified voice support.'
  },
  {
    icon: Shield,
    title: 'PCI Compliance & Security',
    description: 'Bank-level encryption with full PCI compliance for secure payment processing and customer data protection.'
  },
  {
    icon: TrendingUp,
    title: 'Sales Analytics & Insights',
    description: 'Track conversion rates, average order value, and customer lifetime value with detailed ecommerce analytics and reporting.'
  },
  {
    icon: Users,
    title: 'Shopify App Integration',
    description: 'One-click Shopify app installation. Seamlessly integrates with your store, inventory, and customer data in minutes.'
  }
];

export const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            Boost Your Shopify Store with
            <span className="text-transparent bg-gradient-to-r from-primary to-accent bg-clip-text"> AI Voice Commerce</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your ecommerce business with AI that understands products, processes orders, 
            and turns every call into a potential sale.
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
              alt="Ecommerce customer support with AI voice technology"
              className="rounded-2xl shadow-hero w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl" />
          </div>
          
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Turn Every Call Into Revenue
            </h3>
            <p className="text-muted-foreground mb-8">
              Our AI doesn't just provide support—it actively sells your products, processes orders, 
              and recovers lost sales through intelligent voice commerce.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground">Process orders and payments via voice</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground">Real-time Shopify inventory and pricing</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full" />
                <span className="text-foreground">Abandoned cart recovery conversations</span>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-feature-gradient rounded-xl">
                <Headphones className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">50K+</div>
                <div className="text-sm text-muted-foreground">Orders Processed</div>
              </div>
              <div className="text-center p-4 bg-feature-gradient rounded-xl">
                <MessageCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">$2.1M</div>
                <div className="text-sm text-muted-foreground">Revenue Generated</div>
              </div>
              <div className="text-center p-4 bg-feature-gradient rounded-xl">
                <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-foreground">200+</div>
                <div className="text-sm text-muted-foreground">Shopify Stores</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};