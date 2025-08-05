import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

const HowToAddLinkInBioTikTok = ({ openAuthModal, openSignUpModal }: { openAuthModal: () => void, openSignUpModal: () => void }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
      <div className="flex-1 bg-white pt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="mb-8">
            <p className="text-sm text-gray-600">Link in Bio</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            How can I add a link in bio to TikTok?
          </h1>
          <p className="text-sm text-gray-500 mb-12">Last updated: [Date]</p>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p>[Add your guide content here]</p>
          </div>
        </div>
      </div>
      <FooterSection openAuthModal={openAuthModal} />
    </div>
  );
};

export default HowToAddLinkInBioTikTok; 