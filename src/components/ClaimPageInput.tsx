import React from "react";

const ClaimPageInput: React.FC = () => {
  return (
    <div className="flex w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="linkria.com/name"
        className="flex-1 rounded-l-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black text-base"
      />
      <button
        className="rounded-r-full bg-black text-white font-bold px-8 py-3 -ml-px shadow-md hover:bg-gray-900 transition-colors duration-150"
      >
        Claim Page
      </button>
    </div>
  );
};

export default ClaimPageInput; 