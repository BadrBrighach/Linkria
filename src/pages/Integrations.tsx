import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { FooterSection } from "@/components/FooterSection";

const Integrations = ({ openAuthModal, openSignUpModal }: { openAuthModal: () => void, openSignUpModal: () => void }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
      {/* Main content area */}
      <div className="flex-1 bg-white pt-20">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Integrations Section */}
          <IntegrationsSection />
        </div>
      </div>
      {/* Footer */}
      <FooterSection openAuthModal={openAuthModal} />
    </div>
  );
};

export default Integrations; 