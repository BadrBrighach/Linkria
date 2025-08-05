import { Link } from "react-router-dom";
import { Zap, Twitter, Instagram, Youtube } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 px-4 bg-primary text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-xl font-bold">Block.bio</span>
            </Link>
            <p className="text-primary-foreground/70 mb-6">
              The premium link-in-bio platform for creators who want more than basic.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/features" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/examples" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Examples
                </Link>
              </li>
              <li>
                <Link to="/integrations" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Integrations
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/status" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Status
                </Link>
              </li>
              <li>
                <Link to="/changelog" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/70">
            © 2024 Block.bio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};