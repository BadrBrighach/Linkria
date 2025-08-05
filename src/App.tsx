import React, { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LinkInBio from "./pages/LinkInBio";
import LinkInBioInfo from "./pages/LinkInBioInfo";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Integrations from "./pages/Integrations";
import { Pricing } from "@/components/Pricing";
import { Features } from "@/components/Features";
import AuthModal from "@/components/AuthModal";
import SignUpModal from "@/components/SignUpModal";
import Templates from "./pages/Templates";
import Learn from "./pages/Learn";
import WhatIsLinkInBio from "./pages/WhatIsLinkInBio";
import IsLinkriaFree from "./pages/IsLinkriaFree";
import HowToPutVenmoLinkInBio from "./pages/HowToPutVenmoLinkInBio";
import CanIUseMyOwnDomain from "./pages/CanIUseMyOwnDomain";
import HowToChangeLinkInBioInstagram from "./pages/HowToChangeLinkInBioInstagram";
import HowToAddLinkInBioInstagram from "./pages/HowToAddLinkInBioInstagram";
import HowToAddLinkInBioYouTube from "./pages/HowToAddLinkInBioYouTube";
import HowToAddLinkInBioTikTok from "./pages/HowToAddLinkInBioTikTok";
import Dashboard from "./pages/Dashboard";
import ProfileViewer from "./pages/ProfileViewer";
import { Header } from "@/components/Header";

const queryClient = new QueryClient();

// Error Boundary Component
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('🚨 React Error Boundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto p-6">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Refresh Page
            </button>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-4 text-left">
                <summary className="cursor-pointer text-sm text-gray-500">Error Details</summary>
                <pre className="text-xs text-red-600 mt-2 bg-red-50 p-2 rounded overflow-auto">
                  {this.state.error.toString()}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const AppContent = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [signUpOpen, setSignUpOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();
  
  const openAuthModal = () => { setSignUpOpen(false); setAuthOpen(true); };
  const closeAuthModal = () => setAuthOpen(false);
  const openSignUpModal = () => { setAuthOpen(false); setSignUpOpen(true); };
  const closeSignUpModal = () => setSignUpOpen(false);
  
  useEffect(() => {
    console.log('🚀 App is initializing...');
    // Set loading to false after a short delay to ensure everything is loaded
    const timer = setTimeout(() => {
      console.log('✅ App initialization complete');
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    console.log('⏳ Showing loading screen...');
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-black rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Linkria...</p>
        </div>
      </div>
    );
  }
  
  console.log('🎯 Rendering main app content');
  return (
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <Index openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} username={username} setUsername={setUsername} />
            </>
          } />
          <Route path="/pricing" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <Pricing openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
            </>
          } />
          <Route path="/features" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <Features openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
            </>
          } />
          <Route path="/linkria" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <LinkInBio openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
            </>
          } />
          <Route path="/link-in-bio" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <LinkInBioInfo openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
            </>
          } />
          <Route path="/terms" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <Terms openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
            </>
          } />
          <Route path="/privacy" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <Privacy openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
            </>
          } />
          <Route path="/integrations" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <Integrations openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
            </>
          } />
          <Route path="/resources" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <Integrations openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
            </>
          } />
          <Route path="/templates" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <Templates openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
            </>
          } />
          <Route path="/learn" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <Learn openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
            </>
          } />
          <Route path="/what-is-link-in-bio" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <WhatIsLinkInBio openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
            </>
          } />
          <Route path="/is-linkria-free" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <IsLinkriaFree openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
            </>
          } />
          <Route path="/how-to-put-venmo-link-in-bio" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <HowToPutVenmoLinkInBio openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
            </>
          } />
          <Route path="/can-i-use-my-own-domain" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <CanIUseMyOwnDomain openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
            </>
          } />
          <Route path="/how-to-change-link-in-bio-instagram" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <HowToChangeLinkInBioInstagram openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
            </>
          } />
          <Route path="/how-to-add-link-in-bio-instagram" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <HowToAddLinkInBioInstagram openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
            </>
          } />
          <Route path="/how-to-add-link-in-bio-youtube" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <HowToAddLinkInBioYouTube openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
            </>
          } />
          <Route path="/how-to-add-link-in-bio-tiktok" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <HowToAddLinkInBioTikTok openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
            </>
          } />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/:username" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <ProfileViewer />
            </>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={
            <>
              <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
              <NotFound />
            </>
          } />
        </Routes>
      </BrowserRouter>
      <AuthModal open={authOpen} onClose={closeAuthModal} username={username} onShowSignUp={openSignUpModal} />
      <SignUpModal open={signUpOpen} onClose={closeSignUpModal} onShowLogin={openAuthModal} />
    </TooltipProvider>
  );
};

const App = () => {
  console.log('🏗️ App component mounted');
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <AppContent />
        </AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
