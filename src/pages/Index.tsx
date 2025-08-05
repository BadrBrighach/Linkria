import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { BlocksSection } from "@/components/BlocksSection";
import { IntegrationsSection } from "@/components/IntegrationsSection";
import { ToolsSection, CreatorsSection } from "@/components/ToolsAndCreatorsSection";
import { CTASection } from "@/components/CTASection";
import { FAQSection } from "@/components/FAQSection";
import { FooterSection } from "@/components/FooterSection";

const Index = ({ openAuthModal, openSignUpModal, username, setUsername }: { openAuthModal: () => void, openSignUpModal: () => void, username: string, setUsername: (v: string) => void }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
      <HeroSection openAuthModal={openAuthModal} username={username} setUsername={setUsername} />
      <BlocksSection />
      <IntegrationsSection />
      <ToolsSection />
      <CreatorsSection openAuthModal={openAuthModal} username={username} setUsername={setUsername} />
      <CTASection />
      <FAQSection />
      <FooterSection openAuthModal={openAuthModal} />
    </div>
  );
};

export default Index;
