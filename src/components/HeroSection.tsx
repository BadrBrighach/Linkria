import AuthModal from "./AuthModal";
import { Button } from "@/components/ui/button";
import { HiArrowRight } from "react-icons/hi";

export const HeroSection = ({ openAuthModal, username, setUsername }: { openAuthModal: () => void, username: string, setUsername: (v: string) => void }) => {
  return (
    <section className="pt-32 pb-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight">
          Everything{" "}
          <span 
            className="bg-clip-text text-transparent"
            style={{
              background: 'linear-gradient(90deg,rgb(193, 245, 156) 0%, #93DA97 33%, #5E936C 66%, #3E5F44 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            you are.
          </span>
          <br />
          in one link.
        </h1>
        
        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
        It starts with your name — lock it down now.
        </p>
        
        {/* CTA Button */}
        <div className="mb-12 flex flex-col items-center w-full">
          <div className="w-full max-w-md inline-flex flex-row items-center rounded-full bg-white pl-4 border-2 border-gray-400 shadow-sm justify-center">
            <span className="text-slate-600 font-medium">linkria.com/</span>
            <input
              type="text"
              placeholder="name"
              className="bg-transparent border-0 px-0 focus:outline-none focus:ring-0 rounded-full w-full text-base ml-2"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <button
              type="button"
              className="items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-12 text-base font-bold flex group rounded-full px-6 md:px-10 ml-2"
              aria-haspopup="dialog"
              aria-expanded="false"
              onClick={openAuthModal}
            >
              <span>Claim Page</span>
              <HiArrowRight className="w-5 h-5 ml-2 -mr-6 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:-mr-4 transition-all ease-in-out duration-200" />
          </button>
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-9 px-4 py-2 text-slate-500 text-xs font-medium text-left pl-0 mt-2"
            href="#"
          >
            See an example page
          </a>
        </div>
        {/* User Avatars */}
        <div className="flex items-center justify-center space-x-4 mb-4">
          <div className="flex -space-x-2">
            <img src="assets/avatars/avatar1.jpg" alt="User 1" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            <img src="assets/avatars/avatar2.jpg" alt="User 2" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            <img src="assets/avatars/avatar3.jpg" alt="User 3" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            <img src="assets/avatars/avatar4.jpg" alt="User 4" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
          </div>
        </div>
        <p className="text-sm text-gray-500">Trusted by 1k+ users</p>
      </div>
    </section>
  );
};