import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

const HowToAddLinkInBioInstagram = ({ openAuthModal, openSignUpModal }: { openAuthModal: () => void, openSignUpModal: () => void }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
      <div className="flex-1 pt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="mb-8">
            <p className="text-sm text-gray-600">Link in Bio</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            How can I add a link in bio to Instagram?
          </h1>
          <p className="text-sm text-gray-500 mb-12">Last updated: March 2025</p>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Instagram allows you to add one clickable link in your bio, which is a powerful way to drive traffic to your website, products, or other content. Here's how to do it:
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Step-by-Step Guide</h2>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Open the Instagram app on your phone</li>
              <li>Go to your profile by tapping the profile icon</li>
              <li>Tap "Edit Profile"</li>
              <li>Find the "Website" field (it's usually near the top)</li>
              <li>Tap on the field and enter your URL</li>
              <li>Make sure to include "https://" at the beginning</li>
              <li>Tap "Done" to save your changes</li>
            </ol>

            <h2 className="text-2xl font-bold mb-4">What Links Work Best?</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Your website or blog</strong> - Drive traffic to your main site</li>
              <li><strong>Online store</strong> - Sell products directly</li>
              <li><strong>Link-in-bio page</strong> - Share multiple links (like Linkria)</li>
              <li><strong>YouTube channel</strong> - Cross-promote your videos</li>
              <li><strong>Newsletter signup</strong> - Build your email list</li>
              <li><strong>Booking page</strong> - For service-based businesses</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Using Link-in-Bio Services</h2>
            <p className="mb-4">
              Since Instagram only allows one link, many creators use link-in-bio services like Linkria to share multiple links:
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Create a Linkria account</li>
              <li>Add all your important links to your page</li>
              <li>Customize the design to match your brand</li>
              <li>Copy your Linkria page URL</li>
              <li>Add this URL to your Instagram bio</li>
            </ol>

            <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Keep it short:</strong> Use a short, memorable URL</li>
              <li><strong>Test your link:</strong> Always verify it works before posting</li>
              <li><strong>Update regularly:</strong> Change your link based on your latest content</li>
              <li><strong>Use call-to-action:</strong> Add "Link in bio" to your posts</li>
              <li><strong>Track performance:</strong> Monitor click-through rates</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Common Issues and Solutions</h2>
            
            <h3 className="text-xl font-semibold mb-3">Link Not Working?</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Make sure you included "https://" in the URL</li>
              <li>Check that the website is accessible</li>
              <li>Try copying and pasting the URL again</li>
              <li>Wait a few minutes for changes to take effect</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Link Not Clickable?</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Ensure you're using the "Website" field, not the bio text</li>
              <li>Check that your account is public</li>
              <li>Make sure you saved your changes</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Creative Ways to Use Your Bio Link</h2>
            
            <h3 className="text-xl font-semibold mb-3">For Content Creators</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Link to your latest blog post</li>
              <li>Direct to your YouTube channel</li>
              <li>Connect to your podcast</li>
              <li>Link to your online course</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">For Businesses</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Link to your online store</li>
              <li>Direct to your booking calendar</li>
              <li>Connect to your contact form</li>
              <li>Link to your latest product</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800">
                <strong>Pro Tip:</strong> Use Linkria to create a professional link-in-bio page that you can update anytime without changing your Instagram bio. This way, you can share multiple links and track which ones perform best.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Measuring Success</h2>
            <p className="mb-4">
              Track your bio link performance by:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Using link tracking tools</li>
              <li>Monitoring website analytics</li>
              <li>Tracking conversion rates</li>
              <li>Testing different call-to-actions</li>
            </ul>
          </div>
        </div>
      </div>
      <FooterSection openAuthModal={openAuthModal} />
    </div>
  );
};

export default HowToAddLinkInBioInstagram; 