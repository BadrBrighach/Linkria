import React, { useState } from 'react';
import { testGoogleOAuth } from '../lib/supabase';

const GoogleAuthTest: React.FC = () => {
  const [result, setResult] = useState<{ success: boolean; error?: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleTest = async () => {
    setIsLoading(true);
    setResult(null);
    
    try {
      const testResult = await testGoogleOAuth();
      setResult(testResult);
    } catch (error) {
      setResult({ success: false, error: 'Test failed unexpectedly' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Google OAuth Configuration Test</h3>
        
        <div className="space-y-4">
          <div>
            <p className="text-gray-600 mb-4">
              This test will verify if your Google OAuth configuration is working correctly.
            </p>
            
            <button
              onClick={handleTest}
              disabled={isLoading}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Testing...' : 'Test Google OAuth'}
            </button>
          </div>

          {result && (
            <div className={`p-4 rounded-md ${
              result.success 
                ? 'bg-green-50 border border-green-200 text-green-800' 
                : 'bg-red-50 border border-red-200 text-red-800'
            }`}>
              <h4 className="font-semibold mb-2">
                {result.success ? '✅ Test Passed' : '❌ Test Failed'}
              </h4>
              {result.error && (
                <p className="text-sm">{result.error}</p>
              )}
              {result.success && (
                <p className="text-sm">
                  Google OAuth is configured correctly. You should be redirected to Google's authentication page.
                </p>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">Setup Instructions</h4>
        <div className="text-sm text-yellow-700 space-y-2">
          <p>1. Make sure you have set up Google OAuth in your Supabase project</p>
          <p>2. Verify your environment variables are configured</p>
          <p>3. Check that your redirect URLs are properly set</p>
        </div>
      </div>
    </div>
  );
};

export default GoogleAuthTest; 