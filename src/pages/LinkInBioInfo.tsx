import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

const LinkInBioInfo = ({ openAuthModal, openSignUpModal }: { openAuthModal: () => void, openSignUpModal: () => void }) => {
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
              What is a link in bio?
            </h1>
            {/* Content paragraph */}
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed text-lg">
                A "link in bio" is a single URL found in the biography section of a social media profile, 
                typically on platforms like Instagram or TikTok. It serves as a gateway to additional content, 
                like websites, articles, online stores, or multiple links to other platforms, making it a 
                convenient way for followers to explore more about you or your work.
              </p>
            </div>
        </div>
      </div>
      {/* Spacing between content and footer */}
      <div className="h-59   bg-white"></div>
      {/* Footer - will stick to bottom */}
      <FooterSection openAuthModal={openAuthModal} />
    </div>
  );
};

export default LinkInBioInfo; 