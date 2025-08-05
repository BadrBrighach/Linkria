import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

const LinkInBio = ({ openAuthModal, openSignUpModal }: { openAuthModal: () => void, openSignUpModal: () => void }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
      {/* Main content area with gray background */}
      <div className="flex-1 bg-white pt-20">
        <div className="max-w-4xl mx-auto px-6 py-20">
          {/* Main content card */}
            {/* Main heading */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              What is linkria?
            </h1>
            {/* Content paragraph */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
              Linkria is a single, smart link that brings together all your content from social media profiles and websites to videos, products, and more. It's the easiest way to share everything you do in one beautiful, customizable page, whether it's your latest YouTube video, a product drop, or your favorite playlists.
              </p>
            </div>  
        </div>
      </div>
      {/* Spacing between content and footer */}
      <div className="h-59 bg-white"></div>
      {/* Footer - will stick to bottom */}
      <FooterSection openAuthModal={openAuthModal} />
    </div>
  );
};

export default LinkInBio; 