import React, { useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '../contexts/AuthContext';

interface AuthModalProps {
  open: boolean;
  onClose: () => void;
  username: string;
  onShowSignUp: () => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ open, onClose, username, onShowSignUp }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { signInWithGoogle } = useAuth();

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      setError(null);
      await signInWithGoogle();
      // The redirect will happen automatically to Google OAuth
    } catch (error) {
      console.error('Google sign-in error:', error);
      setError('Failed to sign in with Google. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative animate-fade-in">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl font-bold focus:outline-none"
          onClick={() => { setError(null); onClose(); }}
          aria-label="Close"
        >
          ×
        </button>
        
        <h2 className="text-3xl font-bold mb-2 text-center">Welcome back</h2>
        <p className="text-gray-500 mb-6 text-center">Log in to your Linkria account</p>
        
        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-red-600 text-sm">{error}</p>
          </div>
        )}
        
        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 disabled:bg-gray-100 text-black font-semibold rounded-md py-4 text-base transition-colors mb-6 shadow border border-gray-300 disabled:cursor-not-allowed"
          style={{ boxShadow: '0 2px 8px rgba(66,133,244,0.08)' }}
        >
          {loading ? (
            <div className="w-6 h-6 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>
          ) : (
            <FcGoogle className="w-6 h-6" />
          )}
          {loading ? 'Signing in...' : 'Continue with Google'}
        </button>
        
        <div className="text-center text-sm text-gray-500">
          Don't have an account?{' '}
          <button 
            type="button" 
            className="font-medium hover:underline" 
            style={{ color: '#5E936C' }} 
            onClick={() => { setError(null); onClose(); onShowSignUp(); }}
          >
            Sign up
          </button>
        </div>
        
        <div className="mt-6 text-center text-xs text-gray-400">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </div>
      </div>
    </div>
  );
};

export default AuthModal; 