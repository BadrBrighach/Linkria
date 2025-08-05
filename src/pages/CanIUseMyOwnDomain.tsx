import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

const CanIUseMyOwnDomain = ({ openAuthModal, openSignUpModal }: { openAuthModal: () => void, openSignUpModal: () => void }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
      <div className="flex-1 pt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="mb-8">
            <p className="text-sm text-gray-600">Linkria</p>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
            Can I use my own domain?
          </h1>
          <p className="text-sm text-gray-500 mb-12">Last updated: March 2025</p>
          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6">
              Yes! Linkria supports custom domains, allowing you to use your own domain name for a more professional and branded experience. This feature is available to Pro and Agency plan subscribers.
            </p>
            
            <h2 className="text-2xl font-bold mb-4">How Custom Domains Work</h2>
            <p className="mb-4">
              Instead of using the default linkria.com subdomain, you can connect your own domain (like yourname.com or brand.com) to your Linkria page.
            </p>

            <h2 className="text-2xl font-bold mb-4">Setting Up Your Custom Domain</h2>
            <ol className="list-decimal pl-6 mb-6 space-y-2">
              <li>Purchase a domain from a domain registrar (GoDaddy, Namecheap, etc.)</li>
              <li>Upgrade to Linkria Pro or Agency plan</li>
              <li>Go to your Linkria dashboard</li>
              <li>Navigate to "Settings" → "Custom Domain"</li>
              <li>Enter your domain name</li>
              <li>Follow the DNS configuration instructions</li>
            </ol>

            <h2 className="text-2xl font-bold mb-4">DNS Configuration</h2>
            <p className="mb-4">
              You'll need to configure your domain's DNS settings to point to Linkria's servers:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Add a CNAME record pointing to linkria.com</li>
              <li>Or add an A record with Linkria's IP address</li>
              <li>Wait for DNS propagation (can take up to 48 hours)</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Benefits of Custom Domains</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><strong>Professional appearance:</strong> Your own domain looks more credible</li>
              <li><strong>Brand consistency:</strong> Matches your overall brand identity</li>
              <li><strong>Better memorability:</strong> Easier for followers to remember</li>
              <li><strong>SEO benefits:</strong> Can help with search engine rankings</li>
              <li><strong>Analytics control:</strong> Full control over your domain's analytics</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Requirements</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Linkria Pro or Agency subscription</li>
              <li>Own domain name</li>
              <li>Access to your domain's DNS settings</li>
              <li>Domain must be active and not expired</li>
            </ul>

            <h2 className="text-2xl font-bold mb-4">Supported Domain Types</h2>
            <p className="mb-4">
              Linkria supports most common domain extensions:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>.com, .net, .org</li>
              <li>.co, .io, .me</li>
              <li>Country-specific domains (.uk, .ca, .au, etc.)</li>
              <li>Newer extensions (.app, .blog, .store, etc.)</li>
            </ul>

            <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
              <p className="text-green-800">
                <strong>Pro Tip:</strong> Consider using a subdomain like "links.yourname.com" to keep your main domain free for other uses while still maintaining a professional appearance.
              </p>
            </div>

            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="mb-4">
              Our support team is here to help you set up your custom domain. Contact us at support@linkria.com for assistance with DNS configuration or any other questions.
            </p>
          </div>
        </div>
      </div>
      <FooterSection openAuthModal={openAuthModal} />
    </div>
  );
};

export default CanIUseMyOwnDomain; 