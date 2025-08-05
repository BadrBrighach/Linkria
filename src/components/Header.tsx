import { Button } from "@/components/ui/button";
import { ChevronDown, Check, Mountain, BookOpen, GraduationCap, User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import linkriaLogo from "/assets/logo.png";

export const Header = ({ openAuthModal, openSignUpModal }: { openAuthModal: () => void, openSignUpModal: () => void }) => {
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);
  const { user, signOut } = useAuth();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsResourcesOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setIsUserMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSignOut = async () => {
    try {
      setIsUserMenuOpen(false);
      await signOut();
      // The redirect will happen automatically in the AuthContext
    } catch (error) {
      console.error('Error signing out:', error);
      // Still redirect to home page even if there's an error
      window.location.href = '/';
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center">
      <nav
        className="bg-black/50 backdrop-blur-md rounded-full px-6 py-3 border border-white/10 shadow-lg"
      >
        <div className="flex items-center justify-between gap-8 min-w-0">
          {/* Left-aligned Linkria logo */}
          <div className="flex items-center">
            <Link to="/">
              <img src={linkriaLogo} alt="Linkria" className="h-10 w-auto cursor-pointer hover:opacity-80 transition-opacity" />
            </Link>
          </div>
          
          {/* Center navigation links */}
          <div className="flex items-center space-x-8">
            <Link to="/pricing" className="text-white hover:text-white/80 transition-colors text-sm font-medium">
              Pricing
            </Link>
            
            {/* Resources Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsResourcesOpen(!isResourcesOpen)}
                className="flex items-center text-white hover:text-white/80 transition-colors text-sm font-medium bg-transparent border-none outline-none cursor-pointer"
              >
                Resources
                <ChevronDown className={`ml-1 w-4 h-4 transition-transform ${isResourcesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isResourcesOpen && (
                <div 
                  className="absolute top-full left-0 mt-4 w-80 bg-black/90 rounded-lg border border-white/10 shadow-lg py-3 z-50"
                  style={{ backdropFilter: 'blur(200px)' }}
                >
                  <Link 
                    to="/templates" 
                    className="flex items-start px-4 py-3 text-white hover:bg-white/10 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                      <Mountain className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">Templates</div>
                      <div className="text-sm text-white/70 mt-1">Beautiful pre-designed templates to get you started quickly.</div>
                    </div>
                  </Link>
                  
                  <Link 
                    to="/learn" 
                    className="flex items-start px-4 py-3 text-white hover:bg-white/10 transition-colors"
                    onClick={() => setIsResourcesOpen(false)}
                  >
                    <div className="flex-shrink-0 w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                      <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">Learn</div>
                      <div className="text-sm text-white/70 mt-1">Common questions and answers about Linkria and link-in-bio.</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>
            
            {!user && (
            <button type="button" onClick={openAuthModal} className="text-white hover:text-white/80 transition-colors text-sm font-medium bg-transparent border-none outline-none cursor-pointer">
              Log in
            </button>
            )}
          </div>
          
          {/* Right-aligned button/user menu */}
          <div className="flex items-center">
            {user ? (
              <div className="relative" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors text-sm font-medium bg-transparent border-none outline-none cursor-pointer"
                >
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span>{user.user_metadata?.full_name || user.email?.split('@')[0]}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isUserMenuOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isUserMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-48 bg-black/90 rounded-lg border border-white/10 shadow-lg py-2 z-50">
                    <Link
                      to="/dashboard"
                      className="flex items-center px-4 py-2 text-white hover:bg-white/10 transition-colors"
                      onClick={() => setIsUserMenuOpen(false)}
                    >
                      <User className="w-4 h-4 mr-3" />
                      Dashboard
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="flex items-center w-full px-4 py-2 text-white hover:bg-white/10 transition-colors"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button className="bg-white text-black hover:bg-white/90 px-4 py-2 rounded-full text-sm font-medium transition-colors" onClick={openSignUpModal}>
                Sign up
            </Button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};