import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

const HowToPutVenmoLinkInBio = ({ openAuthModal, openSignUpModal }: { openAuthModal: () => void, openSignUpModal: () => void }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
      <div className="flex-1 pt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="mb-8">
            <p className="text-sm text-gray-600">Linkria</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            How can I put a Venmo link in my bio?
          </h1>
          <p className="text-sm text-gray-500 mb-12">Last updated: March 2025</p>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Adding your Venmo link to your bio is a great way to receive payments from followers, clients, or friends. Here's how to do it effectively:
            </p>
            
            <h2 className="text-2xl font-bold mb-4">Step 1: Get Your Venmo Link</h2>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Open the Venmo app on your phone</li>
              <li>Tap on your profile picture in the bottom right</li>
              <li>Tap "Share" next to your username</li>
              <li>Copy the link that appears</li>
            </ol>

            <h2 className="text-2xl font-bold mb-4">Step 2: Add to Your Bio</h2>
            <p className="mb-4">
              You can add your Venmo link to various social media platforms:
            </p>
            
            <h3 className="text-xl font-semibold mb-3">Instagram</h3>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Go to your Instagram profile</li>
              <li>Tap "Edit Profile"</li>
              <li>Paste your Venmo link in the "Website" field</li>
              <li>Save your changes</li>
            </ol>

            <h3 className="text-xl font-semibold mb-3">TikTok</h3>
            <ol className="list-decimal pl-6 mb-4 space-y-2">
              <li>Open TikTok and go to your profile</li>
              <li>Tap "Edit Profile"</li>
              <li>Add your Venmo link to the "Website" field</li>
              <li>Save your changes</li>
            </ol>

            <h2 className="text-2xl font-bold mb-4">Best Practices</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Make sure your Venmo username is easy to remember</li>
              <li>Consider using a custom message like "Support me on Venmo"</li>
              <li>Test the link before posting to ensure it works</li>
              <li>Keep your Venmo profile public so people can find you</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Alternative: Use Linkria</h2>
            <p className="mb-4">
              For a more professional approach, consider using Linkria to create a custom link-in-bio page that includes your Venmo link along with other important links and content.
            </p>

            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
              <p className="text-blue-800">
                <strong>Pro Tip:</strong> Always verify that your Venmo link works by testing it on a different device or asking a friend to try it.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterSection openAuthModal={openAuthModal} />
    </div>
  );
};

export default HowToPutVenmoLinkInBio; 