import React from "react";

export const Pricing: React.FC<{
  openAuthModal?: () => void;
  openSignUpModal?: () => void;
}> = () => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Free trial notice */}
      <div className="bg-[#f6f3ea] rounded-xl p-4 mb-6 text-center border border-[#ece7d8]">
        <div className="font-medium text-gray-800 mb-1">
          You are currently on a free trial
          </div>
        <div className="text-gray-600 text-sm">
          If you would like to upgrade, please add a payment method first by clicking below.
                    </div>
                  </div>
      {/* Pricing cards */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Premium Card */}
        <div className="flex-1 bg-white rounded-2xl shadow p-6 flex flex-col items-center border border-gray-200">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-semibold">Premium</span>
            <span className="bg-orange-200 text-orange-800 text-xs font-bold px-2 py-0.5 rounded-full">Popular</span>
          </div>
          <div className="text-gray-500 text-sm mb-4">For creators and creatives</div>
          <div className="text-4xl font-bold mb-1">$4 <span className="text-base font-medium text-gray-500">per month</span></div>
          <button className="w-full bg-black text-white rounded-full py-2 mt-4 mb-6 font-semibold hover:bg-gray-900 transition">
            Add Payment Method
          </button>
          <ul className="text-gray-700 text-sm space-y-2 w-full">
            <li className="flex items-center gap-2"><span>🌐</span> Custom domains</li>
            <li className="flex items-center gap-2"><span>📄</span> Unlimited pages</li>
            <li className="flex items-center gap-2"><span>🧩</span> Unlimited blocks</li>
            <li className="flex items-center gap-2"><span>✔️</span> Verification badge</li>
            <li className="flex items-center gap-2"><span>🔒</span> Private pages</li>
            <li className="flex items-center gap-2"><span>📊</span> Analytics</li>
          </ul>
          </div>
        {/* Team Card */}
        <div className="flex-1 bg-white rounded-2xl shadow p-6 flex flex-col items-center border border-gray-200">
          <div className="text-lg font-semibold mb-2">Team</div>
          <div className="text-gray-500 text-sm mb-4">For teams & agencies</div>
          <div className="text-4xl font-bold mb-1">$14 <span className="text-base font-medium text-gray-500">per month</span></div>
          <button className="w-full bg-black text-white rounded-full py-2 mt-4 mb-6 font-semibold hover:bg-gray-900 transition">
            Upgrade to Team
          </button>
          <ul className="text-gray-700 text-sm space-y-2 w-full">
            <li className="flex items-center gap-2"><span>⬆️</span> All Premium features</li>
            <li className="flex items-center gap-2"><span>👥</span> A separate team space</li>
            <li className="flex items-center gap-2"><span>🤝</span> Invite up to 5 team members</li>
            <li className="flex items-center gap-2"><span>📈</span> Google Analytics integration</li>
            <li className="flex items-center gap-2"><span>📊</span> Facebook Pixel integration</li>
          </ul>
        </div>
      </div>
    </div>
  );
};