import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Users, Zap } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center max-w-5xl">
        {/* Social Proof Badge */}
        <div className="inline-flex items-center bg-muted px-4 py-2 rounded-full mb-8 hover-scale">
          <Star className="w-4 h-4 text-accent mr-2 fill-current" />
          <span className="text-sm font-medium text-muted-foreground">
            Trusted by 10,000+ creators
          </span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Your link in bio,
          <span className="block bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            but premium
          </span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
          Create stunning, mobile-optimized link pages that convert. 
          Perfect for creators, influencers, and businesses who want more than basic.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button className="btn-hero group">
            Create Your Page
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" className="btn-ghost">
            View Examples
          </Button>
        </div>
        
        {/* Feature Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="card-premium text-center hover-lift">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">Pages load in under 1 second worldwide</p>
          </div>
          
          <div className="card-premium text-center hover-lift">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Built for Creators</h3>
            <p className="text-muted-foreground">Instagram, TikTok, YouTube integrations</p>
          </div>
          
          <div className="card-premium text-center hover-lift">
            <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Star className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Premium Design</h3>
            <p className="text-muted-foreground">Beautiful themes that actually convert</p>
          </div>
        </div>
      </div>
    </section>
  );
};