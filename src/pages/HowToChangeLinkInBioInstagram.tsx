import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

const HowToChangeLinkInBioInstagram = ({ openAuthModal, openSignUpModal }: { openAuthModal: () => void, openSignUpModal: () => void }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
      <div className="flex-1 pt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="mb-8">
            <p className="text-sm text-gray-600">Link in Bio</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            How to change link in bio on Instagram?
          </h1>
          <p className="text-sm text-gray-500 mb-12">Last updated: March 2025</p>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Instagram only allows one clickable link in your bio, which can be frustrating when you want to share multiple links. Here's how to change your link and some creative solutions:
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Method 1: Direct Link Change</h2>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Open Instagram and go to your profile</li>
              <li>Tap "Edit Profile"</li>
              <li>Find the "Website" field</li>
              <li>Delete the current link and paste your new URL</li>
              <li>Tap "Done" to save your changes</li>
            </ol>

            <h2 className="text-2xl font-bold mb-4">Method 2: Using Link-in-Bio Services</h2>
            <p className="mb-4">
              For multiple links, use a link-in-bio service like Linkria:
            </p>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Create a Linkria account</li>
              <li>Add all your important links to your Linkria page</li>
              <li>Copy your Linkria page URL</li>
              <li>Add this single URL to your Instagram bio</li>
              <li>Update your bio text to mention "Link in bio"</li>
            </ol>

            <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Keep it short:</strong> Use a short, memorable URL</li>
              <li><strong>Update regularly:</strong> Change your link based on your latest content</li>
              <li><strong>Use call-to-action:</strong> Add "Link in bio" or "Click bio" to your posts</li>
              <li><strong>Test your links:</strong> Always verify links work before posting</li>
              <li><strong>Track performance:</strong> Monitor which links get the most clicks</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Creative Link Strategies</h2>
            
            <h3 className="text-xl font-semibold mb-3">For Content Creators</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Link to your latest YouTube video</li>
              <li>Direct to your newest blog post</li>
              <li>Link to your podcast episode</li>
              <li>Connect to your online course</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">For Businesses</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Link to your online store</li>
              <li>Direct to your booking page</li>
              <li>Link to your latest product launch</li>
              <li>Connect to your newsletter signup</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">For Influencers</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Link to your affiliate products</li>
              <li>Direct to your collaboration inquiries</li>
              <li>Link to your merchandise store</li>
              <li>Connect to your Patreon or membership</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">When to Change Your Link</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>When you have new content to promote</li>
              <li>During product launches or sales</li>
              <li>For seasonal campaigns</li>
              <li>When your main focus changes</li>
              <li>To promote limited-time offers</li>
            </ul>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <p className="text-yellow-800">
                <strong>Pro Tip:</strong> Use Linkria to create a dynamic link-in-bio page that you can update without changing your Instagram bio link. This way, you can add new links anytime without editing your profile.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Common Mistakes to Avoid</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Forgetting to update your bio text when changing links</li>
              <li>Using broken or expired links</li>
              <li>Not testing links before posting</li>
              <li>Using links that don't match your post content</li>
              <li>Forgetting to remove old campaign links</li>
            </ul>
          </div>
        </div>
      </div>
      <FooterSection openAuthModal={openAuthModal} />
    </div>
  );
};

export default HowToChangeLinkInBioInstagram; 