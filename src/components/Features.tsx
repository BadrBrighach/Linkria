import { 
  FaMobile, 
  FaPalette, 
  FaChartBar, 
  FaGlobe, 
  FaShieldAlt, 
  FaBolt,
  FaInstagram, 
  FaYoutube, 
  FaSpotify, 
  FaTiktok 
} from "react-icons/fa";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

export const Features = ({ openAuthModal, openSignUpModal }: { openAuthModal: () => void, openSignUpModal: () => void }) => {
  const mainFeatures = [
    {
      icon: FaMobile,
      title: "Mobile-First Design",
      description: "Every page is optimized for mobile viewing with lightning-fast load times and perfect touch interactions."
    },
    {
      icon: FaPalette,
      title: "Drag & Drop Builder",
      description: "Intuitive editor with live preview. Customize fonts, colors, layouts, and animations without any code."
    },
    {
      icon: FaChartBar,
      title: "Advanced Analytics",
      description: "Track views, clicks, and conversions. See which links perform best and optimize your strategy."
    },
    {
      icon: FaGlobe,
      title: "Custom Domains",
      description: "Use your own domain name for a professional brand experience. Currently available to select users - contact us to join the waitlist."
    },
    {
      icon: FaShieldAlt,
      title: "Private Pages",
      description: "Create password-protected content and exclusive links for your VIP audience and close friends."
    },
    {
      icon: FaBolt,
      title: "Smart Integrations",
      description: "Connect Instagram, TikTok, YouTube, Spotify, and more. Auto-sync your latest content."
    }
  ];

  const integrations = [
    { icon: FaInstagram, name: "Instagram", color: "text-pink-500" },
    { icon: FaYoutube, name: "YouTube", color: "text-red-500" },
    { icon: FaSpotify, name: "Spotify", color: "text-green-500" },
    { icon: FaTiktok, name: "TikTok", color: "text-slate-800" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
      
      <section className="py-20 px-4 bg-muted-light pt-32">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Everything you need to
              <span className="block text-accent">stand out online</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional tools that help creators, influencers, and businesses 
              build their perfect link-in-bio experience.
            </p>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="card-hero group">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Integrations Section */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-8 text-foreground">
              Works with all your favorite platforms
            </h3>
            <div className="flex justify-center items-center gap-8 flex-wrap">
              {integrations.map((integration, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 hover-scale">
                  <div className="w-16 h-16 bg-card border border-card-border rounded-xl flex items-center justify-center hover:shadow-md transition-all">
                    <integration.icon className={`w-8 h-8 ${integration.color}`} />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {integration.name}
                  </span>
                </div>
              ))}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-16 h-16 bg-card border border-card-border rounded-xl flex items-center justify-center text-muted-foreground hover:shadow-md transition-all">
                  <span className="text-2xl font-bold">+</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">
                  More soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection openAuthModal={openAuthModal} />
    </div>
  );
};