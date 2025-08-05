import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Learn({ openAuthModal, openSignUpModal }: { openAuthModal: () => void, openSignUpModal: () => void }) {
  const [error, setError] = useState<string | null>(null);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
      <main className="flex-1 px-6 py-16 max-w-4xl mx-auto pt-32">
        {/* Page Title and Description */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Learn</h1>
          <p className="text-lg text-gray-600">Common questions and answers about Linkria and link-in-bio.</p>
        </div>

        {/* Link in Bio Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Link in Bio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <Link 
                to="/how-to-change-link-in-bio-instagram" 
                className="block text-lg text-gray-700 hover:text-gray-900 transition-colors"
              >
                How to change link in bio on Instagram?
              </Link>
              <Link 
                to="/how-to-add-link-in-bio-instagram" 
                className="block text-lg text-gray-700 hover:text-gray-900 transition-colors"
              >
                How can I add a link in bio to Instagram?
              </Link>
              <Link 
                to="/how-to-add-link-in-bio-youtube" 
                className="block text-lg text-gray-700 hover:text-gray-900 transition-colors"
              >
                How can I add a link in bio to YouTube?
              </Link>
            </div>
            
            {/* Right Column */}
            <div className="space-y-4">
              <Link 
                to="/how-to-add-link-in-bio-tiktok" 
                className="block text-lg text-gray-700 hover:text-gray-900 transition-colors"
              >
                How can I add a link in bio to TikTok?
              </Link>
              <Link 
                to="/what-is-link-in-bio" 
                className="block text-lg text-gray-700 hover:text-gray-900 transition-colors"
              >
                What is a link-in-bio?
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-12"></div>

        {/* Linkria Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Linkria</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-4">
              <Link 
                to="/how-to-put-venmo-link-in-bio" 
                className="block text-lg text-gray-700 hover:text-gray-900 transition-colors"
              >
                How can I put a Venmo link in my bio?
              </Link>
              <Link 
                to="/is-linkria-free" 
                className="block text-lg text-gray-700 hover:text-gray-900 transition-colors"
              >
                Is Linkria free?
              </Link>
            </div>
            
            {/* Right Column */}
            <div className="space-y-4">
              <Link 
                to="/can-i-use-my-own-domain" 
                className="block text-lg text-gray-700 hover:text-gray-900 transition-colors"
              >
                Can I use my own domain?
              </Link>
            </div>
          </div>
        </div>
      </main>
      <FooterSection openAuthModal={openAuthModal} />
    </div>
  );
} 