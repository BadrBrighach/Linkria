import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-accent-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">Block.bio</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Features
          </Link>
          <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Pricing
          </Link>
          <Link to="/examples" className="text-muted-foreground hover:text-foreground transition-colors font-medium">
            Examples
          </Link>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="btn-ghost">
            Log In
          </Button>
          <Button className="btn-accent">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};