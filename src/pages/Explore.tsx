import { Header } from "../components/Header";
import { FooterSection } from "../components/FooterSection";

export default function Explore({ openAuthModal, openSignUpModal }: { openAuthModal: () => void, openSignUpModal: () => void }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
      <main className="flex-1 flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl font-bold mb-4 text-white">Explore</h1>
        <p className="text-lg text-white/80">Some of the best link-in-bio pages created by the Linkria community will be showcased here.</p>
      </main>
      <FooterSection openAuthModal={openAuthModal} />
    </div>
  );
} 