import { Header } from "../components/Header";
import { FooterSection } from "../components/FooterSection";

export default function Templates({ openAuthModal, openSignUpModal }: { openAuthModal: () => void, openSignUpModal: () => void }) {
  const templates = [
    {
      name: "Minimal",
      description: "Clean and simple design for a professional look",
      bgColor: "bg-gray-900",
      icon: "🎨"
    },
    {
      name: "Creative",
      description: "Bold and colorful design for creators and artists",
      bgColor: "bg-purple-600",
      icon: "✨"
    },
    {
      name: "Business",
      description: "Professional design perfect for businesses",
      bgColor: "bg-blue-600",
      icon: "💼"
    },
    {
      name: "Modern",
      description: "Contemporary design with sleek aesthetics",
      bgColor: "bg-teal-600",
      icon: "🚀"
    },
    {
      name: "Classic",
      description: "Timeless design that never goes out of style",
      bgColor: "bg-gray-800",
      icon: "📚"
    },
    {
      name: "Vibrant",
      description: "Eye-catching colors for maximum impact",
      bgColor: "bg-pink-600",
      icon: "🌈"
    },
    {
      name: "Elegant",
      description: "Sophisticated design for luxury brands",
      bgColor: "bg-indigo-600",
      icon: "👑"
    },
    {
      name: "Tech",
      description: "Modern tech-focused design for developers",
      bgColor: "bg-green-600",
      icon: "💻"
    },
    {
      name: "Artistic",
      description: "Creative design for artists and designers",
      bgColor: "bg-orange-600",
      icon: "🎭"
    },
    {
      name: "Minimalist",
      description: "Ultra-clean design with maximum whitespace",
      bgColor: "bg-gray-100",
      icon: "⚪"
    },
    {
      name: "Bold",
      description: "High-contrast design for strong statements",
      bgColor: "bg-red-600",
      icon: "🔥"
    },
    {
      name: "Calm",
      description: "Peaceful design with soothing colors",
      bgColor: "bg-blue-400",
      icon: "🌊"
    },
    {
      name: "Dynamic",
      description: "Energetic design for active lifestyles",
      bgColor: "bg-yellow-500",
      icon: "⚡"
    },
    {
      name: "Corporate",
      description: "Professional design for corporate use",
      bgColor: "bg-gray-700",
      icon: "🏢"
    },
    {
      name: "Playful",
      description: "Fun and engaging design for entertainment",
      bgColor: "bg-purple-400",
      icon: "🎮"
    },
    {
      name: "Nature",
      description: "Organic design inspired by natural elements",
      bgColor: "bg-green-500",
      icon: "🌿"
    },
    {
      name: "Luxury",
      description: "Premium design for high-end brands",
      bgColor: "bg-amber-600",
      icon: "💎"
    },
    {
      name: "Urban",
      description: "City-inspired design with modern edge",
      bgColor: "bg-gray-600",
      icon: "🏙️"
    },
    {
      name: "Retro",
      description: "Vintage-inspired design with classic appeal",
      bgColor: "bg-orange-500",
      icon: "📻"
    },
    {
      name: "Futuristic",
      description: "Forward-thinking design with tech elements",
      bgColor: "bg-cyan-600",
      icon: "🔮"
    },
    {
      name: "Warm",
      description: "Cozy design with warm color palette",
      bgColor: "bg-red-500",
      icon: "🔥"
    },
    {
      name: "Cool",
      description: "Calm design with cool color tones",
      bgColor: "bg-blue-500",
      icon: "❄️"
    },
    {
      name: "Energetic",
      description: "High-energy design for active brands",
      bgColor: "bg-yellow-400",
      icon: "⚡"
    },
    {
      name: "Serene",
      description: "Peaceful design for wellness brands",
      bgColor: "bg-green-400",
      icon: "🧘"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
      <main className="flex-1 px-6 py-16 max-w-7xl mx-auto pt-32">
        {/* Page Title and Description */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Templates</h1>
          <p className="text-lg text-gray-600">Beautiful pre-designed templates to get you started quickly.</p>
        </div>
        
        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {templates.map((template, index) => (
            <div 
              key={index}
              className={`${template.bgColor} rounded-lg border border-gray-200 p-4 cursor-pointer hover:scale-105 transition-transform duration-200`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-2xl">{template.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-bold text-white text-sm">{template.name}</h3>
                      <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <p className="text-white/70 text-xs mt-1">{template.description}</p>
                  </div>
                </div>
                <div className="text-white/50 text-xs">
                  📷
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
      <FooterSection openAuthModal={openAuthModal} />
    </div>
  );
} 