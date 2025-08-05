import { Header } from "@/components/Header";
import { FooterSection } from "@/components/FooterSection";

const Privacy = ({ openAuthModal, openSignUpModal }: { openAuthModal: () => void, openSignUpModal: () => void }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header openAuthModal={openAuthModal} openSignUpModal={openSignUpModal} />
      
      {/* Main content area */}
      <div className="flex-1 bg-white pt-20">
        <div className="max-w-4xl mx-auto px-6 py-8">
            {/* Top left Linkria text */}
            <div className="mb-8">
              <p className="text-sm text-gray-600">Linkria</p>
            </div>
            
            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              Privacy Policy
            </h1>
            
            {/* Last updated */}
            <p className="text-sm text-gray-500 mb-12">
              Last updated: March 3rd 2025
            </p>
            
            {/* Content */}
            <div className="prose prose-lg max-w-none text-gray-700">
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">1. Introduction</h2>
                <p className="mb-4">Welcome to Linkria. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy policy, or our practices with regards to your personal information, please contact us at support@linkria.</p>
                <p className="mb-4">This privacy policy aims to explain clearly what information we collect, how we use it, and what rights you have in relation to it. We hope you take some time to read through it carefully, as it is important.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">2. Information We Collect</h2>
                <p className="mb-4">We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, when you participate in activities on the website, or otherwise when you contact us.</p>
                <p className="mb-4">The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect may include:</p>
                <ul className="list-disc pl-8 space-y-2 mb-4">
                  <li>First/last name</li>
                  <li>Email address</li>
                  <li>Connected accounts (if you choose to connect third-party providers)</li>
                </ul>
                <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect or receive:</p>
                <ul className="list-disc pl-8 space-y-2 mb-4">
                  <li>To send administrative information to you. We may use your personal information to send you product, service, and new feature information and/or information about changes to our terms, conditions, and policies.</li>
                  <li>To protect our services. We may use your information as part of our efforts to keep our website safe and secure (for example, for fraud monitoring and prevention).</li>
                  <li>To enforce our terms, conditions, and policies for business purposes, to comply with legal and regulatory requirements, or in connection with our contract.</li>
                </ul>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">4. Will Your Information Be Shared With Anyone?</h2>
                <p>We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">5. Cookies and Similar Technologies</h2>
                <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">6. GDPR Rights</h2>
                <p>If you are a resident of the European Economic Area (EEA), you have certain data protection rights. We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">7. CCPA Privacy Rights</h2>
                <p>If you are a California resident, you have specific rights regarding access to personal information under the California Consumer Privacy Act (CCPA).</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">8. Children's Privacy</h2>
                <p>We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">9. Deleting Your Data</h2>
                <p>You can request the deletion of your account and all associated data by contacting us at support@linkria and including your registered email address.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">10. Changes to This Privacy Policy</h2>
                <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
              </div>

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">11. Contact Us</h2>
                <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at support@linkria.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <FooterSection openAuthModal={openAuthModal} />
    </div>
  );
};

export default Privacy; 