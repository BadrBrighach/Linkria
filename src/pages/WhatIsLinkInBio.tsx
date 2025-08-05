import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

const WhatIsLinkInBio = ({ openAuthModal, openSignUpModal }: { openAuthModal: () => void, openSignUpModal: () => void }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
      <div className="flex-1 pt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="mb-8">
            <p className="text-sm text-gray-600">Link in Bio</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            What is a link-in-bio?
          </h1>
          <p className="text-sm text-gray-500 mb-12">Last updated: March 2025</p>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              A "link in bio" is a single URL that creators, influencers, and businesses place in their social media bio to direct followers to multiple destinations. It's a solution to the limitation that most social platforms only allow one clickable link in your profile.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">The Problem</h2>
            <p className="mb-4">
              Social media platforms like Instagram, TikTok, and Twitter only allow one clickable link in your bio. This creates a challenge when you want to share multiple links, such as:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Your website and online store</li>
              <li>Latest blog post and YouTube video</li>
              <li>Podcast episode and newsletter signup</li>
              <li>Booking page and contact form</li>
              <li>Multiple affiliate products</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">The Solution</h2>
            <p className="mb-4">
              Link-in-bio services like Linkria create a dedicated landing page where you can share multiple links from a single URL. Instead of choosing just one link for your bio, you can share them all.
            </p>

            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Create a link-in-bio page with Linkria</li>
              <li>Add all your important links to the page</li>
              <li>Customize the design to match your brand</li>
              <li>Copy your Linkria page URL</li>
              <li>Add this single URL to your social media bio</li>
              <li>Update your bio text to say "Link in bio"</li>
            </ol>

            <h2 className="text-2xl font-bold mb-4">Who Uses Link-in-Bio?</h2>
            
            <h3 className="text-xl font-semibold mb-3">Content Creators</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Share latest videos, blog posts, and podcasts</li>
              <li>Promote merchandise and affiliate products</li>
              <li>Direct to Patreon, YouTube, and other platforms</li>
              <li>Build email lists and communities</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Businesses</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Drive traffic to online stores</li>
              <li>Share product launches and sales</li>
              <li>Direct to booking pages and contact forms</li>
              <li>Promote services and consultations</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Influencers</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Share sponsored content and collaborations</li>
              <li>Promote affiliate products and partnerships</li>
              <li>Direct to exclusive content and memberships</li>
              <li>Build personal brands and communities</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Benefits of Link-in-Bio</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Share multiple links:</strong> Don't limit yourself to just one</li>
              <li><strong>Professional appearance:</strong> Looks more polished than a basic link</li>
              <li><strong>Analytics and tracking:</strong> See which links perform best</li>
              <li><strong>Easy updates:</strong> Change links without editing your bio</li>
              <li><strong>Brand consistency:</strong> Match your overall aesthetic</li>
              <li><strong>Mobile optimization:</strong> Works perfectly on all devices</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Popular Link-in-Bio Platforms</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Linkria</strong> - Professional and customizable</li>
              <li>Linktree - Simple and widely used</li>
              <li>Beacons - Great for creators</li>
              <li>Milkshake - Mobile-first design</li>
              <li>Tap.bio - Interactive elements</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <p className="text-green-800">
                <strong>Pro Tip:</strong> Linkria offers advanced features like custom domains, detailed analytics, and professional templates that make your link-in-bio page stand out from the competition.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Keep your most important link at the top</li>
              <li>Use clear, descriptive button text</li>
              <li>Update your links regularly</li>
              <li>Test all links before publishing</li>
              <li>Use high-quality images and branding</li>
              <li>Include a call-to-action in your bio</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Getting Started</h2>
            <p className="mb-4">
              Ready to create your own link-in-bio page? Sign up for Linkria today and start sharing all your important links from one professional, customizable page.
            </p>
          </div>
        </div>
      </div>
      <FooterSection openAuthModal={openAuthModal} />
    </div>
  );
};

export default WhatIsLinkInBio; 